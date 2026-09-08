import { business } from "./business";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBadges } from "./components/TrustBadges";
import { Marquee } from "./components/Marquee";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { ContactForm } from "./components/ContactForm";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar
        name={business.name}
        nav={business.nav}
        navCta={business.cta.navCta}
        mobileCta={business.cta.mobileCta}
        logoHref={business.ui.logoHref}
        openMenuLabel={business.ui.openMenu}
        closeMenuLabel={business.ui.closeMenu}
      />

      <main id="contenido" className="min-h-screen bg-brand-50 text-brand-950">
        <Hero
          eyebrow={business.eyebrow}
          headline={business.headline}
          description={business.description}
          ctaPrimary={business.cta.primary}
          ctaSecondary={business.cta.secondary}
          badges={business.heroBadges}
          image={business.heroImage}
        />

        <TrustBadges badges={business.trustBadges} />

        <Marquee items={business.marqueeItems} />

        <Services
          eyebrow={business.servicesIntro.eyebrow}
          title={business.servicesIntro.title}
          services={business.services}
        />

        <Projects
          eyebrow={business.projectsIntro.eyebrow}
          title={business.projectsIntro.title}
          description={business.projectsIntro.description}
          projects={business.projects}
        />

        <Process
          eyebrow={business.processIntro.eyebrow}
          title={business.processIntro.title}
          steps={business.process}
        />

        <ContactForm
          eyebrow={business.contactSection.eyebrow}
          title={business.contactSection.title}
          description={business.contactSection.description}
          badges={business.contactSection.badges}
          formNote={business.contactSection.formNote}
          successMessage={business.contactSection.successMessage}
          fallbackNote={business.contactSection.fallbackNote}
          labels={business.contactForm.labels}
          placeholders={business.contactForm.placeholders}
          submitLabel={business.contactForm.submitLabel}
          email={business.contact.email}
          phone={business.contact.phone}
          callLabel={business.ui.callLabel}
          hours={business.hours}
        />
      </main>

      <Footer
        name={business.name}
        copyright={business.footer.copyright}
        line={business.footer.line}
      />

      <WhatsAppButton
        phone={business.contact.whatsapp}
        message={business.contact.whatsappMessage}
        label={business.ui.whatsappLabel}
      />
    </>
  );
}
