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
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.1em] text-text-secondary">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-heavy tracking-[-0.02em] text-ink sm:text-5xl">{title}</h2>
        <div className="mt-5 h-1 w-20 rounded-full bg-[var(--accent-primary)]" />
        <p className="mt-5 text-base font-medium leading-8 text-text-secondary sm:text-lg">{intro}</p>
      </div>
      {children}
    </section>
  );
}
