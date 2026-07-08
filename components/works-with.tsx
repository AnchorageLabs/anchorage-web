"use client";

import {
  SiClaude,
  SiCursor,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiModelcontextprotocol,
  SiWindsurf,
  SiZedindustries,
} from "@icons-pack/react-simple-icons";
import { useT } from "@/components/language-provider";

const tools = [
  { name: "GitHub", Icon: SiGithub },
  { name: "Claude", Icon: SiClaude },
  { name: "Gemini", Icon: SiGooglegemini },
  { name: "Cursor", Icon: SiCursor },
  { name: "Copilot", Icon: SiGithubcopilot },
  { name: "Windsurf", Icon: SiWindsurf },
  { name: "Zed", Icon: SiZedindustries },
  { name: "MCP", Icon: SiModelcontextprotocol },
];

export function WorksWith() {
  const items = [...tools, ...tools];
  const label = useT().worksWithLabel;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
      <p className="text-center font-mono text-xs uppercase tracking-[0.28em] text-[var(--faint)]">
        {label}
      </p>
      <div className="marquee-mask mt-5 overflow-hidden">
        <div className="marquee-track">
          {items.map((tool, i) => (
            <span
              key={`${tool.name}-${i}`}
              className="group mr-3 flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--ink)]"
            >
              <tool.Icon size={18} className="opacity-90" />
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
