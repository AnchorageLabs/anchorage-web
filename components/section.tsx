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
        <p className="font-mono text-sm font-black uppercase tracking-[0.28em] text-ink/55">{eyebrow}</p>
        <div className="relative mt-4">
          <div className="absolute -left-3 top-0 h-8 w-5 border-l-2 border-t-2 border-[var(--accent,#3B82F6)] opacity-60 pointer-events-none sm:-left-6" />
          <h2 className="text-3xl font-black tracking-[-0.05em] text-ink sm:text-5xl">{title}</h2>
        </div>
        <div className="mt-5 h-1.5 w-20 rounded-full bg-[var(--accent)]" />
        <p className="mt-5 text-base font-medium leading-8 text-ink/65 sm:text-lg">{intro}</p>
      </div>
      {children}
    </section>
  );
}
