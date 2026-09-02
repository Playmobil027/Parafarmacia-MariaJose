import type { Service } from "../business";

type ServicesProps = {
  eyebrow: string;
  title: string;
  services: Service[];
};

export function Services({ eyebrow, title, services }: ServicesProps) {
  return (
    <section id="servicios" className="bg-brand-50">
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
          {services.map((service) => (
            <article
              key={service.number}
              className="rounded-3xl border border-brand-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 text-sm font-bold text-white">
                {service.number}
              </div>

              <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>

              <p className="mt-4 leading-7 text-brand-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
