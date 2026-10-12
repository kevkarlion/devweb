import type { Metadata } from "next";
import LeadMagnetContent from "./lead-magnet-content";

// Las fuentes se cargan globalmente desde layout.tsx

export const metadata: Metadata = {
  title: "7 señales de digitalización industrial",
  description:
    "Cotizaciones por WhatsApp, planillas y reportes: guía gratuita para detectar qué automatizar con CRM, IA y dashboards. Solicite diagnóstico técnico.",
  alternates: {
    canonical: "https://devwebpatagonia.com/lead-magnet",
  },
  openGraph: {
    title: "7 señales de digitalización industrial | Devweb Patagonia",
    description:
      "Guía gratuita para detectar qué procesos de su operación automatizar con CRM, IA y dashboards.",
    images: [
      {
        url: "/og-lead-magnet.jpg",
        width: 1200,
        height: 630,
        alt: "7 señales de que su operación industrial necesita digitalización",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7 señales de digitalización industrial",
    description:
      "Guía gratuita para automatizar cotizaciones, planillas y reportes con CRM, IA y dashboards.",
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