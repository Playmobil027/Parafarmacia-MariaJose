"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type RefObject } from "react";
import type { NavLink } from "../business";

type NavbarProps = {
  name: string;
  nav: NavLink[];
  navCta: string;
  mobileCta: string;
  logoHref: string;
  openMenuLabel: string;
  closeMenuLabel: string;
};

type Theme = "dark" | "light";

/**
 * Sampled the frame just below the fixed header to figure out which
 * section is currently behind it, then reads that section's
 * data-nav-theme ("dark" | "light") to decide the nav's own colours.
 * Falls back to "light" when nothing themed is found (e.g. before
 * hydration, or a gap between sections).
 */
function useSectionTheme(headerRef: RefObject<HTMLElement | null>) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    function update() {
      const header = headerRef.current;
      if (!header) return;

      const y = header.getBoundingClientRect().bottom + 2;
      const el = document.elementFromPoint(window.innerWidth / 2, y);
      const themed = el?.closest<HTMLElement>("[data-nav-theme]");
      setTheme(themed?.dataset.navTheme === "dark" ? "dark" : "light");
    }

    update();

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return theme;
}

export function Navbar({
  name,
  nav,
  navCta,
  mobileCta,
  logoHref,
  openMenuLabel,
  closeMenuLabel,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const theme = useSectionTheme(headerRef);
  const isDark = theme === "dark" && !open;

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const linkColor = isDark ? "text-white" : "text-brand-950";
  const iconColor = isDark ? "text-white" : "text-brand-950";
  const ctaClass = isDark
    ? "bg-white text-brand-950 hover:bg-brand-100"
    : "bg-brand-950 text-white hover:bg-brand-800";
  // El nav flota transparente sobre el contenido; esta sombra evita que el
  // texto se pierda cuando pasa por encima de una foto o de un título con
  // el mismo tono que el propio texto del menú.
  const textShadow = isDark
    ? "0 1px 6px rgba(0,0,0,0.45)"
    : "0 1px 4px rgba(255,255,255,0.8)";

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-6 lg:px-8">
        <a href={logoHref} className="shrink-0 overflow-hidden rounded-lg justify-self-start">
          <Image
            src="/images/logo.png"
            alt={name}
            width={675}
            height={196}
            priority
            className="h-11 w-auto"
          />
        </a>

        <nav className="hidden items-center justify-center gap-12 md:flex" style={{ textShadow }}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative py-1 text-lg font-bold tracking-tight transition-colors duration-200 ${linkColor}`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden justify-self-end md:flex">
          <a
            href="#contacto"
            className={`rounded-full px-6 py-3.5 text-base font-bold transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05] hover:shadow-lg ${ctaClass}`}
          >
            {navCta}
          </a>
        </div>

        <div className="col-start-3 flex items-center justify-self-end gap-3 md:hidden">
          <a
            href="#contacto"
            className={`rounded-full px-5 py-3 text-base font-bold transition duration-300 ${ctaClass}`}
          >
            {mobileCta}
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? closeMenuLabel : openMenuLabel}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-200 ${
              isDark ? "border-white/40" : "border-brand-300"
            } ${iconColor}`}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-movil"
          className="border-t border-brand-200 bg-white px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-xl font-bold text-brand-600 transition hover:text-brand-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
