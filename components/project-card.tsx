type Project = {
  name: string;
  url: string;
  status: string;
  accent: string;
  summary: string;
  usefulFor: string;
  technologies: string[];
};

const accentClass: Record<string, string> = {
  green: "bg-[var(--accent-fill)]",
  cyan: "bg-[var(--accent-cyan)]",
  violet: "bg-[var(--accent-violet)]",
};

const buttonAccentClass: Record<string, string> = {
  green: "bg-[var(--accent-fill)] text-ink hover:shadow-[4px_4px_0_var(--ink)]",
  cyan: "bg-[var(--accent-cyan)] text-ink hover:shadow-[4px_4px_0_var(--ink)]",
  violet: "bg-[var(--accent-violet)] text-ink hover:shadow-[4px_4px_0_var(--ink)]",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="sketch-card group flex min-h-full rotate-[-0.35deg] flex-col overflow-hidden bg-[var(--paper)] transition hover:-translate-y-1 hover:rotate-0">
      <div className={`${accentClass[project.accent]} border-b-2 border-ink p-6`}>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-mono text-3xl font-black text-ink">{project.name}</h3>
            <p className="mt-2 text-sm font-bold text-ink/65">{project.status}</p>
          </div>
          <a href={project.url} className={`${buttonAccentClass[project.accent]} rounded-full border-2 border-ink px-4 py-2 text-sm font-black text-ink shadow-sketch transition hover:-translate-y-0.5 whitespace-nowrap`}>
            View repo
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-6 p-6">
        <p className="text-base font-semibold leading-7 text-ink">{project.summary}</p>
        <div className="rounded-[1.5rem] border-2 border-ink bg-[var(--paper-soft)] p-4 shadow-[4px_4px_0_var(--shadow-ink)]">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/50">Useful for</p>
          <p className="mt-2 text-sm font-medium leading-6 text-ink/70">{project.usefulFor}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border-2 border-ink bg-[var(--paper)] px-3 py-1 font-mono text-[11px] font-bold text-ink">{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
