import { openSourceProjects, organization } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="sketch-card bg-[var(--paper)] p-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-heavy tracking-[-0.02em] text-ink">Anchorage Labs</h2>
            <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-text-secondary">
              Useful systems, clear protocols, developer-first tools. Founder-led and currently in early development.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-ink">
            <a href={organization.github} className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2 transition hover:bg-[var(--bg-tertiary)]">GitHub organization</a>
            {openSourceProjects.map((project) => (
              <a key={project.name} href={project.url} className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2 transition hover:bg-[var(--bg-tertiary)]">{project.name}</a>
            ))}
            <a href="#top" className="rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2 transition hover:bg-[var(--bg-tertiary)]">Back to top ↑</a>
          </div>
        </div>
        <p className="mt-6 text-sm font-medium text-text-secondary">Built in the open by Anchorage Labs.</p>
      </div>
    </footer>
  );
}
