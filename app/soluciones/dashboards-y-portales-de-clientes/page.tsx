import type { Metadata } from "next";
import { SpokePage } from "@/components/spoke-page";
import { SpokeServiceSchema } from "@/components/SpokeServiceSchema";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

const baseUrl = "https://devwebpatagonia.com";
const pagePath = "/soluciones/dashboards-y-portales-de-clientes";
const serviceName = "Dashboards y portales de clientes";
const serviceDescription =
  "Dashboards gerenciales y portales de cliente que muestran el estado de mantenimientos, obras y flota en tiempo real, alimentados por la operación que la empresa ya registra.";
const areaServed = ["Neuquén Capital", "Río Negro", "Alto Valle", "Añelo (Vaca Muerta)"];

export const metadata: Metadata = {
  title: "Dashboards y portales de clientes para empresas de servicios industriales",
  description:
    "Dashboards y portales de clientes para empresas de servicios industriales en Neuquén y el Alto Valle: el cliente final ve el estado de mantenimientos y obras en tiempo real. Solicite una propuesta técnica.",
  alternates: {
    canonical: `${baseUrl}${pagePath}`,
  },
  openGraph: {
    title: "Dashboards y portales de clientes para empresas de servicios industriales",
    description:
      "Portales donde el cliente final ve el estado de sus mantenimientos y obras en tiempo real, y dashboards gerenciales para el control de la operación. Sin reportes manuales.",
    url: `${baseUrl}${pagePath}`,
    siteName: "Devweb Patagonia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Dashboards y portales de clientes para empresas de servicios industriales",
      },
    ],
  },
};

const pains = [
  {
    title: "El teléfono suena por información que ya existe",
    description:
      "Cada día un cliente llama para saber el estado de su mantenimiento. Quien atiende no lo sabe de memoria y la operación se corta para buscar el dato en una planilla o en un chat.",
  },
  {
    title: "Reportes que se escriben a mano, cliente por cliente",
    description:
      "El reporte se arma en Excel, se envía por mail y al miércoles vuelve a armarse con los datos de la semana. Las horas de ingeniería se gastan en informar en vez de ejecutar.",
  },
  {
    title: "Las operadoras exigen trazabilidad",
    description:
      "Sin un historial verificable, cada reclamo se resuelve con testimonios en vez de datos. La operadora pide evidencia y el proveedor no tiene dónde mostrarla, salvo sus mails.",
  },
  {
    title: "La gerencia se entera tarde de lo que pasa",
    description:
      "El estado de obras, flota y mantenimientos se reconstruye con llamadas. La decisión operativa llega siempre después de que la información ya era útil.",
  },
];

const process = [
  {
    title: "Relevamiento de lo que ya registran",
    description:
      "Documentamos qué datos produce su operación hoy —partes de trabajo, avances, estados— y qué necesita ver cada cliente final antes de diseñar una pantalla.",
  },
  {
    title: "Definición del portal y del dashboard",
    description:
      "Quién ve qué: el cliente final, la gerencia y su equipo. Cada vista con sus accesos, sin mezclar datos internos con lo que se muestra al cliente.",
  },
  {
    title: "Integración con sus sistemas",
    description:
      "El portal se alimenta de la operación por API y por las planillas que ya existen, para que el sistema no duplique la carga de trabajo de su equipo.",
  },
  {
    title: "Implementación y adopción",
    description:
      "Capacitamos a su equipo y lo acompañamos en la presentación del portal ante sus clientes. Medimos el uso real para que el sistema no quede congelado.",
  },
];

const deliverables = [
  {
    title: "Dashboard gerencial de operación",
    description:
      "Estado de obras, flota y mantenimientos en una pantalla, actualizado el mismo día y accesible para la gerencia desde cualquier dispositivo.",
  },
  {
    title: "Portal de cliente con estado en tiempo real",
    description:
      "Acceso por cliente para ver avance, documentación e historial de su contrato sin llamar ni esperar un mail.",
  },
  {
    title: "Automatización de reportes",
    description:
      "Reportes semanales al cliente generados solos y enviados por mail, sin rearmarlos a mano cada lunes.",
  },
  {
    title: "Sistema de partes y estados",
    description:
      "Su equipo carga el avance una sola vez y el resto del sistema lo replica: el dashboard, el portal y el próximo reporte se actualizan solos.",
  },
];

const risks = [
  "Que el portal duplique el trabajo de su equipo: se alimenta de lo que la operación ya registra; si el dato no existe hoy, lo creamos como primer entregable.",
  "Que el cliente vea datos que no corresponden: accesos por rol y vistas estrictas por cliente, sin compartir costos, márgenes ni otras cuentas.",
  "Que el sistema quede sin uso: capacitación, acompañamiento en la presentación a clientes y métricas de adopción en la primera etapa.",
];

const faq = [
  {
    question: "¿El portal reemplaza los reportes que hoy enviamos por mail?",
    answer:
      "Los vuelve automáticos. El sistema genera el reporte semanal y lo envía; además, el cliente puede ver el estado en el portal en cualquier momento, sin esperar la fecha del informe.",
  },
  {
    question: "¿Qué datos puede ver el cliente final?",
    answer:
      "Solo lo que su empresa autorice: estados, avances, documentación e historial de su contrato. Los datos internos —costos, márgenes, otras cuentas— quedan fuera de la vista del cliente.",
  },
  {
    question: "¿Cuánto tarda en implementarse el portal?",
    answer:
      "Un primer portal frente a un cliente real está operativo en 4 a 8 semanas. El plazo depende de la integración con sus sistemas actuales, que relevamos en la primera semana.",
  },
  {
    question: "¿Qué pasa con los datos de las operadoras y clientes?",
    answer:
      "Accesos por rol, respaldo diario y trazabilidad completa: quién vio qué y cuándo. Los datos no salen del control de su empresa.",
  },
  {
    question: "¿Los clientes necesitan instalar un software para ver el portal?",
    answer:
      "No. Lo abren desde el navegador, sin instalaciones, con un usuario propio por organización. Funciona en celular, tablet y PC.",
  },
  {
    question: "¿Cómo se mide que el portal se usa?",
    answer:
      "Con métricas de uso: inicios de sesión, consultas abiertas y, sobre todo, consultas que desaparecen —señal de que el cliente ya encuentra el dato solo.",
  },
];

const related = [
  { label: "Oil & Gas", href: "/industrias/oil-gas" },
  { label: "Instalaciones industriales", href: "/industrias/instalaciones-industriales" },
  { label: "Añelo / Vaca Muerta", href: "/localidades/anelo-vaca-muerta" },
];

export default function DashboardsYPortalesPage() {
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
        title="Dashboards y portales de clientes: su operación y la de sus clientes, en tiempo real"
        intro="Las operadoras y los clientes industriales llaman para saber en qué estado está su mantenimiento y su equipo deja de trabajar para explicarlo. Un portal de clientes muestra el avance en tiempo real con la información que su equipo ya registra, y un dashboard gerencial le da a la dirección el control de toda la operación."
        pains={pains}
        process={process}
        deliverables={deliverables}
        risks={risks}
        faq={faq}
        related={related}
        ctaTitle="Solicite una propuesta técnica para su operación"
        ctaDescription="Relevamos qué datos produce su operación hoy y qué necesita ver cada cliente en una semana. Le entregamos una propuesta con el entregable concreto: qué vistas, qué integraciones y en qué plazo."
      />
    </>
  );
}