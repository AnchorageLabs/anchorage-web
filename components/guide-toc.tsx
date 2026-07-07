"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; label: string };

export function GuideToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, [items]);

  return (
    <nav className="sticky top-24 hidden lg:block" aria-label="On this page">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--faint)]">
        On this page
      </p>
      <ol className="space-y-1 border-l border-[var(--border)]">
        {items.map((item, i) => {
          const active = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`-ml-px flex items-center gap-2.5 border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                  active
                    ? "border-[var(--accent)] text-[var(--ink)]"
                    : "border-transparent text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                <span className="font-mono text-[11px] text-[var(--faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
