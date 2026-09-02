"use client";

import { useState } from "react";

type ContactFormProps = {
  eyebrow: string;
  title: string;
  description: string;
  badges: string[];
  formNote: string;
  successMessage: string;
  fallbackNote: string;
  labels: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  submitLabel: string;
  email: string;
  phone: string;
  callLabel: string;
  hours?: {
    mornings: string;
    afternoons: string;
  };
};

export function ContactForm({
  eyebrow,
  title,
  description,
  badges,
  formNote,
  successMessage,
  fallbackNote,
  labels,
  placeholders,
  submitLabel,
  email,
  phone,
  callLabel,
  hours,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contacto" className="bg-brand-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-300">
            {description}
          </p>

          <div className="mt-10 space-y-5 text-sm text-brand-300">
            {badges.map((badge) => (
              <p key={badge}>✓ {badge}</p>
            ))}
          </div>

          <a
            href={`tel:${phone}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-brand-300"
          >
            {callLabel}: {phone}
          </a>

          {hours && (
            <div className="mt-6 text-sm text-brand-300">
              <p>{hours.mornings}</p>
              <p>{hours.afternoons}</p>
            </div>
          )}
        </div>

        {/*
          Demo: el envío usa mailto para funcionar sin backend. mailto no
          confirma la entrega, por eso se muestra un aviso tras enviar con
          una vía de contacto alternativa (email directo / WhatsApp).
          Para producción, sustituye `action`/`method`/`encType` por una
          integración real (API route propia, Resend, Formspree, etc.)
          y añade sus credenciales como variables de entorno.
        */}
        <form
          action={`mailto:${email}`}
          method="post"
          encType="text/plain"
          onSubmit={() => setSubmitted(true)}
          className="rounded-3xl bg-white p-6 text-brand-950 shadow-2xl sm:p-8"
        >
          <div className="grid gap-6">
            <div>
              <label htmlFor="nombre" className="mb-2 block text-sm font-semibold">
                {labels.name}
              </label>

              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder={placeholders.name}
                className="w-full rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 outline-none transition focus:border-brand-950"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                {labels.email}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={placeholders.email}
                className="w-full rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 outline-none transition focus:border-brand-950"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="mb-2 block text-sm font-semibold">
                {labels.phone}
              </label>

              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder={placeholders.phone}
                className="w-full rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 outline-none transition focus:border-brand-950"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="mb-2 block text-sm font-semibold">
                {labels.message}
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                placeholder={placeholders.message}
                className="w-full resize-none rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 outline-none transition focus:border-brand-950"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-brand-950 px-6 py-4 font-semibold text-white transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {submitLabel}
            </button>

            <p className="text-xs leading-5 text-brand-500">{formNote}</p>

            <div role="status" aria-live="polite">
              {submitted && (
                <p className="rounded-2xl bg-brand-100 px-4 py-3 text-sm leading-5 text-brand-800">
                  {successMessage} {fallbackNote}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
