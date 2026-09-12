import type { Metadata } from "next";
import { LocalityPage } from "@/components/locality-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/villa-regina";
const serviceName = "Software para riego y climatización de empaques en Villa Regina";
const serviceDescription =
  "Portales de cliente y software de gestión para empresas de climatización de naves industriales, riego y cámaras frigoríficas que atienden galpones de empaque frutícola en Villa Regina.";
const areaServed = ["Villa Regina", "Alto Valle"];

export const metadata: Metadata = {
  title: "Software para riego y climatización de empaques en Villa Regina",
  description:
    "Software para climatización de naves industriales, riego y galpones de empaque frutícola en Villa Regina: portales de cliente con estado de instalación en tiempo real. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software para riego y climatización de empaques en Villa Regina",
    description:
      "Portales de cliente para que el productor de Villa Regina vea el estado de su instalación de climatización y riego en tiempo real, sin llamadas.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software para riego y climatización de empaques en Villa Regina",
      },
    ],
  },
};

const problems = [
  {
    title: "El productor llama para saber el estado de su galpón",
    description:
      "Cada productor con un galpón de empaque o cámara frigorífica pregunta por teléfono en qué estado está su climatización. Su equipo deja de trabajar para responder uno por uno.",
  },
  {
    title: "El próximo mantenimiento se renueva con llamados",
    description:
      "Renovar un mantenimiento de climatización depende de que el encargado del empaque llame de nuevo. Sin un registro del estado de cada nave, el servicio se pierde o se agenda tarde.",
  },
  {
    title: "Las cotizaciones de climatización tardan semanas",
    description:
      "Una consulta de climatización de nave industrial se responde cuando se puede. Sin una cotización inicial automática, el prospecto decide antes con la competencia.",
  },
];

const services = [
  {
    label: "Dashboards y portales de clientes",
    href: "/soluciones/dashboards-y-portales-de-clientes",
    description:
      "El productor ve el estado de su instalación y el mantenimiento en tiempo real, y firma el próximo servicio sin llamadas.",
  },
  {
    label: "CRM para empresas de servicios",
    href: "/soluciones/crm-para-empresas-de-servicios",
    description:
      "Un CRM que responde consultas de climatización y riego en horas y agenda la visita desde el primer contacto.",
  },
  {
    label: "Software a medida",
    href: "/soluciones/software-a-medida",
    description:
      "Sistemas de seguimiento de instalaciones para empresas que operan en varios galpones del Alto Valle.",
  },
  {
    label: "Agroindustria",
    href: "/industrias/agroindustria",
    description:
      "Digitalización de riego y climatización del sector frutícola de Villa Regina e Ingeniero Huergo.",
  },
];

const problemPage = {
  label: "Digitalización de riego y climatización de empaques en Villa Regina",
  href: "/localidades/villa-regina/riego-y-climatizacion-digital",
  description:
    "La página dedicada al proveedor que quiere que el productor vea su instalación sin llamar: portales de cliente, problema, costo y entregables en una sola landing.",
};

const faq = [
  {
    question: "¿Qué incluye el portal de cliente para un galpón de empaque?",
    answer:
      "El productor ve el estado de su climatización, los mantenimientos realizados y los próximos, y la documentación de su instalación. Sin llamadas y sin mails de seguimiento.",
  },
  {
    question: "¿El sistema gestiona cámaras frigoríficas?",
    answer:
      "Sí. Las cámaras frigoríficas se integran al mismo registro: temperatura de consigna, mantenimientos y alarmas quedan en el portal que ve el productor y en el dashboard de su empresa.",
  },
  {
    question: "¿Cómo se renueva el mantenimiento sin llamadas?",
    answer:
      "El portal muestra el vencimiento del servicio y permite al productor confirmar la renovación con un clic. Su equipo ejecuta, no persigue el llamado.",
  },
  {
    question: "¿Relevan el proceso en Villa Regina?",
    answer:
      "Sí. Cubrimos el Alto Valle con relevamiento en terreno. Documentamos el flujo del empaque y la climatización en su oficina antes de proponer un sistema.",
  },
  {
    question: "¿Sirve para empresas con varios galpones?",
    answer:
      "Sí. Es el escenario habitual: un proveedor que mantiene climatización en varios empaques. Cada galpón queda en el sistema con su equipo, su historial y su plan de mantenimiento.",
  },
];

const related = [
  { label: "Digitalización de riego y climatización", href: "/localidades/villa-regina/riego-y-climatizacion-digital" },
  { label: "Agroindustria", href: "/industrias/agroindustria" },
  { label: "Allen", href: "/localidades/allen" },
  { label: "Dashboards y portales de clientes", href: "/soluciones/dashboards-y-portales-de-clientes" },
];

export default function VillaReginaPage() {
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
        pageName="Villa Regina"
        localityLabel="Villa Regina"
        title="Software para riego y climatización de empaques en Villa Regina"
        intro="Villa Regina vive del empaque frutícola: galpones de empaque, cámaras frigoríficas y naves industriales que dependen de la climatización y del riego para sostener la calidad de temporada. El costo de operar como hoy es simple: el productor llama para saber el estado de su instalación, el mantenimiento se renueva con llamados y las cotizaciones tardan semanas. Desarrollamos los portales de cliente y los sistemas que muestran ese estado en tiempo real, sin llamadas."
        problems={problems}
        services={services}
        problemPage={problemPage}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en Villa Regina"
        ctaDescription="Relevamos el flujo del empaque y la climatización en una semana y le entregamos una propuesta con el entregable concreto: qué portales, qué sistema de mantenimiento y en qué plazo quedan operativos."
      />
    </>
  );
}