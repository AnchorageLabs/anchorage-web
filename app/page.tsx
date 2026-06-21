import { Footer } from "@/components/footer";
import { HeroVisual } from "@/components/hero-visual";
import { OwnersSection } from "@/components/owners-section";
import { ProjectCard } from "@/components/project-card";
import { ProofStrip } from "@/components/proof-strip";
import { Section } from "@/components/section";
import { SiteNav } from "@/components/site-nav";
import { TerminalPanel } from "@/components/terminal-panel";
import { ThemeToggle } from "@/components/theme-toggle";
import { analysisSummary, internalSystems, openSourceProjects, organization, stack } from "@/data/site";

const nav = [
  { label: "About", id: "about" },
  { label: "Owners", id: "owners" },
  { label: "Open Source", id: "open-source" },
  { label: "Systems", id: "systems" },
  { label: "Stack", id: "stack" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] text-ink transition-colors duration-300">
      <div className="grid-noise" />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--paper-soft)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3 group">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)] bg-[var(--accent-primary)] font-mono text-sm font-heavy text-white transition-transform duration-200 group-hover:scale-110">AL</span>
            <span className="text-sm font-heavy tracking-wide text-ink">Anchorage Labs</span>
          </a>
          <SiteNav items={nav} />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href={organization.github} className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold text-ink transition hover:bg-[var(--bg-tertiary)]">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold text-ink">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)]" />
            Developer-first software lab
          </div>
          <h1 className="max-w-4xl text-5xl font-heavy tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl">
            Tools for teams that like their software clear, inspectable, and close to the metal.
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-text-secondary">
            Ship software end to end, autonomously.
          </p>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-text-secondary">
            We create open protocols, CLIs, automation systems, and infrastructure-oriented products for developers who care about clear contracts, inspectable workflows, and practical reliability.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#open-source" className="rounded-lg border border-[var(--border)] bg-[var(--accent-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0860ca]">
              View open source projects
            </a>
            <a href="#systems" className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[var(--bg-tertiary)]">
              See the systems
            </a>
          </div>
        </div>
        <HeroVisual />
      </section>

      <ProofStrip />

      <Section id="about" eyebrow="About" title="Precise software systems, not demos." intro="Anchorage Labs is an independent organization focused on useful technical products: backend systems, infrastructure, automation, developer tools, and open source primitives.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Clear protocols", "Auditable automation", "Developer ergonomics", "Operational discipline"].map((item) => (
            <div key={item} className="sketch-card bg-[var(--paper)] p-6">
              <div className="mb-5 h-1 w-16 rounded-full bg-[var(--accent-primary)]" />
              <h3 className="text-lg font-heavy text-ink">{item}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-text-secondary">Built with explicit boundaries, small composable tools, and a bias toward systems developers can understand and improve.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="owners" eyebrow="Owners" title="Founder-led by builders with systems instincts." intro="Anchorage Labs is led by Sol Soletti and Valentin Torassa Colombero. Their public work points toward the same center of gravity as the organization: developer tools, backend systems, infrastructure, automation, and practical open source software.">
        <OwnersSection />
      </Section>

      <Section id="open-source" eyebrow="Open Source" title="Tools in progress for developers and maintainers." intro="The public portfolio is early, technical, and intentionally focused: automation protocols, contributor onboarding, changelog discipline, and portable development environments.">
        <div className="grid gap-6 lg:grid-cols-3">
          {openSourceProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section id="systems" eyebrow="Internal Systems / Labs" title="An open-core boundary with private orchestration." intro="Anchorage Labs separates public protocols and reference tooling from private workflow composition and organizational strategy. The website describes capabilities without exposing private implementation details.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <TerminalPanel lines={analysisSummary} />
          <div className="space-y-4">
            {internalSystems.map((system) => (
              <div key={system.name} className="sketch-card bg-[var(--paper)] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-mono text-lg font-heavy text-ink">{system.name}</h3>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 text-xs font-semibold text-text-secondary">{system.visibility}</span>
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-text-secondary">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="stack" eyebrow="Technical Stack" title="Confirmed technologies across the repositories." intro="This stack reflects technologies observed in the analyzed repositories, manifests, Dockerfiles, workflows, and project documentation.">
        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2 font-mono text-sm font-semibold text-text-secondary transition hover:bg-[var(--bg-tertiary)]">
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
