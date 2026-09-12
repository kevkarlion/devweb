import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/industrias/agroindustria";
const serviceName = "Digitalización agroindustrial";
const serviceDescription =
  "Automatización de riego, climatización de galpones y pre-cotización por hectáreas para el sector frutícola del Alto Valle: General Roca, Allen y Villa Regina.";
const areaServed = [
  "General Roca",
  "Villa Regina",
  "Allen",
  "Alto Valle",
  "Neuquén Capital",
];

export const metadata: Metadata = {
  title: "Digitalización agroindustrial: riego y climatización en el Alto Valle",
  description:
    "Digitalización agroindustrial para el Alto Valle: automatización de riego, climatización de galpones y pre-cotización por hectáreas con CRM por IA en General Roca, Allen y Villa Regina. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Digitalización agroindustrial: riego y climatización en el Alto Valle",
    description:
      "Sistemas para proveedores de riego y climatización del Alto Valle: pre-cotización automática por hectáreas, portales de cliente y seguimiento de instalaciones con datos.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Digitalización agroindustrial para el Alto Valle",
      },
    ],
  },
};

const pains = [
  {
    title: "El rezago tecnológico del sector frutícola",
    description:
      "El Alto Valle exporta millones de cajas, pero las cotizaciones de riego se responden con una planilla y un WhatsApp. La demanda existe y no hay sistema que la resuelva.",
  },
  {
    title: "Las cotizaciones de riego se armas sin datos de hectáreas",
    description:
      "El proveedor recibe un pedido y cotiza sin saber cuántas hectáreas involucra el sistema de riego, sin un histórico de instalaciones previas y sin un precio de referencia consistente.",
  },
  {
    title: "La climatización de galpones no deja historial",
    description:
      "La empresa que instaló una cortina térmica y un sistema de ventilación no registra qué puso y en qué galpón. Cada mantenimiento se negocia desde la memoria, no desde la obra.",
  },
  {
    title: "El productor llama para saber el estado",
    description:
      "La instalación se hizo hace dos meses y el productor quiere saber si el sistema de riego ya está programado para la temporada. Sin un portal, la respuesta vive en un WhatsApp.",
  },
];

const process = [
  {
    title: "Relevamiento de la operación de riego y climatización",
    description:
      "Documentamos los servicios que ofrece su empresa: instalación, mantenimiento de sistema de riego, climatización de galpón y presupuestos, con los datos que necesita el productor.",
  },
  {
    title: "Configuración del CRM por hectáreas y zona",
    description:
      "Los campos de hectáreas, ubicación, tipo de riego y servicio se cargan como reglas de negocio, para que cada consulta de presupuesto se filtre antes de llegar al vendedor.",
  },
  {
    title: "Pre-cotización automática y portal de seguimiento",
    description:
      "El productor consulta por WhatsApp o web y recibe una pre-cotización según sus hectáreas. El sistema genera el enlace al portal donde ve el estado de su instalación.",
  },
  {
    title: "Implementación y adopción",
    description:
      "Su equipo de ventas y el productor operan desde el primer mes. Medimos consultas convertidas, tiempo de pre-cotización y uso del portal por producto.",
  },
];

const deliverables = [
  {
    title: "Dashboard de operación de riego y climatización",
    description:
      "La cartera de clientes, el estado de cada instalación y las cotizaciones activas en una pantalla que la gerencia revisa en segundos.",
  },
  {
    title: "CRM con pre-calificación por hectáreas y zona",
    description:
      "Cada consulta se filtra por cantidad de hectáreas, ubicación y servicio antes de entrar al pipeline, para que el vendedor solo reciba lo que la operación puede ejecutar.",
  },
  {
    title: "Automatización de pre-cotizaciones de riego",
    description:
      "El productor consulta por el sistema de riego y recibe una pre-cotización según hectáreas y tipo de instalación, con agendamiento de visita incluido.",
  },
  {
    title: "Portal de seguimiento del productor",
    description:
      "El productor ve en qué estado está la instalación de su riego o climatización, y puede firmar el próximo servicio sin llamar.",
  },
];

const risks = [
  "Que el productor no use el portal: se construye sobre el WhatsApp y el mail que la empresa ya usa, y la primera presentación se acompaña con la operación.",
  "Que la pre-cotización no se ajuste a la realidad: los valores y los umbrales se calibran con los primeros meses de uso real y se ajustan con su equipo.",
  "Que los datos de los productores queden expuestos: accesos por estación, por cliente y por servicio, con trazabilidad completa.",
];

const faq = [
  {
    question: "¿Cuánto tarda en implementarse el sistema para riego agroindustrial?",
    answer:
      "El CRM con pre-cotización está operativo en 4 a 6 semanas. El portal de seguimiento se integra en la segunda etapa, cuando la cartera de clientes empieza a registrarse.",
  },
  {
    question: "¿Cómo se calcula la pre-cotización de riego?",
    answer:
      "Con los datos de hectáreas, tipo de sistema (goteo, aspersión, pivote) y zona. La pre-cotización se genera como propuesta base que el vendedor ajusta antes de enviar.",
  },
  {
    question: "¿Trabajan con productores del Alto Valle o solo con proveedores?",
    answer:
      "Con los proveedores de riego y climatización que atienden al productor. El productor accede al portal; quien gestiona la operación es la empresa que instaló o mantiene el sistema.",
  },
  {
    question: "¿Se integra con los datos de clima de la zona?",
    answer:
      "Si el proveedor quiere incluir lecturas o historiales de clima en el sistema, lo integramos. Primero trabajamos con lo que la operación ya produce antes de sumar fuentes externas.",
  },
  {
    question: "¿Qué pasa si el servicio no es solo riego? ¿También climatización?",
    answer:
      "El sistema cubre ambos: mantenimiento de sistema de riego y climatización de galpón, con campos y reglas diferentes para cada tipo de servicio.",
  },
  {
    question: "¿Qué soporte hay después de la implementación?",
    answer:
      "Soporte directo, mantenimiento evolutivo y calibración de pre-cotizaciones según la temporada de riego y los precios que maneje la empresa.",
  },
];

const related = [
  { label: "Software para empresas de servicios", href: "/soluciones/crm-para-empresas-de-servicios" },
  { label: "Dashboards y portales de clientes", href: "/soluciones/dashboards-y-portales-de-clientes" },
  { label: "General Roca", href: "/localidades/general-roca" },
];

export default function AgroindustriaPage() {
  return (
    <>
      <SpokeServiceSchema
        pagePath={pagePath}
        serviceName={serviceName}
        description={serviceDescription}
        areaServed={areaServed}
        hubPath="/industrias"
        hubName="Industrias"
      />
      <FaqSectionSchema questions={faq} />
      <SpokePage
        eyebrow="Industrias"
        crumbHref="/industrias"
        crumbLabel="Industrias"
        pageName={serviceName}
        title="Digitalización agroindustrial: que cada cotización de riego llegue con datos, no con un WhatsApp"
        intro="El Alto Valle mueve millones de cajas de fruta y recibe decenas de solicitudes de riego y climatización que se responden sin datos: sin saber las hectáreas, sin un precio de referencia y sin un historial de la instalación. El proveedor que aparece primero y responde con números se queda con el productor. Construimos sistemas que pre-cotizan según hectáreas, registran la instalación y muestran el estado sin que nadie llame a preguntar."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación agroindustrial"
        ctaDescription="Relevamos su cartera de clientes y su proceso de cotización en una semana. Le entregamos una propuesta con el entregable concreto: qué pre-calificación, qué portal y en qué plazo queda operativo para la próxima temporada."
      />
    </>
  );
}