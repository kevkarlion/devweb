"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Cormorant_Garamond,
  Inter,
  JetBrains_Mono,
  Oswald,
  Alfa_Slab_One,
} from "next/font/google";

// Configurar las fuentes
const alfaSlab = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alfaslab",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Datos del portfolio
const portfolioItems = [
  {
    id: 1,
    title: "Marketing",
    description: "NGURU | Agencia de Marketing Integral",
    image: "/proyectos-img/nguru.png",
    category: "Desarrollo Web",
    technologies: ["Javascript", "Styles CSS", "HTML"],
    link: "https://nguru.com.ar/",
  },
  {
    id: 2,
    title: "Diseño Personalizado",
    description: "La Negra uñas | Diseño y Cuidado corporal",
    image: "/proyectos-img/la-negra.png",
    category: "Diseño UI/UX",
    technologies: ["Figma", "Next.js", "Tailwind.CSS"],
    link: "https://la-negra-nails.vercel.app/",
  },
  {
    id: 3,
    title: "Ecommerce | Informativa",
    description: "PERIMETRAL | Control de Stock y Ventas | Logeo de Usuarios | Sistema de Pagos | Automatizacion de Pedidos y Stock",
    image: "/proyectos-img/perimetral.png",
    category: "Comercio Digital",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "https://www.perimetralroca.com/",
  },
  {
    id: 4,
    title: "Coworking | One Page Informativa",
    description:
      "CoSpace | Red de contactos profesionales y espacios de trabajo",
    image: "/proyectos-img/coworking.png",
    category: "One Page",
    technologies: ["Next.js", "Tailwind.CSS", "TypeScript"],
    link: "https://cohub-space.vercel.app/",
  },
  {
    id: 5,
    title: "Bodega Patagonia | Web Institucional",
    description:
      "Diseño y desarrollo del sitio web oficial de la Bodega Patagonia",
    image: "/proyectos-img/bodega.png",
    category: "One Page Institucional",
    technologies: ["Next.js", "Tailwind.CSS", "TypeScript"],
    link: "https://patagonia-wine-bloom.vercel.app/",
  },
];

export function PortfolioSection() {
  return (
    <div
      className={`w-full ${alfaSlab.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      id="portfolio"
    >
      <div className="min-h-screen w-full relative bg-black">
        {/* Violet Storm Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
          }}
        />
        
        {/* Contenido principal */}
        <section className="relative z-10 min-h-screen py-24 px-6 w-full overflow-hidden">
          {/* Contenedor principal */}
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            {/* Header del Portfolio */}
            <motion.div
              className="text-center flex flex-col justify-center items-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Título principal */}
              <motion.h1
                className="lg:pt-6 xl:pt-8  mt-4  text-5xl lg:text-6xl  2xl:text-7xl  tracking-normal uppercase mb-12 lg:mb-4 xl:mb-6  text-transparent w-[143%] z-40 bg-linear-to-r from-[#333f71] via-[#a782c2] to-[#415285] bg-clip-text"
                style={{
                  fontFamily: "var(--font-alfaslab)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Portfolio
              </motion.h1>

              {/* Descripción */}
              <motion.p
                className="tracking-wide lg:tracking-normal text-base lg:text-base 2xl:text-lg text-white max-w-2xl pl-4 leading-relaxed  text-center lg:text-left border-l-3 border-white/70"
                style={{ fontFamily: "var(--font-inter)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Conocé los proyectos y emprendimientos con los que trabajamos, diseñados para impulsar marcas y transformar ideas en experiencias digitales impactantes.
              </motion.p>
            </motion.div>

            {/* Grid de Portfolio */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {portfolioItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 no-underline"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="h-full"
                  >
                    {/* Imagen del proyecto */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Categoría */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm text-[#121212]"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {item.category}
                        </span>
                      </div>

                      {/* Botón de vista */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div
                          className="px-6 py-3 bg-white text-[#121212] rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-[#121212] hover:text-white"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          Ver Proyecto
                        </div>
                      </motion.div>
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      <h3
                        className="text-xl font-semibold text-[#121212] mb-3"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="text-[#121212]/70 text-sm leading-relaxed mb-4"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item.description}
                      </p>

                      {/* Tecnologías */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-[#121212]/5 text-[#121212]/80 rounded-md"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Efecto de borde sutil */}
                    <div className="absolute inset-0 rounded-2xl border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </a>
              ))}
            </motion.div>

            {/* Texto CTA */}
            <motion.div
              className="text-center mt-12 lg:mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.p
                className="tracking-wide lg:tracking-normal text-base lg:text-base 2xl:text-lg text-white mb-6 max-w-2xl mx-auto text-center  xl:mb-18 xl:mt-12"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Digitalizá tu negocio con nosotros. Transformamos ideas en experiencias digitales únicas que impulsan tu marca al éxito.
              </motion.p>
            </motion.div>

            {/* Botón CTA */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="https://wa.me/5492984252859"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[90%] lg:w-[70%] xl:w-[35%] mt-2 lg:mt-4 inline-flex items-center justify-left gap-3 px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg group relative"
                style={{
                  fontFamily: "var(--font-inter)",
                }}
              >
                {/* Fondo negro */}
                <div className="absolute inset-0 rounded-lg bg-black" />

                {/* Borde degradado */}
                <div
                  className="absolute inset-0 rounded-sm border-2 border-transparent"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFB7B2 0%, #B9C8F5 50%, #5A5A5A 100%) border-box",
                    mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                  }}
                />

                {/* Contenido */}
                <span className="relative z-10 text-white">Hablemos de tu proyecto</span>
                <ArrowRight className="w-7 h-7 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}