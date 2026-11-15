import { requireUser } from "@/lib/auth";
import { sql } from "@/lib/db";

export async function GET(
  request: Request,
  context: { params: Promise<{ lessonId: string }> },
) {
  const user = await requireUser(request);
  if (user instanceof Response) return user;
  const { lessonId } = await context.params;

  const lessons = await sql<{
    id: string;
    course_id: string;
    concept_id: string;
    title: string;
    content: unknown;
    unlocked: boolean;
    owner_id: string;
  }>(
    `select l.id, l.course_id, l.concept_id, l.title, l.content, l.unlocked, c.owner_id
     from lessons l
     join courses c on c.id = l.course_id
     where l.id = $1`,
    [lessonId],
  );
  const lesson = lessons[0];
  if (!lesson || lesson.owner_id !== user.id) {
    return Response.json({ error: "not_found" }, { status: 404 });
  }

  const concepts = await sql(
    `select * from concepts where id = $1`,
    [lesson.concept_id],
  );
  const mastery = await sql(
    `select * from concept_mastery where user_id = $1 and concept_id = $2`,
    [user.id, lesson.concept_id],
  );
  const course = await sql(
    `select id, title, study_mode, exam_date from courses where id = $1`,
    [lesson.course_id],
  );

  return Response.json(
    {
      lesson,
      concept: concepts[0] || null,
      mastery: mastery[0] || null,
      course: course[0] || null,
      user: { xp: user.xp, streak: user.streak, name: user.name },
    },
    { headers: { "cache-control": "private, no-store" } },
  );
}
