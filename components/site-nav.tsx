"use client";

import { useEffect, useState } from "react";

interface SiteNavProps {
  items: string[];
}

export function SiteNav({ items }: SiteNavProps) {
  const [activeId, setActiveId] = useState<string>("top");

  useEffect(() => {
    const sectionIds = ["top", ...items.map((item) => item.toLowerCase().replace(" ", "-"))];

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleId = activeId;
        let maxVisibility = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibility = entry.intersectionRatio;
            if (visibility > maxVisibility) {
              maxVisibility = visibility;
              mostVisibleId = entry.target.id;
            }
          }
        });

        if (maxVisibility > 0) {
          setActiveId(mostVisibleId);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeId]);

  return (
    <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/65 md:flex">
      {items.map((item) => {
        const itemId = item.toLowerCase().replace(" ", "-");
        const isActive = activeId === itemId;

        return (
          <a
            key={item}
            href={`#${itemId}`}
            className={`relative transition ${
              isActive
                ? "text-ink after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[var(--accent)]"
                : "hover:text-ink"
            }`}
          >
            {item}
          </a>
        );
      })}
    </nav>
  );
}
