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

const GUEST = {
  id: "user:guest",
  email: "guest@slidequest.app",
  name: "Guest Learner",
};

async function ensureUser(profile: {
  id: string;
  email: string;
  name: string;
}): Promise<AppUser> {
  const existing = await sql<AppUser>(
    `select id, email, name, xp, streak, daily_goal_minutes from users where id = $1`,
    [profile.id],
  );
  if (existing[0]) return existing[0];

  await sql(
    `insert into users (id, email, name) values ($1, $2, $3)
     on conflict (id) do nothing`,
    [profile.id, profile.email, profile.name],
  );
  const created = await sql<AppUser>(
    `select id, email, name, xp, streak, daily_goal_minutes from users where id = $1`,
    [profile.id],
  );
  return (
    created[0] || {
      id: profile.id,
      email: profile.email,
      name: profile.name,
      xp: 0,
      streak: 0,
      daily_goal_minutes: 15,
    }
  );
}

export async function requireUser(request: Request): Promise<AppUser | Response> {
  const identity = await getIdentity(request);
  if (identity.verified) {
    return ensureUser({
      id: identity.sub,
      email: identity.email || "",
      name: identity.name || "Learner",
    });
  }

  // Public Vercel / non-Cursor-App hosts: allow a shared guest learner so the demo works.
  if (!process.env.CURSOR_APP_ID?.trim()) {
    return ensureUser(GUEST);
  }

  return Response.json(
    { error: "unauthorized", reason: identity.reason },
    { status: 401 },
  );
}

export async function getOptionalUser(request: Request): Promise<AppUser | null> {
  const result = await requireUser(request);
  if (result instanceof Response) return null;
  return result;
}
