export function ProofStrip() {
  const proofPoints = [
    {
      title: "Open protocols / clear contracts",
      description: "Explicit boundaries and composable tools that developers can understand, integrate, and improve.",
    },
    {
      title: "Auditable automation / inspectable workflows",
      description: "Systems designed for transparency: logs, traces, and code that reveal intent and behavior.",
    },
    {
      title: "Developer tooling / operational discipline",
      description: "Practical reliability through CLIs, infrastructure-oriented products, and systems thinking.",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proofPoints.map((point) => (
          <div
            key={point.title}
            className="sketch-card group rotate-[-0.5deg] bg-[var(--paper)] p-6 transition hover:-translate-y-1 hover:rotate-0"
          >
            <h3 className="text-lg font-black text-ink">{point.title}</h3>
            <p className="mt-4 text-sm font-medium leading-6 text-ink/65">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
