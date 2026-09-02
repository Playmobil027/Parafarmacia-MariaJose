"use client";

import { useEffect, useRef, useState } from "react";
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

  return (
    <header className="border-b border-brand-200 bg-brand-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href={logoHref} className="text-lg font-black tracking-tight">
          {name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-600 transition hover:text-brand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-950"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contacto"
            className="rounded-full bg-brand-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-950"
          >
            {navCta}
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contacto"
            className="rounded-full bg-brand-950 px-4 py-2.5 text-sm font-semibold text-white"
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
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-300 text-brand-600 transition hover:border-brand-950 hover:text-brand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-950"
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
          className="border-t border-brand-200 bg-brand-50 px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-brand-600 transition hover:text-brand-950"
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
