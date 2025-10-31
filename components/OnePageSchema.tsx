// components/OnePageSchema.jsx
export function OnePageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebDesignCompany",
    "name": "Devweb - Diseño y Desarrollo Web Patagonia",
    "description": "Agencia especializada en diseño web, desarrollo de sitios profesionales y experiencias digitales en Alto Valle, General Roca, Cipolletti, Neuquén y Río Negro",
    "url": "https://devwebpatagonia.com/",
    "logo": "https://devwebpatagonia.com/logo.png",
    "telephone": "+54-299-1234567",
    "email": "info@devwebpatagonia.com",
    
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
    "founder": {
      "@type": "Person",
      "name": "Tu Nombre" // ← Cambia por tu nombre real
    },
    
    "foundingDate": "2023", // ← Año que empezaste
    "slogan": "Diseño y Desarrollo Web Profesional en Patagonia"
  }

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
    />
  )
}