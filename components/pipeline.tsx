import { CircleDot, Rocket, Waypoints, Workflow } from "lucide-react";
import { pipeline } from "@/data/site";

const colorVar: Record<string, string> = {
  accent: "var(--accent)",
  cartographer: "var(--cartographer)",
  anchorage: "var(--anchorage)",
};

const icons = [CircleDot, Waypoints, Workflow, Rocket];

export function Pipeline() {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {pipeline.map((s, i) => {
        const color = colorVar[s.accent];
        const Icon = icons[i] ?? CircleDot;
        return (
          <div key={s.step} className="relative">
            {i < pipeline.length - 1 ? (
              <div
                aria-hidden
                className="absolute top-[45px] right-[-16px] z-10 hidden h-0.5 w-4 rounded-full lg:block"
                style={{
                  background: `linear-gradient(90deg, ${color}, ${colorVar[pipeline[i + 1].accent]})`,
                  opacity: 0.55,
                }}
              />
            ) : null}
            <div className="panel panel-hover glow-hover h-full p-6">
              <div className="flex items-center justify-between">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl border"
                  style={{
                    borderColor: color,
                    color,
                    background: `color-mix(in srgb, ${color} 13%, transparent)`,
                  }}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="font-mono text-xs text-[var(--faint)]">{s.step}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{s.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
