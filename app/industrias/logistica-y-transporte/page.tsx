import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/industrias/logistica-y-transporte";
const serviceName = "Software para logística y transporte";
const serviceDescription =
  "CRM que pre-califica consultas por tonelaje y zona, dashboard de flota y grúas, y coordinación de cargas especiales para empresas de transporte en el Alto Valle y Vaca Muerta.";
const areaServed = ["Cipolletti", "Alto Valle", "Neuquén Capital", "Añelo (Vaca Muerta)"];

export const metadata: Metadata = {
  title: "Software para empresas de logística y transporte de cargas pesadas",
  description:
    "Software para transporte de cargas pesadas en Cipolletti y el Alto Valle: CRM que pre-califica por tonelaje y zona, dashboard de flota y grúas, y control de cargas especiales. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software para empresas de logística y transporte de cargas pesadas",
    description:
      "Flota, grúas y cargas especiales en un solo dashboard, y un CRM que pre-califica cada consulta por tonelaje y zona antes de tocar a su equipo de ventas.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software para logística y transporte de cargas pesadas",
      },
    ],
  },
};

const pains = [
  {
    title: "La flota se coordina por teléfono",
    description:
      "¿Dónde está cada equipo de cargas especiales? La respuesta vive en la cabeza del despachador. Cuando la flota crece, una llamada por grúa al día deja de ser suficiente.",
  },
  {
    title: "Las consultas entran sin filtro",
    description:
      "Todo proyecto —sean 2 o 200 toneladas, en Obra de 5 km o en otra provincia— llega al mismo vendedor. Ventas pierde horas cotizando proyectos que la operación no puede ejecutar.",
  },
  {
    title: "La facturación llega tarde y sin datos",
    description:
      "El cierre de mes depende de papeles, planillas y partes que nunca se consolidaron. Los reclamos por demoras se responden sin evidencia operativa.",
  },
  {
    title: "Las cargas especiales no dejan historial",
    description:
      "Cada carga especial movida es un caso de estudio: plazos, permisos, rutas. Sin registro, el conocimiento operativo se va con las personas y cada proyecto se re-aprende.",
  },
];

const process = [
  {
    title: "Relevamiento de flota y tipos de carga",
    description:
      "Documentamos la composición de la flota, los tipos de carga que moviliza (pesadas, especiales, sobredimensionadas) y las zonas que cubre la operación.",
  },
  {
    title: "Configuración del CRM con reglas de pre-calificación",
    description:
      "Los umbrales de tonelaje, zona y tipo de servicio se cargan como reglas de negocio: el sistema califica cada consulta antes de que un vendedor la toque.",
  },
  {
    title: "Dashboard de flota y grúas",
    description:
      "Construimos una vista operativa donde el despacho ubica cada equipo por zona, estado y disponibilidad, sin llamadas intermedias.",
  },
  {
    title: "Carga de datos y adopción",
    description:
      "El sistema arranca con el histórico de los proyectos del último año para pre-calificar desde el día uno, y el equipo se capacita sobre casos reales.",
  },
];

const deliverables = [
  {
    title: "Dashboard de flota y grúas",
    description:
      "Dónde está cada equipo de cargas, en qué estado y qué zona cubre, con accesos por rol para despacho y gerencia.",
  },
  {
    title: "CRM con pre-calificación por tonelaje y zona",
    description:
      "Cada consulta se filtra por tonelaje, zona y tipo de carga antes de entrar al pipeline, y el vendedor solo recibe proyectos ejecutables.",
  },
  {
    title: "Automatización de cotizaciones de flete",
    description:
      "Las tarifas por tonelada, zona y tipo de carga se actualizan en el sistema: el flete se cotiza en horas y con la versión vigente.",
  },
  {
    title: "Portal de coordinación de cargas especiales",
    description:
      "El historial de cada carga especial —rutas, permisos, plazos— queda registrado y consultable para planificar la próxima sin re-aprender.",
  },
];

const risks = [
  "Que la pre-calificación descarte clientes importantes: los descartados quedan en cola de revisión con el motivo, y los umbrales se ajustan en las primeras semanas.",
  "Que el despacho no adopte el dashboard: se construye sobre los datos que el equipo ya maneja y se valida con el despachador durante la implementación.",
  "Que la información de flota quede desactualizada: la actualización se integra con la planilla o el sistema de partes que la operación ya usa.",
];

const faq = [
  {
    question: "¿Cuánto tarda en implementarse un CRM para transporte de cargas?",
    answer:
      "Un CRM con pre-calificación por tonelaje y zona está operativo en 4 a 6 semanas. El dashboard de flota se agrega en la segunda etapa con los datos del despacho.",
  },
  {
    question: "¿Cómo se maneja la consulta de una carga que no se puede ejecutar?",
    answer:
      "La consulta se responde igual, pero de forma automática y con una alternativa: el sistema la clasifica, la registra y, si su empresa no la cubre, queda documentada para futuras derivaciones.",
  },
  {
    question: "¿Se integra con el sistema de partes o el ERP que usamos?",
    answer:
      "Sí. Partes de trabajo, planillas de flota y ERP se conectan por API. El sistema ordena la operación que ya existe en lugar de reemplazarla.",
  },
  {
    question: "¿Podemos cotizar fletes con tarifas por tonelaje y zona?",
    answer:
      "Sí. Las tarifas vigentes se cargan en el sistema y el flete se cotiza con su versión correcta, sin rearmar la propuesta a mano ni depender de la memoria de un vendedor.",
  },
  {
    question: "¿El dashboard muestra la ubicación real de cada equipo?",
    answer:
      "Muestra la ubicación con la información que su operación registra: estados, zonas y disponibilidad. Si hoy rastrean por GPS, lo integramos; si no, el sistema ordena lo que el despacho ya conoce.",
  },
  {
    question: "¿Qué soporte hay después de la implementación?",
    answer:
      "Soporte directo, mantenimiento evolutivo y ajuste de umbrales de pre-calificación según cambie la operación o la flota.",
  },
];

const related = [
  { label: "CRM para empresas de servicios", href: "/soluciones/crm-para-empresas-de-servicios" },
  { label: "Software a medida", href: "/soluciones/software-a-medida" },
  { label: "Software en Cipolletti", href: "/localidades/cipolletti" },
  { label: "Software para logística en Cipolletti", href: "/localidades/cipolletti/software-para-logistica" },
];

export default function LogisticaYTransportePage() {
  return (
    <>
      <SpokeServiceSchema
        pagePath={pagePath}
        serviceName={serviceName}
        description={serviceDescription}
        areaServed={areaServed}
        hubPath="/industrias"
        hubName="Industrias"
      />
      <FaqSectionSchema questions={faq} />
      <SpokePage
        eyebrow="Industrias"
        crumbHref="/industrias"
        crumbLabel="Industrias"
        pageName={serviceName}
        title="Software para logística y transporte: sepa dónde está cada equipo de su flota"
        intro="La flota de grúas y cargas pesadas se coordina por teléfono, las consultas entran sin filtro y el cierre de mes se arma con planillas dispersas entre Cipolletti, el Alto Valle y Vaca Muerta. Un CRM que pre-califica por tonelaje y zona libera a ventas de los proyectos chicos, y un dashboard de flota ordena dónde está cada equipo."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación de transporte"
        ctaDescription="Relevamos su flota, sus tipos de carga y su embudo de ventas en una semana. Le entregamos una propuesta con el entregable concreto: qué pre-calificación, qué dashboard y en qué plazo."
      />
    </>
  );
}