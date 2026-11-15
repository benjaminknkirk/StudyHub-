import { randomUUID } from "node:crypto";
import { requireUser } from "@/lib/auth";
import { sql } from "@/lib/db";
import { updateMastery, xpForAttempt } from "@/lib/learning/mastery";
import { scheduleNextReview } from "@/lib/learning/scheduler";
import { buildFeedback, scoreResponse } from "@/lib/learning/scoring";
import type { Confidence, KnowledgeState, LessonQuestion } from "@/lib/types";

export async function POST(request: Request) {
  const user = await requireUser(request);
  if (user instanceof Response) return user;

  const body = await request.json();
  const {
    lessonId,
    conceptId,
    courseId,
    question,
    answer,
    stage,
    hintsUsed = 0,
    revealedAnswer = false,
    confidence,
    latencyMs,
  } = body as {
    lessonId: string;
    conceptId: string;
    courseId: string;
    question: LessonQuestion;
    answer: string;
    stage: string;
    hintsUsed?: number;
    revealedAnswer?: boolean;
    confidence?: Confidence;
    latencyMs?: number;
  };

  const assisted = Boolean(revealedAnswer) || hintsUsed >= 3;
  const scored = scoreResponse(question, String(answer || ""));
  const correct = scored.correct;
  const feedback = buildFeedback({
    correct,
    explanation: question.explanation,
    misconception: scored.misconception,
    assisted,
  });

  const existing = await sql<{
    knowledge_state: KnowledgeState;
    mastery_score: number;
    accuracy: number;
    attempt_count: number;
    independent_successes: number;
    assisted_successes: number;
    overconfidence_errors: number;
    confidence_sum: number;
    confidence_count: number;
    review_interval_days: number;
  }>(
    `select knowledge_state, mastery_score, accuracy, attempt_count,
            independent_successes, assisted_successes, overconfidence_errors,
            confidence_sum, confidence_count, review_interval_days
     from concept_mastery where user_id = $1 and concept_id = $2`,
    [user.id, conceptId],
  );

  const previous = existing[0] || {
    knowledge_state: "unlearned" as KnowledgeState,
    mastery_score: 0,
    accuracy: 0,
    attempt_count: 0,
    independent_successes: 0,
    assisted_successes: 0,
    overconfidence_errors: 0,
    confidence_sum: 0,
    confidence_count: 0,
    review_interval_days: 1,
  };

  const updated = updateMastery({
    correct,
    assisted,
    hintsUsed,
    confidence,
    previous,
  });

  const courseRows = await sql<{ exam_date: string | null }>(
    `select exam_date from courses where id = $1`,
    [courseId],
  );
  const schedule = scheduleNextReview({
    knowledgeState: updated.knowledge_state,
    reviewIntervalDays: previous.review_interval_days,
    correct,
    independent: updated.countsAsIndependent,
    examDate: courseRows[0]?.exam_date,
  });

  await sql(
    `update concept_mastery set
      knowledge_state = $1,
      mastery_score = $2,
      accuracy = $3,
      attempt_count = $4,
      independent_successes = $5,
      assisted_successes = $6,
      overconfidence_errors = $7,
      confidence_sum = $8,
      confidence_count = $9,
      hint_count = hint_count + $10,
      last_latency_ms = $11,
      last_independent_at = case when $12 then NOW() else last_independent_at end,
      next_review_at = $13,
      review_interval_days = $14,
      updated_at = NOW()
     where user_id = $15 and concept_id = $16`,
    [
      updated.knowledge_state,
      updated.mastery_score,
      updated.accuracy,
      updated.attempt_count,
      updated.independent_successes,
      updated.assisted_successes,
      updated.overconfidence_errors,
      updated.confidence_sum,
      updated.confidence_count,
      hintsUsed,
      latencyMs || null,
      updated.countsAsIndependent,
      schedule.nextReviewAt.toISOString(),
      schedule.reviewIntervalDays,
      user.id,
      conceptId,
    ],
  );

  await sql(
    `insert into attempts (
      id, user_id, course_id, concept_id, lesson_id, question_id, question_type,
      stage, response, correct, hints_used, assisted, confidence, latency_ms, feedback
    ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)`,
    [
      randomUUID(),
      user.id,
      courseId,
      conceptId,
      lessonId,
      question.id,
      question.type,
      stage,
      JSON.stringify({ answer }),
      correct,
      hintsUsed,
      assisted,
      confidence || null,
      latencyMs || null,
      JSON.stringify(feedback),
    ],
  );

  const firstIndependent =
    updated.countsAsIndependent && previous.independent_successes === 0;
  const xpGain = xpForAttempt({
    correct,
    assisted,
    stage,
    firstIndependent,
  });
  await sql(`update users set xp = xp + $1 where id = $2`, [xpGain, user.id]);
  await maybeUpdateStreak(user.id);
  await maybeGrantAchievements(user.id, updated);

  if (stage === "application" && correct) {
    await unlockNextLesson(courseId, lessonId);
  }

  const freshUser = await sql<{ xp: number; streak: number }>(
    `select xp, streak from users where id = $1`,
    [user.id],
  );

  return Response.json(
    {
      correct,
      assisted,
      feedback,
      mastery: {
        knowledge_state: updated.knowledge_state,
        mastery_score: updated.mastery_score,
        independent_successes: updated.independent_successes,
        next_review_at: schedule.nextReviewAt.toISOString(),
        countsAsIndependent: updated.countsAsIndependent,
      },
      xpGain,
      user: freshUser[0],
      sourceRefs: question.sourceRefs,
    },
    { headers: { "cache-control": "private, no-store" } },
  );
}

async function unlockNextLesson(courseId: string, lessonId: string) {
  const lessons = await sql<{ id: string; sort_order: number }>(
    `select id, sort_order from lessons where course_id = $1 order by sort_order`,
    [courseId],
  );
  const idx = lessons.findIndex((l) => l.id === lessonId);
  const next = lessons[idx + 1];
  if (next) {
    await sql(`update lessons set unlocked = true where id = $1`, [next.id]);
  }
}

async function maybeUpdateStreak(userId: string) {
  const rows = await sql<{ streak: number; streak_updated_at: string | null }>(
    `select streak, streak_updated_at from users where id = $1`,
    [userId],
  );
  const row = rows[0];
  if (!row) return;
  const today = new Date().toDateString();
  const last = row.streak_updated_at
    ? new Date(row.streak_updated_at).toDateString()
    : null;
  if (last === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const continueStreak = last === yesterday.toDateString();
  await sql(
    `update users set streak = $1, streak_updated_at = NOW() where id = $2`,
    [continueStreak ? row.streak + 1 : 1, userId],
  );
}

async function maybeGrantAchievements(
  userId: string,
  mastery: { independent_successes: number; knowledge_state: string },
) {
  const grants: { code: string; title: string }[] = [];
  if (mastery.independent_successes >= 1) {
    grants.push({
      code: "first_independent",
      title: "First independent retrieval",
    });
  }
  if (mastery.knowledge_state === "provisional_mastery") {
    grants.push({
      code: "provisional_mastery",
      title: "Provisional mastery earned",
    });
  }
  for (const g of grants) {
    await sql(
      `insert into achievements (id, user_id, code, title)
       values ($1,$2,$3,$4) on conflict (user_id, code) do nothing`,
      [randomUUID(), userId, g.code, g.title],
    );
  }
}
