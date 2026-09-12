import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/general-roca/digitalizacion-agroindustrial";
const serviceName = "Digitalización agroindustrial en General Roca";
const serviceDescription =
  "CRM con IA que pre-cotiza instalaciones de riego según las hectáreas del productor y agenda la visita, para proveedores de sistemas de riego agroindustrial en General Roca.";
const areaServed = ["General Roca", "Alto Valle"];

export const metadata: Metadata = {
  title: "Digitalización agroindustrial en General Roca: riego y gestión de clientes",
  description:
    "Digitalización agroindustrial en General Roca: CRM con IA que pre-cotiza sistemas de riego por hectáreas y agenda la visita al productor, con seguimiento de instalación. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Digitalización agroindustrial en General Roca: riego y gestión de clientes",
    description:
      "Un CRM con IA pre-cotiza el sistema de riego según las hectáreas del productor y agenda la visita sin mover un dedo. El sector frutícola deja de cotizar por WhatsApp.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Digitalización agroindustrial en General Roca",
      },
    ],
  },
};

const pains = [
  {
    title: "El productor busca riego y su empresa no aparece",
    description:
      "Quien instala sistemas de riego en el Alto Valle responde por WhatsApp, sin URL ni registro. El productor que busca «instalación sistemas de riego agroindustrial» encuentra a quien tiene una página, no a quien mejor instala.",
  },
  {
    title: "Cotizaciones que se responden sin datos ni tiempos",
    description:
      "Cada consulta de riego se cotiza a mano, sin presupuestar por hectáreas ni por tipo de cultivo. La respuesta tarda días, no queda registrada y el productor ya pidió dos presupuestos en paralelo.",
  },
  {
    title: "Las visitas se agendan por llamadas",
    description:
      "Coordinar la visita técnica depende de que el productor llame y de que ventas esté disponible. Sin una agenda automática, el prospecto se enfría entre la consulta y la visita.",
  },
  {
    title: "La instalación y el mantenimiento se siguen por teléfono",
    description:
      "El productor pregunta el estado de su instalación y el responsable lo reconstruye de memoria. Cada llamado interrumpe el trabajo y el historial del cliente no queda en ningún lado.",
  },
];

const process = [
  {
    title: "Relevamiento de su catálogo y reglas de cotización",
    description:
      "Documentamos los sistemas de riego que instala, sus rangos por hectárea y tipo de cultivo, y el precio base de cada configuración. Con eso se entrena la pre-cotización.",
  },
  {
    title: "Entrenamiento del CRM con IA",
    description:
      "El CRM pre-cotiza automáticamente según superficie y cultivo, y responde consultas técnicas recurrentes del productor sin intervención de su equipo.",
  },
  {
    title: "Agenda automática de visitas",
    description:
      "La consulta que pasa el filtro agenda la visita técnica en la agenda de su equipo y avisa al productor, sin correos de ida y vuelta.",
  },
  {
    title: "Portal de seguimiento de instalaciones",
    description:
      "Cada instalación y mantenimiento queda con su estado visible para el productor: qué se hizo, qué falta y cuándo vuelve el equipo.",
  },
];

const deliverables = [
  {
    title: "CRM con IA que pre-cotiza riego por hectáreas",
    description:
      "El productor consulta, recibe una pre-cotización en horas con base en su superficie y cultivo, y la visita se agenda sola.",
  },
  {
    title: "Chatbot técnico de riego automatizado",
    description:
      "Responder consultas de sistemas de riego, caudales y mantenimiento 24/7, entrenado con su base de conocimiento y volcando los datos al CRM.",
  },
  {
    title: "Portal de cliente para el productor",
    description:
      "El productor ve el estado de su instalación y los mantenimientos en tiempo real, y firma el próximo servicio sin llamadas.",
  },
  {
    title: "Dashboard de instalaciones y equipos",
    description:
      "Cada obra activa, qué técnico la atiende y en qué etapa está, en una pantalla para la gerencia.",
  },
];

const risks = [
  "Que la pre-cotización salga mal: se calibra con precios y rangos reales de su catálogo y queda visible para ajustarse cuando cambien costos.",
  "Que el productor prefiera hablar siempre: la IA responde y agenda, pero cualquier consulta sensible se deriva a un humano con el contexto completo.",
  "Que el sistema quede desactualizado: los rangos de hectáreas y precios se actualizan desde un panel, sin depender de desarrollo.",
];

const faq = [
  {
    question: "¿Cómo funciona la pre-cotización de riego por hectáreas?",
    answer:
      "Con las reglas que usted define —sistema por superficie, tipo de cultivo y precio base— el CRM arma una pre-cotización automática cuando el productor ingresa sus datos. La respuesta llega en horas y no hay que calcularla a mano.",
  },
  {
    question: "¿El chatbot puede responder consultas técnicas de riego?",
    answer:
      "Sí. Se entrena con su documentación técnica: caudales, presiones, mantenimiento según temporada. Las consultas que no sabe responder se derivan a su equipo con el historial completo.",
  },
  {
    question: "¿El productor agenda la visita solo?",
    answer:
      "Sí. Cuando la consulta pasa el filtro del CRM, el sistema propone horarios de su agenda, agrega la visita y confirma al productor sin intermediarios.",
  },
  {
    question: "¿Cuánto tarda en implementarse?",
    answer:
      "Un CRM con pre-cotización de riego y agenda de visitas está operativo en 6 a 10 semanas, dependiendo de cuántos sistemas y rangos haya que cargar en el catálogo.",
  },
  {
    question: "¿Qué pasa con los sistemas de riego automatizado que vendo?",
    answer:
      "Se integran al dashboard: superficie, consumo y estado del equipo pasan a ser datos. Usted los usa para cotizar, mantener y proponer mejoras con evidencia.",
  },
];

const related = [
  { label: "General Roca", href: "/localidades/general-roca" },
  { label: "Agroindustria", href: "/industrias/agroindustria" },
  { label: "Automatización con IA", href: "/soluciones/automatizacion-con-ia" },
  { label: "CRM para empresas de servicios", href: "/soluciones/crm-para-empresas-de-servicios" },
];

export default function GeneralRocaDigitalizacionPage() {
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
        eyebrow="Localidades · General Roca"
        crumbHref="/localidades"
        crumbLabel="Localidades"
        pageName="Digitalización agroindustrial"
        title="Digitalización agroindustrial en General Roca: riego y gestión de clientes sin cotizar por WhatsApp"
        intro="En el Alto Valle, los proveedores de sistemas de riego pierden prospectos porque cotizan por WhatsApp: sin registro, sin seguimiento y sin pre-calificación. El productor que busca «instalación sistemas de riego agroindustrial» consulta, espera días y se decide por quien respondió primero. Un CRM con IA pre-cotiza según las hectáreas del productor y agenda la visita, y el sector frutícola empieza a decidir con datos."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su empresa de riego en General Roca"
        ctaDescription="Relevamos su catálogo de sistemas y el flujo de consultas en una semana. Le entregamos una propuesta con el entregable concreto: qué CRM, qué pre-cotización y en qué plazo queda operativo."
      />
    </>
  );
}