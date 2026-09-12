import type { Metadata } from "next";
import { LocalityPage } from "@/components/locality-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/general-roca";
const serviceName = "Digitalización para empresas agroindustriales en General Roca";
const serviceDescription =
  "Software para el sector agroindustrial de General Roca: pre-cotización de instalación de sistemas de riego por hectáreas, CRM para gestión de clientes y seguimiento de instalaciones con dashboards.";
const areaServed = ["General Roca", "Parque Industrial de General Roca", "Alto Valle"];

export const metadata: Metadata = {
  title: "Digitalización para empresas agroindustriales en General Roca",
  description:
    "Digitalización agroindustrial en General Roca: software para instalación de sistemas de riego agroindustrial, riego automatizado y gestión de clientes del sector frutícola. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Digitalización para empresas agroindustriales en General Roca",
    description:
      "CRMs e IA que pre-cotizan riego por hectáreas y agenda la visita al productor, más dashboards de instalaciones para el parque industrial y el sector frutícola de General Roca.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Digitalización para empresas agroindustriales en General Roca",
      },
    ],
  },
};

const problems = [
  {
    title: "Las cotizaciones de riego se responden sin datos",
    description:
      "El productor pide un sistema de riego para sus hectáreas y la cotización se arma a mano, sin presupuestar por superficie ni por tipo de cultivo. Cada respuesta tarda días y no queda registrada.",
  },
  {
    title: "El rezago tecnológico del sector frutícola",
    description:
      "Empresas del parque industrial y del sector frutícola siguen operando con planillas y WhatsApp. La oportunidad está en automatizar lo que hoy se hace dos veces: cotizar y seguir la instalación.",
  },
  {
    title: "El productor llama para saber el estado de su instalación",
    description:
      "El cliente pregunta por la instalación y alguien del equipo reconstruye el avance. Sin un registro común, la visita del próximo mantenimiento se programa con llamados de ida y vuelta.",
  },
];

const services = [
  {
    label: "CRM para empresas de servicios",
    href: "/soluciones/crm-para-empresas-de-servicios",
    description:
      "CRM con IA que pre-cotiza riego según las hectáreas del productor y agenda la visita sin pasar por una llamada.",
  },
  {
    label: "Automatización con IA",
    href: "/soluciones/automatizacion-con-ia",
    description:
      "Chatbots entrenados con su base de conocimiento que responden consultas técnicas de riego 24/7 y vuelcan los datos al CRM.",
  },
  {
    label: "Dashboards y portales de clientes",
    href: "/soluciones/dashboards-y-portales-de-clientes",
    description:
      "El productor ve el estado de su instalación de riego y el mantenimiento en tiempo real, sin llamar a su equipo.",
  },
  {
    label: "Software a medida",
    href: "/soluciones/software-a-medida",
    description:
      "Sistemas de cotización y seguimiento de obras para empresas del parque industrial de General Roca.",
  },
  {
    label: "Agroindustria",
    href: "/industrias/agroindustria",
    description:
      "Digitalización del sector frutícola: riego, climatización y gestión de clientes con datos.",
  },
];

const problemPage = {
  label: "Digitalización agroindustrial en General Roca: riego y gestión de clientes",
  href: "/localidades/general-roca/digitalizacion-agroindustrial",
  description:
    "La página dedicada al proveedor de riego que pierde prospectos cotizando por WhatsApp. Un CRM con IA pre-cotiza por hectáreas y agenda la visita.",
};

const faq = [
  {
    question: "¿El sistema pre-cotiza un sistema de riego por hectáreas?",
    answer:
      "Sí. Con la superficie, el cultivo y las reglas de presupuesto que usted define, el CRM genera una pre-cotización automática. El productor recibe una respuesta en horas y la visita se agenda sin pasar por ventas.",
  },
  {
    question: "¿Sirve para empresas del parque industrial de General Roca?",
    answer:
      "Sí. Desarrollamos software de cotización y seguimiento de obras para empresas de instalaciones y construcción que operan desde el parque industrial de General Roca.",
  },
  {
    question: "¿Cómo ve el productor el estado de su instalación?",
    answer:
      "A través de un portal de cliente: avance de la instalación, mantenimientos realizados y próximos, sin llamar a su equipo. El dato se carga una vez y el productor lo consulta solo.",
  },
  {
    question: "¿Relevan el proceso en General Roca?",
    answer:
      "Sí. Nuestra base operativa está entre Neuquén, Cipolletti y General Roca. Relevamos el proceso en su oficina antes de proponer cualquier sistema.",
  },
  {
    question: "¿La decisión de riego puede respaldarse con datos?",
    answer:
      "Sí. Los sistemas de riego automatizado se integran al dashboard: superficie, consumo y estado del equipo pasan a ser datos sobre los que el productor decide, no estimaciones.",
  },
];

const related = [
  { label: "Digitalización agroindustrial en General Roca", href: "/localidades/general-roca/digitalizacion-agroindustrial" },
  { label: "Agroindustria", href: "/industrias/agroindustria" },
  { label: "Villa Regina", href: "/localidades/villa-regina" },
  { label: "CRM para empresas de servicios", href: "/soluciones/crm-para-empresas-de-servicios" },
];

export default function GeneralRocaPage() {
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
        pageName="General Roca"
        localityLabel="General Roca"
        title="Digitalización para empresas agroindustriales en General Roca"
        intro="General Roca combina el parque industrial con el sector frutícola más grande del Alto Valle. El proveedor de riego pierde prospectos porque cotiza por WhatsApp y sin datos; el productor no sabe en qué estado está su instalación salvo que llame. Ahí entra la digitalización: CRM con IA que pre-cotiza por hectáreas, sistemas de riego automatizado con respaldo de datos y portales donde el productor ve su instalación en tiempo real."
        problems={problems}
        services={services}
        problemPage={problemPage}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en General Roca"
        ctaDescription="Relevamos el flujo de cotizaciones y de instalaciones en una semana y le entregamos una propuesta con el entregable concreto: qué CRM, qué portales y en qué plazo quedan operativos."
      />
    </>
  );
}