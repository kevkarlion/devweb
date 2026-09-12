type SpokeServiceSchemaProps = {
  pagePath: string;
  serviceName: string;
  description: string;
  areaServed: string[];
  hubPath: string;
  hubName: string;
};

export function SpokeServiceSchema({
  pagePath,
  serviceName,
  description,
  areaServed,
  hubPath,
  hubName,
}: SpokeServiceSchemaProps) {
  const baseUrl = "https://devwebpatagonia.com";
  const pageUrl = `${baseUrl}${pagePath}`;

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    "name": serviceName,
    "serviceType": serviceName,
    "description": description,
    "url": pageUrl,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Devweb Patagonia",
      "url": baseUrl,
    },
    "areaServed": areaServed.map((zone) => ({ "@type": "Place", "name": zone })),
    "audience": { "@type": "BusinessAudience" },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": baseUrl },
      {
        "@type": "ListItem",
        "position": 2,
        "name": hubName,
        "item": `${baseUrl}${hubPath}`,
      },
      { "@type": "ListItem", "position": 3, "name": serviceName, "item": pageUrl },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}