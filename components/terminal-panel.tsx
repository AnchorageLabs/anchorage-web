export function TerminalPanel({ lines }: { lines: string[] }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border-2 border-ink bg-[var(--terminal)] shadow-[10px_10px_0_rgba(15,23,42,0.18)]">
      <div className="flex items-center gap-2 border-b-2 border-[var(--terminal-text)]/25 px-5 py-4">
        <span className="h-3 w-3 rounded-full border border-[var(--terminal-text)] bg-[#ff6b6b]" />
        <span className="h-3 w-3 rounded-full border border-[var(--terminal-text)] bg-[#ffd166]" />
        <span className="h-3 w-3 rounded-full border border-[var(--terminal-text)] bg-[var(--accent)]" />
        <span className="ml-3 font-mono text-xs text-[var(--terminal-text)] opacity-55">analysis.log</span>
      </div>
      <div className="space-y-4 p-6 font-mono text-sm leading-7">
        {lines.map((line, index) => (
          <p key={line} className="text-[var(--terminal-text)] opacity-85">
            <span className="mr-3 text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
