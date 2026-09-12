export function OnePageSchema() {
  const baseUrl = "https://devwebpatagonia.com";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    "name": "Devweb Patagonia — Gestión Digital Integral",
    "description": "Software a medida, CRM con IA y dashboards para empresas industriales y de servicios en Neuquén y el Alto Valle. Reemplazamos planillas y WhatsApp disperso por infraestructura que cotiza, pre-califica y reporta sola.",
    "url": baseUrl,
    "logo": `${baseUrl}/logo-new-white.png`,
    "image": `${baseUrl}/og-image.jpg`,
    "telephone": "+5492984252859",
    "email": "hola@devwebpatagonia.com",
    "priceRange": "$$",
    "sameAs": [
      "https://wa.me/5492984252859",
      "https://www.instagram.com/devwebpatagonia",
    ],
    "areaServed": [
      { "@type": "City", "name": "General Roca" },
      { "@type": "City", "name": "Cipolletti" },
      { "@type": "City", "name": "Neuquén" },
      { "@type": "City", "name": "Villa Regina" },
      { "@type": "City", "name": "Allen" },
      { "@type": "State", "name": "Río Negro" },
      { "@type": "State", "name": "Neuquén" },
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Río Negro",
      "addressCountry": "AR",
    },
    "makesOffer": [
      {
        "@type": "Service",
        "name": "Software a Medida y CRM",
        "description": "Desarrollo de sistemas CRM, paneles administrativos y soluciones digitales a medida de tu operación"
      },
      {
        "@type": "Service",
        "name": "CRM con IA para empresas de servicios",
        "description": "Pre-calificación de clientes y seguimiento de cotizaciones y obras sin planillas ni WhatsApp disperso"
      },
      {
        "@type": "Service",
        "name": "Automatización de Procesos con IA",
        "description": "Flujos inteligentes que conectan herramientas y eliminan tareas repetitivas"
      },
      {
        "@type": "Service",
        "name": "Dashboards y Portales de Clientes",
        "description": "Panel administrativo, métricas en tiempo real y portales que le dan visibilidad a tus clientes"
      },
      {
        "@type": "Service",
        "name": "Desarrollo Web B2B",
        "description": "Sitios web optimizados para empresas industriales que cotizan y captan oportunidades en la región"
      },
    ],
    "knowsAbout": [
      "Desarrollo Web",
      "Software a Medida",
      "CRM",
      "Inteligencia Artificial",
      "SEO Local",
      "Automatización",
      "Dashboards",
      "Portales de Clientes",
      "Next.js",
    ],
    "foundingDate": "2025",
  };

  // El breadcrumb global "Inicio" se eliminó: las páginas anidadas emiten su propio BreadcrumbList
  // (ServiceHubSchema/SpokeServiceSchema) y el home no necesita migas de pan.

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}