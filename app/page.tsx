import { SiGithub } from "@icons-pack/react-simple-icons";
import { BentoAbout } from "@/components/bento-about";
import { CursorGlow } from "@/components/cursor-glow";
import { Footer } from "@/components/footer";
import { HeroVisual } from "@/components/hero-visual";
import { Magnetic } from "@/components/magnetic";
import { OwnersSection } from "@/components/owners-section";
import { Pipeline } from "@/components/pipeline";
import { ProductCard } from "@/components/product-card";
import { ProofStrip } from "@/components/proof-strip";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { Section } from "@/components/section";
import { SiteNav } from "@/components/site-nav";
import { WorksWith } from "@/components/works-with";
import { awsStack, organization, products, stack } from "@/data/site";

const nav = [
  { label: "Products", id: "products" },
  { label: "How it works", id: "how" },
  { label: "About", id: "about" },
  { label: "Owners", id: "owners" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-[var(--ink)]">
      <div className="backdrop" />
      <ScrollProgress />
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
            <SiGithub size={16} />
            GitHub
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-6 pb-12 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
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
            <Magnetic>
              <a href="#products" className="btn btn-primary">
                Explore the products
              </a>
            </Magnetic>
            <Magnetic>
              <a href={organization.github} className="btn btn-ghost">
                <SiGithub size={16} />
                View on GitHub
              </a>
            </Magnetic>
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

      <WorksWith />

      {/* Products */}
      <Section
        id="products"
        eyebrow="Products"
        title="Two products. One workflow."
        intro="Cartographer charts the ground so agents know where they are. Anchorage sequences those agents through durable workflows from issue to deploy. Together they are the map and the engine of autonomous software delivery."
      >
        <div className="space-y-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section
        id="how"
        eyebrow="How it works"
        title="Issue in. Merged, deployed change out."
        intro="Cartographer charts the ground so agents know where they are. Anchorage sequences those agents through durable steps — from a fresh issue to a reviewed change in production."
      >
        <Pipeline />
      </Section>

      {/* About */}
      <Section
        id="about"
        eyebrow="About"
        title="Precise systems, not demos."
        intro="Anchorage Labs is an independent, founder-led organization building useful technical products: backend systems, infrastructure, automation, and the open source primitives beneath them."
      >
        <BentoAbout />
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
        <div className="space-y-8">
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

          <div className="panel panel-accent overflow-hidden p-6 sm:p-7" style={{ ["--accent-color" as string]: "#FF9900" }}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid place-items-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface-2)] px-5 py-3.5">
                  <img
                    src="/aws-logo-white.png"
                    alt="Amazon Web Services"
                    className="h-7 w-auto"
                    width={112}
                    height={68}
                  />
                </span>
                <div>
                  <p className="text-base font-semibold text-[var(--ink)]">Built on AWS</p>
                  <p className="mt-0.5 font-mono text-xs text-[var(--muted)]">
                    Provisioned as code with AWS CDK
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {awsStack.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-sm text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[#FF9900] hover:text-[var(--ink)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9900]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
