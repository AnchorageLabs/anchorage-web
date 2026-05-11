import { CodeBlock } from "./code-block";

type Project = {
  name: string;
  url: string;
  status: string;
  accent: string;
  summary: string;
  usefulFor: string;
  technologies: string[];
  codeFile: string;
  code: string;
};

const accentClass: Record<string, string> = {
  green: "from-signal-green/30 to-cyan-300/5 text-signal-green",
  cyan: "from-signal-cyan/30 to-blue-400/5 text-signal-cyan",
  violet: "from-signal-violet/30 to-cyan-300/5 text-violet-200",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900/70 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30">
      <div className={`bg-gradient-to-br ${accentClass[project.accent]} p-6`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-mono text-2xl font-semibold text-white">{project.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.status}</p>
          </div>
          <a href={project.url} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 transition hover:bg-white/10">
            Repo
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-6 p-6">
        <p className="text-sm leading-6 text-slate-300">{project.summary}</p>
        <p className="text-sm leading-6 text-slate-500"><span className="text-slate-300">Useful for:</span> {project.usefulFor}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-slate-300">{tech}</span>
          ))}
        </div>
        <CodeBlock file={project.codeFile} code={project.code} compact />
      </div>
    </article>
  );
}
