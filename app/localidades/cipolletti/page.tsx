import type { Metadata } from "next";
import { LocalityPage } from "@/components/locality-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/cipolletti";
const serviceName = "Software y CRM para logística y transporte en Cipolletti";
const serviceDescription =
  "CRM con pre-calificación automática por tonelaje y zona para empresas de transporte de cargas pesadas, alquiler de grúas y reparación de bombas sumergibles en Cipolletti y el Alto Valle este.";
const areaServed = ["Cipolletti", "Alto Valle este", "Fernández Oro"];

export const metadata: Metadata = {
  title: "Software y CRM para empresas de logística y transporte en Cipolletti",
  description:
    "Software y CRM para empresas de transporte de cargas pesadas en Cipolletti: pre-calificación por tonelaje y zona, gestión de grúas y seguimiento de reparaciones. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software y CRM para empresas de logística y transporte en Cipolletti",
    description:
      "Desarrollo de software y CRM en Cipolletti para transporte de cargas pesadas, alquiler de grúas y talleres de reparación: prospectos filtrados por tonelaje y zona antes de tocar a ventas.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software y CRM para empresas de logística y transporte en Cipolletti",
      },
    ],
  },
};

const problems = [
  {
    title: "Las consultas de cargas pesadas llegan sin filtro",
    description:
      "Cada consulta pide un flete distinto: una grúa para una tarde o un transporte de cargas especiales para tres semanas. Ventas pierde horas cotizando proyectos que nunca van a cerrar en ese equipo.",
  },
  {
    title: "El alquiler de grúas se administra por llamadas",
    description:
      "Saber qué grúa está libre, en qué obra y con qué operador depende de preguntarle a quien la maneja. Sin un registro central, el equipo se subutiliza o se doble reserva.",
  },
  {
    title: "La reparación de bombas sumergibles sin historial",
    description:
      "Cada bomba que entra al taller vuelve a explicarse de cero: qué se le hizo el año pasado, qué repuesto se usó y cuánto duró. El cliente pregunta y no hay un registro único que responderle.",
  },
];

const services = [
  {
    label: "CRM para empresas de servicios",
    href: "/soluciones/crm-para-empresas-de-servicios",
    description:
      "Un CRM que pre-califica prospectos por tonelaje y zona antes de que ventas toque una consulta de transporte.",
  },
  {
    label: "Dashboards y portales de clientes",
    href: "/soluciones/dashboards-y-portales-de-clientes",
    description:
      "Un dashboard para saber dónde está cada grúa y cada unidad de la flota, y qué carga lleva.",
  },
  {
    label: "Software a medida",
    href: "/soluciones/software-a-medida",
    description:
      "Sistemas de alquiler de equipos y reparación con historial por cliente y por equipo en Cipolletti.",
  },
  {
    label: "Logística y transporte",
    href: "/industrias/logistica-y-transporte",
    description:
      "Flota, grúas y cargas especiales: gestión transaccional de la operación logística del Alto Valle este.",
  },
];

const problemPage = {
  label: "Software para logística y transporte de cargas pesadas en Cipolletti",
  href: "/localidades/cipolletti/software-para-logistica",
  description:
    "La página dedicada al transportista que pierde horas con proyectos chicos: pre-calificación por tonelaje y zona, problema, costo y entregables en una sola landing.",
};

const faq = [
  {
    question: "¿El CRM pre-califica consultas automáticamente?",
    answer:
      "Sí. Cada consulta de flete se filtra por tonelaje, tipo de carga y zona de destino. Las que no alcanzan el umbral que usted define no tocan a ventas, y las que sí, llegan con toda la información relevada.",
  },
  {
    question: "¿Pueden administrar el alquiler de grúas con el sistema?",
    answer:
      "Sí. Registramos cada equipo, su disponibilidad, la obra donde está y el operador asignado. La gerencia ve en un dashboard qué grúa está libre y qué carga tiene cada unidad.",
  },
  {
    question: "¿Sirve el sistema para un taller de reparación de bombas?",
    answer:
      "Sí. Cada bomba que entra al taller se registra con su historial: trabajos previos, repuestos usados y garantías. El cliente recibe el estado de su equipo sin llamar al taller.",
  },
  {
    question: "¿La integración con planillas o ERP actuales es posible?",
    answer:
      "Sí. Conectamos por API a su ERP, planillas y WhatsApp Business. El software centraliza lo que hoy vive disperso entre chats y anotaciones.",
  },
  {
    question: "¿Relevan el proceso en Cipolletti?",
    answer:
      "Sí. Nuestra base operativa está entre Neuquén, Cipolletti y General Roca. Relevamos el proceso en su oficina antes de proponer cualquier sistema.",
  },
];

const related = [
  { label: "Software para logística en Cipolletti", href: "/localidades/cipolletti/software-para-logistica" },
  { label: "Logística y transporte", href: "/industrias/logistica-y-transporte" },
  { label: "Neuquén", href: "/localidades/neuquen" },
  { label: "CRM para empresas de servicios", href: "/soluciones/crm-para-empresas-de-servicios" },
];

export default function CipollettiPage() {
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
        pageName="Cipolletti"
        localityLabel="Cipolletti"
        title="Software y CRM para empresas de logística y transporte en Cipolletti"
        intro="Cipolletti concentra transporte de cargas pesadas, alquiler de grúas y talleres que atienden al Alto Valle este y a Vaca Muerta. El problema no es la capacidad: es que cada consulta entra sin filtro y ventas pierde horas con proyectos chicos, mientras la flota se administra por llamadas. Construimos el CRM que pre-califica por tonelaje y zona y el sistema que le muestra a la gerencia dónde está cada equipo."
        problems={problems}
        services={services}
        problemPage={problemPage}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en Cipolletti"
        ctaDescription="Relevamos el flujo de consultas, flota y talleres en una semana y le entregamos una propuesta con el entregable concreto: qué CRM, qué dashboards y en qué plazo quedan operativos."
      />
    </>
  );
}