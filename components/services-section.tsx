"use client";

import { Alfa_Slab_One, Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ChevronDown,
  Code,
  Palette,
  Search,
  TrendingUp,
  Plus,
} from "lucide-react";

const afaScrubOne = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-afa-scrub-one",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const services = [
  {
    number: "01",
    title: "DESARROLLO WEB MODERNO",
    description:
      "Sitios rápidos, escalables y diseñados con Next.js, TS y Tailwind.",
    icon: Code,
  },
  {
    number: "02",
    title: "DISEÑO UI/UX PERSONALIZADO",
    description:
      "Identidad visual única y experiencia de usuario pensada para convertir.",
    icon: Palette,
  },
  {
    number: "03",
    title: "SEO AVANZADO",
    description:
      "Optimización técnica y de contenido para aparecer en Google y atraer clientes.",
    icon: Search,
  },
  {
    number: "04",
    title: "WEBS ORIENTADAS AL MARKETING",
    description:
      "Landing pages, funnels y páginas de venta listas para convertir.",
    icon: TrendingUp,
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className={`${afaScrubOne.variable} ${inter.variable} w-full bg-black relative`}
      id="servicios"
    >
      {/* Contenido */}
      <div className="relative z-10 py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col justify-center ">
          {/* Título principal */}
          <motion.h1
            className=" mt-4 flex justify-center w-[85%]  text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[0.9] tracking-normal mb-12 bg-clip-text text-transparent text-center self-center uppercase"
            style={{
              fontFamily: "var(--font-afa-scrub-one)",
              backgroundImage: 'url("/bck-final-hero.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuestros servicios
          </motion.h1>

          {/* Subtítulo con rectángulos */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative inline-block">
              {/* Rectángulo principal con background degradado */}
              <div
                className="px-8 py-2 rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #FFB7B2 0%, #B9C8F5 50%, #5A5A5A 100%)",
                }}
              >
                {/* Rectángulo interior con borde blanco y fondo negro */}
                <div className="px-8 py-2 rounded border border-white bg-black shadow-2xl">
                  <h2
                    className="font-['Inter'] font-medium text-xl text-white text-center"
                    style={{
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    Para emprendedores y pymes
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Párrafo con línea vertical */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative max-w-2xl">
              {/* Línea vertical decorativa */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#E9E9E9] to-transparent rounded-full" />

              <p className="font-['Inter'] text-base lg:text-base 2xl:text-lg text-white leading-relaxed text-left pl-8 tracking-wide lg:tracking-normal">
                Nuestra agencia crea sitios webs rápidos, modernos y
                estratégicos para que puedas atraer clientes y competir de
                verdad.
              </p>
            </div>
          </motion.div>

          {/* Grid de servicios - 2 columnas en desktop con cruz central */}
          <div className="hidden lg:block relative mb-20">
            <div className="grid grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                >
                  {/* Número fuera de la card */}
                  <div className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-white mt-1 shrink-0">
                    <span className="font-['Inter'] font-bold text-5xl text-white">
                      {service.number}
                    </span>
                  </div>

                  {/* Card content */}
                  <div 
                    className="flex-1 p-5 border-r-2 border-b-2 border-gray-700  rounded-tr-2xl rounded-bl-2xl hover:border-[#E9E9E9]/80 transition-all duration-300 group max-w-[320px] min-h-[200px]"
                    style={{
                      background: "#ffffff",
                      backgroundImage: `
                        radial-gradient(
                          circle at top right,
                          rgba(70, 130, 180, 0.5),
                          transparent 70%
                        )
                      `,
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {/* Título con ícono */}
                    <div className="flex justify-center items-center gap-2 mb-3">
                      <service.icon className="w-8 h-8 text-black" />
                      <h3 className="font-['Inter'] font-semibold text-lg text-black transition-colors duration-300 text-center">
                        {service.title}
                      </h3>
                    </div>

                    {/* Flecha hacia abajo */}
                    <motion.div
                      className="mb-3 flex justify-center items-center"
                      animate={{ y: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      <ChevronDown className="w-6 h-6 text-black" />
                    </motion.div>

                    {/* Descripción */}
                    <p className="font-['Inter'] font-light text-sm text-black leading-relaxed text-center">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cruz doble central */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-full h-full">
                {/* Línea vertical */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-white to-transparent transform -translate-x-1/2" />
                {/* Línea horizontal */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-white to-transparent transform -translate-y-1/2" />
                {/* Icono Plus central */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-white">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de servicios - Versión móvil MODIFICADA */}
          <div className="lg:hidden grid grid-cols-1 gap-16 justify-center mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              >
                {/* Número en círculo - TAMAÑO 96px */}
                <div className="flex items-center justify-center w-36 h-36 rounded-full border-4 border-white mb-8">
                  <span className="font-['Inter'] font-bold text-6xl text-white">
                    {service.number}
                  </span>
                </div>

                {/* Card - MÁS LARGA QUE ANCHA CON PADDING ESPECÍFICO */}
                <div 
                  className="flex flex-col items-center border-r-2 border-b-2 border-gray-700 rounded-tr-2xl rounded-bl-2xl px-[15px] py-[25px] w-[90%] max-w-md min-h-[250px]"
                  style={{
                    background: "#ffffff",
                    backgroundImage: `
                      radial-gradient(
                        circle at top right,
                        rgba(70, 130, 180, 0.5),
                        transparent 70%
                      )
                    `,
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Ícono */}
                  <service.icon className="w-12 h-12 text-black mb-4" />
                  
                  {/* Título del servicio - INTER BOLD 20px */}
                  <h3 className="font-['Inter'] font-bold text-xl text-black mb-4">
                    {service.title}
                  </h3>

                  {/* Flecha hacia abajo */}
                  <motion.div
                    className="mb-4"
                    animate={{ y: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <ChevronDown className="w-5 h-5 text-black" />
                  </motion.div>

                  {/* Descripción - INTER MEDIUM 14px */}
                  <p className="font-['Inter'] font-medium text-base text-black leading-relaxed w-[90%]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botón Consultoría */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
              <div className="absolute inset-0 rounded-lg" />

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
              <span className="relative z-10 text-white">
                Cotizá tu sitio web ideal
              </span>
              <ArrowRight className="w-7 h-7 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}