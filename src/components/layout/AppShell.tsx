"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/dashboard", label: "Today" },
  { href: "/onboarding", label: "New course" },
  { href: "/review", label: "Review" },
  { href: "/exam", label: "Exam prep" },
];

export function AppShell({
  children,
  xp,
  streak,
}: {
  children: React.ReactNode;
  xp?: number;
  streak?: number;
}) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sq-theme");
    const preferDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(preferDark);
    document.documentElement.classList.toggle("dark", preferDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("sq-theme", next ? "dark" : "light");
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/dashboard" className="font-display text-xl tracking-tight">
            Slide<span className="text-brand">Quest</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {links.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-sm transition ${
                    active
                      ? "bg-brand text-white"
                      : "text-ink-soft hover:bg-white/50 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3 text-sm">
            {typeof streak === "number" && (
              <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-ink-soft">
                {streak} day streak
              </span>
            )}
            {typeof xp === "number" && (
              <span className="rounded-full bg-[color-mix(in_oklab,var(--xp)_22%,transparent)] px-2.5 py-1 font-medium text-[color-mix(in_oklab,var(--xp)_70%,var(--ink))]">
                {xp} XP
              </span>
            )}
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-[var(--line)] px-2.5 py-1 text-ink-soft"
              aria-label="Toggle color theme"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
