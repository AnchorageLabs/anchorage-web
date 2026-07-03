import { organization, products } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="panel overflow-hidden p-8 sm:p-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] glow-dot text-[var(--accent)]" />
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">Anchorage Labs</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{organization.tagline} Founder-led, built in the open, and in early development.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 text-sm">
            <a href={organization.github} className="chip transition hover:-translate-y-0.5 hover:text-[var(--ink)]">GitHub org</a>
            {products.map((product) => (
              <a key={product.id} href={product.url} className="chip transition hover:-translate-y-0.5 hover:text-[var(--ink)]">
                {product.name}
              </a>
            ))}
            <a href="#top" className="chip transition hover:-translate-y-0.5 hover:text-[var(--ink)]">Back to top ↑</a>
          </div>
        </div>
        <p className="mt-8 border-t border-[var(--border)] pt-6 font-mono text-xs text-[var(--faint)]">
          © {new Date().getFullYear()} Anchorage Labs · The state layer of AI software engineering
        </p>
      </div>
    </footer>
  );
}
