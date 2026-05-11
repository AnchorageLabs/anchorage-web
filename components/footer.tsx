import { openSourceProjects, organization } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">Anchorage Labs</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Useful systems, clear protocols, developer-first tools. Founder-led and currently in early development.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a href={organization.github} className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/50 hover:text-cyan-100">GitHub organization</a>
            {openSourceProjects.map((project) => (
              <a key={project.name} href={project.url} className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/50 hover:text-cyan-100">{project.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
