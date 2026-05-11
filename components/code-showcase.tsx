import { showcases } from "@/data/site";
import { CodeBlock } from "./code-block";

export function CodeShowcase() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {showcases.map((snippet) => (
        <div key={snippet.title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur">
          <div className="mb-4 px-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{snippet.repo}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{snippet.title}</h3>
          </div>
          <CodeBlock file={snippet.file} code={snippet.code} />
        </div>
      ))}
    </div>
  );
}
