import Image from "next/image";
import { Reveal } from "./Reveal";

type HeroProps = {
  eyebrow: string;
  headline: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  badges: string[];
  image: {
    src: string;
    alt: string;
    eyebrow: string;
    caption: string;
  };
};

export function Hero({
  eyebrow,
  headline,
  description,
  ctaPrimary,
  ctaSecondary,
  badges,
  image,
}: HeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <span className="inline-flex rounded-full border border-brand-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {eyebrow}
          </span>

          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {headline}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-600">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-brand-950 px-7 py-4 font-semibold text-white transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-950"
            >
              {ctaPrimary}
            </a>

            <a
              href="#servicios"
              className="rounded-full border border-brand-300 bg-white px-7 py-4 font-semibold transition hover:border-brand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-950"
            >
              {ctaSecondary}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-brand-500">
            {badges.map((badge) => (
              <span key={badge}>✓ {badge}</span>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={150}
          className="relative h-[360px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[440px] lg:h-[520px]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              {image.eyebrow}
            </p>

            <p className="mt-3 max-w-lg text-2xl font-bold leading-tight">
              {image.caption}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
