import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/soluciones/automatizacion-con-ia";
const serviceName = "Automatización de procesos con IA";
const serviceDescription =
  "Chatbots y flujos de automatización entrenados con la base de conocimiento de la empresa industrial: responden consultas técnicas 24/7, pre-califican y vuelcan cada intención al CRM.";
const areaServed = ["Neuquén Capital", "General Roca", "Alto Valle", "Añelo (Vaca Muerta)"];

export const metadata: Metadata = {
  title: "Automatización de procesos con IA para empresas industriales",
  description:
    "Automatización de procesos con IA para empresas industriales de Neuquén y el Alto Valle: chatbots entrenados con su base de conocimiento que responden consultas técnicas 24/7 y vuelcan datos al CRM. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Automatización de procesos con IA para empresas industriales",
    description:
      "Chatbots entrenados con su base de conocimiento que responden consultas técnicas 24/7, agendan reuniones con ingeniería y vuelcan cada intención al CRM sin intervención manual.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Automatización de procesos con IA para empresas industriales",
      },
    ],
  },
};

const pains = [
  {
    title: "Las preguntas técnicas se responden dos veces",
    description:
      "El mismo dato —plazos, capacidades, zonas de cobertura, normas— se escribe a mano en cada chat y en cada mail. La persona que responde deja de atender su operación para repetir información.",
  },
  {
    title: "La consulta fuera de horario muere",
    description:
      "El prospecto que escribe a las 22:00 recibe respuesta al día siguiente o nunca. La decisión de compra no espera al horario comercial y la competencia ya automatizó su primer contacto.",
  },
  {
    title: "Cada respuesta es una oportunidad sin registro",
    description:
      "Lo que se conversa por WhatsApp no queda en ningún sistema. Sin historial, el CRM no recibe la intención y el seguimiento depende de que alguien copie y pegue la conversación.",
  },
  {
    title: "Los informes consumen horas de trabajo",
    description:
      "Reunir los datos de un mes (consultas, temas, demoras de respuesta) implica descargar chats y cruzar planillas. La medición existe, pero cuesta más que lo que aporta.",
  },
];

const process = [
  {
    title: "Relevamiento de consultas y respuestas",
    description:
      "Auditamos los últimos meses de chats y mails para extraer las preguntas recurrentes de su sector y las respuestas oficiales que hoy da su equipo.",
  },
  {
    title: "Construcción de la base de conocimiento",
    description:
      "Documentamos capacidades, plazos, zonas de trabajo y normas en una base que el modelo consulta y que su equipo actualiza sin programar.",
  },
  {
    title: "Entrenamiento y pruebas con casos reales",
    description:
      "Respondemos un set de casos reales de su sector y ajustamos hasta que la precisión sea aceptable para su operación antes de salir a producción.",
  },
  {
    title: "Puesta en producción y medición",
    description:
      "El sistema atiende 24/7, agenda reuniones con ingeniería y vuelca cada intención al CRM con el contexto completo de la conversación.",
  },
];

const deliverables = [
  {
    title: "Dashboard de canal y consultas",
    description:
      "Cuántas consultas resuelve la IA, cuántas escalan a una persona y en qué temas se estanca, para saber dónde agregar conocimiento.",
  },
  {
    title: "CRM enriquecido por IA",
    description:
      "Cada conversación termina con un prospecto o un ticket creado, con el resumen y el dato clave: tonelaje, hectáreas o zona de trabajo.",
  },
  {
    title: "Automatización de agenda de reuniones",
    description:
      "La IA agenda reuniones de ingeniería según disponibilidad y las confirma por WhatsApp o mail, sin que un vendedor coordine el calendario.",
  },
  {
    title: "Portal de conocimiento para el equipo",
    description:
      "El mismo motor responde hacia adentro: sus empleados consultan procesos internos sin buscar documentos en carpetas compartidas.",
  },
];

const risks = [
  "Que el sistema responda con datos incorrectos: la base de conocimiento se controla y aprueba antes de producción, con derivación a persona y auditoría de conversaciones.",
  "Que el cliente sienta que habla con una máquina: tono formal, respuesta precisa y derivación inmediata a una persona cuando el cliente lo pide.",
  "Que la automatización quede sin mantenimiento: métricas mensuales y actualización de la base de conocimiento junto a su equipo, con soporte de Devweb.",
];

const faq = [
  {
    question: "¿Cuánto tarda en implementarse la automatización con IA?",
    answer:
      "La base de conocimiento y el chatbot atienden consultas reales en 4 a 6 semanas. La pre-calificación y la agenda de reuniones se suman en la segunda etapa.",
  },
  {
    question: "¿El sistema habla con clientes reales? ¿Y si no sabe responder?",
    answer:
      "Atiende las consultas frecuentes y transfiere a una persona cuando no alcanza el umbral de confianza o el cliente lo pide. Cada conversación queda disponible para auditoría.",
  },
  {
    question: "¿Usa nuestros documentos y procesos o información genérica?",
    answer:
      "Solo su base de conocimiento: capacidades, plazos de entrega, zonas y normas que su equipo aprueba antes de que el sistema salga a producción.",
  },
  {
    question: "¿Se integra con el CRM o el sistema que ya usamos?",
    answer:
      "Sí. Cada conversación termina en el CRM con el contexto completo: quién preguntó, qué pidió, qué canal usó y qué siguiente paso corresponde.",
  },
  {
    question: "¿Cómo medimos que la automatización funcionó?",
    answer:
      "Definimos métricas al inicio: porcentaje de consultas resueltas sin intervención, tiempo de primera respuesta y reuniones agendadas por mes. Se revisan mensualmente.",
  },
  {
    question: "¿Quién mantiene la base de conocimiento al día?",
    answer:
      "Su equipo actualiza respuestas y datos desde un panel simple, sin programar. Devweb supervisa y ajusta el modelo mensualmente.",
  },
];

const related = [
  { label: "Oil & Gas", href: "/industrias/oil-gas" },
  { label: "Logística y transporte", href: "/industrias/logistica-y-transporte" },
  { label: "Software en Neuquén", href: "/localidades/neuquen" },
];

export default function AutomatizacionConIaPage() {
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
        title="Automatización de procesos con IA: su base de conocimiento trabajando 24/7"
        intro="Sus clientes consultan por WhatsApp a cualquier hora y las respuestas técnicas dependen de una persona. Entrenamos sistemas de IA con su base de conocimiento —capacidades, plazos, zonas y normas— para responder consultas técnicas las 24 horas, pre-calificar intenciones y volcar cada conversación al CRM sin intervención manual."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite un diagnóstico de automatización para su operación"
        ctaDescription="Auditamos sus últimos meses de consultas en una semana y le entregamos una propuesta con el entregable concreto: qué se automatiza, con qué base de conocimiento y en qué plazo."
      />
    </>
  );
}