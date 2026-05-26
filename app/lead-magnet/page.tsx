import type { Metadata } from "next";
import LeadMagnetContent from "./lead-magnet-content";

// Las fuentes se cargan globalmente desde layout.tsx

export const metadata: Metadata = {
  title: "7 Señales de que tu Web Necesita una Renewal | Devweb",
  description:
    "Descarga gratis nuestro checklist con las 7 señales que indican que tu sitio web necesita una renovación. Descubre si tu web está obsoleta y cómo mejorarla para convertir más visitantes en clientes.",
  openGraph: {
    title: "7 Señales de que tu Web Necesita una Renewal | Devweb",
    description:
      "Descarga gratis nuestro checklist con las 7 señales que indican que tu sitio web necesita una renovación.",
    images: [
      {
        url: "/og-lead-magnet.jpg",
        width: 1200,
        height: 630,
        alt: "7 Señales de que tu Web Necesita una Renewal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Señales de que tu Web Necesita una Renewal",
    description:
      "checklist gratuito: ¿tu web necesita renovación?",
    images: ["/og-lead-magnet.jpg"],
  },
};

export default function LeadMagnetPage() {
  return (
    <div>
      <LeadMagnetContent />
    </div>
  );
}