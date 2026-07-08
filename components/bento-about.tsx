"use client";

import { GitFork, RefreshCw, Target, TerminalSquare } from "lucide-react";
import { GraphCanvas } from "@/components/graph-canvas";
import { useT } from "@/components/language-provider";

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
  const b = useT().bento;
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
            {b.feature.eyebrow}
          </p>
          <h3 className="mt-2 max-w-md text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
            {b.feature.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">{b.feature.desc}</p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-[var(--faint)]">
            <span>
              <span className="text-[var(--ink)]">25+</span> {b.feature.stats[0]}
            </span>
            <span>
              <span className="text-[var(--ink)]">0</span> {b.feature.stats[1]}
            </span>
            <span>
              <span className="text-[var(--ink)]">1</span> {b.feature.stats[2]}
            </span>
          </div>
        </div>
      </div>

      {/* Durable runtime */}
      <div className="panel panel-hover glow-hover p-7">
        <IconBadge color="var(--anchorage)">
          <RefreshCw size={20} strokeWidth={1.75} />
        </IconBadge>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--anchorage)]">{b.durable.eyebrow}</p>
        <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">{b.durable.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{b.durable.desc}</p>
      </div>

      {/* Open-core */}
      <div className="panel panel-hover glow-hover p-7">
        <IconBadge color="var(--accent)">
          <GitFork size={20} strokeWidth={1.75} />
        </IconBadge>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">{b.opencore.eyebrow}</p>
        <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">{b.opencore.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{b.opencore.desc}</p>
      </div>

      {/* Operator-grade */}
      <div className="panel panel-hover glow-hover p-7 lg:col-span-2">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <IconBadge color="var(--muted)">
              <TerminalSquare size={20} strokeWidth={1.75} />
            </IconBadge>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{b.operator.eyebrow}</p>
            <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">{b.operator.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{b.operator.desc}</p>
          </div>
          <div className="shrink-0 rounded-xl border border-[var(--border)] bg-[var(--terminal)] p-4 font-mono text-xs leading-6">
            <p className="text-[var(--faint)]">$ anchorage runs show</p>
            <p className="text-[#d7e6ea]/85">step plan&nbsp;&nbsp;ok&nbsp;&nbsp;1.2s</p>
            <p className="text-[#d7e6ea]/85">step code&nbsp;&nbsp;ok&nbsp;&nbsp;8.4s</p>
            <p className="text-[var(--accent)]">step tests ok&nbsp;&nbsp;passed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
