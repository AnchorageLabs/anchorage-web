import { CursorGlow } from "@/components/cursor-glow";
import { Footer } from "@/components/footer";
import { HeroVisual } from "@/components/hero-visual";
import { OwnersSection } from "@/components/owners-section";
import { ProductCard } from "@/components/product-card";
import { ProofStrip } from "@/components/proof-strip";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { SiteNav } from "@/components/site-nav";
import { aws, organization, products, stack } from "@/data/site";

const nav = [
  { label: "Products", id: "products" },
  { label: "About", id: "about" },
  { label: "Owners", id: "owners" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-[var(--ink)]">
      <div className="backdrop" />
      <CursorGlow />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--page-bg)_72%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
          <a href="#top" className="group flex items-center gap-2.5">
            <img
              src="/anchoragelabs-icon-gradient-512.png"
              alt="Anchorage Labs"
              className="h-8 w-8 rounded-lg"
              width={32}
              height={32}
            />
            <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">
              Anchorage Labs
            </span>
          </a>
          <SiteNav items={nav} />
          <a
            href={organization.github}
            className="btn btn-ghost px-4 py-2 text-sm"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
      >
        <div className="aurora" />
        <Reveal>
          <div className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] glow-dot text-[var(--accent)]" />
            Software infrastructure lab
          </div>
          <h1 className="mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--ink)] sm:text-6xl lg:text-[4.5rem]">
            The map and runtime for{" "}
            <span className="text-gradient">autonomous software delivery.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-[var(--muted)]">
            A deterministic map of every repository, and a runtime that takes an
            issue to a merged, deployed change.
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
              <span className="text-[var(--cartographer)]">●</span> Cartographer
              — the map
            </span>
            <span>
              <span className="text-[var(--anchorage)]">●</span> Anchorage — the
              runtime
            </span>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <HeroVisual />
        </Reveal>
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

      {/* Runs on AWS */}
      <section
        id="infrastructure"
        className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"
      >
        <Reveal className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF9900] glow-dot text-[#FF9900]" />
              {aws.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-[var(--ink)] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.05]">
              {aws.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              {aws.intro}
            </p>
          </div>
          <div className="panel flex items-center gap-4 px-6 py-5">
            <span className="grid place-items-center rounded-xl bg-white px-4 py-3">
              <img
                src="/png-transparent-aws-hd-logo.png"
                alt="Amazon Web Services"
                className="h-9 w-auto"
                width={90}
                height={54}
              />
            </span>
            <p className="font-mono text-xs leading-5 text-[var(--muted)]">
              Powered by
              <br />
              Amazon Web Services
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aws.services.map((service) => (
              <div key={service.name} className="panel panel-hover p-5">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF9900]" />
                  <h3 className="font-mono text-sm font-semibold text-[var(--ink)]">
                    {service.name}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-6 text-[var(--muted)]">
                  {service.role}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* About */}
      <Section
        id="about"
        eyebrow="About"
        title="Precise systems, not demos."
        intro="Anchorage Labs is an independent, founder-led organization building useful technical products: backend systems, infrastructure, automation, and the open source primitives beneath them."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Ground truth",
              d: "Deterministic maps and zero-LLM indexes give agents facts instead of guesses.",
            },
            {
              t: "Durable runtime",
              d: "AWS-native workflows survive restarts and are auditable end to end.",
            },
            {
              t: "Open-core boundary",
              d: "Protocol, SDK, runner, and the Cartographer engine are Apache-2.0.",
            },
            {
              t: "Operator-grade",
              d: "Explicit contracts, small composable tools, and inspectable behavior.",
            },
          ].map((item) => (
            <div key={item.t} className="panel panel-hover p-6">
              <h3 className="text-base font-semibold text-[var(--ink)]">
                {item.t}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {item.d}
              </p>
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
        intro="Observed in the Anchorage, Cartographer, and orchestrator repositories — manifests, Dockerfiles, CDK stacks, workflows, and project documentation."
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
