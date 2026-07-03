import { principles } from "@/data/site";

export function ProofStrip() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((point, i) => (
          <div key={point.title} className="panel panel-hover p-6">
            <span className="font-mono text-xs text-[var(--faint)]">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-lg font-semibold text-[var(--ink)]">{point.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
