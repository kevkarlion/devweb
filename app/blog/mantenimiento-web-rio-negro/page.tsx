import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Zap, AlertTriangle, Check, Code, Clock, FileText } from "lucide-react";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
// Las fuentes se cargan globalmente desde layout.tsx

const baseUrl = "https://devwebpatagonia.com";
const slug = "mantenimiento-web-rio-negro";

export const metadata: Metadata = {
  title: "Mantenimiento Web en Río Negro: Soporte y Actualizaciones | Devweb Patagonia",
  description:
    "Mantenimiento web en Río Negro para empresas y emprendedores. Soporte técnico, actualizaciones de seguridad, backups y mejoras. Planes mensuales para que tu web nunca se quede obsoleta.",
  alternates: {
    canonical: `${baseUrl}/blog/${slug}`,
  },
  openGraph: {
    title: "Mantenimiento Web en Río Negro",
    description:
      "Soporte y actualizaciones para tu web. Backups, seguridad y mejoras continuas.",
    url: `${baseUrl}/blog/${slug}`,
    locale: "es_AR",
    type: "article",
    publishedTime: "2026-04-27",
    authors: ["Devweb Patagonia"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantenimiento Web en Río Negro",
    description:
      "Soporte y actualizaciones para tu web. Backups, seguridad y mejoras continuas.",
  },
};

export default function MantenimientoWebRioNegroPage() {
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
              Mantenimiento Web en Río Negro
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Soporte que nunca te deja solo. Tu web necesita mantenimiento
              constante: parches de seguridad, backups, actualizaciones,
              mejoras. Si no lo hacés, se vuelve un riesgo.
            </p>
            <Link
              href="https://wa.me/5492984252859"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-gradient hover:scale-105 transition-all text-lg font-semibold rounded-lg border-2 border-white text-white"
            >
              Consultar plan de mantenimiento
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="w-full bg-black py-16 px-6 border-t border-[#434343]">
        <div className="max-w-4xl mx-auto flex flex-col justify-center">

          {/* Por qué mantenimiento */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              ¿Por qué tu web necesita mantenimiento?
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Muchas empresas contratan una web y después no le dan bola hasta que
              algo se rompe. En ese momento, la reparación sale más cara que el
              mantenimiento preventivo.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              El problema más común: el desarrollador desaparece, la web queda
              desactualizada, y cuando necesitás algo, no encontrás a nadie.
            </p>
          </div>

          {/* Riesgos */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              Los riesgos de no mantener tu web
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-6 border-2 border-white/30 rounded-lg bg-black">
                <Shield className="w-10 h-10 text-red-400 shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-1">
                    Vulnerabilidades de seguridad
                  </h4>
                  <p className="text-white/70">
                    WordPress, plugins y frameworks se actualizan constantemente
                    por razones de seguridad. Sin updates, tu web es vulnerable a
                    hackeos.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 border-2 border-white/30 rounded-lg bg-black">
                <Zap className="w-10 h-10 text-yellow-400 shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-yellow-400 mb-1">
                    Pérdida de velocidad
                  </h4>
                  <p className="text-white/70">
                    Las actualizaciones de PHP y servidores mejoran el rendimiento.
                    Sin migraciones, tu web se vuelve lenta y Google la penaliza en
                    búsqueda.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 border-2 border-white/30 rounded-lg bg-black">
                <AlertTriangle className="w-10 h-10 text-orange-400 shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-orange-400 mb-1">
                    Caída del servidor
                  </h4>
                  <p className="text-white/70">
                    Sin backups regulares, si el servidor falla o se rompe algo,
                    perdés todo. Información de clientes, productos, contenido.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Qué incluye */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              Qué incluye un plan de mantenimiento web
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: "1. Actualizaciones de seguridad",
                  desc: "Parches de seguridad del CMS, plugins y servidor. Esto es lo más importante. Un sitio sin updates es un sitio hackeable. Lo recomendamos hacer mensualmente como mínimo.",
                },
                {
                  icon: FileText,
                  title: "2. Backups automáticos",
                  desc: "Copias de seguridad diarias o semanales. Si algo se rompe, se puede restaurar. Los backups deben estar fuera del servidor principal (nube o almacenamiento externo).",
                },
                {
                  icon: Clock,
                  title: "3. Monitoreo de disponibilidad",
                  desc: "Tu web debe estar activa 24/7. Un buen servicio de mantenimiento monitorea que no se caiga y reacciona rápido si pasa algo.",
                },
                {
                  icon: Code,
                  title: "4. Actualización de contenido",
                  desc: "Cambios menores en textos, imágenes, productos. Esto no es solo técnico: incluye cambios en el contenido para mantener la web actualizada con tu negocio.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 border-2 border-white/30 rounded-lg bg-black">
                  <item.icon className="w-10 h-10 text-white shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Precios */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              Planes de mantenimiento: cuánto sale
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 border-2 border-white rounded-lg bg-primary-gradient text-center">
                <h3 className="text-xl font-bold text-white mb-2">Plan Básico</h3>
                <p className="text-4xl font-bold text-white mb-2">Desde USD $150/mes</p>
                <p className="text-white/80 text-sm">
                  Actualizaciones de seguridad, backups mensuales, monitoreo
                  básico. Para webs estáticas o landing pages.
                </p>
              </div>
              <div className="p-8 border-2 border-white rounded-lg bg-primary-gradient text-center">
                <h3 className="text-xl font-bold text-white mb-2">Plan Profesional</h3>
                <p className="text-4xl font-bold text-white mb-2">Desde USD $200/mes</p>
                <p className="text-white/80 text-sm">
                  Todo lo anterior + actualizaciones semanales, cambios de
                  contenido, informe mensual, optimizaciones.
                </p>
              </div>
              <div className="p-8 border-2 border-white rounded-lg bg-primary-gradient text-center">
                <h3 className="text-xl font-bold text-white mb-2">Plan Integral</h3>
                <p className="text-4xl font-bold text-white mb-2">Desde USD $250/mes</p>
                <p className="text-white/80 text-sm">
                  Gestión total de presencia digital: web, SEO, analytics,
                  estrategia. Para empresas que dependen de su presencia online.
                </p>
              </div>
            </div>
          </div>

          {/* Freelancer vs agencia */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              ¿Freelancer o agencia para mantenimiento?
            </h2>
            <div className="p-8 border-2 border-white rounded-lg bg-black">
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Los freelancers son más económicos pero tienen un riesgo: si se
                enferman, cambian de trabajo o desaparecen, te quedás colgado.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Una agencia con estructura de soporte tiene continuidad. El costo
                es mayor pero la tranquilidad vale la pena.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="border-2 border-white rounded-lg p-10 bg-primary-gradient text-center">
            <h3 className="text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-body)" }}>
              ¿Tu web necesita mantenimiento?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Te ofrezco un plan según tu situación. Sin compromiso.
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
              href="/blog/diseno-web-general-roca"
              className="p-6 border-2 border-white/30 rounded-lg hover:border-white transition-all group bg-black"
            >
              <span className="text-white/50 text-sm">Artículo anterior</span>
              <h4 className="text-lg font-bold text-white mt-1 group-hover:text-primary-gradient transition-colors">
                ← Diseño Web en General Roca
              </h4>
            </Link>
            <Link
              href="/blog/agencia-digital-neuquen"
              className="p-6 border-2 border-white/30 rounded-lg hover:border-white transition-all group bg-black"
            >
              <span className="text-white/50 text-sm">Artículo anterior</span>
              <h4 className="text-lg font-bold text-white mt-1 group-hover:text-primary-gradient transition-colors">
                ← Agencia Digital en Neuquén
              </h4>
            </Link>
          </div>
        </div>
      </section>
      <BlogArticleSchema
        title="Mantenimiento Web en Río Negro: Soporte y Actualizaciones"
        description="Mantenimiento web en Río Negro para empresas y emprendedores. Soporte técnico, actualizaciones de seguridad, backups y mejoras. Planes mensuales."
        url={`${baseUrl}/blog/${slug}`}
        publishedTime="2026-04-27"
      />
    </main>
  );
}