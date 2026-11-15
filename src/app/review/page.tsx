"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";

export default function ReviewPage() {
  const [queue, setQueue] = useState<
    {
      concept_id: string;
      course_id: string;
      title: string;
      knowledge_state: string;
      mastery_score: number;
    }[]
  >([]);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    fetch("/api/me")
      .then((r) => r.json())
      .then((data) => {
        setQueue(data.dailyQueue || []);
        setXp(data.user?.xp || 0);
        setStreak(data.user?.streak || 0);
      });
  }, []);

  return (
    <AppShell xp={xp} streak={streak}>
      <div className="mx-auto max-w-2xl space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand">Spaced review</p>
          <h1 className="mt-2 font-display text-4xl">Due retrieval — not whole lessons</h1>
          <p className="mt-3 text-ink-soft">
            Two-minute quick start: open the highest-risk concept and practice one
            independent question. Assisted answers never inflate retained mastery.
          </p>
        </div>
        <ul className="space-y-3">
          {queue.length === 0 && (
            <li className="rounded-2xl border border-[var(--line)] p-4 text-ink-soft">
              Nothing due. Keep momentum with a{" "}
              <Link href="/onboarding" className="text-brand underline">
                new micro-lesson
              </Link>
              .
            </li>
          )}
          {queue.map((item, i) => (
            <li
              key={item.concept_id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-4"
            >
              <div>
                <p className="text-xs text-ink-soft">Priority {i + 1}</p>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-ink-soft">
                  {item.knowledge_state.replaceAll("_", " ")} ·{" "}
                  {Math.round(item.mastery_score * 100)}%
                </p>
              </div>
              <Link
                href={`/courses/${item.course_id}`}
                className="rounded-full bg-brand px-4 py-2 text-sm text-white"
              >
                Review
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AppShell>
  );
}
