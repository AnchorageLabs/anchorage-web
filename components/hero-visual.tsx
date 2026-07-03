import { GraphCanvas } from "@/components/graph-canvas";

const overlayNodes = [
  { label: "buildRuntimePreview", x: "16%", y: "22%", tone: "var(--cartographer)" },
  { label: "issue-to-merge", x: "62%", y: "16%", tone: "var(--anchorage)" },
  { label: "cmd:test", x: "72%", y: "62%", tone: "var(--accent)" },
  { label: "repo.context", x: "20%", y: "72%", tone: "var(--cartographer)" },
];

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="panel panel-accent relative overflow-hidden" style={{ ["--accent-color" as string]: "var(--accent)" }}>
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">code graph</p>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--faint)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] glow-dot text-[var(--accent)]" />
            1,516 symbols · 222 edges
          </span>
        </div>

        <div className="relative h-[420px] sm:h-[480px]">
          <GraphCanvas className="absolute inset-0 h-full w-full" density={1.15} />
          {overlayNodes.map((node) => (
            <span
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--ink)] backdrop-blur-sm"
              style={{ left: node.x, top: node.y, boxShadow: `0 0 0 1px ${node.tone}22` }}
            >
              <span className="mr-1.5" style={{ color: node.tone }}>
                ●
              </span>
              {node.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 divide-x divide-[var(--border)] border-t border-[var(--border)] font-mono text-xs">
          {[
            { k: "map", v: "deterministic" },
            { k: "index", v: "0 LLM tokens" },
            { k: "runtime", v: "AWS-native" },
          ].map((cell) => (
            <div key={cell.k} className="px-4 py-3">
              <p className="text-[var(--faint)]">{cell.k}</p>
              <p className="mt-0.5 text-[var(--ink)]">{cell.v}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full blur-3xl"
        style={{ background: "var(--glow)" }}
      />
    </div>
  );
}
