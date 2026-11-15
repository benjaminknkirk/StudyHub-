import { requireUser } from "@/lib/auth";
import { generateCurriculum } from "@/lib/ai/curriculum";
import { extractDocument } from "@/lib/ai/document-intelligence";
import { persistCurriculum } from "@/lib/courses";
import { SAMPLE_SLIDE_TEXT } from "@/lib/demo/sample-course";
import type { StudyMode } from "@/lib/types";
import { sql } from "@/lib/db";

export async function GET(request: Request) {
  const user = await requireUser(request);
  if (user instanceof Response) return user;
  const courses = await sql(
    `select id, title, subject, study_mode, exam_date, status, created_at
     from courses where owner_id = $1 order by created_at desc`,
    [user.id],
  );
  return Response.json({ courses }, { headers: { "cache-control": "private, no-store" } });
}

export async function POST(request: Request) {
  const user = await requireUser(request);
  if (user instanceof Response) return user;

  const contentType = request.headers.get("content-type") || "";
  let studyMode: StudyMode = "learn_from_zero";
  let examDate: string | null = null;
  let useSample = false;
  let file: File | null = null;

  if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    studyMode = (String(form.get("studyMode") || "learn_from_zero") as StudyMode);
    examDate = form.get("examDate") ? String(form.get("examDate")) : null;
    useSample = String(form.get("useSample") || "") === "true";
    const uploaded = form.get("file");
    if (uploaded instanceof File) file = uploaded;
  } else {
    const body = await request.json();
    studyMode = body.studyMode || "learn_from_zero";
    examDate = body.examDate || null;
    useSample = Boolean(body.useSample);
  }

  let extraction;
  if (useSample || !file) {
    extraction = {
      filename: "ML_Lecture_Classification.pdf",
      mimeType: "application/pdf",
      pageCount: 20,
      fullText: SAMPLE_SLIDE_TEXT,
      pages: SAMPLE_SLIDE_TEXT.split(/(?=Slide\s+\d+)/i)
        .filter(Boolean)
        .map((text, i) => ({ page: i + 1, text: text.trim() })),
      limitations: [] as string[],
    };
  } else {
    const buffer = Buffer.from(await file.arrayBuffer());
    extraction = await extractDocument(
      buffer,
      file.name,
      file.type || "application/octet-stream",
    );
  }

  try {
    const { curriculum, usedAI, notes } = await generateCurriculum(extraction, {
      forceSample: useSample || !file,
    });

    const courseId = await persistCurriculum({
      ownerId: user.id,
      curriculum,
      studyMode,
      examDate,
      sourceFilename: extraction.filename,
      document: {
        filename: extraction.filename,
        mimeType: extraction.mimeType,
        pageCount: extraction.pageCount,
        extractedText: extraction.fullText,
        pages: extraction.pages,
      },
    });

    return Response.json(
      {
        courseId,
        title: curriculum.title,
        conceptCount: curriculum.concepts.length,
        usedAI,
        notes,
      },
      { status: 201, headers: { "cache-control": "private, no-store" } },
    );
  } catch (error) {
    console.error("course create failed", error);
    return Response.json(
      {
        error: "course_create_failed",
        message:
          error instanceof Error ? error.message : "Could not create course",
      },
      { status: 500 },
    );
  }
}
