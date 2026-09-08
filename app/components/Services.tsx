import type { Service } from "../business";
import { Reveal } from "./Reveal";

type ServicesProps = {
  eyebrow: string;
  title: string;
  services: Service[];
};

export function Services({ eyebrow, title, services }: ServicesProps) {
  return (
    <section id="servicios" data-nav-theme="light" className="bg-brand-50">
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
          {services.map((service, index) => (
            <Reveal
              key={service.number}
              delay={(index % 3) * 120}
              rotate={index % 2 === 0 ? -2.5 : 2.5}
            >
              <article className="group rounded-3xl border border-brand-200 bg-white p-8 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-sm font-bold text-white transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {service.number}
                </div>

                <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-brand-600">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
