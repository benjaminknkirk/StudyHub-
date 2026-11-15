import { requireUser } from "@/lib/auth";
import { getCourseBundle } from "@/lib/courses";

export async function GET(
  request: Request,
  context: { params: Promise<{ courseId: string }> },
) {
  const user = await requireUser(request);
  if (user instanceof Response) return user;
  const { courseId } = await context.params;
  const bundle = await getCourseBundle(courseId, user.id);
  if (!bundle) {
    return Response.json({ error: "not_found" }, { status: 404 });
  }
  return Response.json(bundle, {
    headers: { "cache-control": "private, no-store" },
  });
}
