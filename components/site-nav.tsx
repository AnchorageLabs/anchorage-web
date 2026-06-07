"use client";

import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  id: string;
}

interface SiteNavProps {
  items: NavItem[];
}

export function SiteNav({ items }: SiteNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let activeSection: string | null = null;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
          break;
        }
      }

      if (activeSection) {
        setActiveId(activeSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [items]);

  return (
    <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/65 md:flex">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`transition ${
            activeId === item.id
              ? "text-ink underline decoration-[var(--accent)] decoration-3 underline-offset-4"
              : "hover:text-ink"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
