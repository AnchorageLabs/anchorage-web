import { GraphCanvas } from "@/components/graph-canvas";

type OverlayNode = {
  label: string;
  x: string;
  y: string;
  tone: string;
};

const overlayNodes: OverlayNode[] = [
  { label: "auth::gateway", x: "10%", y: "14%", tone: "var(--cartographer)" },
  { label: "session::store", x: "4%", y: "36%", tone: "var(--cartographer)" },
  { label: "token::issuer", x: "13%", y: "58%", tone: "var(--accent)" },
  { label: "event::bus", x: "38%", y: "8%", tone: "var(--accent)" },
  { label: "scheduler::v2", x: "50%", y: "28%", tone: "var(--anchorage)" },
  { label: "dispatcher", x: "34%", y: "52%", tone: "var(--anchorage)" },
  { label: "archives/2024", x: "78%", y: "14%", tone: "var(--cartographer)" },
  { label: "db::schema", x: "88%", y: "36%", tone: "var(--accent)" },
  { label: "storage::engine", x: "74%", y: "60%", tone: "var(--anchorage)" },
  { label: "api::router", x: "24%", y: "78%", tone: "var(--cartographer)" },
  { label: "sync::worker", x: "58%", y: "76%", tone: "var(--accent)" },
  { label: "policy::engine", x: "50%", y: "62%", tone: "var(--cartographer)" },
];

const overlayEdges: [number, number][] = [
  [0, 1], [0, 2], [1, 2],
  [3, 4], [3, 5], [4, 5],
  [6, 7], [6, 8], [7, 8],
  [0, 3], [2, 5], [5, 8],
  [4, 1], [4, 7],
  [2, 9], [5, 11], [8, 10],
  [9, 4], [9, 10],
  [11, 5], [11, 10],
];

const nodeX = (node: OverlayNode) => parseFloat(node.x);
const nodeY = (node: OverlayNode) => parseFloat(node.y);

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
          <GraphCanvas
            className="absolute inset-0 h-full w-full"
            density={1.35}
          />
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {overlayEdges.map(([a, b], i) => (
              <line
                key={i}
                x1={nodeX(overlayNodes[a])}
                y1={nodeY(overlayNodes[a])}
                x2={nodeX(overlayNodes[b])}
                y2={nodeY(overlayNodes[b])}
                stroke="var(--border)"
                strokeOpacity="0.35"
                strokeWidth="0.35"
                strokeDasharray={i % 4 === 0 ? "1.5 2.5" : undefined}
              />
            ))}
          </svg>
          {overlayNodes.map((node) => (
            <span
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--ink)] backdrop-blur-sm"
              style={{
                left: node.x,
                top: node.y,
                boxShadow: `0 0 0 1px ${node.tone}22`,
              }}
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
