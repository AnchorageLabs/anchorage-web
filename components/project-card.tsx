type Project = {
  name: string;
  url: string;
  status: string;
  accent: string;
  summary: string;
  usefulFor: string;
  technologies: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="sketch-card group flex min-h-full flex-col overflow-hidden bg-[var(--paper)]">
      <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)] p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-mono text-3xl font-heavy text-ink">{project.name}</h3>
            <p className="mt-2 text-sm font-medium text-text-secondary">{project.status}</p>
          </div>
          <a href={project.url} className="rounded-lg border border-[var(--border)] bg-[var(--accent-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0860ca] whitespace-nowrap">
            View repo
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-6 p-6">
        <p className="text-base font-medium leading-7 text-ink">{project.summary}</p>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary">Useful for</p>
          <p className="mt-2 text-sm font-medium leading-6 text-text-secondary">{project.usefulFor}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 font-mono text-[11px] font-semibold text-text-secondary">{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
