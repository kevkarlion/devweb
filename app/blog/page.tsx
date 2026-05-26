import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Devweb Patagonia - Artículos sobre Diseño Web y Marketing Digital",
  description:
    "Artículos sobre diseño web, SEO, presencia digital y marketing online para empresas de la Patagonia. Guías prácticas para mejorar tu negocio en internet.",
};

const posts = [
  {
    slug: "diseno-web-general-roca",
    title: "Diseño Web en General Roca: Guía Completa 2026",
    description:
      "Todo lo que necesitás saber sobre diseño web en General Roca: costos, tipos de sitios, errores comunes y cómo elegir al proveedor correcto.",
    date: "2026-04-27",
  },
  {
    slug: "agencia-digital-neuquen",
    title: "Agencia Digital en Neuquén: Presencia Online para Empresas",
    description:
      "Cómo una agencia digital en Neuquén puede ayudar a tu empresa a conseguir más clientes a través de desarrollo web y SEO.",
    date: "2026-04-27",
  },
  {
    slug: "mantenimiento-web-rio-negro",
    title: "Mantenimiento Web en Río Negro: Soporte que Nunca Te Deja Solo",
    description:
      "Por qué tu web necesita mantenimiento constante. Riesgos de no hacerlo, qué incluye un plan de mantenimiento y cuánto sale.",
    date: "2026-04-27",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#121212] w-full p-0">
      {/* Hero */}
      <section className="relative flex items-center justify-center w-full min-h-[70vh] overflow-hidden bg-black lg:pt-24 pt-14">
        <div className="relative z-10 max-w-8xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20">
            {/* Contenido */}
            <div className="text-center lg:text-left max-w-3xl">
              <h1
                className="text-4xl md:text-5xl xl:text-6xl leading-[0.9] tracking-wide font-bold mb-6 text-primary-gradient bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-titles)" }}
              >
                Blog de Devweb Patagonia
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                Artículos sobre diseño web, SEO, presencia digital y marketing online para empresas de la Patagonia. Guías prácticas para mejorar tu negocio en internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="w-full bg-black py-16 px-6 border-t border-[#434343]">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
          <div className="space-y-6 w-full">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-8 border-2 border-white rounded-lg hover:scale-[1.02] transition-all duration-300 group bg-primary-gradient"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-black/40 text-white rounded-full text-sm font-medium mb-3 border border-white/30">
                      Blog
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:scale-[1.01] transition-transform"
                        style={{ fontFamily: "var(--font-titles)" }}>
                      {post.title}
                    </h2>
                    <p className="text-white/80 mb-4 text-lg leading-relaxed">{post.description}</p>
                    <span className="text-white/50 text-sm">{post.date}</span>
                  </div>
                  <ArrowRight className="w-8 h-8 text-white shrink-0 mt-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 w-full">
            <div className="border-2 border-white rounded-lg p-8 bg-primary-gradient">
              <h3 className="text-2xl font-bold mb-4 text-center text-white"
                  style={{ fontFamily: "var(--font-body)" }}>
                ¿Necesitás una web para tu negocio?
              </h3>
              <p className="text-white/90 text-center mb-6">
                Te cotizo sin compromiso. Primer conversación gratuita.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://wa.me/5492984252859"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black hover:scale-105 transition-all text-lg font-semibold rounded-lg border-2 border-white text-white"
                >
                  <span>Escribir por WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}