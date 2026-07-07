import { Blocks, Fingerprint, ScanSearch } from "lucide-react";
import { principles } from "@/data/site";

const icons = [Fingerprint, ScanSearch, Blocks];
const iconColors = ["var(--cartographer)", "var(--accent)", "var(--anchorage)"];

export function ProofStrip() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((point, i) => {
          const Icon = icons[i] ?? Fingerprint;
          const color = iconColors[i] ?? "var(--accent)";
          return (
            <div key={point.title} className="panel panel-hover glow-hover p-6">
              <div className="flex items-center justify-between">
                <span
                  className="grid h-10 w-10 place-items-center rounded-xl border"
                  style={{ borderColor: color, color, background: `color-mix(in srgb, ${color} 13%, transparent)` }}
                >
                  <Icon size={19} strokeWidth={1.75} />
                </span>
                <span className="font-mono text-xs text-[var(--faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{point.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
