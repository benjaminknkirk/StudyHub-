"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import type { StudyMode } from "@/lib/types";

const modes: { id: StudyMode; title: string; body: string }[] = [
  {
    id: "learn_from_zero",
    title: "Learn From Zero",
    body: "Clear instruction, worked examples, then gradual independence.",
  },
  {
    id: "quick_review",
    title: "Quick Review",
    body: "Retrieval-first. Minimal lecture, targeted gap filling.",
  },
  {
    id: "exam_prep",
    title: "Exam Prep",
    body: "Mixed practice, diagnostics, and a countdown to your exam date.",
  },
  {
    id: "deep_understanding",
    title: "Deep Understanding",
    body: "Why-questions, assumptions, transfer, and comparative reasoning.",
  },
];

function OnboardingForm() {
  const router = useRouter();
  const params = useSearchParams();
  const preferSample = params.get("sample") === "1";
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<StudyMode>("learn_from_zero");
  const [examDate, setExamDate] = useState("");
  const [useSample, setUseSample] = useState(preferSample);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  const canSubmit = useMemo(
    () => useSample || Boolean(file),
    [useSample, file],
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || busy) return;
    setBusy(true);
    setError("");
    try {
      const form = new FormData();
      form.set("studyMode", mode);
      if (examDate) form.set("examDate", examDate);
      form.set("useSample", useSample ? "true" : "false");
      if (file && !useSample) form.set("file", file);
      const res = await fetch("/api/courses", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || data.error || "Failed to create course");
      }
      setNotes(data.notes || []);
      router.push(`/courses/${data.courseId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setBusy(false);
      return;
    }
    setBusy(false);
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-brand">Onboarding</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">
          Upload a lecture. Start learning in minutes.
        </h1>
        <p className="mt-3 text-ink-soft">
          SlideQuest extracts concepts, builds a pathway, and opens an adaptive
          micro-lesson — not a wall of regenerated slides.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <label className="block rounded-[1.5rem] border border-dashed border-[var(--line)] bg-[var(--surface)] p-6">
            <span className="text-sm font-medium">Lecture file (PDF / notes)</span>
            <input
              type="file"
              accept=".pdf,.txt,.md,.ppt,.pptx,application/pdf,text/plain"
              className="mt-3 block w-full text-sm"
              onChange={(e) => {
                setFile(e.target.files?.[0] || null);
                setUseSample(false);
              }}
            />
          </label>

          <label className="flex items-start gap-3 rounded-2xl border border-[var(--line)] p-4">
            <input
              type="checkbox"
              checked={useSample}
              onChange={(e) => setUseSample(e.target.checked)}
              className="mt-1"
            />
            <span>
              <span className="font-medium">Use demo ML classification lecture</span>
              <span className="mt-1 block text-sm text-ink-soft">
                Fully interactive pathway with worked examples and retrieval — works
                offline from API keys.
              </span>
            </span>
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            {modes.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={`rounded-2xl border p-4 text-left transition ${
                  mode === m.id
                    ? "border-brand bg-brand/10"
                    : "border-[var(--line)] bg-[var(--surface)]"
                }`}
              >
                <p className="font-medium">{m.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{m.body}</p>
              </button>
            ))}
          </div>

          {mode === "exam_prep" && (
            <label className="block text-sm">
              Exam date
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent px-3 py-2"
              />
            </label>
          )}

          {error && <p className="text-sm text-[var(--danger)]">{error}</p>}
          {notes.length > 0 && (
            <ul className="text-sm text-ink-soft">
              {notes.map((n) => (
                <li key={n}>• {n}</li>
              ))}
            </ul>
          )}

          <button
            type="submit"
            disabled={!canSubmit || busy}
            className="rounded-full bg-brand px-6 py-3 font-medium text-white disabled:opacity-50"
          >
            {busy ? "Building pathway…" : "Create course"}
          </button>
        </form>
      </div>
    </AppShell>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<AppShell><p>Loading…</p></AppShell>}>
      <OnboardingForm />
    </Suspense>
  );
}
