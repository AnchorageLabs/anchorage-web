import { GalaxyCanvas } from "@/components/galaxy-canvas";

const clusterLabels = [
  { label: "auth::gateway", x: "18%", y: "22%" },
  { label: "event::bus", x: "72%", y: "18%" },
  { label: "archives", x: "28%", y: "72%" },
  { label: "storage::engine", x: "78%", y: "72%" },
];

export function HeroVisual() {
  return (
    <div className="relative">
      <div
        className="panel panel-accent relative overflow-hidden"
        style={{ ["--accent-color" as string]: "var(--accent)" }}
      >
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            code graph
          </p>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--faint)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] glow-dot text-[var(--accent)]" />
            2,847 symbols · 412 edges
          </span>
        </div>

        <div className="relative h-[420px] sm:h-[480px]">
          <GalaxyCanvas
            className="absolute inset-0 h-full w-full"
            density={1.5}
          />
          {clusterLabels.map((node) => (
            <span
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] tracking-wider pointer-events-none select-none"
              style={{
                left: node.x,
                top: node.y,
                color: "var(--faint)",
                textShadow: "0 0 8px var(--accent)",
              }}
            >
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
