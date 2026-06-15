// components/WebsiteSchema.jsx - Añade este también
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Devweb",
    "description": "Agencia de diseño y desarrollo web en Alto Valle Patagónico, General Roca, Cipolletti, Neuquén y Río Negro",
    "url": "https://devwebpatagonia.com/",
    "publisher": {
      "@type": "Organization",
      "name": "Devweb",
      "url": "https://devwebpatagonia.com"
    }
  }

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
    />
  )
}