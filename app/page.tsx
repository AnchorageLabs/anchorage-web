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
      <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-ink/80 bg-[var(--paper-soft)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3 group">
            <span className="grid h-10 w-10 rotate-[-3deg] place-items-center rounded-[1rem] border-2 border-ink bg-[var(--accent-fill)] font-mono text-sm font-black text-ink shadow-sketch transition-transform duration-200 group-hover:rotate-0 group-hover:scale-110">AL</span>
            <span className="text-sm font-black tracking-wide text-ink">Anchorage Labs</span>
          </a>
          <SiteNav items={nav} />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href={organization.github} className="rounded-full border-2 border-ink bg-[var(--paper)] px-4 py-2 text-sm font-bold text-ink shadow-sketch transition hover:-translate-y-0.5">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex rotate-[-1deg] items-center gap-3 rounded-full border-2 border-ink bg-[var(--paper)] px-4 py-2 text-sm font-bold text-ink shadow-sketch">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-[var(--accent)]" />
            Developer-first software lab
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
            Tools for teams that like their software clear, inspectable, and close to the metal.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-ink/70">
            We create open protocols, CLIs, automation systems, and infrastructure-oriented products for developers who care about clear contracts, inspectable workflows, and practical reliability.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#open-source" className="rounded-full border-2 border-ink bg-[var(--accent-fill)] px-6 py-3 text-sm font-black text-ink shadow-sketch transition hover:-translate-y-1">
              View open source projects
            </a>
            <a href="#systems" className="rounded-full border-2 border-ink bg-[var(--paper)] px-6 py-3 text-sm font-black text-ink shadow-sketch transition hover:-translate-y-1">
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
              <div className="mb-5 h-3 w-16 rotate-[-2deg] rounded-full border-2 border-ink bg-[var(--accent-fill)]" />
              <h3 className="text-lg font-black text-ink">{item}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-ink/65">Built with explicit boundaries, small composable tools, and a bias toward systems developers can understand and improve.</p>
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
                  <h3 className="font-mono text-lg font-black text-ink">{system.name}</h3>
                  <span className="rounded-full border-2 border-ink bg-[var(--paper)] px-3 py-1 text-xs font-bold text-ink">{system.visibility}</span>
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-ink/65">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="stack" eyebrow="Technical Stack" title="Confirmed technologies across the repositories." intro="This stack reflects technologies observed in the analyzed repositories, manifests, Dockerfiles, workflows, and project documentation.">
        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span key={item} className="rounded-full border-2 border-ink bg-[var(--paper)] px-4 py-2 font-mono text-sm font-bold text-ink shadow-sketch transition hover:-translate-y-0.5">
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
