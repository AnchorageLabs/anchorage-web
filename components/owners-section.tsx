"use client";

import { useT } from "@/components/language-provider";
import { owners as ownersData } from "@/data/site";

export function OwnersSection() {
  const t = useT();
  const focusLabel = t.labels.focus;
  const people = ownersData.map((o, i) => ({ ...o, ...t.owners[i] }));

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {people.map((owner) => (
        <article key={owner.name} className="panel panel-hover overflow-hidden p-7">
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-[var(--border-strong)]">
              <img src={owner.avatar} alt={`${owner.name} GitHub avatar`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{owner.role}</p>
                  <h3 className="mt-1.5 text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">{owner.name}</h3>
                  <p className="mt-1 text-sm text-[var(--faint)]">{owner.location}</p>
                </div>
                <div className="flex gap-2">
                  <a href={owner.github} className="chip transition hover:-translate-y-0.5 hover:text-[var(--ink)]">GitHub</a>
                  <a href={owner.linkedin} className="chip transition hover:-translate-y-0.5 hover:text-[var(--ink)]">LinkedIn</a>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{owner.summary}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                <span className="font-semibold text-[var(--ink)]">{focusLabel}:</span> {owner.focus}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {owner.signals.map((signal) => (
                  <span key={signal} className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)]">
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
