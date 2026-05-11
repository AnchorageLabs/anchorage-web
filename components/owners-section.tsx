import { owners } from "@/data/site";

export function OwnersSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {owners.map((owner) => (
        <article key={owner.name} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900/70 p-6 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-70" />
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-cyan-300/20 bg-cyan-300/10 shadow-glow">
              <img src={owner.avatar} alt={`${owner.name} GitHub avatar`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/80">{owner.role}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">{owner.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{owner.location}</p>
                </div>
                <div className="flex gap-2">
                  <a href={owner.github} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
                    GitHub
                  </a>
                  <a href={owner.linkedin} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-200 transition hover:border-blue-300/50 hover:bg-blue-300/10">
                    LinkedIn
                  </a>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-300">{owner.summary}</p>
              <p className="mt-4 text-sm leading-6 text-slate-500"><span className="text-slate-300">Focus:</span> {owner.focus}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {owner.signals.map((signal) => (
                  <span key={signal} className="rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-slate-300">
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
