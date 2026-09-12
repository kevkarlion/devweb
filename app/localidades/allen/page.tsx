import type { Metadata } from "next";
import { LocalityPage } from "@/components/locality-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/allen";
const serviceName = "Software para agroindustria y climatización en Allen";
const serviceDescription =
  "Software para empresas de climatización de naves industriales y empaques frutícolas en Allen: cotización inicial automática, CRM de gestión de clientes y portales de seguimiento de instalaciones.";
const areaServed = ["Allen", "Alto Valle"];

export const metadata: Metadata = {
  title: "Software para agroindustria y climatización en Allen",
  description:
    "Software para agroindustria y climatización en Allen: automatización de cotizaciones de naves industriales, CRM y portales de cliente para empaques frutícolas. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software para agroindustria y climatización en Allen",
    description:
      "Desarrollo de software en Allen para climatización de naves industriales y producción frutícola: consultas que se responden en horas y portales que muestran el estado de la instalación.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software para agroindustria y climatización en Allen",
      },
    ],
  },
};

const problems = [
  {
    title: "Las consultas de climatización demoran semanas sin registro",
    description:
      "Un empaque pide climatización para su nave y el presupuesto se responde cuando se puede. Sin una cotización inicial automática, el prospecto decide con la competencia en el medio.",
  },
  {
    title: "El empaque y la producción frutícola se siguen por llamadas",
    description:
      "El encargado de producción llama para saber el estado de la nave. Sin un portal, cada avance se comunica dos veces: se hace en la obra y se explica por teléfono.",
  },
  {
    title: "Las instalaciones coexisten sin un registro común",
    description:
      "Cada nave, cámara o galpón tiene su historia en la memoria del técnico que la instaló. Cuando cambia el responsable o crece la temporada, el historial no aparece.",
  },
];

const services = [
  {
    label: "Automatización con IA",
    href: "/soluciones/automatizacion-con-ia",
    description:
      "Cotización inicial de climatización en horas y consultas técnicas respondidas 24/7, con los datos volcados al CRM.",
  },
  {
    label: "CRM para empresas de servicios",
    href: "/soluciones/crm-para-empresas-de-servicios",
    description:
      "Un CRM que ordena las consultas de climatización, agenda la visita y deja el historial de cada empaque.",
  },
  {
    label: "Dashboards y portales de clientes",
    href: "/soluciones/dashboards-y-portales-de-clientes",
    description:
      "El productor ve el estado de su nave en tiempo real y confirma el próximo mantenimiento desde el portal.",
  },
  {
    label: "Agroindustria",
    href: "/industrias/agroindustria",
    description:
      "Digitalización de riego y climatización del sector frutícola de Allen y sus alrededores.",
  },
];

const faq = [
  {
    question: "¿Cómo se automatiza una cotización de climatización de nave?",
    answer:
      "Con las reglas que usted define —metros cuadrados, tipo de nave, equipamiento y precio base— el sistema arma una cotización inicial automática. El empaque recibe una respuesta en horas, no en semanas.",
  },
  {
    question: "¿El portal de cliente muestra el estado de la instalación?",
    answer:
      "Sí. El productor ve qué se hizo, qué falta y cuándo vuelve su equipo, desde el celular o la computadora del empaque.",
  },
  {
    question: "¿Sirve para empaques con cámaras frigoríficas?",
    answer:
      "Sí. Las cámaras se integran al mismo registro: temperatura de consigna, mantenimientos y alarmas en el portal del cliente y en el dashboard de su empresa.",
  },
  {
    question: "¿Relevan el proceso en Allen?",
    answer:
      "Sí. Cubrimos el Alto Valle con relevamiento en terreno. Documentamos el flujo del empaque y la climatización en su oficina antes de proponer un sistema.",
  },
  {
    question: "¿Cuánto tarda en implementarse?",
    answer:
      "Una automatización de cotizaciones con CRM está operativa en 6 a 8 semanas. Un portal de cliente con registro de instalaciones, en 4 a 8 semanas.",
  },
];

const related = [
  { label: "Villa Regina", href: "/localidades/villa-regina" },
  { label: "Digitalización de riego y climatización en Villa Regina", href: "/localidades/villa-regina/riego-y-climatizacion-digital" },
  { label: "Agroindustria", href: "/industrias/agroindustria" },
  { label: "General Roca", href: "/localidades/general-roca" },
];

export default function AllenPage() {
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
        pageName="Allen"
        localityLabel="Allen"
        title="Software para agroindustria y climatización en Allen"
        intro="Allen combina empaques y producción frutícola con una demanda fuerte de climatización de naves industriales. El costo de operar como hoy: las consultas de climatización tardan semanas sin registro, y el empaque se sigue por llamadas. Automatizamos la cotización inicial para responder en horas, con un CRM que agenda la visita y un portal donde el productor ve el estado de su nave sin llamar."
        problems={problems}
        services={services}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en Allen"
        ctaDescription="Relevamos el flujo de consultas y de instalaciones en una semana y le entregamos una propuesta con el entregable concreto: qué automatización, qué portal y en qué plazo queda operativo."
      />
    </>
  );
}