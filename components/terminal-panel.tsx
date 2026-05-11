export function TerminalPanel({ lines }: { lines: string[] }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[#020817]/90 shadow-card">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
        <span className="h-3 w-3 rounded-full bg-green-300/80" />
        <span className="ml-3 font-mono text-xs text-slate-500">analysis.log</span>
      </div>
      <div className="space-y-4 p-6 font-mono text-sm leading-7">
        {lines.map((line, index) => (
          <p key={line} className="text-slate-300">
            <span className="mr-3 text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
