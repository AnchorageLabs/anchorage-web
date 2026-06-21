import { owners } from "@/data/site";

export function OwnersSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {owners.map((owner) => (
        <article key={owner.name} className="sketch-card group relative overflow-hidden bg-[var(--paper)] p-6">
          <div className="absolute inset-x-0 top-0 h-1 bg-[var(--accent-primary)]" />
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--paper)]">
              <img src={owner.avatar} alt={`${owner.name} GitHub avatar`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary">{owner.role}</p>
                  <h3 className="mt-2 text-2xl font-heavy tracking-[-0.02em] text-ink">{owner.name}</h3>
                  <p className="mt-1 text-sm font-medium text-text-secondary">{owner.location}</p>
                </div>
                <div className="flex gap-2">
                  <a href={owner.github} className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-semibold text-ink transition hover:bg-[var(--bg-tertiary)]">
                    GitHub
                  </a>
                  <a href={owner.linkedin} className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-semibold text-ink transition hover:bg-[var(--bg-tertiary)]">
                    LinkedIn
                  </a>
                </div>
              </div>
              <p className="mt-5 text-sm font-medium leading-6 text-text-secondary">{owner.summary}</p>
              <p className="mt-4 text-sm font-medium leading-6 text-text-secondary"><span className="font-semibold text-ink">Focus:</span> {owner.focus}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {owner.signals.map((signal) => (
                  <span key={signal} className="rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 font-mono text-[11px] font-semibold text-text-secondary">
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
