import type { TrustBadge } from "../business";
import { Reveal } from "./Reveal";

type TrustBadgesProps = {
  badges: TrustBadge[];
};

export function TrustBadges({ badges }: TrustBadgesProps) {
  return (
    <section data-nav-theme="light" className="border-y border-brand-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 lg:px-8">
        {badges.map((badge, index) => (
          <Reveal key={badge.title} delay={(index % 3) * 100}>
            <p className="text-sm font-bold">{badge.title}</p>
            <p className="mt-2 text-sm leading-6 text-brand-600">
              {badge.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
