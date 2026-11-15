import Link from "next/link";

const nodes = [
  [180, 430],
  [360, 330],
  [520, 250],
  [700, 220],
  [880, 310],
  [1040, 280],
] as const;

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.28),transparent_68%)] blur-2xl" />
        <div className="absolute right-[-8rem] top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,92,38,0.22),transparent_70%)] blur-2xl" />
        <svg
          className="absolute inset-x-0 bottom-0 h-[55vh] w-full opacity-80"
          viewBox="0 0 1200 640"
          fill="none"
          aria-hidden
        >
          <path
            d="M80 520 C 220 360, 320 420, 420 300 S 620 160, 760 240 S 980 420, 1120 300"
            stroke="currentColor"
            strokeWidth="3"
            className="text-brand/40"
          />
          {nodes.map(([x, y], i) => (
            <g
              key={`${x}-${y}`}
              className="animate-rise"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <circle
                cx={x}
                cy={y}
                r="18"
                className="fill-white/80 dark:fill-[var(--surface-solid)]"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx={x} cy={y} r="6" className="fill-brand" />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-8 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="font-display text-2xl tracking-tight sm:text-3xl">
            Slide<span className="text-brand">Quest</span>
          </p>
          <Link
            href="/dashboard"
            className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-ink-soft transition hover:border-brand hover:text-brand"
          >
            Open app
          </Link>
        </div>

        <section className="mt-16 flex flex-1 flex-col justify-center gap-8 pb-28 sm:mt-24 sm:max-w-2xl">
          <h1 className="animate-rise font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
            Learn from slides like a tutor who never forgets the science.
          </h1>
          <p className="animate-rise max-w-xl text-lg text-ink-soft [animation-delay:120ms] sm:text-xl">
            Upload a lecture. Get retrieval practice, spaced review, and honest
            mastery — not passive slide flipping.
          </p>
          <div className="animate-rise flex flex-wrap gap-3 [animation-delay:220ms]">
            <Link
              href="/onboarding"
              className="animate-pulseGlow rounded-full bg-brand px-6 py-3 text-base font-medium text-white shadow-soft transition hover:bg-brand-deep"
            >
              Start learning
            </Link>
            <Link
              href="/onboarding?sample=1"
              className="rounded-full border border-[var(--line)] bg-white/50 px-6 py-3 text-base text-ink backdrop-blur dark:bg-white/5"
            >
              Try demo lecture
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
