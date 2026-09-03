"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealTag = "div" | "article" | "li";

type RevealProps = {
  as?: RevealTag;
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, useful for grids of cards. */
  delay?: number;
};

/**
 * Fades + slides content up into place the first time it enters the
 * viewport (à la canlis.com). No-ops to fully visible when the browser
 * has no IntersectionObserver or the user prefers reduced motion.
 */
export function Reveal({ as = "div", children, className = "", delay = 0 }: RevealProps) {
  const Tag = as as React.ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
