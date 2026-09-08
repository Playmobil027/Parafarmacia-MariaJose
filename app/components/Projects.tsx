import Image from "next/image";
import type { Project } from "../business";
import { Reveal } from "./Reveal";

type ProjectsProps = {
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
};

export function Projects({
  eyebrow,
  title,
  description,
  projects,
}: ProjectsProps) {
  return (
    <section id="proyectos" data-nav-theme="light" className="bg-brand-100">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-brand-600">
            {description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={`${project.title}-${index}`}
              delay={(index % 2) * 120}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>

                  <p className="mt-4 leading-7 text-brand-600">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
