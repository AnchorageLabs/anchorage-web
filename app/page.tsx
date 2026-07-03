import { Footer } from "@/components/footer";
import { HeroVisual } from "@/components/hero-visual";
import { OwnersSection } from "@/components/owners-section";
import { ProductCard } from "@/components/product-card";
import { ProofStrip } from "@/components/proof-strip";
import { Section } from "@/components/section";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { organization, products, stack } from "@/data/site";

const nav = [
  { label: "Products", id: "products" },
  { label: "About", id: "about" },
  { label: "Owners", id: "owners" },
  { label: "Stack", id: "stack" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-[var(--ink)]">
      <div className="backdrop" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--page-bg)_80%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--border-strong)] bg-[var(--surface-2)] font-mono text-xs font-bold text-[var(--accent)]">
              AL
            </span>
            <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">Anchorage Labs</span>
          </a>
          <SiteNav items={nav} />
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a href={organization.github} className="btn btn-ghost px-4 py-2 text-sm">
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] glow-dot text-[var(--accent)]" />
            Developer-first software lab
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
            The state layer of{" "}
            <span className="bg-gradient-to-r from-[var(--cartographer)] via-[var(--accent)] to-[var(--anchorage)] bg-clip-text text-transparent">
              AI software engineering
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            Anchorage Labs builds the deterministic substrate coding agents run on: a machine-queryable map of every
            repository, and a protocol-driven runtime that carries an issue all the way to a merged, deployed change.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="btn btn-primary">
              Explore the products
            </a>
            <a href={organization.github} className="btn btn-ghost">
              View on GitHub ↗
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-[var(--faint)]">
            <span>
              <span className="text-[var(--cartographer)]">●</span> Cartographer — the map
            </span>
            <span>
              <span className="text-[var(--anchorage)]">●</span> Anchorage — the runtime
            </span>
          </div>
        </div>
        <HeroVisual />
      </section>

      <ProofStrip />

      {/* Products */}
      <Section
        id="products"
        eyebrow="Products"
        title="Two products. One workflow."
        intro="Cartographer charts the ground so agents know where they are. Anchorage sequences those agents through durable workflows from issue to deploy. Together they are the map and the engine of autonomous software delivery."
      >
        <div className="space-y-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Section>

      {/* About */}
      <Section
        id="about"
        eyebrow="About"
        title="Precise systems, not demos."
        intro="Anchorage Labs is an independent, founder-led organization building useful technical products: backend systems, infrastructure, automation, and the open source primitives beneath them."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Ground truth", d: "Deterministic maps and zero-LLM indexes give agents facts instead of guesses." },
            { t: "Durable runtime", d: "Workflows survive restarts and are auditable end to end on Temporal." },
            { t: "Open-core boundary", d: "Protocol, SDK, runner, and the Cartographer engine are Apache-2.0." },
            { t: "Operator-grade", d: "Built with explicit contracts, small composable tools, and inspectable behavior." },
          ].map((item) => (
            <div key={item.t} className="panel panel-hover p-6">
              <h3 className="text-base font-semibold text-[var(--ink)]">{item.t}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Owners */}
      <Section
        id="owners"
        eyebrow="Owners"
        title="Founder-led by systems builders."
        intro="Anchorage Labs is led by Sol Soletti and Valentin Torassa Colombero, whose public work points at the same center of gravity as the organization: developer tools, backend systems, infrastructure, and automation."
      >
        <OwnersSection />
      </Section>

      {/* Stack */}
      <Section
        id="stack"
        eyebrow="Technical stack"
        title="Confirmed technologies across the repositories."
        intro="Observed in the Anchorage, Cartographer, and orchestrator repositories — manifests, Dockerfiles, workflows, and project documentation."
      >
        <div className="flex flex-wrap gap-2.5">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-sm text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--ink)]"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
