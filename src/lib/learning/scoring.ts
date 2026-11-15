import type { LessonQuestion } from "@/lib/types";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9.\s%/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function scoreResponse(
  question: LessonQuestion,
  rawAnswer: string,
): { correct: boolean; matched?: string; misconception?: string } {
  const answer = normalize(rawAnswer);
  if (!answer) return { correct: false };

  if (question.misconceptionMap) {
    for (const [key, message] of Object.entries(question.misconceptionMap)) {
      if (normalize(key) === answer || answer.includes(normalize(key))) {
        return { correct: false, misconception: message };
      }
    }
  }

  for (const accepted of question.acceptedAnswers) {
    const target = normalize(accepted);
    if (!target) continue;
    if (answer === target) return { correct: true, matched: accepted };
    if (question.type === "short_answer" || question.type === "self_explain") {
      const overlap = tokenOverlap(answer, target);
      if (overlap >= 0.55 || answer.includes(target) || target.includes(answer)) {
        return { correct: true, matched: accepted };
      }
    }
    if (question.type === "numerical") {
      const a = Number(answer.replace(/%/g, ""));
      const b = Number(target.replace(/%/g, ""));
      if (!Number.isNaN(a) && !Number.isNaN(b) && Math.abs(a - b) < 1e-6) {
        return { correct: true, matched: accepted };
      }
    }
  }

  return { correct: false };
}

function tokenOverlap(a: string, b: string): number {
  const as = new Set(a.split(" ").filter(Boolean));
  const bs = new Set(b.split(" ").filter(Boolean));
  if (!as.size || !bs.size) return 0;
  let hit = 0;
  for (const t of as) if (bs.has(t)) hit += 1;
  return hit / Math.max(as.size, bs.size);
}

export function buildFeedback(args: {
  correct: boolean;
  explanation: string;
  misconception?: string;
  assisted: boolean;
}): { headline: string; body: string; masteryNote: string } {
  if (args.correct && !args.assisted) {
    return {
      headline: "Independent retrieval succeeded",
      body: args.explanation,
      masteryNote:
        "This counts toward independent mastery. Spaced review will confirm retention later.",
    };
  }
  if (args.correct && args.assisted) {
    return {
      headline: "Correct with support",
      body: args.explanation,
      masteryNote:
        "Assisted solves help learning, but do not count as independent mastery.",
    };
  }
  return {
    headline: "Let's correct this",
    body: args.misconception
      ? `${args.misconception}\n\n${args.explanation}`
      : args.explanation,
    masteryNote:
      "A different question on the same concept will follow after targeted practice.",
  };
}
