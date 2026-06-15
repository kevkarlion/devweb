import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, AlertTriangle, Clock, Shield, Code } from "lucide-react";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
// Las fuentes se cargan globalmente desde layout.tsx

const baseUrl = "https://devwebpatagonia.com";
const slug = "diseno-web-general-roca";

export const metadata: Metadata = {
  title: "Diseño Web en General Roca: Guía Completa 2026 | Devweb Patagonia",
  description:
    "Todo lo que necesitás saber sobre diseño web en General Roca. Costos, tiempos, tipos de sitios y cómo elegir la mejor opción para tu negocio en el Alto Valle.",
  alternates: {
    canonical: `${baseUrl}/blog/${slug}`,
  },
  openGraph: {
    title: "Diseño Web en General Roca: Guía Completa 2026",
    description:
      "Todo lo que necesitás saber sobre diseño web en General Roca. Costos, tiempos y tipos de sitios para tu negocio.",
    url: `${baseUrl}/blog/${slug}`,
    locale: "es_AR",
    type: "article",
    publishedTime: "2026-04-27",
    authors: ["Devweb Patagonia"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño Web en General Roca: Guía Completa 2026",
    description:
      "Todo lo que necesitás saber sobre diseño web en General Roca. Costos, tiempos y tipos de sitios para tu negocio.",
  },
};

export default function DisenoWebGeneralRocaPage() {
  return (
    <main className="min-h-screen bg-[#121212] w-full p-0">
      {/* Hero */}
      <section className="relative flex items-center justify-center w-full min-h-[80vh] overflow-hidden bg-black lg:pt-24 pt-14 pb-20">
        <div className="relative z-10 max-w-8xl mx-auto w-full px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-gradient text-white rounded-full text-sm font-semibold mb-6 border border-white">
              Blog
            </span>
            <h1
              className="text-4xl md:text-5xl xl:text-6xl leading-[0.9] tracking-wide font-bold mb-8 text-primary-gradient bg-clip-text text-transparent"
            >
              Diseño Web en General Roca
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Guía completa 2026: costos reales, tipos de sitios, errores
              comunes y cómo elegir al proveedor correcto para tu negocio en el
              Alto Valle.
            </p>
            <Link
              href="https://wa.me/5492984252859"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-gradient hover:scale-105 transition-all text-lg font-semibold rounded-lg border-2 border-white text-white"
            >
              Consultar por mi proyecto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="w-full bg-black py-16 px-6 border-t border-[#434343]">
        <div className="max-w-4xl mx-auto flex flex-col justify-center">
          {/* Precios */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              ¿Cuánto cuesta una web en General Roca?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 border-2 border-white rounded-lg bg-primary-gradient text-center">
                <h3 className="text-xl font-bold text-white mb-2">Landing Page</h3>
                <p className="text-4xl font-bold text-white mb-2">Desde USD $450</p>
                <p className="text-white/80 text-sm">
                  Ideal para campañas, eventos o captar leads rápidos.
                </p>
              </div>
              <div className="p-8 border-2 border-white rounded-lg bg-primary-gradient text-center">
                <h3 className="text-xl font-bold text-white mb-2">Sitio Profesional</h3>
                <p className="text-4xl font-bold text-white mb-2">Desde USD $700</p>
                <p className="text-white/80 text-sm">
                  Portfolio, empresa, servicios. 5-8 secciones.
                </p>
              </div>
              <div className="p-8 border-2 border-white rounded-lg bg-primary-gradient text-center">
                <h3 className="text-xl font-bold text-white mb-2">Tienda Online</h3>
                <p className="text-4xl font-bold text-white mb-2">Desde USD $1.000</p>
                <p className="text-white/80 text-sm">
                  Vender online con pasarela de pago y gestión de productos.
                </p>
              </div>
            </div>
          </div>

          {/* Tipos de sitios */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              Tipos de sitios para negocios en General Roca
            </h2>

            <div className="space-y-6">
              <div className="p-8 border-2 border-white/30 rounded-lg bg-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-gradient rounded-full">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">One Page (Landing Page)</h3>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  Todo el contenido en una sola página. Es la opción más económica
                  y rápida. Funciona bien para profesionales, prestadores de
                  servicios y proyectos nuevos. Si recién arrancás y tenés un
                  presupuesto limitado, arrancá por acá.
                </p>
              </div>

              <div className="p-8 border-2 border-white/30 rounded-lg bg-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-gradient rounded-full">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Sitio Web Multisecciones</h3>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  Un sitio con múltiples páginas: Inicio, Servicios, Portfolio,
                  Nosotros, Contacto. Es lo que la mayoría de las empresas del
                  Alto Valle necesitan. Transmite más profesionalismo y te permite
                  posicionar en más keywords.
                </p>
              </div>

              <div className="p-8 border-2 border-white/30 rounded-lg bg-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-gradient rounded-full">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Tienda Online (E-commerce)</h3>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  Si vendés productos físicos o digitales, necesitás una tienda.
                  Incluye carrito de compras, pasarela de pago (MercadoPago, Todo
                  Pago), gestión de stock y envíos. Es la inversión más alta pero
                  también la que más retorna.
                </p>
              </div>
            </div>
          </div>

          {/* Errores comunes */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              Errores comunes al contratar diseño web
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: AlertTriangle,
                  title: "Elegir por precio únicamente",
                  desc: "Una web barata que no aparece en Google es dinero tirado. Invertí en algo que te trae clientes, no solo en algo bonito.",
                },
                {
                  icon: Code,
                  title: "No pensar en SEO desde el inicio",
                  desc: "Si el sitio no está optimizado para aparecer en Google, no existe para tus clientes potenciales.",
                },
                {
                  icon: Shield,
                  title: "No pedir soporte post-entrega",
                  desc: "Tu web no es un proyecto que termina. Necesita mantenimiento, actualizaciones y mejoras.",
                },
                {
                  icon: Clock,
                  title: "Contratar freelancers sin respaldo",
                  desc: "Si el desarrollador desaparece, te quedás sin web. Buscá alguien con estructura de soporte.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 border-2 border-white/30 rounded-lg bg-black">
                  <item.icon className="w-8 h-8 text-white shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cómo elegir */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              Cómo elegir un diseñador web en General Roca
            </h2>
            <div className="space-y-4">
              {[
                "Pedí trabajos anteriores y verificá que sean proyectos reales",
                "Preguntá por SEO: si no pueden explicar cómo te van a posicionar, no son serios",
                "Averiguá el soporte post-entrega: ¿te dejan solo después de entregar?",
                "Comprobá que tengan presencia online ellos mismos",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border-2 border-white/30 rounded-lg bg-black">
                  <Check className="w-6 h-6 text-white shrink-0 mt-0.5" />
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-2 border-white rounded-lg p-10 bg-primary-gradient text-center">
            <h3 className="text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-body)" }}>
              ¿Tenés un proyecto en General Roca?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Escribime y te cotizo sin compromiso. Primer conversación gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5492984252859"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black hover:scale-105 transition-all text-lg font-semibold rounded-lg border-2 border-white text-white"
              >
                <span>Escribir por WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/50 hover:bg-white/10 transition-all text-lg font-semibold rounded-lg text-white"
              >
                Ir al formulario de contacto
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <Link
              href="/blog/mantenimiento-web-rio-negro"
              className="p-6 border-2 border-white/30 rounded-lg hover:border-white transition-all group bg-black"
            >
              <span className="text-white/50 text-sm">Artículo siguiente</span>
              <h4 className="text-lg font-bold text-white mt-1 group-hover:text-primary-gradient transition-colors">
                Mantenimiento Web en Río Negro →
              </h4>
            </Link>
            <Link
              href="/blog/agencia-digital-neuquen"
              className="p-6 border-2 border-white/30 rounded-lg hover:border-white transition-all group bg-black"
            >
              <span className="text-white/50 text-sm">Artículo siguiente</span>
              <h4 className="text-lg font-bold text-white mt-1 group-hover:text-primary-gradient transition-colors">
                Agencia Digital en Neuquén →
              </h4>
            </Link>
          </div>
        </div>
      </section>
      <BlogArticleSchema
        title="Diseño Web en General Roca: Guía Completa 2026"
        description="Todo lo que necesitás saber sobre diseño web en General Roca. Costos, tiempos, tipos de sitios y cómo elegir la mejor opción para tu negocio en el Alto Valle."
        url={`${baseUrl}/blog/${slug}`}
        publishedTime="2026-04-27"
      />
    </main>
  );
}