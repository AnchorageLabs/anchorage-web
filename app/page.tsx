import { CodeShowcase } from "@/components/code-showcase";
import { Footer } from "@/components/footer";
import { HeroVisual } from "@/components/hero-visual";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { TerminalPanel } from "@/components/terminal-panel";
import { analysisSummary, internalSystems, openSourceProjects, organization, stack } from "@/data/site";

const nav = ["About", "Open Source", "Code", "Systems", "Stack"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(46,233,255,0.16),transparent_34rem),radial-gradient(circle_at_80%_8%,rgba(141,92,255,0.18),transparent_30rem),linear-gradient(180deg,#020817_0%,#061323_48%,#020817_100%)]">
      <div className="grid-noise" />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm text-cyan-200 shadow-glow">AL</span>
            <span className="text-sm font-semibold tracking-wide text-white">Anchorage Labs</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="transition hover:text-cyan-200">
                {item}
              </a>
            ))}
          </nav>
          <a href={organization.github} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
            GitHub
          </a>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-signal-green shadow-[0_0_18px_rgba(92,255,177,0.9)]" />
            Developer-first software lab
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Anchorage Labs builds tools for software teams that operate close to the metal.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            We create open protocols, CLIs, automation systems, and infrastructure-oriented products for developers who care about clear contracts, inspectable workflows, and practical reliability.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#open-source" className="rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-navy-950 shadow-[0_0_40px_rgba(46,233,255,0.3)] transition hover:bg-white">
              View open source projects
            </a>
            <a href="#code" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/5">
              Explore the code
            </a>
          </div>
        </div>
        <HeroVisual />
      </section>

      <Section id="about" eyebrow="About" title="Precise software systems, not demos." intro="Anchorage Labs is an independent organization focused on useful technical products: backend systems, infrastructure, automation, developer tools, and open source primitives.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Clear protocols", "Auditable automation", "Developer ergonomics", "Operational discipline"].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-card backdrop-blur">
              <div className="mb-5 h-px w-16 bg-gradient-to-r from-cyan-300 to-transparent" />
              <h3 className="text-lg font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Built with explicit boundaries, small composable tools, and a bias toward systems developers can understand and improve.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="open-source" eyebrow="Open Source" title="Tools in progress for developers and maintainers." intro="The public portfolio is early, technical, and intentionally focused: automation protocols, contributor onboarding, changelog discipline, and portable development environments.">
        <div className="grid gap-6 lg:grid-cols-3">
          {openSourceProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section id="code" eyebrow="Code Showcase" title="Representative code, selected for clarity." intro="Snippets are taken from public repositories or public-facing documentation. Secrets, private paths, credentials, and internal-only implementation details are intentionally excluded.">
        <CodeShowcase />
      </Section>

      <Section id="systems" eyebrow="Internal Systems / Labs" title="An open-core boundary with private orchestration." intro="Anchorage Labs separates public protocols and reference tooling from private workflow composition and organizational strategy. The website describes capabilities without exposing private implementation details.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <TerminalPanel lines={analysisSummary} />
          <div className="space-y-4">
            {internalSystems.map((system) => (
              <div key={system.name} className="rounded-3xl border border-white/10 bg-navy-900/70 p-6 backdrop-blur">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-mono text-lg text-white">{system.name}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-100">{system.visibility}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="stack" eyebrow="Technical Stack" title="Confirmed technologies across the repositories." intro="This stack reflects technologies observed in the analyzed repositories, manifests, Dockerfiles, workflows, and project documentation.">
        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
