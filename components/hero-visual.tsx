const nodes = [
  { label: "protocol", x: "18%", y: "28%" },
  { label: "runner", x: "62%", y: "18%" },
  { label: "agents", x: "76%", y: "58%" },
  { label: "cli", x: "28%", y: "72%" },
];

export function HeroVisual() {
  return (
    <div className="relative min-h-[520px] lg:min-h-[660px]">
      <div className="absolute left-8 top-16 h-[29rem] w-[24rem] rotate-[-2deg] bg-[var(--paper)] shadow-[18px_18px_0_rgba(17,17,17,0.16)] lg:left-16" />
      <div className="absolute right-6 top-10 h-[26rem] w-[21rem] rotate-[2.5deg] bg-[var(--paper-soft)] shadow-[14px_14px_0_rgba(17,17,17,0.12)]" />
      <div className="network-orb absolute left-1/2 top-[47%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-ink bg-[radial-gradient(circle_at_40%_35%,var(--accent),transparent_32%),radial-gradient(circle_at_70%_66%,var(--accent-cyan),transparent_34%)] opacity-95 shadow-[14px_18px_0_rgba(17,17,17,0.16)]" />
      <div className="absolute left-1/2 top-[47%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-full border-2 border-dashed border-ink/60" />
      <div className="absolute left-1/2 top-[47%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-full border-2 border-dashed border-ink/35" />
      <svg className="absolute inset-0 h-full w-full text-ink" viewBox="0 0 600 660" aria-hidden="true">
        <path className="sketch-line" d="M130 190 C240 120 350 120 430 125" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path className="sketch-line" d="M430 125 C520 220 520 315 462 386" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path className="sketch-line" d="M462 386 C350 485 250 494 178 474" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path className="sketch-line" d="M178 474 C98 365 82 270 130 190" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path className="sketch-line" d="M178 142 C190 78 275 78 296 135 C334 92 405 112 410 179 C468 182 510 227 492 281 C548 325 512 405 444 389 C416 456 319 452 299 386 C230 412 158 366 173 292 C112 263 111 178 178 142Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M225 245 C286 216 350 221 424 252" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
        <circle cx="298" cy="248" r="38" fill="none" stroke="currentColor" strokeWidth="7" />
      </svg>
      {nodes.map((node) => (
        <div key={node.label} className="absolute rotate-[-2deg] rounded-2xl border-2 border-ink bg-[var(--paper)] px-4 py-3 font-mono text-xs font-black text-ink shadow-sketch" style={{ left: node.x, top: node.y }}>
          <span className="mr-2 text-[#7d8f00]">●</span>
          {node.label}
        </div>
      ))}
      <div className="absolute bottom-10 left-8 right-8 overflow-hidden rounded-[2rem] border-2 border-ink bg-[var(--terminal)] text-[var(--terminal-text)] shadow-[10px_10px_0_rgba(17,17,17,0.2)]">
        <div className="flex items-center gap-2 border-b-2 border-[var(--terminal-text)]/30 px-4 py-3">
          <span className="h-3 w-3 rounded-full border border-[var(--terminal-text)] bg-[#ff6b6b]" />
          <span className="h-3 w-3 rounded-full border border-[var(--terminal-text)] bg-[#ffd166]" />
          <span className="h-3 w-3 rounded-full border border-[var(--terminal-text)] bg-[var(--accent)]" />
          <span className="ml-3 font-mono text-xs text-[var(--terminal-text)] opacity-60">anchorage-runner</span>
        </div>
        <div className="space-y-2 p-5 font-mono text-sm text-[var(--terminal-text)]">
          <p><span className="text-[var(--accent)]">$</span> anchorage run issue-to-merge</p>
          <p className="text-[var(--terminal-text)] opacity-55">agent.started -&gt; plan.create -&gt; code.change -&gt; test.run</p>
          <p className="text-[var(--accent)]">protocol event stream validated</p>
        </div>
      </div>
    </div>
  );
}
