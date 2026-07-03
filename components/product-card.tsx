import type { Product } from "@/data/site";
import { TerminalPanel } from "@/components/terminal-panel";

const accentVar: Record<Product["accent"], string> = {
  cartographer: "var(--cartographer)",
  anchorage: "var(--anchorage)",
};

const accentSoftVar: Record<Product["accent"], string> = {
  cartographer: "var(--cartographer-soft)",
  anchorage: "var(--anchorage-soft)",
};

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const accent = accentVar[product.accent];
  const accentSoft = accentSoftVar[product.accent];
  const reversed = index % 2 === 1;

  return (
    <article
      id={product.id}
      className="panel panel-accent scroll-mt-28 overflow-hidden p-7 sm:p-9"
      style={{ ["--accent-color" as string]: accent }}
    >
      <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        {/* Copy column */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs font-semibold"
              style={{ background: accentSoft, color: accent }}
            >
              <span className="h-1.5 w-1.5 rounded-full glow-dot" style={{ background: accent, color: accent }} />
              {product.kicker}
            </span>
            <span className="chip">{product.visibility}</span>
          </div>

          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-5xl">
            {product.name}
          </h3>
          <p className="mt-3 text-lg font-medium" style={{ color: accent }}>
            {product.tagline}
          </p>
          <p className="mt-5 text-[15px] leading-7 text-[var(--muted)]">{product.summary}</p>

          <ul className="mt-8 space-y-5">
            {product.capabilities.map((cap) => (
              <li key={cap.title} className="flex gap-3.5">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ background: accent }}
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">{cap.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{cap.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={product.url} className="btn btn-primary" style={{ background: accent }}>
              View on GitHub
              <span aria-hidden>↗</span>
            </a>
            <span className="chip font-mono">
              {product.status} · {product.license}
            </span>
          </div>
        </div>

        {/* Visual column */}
        <div className="space-y-4">
          <div
            className="rounded-2xl border p-5"
            style={{ borderColor: "var(--border)", background: accentSoft }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: accent }}>
              Mission
            </p>
            <p className="mt-2 text-lg font-medium leading-7 text-[var(--ink)]">{product.mission}</p>
          </div>

          <TerminalPanel title={product.terminal.title} lines={product.terminal.lines} />

          <ul className="grid gap-2">
            {product.guarantees.map((g) => (
              <li key={g} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--muted)]">
                <span style={{ color: accent }} aria-hidden>
                  ✓
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
