import { GitFork, RefreshCw, Target, TerminalSquare } from "lucide-react";
import { GraphCanvas } from "@/components/graph-canvas";

function IconBadge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="mb-4 grid h-10 w-10 place-items-center rounded-xl border"
      style={{ borderColor: color, color, background: `color-mix(in srgb, ${color} 13%, transparent)` }}
    >
      {children}
    </span>
  );
}

export function BentoAbout() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {/* Feature tile */}
      <div className="panel panel-hover glow-hover relative overflow-hidden p-7 lg:col-span-2 lg:min-h-[280px]">
        <GraphCanvas
          className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
          density={1.1}
          interactive={false}
          palette={["#4cc9ff", "#2ee9ff", "#8b93ff"]}
        />
        <div className="relative">
          <IconBadge color="var(--cartographer)">
            <Target size={20} strokeWidth={1.75} />
          </IconBadge>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--cartographer)]">
            Ground truth
          </p>
          <h3 className="mt-2 max-w-md text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
            Facts before guesses.
          </h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
            Deterministic maps and zero-LLM indexes give agents ground truth about a
            repository — byte-identical on every run.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-[var(--faint)]">
            <span>
              <span className="text-[var(--ink)]">25+</span> languages
            </span>
            <span>
              <span className="text-[var(--ink)]">0</span> LLM tokens
            </span>
            <span>
              <span className="text-[var(--ink)]">1</span> file read
            </span>
          </div>
        </div>
      </div>

      {/* Durable runtime */}
      <div className="panel panel-hover glow-hover p-7">
        <IconBadge color="var(--anchorage)">
          <RefreshCw size={20} strokeWidth={1.75} />
        </IconBadge>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--anchorage)]">
          Durable runtime
        </p>
        <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">Survives restarts.</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          AWS-native workflows persist every step and stay auditable from issue to deploy.
        </p>
      </div>

      {/* Open-core */}
      <div className="panel panel-hover glow-hover p-7">
        <IconBadge color="var(--accent)">
          <GitFork size={20} strokeWidth={1.75} />
        </IconBadge>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
          Open-core boundary
        </p>
        <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">Open where it counts.</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          Protocol, SDK, runner, and the Cartographer engine are Apache-2.0.
        </p>
      </div>

      {/* Operator-grade */}
      <div className="panel panel-hover glow-hover p-7 lg:col-span-2">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <IconBadge color="var(--muted)">
              <TerminalSquare size={20} strokeWidth={1.75} />
            </IconBadge>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Operator-grade
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">
              Explicit contracts, inspectable behavior.
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Small composable tools with typed boundaries — you can see exactly what
              ran and why.
            </p>
          </div>
          <div className="shrink-0 rounded-xl border border-[var(--border)] bg-[var(--terminal)] p-4 font-mono text-xs leading-6">
            <p className="text-[var(--faint)]">$ anchorage runs show</p>
            <p className="text-[var(--terminal-text)]/85">step plan&nbsp;&nbsp;ok&nbsp;&nbsp;1.2s</p>
            <p className="text-[var(--terminal-text)]/85">step code&nbsp;&nbsp;ok&nbsp;&nbsp;8.4s</p>
            <p className="text-[var(--accent)]">step tests ok&nbsp;&nbsp;passed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
