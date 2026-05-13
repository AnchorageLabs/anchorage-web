import { owners } from "@/data/site";

export function OwnersSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {owners.map((owner) => (
        <article key={owner.name} className="sketch-card group relative overflow-hidden bg-[var(--paper)] p-6 transition hover:-translate-y-1">
          <div className="absolute inset-x-8 top-0 h-3 rounded-b-full border-x-2 border-b-2 border-ink bg-[var(--accent-fill)]" />
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="relative h-28 w-28 shrink-0 rotate-[-2deg] overflow-hidden rounded-3xl border-2 border-ink bg-[var(--paper)] shadow-sketch">
              <img src={owner.avatar} alt={`${owner.name} GitHub avatar`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-ink/50">{owner.role}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-ink">{owner.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-ink/50">{owner.location}</p>
                </div>
                <div className="flex gap-2">
                  <a href={owner.github} className="rounded-full border-2 border-ink bg-[var(--paper)] px-3 py-1.5 text-xs font-black text-ink shadow-sketch transition hover:-translate-y-0.5">
                    GitHub
                  </a>
                  <a href={owner.linkedin} className="rounded-full border-2 border-ink bg-[var(--paper)] px-3 py-1.5 text-xs font-black text-ink shadow-sketch transition hover:-translate-y-0.5">
                    LinkedIn
                  </a>
                </div>
              </div>
              <p className="mt-5 text-sm font-medium leading-6 text-ink/70">{owner.summary}</p>
              <p className="mt-4 text-sm font-medium leading-6 text-ink/60"><span className="font-black text-ink">Focus:</span> {owner.focus}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {owner.signals.map((signal) => (
                  <span key={signal} className="rounded-full border-2 border-ink bg-[var(--paper)] px-3 py-1 font-mono text-[11px] font-bold text-ink">
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
