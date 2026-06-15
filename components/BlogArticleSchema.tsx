export function BlogArticleSchema({
  title,
  description,
  url,
  publishedTime,
  imageUrl = "/og-image.jpg",
}: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  imageUrl?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description: description,
    image: `https://devwebpatagonia.com${imageUrl}`,
    author: {
      "@type": "Organization",
      name: "Devweb Patagonia",
      url: "https://devwebpatagonia.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Devweb Patagonia",
      logo: {
        "@type": "ImageObject",
        url: "https://devwebpatagonia.com/logo-new-white.png",
      },
    },
    datePublished: publishedTime,
    dateModified: publishedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "es-AR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
