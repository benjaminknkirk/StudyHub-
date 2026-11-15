# SlideQuest

Science-based AI learning platform that turns uploaded lecture slides into interactive, retrieval-driven lessons.

## Mission

Maximize durable, independently usable knowledge per minute of study — not XP theater.

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- Postgres via `DATABASE_URL` (PGlite locally)
- Optional OpenAI for richer curriculum + tutor (`OPENAI_API_KEY`)
- Cursor app identity for private/team viewers

## Core loop

Orient → Explain → Demonstrate → Guided practice → Independent retrieval → Application → Reflect

Mastery distinguishes assisted solves from independent successes and schedules spaced review (1 / 3 / 7 / 14 / 30 day heuristic, performance-adjusted).

## Develop

```bash
npm install
env -u DATABASE_URL npm run dev
```

Open [http://localhost:3000](http://localhost:3000), then **Try demo lecture** for the curated ML classification pathway (works without an API key).

## Scripts

- `npm run dev` — local server (uses in-memory PGlite when `DATABASE_URL` is unset)
- `npm run build` — production build + migrations when `DATABASE_URL` is set
- `npm run lint` — ESLint

## Product phases

1. **Core learning engine** (this MVP): upload → pathway → adaptive lesson → progress
2. **Adaptive learning**: richer knowledge tracing, interleaving, misconception graphs
3. **Engagement & exam prep**: deeper analytics, timed unaided exams, achievements
