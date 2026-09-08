"use client";

import { useInView } from "./Reveal";

type StaggerTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2";
};

/**
 * Reveals text word by word whenever it scrolls into view, each word
 * masked and sliding up into place with a short stagger — and slides
 * back out again when it scrolls out, replaying every time. Falls back
 * to plain static text when the user prefers reduced motion (see
 * .stagger-word in globals.css, which only defines the hidden/animated
 * state inside the no-preference media query).
 */
export function StaggerText({ text, className = "", as = "h1" }: StaggerTextProps) {
  const Tag = as;
  const { ref, visible } = useInView<HTMLHeadingElement>();
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-1 align-bottom">
          <span
            className={`stagger-word inline-block${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: `${index * 55}ms` }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
