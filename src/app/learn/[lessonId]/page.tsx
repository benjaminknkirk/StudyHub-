"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { LessonPlayer } from "@/components/learn/LessonPlayer";
import type { LessonContent } from "@/lib/types";

export default function LearnPage() {
  const params = useParams<{ lessonId: string }>();
  const [payload, setPayload] = useState<{
    lesson: {
      id: string;
      course_id: string;
      concept_id: string;
      title: string;
      content: LessonContent;
    };
    course: { title: string };
    user: { xp: number; streak: number };
  } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!params.lessonId) return;
    fetch(`/api/lessons/${params.lessonId}`)
      .then(async (r) => {
        if (!r.ok) throw new Error("Lesson not found");
        return r.json();
      })
      .then((data) => {
        const content =
          typeof data.lesson.content === "string"
            ? JSON.parse(data.lesson.content)
            : data.lesson.content;
        setPayload({
          lesson: { ...data.lesson, content },
          course: data.course,
          user: data.user,
        });
      })
      .catch((e) => setError(e.message));
  }, [params.lessonId]);

  return (
    <AppShell xp={payload?.user.xp} streak={payload?.user.streak}>
      {error && <p className="text-[var(--danger)]">{error}</p>}
      {payload && (
        <LessonPlayer
          lessonId={payload.lesson.id}
          courseId={payload.lesson.course_id}
          conceptId={payload.lesson.concept_id}
          courseTitle={payload.course.title}
          lessonTitle={payload.lesson.title}
          content={payload.lesson.content}
          initialXp={payload.user.xp}
        />
      )}
    </AppShell>
  );
}
