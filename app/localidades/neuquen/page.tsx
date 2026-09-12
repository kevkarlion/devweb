import type { Metadata } from "next";
import { LocalityPage } from "@/components/locality-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/neuquen";
const serviceName = "Software a medida en Neuquén";
const serviceDescription =
  "Sistemas para proveedores de servicios a operadoras de Oil & Gas y empresas de mantenimiento industrial en Neuquén Capital y Vaca Muerta: cotizaciones, ingeniería de detalle y reportes sin depender de llamadas.";
const areaServed = ["Neuquén Capital", "Añelo (Vaca Muerta)", "Polo Industrial de Neuquén"];

export const metadata: Metadata = {
  title: "Software a medida en Neuquén para Oil & Gas y mantenimiento industrial",
  description:
    "Software a medida en Neuquén para mantenimiento industrial petrolero, ingeniería de detalle y empresas de obras civiles. Sistemas que ordenan cotizaciones y reportes a operadoras. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software a medida en Neuquén para Oil & Gas y mantenimiento industrial",
    description:
      "Desarrollo de software en Neuquén Capital para proveedores de mantenimiento petrolero, empresas de obras civiles e ingeniería de detalle que operan sobre Vaca Muerta.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software a medida en Neuquén para Oil & Gas y mantenimiento industrial",
      },
    ],
  },
};

const problems = [
  {
    title: "Los proveedores de mantenimiento petrolero cotizan por WhatsApp",
    description:
      "Cada cotización a una operadora se arma en una planilla y viaja por chat. Sin versión vigente ni historial de precios, renovar un servicio de mantenimiento implica negociar desde cero.",
  },
  {
    title: "La ingeniería de detalle se reporta a mano",
    description:
      "El avance de los trabajos de la semana se reconstruye con mails y capturas cuando la operadora pregunta. Cada gracias-de-memoria es una hora de ingeniería perdida y un dato sin trazabilidad.",
  },
  {
    title: "Las empresas de obras civiles no reflejan su escala",
    description:
      "El directorio de una empresa de obras que cotizó por millones no muestra sus obras activas ni su flota. La presencia digital no traduce la envergadura operativa que sí tiene en el terreno.",
  },
];

const services = [
  {
    label: "Software a medida",
    href: "/soluciones/software-a-medida",
    description:
      "Sistemas que centralizan cotizaciones, proveedores y subcontratistas de empresas que operan entre Neuquén, Roca y Añelo.",
  },
  {
    label: "CRM para empresas de servicios",
    href: "/soluciones/crm-para-empresas-de-servicios",
    description:
      "Un CRM que filtra prospectos no calificados y enruta las consultas por tamaño de contrato antes de tocar a su equipo de ventas.",
  },
  {
    label: "Dashboards y portales de clientes",
    href: "/soluciones/dashboards-y-portales-de-clientes",
    description:
      "La operadora ve el avance de sus mantenimientos en tiempo real en lugar de llamar a su equipo.",
  },
  {
    label: "Oil & Gas",
    href: "/industrias/oil-gas",
    description:
      "Sistemas que ordenan cotizaciones y reportes a operadoras para proveedores de mantenimiento petrolero.",
  },
  {
    label: "Instalaciones industriales",
    href: "/industrias/instalaciones-industriales",
    description:
      "Presencia web y dashboards de obras y flota para empresas de obras civiles e instalaciones.",
  },
];

const problemPage = {
  label: "Software para Oil & Gas en Neuquén y Vaca Muerta",
  href: "/localidades/neuquen/software-para-oil-gas",
  description:
    "La página dedicada al proveedor que cotiza por WhatsApp y reporta por mail a las operadoras. Problema, costo, proceso y entregables en una sola landing.",
};

const faq = [
  {
    question: "¿Desarrollan software para empresas que trabajan con operadoras en Vaca Muerta?",
    answer:
      "Es el caso más frecuente en Neuquén. Construimos sistemas de cotización y reportes para proveedores de mantenimiento y servicios que reportan a varias operadoras al mismo tiempo.",
  },
  {
    question: "¿Realizan el relevamiento en Neuquén Capital?",
    answer:
      "Sí. Nuestra base operativa está entre Neuquén, Cipolletti y General Roca. Relevamos el proceso en su oficina antes de escribir una línea de código.",
  },
  {
    question: "¿Qué sistema necesita una empresa de obras civiles de Neuquén?",
    answer:
      "Una web corporativa que refleje su escala y un dashboard de obras y flota. El entregable típico: catálogo de obras activas, estado de equipos y acceso para cada gerencia.",
  },
  {
    question: "¿Pueden atender empresas con operaciones en varias locaciones?",
    answer:
      "Es el escenario estándar. Empresas con operaciones simultáneas en Neuquén, Roca y Añelo operan sobre una sola plataforma en lugar de tres planillas distintas.",
  },
  {
    question: "¿Qué incluye el diagnóstico técnico previo?",
    answer:
      "Una semana de relevamiento del proceso, la identificación del cuello de botella y una propuesta técnica con el entregable concreto: qué sistema, para qué problema y en qué plazo.",
  },
];

const related = [
  { label: "Software para Oil & Gas en Neuquén y Vaca Muerta", href: "/localidades/neuquen/software-para-oil-gas" },
  { label: "Oil & Gas", href: "/industrias/oil-gas" },
  { label: "Añelo / Vaca Muerta", href: "/localidades/anelo-vaca-muerta" },
  { label: "Software a medida", href: "/soluciones/software-a-medida" },
];

export default function NeuquenPage() {
  return (
    <>
      <SpokeServiceSchema
        pagePath={pagePath}
        serviceName={serviceName}
        description={serviceDescription}
        areaServed={areaServed}
        hubPath="/localidades"
        hubName="Localidades"
      />
      <FaqSectionSchema questions={faq} />
      <LocalityPage
        eyebrow="Localidades"
        crumbHref="/localidades"
        crumbLabel="Localidades"
        pageName="Neuquén"
        localityLabel="Neuquén"
        title="Software a medida en Neuquén para Oil & Gas y mantenimiento industrial"
        intro="Neuquén Capital concentra la base operativa de quien trabaja para Vaca Muerta: mantenimiento petrolero, ingeniería de detalle y empresas de obras civiles que cotizan, ejecutan y reportan todos los días. El problema no es la operación en el terreno —que anda—, son las cotizaciones que viajan por WhatsApp y los reportes que se arman a mano. Desarrollamos los sistemas que ordenan ese flujo."
        problems={problems}
        services={services}
        problemPage={problemPage}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en Neuquén"
        ctaDescription="Relevamos el proceso de su empresa en una semana y le entregamos una propuesta con el entregable concreto: qué sistema, para qué cuello de botella y en qué plazo queda operativo."
      />
    </>
  );
}