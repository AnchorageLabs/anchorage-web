const nodes = [
  { label: "protocol", x: "18%", y: "28%" },
  { label: "runner", x: "62%", y: "18%" },
  { label: "agents", x: "76%", y: "58%" },
  { label: "cli", x: "28%", y: "72%" },
];

export function HeroVisual() {
  return (
    <div className="relative min-h-[520px] lg:min-h-[660px]">
      <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/[0.025] shadow-card backdrop-blur-xl" />
      <div className="absolute inset-8 rounded-[2.5rem] border border-cyan-300/10 bg-[radial-gradient(circle_at_50%_40%,rgba(46,233,255,0.14),transparent_20rem)]" />
      <div className="network-orb absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-blue-500/10 to-violet-500/10" />
      <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15" />
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/10" />
      <svg className="absolute inset-0 h-full w-full text-cyan-200/30" viewBox="0 0 600 660" aria-hidden="true">
        <path d="M130 190 C240 120 350 120 430 125" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M430 125 C520 220 520 315 462 386" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M462 386 C350 485 250 494 178 474" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M178 474 C98 365 82 270 130 190" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      {nodes.map((node) => (
        <div key={node.label} className="absolute rounded-2xl border border-white/10 bg-navy-900/80 px-4 py-3 font-mono text-xs text-cyan-100 shadow-glow backdrop-blur" style={{ left: node.x, top: node.y }}>
          <span className="mr-2 text-signal-green">●</span>
          {node.label}
        </div>
      ))}
      <div className="absolute bottom-10 left-8 right-8 overflow-hidden rounded-3xl border border-white/10 bg-[#020817]/85 shadow-card backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
          <span className="h-3 w-3 rounded-full bg-green-300/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">anchorage-runner</span>
        </div>
        <div className="space-y-2 p-5 font-mono text-sm text-slate-300">
          <p><span className="text-cyan-200">$</span> anchorage run issue-to-merge</p>
          <p className="text-slate-500">agent.started → plan.create → code.change → test.run</p>
          <p className="text-signal-green">protocol event stream validated</p>
        </div>
      </div>
    </div>
  );
}
