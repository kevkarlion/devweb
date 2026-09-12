import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/villa-regina/riego-y-climatizacion-digital";
const serviceName = "Digitalización de riego y climatización de empaques en Villa Regina";
const serviceDescription =
  "Portales de cliente para que el productor frutícola de Villa Regina vea el estado de su climatización y riego en tiempo real y firme el próximo mantenimiento sin llamadas.";
const areaServed = ["Villa Regina", "Alto Valle"];

export const metadata: Metadata = {
  title: "Digitalización de riego y climatización de empaques en Villa Regina",
  description:
    "Digitalización de riego y climatización de empaques en Villa Regina: portales de cliente que muestran el estado de la instalación en tiempo real. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Digitalización de riego y climatización de empaques en Villa Regina",
    description:
      "El productor con galpones de empaque ve el estado de su climatización en tiempo real y firma el próximo mantenimiento sin llamadas. Menos llamados, más renovaciones.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Digitalización de riego y climatización de empaques en Villa Regina",
      },
    ],
  },
};

const pains = [
  {
    title: "Cada llamado del productor interrumpe la obra",
    description:
      "El encargado del empaque llama para saber en qué estado va su climatización. Su técnico deja la tarea para reconstruir una información que ya está registrada en la operación.",
  },
  {
    title: "El mantenimiento siguiente depende de que el cliente llame",
    description:
      "Renovar un mantenimiento de nave industrial o cámara frigorífica se agenda cuando el productor se acuerda de llamar. Entre empaques y temporada, el servicio se pierde o llega tarde.",
  },
  {
    title: "Los empaques reportan su estado distinto",
    description:
      "Cada galpón cuenta su situación a su manera: por mensaje, por teléfono o cuando pasa. Consolidar el estado de todos los galpones de la temporada es un trabajo manual que nadie tiene.",
  },
  {
    title: "El productor quiere ver, no preguntar",
    description:
      "El encargado del empaque quiere saber el estado de su instalación sin esperar el llamado de vuelta. Sin un portal, cada avance se comunica dos veces: se hace y se explica.",
  },
];

const process = [
  {
    title: "Relevamiento de las instalaciones y los empaques",
    description:
      "Documentamos los galpones, naves y cámaras que mantiene su empresa, su equipamiento de climatización y riego, y cómo se reporta hoy cada instalación.",
  },
  {
    title: "Registro de instalaciones y mantenimientos",
    description:
      "Cada instalación entra al sistema con su equipo, su historial y su plan de mantenimiento. El estado se carga una vez, desde la operación, y queda disponible para todos.",
  },
  {
    title: "Portal de cliente por empaque",
    description:
      "El productor accede a su portal y ve el estado de su climatización, los mantenimientos realizados y los próximos. La comunicación deja de pasar por llamados.",
  },
  {
    title: "Gestión de mantenimientos y renovaciones",
    description:
      "El vencimiento del servicio se muestra en el portal y el productor confirma la renovación con un clic. Su equipo ejecuta el mantenimiento, no persigue el llamado.",
  },
];

const deliverables = [
  {
    title: "Portal de cliente para el productor",
    description:
      "El productor ve el estado de su instalación de climatización y riego en tiempo real: qué se hizo, qué falta y cuándo vuelve su equipo.",
  },
  {
    title: "Registro de instalaciones por galpón",
    description:
      "Cada nave, cámara frigorífica o galpón con su equipamiento, historial y plan de mantenimiento, consolidado en un solo lugar.",
  },
  {
    title: "Automatización de renovaciones de mantenimiento",
    description:
      "El sistema avisa el vencimiento y permite confirmar la renovación desde el portal. Menos pérdida de contratos por falta de seguimiento.",
  },
  {
    title: "Dashboard de operación de temporada",
    description:
      "El estado de todas las instalaciones de la temporada en una pantalla para la gerencia: qué galpón está en obra y cuál espera mantenimiento.",
  },
];

const risks = [
  "Que el productor no use el portal: se entrega con la información mensurable que necesita —estado, mantenimiento, vencimientos— y se presenta en la visita de firmas.",
  "Que la carga de estados duplique el trabajo: el estado se reporta una sola vez, desde la operación, y el portal y el dashboard lo consumen sin volver a pedirlo.",
  "Que los datos dependan de un tercero: el código y los datos son de su empresa, con documentación y capacitación del equipo.",
];

const faq = [
  {
    question: "¿Qué ve el productor exactamente en el portal?",
    answer:
      "El estado de su instalación: equipos de climatización y riego, mantenimientos realizados, próximos vencimientos y la documentación técnica. Nada de datos internos de costos ni márgenes.",
  },
  {
    question: "¿Cuánto tarda en implementarse un portal de cliente?",
    answer:
      "Un portal con el registro de instalaciones y mantenimientos está operativo en 4 a 8 semanas, según cuántos galpones y equipos haya que cargar.",
  },
  {
    question: "¿Maneja cámaras frigoríficas y climatización de naves?",
    answer:
      "Sí. El sistema registra cada equipo —naves, cámaras y sistemas de riego— con su historial y su plan. El productor ve el estado de todos desde el mismo portal.",
  },
  {
    question: "¿Cómo se confirma la renovación del mantenimiento?",
    answer:
      "El portal muestra el vencimiento del servicio y el productor confirma la renovación con un clic. Su equipo recibe la orden y ejecuta, sin perseguir el llamado.",
  },
  {
    question: "¿El productor necesita instalar algo para ver el portal?",
    answer:
      "No. El portal se abre en el navegador desde el celular o la computadora del empaque. Sin aplicaciones ni instalaciones adicionales.",
  },
];

const related = [
  { label: "Villa Regina", href: "/localidades/villa-regina" },
  { label: "Allen", href: "/localidades/allen" },
  { label: "Agroindustria", href: "/industrias/agroindustria" },
  { label: "Dashboards y portales de clientes", href: "/soluciones/dashboards-y-portales-de-clientes" },
];

export default function VillaReginaRiegoClimatizacionPage() {
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
        eyebrow="Localidades · Villa Regina"
        crumbHref="/localidades"
        crumbLabel="Localidades"
        pageName="Digitalización de riego y climatización"
        title="Digitalización de riego y climatización de empaques en Villa Regina: que el productor vea su instalación sin llamar"
        intro="En Villa Regina, el productor con galpones de empaque y cámaras frigoríficas llama para saber el estado de su climatización, y cada llamada interrumpe la obra. El mantenimiento siguiente se agenda cuando el cliente se acuerda de pedirlo. Un portal de cliente muestra el estado de la instalación en tiempo real y deja que el productor confirme la renovación con un clic: menos llamados, más renovaciones."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en Villa Regina"
        ctaDescription="Relevamos las instalaciones y el flujo de mantenimiento de los empaques en una semana. Le entregamos una propuesta con el entregable concreto: qué portales, qué registro y en qué plazo quedan operativos."
      />
    </>
  );
}