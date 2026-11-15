import type { Confidence, KnowledgeState } from "@/lib/types";

export type MasteryUpdateInput = {
  correct: boolean;
  assisted: boolean;
  hintsUsed: number;
  confidence?: Confidence | null;
  previous: {
    knowledge_state: KnowledgeState;
    mastery_score: number;
    accuracy: number;
    attempt_count: number;
    independent_successes: number;
    assisted_successes: number;
    overconfidence_errors: number;
    confidence_sum: number;
    confidence_count: number;
  };
};

export type MasteryUpdateResult = {
  knowledge_state: KnowledgeState;
  mastery_score: number;
  accuracy: number;
  attempt_count: number;
  independent_successes: number;
  assisted_successes: number;
  overconfidence_errors: number;
  confidence_sum: number;
  confidence_count: number;
  countsAsIndependent: boolean;
};

/** Independent mastery requires unaided success. Assisted solves never promote retained mastery. */
export function updateMastery(input: MasteryUpdateInput): MasteryUpdateResult {
  const { previous, correct, assisted, hintsUsed, confidence } = input;
  const countsAsIndependent = correct && !assisted && hintsUsed === 0;
  const attempt_count = previous.attempt_count + 1;
  const independent_successes =
    previous.independent_successes + (countsAsIndependent ? 1 : 0);
  const assisted_successes =
    previous.assisted_successes + (correct && !countsAsIndependent ? 1 : 0);

  const correctCount =
    previous.accuracy * previous.attempt_count + (correct ? 1 : 0);
  const accuracy = correctCount / attempt_count;

  let mastery_score = previous.mastery_score;
  if (countsAsIndependent) mastery_score = Math.min(1, mastery_score + 0.18);
  else if (correct && assisted) mastery_score = Math.min(1, mastery_score + 0.05);
  else if (!correct) mastery_score = Math.max(0, mastery_score - 0.12);

  let overconfidence_errors = previous.overconfidence_errors;
  let confidence_sum = previous.confidence_sum;
  let confidence_count = previous.confidence_count;
  if (confidence) {
    const map = { guessing: 0.2, somewhat: 0.6, very: 0.95 } as const;
    confidence_sum += map[confidence];
    confidence_count += 1;
    if (confidence === "very" && !correct) overconfidence_errors += 1;
  }

  const knowledge_state = deriveKnowledgeState({
    previous: previous.knowledge_state,
    mastery_score,
    independent_successes,
    attempt_count,
    countsAsIndependent,
    correct,
  });

  return {
    knowledge_state,
    mastery_score,
    accuracy,
    attempt_count,
    independent_successes,
    assisted_successes,
    overconfidence_errors,
    confidence_sum,
    confidence_count,
    countsAsIndependent,
  };
}

function deriveKnowledgeState(args: {
  previous: KnowledgeState;
  mastery_score: number;
  independent_successes: number;
  attempt_count: number;
  countsAsIndependent: boolean;
  correct: boolean;
}): KnowledgeState {
  const {
    previous,
    mastery_score,
    independent_successes,
    attempt_count,
    countsAsIndependent,
    correct,
  } = args;

  if (previous === "retained_mastery" && countsAsIndependent) {
    return "retained_mastery";
  }
  if (previous === "provisional_mastery" && countsAsIndependent) {
    // Delayed independent success upgrades to retained (caller schedules delay).
    return "retained_mastery";
  }
  if (independent_successes >= 2 && mastery_score >= 0.7) {
    return "provisional_mastery";
  }
  if (independent_successes >= 1 || (correct && mastery_score >= 0.4)) {
    return "practicing";
  }
  if (attempt_count > 0) return "developing";
  return "unlearned";
}

export function xpForAttempt(args: {
  correct: boolean;
  assisted: boolean;
  stage: string;
  firstIndependent: boolean;
}): number {
  if (!args.correct) return 2;
  if (args.assisted) return 8;
  if (args.firstIndependent) return 25;
  if (args.stage === "application") return 20;
  if (args.stage === "independent") return 16;
  return 12;
}
