import { Reveal } from "./Reveal";
import { Zoomable } from "./Zoomable";

type BettingProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  games: string[];
};

export function Betting({
  eyebrow,
  title,
  description,
  image,
  games,
}: BettingProps) {
  return (
    <section id="apuestas" data-nav-theme="light" className="bg-brand-100">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal direction="left">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-600">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {games.map((game) => (
              <span
                key={game}
                className="rounded-full border border-brand-300 bg-white px-4 py-2 text-sm font-semibold text-brand-800"
              >
                {game}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right">
          <Zoomable
            src={image.src}
            alt={image.alt}
            className="h-[420px] w-full rounded-3xl shadow-xl"
            imgClassName="object-cover transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
