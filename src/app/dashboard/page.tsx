"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";

type MeResponse = {
  user: {
    name: string;
    xp: number;
    streak: number;
    daily_goal_minutes: number;
  };
  courses: {
    id: string;
    title: string;
    subject: string;
    study_mode: string;
    exam_date: string | null;
  }[];
  dailyQueue: {
    concept_id: string;
    course_id: string;
    title: string;
    knowledge_state: string;
    mastery_score: number;
    next_review_at: string | null;
  }[];
  achievements: { code: string; title: string }[];
};

export default function DashboardPage() {
  const [data, setData] = useState<MeResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/me")
      .then(async (r) => {
        if (!r.ok) throw new Error("Could not load dashboard");
        return r.json();
      })
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <AppShell xp={data?.user.xp} streak={data?.user.streak}>
      <div className="space-y-10">
        <section>
          <p className="text-sm uppercase tracking-[0.2em] text-brand">Today</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight">
            {data ? `Welcome back, ${data.user.name.split(" ")[0]}` : "Your study hub"}
          </h1>
          <p className="mt-2 max-w-xl text-ink-soft">
            Recommended work balances due retrieval, misconception repair, and new
            material — never busywork disguised as XP.
          </p>
        </section>

        {error && <p className="text-[var(--danger)]">{error}</p>}

        <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-soft">
            <h2 className="font-display text-2xl">Daily learning queue</h2>
            <ul className="mt-4 space-y-3">
              {(data?.dailyQueue || []).length === 0 && (
                <li className="text-ink-soft">
                  No reviews due.{" "}
                  <Link href="/onboarding" className="text-brand underline">
                    Start a course
                  </Link>{" "}
                  or continue an unlocked lesson.
                </li>
              )}
              {data?.dailyQueue.map((item) => (
                <li
                  key={item.concept_id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--line)] px-4 py-3"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-ink-soft">
                      {item.knowledge_state.replaceAll("_", " ")} · mastery{" "}
                      {Math.round(item.mastery_score * 100)}%
                    </p>
                  </div>
                  <Link
                    href={`/courses/${item.course_id}`}
                    className="rounded-full bg-brand px-3 py-1.5 text-sm text-white"
                  >
                    Open
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/review"
                className="rounded-full border border-[var(--line)] px-4 py-2 text-sm"
              >
                2-minute quick start
              </Link>
              <Link
                href="/onboarding"
                className="rounded-full bg-ink px-4 py-2 text-sm text-[var(--bg)]"
              >
                Upload lecture
              </Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6">
            <h2 className="font-display text-2xl">Signals</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-ink-soft">Daily goal</dt>
                <dd>{data?.user.daily_goal_minutes ?? 15} min</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-soft">Streak</dt>
                <dd>{data?.user.streak ?? 0} days</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-soft">XP</dt>
                <dd>{data?.user.xp ?? 0}</dd>
              </div>
            </dl>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">
              Achievements
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              {(data?.achievements || []).length === 0 && (
                <li className="text-ink-soft">Earn badges for independent retrieval.</li>
              )}
              {data?.achievements.map((a) => (
                <li key={a.code}>✦ {a.title}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl">Courses</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {(data?.courses || []).map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-5 transition hover:border-brand"
              >
                <p className="text-sm text-ink-soft">{course.subject}</p>
                <p className="mt-1 font-display text-xl">{course.title}</p>
                <p className="mt-2 text-sm text-ink-soft">
                  Mode: {course.study_mode.replaceAll("_", " ")}
                  {course.exam_date ? ` · exam ${course.exam_date}` : ""}
                </p>
              </Link>
            ))}
            {!data?.courses?.length && (
              <p className="text-ink-soft">No courses yet — upload slides to begin.</p>
            )}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
