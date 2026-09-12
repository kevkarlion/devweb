import type { Metadata } from "next";
import { HubPage } from "@/components/hub-page";
import { ServiceHubSchema, type HubSchemaItem } from "@/components/ServiceHubSchema";

const baseUrl = "https://devwebpatagonia.com";
const hubPath = "/localidades";
const hubName = "Localidades";

export const metadata: Metadata = {
  title: "Software a medida en Neuquén y el Alto Valle: General Roca, Cipolletti, Allen y Villa Regina",
  description:
    "Desarrollo de software y CRM en Neuquén, Cipolletti, General Roca, Allen, Villa Regina y Añelo (Vaca Muerta). Sistemas para Oil & Gas, logística, riego y climatización. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${hubPath}`,
  },
  openGraph: {
    title: "Software a medida en Neuquén y el Alto Valle: General Roca, Cipolletti, Allen y Villa Regina",
    description:
      "Desarrollo de software y CRM en Neuquén, Cipolletti, General Roca, Allen, Villa Regina y Añelo (Vaca Muerta) para empresas industriales B2B.",
    url: `${baseUrl}${hubPath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software a medida en Neuquén y el Alto Valle",
      },
    ],
  },
};

const schemaItems: HubSchemaItem[] = [
  {
    name: "Neuquén",
    url: `${baseUrl}/localidades/neuquen`,
    description:
      "Software para empresas de servicios a operadoras que cotizan, ejecutan y reportan sin depender de llamadas.",
  },
  {
    name: "Cipolletti",
    url: `${baseUrl}/localidades/cipolletti`,
    description:
      "CRM para transporte de cargas pesadas y logística con pre-calificación por tonelaje y zona.",
  },
  {
    name: "General Roca",
    url: `${baseUrl}/localidades/general-roca`,
    description:
      "Digitalización agroindustrial para el sector frutícola: pre-cotización de riego por hectáreas y seguimiento con datos.",
  },
  {
    name: "Villa Regina",
    url: `${baseUrl}/localidades/villa-regina`,
    description:
      "Portales de cliente para riego y climatización de galpones de empaque con estado de instalación en tiempo real.",
  },
  {
    name: "Allen",
    url: `${baseUrl}/localidades/allen`,
    description:
      "Automatización de cotizaciones para instalaciones de climatización en naves industriales.",
  },
  {
    name: "Añelo / Vaca Muerta",
    url: `${baseUrl}/localidades/anelo-vaca-muerta`,
    description:
      "Software para servicios petroleros con reportes a operadoras en tiempo real y base operativa sobre Vaca Muerta.",
  },
];

const cards = [
  {
    title: "Neuquén",
    description:
      "El proveedor de servicios a operadoras sigue cotizando por mensajes y pierde control del pipeline. Desarrollamos software para cotizar, ejecutar y reportar sin depender de llamadas desde Neuquén Capital.",
    href: "/localidades/neuquen",
  },
  {
    title: "Cipolletti",
    description:
      "Las consultas de transporte de cargas pesadas llegan sin filtro y ventas pierde horas con proyectos chicos. Un CRM pre-califica por tonelaje y zona antes de que el equipo toque un prospecto.",
    href: "/localidades/cipolletti",
  },
  {
    title: "General Roca",
    description:
      "El sector frutícola arrastra un rezago tecnológico: las cotizaciones de riego se responden sin datos. La pre-cotización por hectáreas y el seguimiento de instalaciones con dashboards cambian esa ecuación.",
    href: "/localidades/general-roca",
  },
  {
    title: "Villa Regina",
    description:
      "El productor con galpones de empaque quiere saber el estado de su instalación sin llamar. Un portal de cliente lo muestra en tiempo real y habilita la firma del próximo mantenimiento sin llamadas.",
    href: "/localidades/villa-regina",
  },
  {
    title: "Allen",
    description:
      "Las consultas por climatización de naves industriales demoran semanas sin registro. Automatizamos la cotización inicial para responder en horas y agendar la visita desde el primer contacto.",
    href: "/localidades/allen",
  },
  {
    title: "Añelo / Vaca Muerta",
    description:
      "Los servicios petroleros reportan a operadoras por mail y el avance se pierde. Construimos gestión de servicios con reportes en tiempo real y base operativa sobre Vaca Muerta.",
    href: "/localidades/anelo-vaca-muerta",
  },
];

const faq = [
  {
    question: "¿Coordinan reuniones presenciales en nuestra oficina?",
    answer:
      "Sí. Nuestra base operativa está entre Neuquén, Cipolletti y General Roca, y cubrimos el resto del Alto Valle. Relevamos el proceso en su oficina antes de escribir una línea de código.",
  },
  {
    question: "¿Trabajan con proyectos que operan en varias localidades a la vez?",
    answer:
      "Es nuestro escenario típico. Empresas con operaciones simultáneas en Roca, Neuquén y Añelo ya operan sobre una sola plataforma centralizada en lugar de tres planillas distintas.",
  },
  {
    question: "¿Qué incluye el diagnóstico técnico previo?",
    answer:
      "Una semana de relevamiento del proceso, la identificación del cuello de botella y una propuesta técnica con el entregable concreto: qué sistema, para qué problema y en qué plazo. Sin costo y sin compromiso.",
  },
];

export default function LocalidadesPage() {
  return (
    <>
      <ServiceHubSchema hubPath={hubPath} hubName={hubName} items={schemaItems} />
      <HubPage
        eyebrow="Localidades"
        title={metadata.title as string}
        intro="El software se define por el problema de la zona. En Vaca Muerta el problema son los reportes a operadoras; en el Alto Valle, las cotizaciones de riego y climatización que se responden sin datos. Desarrollamos desde Neuquén y General Roca para la operación real de cada localidad, con relevamiento en terreno antes de proponer cualquier sistema."
        cards={cards}
        faq={faq}
        ctaTitle="Solicite una propuesta técnica para su localidad"
        ctaDescription="Relevamos el proceso de su empresa en una semana y le entregamos una propuesta con el entregable concreto: qué sistema, para qué cuello de botella y en qué plazo queda operativo."
        ctaLabel="Solicitar propuesta técnica"
      />
    </>
  );
}