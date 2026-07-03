import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="mb-14 max-w-3xl">
        <p className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] glow-dot text-[var(--accent)]" />
          {eyebrow}
        </p>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">{intro}</p>
      </div>
      {children}
    </section>
  );
}
