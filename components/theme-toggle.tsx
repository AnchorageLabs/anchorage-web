"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("anchorage-theme") as Theme | null;
    const initial = stored === "dark" || stored === "light" ? stored : "light";
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("anchorage-theme", next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border-2 border-ink bg-[var(--paper)] px-4 py-2 text-sm font-black text-ink shadow-sketch transition hover:-translate-y-0.5"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
