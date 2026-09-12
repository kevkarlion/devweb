import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/industrias/instalaciones-industriales";
const serviceName = "Software para instalaciones industriales";
const serviceDescription =
  "Web corporativa que refleje la envergadura operativa y dashboard de obras y flota para empresas de instalaciones industriales y obras civiles con subcontratistas multi-locación.";
const areaServed = ["Neuquén Capital", "General Roca", "Alto Valle"];

export const metadata: Metadata = {
  title: "Software para empresas de instalaciones industriales y obras civiles",
  description:
    "Software para empresas de instalaciones industriales y obras civiles en Neuquén y el Alto Valle: web corporativa que refleje su envergadura y dashboard de obras y flota con control de subcontratistas. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Software para empresas de instalaciones industriales y obras civiles",
    description:
      "Web corporativa B2B y dashboard de obras y flota para empresas de instalaciones y obras civiles con subcontratistas en varias locaciones.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software para empresas de instalaciones industriales y obras civiles",
      },
    ],
  },
};

const pains = [
  {
    title: "Una presencia en Google que no refleja la envergadura operativa",
    description:
      "Su empresa realiza obras civiles e instalaciones industriales en varias locaciones, pero su sitio web muestra solo una imagen y un teléfono. El director de compras la descarta sin entrar.",
  },
  {
    title: "Subcontratistas y proveedores sin registro único",
    description:
      "Cada obra maneja sus proveedores por separado: qué subcontratista está en cuál locación, qué precios se pactaron y si cumplió el plazo no vive en un solo lugar.",
  },
  {
    title: "No se sabe qué equipo está en qué obra",
    description:
      "La flota de maquinaria y el personal se mueven entre obras sin un dashboard que muestre disponibilidad y distribución. El encargado lo coordina por llamada.",
  },
  {
    title: "La gerencia se entera tarde del avance real",
    description:
      "El avance de cada obra se reconstruye con llamadas a los encargados. La decisión operativa llega siempre después de que la información ya era útil.",
  },
];

const process = [
  {
    title: "Relevamiento de obras y subcontratistas",
    description:
      "Documentamos la composición actual de su empresa: tipos de obra, cantidades, subcontratistas habituales, locaciones y cómo se comunica hoy el avance.",
  },
  {
    title: "Web corporativa que refleje su envergadura",
    description:
      "Una página por servicio —instalación industrial, obra civil, mantenimiento— con la evidencia operativa: zonas, tonelaje, tipo de cliente y proyectos completados.",
  },
  {
    title: "Dashboard de obras y flota",
    description:
      "Construimos la vista de la gerencia: el estado de cada obra, su avance y qué equipo está en cada locación, en una sola pantalla.",
  },
  {
    title: "Implementación y adopción",
    description:
      "Su equipo de obras carga el avance una vez por semana; el sistema replica el dato en el dashboard y en los reportes para clientes y subcontratistas.",
  },
];

const deliverables = [
  {
    title: "Dashboard gerencial de obras y flota",
    description:
      "Estado de cada obra, avance y distribución de equipo en una pantalla que la gerencia revisa sin pedir informes a los encargados.",
  },
  {
    title: "CRM de subcontratistas y proveedores",
    description:
      "Historial de cada subcontratista: en qué obra trabajó, qué precios pactó y si cumplió el plazo, para decidir quién entra en la próxima.",
  },
  {
    title: "Automatización de reportes de avance",
    description:
      "Reportes semanales por obra generados a partir de los partes que el equipo ya carga, sin rearmarlos a mano para clientes ni subcontratistas.",
  },
  {
    title: "Web corporativa con URLs por servicio",
    description:
      "Una web que muestre su envergadura: una URL por servicio y por localidad, con evidencia de obra que el prospecto industrial puede verificar.",
  },
];

const risks = [
  "Que la web quede con copias genéricas: el contenido se construye con datos reales de su operación (tonelaje, zonas, tipos de obra) para que el prospecto vea la envergadura.",
  "Que el encargado de obra no cargue el avance: el proceso se integra con lo que la obra ya reporta semanalmente, y se simplifica la carga.",
  "Que los datos de subcontratistas queden desactualizados: el sistema registra cada obra completada y actualiza el historial de cumplimiento con cada intervención.",
];

const faq = [
  {
    question: "¿Cuánto tarda en implementarse el dashboard de obras?",
    answer:
      "Un primer dashboard con las obras activas está operativo en 4 a 6 semanas. La web corporativa se agrega en paralelo, sin depender de la finalización del dashboard.",
  },
  {
    question: "¿Qué pasa si la empresa tiene obras en varias ciudades?",
    answer:
      "Es el escenario típico. El sistema está diseñado para empresas con operaciones simultáneas en General Roca, Neuquén y otras localidades, todo centralizado.",
  },
  {
    question: "¿Se integra con el sistema de parte o el ERP que usamos?",
    answer:
      "Sí. El sistema se conecta con lo que la obra ya registra por partes, planillas o ERP, para no duplicar la carga de trabajo del encargado.",
  },
  {
    question: "¿Los subcontratistas necesitan una cuenta en el sistema?",
    answer:
      "Solo si la empresa quiere darles acceso. El sistema funciona de todas formas, pero si da acceso, el subcontratista ve lo que usted autorice: la obra, el alcance y los entregables.",
  },
  {
    question: "¿La web está hecha para captar consultas de presupuesto?",
    answer:
      "Sí. Cada página de servicio incluye un formulario que conecta directamente con el CRM, para que la consulta quede registrada con su contexto completo.",
  },
  {
    question: "¿Qué soporte hay después de la entrega?",
    answer:
      "Soporte directo, mantenimiento evolutivo de la web y del dashboard, y calibración del sistema de reportes según crezca la cantidad de obras activas.",
  },
];

const related = [
  { label: "Software a medida", href: "/soluciones/software-a-medida" },
  { label: "Dashboards y portales de clientes", href: "/soluciones/dashboards-y-portales-de-clientes" },
  { label: "Desarrollo web B2B", href: "/soluciones/desarrollo-web-b2b" },
];

export default function InstalacionesIndustrialesPage() {
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
        title="Software para instalaciones industriales: que su web refleje la envergadura de sus obras"
        intro="Una empresa de instalaciones industriales que realiza obras civiles en varias locaciones no puede mostrarse con una sola página web. El prospecto industrial necesita ver evidencia: tonelaje movilizado, zonas cubiertas y tipos de obra. Construimos una web corporativa que refleje su envergadura operativa y un dashboard que ordene subcontratistas, flota y avance de cada obra en una sola plataforma."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su empresa"
        ctaDescription="Relevamos sus obras activas y el proceso de avance en una semana. Le entregamos una propuesta con el entregable concreto: qué contenido, qué dashboard y en qué plazo queda en línea."
      />
    </>
  );
}