import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/soluciones/desarrollo-web-b2b";
const serviceName = "Desarrollo web B2B";
const serviceDescription =
  "Sitios web B2B en Next.js con carga en menos de un segundo, una URL por servicio y por localidad, orientados a convertir la búsqueda industrial en solicitud de presupuesto.";
const areaServed = ["Neuquén Capital", "Cipolletti", "General Roca", "Alto Valle"];

export const metadata: Metadata = {
  title: "Desarrollo web B2B con Next.js en Neuquén y el Alto Valle",
  description:
    "Desarrollo web B2B con Next.js en Neuquén y el Alto Valle: sitio con carga en menos de un segundo, una URL por servicio y formularios que entran al CRM como prospectos. Solicite una propuesta.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Desarrollo web B2B con Next.js en Neuquén y el Alto Valle",
    description:
      "Arquitecturas Next.js con carga en menos de un segundo y una URL por servicio: el prospecto industrial encuentra la búsqueda y pide presupuesto sin fricción.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Desarrollo web B2B con Next.js en Neuquén y el Alto Valle",
      },
    ],
  },
};

const pains = [
  {
    title: "La web «tarjeta de presentación» no capta",
    description:
      "Una página con logo, teléfono y un formulario genérico no gana ninguna búsqueda. Sin una URL por servicio y por localidad, la demanda transaccional se la lleva un directorio.",
  },
  {
    title: "El prospecto decide antes de entrar",
    description:
      "Cuando el director de compras busca servicios industriales desde el celular, el sitio lento lo hace volver atrás. Tres segundos de carga deciden el presupuesto antes de leer una palabra.",
  },
  {
    title: "No hay un camino claro para cotizar",
    description:
      "La web muestra lo que la empresa hace, pero no lleva al prospecto a pedir el presupuesto. Sin un flujo de conversión definido, el formulario acumula consultas que nadie califica.",
  },
  {
    title: "La operación no se ve en ninguna parte",
    description:
      "Cero evidencia de obras, tonelaje movilizado, hectáreas servidas o zonas de cobertura. El prospecto no puede distinguir la envergadura de la empresa frente a la de su competencia.",
  },
];

const process = [
  {
    title: "Diagnóstico de su presencia actual",
    description:
      "Auditamos posiciones, velocidad de carga y porcentaje de consultas por canal. Definimos qué búsqueda industrial se le está yendo hoy y por qué.",
  },
  {
    title: "Estrategia de URLs por servicio y localidad",
    description:
      "Una URL por servicio con contenido problema→solución y una por localidad: la búsqueda «mantenimiento industrial Neuquén» encuentra una página hecha para responderle.",
  },
  {
    title: "Construcción en Next.js",
    description:
      "Arquitectura con carga en menos de un segundo, Core Web Vitals en verde (imágenes AVIF/WebP, fuentes auto-hospedadas) y formularios de presupuesto conectados al CRM.",
  },
  {
    title: "Medición y mejora continua",
    description:
      "Search Console y Analytics configurados desde el lanzamiento. Iteramos mensualmente sobre posiciones, velocidad y conversión del formulario.",
  },
];

const deliverables = [
  {
    title: "Dashboard de rendimiento y tráfico",
    description:
      "Posiciones, consultas y conversiones del formulario en una pantalla que revisa la gerencia sin pedir informes a ninguna agencia.",
  },
  {
    title: "CRM conectado al formulario",
    description:
      "Cada solicitud de presupuesto entra como prospecto con su origen: búsqueda, localidad o página de servicio. El equipo de ventas la recibe completa.",
  },
  {
    title: "Automatización de alertas",
    description:
      "Aviso instantáneo por WhatsApp y mail cuando se completa un formulario de presupuesto, para responder en la primera hora.",
  },
  {
    title: "Portal de contenido editable",
    description:
      "Su equipo actualiza novedades de obra, certificaciones y sectores cubiertos desde un panel simple, sin depender de una agencia para cada cambio.",
  },
];

const risks = [
  "Que la web quede obsoleta al mes del lanzamiento: mantenimiento evolutivo y medición mensual de posiciones y velocidad de carga.",
  "Que la velocidad se degrade con el tiempo: el rendimiento es requisito de cada release, con imágenes optimizadas y fuentes auto-hospedadas.",
  "Que el SEO dependa de terceros: el código, las palabras clave y el sitemap son de su empresa y quedan documentados en la entrega.",
];

const faq = [
  {
    question: "¿Cuánto tarda el desarrollo de una web B2B con estas características?",
    answer:
      "Una web corporativa con URLs por servicio y SEO técnico está en 3 a 5 semanas. El contenido problema→solución se define en el relevamiento para no bloquear el desarrollo.",
  },
  {
    question: "¿Cuándo aparecemos en Google?",
    answer:
      "El sitio sale al aire con SEO técnico completo: sitemap, schema, contenido por servicio y Core Web Vitals en verde. Después se trabaja mes a mes sobre las posiciones de las keywords del diagnóstico.",
  },
  {
    question: "¿Podemos editar el contenido nosotros?",
    answer:
      "Sí. El contenido editable vive en secciones problema→solución y preguntas frecuentes, y se actualiza desde un panel sin programar.",
  },
  {
    question: "¿Qué stack usan y por qué?",
    answer:
      "Next.js con arquitectura Jamstack, hosting en CDN, imágenes AVIF/WebP y fuentes auto-hospedadas. El objetivo técnico es una carga menor a 1 segundo en el celular del decisor.",
  },
  {
    question: "¿El formulario de presupuesto se conecta con nuestro CRM?",
    answer:
      "Sí. Cada solicitud entra al CRM como prospecto con su origen y su contexto completo, y genera una alerta inmediata al equipo de ventas.",
  },
  {
    question: "¿Qué soporte hay después del lanzamiento?",
    answer:
      "Mantenimiento evolutivo mensual: posiciones, velocidad, contenido y mejoras de conversión. La web no queda estática después de la entrega.",
  },
];

const related = [
  { label: "Oil & Gas", href: "/industrias/oil-gas" },
  { label: "Instalaciones industriales", href: "/industrias/instalaciones-industriales" },
  { label: "Software en Neuquén", href: "/localidades/neuquen" },
];

export default function DesarrolloWebB2bPage() {
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
        title="Desarrollo web B2B: la web que convierte la búsqueda industrial en presupuesto"
        intro="Su presencia en Google no refleja la envergadura de su operación: equipos, obras y zonas de cobertura que no se cuentan en ninguna página. Cuando el director de compras busca servicios industriales en Neuquén o el Alto Valle, aparece un directorio en vez de su empresa. Construimos sitios en Next.js con carga en menos de un segundo, una URL por servicio y formularios que llegan directo a su CRM."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite un diagnóstico de su presencia actual"
        ctaDescription="Auditamos su sitio, sus posiciones y la velocidad de carga en una semana. Recibe un informe con el entregable concreto: qué URLs crear, qué contenido y en qué plazo queda en línea."
      />
    </>
  );
}