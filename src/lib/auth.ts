import { getIdentity } from "../../cursor/identity";
import { sql } from "@/lib/db";

export type AppUser = {
  id: string;
  email: string;
  name: string;
  xp: number;
  streak: number;
  daily_goal_minutes: number;
};

export async function requireUser(request: Request): Promise<AppUser | Response> {
  const identity = await getIdentity(request);
  if (!identity.verified) {
    return Response.json(
      { error: "unauthorized", reason: identity.reason },
      { status: 401 },
    );
  }

  const existing = await sql<AppUser>(
    `select id, email, name, xp, streak, daily_goal_minutes from users where id = $1`,
    [identity.sub],
  );
  if (existing[0]) return existing[0];

  await sql(
    `insert into users (id, email, name) values ($1, $2, $3)
     on conflict (id) do nothing`,
    [identity.sub, identity.email || "", identity.name || "Learner"],
  );
  const created = await sql<AppUser>(
    `select id, email, name, xp, streak, daily_goal_minutes from users where id = $1`,
    [identity.sub],
  );
  return (
    created[0] || {
      id: identity.sub,
      email: identity.email || "",
      name: identity.name || "Learner",
      xp: 0,
      streak: 0,
      daily_goal_minutes: 15,
    }
  );
}

export async function getOptionalUser(request: Request): Promise<AppUser | null> {
  const result = await requireUser(request);
  if (result instanceof Response) return null;
  return result;
}
