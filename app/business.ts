// Único punto de configuración de contenido del negocio.
// Datos de contacto, dirección, horario y fotos son reales (proporcionados
// por el cliente). Sigue pendiente: el dominio real (seo.siteUrl) antes de
// desplegar en producción.

export type NavLink = {
  href: string;
  label: string;
};

export type TrustBadge = {
  title: string;
  description: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
};

export type Project = {
  image: string;
  category: string;
  title: string;
  description: string;
  alt: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const business = {
  name: "PARAFARMACIA M. JOSÉ GRANERO",
  location: "El Genovés, Valencia",
  tagline: "Parafarmacia en El Genovés (Valencia)",
  eyebrow: "Parafarmacia en El Genovés",
  headline: "Parafarmacia M. José y casa de apuestas del Estado.",
  description:
    "Dermocosmética, cestas para bebé y punto de Loterías y Apuestas del Estado, con atención cercana y personalizada en cada visita.",

  address: {
    streetAddress: "Avinguda de Gandia, 36",
    addressLocality: "El Genovés",
    addressRegion: "Valencia",
    addressCountry: "ES",
  },

  contact: {
    email: "mariajoseparafarmacia@gmail.com",
    // Formato E.164 (con "+"), es el que necesitan los enlaces "tel:".
    phone: "+34 962 22 92 28",
    // wa.me requiere el número SIN "+" ni espacios.
    whatsapp: "34605843571",
    whatsappMessage:
      "Hola, me gustaría consultar sobre un producto o servicio de la parafarmacia.",
  },

  hours: {
    mornings: "Lunes a sábado: 9:00 – 14:00",
    afternoons: "Lunes a viernes: 17:00 – 20:00",
  },

  nav: [
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Nuestro espacio" },
    { href: "#proceso", label: "Cómo trabajamos" },
  ] satisfies NavLink[],

  cta: {
    primary: "Consultar disponibilidad",
    secondary: "Ver servicios",
    navCta: "Contactar",
    mobileCta: "Contacto",
    call: "Llamar",
  },

  heroBadges: [
    "Atención personalizada",
    "Asesoramiento profesional",
    "Productos de confianza",
  ],

  heroImage: {
    src: "/images/hero.jpg",
    alt: "Fachada de Parafarmacia M. José Granero en El Genovés",
    eyebrow: "Dermocosmética · Bebé · Loterías",
    caption: "Cerca de ti, con el consejo de siempre.",
  },

  trustBadges: [
    {
      title: "Atención cercana",
      description: "Te asesoramos con calma, sin prisas, en cada visita.",
    },
    {
      title: "Marcas de confianza",
      description: "Trabajamos con laboratorios y marcas reconocidas.",
    },
    {
      title: "Asesoramiento profesional",
      description: "Te ayudamos a encontrar lo que mejor se adapta a ti.",
    },
  ] satisfies TrustBadge[],

  services: [
    {
      number: "01",
      title: "Parafarmacia",
      description:
        "Amplia selección de productos de parafarmacia: dermocosmética, higiene, nutrición y herbolario, con asesoramiento personalizado.",
    },
    {
      number: "02",
      title: "Cestas para bebé",
      description:
        "Preparamos cestas para bebé a medida, ideales para regalar en nacimientos y bautizos.",
    },
    {
      number: "03",
      title: "Loterías y Apuestas del Estado",
      description:
        "Punto de venta oficial de Loterías y Apuestas del Estado.",
    },
  ] satisfies Service[],

  servicesIntro: {
    eyebrow: "Servicios",
    title: "Todo lo que necesitas para cuidarte cada día.",
  },

  projectsIntro: {
    eyebrow: "Nuestro espacio",
    title: "Así es nuestra parafarmacia.",
    description:
      "Un vistazo a nuestro local en avinguda de Gandia, en El Genovés.",
  },

  projects: [
    {
      image: "/images/fachada.jpg",
      category: "Fachada",
      title: "Entrada de la parafarmacia",
      description:
        "Nos encontrarás en avinguda de Gandia, 36, en El Genovés.",
      alt: "Fachada de Parafarmacia M. José Granero",
    },
    {
      image: "/images/interior.jpg",
      category: "Interior",
      title: "Nuestras estanterías",
      description:
        "Productos organizados y siempre a mano para encontrar lo que necesitas.",
      alt: "Interior de la parafarmacia con estanterías de producto",
    },
    {
      image: "/images/dermocosmetica.jpg",
      category: "Dermocosmética",
      title: "Sección de dermocosmética",
      description: "Marcas de confianza para el cuidado facial y corporal.",
      alt: "Estantería de productos de dermocosmética",
    },
    {
      image: "/images/bebes.jpg",
      category: "Bebé",
      title: "Sección de bebé",
      description:
        "Todo lo necesario para el cuidado del bebé, incluidas nuestras cestas para regalo.",
      alt: "Estantería de productos para bebé",
    },
  ] satisfies Project[],

  processIntro: {
    eyebrow: "Cómo trabajamos",
    title: "Un trato cercano, de principio a fin.",
  },

  // Borrador: confirmar con la clienta si estos pasos reflejan bien su
  // forma de atender.
  process: [
    {
      step: "Paso 01",
      title: "Cuéntanos qué necesitas",
      description:
        "Nos explicas tu consulta en la tienda, por teléfono o por WhatsApp.",
    },
    {
      step: "Paso 02",
      title: "Si no lo tenemos, te lo encargamos",
      description:
        "¿Buscas un producto que no tenemos en ese momento? Puedes pedir cualquier producto para encargar y te avisamos en cuanto llega.",
    },
    {
      step: "Paso 03",
      title: "Te asesoramos hasta resolverlo",
      description:
        "Te recomendamos lo más adecuado y te acompañamos hasta que quedes satisfecho.",
    },
  ] satisfies ProcessStep[],

  contactSection: {
    eyebrow: "Contacta con nosotros",
    title: "¿Tienes alguna consulta?",
    description:
      "Escríbenos y te responderemos lo antes posible para ayudarte con lo que necesites.",
    badges: ["Atención cercana", "Respuesta rápida", "Sin compromiso"],
    formNote: "Al enviar este formulario se abrirá tu aplicación de correo.",
    successMessage:
      "Hemos intentado abrir tu aplicación de correo con el mensaje ya redactado.",
    fallbackNote:
      "¿No se ha abierto nada? Escríbenos directamente o contáctanos por WhatsApp.",
  },

  contactForm: {
    labels: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      message: "Cuéntanos tu consulta",
    },
    placeholders: {
      name: "Tu nombre",
      email: "tu@email.com",
      phone: "600 000 000",
      message: "Quería preguntar por...",
    },
    submitLabel: "Enviar consulta",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Parafarmacia M. José Granero`,
    line: "Parafarmacia · Cestas para bebé · Loterías y Apuestas del Estado",
  },

  ui: {
    logoHref: "/",
    skipLink: "Saltar al contenido principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    whatsappLabel: "Contactar por WhatsApp",
    callLabel: "Llamar por teléfono",
  },

  seo: {
    title: "Parafarmacia M. José Granero | El Genovés, Valencia",
    description:
      "Parafarmacia en El Genovés (Valencia): dermocosmética, cestas para bebé y Loterías y Apuestas del Estado. Atención cercana y personalizada.",
    // Dominio placeholder (.example está reservado por RFC 2606 y nunca
    // resuelve): sustitúyelo por el dominio real antes de desplegar.
    siteUrl: "https://tu-dominio.example",
    ogImage: "/images/hero.jpg",
    locale: "es_ES",
  },
};
