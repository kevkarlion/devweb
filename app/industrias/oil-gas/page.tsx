import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/industrias/oil-gas";
const serviceName = "Software para Oil & Gas";
const serviceDescription =
  "Sistemas que ordenan cotizaciones, reportes a operadoras y gestión de locaciones para proveedores de mantenimiento petrolero en Neuquén y Vaca Muerta.";
const areaServed = ["Neuquén Capital", "Añelo (Vaca Muerta)"];

export const metadata: Metadata = {
  title: "Software para proveedores de Oil & Gas en Vaca Muerta",
  description:
    "Software para proveedores de Oil & Gas en Neuquén y Vaca Muerta: sistemas que ordenan cotizaciones, reportes a operadoras y gestión de locaciones. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software para proveedores de Oil & Gas en Vaca Muerta",
    description:
      "Sistemas para proveedores de mantenimiento petrolero: cotizaciones ordenadas, reportes a operadoras en tiempo real y control de locaciones en una sola plataforma.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software para Oil & Gas en Neuquén y Vaca Muerta",
      },
    ],
  },
};

const pains = [
  {
    title: "Las operadoras llaman para saber el avance",
    description:
      "El supervisor de la operadora llama para saber en qué estado está el mantenimiento en la locación. Su equipo deja de trabajar para reconstruir la información que ya registró.",
  },
  {
    title: "Cotizaciones que viajan por WhatsApp",
    description:
      "Cada cotización a una operadora se arma en una planilla y viaja por mensaje. Sin versión vigente ni historial de precios, renovar un servicio implica negociar desde cero.",
  },
  {
    title: "La trazabilidad que exige la operadora",
    description:
      "Cuando la operadora pide evidencia de avance o cumplimiento, la respuesta se arma con mails y capturas. El proveedor queda expuesto y el reclamo se resuelve tarde.",
  },
  {
    title: "Locaciones que reportan distinto",
    description:
      "Cada locación carga los partes a su manera y en su propia planilla. Consolidar la operación de la semana significa cruzar archivos y confiar en la memoria de cada responsable.",
  },
];

const process = [
  {
    title: "Relevamiento del servicio contratado",
    description:
      "Documentamos el contrato de servicios que su empresa presta a la operadora: alcance del mantenimiento, locaciones, entregables y periodicidad de los reportes.",
  },
  {
    title: "Diseño del sistema de cotizaciones y reportes",
    description:
      "Construimos los flujos de cotización con precios vigentes y los reportes a operadoras sobre lo que la operación ya registra, con formato verificable.",
  },
  {
    title: "Integración con los sistemas de base",
    description:
      "El sistema se alimenta por API de planillas, ERP o partes de locación, sin duplicar la carga de trabajo de su equipo en las locaciones.",
  },
  {
    title: "Capacitación y puesta en marcha",
    description:
      "El equipo de las locaciones lo usa desde el primer mes, con acompañamiento en la presentación del portal frente a la operadora.",
  },
];

const deliverables = [
  {
    title: "Dashboard de locaciones y avance",
    description:
      "El estado de cada locación —mantenimiento, personal, equipos y avance— en una pantalla que la gerencia revisa en segundos.",
  },
  {
    title: "Portal para la operadora",
    description:
      "La operadora ve el avance, la documentación y el historial de su contrato en tiempo real, sin llamar a su equipo.",
  },
  {
    title: "CRM de cotizaciones a operadoras",
    description:
      "Historial de cotizaciones con precios vigentes, aprobaciones y vigencia, para renovar servicios sin renegociar desde cero.",
  },
  {
    title: "Automatización de reportes por locación",
    description:
      "Los reportes periódicos se generan solos a partir de los partes cargados y se envían a la operadora con fecha y responsable.",
  },
];

const risks = [
  "Que la operadora termine viendo datos internos: accesos por rol y vistas estrictas por contrato, sin costos ni márgenes visibles.",
  "Que el personal de locaciones rechace el sistema: se construye sobre los partes que ya cargan y se capacita a cada responsable desde la primera etapa.",
  "Que los datos queden en infraestructura externa: respaldo diario, accesos por rol y los datos de cada contrato bajo el control de su empresa.",
];

const faq = [
  {
    question: "¿Qué plazos maneja un sistema de reportes para operadoras?",
    answer:
      "Un portal con reportes a partir de los partes existentes está operativo en 4 a 8 semanas. El plazo depende de la integración con las planillas o el ERP que usan sus locaciones hoy.",
  },
  {
    question: "¿La operadora puede ver los datos del portal? ¿Qué exactamente?",
    answer:
      "La operadora ve lo que usted configure: avance de locaciones, documentación e historial del contrato. Los costos, márgenes y otras cuentas quedan en el dashboard gerencial.",
  },
  {
    question: "¿Trabajan con empresas que venden servicios a operadoras?",
    answer:
      "Es el caso más frecuente en Neuquén. Desarrollamos portales y sistemas de cotización para proveedores de mantenimiento que reportan a varias operadoras al mismo tiempo.",
  },
  {
    question: "¿Se integra con los sistemas que ya usan las locaciones?",
    answer:
      "Sí. Partes de trabajo, planillas y ERP se integran por API. El sistema ordena lo que ya existe en lugar de reemplazar la operación.",
  },
  {
    question: "¿Cómo manejamos la confidencialidad de los datos de la operadora?",
    answer:
      "Con accesos por rol y trazabilidad completa: quién vio qué y cuándo. Los datos sensibles no salen del control de su empresa.",
  },
  {
    question: "¿Qué soporte hay después de la implementación?",
    answer:
      "Soporte directo, mantenimiento evolutivo y actualización de reportes y cotizaciones según cambie el contrato con la operadora.",
  },
];

const related = [
  { label: "Dashboards y portales de clientes", href: "/soluciones/dashboards-y-portales-de-clientes" },
  { label: "Software a medida", href: "/soluciones/software-a-medida" },
  { label: "Añelo / Vaca Muerta", href: "/localidades/anelo-vaca-muerta" },
];

export default function OilGasPage() {
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
        title="Software para Oil & Gas: que los reportes a operadoras dejen de depender de mails"
        intro="Los proveedores de mantenimiento petrolero siguen cotizando por WhatsApp y reportando por mail. En una operación que trabaja para varias operadoras y en múltiples locaciones sobre Vaca Muerta, cada reporte manual es una hora de ingeniería perdida y un dato sin trazabilidad. Construimos el sistema que ordena cotizaciones, partes y reportes a operadoras."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en Vaca Muerta"
        ctaDescription="Relevamos su contrato con la operadora y el flujo de reportes en una semana. Le entregamos una propuesta con el entregable concreto: qué portales, qué reportes y en qué plazo quedan operativos."
      />
    </>
  );
}