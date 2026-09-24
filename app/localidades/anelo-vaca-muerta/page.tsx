import type { Metadata } from "next";
import { LocalityPage } from "@/components/locality-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/anelo-vaca-muerta";
const serviceName = "Software para empresas de servicios petroleros en Añelo y Vaca Muerta";
const serviceDescription =
  "Sistemas de gestión de servicios petroleros con base en Añelo y Vaca Muerta: cotizaciones, reportes a operadoras, subcontratistas y seguimiento de locaciones multi-sitio.";
const areaServed = ["Añelo", "Vaca Muerta", "Neuquén Capital"];

export const metadata: Metadata = {
  title: "Software para empresas de servicios petroleros en Añelo y Vaca Muerta",
  description:
    "Software para servicios petroleros en Añelo y Vaca Muerta: gestión de cotizaciones, subcontratistas y reportes a operadoras desde la base operativa de Oil & Gas. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software para empresas de servicios petroleros en Añelo y Vaca Muerta",
    description:
      "Sistemas para proveedores de servicios petroleros con base en Añelo: locaciones múltiples, subcontratistas y reportes a operadoras en una sola plataforma.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software para servicios petroleros en Añelo y Vaca Muerta",
      },
    ],
  },
};

const problems = [
  {
    title: "Locaciones múltiples que reportan distinto",
    description:
      "Una empresa con operaciones en Roca, Neuquén y Añelo carga los partes a su manera en cada locación. Consolidar la semana significa cruzar archivos y confiar en la memoria de cada responsable.",
  },
  {
    title: "Subcontratistas y proveedores sin un registro único",
    description:
      "Cada proveedor que entra a una locación existe en la memoria del encargado. Sin historial de precios ni de cumplimiento, cada servicio se negocia desde cero.",
  },
  {
    title: "Cotizaciones y reportes a operadoras que se arman a mano",
    description:
      "La operadora pide seguimiento de las cotizaciones y el avance de los servicios. La respuesta se arma con mails y capturas, sin trazabilidad ni versión vigente.",
  },
];

const services = [
  {
    label: "Software a medida",
    href: "/soluciones/software-a-medida",
    description:
      "Sistemas multi-locación que centralizan cotizaciones, proveedores y subcontratistas entre Roca, Neuquén y Añelo.",
  },
  {
    label: "Dashboards y portales de clientes",
    href: "/soluciones/dashboards-y-portales-de-clientes",
    description:
      "Reportes a operadoras en tiempo real: la operadora ve el avance sin llamar a su equipo.",
  },
  {
    label: "CRM para empresas de servicios",
    href: "/soluciones/crm-para-empresas-de-servicios",
    description:
      "CRM que filtra prospectos y enruta consultas por tamaño de contrato para el mercado petrolero.",
  },
  {
    label: "Oil & Gas",
    href: "/industrias/oil-gas",
    description:
      "Sistemas que ordenan cotizaciones y reportes para proveedores de mantenimiento y servicios petroleros.",
  },
  {
    label: "Logística y transporte",
    href: "/industrias/logistica-y-transporte",
    description:
      "Gestión de flota y equipos que viajan y operan sobre Vaca Muerta desde el Alto Valle.",
  },
];

const problemPage = {
  label: "Software para servicios petroleros en Añelo y Vaca Muerta",
  href: "/localidades/anelo-vaca-muerta/software-para-servicios-petroleros",
  description:
    "La página dedicada a la operación multi-locación: gestión de subcontratistas, cotizaciones y reportes con seguimiento completo, en una sola landing problemática.",
};

const faq = [
  {
    question: "¿Trabajan con proveedores de servicios a operadoras en Vaca Muerta?",
    answer:
      "Sí. Añelo concentra la base operativa de quien trabaja para operadoras. Desarrollamos sistemas de cotización, subcontratistas y reportes para esos proveedores, con relevamiento en la locación.",
  },
  {
    question: "¿El sistema maneja operaciones en varias locaciones a la vez?",
    answer:
      "Sí. Es el escenario típico: empresas con operaciones simultáneas en Roca, Neuquén y Añelo operan sobre una sola plataforma en lugar de tres planillas distintas.",
  },
  {
    question: "¿Cómo se gestionan los subcontratistas?",
    answer:
      "Cada subcontratista registra disponibilidad, documentación y órdenes de trabajo con su historial de precios y cumplimiento. La contratación deja de depender de la memoria del encargado.",
  },
  {
    question: "¿La operadora ve los reportes en tiempo real?",
    answer:
      "Sí, lo que usted configure. Avance de locaciones, documentación e historial del contrato. Los costos y márgenes quedan solo en el dashboard gerencial.",
  },
  {
    question: "¿Relevan el proceso en Añelo?",
    answer:
      "Sí. Cubrimos Neuquén Capital y Vaca Muerta con relevamiento en terreno, incluyendo las locaciones de Añelo antes de proponer cualquier sistema.",
  },
];

const related = [
  { label: "Software para servicios petroleros", href: "/localidades/anelo-vaca-muerta/software-para-servicios-petroleros" },
  { label: "Oil & Gas", href: "/industrias/oil-gas" },
  { label: "Neuquén", href: "/localidades/neuquen" },
  { label: "Software a medida", href: "/soluciones/software-a-medida" },
];

export default function AneloVacaMuertaPage() {
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
        pageName="Añelo / Vaca Muerta"
        localityLabel="Añelo y Vaca Muerta"
        title="Software para servicios petroleros en Añelo y Vaca Muerta"
        intro="Añelo es la base operativa de los servicios petroleros: operadoras, proveedores y subcontratistas que se mueven entre locaciones y reportan todos los días. El costo de operar como hoy: cada locación reporta distinto, los subcontratistas se gestionan de memoria y los reportes a operadoras se arman a mano. Construimos la plataforma que une cotizaciones, subcontratistas y reportes en una sola operación."
        problems={problems}
        services={services}
        problemPage={problemPage}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en Añelo"
        ctaDescription="Relevamos su operación entre Roca, Neuquén y Añelo en una semana y le entregamos una propuesta con el entregable concreto: qué sistema, para qué cuello de botella y en qué plazo queda operativo."
      />
    </>
  );
}