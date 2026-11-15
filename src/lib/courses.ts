import { randomUUID } from "node:crypto";
import type { GeneratedCurriculum, StudyMode } from "@/lib/types";
import { sql } from "@/lib/db";

export async function persistCurriculum(args: {
  ownerId: string;
  curriculum: GeneratedCurriculum;
  studyMode: StudyMode;
  examDate?: string | null;
  sourceFilename?: string;
  document?: {
    filename: string;
    mimeType: string;
    pageCount: number;
    extractedText: string;
    pages: unknown;
  };
}) {
  const courseId = randomUUID();
  // Namespace concept ids per course so demo/sample curricula can be created repeatedly.
  const idMap = new Map(
    args.curriculum.concepts.map((c) => [c.id, `${courseId}:${c.id}`]),
  );
  const mapId = (id: string) => idMap.get(id) || `${courseId}:${id}`;

  await sql(
    `insert into courses (id, owner_id, title, subject, study_mode, exam_date, status, source_filename, concept_graph)
     values ($1,$2,$3,$4,$5,$6,'ready',$7,$8)`,
    [
      courseId,
      args.ownerId,
      args.curriculum.title,
      args.curriculum.subject,
      args.studyMode,
      args.examDate || null,
      args.sourceFilename || null,
      JSON.stringify({
        units: args.curriculum.units.map((u) => ({
          ...u,
          conceptIds: u.conceptIds.map(mapId),
        })),
        conceptCount: args.curriculum.concepts.length,
      }),
    ],
  );

  if (args.document) {
    await sql(
      `insert into documents (id, course_id, filename, mime_type, page_count, extracted_text, pages)
       values ($1,$2,$3,$4,$5,$6,$7)`,
      [
        randomUUID(),
        courseId,
        args.document.filename,
        args.document.mimeType,
        args.document.pageCount,
        args.document.extractedText,
        JSON.stringify(args.document.pages),
      ],
    );
  }

  const unitIds = new Map<string, string>();
  for (const [i, unit] of args.curriculum.units.entries()) {
    const id = randomUUID();
    unitIds.set(unit.title, id);
    await sql(
      `insert into units (id, course_id, title, sort_order) values ($1,$2,$3,$4)`,
      [id, courseId, unit.title, i],
    );
  }

  for (const concept of args.curriculum.concepts) {
    const conceptId = mapId(concept.id);
    await sql(
      `insert into concepts (
        id, course_id, unit_id, title, summary, learning_objective, why_it_matters,
        prerequisites, misconceptions, formulas, source_refs, difficulty, sort_order
      ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
      [
        conceptId,
        courseId,
        unitIds.get(concept.unitTitle) || null,
        concept.title,
        concept.summary,
        concept.learningObjective,
        concept.whyItMatters,
        JSON.stringify(concept.prerequisites.map(mapId)),
        JSON.stringify(concept.misconceptions),
        JSON.stringify(concept.formulas),
        JSON.stringify(concept.sourceRefs),
        concept.difficulty,
        concept.sortOrder,
      ],
    );

    await sql(
      `insert into concept_mastery (
        id, user_id, course_id, concept_id, knowledge_state, next_review_at
      ) values ($1,$2,$3,$4,'unlearned', null)`,
      [randomUUID(), args.ownerId, courseId, conceptId],
    );
  }

  for (const [i, lesson] of args.curriculum.lessons.entries()) {
    const id = randomUUID();
    await sql(
      `insert into lessons (id, course_id, concept_id, title, sort_order, content, unlocked)
       values ($1,$2,$3,$4,$5,$6,$7)`,
      [
        id,
        courseId,
        mapId(lesson.conceptId),
        lesson.title,
        i,
        JSON.stringify(lesson.content),
        i === 0,
      ],
    );
  }

  return courseId;
}

export async function getCourseBundle(courseId: string, userId: string) {
  const courses = await sql<{
    id: string;
    title: string;
    subject: string;
    study_mode: StudyMode;
    exam_date: string | null;
    source_filename: string | null;
    concept_graph: unknown;
  }>(
    `select id, title, subject, study_mode, exam_date, source_filename, concept_graph
     from courses where id = $1 and owner_id = $2`,
    [courseId, userId],
  );
  const course = courses[0];
  if (!course) return null;

  const units = await sql<{ id: string; title: string; sort_order: number }>(
    `select id, title, sort_order from units where course_id = $1 order by sort_order`,
    [courseId],
  );
  const concepts = await sql<Record<string, unknown>>(
    `select * from concepts where course_id = $1 order by sort_order`,
    [courseId],
  );
  const lessons = await sql<{
    id: string;
    concept_id: string;
    title: string;
    sort_order: number;
    unlocked: boolean;
    content: unknown;
  }>(
    `select id, concept_id, title, sort_order, unlocked, content
     from lessons where course_id = $1 order by sort_order`,
    [courseId],
  );
  const mastery = await sql<Record<string, unknown>>(
    `select * from concept_mastery where course_id = $1 and user_id = $2`,
    [courseId, userId],
  );
  const documents = await sql<{
    id: string;
    filename: string;
    page_count: number;
    pages: unknown;
  }>(
    `select id, filename, page_count, pages from documents where course_id = $1`,
    [courseId],
  );

  return { course, units, concepts, lessons, mastery, documents };
}
