export type HubSchemaItem = {
  name: string;
  url: string;
  description: string;
};

type ServiceHubSchemaProps = {
  hubPath: string;
  hubName: string;
  items: HubSchemaItem[];
};

export function ServiceHubSchema({ hubPath, hubName, items }: ServiceHubSchemaProps) {
  const baseUrl = "https://devwebpatagonia.com";

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${baseUrl}${hubPath}#item-list`,
    "name": hubName,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": item.url,
      "description": item.description,
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}${hubPath}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": baseUrl },
      {
        "@type": "ListItem",
        "position": 2,
        "name": hubName,
        "item": `${baseUrl}${hubPath}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}