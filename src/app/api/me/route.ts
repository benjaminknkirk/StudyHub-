import { requireUser } from "@/lib/auth";
import { sql } from "@/lib/db";
import { rankDailyQueue } from "@/lib/learning/scheduler";

export async function GET(request: Request) {
  const user = await requireUser(request);
  if (user instanceof Response) return user;

  const courses = await sql<{
    id: string;
    title: string;
    subject: string;
    study_mode: string;
    exam_date: string | null;
    created_at: string;
  }>(
    `select id, title, subject, study_mode, exam_date, created_at
     from courses where owner_id = $1 order by created_at desc`,
    [user.id],
  );

  const due = await sql<{
    concept_id: string;
    course_id: string;
    title: string;
    knowledge_state: string;
    mastery_score: number;
    next_review_at: string | null;
  }>(
    `select m.concept_id, m.course_id, c.title, m.knowledge_state, m.mastery_score, m.next_review_at
     from concept_mastery m
     join concepts c on c.id = m.concept_id
     where m.user_id = $1`,
    [user.id],
  );

  const queue = rankDailyQueue(
    due.map((d) => ({
      ...d,
      knowledge_state: d.knowledge_state as
        | "unlearned"
        | "developing"
        | "practicing"
        | "provisional_mastery"
        | "retained_mastery",
    })),
    6,
  );

  const achievements = await sql<{ code: string; title: string; earned_at: string }>(
    `select code, title, earned_at from achievements where user_id = $1 order by earned_at desc limit 12`,
    [user.id],
  );

  return Response.json(
    { user, courses, dailyQueue: queue, achievements },
    { headers: { "cache-control": "private, no-store" } },
  );
}
