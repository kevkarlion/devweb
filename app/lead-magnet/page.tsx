import type { Metadata } from "next";
import LeadMagnetContent from "./lead-magnet-content";

// Las fuentes se cargan globalmente desde layout.tsx

export const metadata: Metadata = {
  title: "7 señales de que tu operación necesita digitalización | Devweb Patagonia",
  description:
    "Guía gratuita para detectar qué procesos de tu operación (cotizaciones, planillas, seguimiento de clientes) se pueden automatizar con CRM, IA y dashboards.",
  alternates: {
    canonical: "https://devwebpatagonia.com/lead-magnet",
  },
  openGraph: {
    title: "7 señales de que tu operación necesita digitalización | Devweb Patagonia",
    description:
      "Guía gratuita para detectar qué procesos de tu operación (cotizaciones, planillas, seguimiento de clientes) se pueden automatizar con CRM, IA y dashboards.",
    images: [
      {
        url: "/og-lead-magnet.jpg",
        width: 1200,
        height: 630,
        alt: "7 señales de que tu operación necesita digitalización",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7 señales de que tu operación necesita digitalización",
    description:
      "Guía gratuita para automatizar cotizaciones, planillas y seguimiento de clientes.",
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