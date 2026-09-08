type MarqueeProps = {
  items: string[];
};

/**
 * Infinite horizontal ticker. The item list is duplicated so the track can
 * loop seamlessly from -50% back to 0. Paused (single, static row) when the
 * user prefers reduced motion — see .marquee-track in globals.css.
 */
export function Marquee({ items }: MarqueeProps) {
  const line = items.join(" · ") + " · ";

  return (
    <div data-nav-theme="light" className="overflow-hidden border-y border-brand-200 bg-brand-50 py-5">
      <div className="marquee-track flex w-max whitespace-nowrap">
        <span className="px-4 text-lg font-bold uppercase tracking-[0.12em] text-brand-500">
          {line}
        </span>
        <span aria-hidden="true" className="px-4 text-lg font-bold uppercase tracking-[0.12em] text-brand-500">
          {line}
        </span>
      </div>
    </div>
  );
}
