import type { KnowledgeState } from "@/lib/types";

const BASE_INTERVALS = [1, 3, 7, 14, 30];

export type ScheduleInput = {
  knowledgeState: KnowledgeState;
  reviewIntervalDays: number;
  correct: boolean;
  independent: boolean;
  examDate?: string | null;
  difficulty?: number;
};

export type ScheduleResult = {
  nextReviewAt: Date;
  reviewIntervalDays: number;
};

/** Spaced repetition heuristic: 1/3/7/14/30 day starts, adjusted by performance. */
export function scheduleNextReview(input: ScheduleInput): ScheduleResult {
  let interval = input.reviewIntervalDays || 1;

  if (input.correct && input.independent) {
    const nextBase =
      BASE_INTERVALS.find((d) => d > interval) ??
      Math.round(interval * 1.8);
    interval = nextBase;
    if ((input.difficulty ?? 0.5) > 0.7) interval = Math.max(1, interval * 0.85);
  } else if (input.correct && !input.independent) {
    interval = Math.max(1, interval * 0.7);
  } else {
    interval = Math.max(0.5, interval * 0.4);
  }

  if (
    input.knowledgeState === "unlearned" ||
    input.knowledgeState === "developing"
  ) {
    interval = Math.min(interval, 1);
  }

  const next = new Date();
  next.setTime(next.getTime() + interval * 24 * 60 * 60 * 1000);

  if (input.examDate) {
    const exam = new Date(input.examDate);
    const daysToExam =
      (exam.getTime() - Date.now()) / (24 * 60 * 60 * 1000);
    if (daysToExam > 0 && daysToExam < interval) {
      // Pull review earlier before exams without flooding the same day.
      const pull = Math.max(0.5, daysToExam * 0.4);
      next.setTime(Date.now() + pull * 24 * 60 * 60 * 1000);
      interval = pull;
    }
  }

  return { nextReviewAt: next, reviewIntervalDays: interval };
}

export function rankDailyQueue<
  T extends {
    next_review_at: string | Date | null;
    mastery_score: number;
    knowledge_state: KnowledgeState;
    importance?: number;
  },
>(items: T[], limit = 8): T[] {
  const now = Date.now();
  return [...items]
    .map((item) => {
      const due = item.next_review_at
        ? new Date(item.next_review_at).getTime()
        : now;
      const overdueHours = Math.max(0, (now - due) / 3600000);
      const forgetting =
        item.knowledge_state === "provisional_mastery" ||
        item.knowledge_state === "practicing"
          ? 1.2
          : 1;
      const score =
        overdueHours * forgetting +
        (1 - item.mastery_score) * 10 +
        (item.importance ?? 1) * 2;
      return { item, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.item);
}
