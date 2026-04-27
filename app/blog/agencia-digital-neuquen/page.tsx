import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Code, Search, Globe, Users } from "lucide-react";
import { Alfa_Slab_One, Inter } from "next/font/google";

const alfaSlab = Alfa_Slab_One({ subsets: ["latin"], weight: ["400"], variable: "--font-alfaslab" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Agencia Digital en Neuquén: Desarrollo Web y Marketing Online | Devweb Patagonia",
  description:
    "Agencia digital en Neuquén. Desarrollo web, SEO y presencia online para empresas de Neuquén capital y toda la región. Soporte permanente y estrategia digital.",
  openGraph: {
    title: "Agencia Digital en Neuquén",
    description:
      "Desarrollo web y marketing online en Neuquén. Presencia digital para empresas.",
  },
};

export default function AgenciaDigitalNeuquenPage() {
  return (
    <main className={`${alfaSlab.variable} ${inter.variable} min-h-screen bg-[#121212] w-full p-0`}>
      {/* Hero */}
      <section className="relative flex items-center justify-center w-full min-h-[80vh] overflow-hidden bg-black lg:pt-24 pt-14 pb-20">
        <div className="relative z-10 max-w-8xl mx-auto w-full px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-gradient text-white rounded-full text-sm font-semibold mb-6 border border-white">
              Blog
            </span>
            <h1
              className="text-4xl md:text-5xl xl:text-6xl leading-[0.9] tracking-wide uppercase font-bold mb-8 text-primary-gradient bg-clip-text text-transparent"
            >
              Agencia Digital en Neuquén
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Presencia online para empresas de Neuquén. Si tenés una empresa y
              todavía no aparecés en Google, tus competidores se están llevando
              tus clientes.
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

          {/* Intro */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent uppercase"
              style={{ fontFamily: "var(--font-alfaslab)" }}
            >
              Neuquén necesita más empresas con presencia digital
            </h2>
            <div className="space-y-6">
              <p className="text-white/90 text-lg leading-relaxed">
                Neuquén capital es una de las ciudades de mayor crecimiento en la
                Patagonia. Empresas petroleras, constructoras, prestadores de
                servicios, emprendedores tecnológicos. El mercado es competitivo y
                los clientes cada vez buscan más online antes de contratar.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Si tu empresa no aparece en Google cuando alguien busca lo que
                ofrecés, tus competidores que sí aparecen se llevan esos clientes.
              </p>
            </div>
          </div>

          {/* Qué hace una agencia digital */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent uppercase"
              style={{ fontFamily: "var(--font-alfaslab)" }}
            >
              Qué hace una agencia digital en Neuquén
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: Code,
                  title: "Diseño y desarrollo web",
                  desc: "Tu carta de presentación digital. Tiene que ser rápida, profesional y optimizada para convertir visitantes en clientes.",
                },
                {
                  icon: Search,
                  title: "Posicionamiento en Google (SEO)",
                  desc: "Que tu web aparezca cuando alguien busca 'empresa de servicios en Neuquén' o 'productos en Cipolletti'. Es el canal de adquisición más rentable a largo plazo.",
                },
                {
                  icon: Globe,
                  title: "Mantenimiento y soporte",
                  desc: "Tu web no puede quedarse desactualizada. Necesita respaldos, parches de seguridad y mejoras continuas.",
                },
                {
                  icon: Users,
                  title: "Estrategia digital",
                  desc: "Saber qué métricas mirar, cómo mejorar la conversión, qué contenido publicar para atraer.",
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

          {/* Desarrollo web por tipo */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent uppercase"
              style={{ fontFamily: "var(--font-alfaslab)" }}
            >
              Desarrollo web en Neuquén: qué necesitás
            </h2>

            <div className="space-y-6">
              <div className="p-8 border-2 border-white/30 rounded-lg bg-black">
                <h3 className="text-xl font-bold text-white mb-3">Empresas de servicios (B2B)</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Si ofrecés servicios a otras empresas, tu web debe transmitir
                  confianza, credibilidad y experiencia. Necesitás: sitio con
                  portfolio, casos de éxito, testimonios, formulario de contacto y
                  optimización SEO para aparecer en búsquedas locales.
                </p>
              </div>

              <div className="p-8 border-2 border-white/30 rounded-lg bg-black">
                <h3 className="text-xl font-bold text-white mb-3">Empresas de consumo (B2C)</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Si vendés directamente al público, necesitás una web que genere
                  confianza, muestre productos o servicios claramente y tenga
                  canales de venta o contacto rápidos. El celular es fundamental:
                  más del 60% del tráfico viene de móvil.
                </p>
              </div>

              <div className="p-8 border-2 border-white/30 rounded-lg bg-black">
                <h3 className="text-xl font-bold text-white mb-3">Startups y proyectos tecnológicos</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Neuquén tiene un ecosistema emprendedor en crecimiento. Si estás
                  lanzando algo nuevo, necesitás landing page, presencia en redes y
                  una estrategia de contenido que te posicione como referente.
                </p>
              </div>
            </div>
          </div>

          {/* SEO local */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent uppercase"
              style={{ fontFamily: "var(--font-alfaslab)" }}
            >
              Por qué el SEO local es clave para Neuquén
            </h2>
            <div className="p-8 border-2 border-white rounded-lg bg-primary-gradient">
              <p className="text-white text-lg leading-relaxed mb-4">
                La mayoría de las búsquedas son locales. Alguien en Cipolletti que
                busca "plomero" o "empresa de limpieza" va a Google y elige entre
                los que aparecen primero. Si no estás en ese grupo, no existís.
              </p>
              <p className="text-white text-lg leading-relaxed">
                El SEO local no es magia: es optimizar tu Google Business Profile,
                tener reseñas, una web rápida con keywords correctas y enlaces de
                directorios locales. Es trabajo metódico que da resultados en 3-6
                meses.
              </p>
            </div>
          </div>

          {/* Cómo trabajamos */}
          <div className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary-gradient bg-clip-text text-transparent uppercase"
              style={{ fontFamily: "var(--font-alfaslab)" }}
            >
              Cómo trabajamos con empresas de Neuquén
            </h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Conversación inicial", desc: "Nos contás tu negocio, tus objetivos y tu situación actual. Sin compromiso." },
                { step: "02", title: "Propuesta personalizada", desc: "Te armamos una solución concreta con presupuesto detallado." },
                { step: "03", title: "Desarrollo", desc: "Diseñamos y desarrollamos tu web con SEO desde el inicio." },
                { step: "04", title: "Lanzamiento y seguimiento", desc: "Te acompañamos después del lanzamiento con soporte y mejoras." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 border-2 border-white/30 rounded-lg bg-black">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-gradient rounded-full shrink-0">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-2 border-white rounded-lg p-10 bg-primary-gradient text-center">
            <h3 className="text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-inter)" }}>
              ¿Tu empresa necesita presencia digital en Neuquén?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Escribime y vemos juntos qué necesitás. Sin compromiso.
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
              href="/blog/mantenimiento-web-rio-negro"
              className="p-6 border-2 border-white/30 rounded-lg hover:border-white transition-all group bg-black"
            >
              <span className="text-white/50 text-sm">Artículo siguiente</span>
              <h4 className="text-lg font-bold text-white mt-1 group-hover:text-primary-gradient transition-colors">
                Mantenimiento Web en Río Negro →
              </h4>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}