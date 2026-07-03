const flow = [
  { label: "repo", sub: "any codebase", tone: "muted" },
  { label: "cartographer scan", sub: "→ symbolic map · zero LLM", tone: "cartographer" },
  { label: "anchorage agents", sub: "plan · code · test", tone: "anchorage" },
  { label: "orchestrator", sub: "durable workflow · Temporal", tone: "anchorage" },
  { label: "pr → merge → deploy", sub: "issue.close ✓", tone: "accent" },
];

const toneColor: Record<string, string> = {
  muted: "var(--faint)",
  cartographer: "var(--cartographer)",
  anchorage: "var(--anchorage)",
  accent: "var(--accent)",
};

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="panel panel-accent float-slow p-6 sm:p-7" style={{ ["--accent-color" as string]: "var(--accent)" }}>
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">state layer</p>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--faint)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] glow-dot text-[var(--accent)]" />
            live pipeline
          </span>
        </div>

        <ol className="mt-6 space-y-3">
          {flow.map((step, i) => (
            <li key={step.label} className="relative">
              <div
                className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3"
                style={{ boxShadow: `inset 3px 0 0 ${toneColor[step.tone]}` }}
              >
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md font-mono text-xs font-bold"
                  style={{ color: toneColor[step.tone], background: "color-mix(in srgb, currentColor 12%, transparent)" }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-mono text-sm font-semibold text-[var(--ink)]">{step.label}</p>
                  <p className="truncate font-mono text-xs text-[var(--muted)]">{step.sub}</p>
                </div>
              </div>
              {i < flow.length - 1 ? (
                <span
                  aria-hidden
                  className="ml-[27px] block h-3 w-px"
                  style={{ background: "var(--border-strong)" }}
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full blur-3xl"
        style={{ background: "var(--glow)" }}
      />
    </div>
  );
}
