import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/localidades/anelo-vaca-muerta/software-para-servicios-petroleros";
const serviceName = "Software para servicios petroleros en Añelo y Vaca Muerta";
const serviceDescription =
  "Sistema multi-locación para proveedores de servicios petroleros con base en Añelo: gestión de subcontratistas, cotizaciones y reportes a operadoras con seguimiento completo.";
const areaServed = ["Añelo (Vaca Muerta)", "Neuquén Capital", "General Roca"];

export const metadata: Metadata = {
  title: "Software para servicios petroleros en Añelo y Vaca Muerta",
  description:
    "Software para servicios petroleros en Añelo y Vaca Muerta: gestión de locaciones, subcontratistas, cotizaciones y reportes a operadoras en una sola plataforma. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software para servicios petroleros en Añelo y Vaca Muerta",
    description:
      "Operaciones multi-locación en Roca, Neuquén y Añelo: subcontratistas, cotizaciones y reportes a operadoras con seguimiento completo, sin planillas dispersas.",
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

const pains = [
  {
    title: "Operaciones en Roca, Neuquén y Añelo que no se consolidan",
    description:
      "Cada locación carga los partes a su manera. Cuando la operadora pregunta por el avance de la semana, la respuesta se arma cruzando archivos y reconstruyendo datos que ya estaban registrados.",
  },
  {
    title: "Subcontratistas que se contratan de memoria",
    description:
      "El proveedor que entró a la locación el mes pasado existe en la cabeza del encargado. Sin historial de precios ni de cumplimiento, cada servicio se negocia desde cero y los riesgos se descubren tarde.",
  },
  {
    title: "Cotizaciones y reportes que viajan por mail",
    description:
      "La cotización a la operadora se arma en una planilla y el reporte sale por correo con capturas. Sin versión vigente ni trazabilidad, renovar un servicio implica volver a negociarlo.",
  },
  {
    title: "La operadora llama para saber en qué locación está el avance",
    description:
      "El supervisor de la operadora llama y el equipo deja el trabajo para reconstruir algo que ya registró. El dato existe, pero está tan disperso que nadie lo consulta en tiempo real.",
  },
];

const process = [
  {
    title: "Relevamiento multi-locación",
    description:
      "Documentamos la operación en Roca, Neuquén y Añelo: contratos con operadoras, flujo de cotizaciones, gestión de subcontratistas y cómo reporta hoy cada locación.",
  },
  {
    title: "Registro único de proveedores y subcontratistas",
    description:
      "Cada subcontratista entra con su documentación, disponibilidad e historial de precios y cumplimiento. Contratar deja de depender de la memoria del encargado.",
  },
  {
    title: "Sistema de cotizaciones y reportes",
    description:
      "Construimos los flujos de cotización con precios vigentes y los reportes a operadoras a partir de los partes que ya cargan las locaciones.",
  },
  {
    title: "Puesta en marcha por locación",
    description:
      "El sistema entra por etapas: primero una locación, después las demás. Cada responsable se capacita sobre la forma de trabajar que ya conoce.",
  },
];

const deliverables = [
  {
    title: "Dashboard multi-locación",
    description:
      "El estado de las operaciones en Roca, Neuquén y Añelo —servicios, locaciones, personal y avance— en una sola pantalla.",
  },
  {
    title: "Registro de subcontratistas y proveedores",
    description:
      "Documentación, precios y cumplimiento de cada proveedor, con órdenes de trabajo sin mails intermedios.",
  },
  {
    title: "CRM de cotizaciones a operadoras",
    description:
      "Historial de cotizaciones con precios vigentes, aprobaciones y vigencia, para renovar sin renegociar desde cero.",
  },
  {
    title: "Portal para la operadora",
    description:
      "La operadora ve el avance, la documentación y el historial de su contrato en tiempo real, sin llamar a su equipo.",
  },
];

const risks = [
  "Que el sistema se rechace en las locaciones: se construye sobre los partes que ya cargan y se capacita a cada responsable desde la primera etapa.",
  "Que la operadora vea datos internos: accesos por rol y vistas estrictas por contrato, sin costos ni márgenes visibles.",
  "Que la implementación frene la operación: entra por etapas y en paralelo con el proceso actual, sin apagones de un día para el otro.",
];

const faq = [
  {
    question: "¿Cómo se maneja una operación que trabaja en varias ciudades a la vez?",
    answer:
      "Con una sola plataforma: Roca, Neuquén y Añelo cargan en el mismo sistema y la gerencia consolida sin cruzar archivos. Es el escenario más común entre los proveedores de servicios petroleros.",
  },
  {
    question: "¿El sistema gestiona subcontratistas y proveedores?",
    answer:
      "Sí. Cada subcontratista registra disponibilidad, documentación e historial de precios y cumplimiento. Las órdenes de trabajo se asignan desde el sistema, sin mails intermedios.",
  },
  {
    question: "¿Qué ve la operadora en el portal?",
    answer:
      "Lo que usted configure: avance de locaciones, documentación e historial del contrato. Los costos, márgenes y otras cuentas quedan solo en el dashboard gerencial.",
  },
  {
    question: "¿Cuánto tarda en implementarse?",
    answer:
      "Un sistema de cotizaciones, subcontratistas y reportes está operativo en 8 a 12 semanas, entrando por etapas y empezando por la locación que defina con su equipo.",
  },
  {
    question: "¿Integran con el ERP o las planillas que usa Añelo?",
    answer:
      "Sí. Partes de trabajo, planillas y ERP se integran por API. El sistema ordena lo que ya existe en lugar de reemplazar la operación.",
  },
  {
    question: "¿Dan soporte en las locaciones después de la entrega?",
    answer:
      "Sí. Soporte directo, mantenimiento evolutivo y actualización de reportes y cotizaciones según cambie el contrato con la operadora o la operación de cada locación.",
  },
];

const related = [
  { label: "Añelo / Vaca Muerta", href: "/localidades/anelo-vaca-muerta" },
  { label: "Neuquén", href: "/localidades/neuquen" },
  { label: "Oil & Gas", href: "/industrias/oil-gas" },
  { label: "Software a medida", href: "/soluciones/software-a-medida" },
];

export default function AneloServiciosPetrolerosPage() {
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
        eyebrow="Localidades · Añelo"
        crumbHref="/localidades"
        crumbLabel="Localidades"
        pageName="Software para servicios petroleros"
        title="Software para servicios petroleros en Añelo y Vaca Muerta: una operación, no tres planillas"
        intro="El proveedor de servicios petroleros con base en Añelo no tiene un solo problema: opera en Roca, Neuquén y Añelo a la vez, contrata subcontratistas de memoria y reporta a las operadoras por mail. Cuando la operadora pregunta por el avance, el equipo reconstruye lo que ya estaba registrado. Desarrollamos el sistema que une locaciones, subcontratistas, cotizaciones y reportes en una sola operación."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación en Añelo"
        ctaDescription="Relevamos su operación entre Roca, Neuquén y Añelo en una semana. Le entregamos una propuesta con el entregable concreto: qué módulos, para qué cuello de botella y en qué plazo quedan operativos."
      />
    </>
  );
}