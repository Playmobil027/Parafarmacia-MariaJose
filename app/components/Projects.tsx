import Image from "next/image";
import type { Project } from "../business";

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
    <section id="proyectos" className="bg-brand-100">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-brand-600">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="relative h-[320px]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
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
          ))}
        </div>
      </div>
    </section>
  );
}
