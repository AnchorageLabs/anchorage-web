type Line = { text: string; kind?: "cmd" | "out" | "ok" | "dim" };

const kindClass: Record<string, string> = {
  cmd: "text-[#d7e6ea]",
  out: "text-[#d7e6ea]/85",
  dim: "text-[#d7e6ea]/45",
  ok: "text-[var(--accent)]",
};

export function TerminalPanel({ title, lines }: { title: string; lines: Line[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--terminal)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-[#d7e6ea]/50">{title}</span>
      </div>
      <div className="space-y-2 p-5 font-mono text-[13px] leading-6">
        {lines.map((line, index) => (
          <p key={`${line.text}-${index}`} className={kindClass[line.kind ?? "out"]}>
            {line.kind === "cmd" ? <span className="mr-1 text-[var(--accent)]">›</span> : null}
            {line.text.replace(/^\$\s/, "")}
          </p>
        ))}
      </div>
    </div>
  );
}
