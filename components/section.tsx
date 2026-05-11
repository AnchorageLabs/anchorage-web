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
        <p className="font-mono text-sm uppercase tracking-[0.28em] text-cyan-200/80">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
        <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">{intro}</p>
      </div>
      {children}
    </section>
  );
}
