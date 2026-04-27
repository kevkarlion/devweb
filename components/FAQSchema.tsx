"use client";

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta una página web profesional en la Patagonia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El precio varía según el tipo de proyecto. Una landing page parte desde $150.000 ARS, un sitio web profesional desde $300.000 ARS. Incluyen diseño personalizado, SEO básico, hosting y soporte. Te pedimos tu idea y te cotizamos sin compromiso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tarda en estar lista mi web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una landing page está lista en 7-10 días. Un sitio web profesional en 3-4 semanas. El tiempo depende de la complejidad y de cuánto rápido nos envíes los contenidos. Trabajamos con vos paso a paso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Incluyen SEO y aparece en Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todas nuestras webs incluyen SEO técnico básico: meta tags, sitemap, velocidad optimizada y estructura correcta. Para posicionamiento avanzado, tenemos planes de SEO mensual que incluyen contenido, backlinks y auditorías."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dan soporte después de que está la web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. No somos freelancer que desaparece después del proyecto. Ofrecemos planes de gestión digital que incluyen soporte técnico, actualizaciones, backups y mejoras continuas. Tu web no se queda obsoleta."
        }
      },
      {
        "@type": "Question",
        "name": "¿Pueden trabajar con empresas fuera de la Patagonia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, trabajamos con clientes de todo Argentina y Latinoamérica. Tenemos experiencia en proyectos remotos y usamos herramientas de colaboración online. La distancia no es un problema."
        }
      },
      {
        "@type": "Question",
        "name": "¿Hacen tiendas online (e-commerce)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, desarrollamos tiendas online con pasarela de pago integrada, gestión de productos, envíos y todo lo que necesitás para vender por internet. Usamos plataformas modernas y escalables."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué incluye el servicio de gestión digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es un servicio integral que cubre: desarrollo web, SEO continuo, Google Analytics, actualizaciones técnicas, soporte y estrategia digital. Es para empresas que quieren presencia digital permanente, no un proyecto puntual."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}