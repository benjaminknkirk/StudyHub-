"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import type {
  Confidence,
  LessonContent,
  LessonQuestion,
  LessonStep,
  SourceRef,
} from "@/lib/types";

type Props = {
  lessonId: string;
  courseId: string;
  conceptId: string;
  courseTitle: string;
  lessonTitle: string;
  content: LessonContent;
  initialXp: number;
  hearts?: number;
};

type AttemptResult = {
  correct: boolean;
  assisted: boolean;
  feedback: { headline: string; body: string; masteryNote: string };
  mastery: {
    knowledge_state: string;
    mastery_score: number;
    countsAsIndependent: boolean;
    next_review_at: string;
  };
  xpGain: number;
  user: { xp: number; streak: number };
  sourceRefs: SourceRef[];
};

export function LessonPlayer(props: Props) {
  const reduce = useReducedMotion();
  const steps = props.content.steps;
  const [index, setIndex] = useState(0);
  const [demoReveal, setDemoReveal] = useState(0);
  const [answer, setAnswer] = useState("");
  const [hintsUsed, setHintsUsed] = useState(0);
  const [revealedAnswer, setRevealedAnswer] = useState(false);
  const [confidence, setConfidence] = useState<Confidence | null>(null);
  const [result, setResult] = useState<AttemptResult | null>(null);
  const [xp, setXp] = useState(props.initialXp);
  const [busy, setBusy] = useState(false);
  const [tutorOpen, setTutorOpen] = useState(false);
  const [tutorMsg, setTutorMsg] = useState("");
  const [tutorReply, setTutorReply] = useState("");
  const [sourceOpen, setSourceOpen] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const [hearts, setHearts] = useState(props.hearts ?? 5);

  const step = steps[index];
  const progress = ((index + 1) / steps.length) * 100;

  const question = useMemo(() => {
    if (!step) return null;
    if (step.stage === "guided" || step.stage === "independent" || step.stage === "application") {
      return step.question;
    }
    return null;
  }, [step]);

  async function submitAnswer() {
    if (!question || busy) return;
    setBusy(true);
    try {
      const res = await fetch("/api/attempts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          lessonId: props.lessonId,
          conceptId: props.conceptId,
          courseId: props.courseId,
          question,
          answer,
          stage: step.stage,
          hintsUsed,
          revealedAnswer,
          confidence,
          latencyMs: Date.now() - startedAt,
        }),
      });
      const data = (await res.json()) as AttemptResult;
      setResult(data);
      setXp(data.user.xp);
      if (!data.correct && hearts > 0) setHearts((h) => h - 1);
    } finally {
      setBusy(false);
    }
  }

  function nextStep() {
    setResult(null);
    setAnswer("");
    setHintsUsed(0);
    setRevealedAnswer(false);
    setConfidence(null);
    setDemoReveal(0);
    setTutorReply("");
    setIndex((i) => Math.min(i + 1, steps.length - 1));
  }

  async function askTutor(level = hintsUsed + 1) {
    setBusy(true);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          message: tutorMsg || "Help me start without giving the full answer.",
          lessonTitle: props.lessonTitle,
          conceptTitle: props.lessonTitle,
          stage: step.stage,
          questionPrompt: question?.prompt,
          sourceExcerpt: question?.sourceRefs?.[0]?.excerpt,
          hintLevel: Math.min(4, level),
        }),
      });
      const data = await res.json();
      setTutorReply(data.reply);
      setHintsUsed((h) => Math.max(h, Math.min(4, level)));
      if (level >= 4) setRevealedAnswer(true);
    } finally {
      setBusy(false);
    }
  }

  function useBuiltinHint() {
    if (!question) return;
    const next = Math.min(question.hints.length, hintsUsed + 1);
    setHintsUsed(next);
    if (next >= question.hints.length) setRevealedAnswer(true);
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-3xl flex-col">
      <div className="mb-6 flex items-center justify-between gap-3 text-sm">
        <div>
          <p className="text-ink-soft">{props.courseTitle}</p>
          <p className="font-medium">{props.lessonTitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[color-mix(in_oklab,var(--xp)_22%,transparent)] px-2.5 py-1">
            {xp} XP
          </span>
          <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-ink-soft">
            {hearts} ♥
          </span>
        </div>
      </div>

      <div
        className="mb-6 h-2 overflow-hidden rounded-full bg-black/5 dark:bg-white/10"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full bg-brand"
          animate={{ width: `${progress}%` }}
          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.28 }}
          className="flex flex-1 flex-col rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-soft backdrop-blur sm:p-8"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {labelForStage(step.stage)}
          </p>
          <StepBody
            step={step}
            demoReveal={demoReveal}
            onRevealDemo={() => setDemoReveal((n) => n + 1)}
            answer={answer}
            setAnswer={setAnswer}
            confidence={confidence}
            setConfidence={setConfidence}
          />

          {question && hintsUsed > 0 && (
            <div className="mt-4 rounded-2xl border border-[var(--line)] bg-white/60 p-4 text-sm dark:bg-black/20">
              <p className="font-medium">Hint {hintsUsed}</p>
              <p className="mt-1 text-ink-soft">
                {question.hints[Math.min(hintsUsed, question.hints.length) - 1]}
              </p>
              {revealedAnswer && (
                <p className="mt-2 text-accent">
                  Assistance recorded — this will not count as independent mastery.
                </p>
              )}
            </div>
          )}

          {result && (
            <div
              className={`mt-5 rounded-2xl border p-4 ${
                result.correct
                  ? "border-emerald-500/30 bg-emerald-500/10"
                  : "border-rose-500/30 bg-rose-500/10"
              }`}
            >
              <p className="font-display text-xl">{result.feedback.headline}</p>
              <p className="mt-2 whitespace-pre-wrap text-sm text-ink-soft">
                {result.feedback.body}
              </p>
              <p className="mt-3 text-xs text-ink-soft">{result.feedback.masteryNote}</p>
              <p className="mt-2 text-sm">+{result.xpGain} XP</p>
            </div>
          )}

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
            {question && !result && (
              <>
                <button
                  type="button"
                  onClick={submitAnswer}
                  disabled={busy || !answer.trim()}
                  className="rounded-full bg-brand px-5 py-2.5 font-medium text-white disabled:opacity-50"
                >
                  Check
                </button>
                <button
                  type="button"
                  onClick={useBuiltinHint}
                  className="rounded-full border border-[var(--line)] px-4 py-2.5 text-sm"
                >
                  Hint
                </button>
                <button
                  type="button"
                  onClick={() => setTutorOpen((v) => !v)}
                  className="rounded-full border border-[var(--line)] px-4 py-2.5 text-sm"
                >
                  Tutor
                </button>
              </>
            )}
            {!question && step.stage !== "reflect" && (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-full bg-brand px-5 py-2.5 font-medium text-white"
              >
                Continue
              </button>
            )}
            {result && index < steps.length - 1 && (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-full bg-brand px-5 py-2.5 font-medium text-white"
              >
                Continue
              </button>
            )}
            {step.stage === "reflect" && (
              <Link
                href={`/courses/${props.courseId}`}
                className="rounded-full bg-brand px-5 py-2.5 font-medium text-white"
              >
                Back to pathway
              </Link>
            )}
            {(question?.sourceRefs?.length || 0) > 0 && (
              <button
                type="button"
                onClick={() => setSourceOpen((v) => !v)}
                className="ml-auto text-sm text-ink-soft underline-offset-2 hover:underline"
              >
                View source
              </button>
            )}
          </div>

          {sourceOpen && question?.sourceRefs?.[0] && (
            <SourcePanel source={question.sourceRefs[0]} />
          )}
          {"sourceRefs" in step && step.stage === "explain" && sourceOpen && (
            <SourcePanel source={step.sourceRefs[0]} />
          )}

          {tutorOpen && (
            <div className="mt-4 rounded-2xl border border-[var(--line)] p-4">
              <p className="text-sm font-medium">Scaffolded tutor</p>
              <textarea
                value={tutorMsg}
                onChange={(e) => setTutorMsg(e.target.value)}
                className="mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent p-3 text-sm"
                rows={2}
                placeholder="Ask for a conceptual clue, another example, or intuition…"
              />
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => askTutor(hintsUsed + 1)}
                  className="rounded-full bg-ink px-4 py-2 text-sm text-[var(--bg)]"
                >
                  Get hint
                </button>
              </div>
              {tutorReply && (
                <p className="mt-3 whitespace-pre-wrap text-sm text-ink-soft">{tutorReply}</p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function StepBody({
  step,
  demoReveal,
  onRevealDemo,
  answer,
  setAnswer,
  confidence,
  setConfidence,
}: {
  step: LessonStep;
  demoReveal: number;
  onRevealDemo: () => void;
  answer: string;
  setAnswer: (v: string) => void;
  confidence: Confidence | null;
  setConfidence: (v: Confidence) => void;
}) {
  if (step.stage === "orient") {
    return (
      <div className="space-y-4">
        <h2 className="font-display text-3xl leading-tight text-balance">{step.objective}</h2>
        <p className="text-ink-soft">{step.whyItMatters}</p>
        <p className="rounded-2xl border border-[var(--line)] bg-white/50 p-4 text-sm dark:bg-black/20">
          {step.priorConnection}
        </p>
      </div>
    );
  }
  if (step.stage === "explain") {
    return (
      <div className="space-y-4">
        <h2 className="font-display text-3xl">One essential idea</h2>
        <p className="text-lg leading-relaxed">{step.plainLanguage}</p>
        {step.preciseTerms && (
          <p className="rounded-2xl border border-[var(--line)] p-4 text-sm text-ink-soft">
            {step.preciseTerms}
          </p>
        )}
        {step.visual && (
          <div className="rounded-2xl bg-brand/10 p-4 font-medium">{step.visual.content}</div>
        )}
      </div>
    );
  }
  if (step.stage === "demonstrate") {
    return (
      <div className="space-y-4">
        <h2 className="font-display text-3xl">{step.title}</h2>
        <ol className="space-y-3">
          {step.steps.slice(0, Math.max(1, demoReveal + 1)).map((s, i) => (
            <li key={i} className="rounded-2xl border border-[var(--line)] p-4">
              <p className="text-xs uppercase tracking-wide text-brand">{s.label}</p>
              <p className="mt-1">{s.detail}</p>
            </li>
          ))}
        </ol>
        {demoReveal + 1 < step.steps.length && (
          <button
            type="button"
            onClick={onRevealDemo}
            className="rounded-full border border-[var(--line)] px-4 py-2 text-sm"
          >
            Reveal next step
          </button>
        )}
      </div>
    );
  }
  if (step.stage === "reflect") {
    return (
      <div className="space-y-4">
        <h2 className="font-display text-3xl">Lesson complete</h2>
        <p>{step.summary}</p>
        <p className="text-ink-soft">{step.strengthsPrompt}</p>
        <p className="text-ink-soft">{step.uncertaintyPrompt}</p>
        <p className="font-medium text-xp">+{step.xp} XP from this path</p>
      </div>
    );
  }
  return (
    <QuestionBlock
      question={step.question}
      answer={answer}
      setAnswer={setAnswer}
      confidence={confidence}
      setConfidence={setConfidence}
    />
  );
}

function QuestionBlock({
  question,
  answer,
  setAnswer,
  confidence,
  setConfidence,
}: {
  question: LessonQuestion;
  answer: string;
  setAnswer: (v: string) => void;
  confidence: Confidence | null;
  setConfidence: (v: Confidence) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-3xl leading-tight text-balance">{question.prompt}</h2>
      {question.choices ? (
        <div className="grid gap-2" role="radiogroup" aria-label="Answer choices">
          {question.choices.map((choice) => {
            const selected = answer === choice;
            return (
              <button
                key={choice}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setAnswer(choice)}
                className={`rounded-2xl border px-4 py-4 text-left transition ${
                  selected
                    ? "border-brand bg-brand/10"
                    : "border-[var(--line)] hover:border-brand/50"
                }`}
              >
                {choice}
              </button>
            );
          })}
        </div>
      ) : (
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={3}
          className="w-full rounded-2xl border border-[var(--line)] bg-transparent p-4"
          placeholder="Type your answer"
          aria-label="Your answer"
        />
      )}
      {question.askConfidence && (
        <div>
          <p className="mb-2 text-sm text-ink-soft">How confident are you?</p>
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["guessing", "Guessing"],
                ["somewhat", "Somewhat confident"],
                ["very", "Very confident"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setConfidence(value)}
                className={`rounded-full px-3 py-1.5 text-sm ${
                  confidence === value
                    ? "bg-ink text-[var(--bg)]"
                    : "border border-[var(--line)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SourcePanel({ source }: { source: SourceRef }) {
  return (
    <div className="mt-4 rounded-2xl border border-dashed border-[var(--line)] p-4 text-sm">
      <p className="font-medium">Source fidelity</p>
      <p className="mt-1 text-ink-soft">
        {source.filename} · page {source.page}
        {source.supplemental ? " · supplemental AI clarification" : " · from lecture material"}
      </p>
      {source.excerpt && (
        <p className="mt-2 italic text-ink-soft">“{source.excerpt}”</p>
      )}
    </div>
  );
}

function labelForStage(stage: string) {
  const map: Record<string, string> = {
    orient: "Orient",
    explain: "Explain",
    demonstrate: "Demonstrate",
    guided: "Guided practice",
    independent: "Independent retrieval",
    application: "Application",
    reflect: "Review & reflect",
  };
  return map[stage] || stage;
}
