// components/OnePageSchema.jsx
export function OnePageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Devweb Patagonia — Gestión Digital Integral",
    "description": "Tu partner digital en la Patagonia. Diseñamos webs que atraen clientes, optimizamos tu presencia en Google y te acompañamos con soporte permanente. Especialistas en General Roca, Cipolletti y Neuquén.",
    "url": "https://devwebpatagonia.com/",
    "logo": "https://devwebpatagonia.com/logo.png",
    
    // 🎯 INFORMACIÓN GEOGRÁFICA CRÍTICA
    "areaServed": [
      {
        "@type": "City",
        "name": "General Roca"
      },
      {
        "@type": "City",
        "name": "Cipolletti"
      },
      {
        "@type": "City", 
        "name": "Neuquén"
      },
      {
        "@type": "State",
        "name": "Río Negro"
      },
      {
        "@type": "Place",
        "name": "Alto Valle Patagónico"
      }
    ],
    
    "serviceArea": {
      "@type": "Place",
      "name": "Alto Valle Patagónico, General Roca, Cipolletti, Neuquén, Río Negro"
    },

    // 🛠️ SERVICIOS ESPECÍFICOS
    "makesOffer": [
      {
        "@type": "Service",
        "name": "Diseño Web Responsive",
        "description": "Diseño web moderno y responsive para todos los dispositivos en General Roca, Cipolletti y Neuquén"
      },
      {
        "@type": "Service", 
        "name": "Desarrollo Ecommerce",
        "description": "Tiendas online y carritos de compra para negocios de Río Negro y Neuquén"
      },
      {
        "@type": "Service",
        "name": "Landing Pages",
        "description": "Páginas de alta conversión para marketing digital en Alto Valle Patagónico"
      },
      {
        "@type": "Service",
        "name": "Desarrollo Next.js",
        "description": "Aplicaciones web modernas con Next.js para empresas de Patagonia"
      },
      {
        "@type": "Service",
        "name": "Optimización SEO",
        "description": "Posicionamiento web en Google para negocios locales de General Roca, Cipolletti y Neuquén"
      }
    ],

    // 📍 DIRECCIÓN (importante para negocio local)
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Río Negro",
      "addressLocality": "Alto Valle Patagónico",
      "addressCountry": "AR"
    },

    // 🌟 INFORMACIÓN ADICIONAL
    "knowsAbout": [
      "Diseño Web",
      "Desarrollo Next.js",
      "SEO",
      "Gestión Digital",
      "Presencia Online"
    ],
  }

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
    />
  )
}