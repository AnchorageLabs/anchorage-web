import { AlertTriangle, Info, KeyRound } from "lucide-react";
import type { ReactNode } from "react";

type Tone = "info" | "warn" | "secret";

const config: Record<Tone, { color: string; Icon: typeof Info }> = {
  info: { color: "var(--cartographer)", Icon: Info },
  warn: { color: "#febc2e", Icon: AlertTriangle },
  secret: { color: "var(--anchorage)", Icon: KeyRound },
};

export function Callout({ tone = "info", children }: { tone?: Tone; children: ReactNode }) {
  const { color, Icon } = config[tone];
  return (
    <div
      className="flex gap-3 rounded-xl border border-[var(--border)] p-4"
      style={{ background: `color-mix(in srgb, ${color} 8%, transparent)`, borderColor: `color-mix(in srgb, ${color} 30%, transparent)` }}
    >
      <span className="mt-0.5 shrink-0" style={{ color }}>
        <Icon size={18} strokeWidth={1.9} />
      </span>
      <div className="text-sm leading-6 text-[var(--muted)]">{children}</div>
    </div>
  );
}
