import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { business } from "./business";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.seo.siteUrl),
  title: business.seo.title,
  description: business.seo.description,
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
    url: "/",
    siteName: business.name,
    locale: business.seo.locale,
    type: "website",
    images: [{ url: business.seo.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: business.seo.title,
    description: business.seo.description,
    images: [business.seo.ogImage],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: business.name,
  description: business.seo.description,
  email: business.contact.email,
  telephone: business.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.addressLocality,
    addressRegion: business.address.addressRegion,
    addressCountry: business.address.addressCountry,
  },
  openingHours: ["Mo-Sa 09:00-14:00", "Mo-Fr 17:00-20:00"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <a href="#contenido" className="skip-link">
          {business.ui.skipLink}
        </a>
        {children}
      </body>
    </html>
  );
}
