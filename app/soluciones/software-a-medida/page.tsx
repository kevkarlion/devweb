import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/soluciones/software-a-medida";
const serviceName = "Software a medida para empresas industriales";
const serviceDescription =
  "Sistemas a medida que centralizan cotizaciones, proveedores, subcontratistas y reportes de operaciones industriales multi-locación en Neuquén y el Alto Valle.";
const areaServed = ["Neuquén Capital", "General Roca", "Alto Valle", "Añelo (Vaca Muerta)"];

export const metadata: Metadata = {
  title: "Software a medida para empresas industriales en Neuquén y el Alto Valle",
  description:
    "Software a medida para empresas industriales multi-locación de Neuquén y el Alto Valle: cotizaciones, proveedores, subcontratistas y reportes en una sola plataforma. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software a medida para empresas industriales en Neuquén y el Alto Valle",
    description:
      "Sistemas a medida para operaciones industriales en varias locaciones: cotizaciones, proveedores y subcontratistas centralizados en una sola plataforma, con relevamiento previo en su empresa.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software a medida para empresas industriales en Neuquén y el Alto Valle",
      },
    ],
  },
};

const pains = [
  {
    title: "Cotizaciones que se arman tres veces por semana",
    description:
      "Cada locación arma su propuesta en una planilla distinta. Cuando el cliente pide una variante, nadie sabe qué versión estaba vigente y la cotización sale más tarde que la competencia.",
  },
  {
    title: "Proveedores y subcontratistas sin un registro único",
    description:
      "Los proveedores existen solo en la memoria del encargado de compras. Sin historial de precios ni de cumplimiento, cada obra se negocia desde cero y los riesgos se descubren cuando ya es tarde.",
  },
  {
    title: "Nadie ve el avance real de la operación",
    description:
      "La gerencia se entera del estado de una obra cuando alguien responde un correo. Los datos existen, pero están en tantos lugares que dejar de operar con planillas dispersas es el primer entregable.",
  },
];

const process = [
  {
    title: "Relevamiento en sus locaciones",
    description:
      "En la primera semana visitamos su operación en Neuquén, General Roca o Añelo y documentamos el flujo real de cotizaciones, aprobaciones y reportes, con las personas que lo ejecutan.",
  },
  {
    title: "Modelado del sistema sobre ese proceso",
    description:
      "No adaptamos un producto genérico. Diseñamos las pantallas y las reglas sobre cómo trabaja su empresa hoy y cómo debería operar el próximo año.",
  },
  {
    title: "Implementación sin frenar la operación",
    description:
      "Cada módulo entra por etapas y en paralelo con el proceso actual. Capacitamos al equipo que lo usa y validamos con casos reales del mes de cada locación.",
  },
  {
    title: "Medición y evolución continua",
    description:
      "Definimos métricas al inicio (tiempo de cotización, % de subcontratistas con historial, horas de reporte) y ajustamos el sistema para mejorarlas etapa por etapa.",
  },
];

const deliverables = [
  {
    title: "Dashboard de operación multi-locación",
    description:
      "El estado de cotizaciones, obras y proveedores en una sola pantalla, con datos actualizados el mismo día y accesos por rol para cada gerencia.",
  },
  {
    title: "CRM de clientes y cotizaciones",
    description:
      "Historial completo de cada cliente industrial: qué pidió, a qué precio se cotizó y en qué quedó la negociación, accesible para todo el equipo.",
  },
  {
    title: "Automatización de cotizaciones recurrentes",
    description:
      "Las propuestas que se repiten (mantenimientos, servicios de campaña) se generan con plantillas y precios vigentes, sin rearmarlas a mano cada vez.",
  },
  {
    title: "Portal para proveedores y subcontratistas",
    description:
      "Un espacio donde cada subcontratista registra disponibilidad, carga documentación y recibe órdenes de trabajo sin mails intermedios.",
  },
];

const risks = [
  "Que el sistema quede atado a un tercero: el código y los datos son de su empresa, con documentación y capacitación del equipo.",
  "Que la implementación interrumpa la operación diaria: etapas cortas en paralelo con el proceso actual, sin apagones de un día para el otro.",
  "Que el software quede obsoleto: evolución continua con métricas definidas al inicio del proyecto y soporte posterior a la entrega.",
];

const faq = [
  {
    question: "¿Cuánto tarda desarrollarse un software a medida para nuestra operación?",
    answer:
      "Un sistema de cotizaciones y seguimiento de obras está operativo en 8 a 12 semanas. El relevamiento toma la primera semana y la implementación entra por módulos, sin frenar la operación.",
  },
  {
    question: "¿Integran el sistema con el ERP o las planillas que ya usamos?",
    answer:
      "Sí. Conectamos por API a su ERP, planillas y WhatsApp Business. No reemplazamos los sistemas existentes: el software centraliza lo que hoy vive disperso entre locaciones.",
  },
  {
    question: "¿Nuestra empresa necesita un área de sistemas para operarlo?",
    answer:
      "No. Entregamos documentación y capacitamos al equipo que lo va a usar. El mantenimiento evolutivo queda a cargo de Devweb con soporte directo.",
  },
  {
    question: "¿Dónde se guardan los datos de cotizaciones y proveedores?",
    answer:
      "En infraestructura con respaldo diario y accesos por roles. Los datos sensibles de sus clientes y proveedores no salen del control de su empresa.",
  },
  {
    question: "¿Qué pasa si el alcance cambia a mitad del desarrollo?",
    answer:
      "Trabajamos en etapas cortas: cada módulo se valida antes de pasar al siguiente. Un cambio de alcance se incorpora en la etapa abierta sin reescribir lo ya entregado.",
  },
  {
    question: "¿Dan soporte después de la entrega?",
    answer:
      "Sí. Después de la implementación continúa una etapa de soporte y evolución: corrección de errores, mejoras propuestas por su equipo y monitoreo del sistema en cada locación.",
  },
];

const related = [
  { label: "Oil & Gas", href: "/industrias/oil-gas" },
  { label: "Instalaciones industriales", href: "/industrias/instalaciones-industriales" },
  { label: "Software en Neuquén", href: "/localidades/neuquen" },
];

export default function SoftwareAMedidaPage() {
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
        title="Software a medida para empresas industriales: deje de operar con planillas dispersas"
        intro="Cuando una empresa industrial cotiza, contrata y reporta desde Roca, Neuquén y Añelo al mismo tiempo, la planilla deja de ser una herramienta y pasa a ser el cuello de botella. Desarrollamos sistemas sobre su proceso real —cotizaciones, proveedores, subcontratistas y reportes— para que cada locación opere con los mismos datos y nadie vuelva a preguntar dónde quedó algo."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Agende una reunión de relevamiento con ingeniería"
        ctaDescription="En una semana documentamos cómo opera su empresa hoy y le entregamos una propuesta técnica con el entregable concreto: qué módulos, para qué cuello de botella y en qué plazo quedan operativos."
      />
    </>
  );
}