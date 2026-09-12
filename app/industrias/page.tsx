import type { Metadata } from "next";
import { HubPage } from "@/components/hub-page";
import { ServiceHubSchema, type HubSchemaItem } from "@/components/ServiceHubSchema";

const baseUrl = "https://devwebpatagonia.com";
const hubPath = "/industrias";
const hubName = "Industrias";

export const metadata: Metadata = {
  title: "Software industrial para Oil & Gas, logística y agroindustria en Neuquén y el Alto Valle",
  description:
    "Software y CRMs para el sector industrial en Neuquén y el Alto Valle: proveedores de Oil & Gas, transporte de cargas, riego agroindustrial e instalaciones industriales. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${hubPath}`,
  },
  openGraph: {
    title: "Software industrial para Oil & Gas, logística y agroindustria en Neuquén y el Alto Valle",
    description:
      "CRMs con IA, dashboards y portales de clientes para proveedores de Oil & Gas, logística, agroindustria e instalaciones industriales en Neuquén y el Alto Valle.",
    url: `${baseUrl}${hubPath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software industrial para Oil & Gas, logística y agroindustria",
      },
    ],
  },
};

const schemaItems: HubSchemaItem[] = [
  {
    name: "Oil & Gas (Vaca Muerta)",
    url: `${baseUrl}/industrias/oil-gas`,
    description:
      "Sistemas que ordenan cotizaciones y reportes a operadoras para proveedores de mantenimiento petrolero en Añelo y Neuquén.",
  },
  {
    name: "Logística y transporte",
    url: `${baseUrl}/industrias/logistica-y-transporte`,
    description:
      "Dashboards de flota y grúas con CRM que pre-califica consultas por tonelaje y zona para empresas de cargas especiales.",
  },
  {
    name: "Agroindustria (riego y climatización)",
    url: `${baseUrl}/industrias/agroindustria`,
    description:
      "Pre-cotización de riego por hectáreas y seguimiento de instalaciones para galpones de empaque del Alto Valle.",
  },
  {
    name: "Instalaciones industriales",
    url: `${baseUrl}/industrias/instalaciones-industriales`,
    description:
      "Web corporativa y dashboard de obras y flota para empresas con subcontratistas en varias locaciones.",
  },
];

const cards = [
  {
    title: "Oil & Gas (Vaca Muerta)",
    href: "/industrias/oil-gas",
    description:
      "Los proveedores de mantenimiento para operadoras siguen cotizando por WhatsApp y reportando por mail. Construimos el sistema que ordena cotizaciones y reportes a operadoras, con base operativa en Añelo y Neuquén Capital.",
  },
  {
    title: "Logística y transporte",
    href: "/industrias/logistica-y-transporte",
    description:
      "La flota de grúas y cargas especiales se coordina por teléfono y la facturación llega tarde. Un dashboard muestra dónde está cada equipo y el CRM pre-califica consultas por tonelaje y zona antes de tocar al equipo de ventas.",
  },
  {
    title: "Agroindustria (riego y climatización)",
    href: "/industrias/agroindustria",
    description:
      "Los proveedores de riego pierden prospectos porque cotizan por WhatsApp: sin registro, sin seguimiento, sin pre-calificación. Un CRM con IA pre-cotiza según hectáreas y agenda la visita al establecimiento sin intervención manual.",
  },
  {
    title: "Instalaciones industriales",
    href: "/industrias/instalaciones-industriales",
    description:
      "Una obra con subcontratistas en varias locaciones no se puede administrar con planillas. Web corporativa que refleje su envergadura y dashboard de obras y flota para controlar proveedores en una sola plataforma.",
  },
];

const faq = [
  {
    question: "¿Trabajan con empresas que venden servicios a operadoras?",
    answer:
      "Sí, es el caso más frecuente. Desarrollamos portales donde la operadora ve el estado de mantenimientos, el avance de locaciones y la documentación, sin llamar por teléfono ni esperar un mail.",
  },
  {
    question: "¿Desarrollan software para pymes o solo para grandes empresas?",
    answer:
      "Para ambas. Una empresa de 20 empleados y una de 200 pierden lo mismo cuando cotizan por mensajes. La escala solo define el alcance de la primera etapa de implementación.",
  },
  {
    question: "¿Su empresa necesita un área de sistemas para operar el software?",
    answer:
      "No. Entregamos documentación, capacitamos al equipo que lo va a usar y el mantenimiento evolutivo queda a cargo de Devweb con soporte directo.",
  },
];

export default function IndustriasPage() {
  return (
    <>
      <ServiceHubSchema hubPath={hubPath} hubName={hubName} items={schemaItems} />
      <HubPage
        eyebrow="Industrias"
        title={metadata.title as string}
        intro="Cada sector industrial acumula un cuello de botella distinto: reportes a operadoras que nadie digitaliza, flotas que no se ubican, cotizaciones de riego que se responden sin datos. Relevamos el proceso, identificamos la causa de la pérdida y construimos tecnología sobre esa operación, no sobre un catálogo de servicios."
        cards={cards}
        faq={faq}
        ctaTitle="Solicite una propuesta técnica para su industria"
        ctaDescription="Relevamos el proceso de su sector en una semana y le entregamos una propuesta con el entregable concreto: qué sistema, para qué cuello de botella y en qué plazo queda operativo."
        ctaLabel="Solicitar propuesta técnica"
      />
    </>
  );
}