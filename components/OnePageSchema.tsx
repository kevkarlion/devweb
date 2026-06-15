export function OnePageSchema() {
  const baseUrl = "https://devwebpatagonia.com";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    "name": "Devweb Patagonia — Gestión Digital Integral",
    "description": "Tu partner digital en la Patagonia. Diseñamos webs que atraen clientes, optimizamos tu presencia en Google y te acompañamos con soporte permanente. Especialistas en General Roca, Cipolletti y Neuquén.",
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
        "description": "Desarrollo de sistemas CRM, paneles administrativos y soluciones digitales personalizadas"
      },
      {
        "@type": "Service",
        "name": "Desarrollo Web Profesional",
        "description": "Sitios web modernos, rápidos y optimizados con Next.js y diseño UI/UX"
      },
      {
        "@type": "Service",
        "name": "Optimización SEO Local",
        "description": "Posicionamiento en Google para negocios de General Roca, Cipolletti y Neuquén"
      },
      {
        "@type": "Service",
        "name": "Automatización de Procesos",
        "description": "Flujos inteligentes que conectan herramientas y mejoran la eficiencia operativa"
      },
      {
        "@type": "Service",
        "name": "Dashboards de Negocio",
        "description": "Métricas clave en tiempo real para tomar decisiones con datos concretos"
      },
    ],
    "knowsAbout": [
      "Desarrollo Web",
      "Software a Medida",
      "CRM",
      "SEO Local",
      "Automatización",
      "Dashboards",
      "Next.js",
      "Marketing Digital",
    ],
    "foundingDate": "2025",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": baseUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}