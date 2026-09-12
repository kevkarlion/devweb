import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/neuquen/software-para-oil-gas";
const serviceName = "Software para Oil & Gas en Neuquén";
const serviceDescription =
  "Sistemas que ordenan cotizaciones y reportes a operadoras para proveedores de mantenimiento y servicios petroleros con base en Neuquén Capital y operaciones sobre Vaca Muerta.";
const areaServed = ["Neuquén Capital", "Añelo (Vaca Muerta)"];

export const metadata: Metadata = {
  title: "Software para Oil & Gas en Neuquén y Vaca Muerta",
  description:
    "Software para Oil & Gas en Neuquén y Vaca Muerta: sistemas que ordenan cotizaciones y reportes a operadoras para proveedores de mantenimiento petrolero. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software para Oil & Gas en Neuquén y Vaca Muerta",
    description:
      "Sistemas para proveedores de servicios a operadoras: cotizaciones con precios vigentes, partes de locación y reportes a operadoras en tiempo real, desde Neuquén Capital.",
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
    title: "Cotizaciones que viajan por WhatsApp y se renuegan desde cero",
    description:
      "Cada cotización a una operadora se arma en una planilla y sale por mensaje. Cuando caduca la vigencia o cambia el alcance, nadie sabe qué versión estaba vigente y el servicio renegocia sin historial de precios.",
  },
  {
    title: "Reportes por mail que se arman con capturas",
    description:
      "La operadora pide evidencia de avance en las locaciones y la respuesta se arma con mails y capturas de pantalla. Cada reporte manual es una hora de ingeniería de detalle perdida y un dato sin trazabilidad.",
  },
  {
    title: "La operadora llama para saber el estado del mantenimiento",
    description:
      "El supervisor de la operadora llama y su equipo deja el trabajo para reconstruir algo que ya está registrado. El dato existe, pero vive disperso entre planillas, chats y la memoria del encargado.",
  },
  {
    title: "Locaciones que reportan distinto",
    description:
      "Cada locación sobre Vaca Muerta carga los partes a su manera. Consolidar la semana significa cruzar archivos y confiar en que cada responsable hizo lo mismo que el anterior.",
  },
];

const process = [
  {
    title: "Relevamiento del contrato de servicios",
    description:
      "Documentamos el contrato con la operadora: alcance del mantenimiento o servicio, locaciones, entregables y periodicidad de los reportes. También el costo real de armarlos a mano.",
  },
  {
    title: "Diseño del sistema de cotizaciones y partes",
    description:
      "Construimos los flujos de cotización con precios vigentes y las planillas de parte por locación, sobre la forma en que su equipo trabaja hoy en Neuquén Capital.",
  },
  {
    title: "Integración con lo que ya carga su operación",
    description:
      "Partes, planillas y ERP se conectan por API. El sistema ordena lo que ya existe en las locaciones en lugar de duplicar la carga de trabajo de su equipo.",
  },
  {
    title: "Reportes a operadoras en formato verificable",
    description:
      "Los reportes se generan solos a partir de los partes cargados y se presentan a la operadora con fecha y responsable. Su equipo deja de armar PDFs a mano.",
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
      "Los reportes periódicos se generan a partir de los partes cargados y se envían a la operadora con fecha y responsable.",
  },
];

const risks = [
  "Que la operadora vea datos internos: accesos por rol y vistas estrictas por contrato, sin costos ni márgenes visibles.",
  "Que el personal de locaciones rechace el sistema: se construye sobre los partes que ya cargan y se capacita a cada responsable desde la primera etapa.",
  "Que los datos queden en infraestructura externa: respaldo diario, accesos por rol y la información de cada contrato bajo el control de su empresa.",
];

const faq = [
  {
    question: "¿Cuánto tarda en quedar operativo un sistema de reportes para operadoras?",
    answer:
      "Un portal con reportes a partir de los partes existentes está operativo en 4 a 8 semanas. El plazo depende de la integración con las planillas o el ERP que usan sus locaciones hoy.",
  },
  {
    question: "¿La operadora puede ver los datos del portal? ¿Qué exactamente?",
    answer:
      "La operadora ve lo que usted configure: avance de locaciones, documentación e historial del contrato. Los costos, márgenes y otras cuentas quedan en el dashboard gerencial.",
  },
  {
    question: "¿Trabajan con proveedores que reportan a varias operadoras?",
    answer:
      "Es el caso más frecuente en Neuquén. Desarrollamos portales y sistemas de cotización para proveedores de mantenimiento que reportan a varias operadoras a la vez.",
  },
  {
    question: "¿Se integra con los sistemas que ya usan las locaciones?",
    answer:
      "Sí. Partes de trabajo, planillas y ERP se integran por API. El sistema ordena lo que ya existe en lugar de reemplazar la operación.",
  },
  {
    question: "¿Cómo manejan la confidencialidad frente a la operadora?",
    answer:
      "Con accesos por rol y trazabilidad completa: quién vio qué y cuándo. Los datos sensibles no salen del control de su empresa.",
  },
];

const related = [
  { label: "Neuquén", href: "/localidades/neuquen" },
  { label: "Añelo / Vaca Muerta", href: "/localidades/anelo-vaca-muerta" },
  { label: "Dashboards y portales de clientes", href: "/soluciones/dashboards-y-portales-de-clientes" },
  { label: "Oil & Gas", href: "/industrias/oil-gas" },
];

export default function NeuquenOilGasPage() {
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
      <SpokePage
        eyebrow="Localidades · Neuquén"
        crumbHref="/localidades"
        crumbLabel="Localidades"
        pageName="Software para Oil & Gas"
        title="Software para Oil & Gas en Neuquén y Vaca Muerta: que cotizar y reportar deje de ser manual"
        intro="Los proveedores de mantenimiento y servicios petroleros con base en Neuquén Capital siguen cotizando por WhatsApp y reportando por mail a las operadoras. En una operación que trabaja para varias operadoras y en múltiples locaciones sobre Vaca Muerta, cada cotización sin versión vigente y cada reporte armado a mano es un contrato en riesgo y una hora de ingeniería perdida. Construimos el sistema que ordena cotizaciones, partes y reportes."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en Neuquén"
        ctaDescription="Relevamos su contrato con la operadora y el flujo de cotizaciones y reportes en una semana. Le entregamos una propuesta con el entregable concreto: qué portales, qué reportes y en qué plazo quedan operativos."
      />
    </>
  );
}