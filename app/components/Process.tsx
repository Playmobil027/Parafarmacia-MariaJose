import type { ProcessStep } from "../business";

type ProcessProps = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
};

export function Process({ eyebrow, title, steps }: ProcessProps) {
  return (
    <section id="proceso" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="border-t-2 border-brand-950 pt-6">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-500">
                {item.step}
              </p>

              <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>

              <p className="mt-3 leading-7 text-brand-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
