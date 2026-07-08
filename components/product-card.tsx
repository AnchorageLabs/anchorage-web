import { Anchor, Check, Compass } from "lucide-react";
import type { Product } from "@/data/site";
import { GraphCanvas } from "@/components/graph-canvas";
import { TerminalPanel } from "@/components/terminal-panel";

const accentVar: Record<Product["accent"], string> = {
  cartographer: "var(--cartographer)",
  anchorage: "var(--anchorage)",
};

const accentSoftVar: Record<Product["accent"], string> = {
  cartographer: "var(--cartographer-soft)",
  anchorage: "var(--anchorage-soft)",
};

const productIcon: Record<Product["accent"], typeof Compass> = {
  cartographer: Compass,
  anchorage: Anchor,
};

export function ProductCard({ product, index }: { product: Product & { missionLabel?: string }; index: number }) {
  const accent = accentVar[product.accent];
  const accentSoft = accentSoftVar[product.accent];
  const ProductIcon = productIcon[product.accent];
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

          <div className="mt-5 flex items-center gap-3.5">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border"
              style={{ borderColor: accent, color: accent, background: accentSoft }}
            >
              <ProductIcon size={24} strokeWidth={1.75} />
            </span>
            <h3 className="text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-5xl">
              {product.name}
            </h3>
          </div>
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
            <a href={product.cta.href} className="btn btn-primary" style={{ background: accent }}>
              {product.cta.label}
              <span aria-hidden>{product.cta.href.startsWith("/") ? "→" : "↗"}</span>
            </a>
          </div>
        </div>

        {/* Visual column */}
        <div className="space-y-4">
          <div
            className="relative overflow-hidden rounded-2xl border p-5"
            style={{ borderColor: "var(--border)", background: accentSoft }}
          >
            {product.accent === "cartographer" ? (
              <GraphCanvas
                className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
                density={0.9}
                interactive={false}
                palette={["#4cc9ff", "#2ee9ff", "#8b93ff"]}
              />
            ) : null}
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: accent }}>
                {product.missionLabel ?? "Mission"}
              </p>
              <p className="mt-2 text-lg font-medium leading-7 text-[var(--ink)]">{product.mission}</p>
            </div>
          </div>

          <TerminalPanel title={product.terminal.title} lines={product.terminal.lines} />

          <ul className="grid gap-2">
            {product.guarantees.map((g) => (
              <li key={g} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--muted)]">
                <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0" style={{ color: accent }} aria-hidden />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
