"use client";

import Image from "next/image";
import { useEffect, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";

type ZoomableProps = {
  src: string;
  alt: string;
  /** Classes for the clickable trigger (sizing, rounding, position: relative comes built in). */
  className?: string;
  /** Classes for the trigger <Image> itself (object-cover, hover zoom, etc.). */
  imgClassName?: string;
  sizes?: string;
};

const TRANSITION_MS = 250;

export function Zoomable({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes,
}: ZoomableProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  function open(event: MouseEvent) {
    // Evita que el clic active el <summary> del desplegable que envuelve
    // algunas de estas fotos (el toggle nativo de <details> se dispara con
    // cualquier clic que llegue sin cancelar hasta el summary).
    event.preventDefault();
    event.stopPropagation();
    setMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }

  function close(event?: MouseEvent) {
    // Mismo motivo que en open(): sin esto, cerrar el lightbox de una foto
    // que vive dentro de un <summary> también pliega ese desplegable, porque
    // el clic sigue burbujeando por el DOM real (este modal no usa portal).
    event?.preventDefault();
    event?.stopPropagation();
    setVisible(false);
    window.setTimeout(() => setMounted(false), TRANSITION_MS);
  }

  useEffect(() => {
    if (!mounted) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mounted]);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={`Ampliar imagen: ${alt}`}
        className={`relative block cursor-zoom-in overflow-hidden ${className}`}
      >
        <Image src={src} alt={alt} fill className={imgClassName} sizes={sizes} />
      </button>

      {mounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={close}
            className={`lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6${
              visible ? " is-visible" : ""
            }`}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar imagen ampliada"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl text-white transition duration-200 hover:bg-white/10 sm:right-8 sm:top-8"
            >
              ✕
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element -- necesitamos
                que el elemento se dimensione a su tamaño visual real (sin caja
                invisible de sobra) para que "pulsar fuera" cierre siempre, sea
                cual sea el encuadre de la foto; next/image con `fill` no lo permite. */}
            <img
              src={src}
              alt={alt}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
              className={`lightbox-content h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-2xl object-contain shadow-2xl${
                visible ? " is-visible" : ""
              }`}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
