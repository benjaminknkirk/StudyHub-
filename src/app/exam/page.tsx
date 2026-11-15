"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";

function ExamInner() {
  const params = useSearchParams();
  const courseId = params.get("courseId");
  const [bundle, setBundle] = useState<{
    course: { title: string; exam_date: string | null };
    lessons: { id: string; title: string; unlocked: boolean }[];
    mastery: {
      knowledge_state: string;
      mastery_score: number;
      independent_successes: number;
      accuracy: number;
    }[];
  } | null>(null);
  const [courses, setCourses] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    fetch("/api/me")
      .then((r) => r.json())
      .then((d) => setCourses(d.courses || []));
  }, []);

  useEffect(() => {
    if (!courseId) return;
    fetch(`/api/courses/${courseId}`)
      .then((r) => r.json())
      .then(setBundle);
  }, [courseId]);

  const metrics = useMemo(() => {
    const m = bundle?.mastery || [];
    if (!m.length) {
      return {
        coverage: 0,
        practice: 0,
        independent: 0,
        retained: 0,
      };
    }
    const coverage =
      m.filter((x) => x.knowledge_state !== "unlearned").length / m.length;
    const practice = m.reduce((s, x) => s + x.accuracy, 0) / m.length;
    const independent =
      m.filter((x) => x.independent_successes > 0).length / m.length;
    const retained =
      m.filter((x) => x.knowledge_state === "retained_mastery").length /
      m.length;
    return { coverage, practice, independent, retained };
  }, [bundle]);

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand">Exam readiness</p>
          <h1 className="mt-2 font-display text-4xl">Honest assessment signals</h1>
          <p className="mt-3 text-ink-soft">
            No fake “probability of an A.” These estimates reflect demonstrated
            performance — with uncertainty.
          </p>
        </div>

        {!courseId && (
          <div className="space-y-3">
            <p className="text-sm text-ink-soft">Choose a course</p>
            {courses.map((c) => (
              <Link
                key={c.id}
                href={`/exam?courseId=${c.id}`}
                className="block rounded-2xl border border-[var(--line)] px-4 py-3 hover:border-brand"
              >
                {c.title}
              </Link>
            ))}
          </div>
        )}

        {bundle && (
          <>
            <h2 className="font-display text-2xl">{bundle.course.title}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Course coverage touched", metrics.coverage],
                ["Immediate practice accuracy", metrics.practice],
                ["Independent retrieval rate", metrics.independent],
                ["Delayed retained mastery", metrics.retained],
              ].map(([label, value]) => (
                <div
                  key={String(label)}
                  className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)] p-4"
                >
                  <p className="text-sm text-ink-soft">{label}</p>
                  <p className="mt-2 font-display text-3xl">
                    {Math.round(Number(value) * 100)}%
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-[1.5rem] border border-[var(--line)] p-5">
              <h3 className="font-medium">Unaided assessment mode</h3>
              <p className="mt-2 text-sm text-ink-soft">
                No hints, no solution previews, feedback at the end. Use unlocked
                lessons as mixed practice now; full timed exam generation expands in
                Phase 3 with richer item banks.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {bundle.lessons
                  .filter((l) => l.unlocked)
                  .slice(0, 5)
                  .map((l) => (
                    <Link
                      key={l.id}
                      href={`/learn/${l.id}`}
                      className="rounded-full border border-[var(--line)] px-3 py-1.5 text-sm"
                    >
                      {l.title}
                    </Link>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}

export default function ExamPage() {
  return (
    <Suspense fallback={<AppShell><p>Loading…</p></AppShell>}>
      <ExamInner />
    </Suspense>
  );
}
