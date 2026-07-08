"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { BentoAbout } from "@/components/bento-about";
import { CursorGlow } from "@/components/cursor-glow";
import { Footer } from "@/components/footer";
import { HeroVisual } from "@/components/hero-visual";
import { LangToggle } from "@/components/lang-toggle";
import { useT } from "@/components/language-provider";
import { Magnetic } from "@/components/magnetic";
import { OwnersSection } from "@/components/owners-section";
import { Pipeline } from "@/components/pipeline";
import { ProductCard } from "@/components/product-card";
import { ProofStrip } from "@/components/proof-strip";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { Section } from "@/components/section";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { WorksWith } from "@/components/works-with";
import { awsStack, organization, products, stack } from "@/data/site";

export default function Home() {
  const t = useT();
  const mergedProducts = products.map((p, i) => ({
    ...p,
    ...t.products[i],
    missionLabel: t.labels.mission,
    cta: { href: p.cta.href, label: t.products[i].ctaLabel },
  }));

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
            <span className="hidden whitespace-nowrap text-sm font-semibold tracking-tight text-[var(--ink)] sm:inline">
              Anchorage Labs
            </span>
          </a>
          <SiteNav items={t.nav} />
          <div className="flex items-center gap-2.5">
            <LangToggle />
            <ThemeToggle />
            <a
              href={organization.github}
              aria-label="GitHub"
              className="hidden h-9 w-9 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-2)] text-[var(--muted)] transition hover:-translate-y-0.5 hover:text-[var(--ink)] md:grid"
            >
              <SiGithub size={16} />
            </a>
            <a href="/cartographer" className="btn btn-ghost !hidden px-4 py-2 text-sm md:!inline-flex">
              {t.install}
            </a>
            <a
              href="https://app.anchoragelabs.dev"
              className="btn btn-primary px-4 py-2 text-sm"
            >
              {t.openApp}
              <span aria-hidden>↗</span>
            </a>
          </div>
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
            {t.hero.badge}
          </div>
          <h1 className="mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--ink)] sm:text-6xl lg:text-[4.5rem]">
            {t.hero.titleLead}
            <span className="text-gradient">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-[var(--muted)]">{t.hero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Magnetic>
              <a href="#products" className="btn btn-primary">
                {t.hero.ctaProducts}
              </a>
            </Magnetic>
            <Magnetic>
              <a href={organization.github} className="btn btn-ghost">
                <SiGithub size={16} />
                {t.hero.ctaGithub}
              </a>
            </Magnetic>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-[var(--faint)]">
            <span>
              <span className="text-[var(--cartographer)]">●</span> {t.hero.legendCartographer}
            </span>
            <span>
              <span className="text-[var(--anchorage)]">●</span> {t.hero.legendAnchorage}
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
        eyebrow={t.sections.products.eyebrow}
        title={t.sections.products.title}
        intro={t.sections.products.intro}
      >
        <div className="space-y-5">
          {mergedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" eyebrow={t.sections.how.eyebrow} title={t.sections.how.title} intro={t.sections.how.intro}>
        <Pipeline />
      </Section>

      {/* About */}
      <Section id="about" eyebrow={t.sections.about.eyebrow} title={t.sections.about.title} intro={t.sections.about.intro}>
        <BentoAbout />
      </Section>

      {/* Owners */}
      <Section id="owners" eyebrow={t.sections.owners.eyebrow} title={t.sections.owners.title} intro={t.sections.owners.intro}>
        <OwnersSection />
      </Section>

      {/* Stack */}
      <Section id="stack" eyebrow={t.sections.stack.eyebrow} title={t.sections.stack.title} intro={t.sections.stack.intro}>
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
                    className="aws-logo-on-dark h-7 w-auto"
                    width={112}
                    height={68}
                  />
                  <img
                    src="/png-transparent-aws-hd-logo.png"
                    alt="Amazon Web Services"
                    className="aws-logo-on-light h-7 w-auto"
                    width={112}
                    height={68}
                  />
                </span>
                <div>
                  <p className="text-base font-semibold text-[var(--ink)]">{t.aws.title}</p>
                  <p className="mt-0.5 font-mono text-xs text-[var(--muted)]">{t.aws.subtitle}</p>
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
