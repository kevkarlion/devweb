import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/soluciones/crm-para-empresas-de-servicios";
const serviceName = "CRM para empresas de servicios industriales";
const serviceDescription =
  "CRM con pre-calificación por IA que filtra prospectos por tonelaje, hectáreas o zona de trabajo y enruta hacia el equipo de ventas solo los proyectos que la operación puede ejecutar.";
const areaServed = ["Neuquén Capital", "Cipolletti", "Alto Valle", "Añelo (Vaca Muerta)"];

export const metadata: Metadata = {
  title: "CRM para empresas de servicios industriales con pre-calificación por IA",
  description:
    "CRM con IA para empresas de servicios industriales en Neuquén y el Alto Valle: pre-califica prospectos por tonelaje, hectáreas o zona y enruta solo los proyectos ejecutables. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "CRM para empresas de servicios industriales con pre-calificación por IA",
    description:
      "Un CRM con IA que filtra cada consulta de presupuesto por tonelaje, hectáreas o zona antes de tocar a su equipo de ventas, y registra todo el historial de la negociación.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - CRM para empresas de servicios industriales con pre-calificación por IA",
      },
    ],
  },
};

const pains = [
  {
    title: "El WhatsApp como único canal de cotización",
    description:
      "Cada consulta llega por un chat distinto y a un vendedor distinto. De qué se habló, qué se cotizó y a qué precio, se pierde con el scroll del día.",
  },
  {
    title: "Horas de venta perdidas en proyectos no ejecutables",
    description:
      "El representante descubre después de dos semanas que el proyecto es de poca carga o en una zona que su flota no cubre. La consulta no se filtra nunca y el costo lo paga el equipo de ventas.",
  },
  {
    title: "El prospecto que se enfría sin seguimiento",
    description:
      "La consulta que no se responde en 48 horas se va con la competencia. Sin tareas ni recordatorios, el seguimiento depende de la memoria de cada vendedor.",
  },
  {
    title: "La gerencia no sabe qué hay en el pipeline",
    description:
      "Los datos de ventas viven en la cabeza de cada representante. Cerrar un mes equivale a una ronda de llamadas para reconstruir la información que el sistema debería dar solo.",
  },
];

const process = [
  {
    title: "Relevamiento de su embudo de ventas",
    description:
      "Documentamos cómo entran hoy las consultas (WhatsApp, formularios web, referidos) y qué información necesita su equipo para calificar un proyecto: tonelaje, hectáreas, zona y tipo de servicio.",
  },
  {
    title: "Configuración del CRM sobre su operación",
    description:
      "Los campos que definen un proyecto ejecutable se cargan como reglas de negocio, no como casillas vacías que cada vendedor interpreta a su manera.",
  },
  {
    title: "Entrenamiento del modelo de pre-calificación",
    description:
      "Con su historial de proyectos ganados, perdidos y descartados, la IA aprende a reconocer una consulta seria y la enruta con prioridad al equipo correcto.",
  },
  {
    title: "Puesta en marcha y medición",
    description:
      "El equipo de ventas opera el CRM desde el primer día. Medimos tiempo de respuesta y porcentaje de consultas calificadas para ajustar los umbrales de la IA.",
  },
];

const deliverables = [
  {
    title: "Dashboard de pipeline y ventas",
    description:
      "Cuántas consultas entran, cuántas califican y dónde se estancan, en una pantalla que la gerencia abre en segundos sin pedir informes.",
  },
  {
    title: "CRM de prospectos con historial completo",
    description:
      "Cada cliente con su historial de consultas, cotizaciones y cierres, accesible para todo el equipo de ventas desde cualquier dispositivo.",
  },
  {
    title: "Automatización de seguimiento",
    description:
      "Recordatorios por WhatsApp y mail cuando un prospecto calificado pasa varios días sin respuesta, para que ninguna consulta seria se enfríe.",
  },
  {
    title: "Portal de cotización para el prospecto",
    description:
      "Un enlace donde el prospecto ve su cotización, la acepta o la consulta, sin mails de ida y vuelta y con la versión vigente siempre a la vista.",
  },
];

const risks = [
  "Que el CRM quede como un sistema más sin usar: se configura sobre su proceso real y el equipo operativo lo usa desde el día uno con capacitación previa.",
  "Que la IA filtre mal y se pierdan prospectos: los descartados quedan en una cola de revisión con el motivo, y los umbrales se ajustan con su equipo en las primeras semanas.",
  "Que los datos de clientes queden expuestos: accesos por rol, respaldo diario y los datos no salen del control de su empresa.",
];

const faq = [
  {
    question: "¿Cuánto tarda en implementarse un CRM con pre-calificación por IA?",
    answer:
      "Un CRM configurado sobre su proceso está operativo en 4 a 6 semanas. La pre-calificación por tonelaje, hectáreas o zona se integra en la primera etapa y el equipo de ventas lo usa desde el día uno.",
  },
  {
    question: "¿Cómo aprende la IA a calificar? ¿Parte de cero?",
    answer:
      "No. La entrenamos con su historial real de proyectos ganados, perdidos y descartados. En las primeras semanas los umbrales se ajustan revisando cada caso junto a su equipo.",
  },
  {
    question: "¿Se integra con WhatsApp y las herramientas que ya usamos?",
    answer:
      "Sí. WhatsApp Business, los formularios de su web y su ERP se conectan por API. Cada consulta entra al CRM con su historial completo y su origen.",
  },
  {
    question: "¿Qué pasa si la IA descarta un prospecto que sí servía?",
    answer:
      "Los descartados no se borran: quedan en una cola de revisión con el motivo del descarte. Su equipo decide si cambia el umbral o recupera el prospecto.",
  },
  {
    question: "¿Quién capacita a nuestro equipo de ventas?",
    answer:
      "Nosotros. Capacitamos al equipo en el uso operativo del CRM y dejamos documentación para incorporar vendedores nuevos sin pasar por Devweb.",
  },
  {
    question: "¿Los datos de nuestros clientes quedan resguardados?",
    answer:
      "Sí. Accesos por rol, respaldo diario y los datos de clientes y cotizaciones no salen del control de su empresa.",
  },
];

const related = [
  { label: "Logística y transporte", href: "/industrias/logistica-y-transporte" },
  { label: "Oil & Gas", href: "/industrias/oil-gas" },
  { label: "Agroindustria", href: "/industrias/agroindustria" },
];

export default function CrmParaServiciosPage() {
  return (
    <>
      <SpokeServiceSchema
        pagePath={pagePath}
        serviceName={serviceName}
        description={serviceDescription}
        areaServed={areaServed}
        hubPath="/soluciones"
        hubName="Soluciones"
      />
      <FaqSectionSchema questions={faq} />
      <SpokePage
        eyebrow="Soluciones"
        crumbHref="/soluciones"
        crumbLabel="Soluciones"
        pageName={serviceName}
        title="CRM con IA que pre-califica cada consulta antes de tocar a su equipo de ventas"
        intro="Cada consulta de presupuesto entra sin filtro: proyectos chicos, zonas lejanas, cargas que su operación no puede ejecutar. Su equipo de ventas pierde horas respondiendo consultas que nunca se concretan. Un CRM con pre-calificación por IA filtra cada prospecto por tonelaje, hectáreas o zona de trabajo y enruta hacia el equipo solo los proyectos que la operación puede ejecutar."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación"
        ctaDescription="Relevamos su embudo de ventas en una semana y le entregamos una propuesta con el entregable concreto: qué campos de calificación, qué automatizaciones y en qué plazo queda operativo."
      />
    </>
  );
}