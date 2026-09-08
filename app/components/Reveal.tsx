"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * True while the element is in the viewport, false otherwise — keeps
 * toggling for the element's whole lifetime (not just once), so content
 * re-plays its entrance every time it scrolls into view and reverses back
 * out when it scrolls past, in either scroll direction. Shared by Reveal
 * and StaggerText so both use the exact same trigger behaviour.
 */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

type RevealTag = "div" | "article" | "li";
type RevealDirection = "up" | "left" | "right";

type RevealProps = {
  as?: RevealTag;
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, useful for grids of cards. */
  delay?: number;
  /** Entry axis. Defaults to the classic fade-up. */
  direction?: RevealDirection;
  /** Starting tilt in degrees, settles to 0 as the element reveals. */
  rotate?: number;
};

const DISTANCE = "3.5rem";

/**
 * Fades content into place whenever it scrolls into the viewport, and
 * reverses back out whenever it scrolls back out — in both directions
 * (à la canlis.com, but replaying every time rather than only once).
 * No-ops to fully visible when the browser has no IntersectionObserver or
 * the user prefers reduced motion.
 *
 * `direction`/`rotate` are opt-in: without them, the transform is driven
 * entirely by the `.reveal` CSS class (unchanged behaviour). Passing either
 * switches the transform to inline styles so both axes can combine.
 */
export function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  direction,
  rotate,
}: RevealProps) {
  const Tag = as as React.ElementType;
  const { ref, visible } = useInView<HTMLElement>();
  const custom = direction !== undefined || rotate !== undefined;

  const axisHidden =
    direction === "left"
      ? `translateX(-${DISTANCE})`
      : direction === "right"
        ? `translateX(${DISTANCE})`
        : `translateY(${DISTANCE})`;
  const rotateValue = rotate ? `rotate(${rotate}deg)` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{
        ...(delay ? { transitionDelay: `${delay}ms` } : undefined),
        ...(custom
          ? {
              transform: visible
                ? "translate(0, 0) rotate(0deg)"
                : `${axisHidden} ${rotateValue}`.trim(),
            }
          : undefined),
      }}
    >
      {children}
    </Tag>
  );
}
