import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/cipolletti/software-para-logistica";
const serviceName = "Software para logística y transporte de cargas pesadas en Cipolletti";
const serviceDescription =
  "CRM que pre-califica consultas de transporte por tonelaje y zona para empresas de cargas pesadas en Cipolletti: ventas deja de perder horas con proyectos chicos.";
const areaServed = ["Cipolletti", "Alto Valle este", "Vaca Muerta"];

export const metadata: Metadata = {
  title: "Software para logística y transporte de cargas pesadas en Cipolletti",
  description:
    "Software para empresas de transporte de cargas pesadas en Cipolletti: CRM con pre-calificación automática por tonelaje y zona, gestión de flota y grúas. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software para logística y transporte de cargas pesadas en Cipolletti",
    description:
      "CRM que filtra consultas de flete por tonelaje, tipo de carga y zona antes de tocar a ventas. Un dashboard para saber dónde está cada grúa y cada unidad de la flota.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software para logística y transporte de cargas pesadas en Cipolletti",
      },
    ],
  },
};

const pains = [
  {
    title: "Ventas pierde horas cotizando proyectos chicos",
    description:
      "Cada consulta pide un flete distinto: un camión para el día, un transporte de cargas especiales o una grúa para una obra. Sin filtro, el equipo de ventas calcula precios para consultas que nunca iban a escalar.",
  },
  {
    title: "La flota se administra por llamadas",
    description:
      "Saber qué unidad está libre, qué carga lleva y en qué obra trabaja depende de preguntarle a cada chofer. La gerencia descubre la subutilización cuando ya es tarde para reasignarla.",
  },
  {
    title: "El alquiler de grúas sin registro de disponibilidad",
    description:
      "Cada grúa, su operador y su obra se coordinan por teléfono. Sin un registro central, el equipo se doble reserva o queda ocioso mientras otra obra lo pide.",
  },
  {
    title: "Las consultas de cargas especiales se pierden en los chats",
    description:
      "Un pedido de transporte de cargas especiales con requisitos técnicos queda anotado en un mensaje. Sin trazabilidad, la cotización se olvida o se responde dos veces.",
  },
];

const process = [
  {
    title: "Relevamiento del flujo de consultas",
    description:
      "Documentamos cómo llegan las consultas hoy —WhatsApp, teléfono, planillas— y cuánto tiempo pierde ventas en las que no cierran, con ejemplos del último trimestre de su operación.",
  },
  {
    title: "Modelado de la pre-calificación",
    description:
      "Definimos con su equipo las reglas: tonelaje mínimo, tipo de carga y zonas de destino. Desde ese umbral, el CRM decide qué consulta llega a ventas y cuál se descarta sola.",
  },
  {
    title: "Registro de flota y equipos",
    description:
      "Cada unidad, grúa y equipo entra con su disponibilidad, operador y carga asignada. El dashboard muestra en una pantalla dónde está trabajando cada uno.",
  },
  {
    title: "Seguimiento de cotizaciones y contratos",
    description:
      "Cada cotización queda con su versión vigente, aprobación y vigencia. Renovar un transporte recurrente deja de renegociarse desde cero.",
  },
];

const deliverables = [
  {
    title: "CRM con pre-calificación por tonelaje y zona",
    description:
      "Cada consulta de flete se filtra solo: las que pasan el umbral llegan a ventas completas, las que no, se descartan sin costo de horas.",
  },
  {
    title: "Dashboard de flota y grúas",
    description:
      "Dónde está cada unidad, qué carga lleva, en qué obra trabaja y qué operador la maneja, en una pantalla actualizada el mismo día.",
  },
  {
    title: "Automatización de cotizaciones de transporte",
    description:
      "Los fletes recurrentes se cotizan con tarifas vigentes por tonelaje y zona, sin rearmar la propuesta a mano cada vez.",
  },
  {
    title: "Historial por cliente y por equipo",
    description:
      "Qué transportó cada cliente, a qué precio y con qué unidad, accesible para todo el equipo sin preguntarle a la memoria de nadie.",
  },
];

const risks = [
  "Que el sistema rechace consultas válidas: las reglas de pre-calificación se calibran con su equipo y quedan visibles para revisarlas cuando cambie el mercado.",
  "Que los choferes y operadores lo rechacen: la carga de datos se hace sobre los partes que ya entregan, sin duplicar el trabajo.",
  "Que la operación se frene por la implementación: etapas cortas en paralelo con el proceso actual, sin apagones de un día para el otro.",
];

const faq = [
  {
    question: "¿Qué parámetros usa el CRM para pre-calificar una consulta?",
    answer:
      "Los que usted defina: tonelaje mínimo, tipo de carga (general, especial, grúa), zona de origen y destino. Cada consulta se filtra con esas reglas antes de llegar a ventas.",
  },
  {
    question: "¿El sistema maneja el alquiler de grúas?",
    answer:
      "Sí. Cada grúa registra disponibilidad, obra asignada y operador. El dashboard evita la doble reserva y muestra qué equipo está libre para el día siguiente.",
  },
  {
    question: "¿Sirve para transporte de cargas especiales a Vaca Muerta?",
    answer:
      "Sí. Es el caso típico del Alto Valle este: cargas y equipos que viajan a las locaciones. La pre-calificación por zona y tipo de carga se adapta a esos viajes.",
  },
  {
    question: "¿Cuánto tarda en implementarse?",
    answer:
      "Un CRM de pre-calificación con dashboard de flota está operativo en 6 a 10 semanas, dependiendo de la integración con las planillas o el ERP que usan hoy.",
  },
  {
    question: "¿Integramos con el sistema de facturación o el ERP?",
    answer:
      "Sí. Conectamos por API a su ERP, planillas y WhatsApp Business. El sistema ordena lo que ya existe en lugar de reemplazar la operación.",
  },
];

const related = [
  { label: "Cipolletti", href: "/localidades/cipolletti" },
  { label: "Logística y transporte", href: "/industrias/logistica-y-transporte" },
  { label: "CRM para empresas de servicios", href: "/soluciones/crm-para-empresas-de-servicios" },
  { label: "Software a medida", href: "/soluciones/software-a-medida" },
];

export default function CipollettiLogisticaPage() {
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
        eyebrow="Localidades · Cipolletti"
        crumbHref="/localidades"
        crumbLabel="Localidades"
        pageName="Software para logística y transporte"
        title="Software para logística y transporte de cargas pesadas en Cipolletti: que ventas no pierda horas con proyectos chicos"
        intro="En Cipolletti, las consultas de transporte de cargas pesadas llegan sin calificar: un flete para el día, una grúa para una obra, un viaje de cargas especiales a Vaca Muerta. El equipo de ventas calcula precios para todos por igual y pierde horas con lo que nunca iba a escalar. Un CRM que pre-califica por tonelaje y zona ordena ese flujo antes de que ventas toque una consulta."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en Cipolletti"
        ctaDescription="Relevamos el flujo de consultas y de flota en una semana y le entregamos una propuesta con el entregable concreto: qué reglas de pre-calificación, qué dashboards y en qué plazo quedan operativos."
      />
    </>
  );
}