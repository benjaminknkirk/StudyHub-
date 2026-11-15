"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";

type Bundle = {
  course: {
    id: string;
    title: string;
    subject: string;
    study_mode: string;
    exam_date: string | null;
  };
  units: { id: string; title: string; sort_order: number }[];
  concepts: {
    id: string;
    title: string;
    unit_id: string | null;
    learning_objective: string;
    sort_order: number;
  }[];
  lessons: {
    id: string;
    concept_id: string;
    title: string;
    sort_order: number;
    unlocked: boolean;
  }[];
  mastery: {
    concept_id: string;
    knowledge_state: string;
    mastery_score: number;
    independent_successes: number;
    next_review_at: string | null;
  }[];
};

export default function CoursePage() {
  const params = useParams<{ courseId: string }>();
  const [bundle, setBundle] = useState<Bundle | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!params.courseId) return;
    fetch(`/api/courses/${params.courseId}`)
      .then(async (r) => {
        if (!r.ok) throw new Error("Course not found");
        return r.json();
      })
      .then(setBundle)
      .catch((e) => setError(e.message));
  }, [params.courseId]);

  const masteryMap = useMemo(() => {
    const map = new Map<string, Bundle["mastery"][number]>();
    bundle?.mastery.forEach((m) => map.set(m.concept_id, m));
    return map;
  }, [bundle]);

  const lessonByConcept = useMemo(() => {
    const map = new Map<string, Bundle["lessons"][number]>();
    bundle?.lessons.forEach((l) => map.set(l.concept_id, l));
    return map;
  }, [bundle]);

  const coverage = useMemo(() => {
    if (!bundle?.mastery.length) return 0;
    const touched = bundle.mastery.filter((m) => m.knowledge_state !== "unlearned").length;
    return Math.round((touched / bundle.mastery.length) * 100);
  }, [bundle]);

  return (
    <AppShell>
      {error && <p className="text-[var(--danger)]">{error}</p>}
      {bundle && (
        <div className="space-y-8">
          <section className="max-w-3xl">
            <p className="text-sm text-ink-soft">{bundle.course.subject}</p>
            <h1 className="mt-1 font-display text-4xl tracking-tight">
              {bundle.course.title}
            </h1>
            <p className="mt-3 text-ink-soft">
              Interactive pathway with mastery checkpoints. Completion ≠ mastery —
              independent delayed retrieval does.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-[var(--line)] px-3 py-1">
                Mode: {bundle.course.study_mode.replaceAll("_", " ")}
              </span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1">
                Coverage touched: {coverage}%
              </span>
              {bundle.course.exam_date && (
                <span className="rounded-full border border-[var(--line)] px-3 py-1">
                  Exam {bundle.course.exam_date}
                </span>
              )}
              <Link
                href={`/exam?courseId=${bundle.course.id}`}
                className="rounded-full bg-ink px-3 py-1 text-[var(--bg)]"
              >
                Exam readiness
              </Link>
            </div>
          </section>

          <section className="overflow-x-auto pb-4">
            <div className="flex min-w-[640px] items-center gap-3">
              {bundle.lessons.map((lesson, i) => {
                const m = masteryMap.get(lesson.concept_id);
                return (
                  <div key={lesson.id} className="flex items-center gap-3">
                    <Link
                      href={lesson.unlocked ? `/learn/${lesson.id}` : "#"}
                      aria-disabled={!lesson.unlocked}
                      className={`flex h-24 w-24 flex-col items-center justify-center rounded-full border text-center transition ${
                        lesson.unlocked
                          ? "border-brand bg-brand/10 hover:bg-brand/20"
                          : "border-[var(--line)] opacity-50"
                      }`}
                    >
                      <span className="text-xs text-ink-soft">{i + 1}</span>
                      <span className="px-2 text-[11px] font-medium leading-tight">
                        {lesson.title.slice(0, 28)}
                      </span>
                      <span className="mt-1 text-[10px] uppercase tracking-wide text-brand">
                        {(m?.knowledge_state || "unlearned").replaceAll("_", " ")}
                      </span>
                    </Link>
                    {i < bundle.lessons.length - 1 && (
                      <div className="h-px w-8 bg-[var(--line)]" />
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            {bundle.units.map((unit) => {
              const concepts = bundle.concepts.filter((c) => c.unit_id === unit.id);
              return (
                <div key={unit.id}>
                  <h2 className="font-display text-2xl">{unit.title}</h2>
                  <ul className="mt-3 space-y-3">
                    {concepts.map((concept) => {
                      const lesson = lessonByConcept.get(concept.id);
                      const m = masteryMap.get(concept.id);
                      return (
                        <li
                          key={concept.id}
                          className="flex flex-wrap items-center justify-between gap-3 rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)] px-4 py-4"
                        >
                          <div className="max-w-xl">
                            <p className="font-medium">{concept.title}</p>
                            <p className="mt-1 text-sm text-ink-soft">
                              {concept.learning_objective}
                            </p>
                            <p className="mt-2 text-xs text-ink-soft">
                              {m?.knowledge_state.replaceAll("_", " ")} · score{" "}
                              {Math.round((m?.mastery_score || 0) * 100)}% · independent
                              successes {m?.independent_successes || 0}
                              {m?.next_review_at
                                ? ` · next review ${new Date(m.next_review_at).toLocaleDateString()}`
                                : ""}
                            </p>
                          </div>
                          {lesson?.unlocked ? (
                            <Link
                              href={`/learn/${lesson.id}`}
                              className="rounded-full bg-brand px-4 py-2 text-sm text-white"
                            >
                              Continue lesson
                            </Link>
                          ) : (
                            <span className="text-sm text-ink-soft">Locked</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </section>
        </div>
      )}
    </AppShell>
  );
}
