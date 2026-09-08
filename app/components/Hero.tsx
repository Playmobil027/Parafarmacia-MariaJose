import Image from "next/image";
import { Reveal } from "./Reveal";
import { StaggerText } from "./StaggerText";

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
    <section data-nav-theme="dark" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="hero-image-in absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-950/50 to-brand-950/85" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-28 lg:px-8">
        <Reveal>
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            {eyebrow}
          </span>

          <StaggerText
            text={headline}
            className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          />

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-white px-7 py-4 font-semibold text-brand-950 shadow-lg transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {ctaPrimary}
            </a>

            <a
              href="#servicios"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-[1.03] hover:border-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {ctaSecondary}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            {badges.map((badge) => (
              <span key={badge}>✓ {badge}</span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-20 max-w-lg border-t border-white/20 pt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            {image.eyebrow}
          </p>

          <p className="mt-2 text-xl font-bold text-white">{image.caption}</p>
        </Reveal>
      </div>
    </section>
  );
}
