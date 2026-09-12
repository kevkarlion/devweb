import type { Metadata } from "next";
import { HubPage } from "@/components/hub-page";
import { ServiceHubSchema, type HubSchemaItem } from "@/components/ServiceHubSchema";

const baseUrl = "https://devwebpatagonia.com";
const hubPath = "/soluciones";
const hubName = "Soluciones";

export const metadata: Metadata = {
  title: "Software a medida y CRM para empresas industriales en Neuquén y el Alto Valle",
  description:
    "Software a medida, CRMs con IA, automatización, dashboards y portales de clientes para Oil & Gas, logística y agroindustria en Neuquén y el Alto Valle. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${hubPath}`,
  },
  openGraph: {
    title: "Software a medida y CRM para empresas industriales en Neuquén y el Alto Valle",
    description:
      "CRMs con IA, dashboards y portales de clientes construidos sobre el proceso real de su operación industrial en Neuquén y el Alto Valle. Solicite una propuesta técnica.",
    url: `${baseUrl}${hubPath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software a medida y CRM para empresas industriales en Neuquén y el Alto Valle",
      },
    ],
  },
};

const schemaItems: HubSchemaItem[] = [
  {
    name: "Software a medida",
    url: `${baseUrl}/soluciones/software-a-medida`,
    description:
      "Sistemas que centralizan cotizaciones, proveedores y subcontratistas de operaciones multi-locación en una sola plataforma.",
  },
  {
    name: "CRM para empresas de servicios",
    url: `${baseUrl}/soluciones/crm-para-empresas-de-servicios`,
    description:
      "CRM con IA que filtra prospectos por tonelaje, hectáreas o zona y enruta solo los proyectos que su operación puede ejecutar.",
  },
  {
    name: "Automatización con IA",
    url: `${baseUrl}/soluciones/automatizacion-con-ia`,
    description:
      "Chatbots entrenados con su base de conocimiento que responden consultas técnicas 24/7 y vuelcan cada intención al CRM.",
  },
  {
    name: "Dashboards y portales de clientes",
    url: `${baseUrl}/soluciones/dashboards-y-portales-de-clientes`,
    description:
      "Portales donde el cliente final ve el estado de mantenimientos y avances en tiempo real, sin reportes manuales.",
  },
  {
    name: "Desarrollo web B2B",
    url: `${baseUrl}/soluciones/desarrollo-web-b2b`,
    description:
      "Webs en Next.js con carga en menos de un segundo, orientadas a que el prospecto industrial pida presupuesto.",
  },
];

const cards = [
  {
    title: "Software a medida",
    href: "/soluciones/software-a-medida",
    description:
      "Su operación crece en varias locaciones y las planillas no alcanzan: cotizaciones, proveedores y subcontratistas quedan dispersos entre Roca, Neuquén y Añelo. Desarrollamos sobre esa operación un sistema que centraliza el proceso completo en una sola plataforma.",
  },
  {
    title: "CRM para empresas de servicios",
    href: "/soluciones/crm-para-empresas-de-servicios",
    description:
      "El equipo de ventas invierte horas en consultas que no califican. Un CRM con IA filtra prospectos por tonelaje, hectáreas o zona de trabajo y enruta hacia el equipo solo los proyectos que su operación puede ejecutar.",
  },
  {
    title: "Automatización con IA",
    href: "/soluciones/automatizacion-con-ia",
    description:
      "Sus clientes consultan por WhatsApp a cualquier hora y el seguimiento muere en el chat. Entrenamos chatbots con su base de conocimiento para responder consultas técnicas 24/7 y volcar cada intención directamente al CRM.",
  },
  {
    title: "Dashboards y portales de clientes",
    href: "/soluciones/dashboards-y-portales-de-clientes",
    description:
      "Las operadoras llaman para saber el avance de cada mantenimiento y su equipo deja de trabajar para explicarlo. Un portal de clientes muestra el estado en tiempo real y libera al equipo de los reportes manuales.",
  },
  {
    title: "Desarrollo web B2B",
    href: "/soluciones/desarrollo-web-b2b",
    description:
      "Su presencia en Google no refleja la envergadura de su operación y el prospecto decide por la competencia. Construimos webs en Next.js con carga en menos de un segundo, orientadas a la solicitud de presupuesto.",
  },
];

const faq = [
  {
    question: "¿Cuánto tarda en implementarse un CRM para nuestra operación?",
    answer:
      "Un CRM configurado sobre su proceso está operativo en 4 a 6 semanas. La pre-calificación por tonelaje o hectáreas se integra en la primera etapa y el equipo de ventas lo usa desde el día uno.",
  },
  {
    question: "¿Trabajan con las herramientas que ya usamos?",
    answer:
      "Sí. La plataforma se conecta por API a sus sistemas actuales: ERP, planillas, WhatsApp Business y servicios de mensajería. No reemplazamos su operación; la ordenamos.",
  },
  {
    question: "¿El código y los datos quedan en manos de nuestra empresa?",
    answer:
      "Sí. El código y los datos son de su empresa. Le entregamos el sistema con documentación y capacitación al equipo, sin contratos de permanencia.",
  },
  {
    question: "¿Dónde se almacenan los datos de nuestra operación?",
    answer:
      "En infraestructura con respaldo diario y accesos por roles. Los datos de cotizaciones, clientes y reportes no salen del control de su empresa.",
  },
];

export default function SolucionesPage() {
  return (
    <>
      <ServiceHubSchema hubPath={hubPath} hubName={hubName} items={schemaItems} />
      <HubPage
        eyebrow="Soluciones"
        title={metadata.title as string}
        intro="Su empresa cotiza, ejecuta y reporta en múltiples locaciones. Cuando la operación depende de planillas y mensajes, los prospectos se pierden, los reportes a las operadoras se atrasan y nadie sabe qué equipo está dónde. Construimos CRMs, automatización, portales y software sobre los procesos reales de Oil & Gas, logística y agroindustria en Neuquén y el Alto Valle, con entregables medibles y tiempos de implementación definidos."
        cards={cards}
        faq={faq}
        ctaTitle="Solicite una propuesta técnica para su operación"
        ctaDescription="Relevamos su proceso en una semana y le entregamos una propuesta con el entregable concreto: qué sistema, para qué cuello de botella y en qué plazo queda operativo."
        ctaLabel="Solicitar propuesta técnica"
      />
    </>
  );
}