import type { ProcessStep } from "../business";
import { Reveal } from "./Reveal";

type ProcessProps = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
};

export function Process({ eyebrow, title, steps }: ProcessProps) {
  return (
    <section id="proceso" data-nav-theme="light" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((item, index) => (
            <Reveal
              key={item.step}
              delay={(index % 3) * 120}
              direction={index % 2 === 0 ? "left" : "right"}
              className="group border-t-2 border-brand-950 pt-6 transition-colors duration-300"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-brand-500 transition-colors duration-300 group-hover:text-brand-950">
                {item.step}
              </p>

              <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>

              <p className="mt-3 leading-7 text-brand-600">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
