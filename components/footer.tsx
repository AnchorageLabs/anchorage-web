import { openSourceProjects, organization } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="sketch-card bg-[var(--paper)] p-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-black tracking-[-0.03em] text-ink">Anchorage Labs</h2>
            <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-ink/65">
              Useful systems, clear protocols, developer-first tools. Founder-led and currently in early development.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-black text-ink">
            <a href={organization.github} className="rounded-full border-2 border-ink bg-[var(--paper)] px-4 py-2 shadow-sketch transition hover:-translate-y-0.5">GitHub organization</a>
            {openSourceProjects.map((project) => (
              <a key={project.name} href={project.url} className="rounded-full border-2 border-ink bg-[var(--paper)] px-4 py-2 shadow-sketch transition hover:-translate-y-0.5">{project.name}</a>
            ))}
            <a href="#top" className="rounded-full border-2 border-ink bg-[var(--paper)] px-4 py-2 shadow-sketch transition hover:-translate-y-0.5">Back to top ↑</a>
          </div>
        </div>
        <p className="mt-6 text-sm font-medium text-ink/65">Built in the open by Anchorage Labs.</p>
      </div>
    </footer>
  );
}
