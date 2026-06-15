"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Code,
  Palette,
  Settings2,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Las fuentes se cargan globalmente desde layout.tsx

const services = [
  {
    title: "Software a Medida",
    description:
      "Desarrollamos sistemas CRM, paneles de administración y soluciones digitales personalizadas para optimizar cada proceso de tu negocio.",
    icon: Code,
  },
  {
    title: "Automatización de Procesos",
    description:
      "Eliminá tareas repetitivas con flujos inteligentes que conectan herramientas, notifican en tiempo real y mejoran la eficiencia operativa.",
    icon: Settings2,
  },
  {
    title: "Dashboards Interactivos",
    description:
      "Visualizá métricas clave, controlá tu negocio en tiempo real y tomá decisiones estratégicas respaldadas por datos concretos.",
    icon: BarChart3,
  },
  {
    title: "Desarrollo Web Full-Stack",
    description:
      "Creamos sitios rápidos y escalables con Next.js, diseño UI/UX profesional, SEO avanzado y rendimiento optimizado.",
    icon: Palette,
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 0: right, 1: left

  const nextSlide = () => {
    setDirection(0);
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 0 : 1);
    setCurrentSlide(index);
  };

  // Variantes de animación para el carrusel
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction === 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <section
      ref={ref}
      className="w-full bg-neutral-950 relative"
      id="servicios"
    >
      {/* Contenido */}
      <div className="relative z-10 py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col justify-center">
          {/* Título principal - Diferente texto para mobile y desktop */}
          <motion.h1
            className="pt-6 lg:pt-24 flex justify-center w-[95%] text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[0.9] tracking-normal mb-12 bg-clip-text text-transparent text-center self-center text-mobile-gradient lg:text-primary-gradient font-bold"
            style={{
              fontFamily: "var(--font-titles)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Texto para mobile */}
            <span className="block lg:hidden leading-14">Nuestros servicios</span>
            {/* Texto para desktop */}
            <span className="hidden lg:block">Servicios de diseño & desarrollo web</span>
          </motion.h1>

          {/* Subtítulo h2 */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
            style={{ fontFamily: "var(--font-titles)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Soluciones Empresariales a Medida
          </motion.h2>

          {/* Divider line */}
          <motion.div
            className="flex justify-center self-center items-center border border-white/60 w-[50%] md:w-[32%] lg:w-[18%] mb-6 mt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Paragraph */}
          <motion.p
            className="text-base md:text-lg text-neutral-300 font-light leading-relaxed text-left max-w-2xl mx-auto mb-10 px-4"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Desarrollamos plataformas, sistemas y herramientas digitales adaptadas a los procesos y objetivos de tu empresa.
          </motion.p>

          {/* Grid de servicios - 2 columnas en desktop */}
          <div className="hidden lg:grid grid-cols-2 gap-6 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative flex flex-col rounded-xl border-2 border-white/20 bg-primary-gradient p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              >
                {/* Icon container */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover:scale-110 group-hover:border-white/40">
                  <service.icon className="h-7 w-7 text-white transition-all duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-white font-light leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CARRUSEL MOBILE */}
          <div className="lg:hidden relative mb-12">
            <div className="flex flex-col items-center text-center mt-12 min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center w-full"
                >
                  {/* Card */}
                  <div className="group relative flex flex-col items-start rounded-xl border-2 border-white/20 bg-mobile-gradient p-6 w-[90%] max-w-md transition-all duration-300 mt-8">
                    {/* Icon container */}
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5">
                      {React.createElement(services[currentSlide].icon, {
                        className: "h-7 w-7 text-white",
                      })}
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-3 text-xl font-bold text-white text-left"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {services[currentSlide].title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm text-white font-light leading-relaxed text-left"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {services[currentSlide].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles del carrusel */}
            <div className="flex justify-center items-center gap-8 mt-4">
              {/* Flecha izquierda */}
              <motion.button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              {/* Indicadores */}
              <div className="flex gap-2">
                {services.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Flecha derecha */}
              <motion.button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Flecha hacia abajo y Botón CTA - Solo mobile */}
          <motion.div
            className="lg:hidden flex flex-col items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Flecha hacia abajo */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <ChevronDown className="w-8 h-8 text-white" />
            </motion.div>

            {/* Botón Consultoría */}
            <a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[95%] mt-2 inline-flex items-center justify-center gap-3 px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg group relative"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              {/* Fondo con gradiente mobile */}
              <div className="absolute inset-0 rounded-lg bg-mobile-gradient" />

              {/* Contenido */}
              <span className="relative z-10 text-white">
                Cotizá tu proyecto
              </span>
              <ArrowRight className="w-7 h-7 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Botón Consultoría - Desktop */}
          <motion.div
            className="hidden lg:flex justify-center mt-8"
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
                fontFamily: "var(--font-body)",
              }}
            >
              {/* Fondo negro */}
              <div className="absolute inset-0 rounded-lg" />

              {/* Fondo gradiente */}
              <div
                className="absolute inset-0 rounded-sm bg-mobile-gradient"
              />

              {/* Contenido */}
              <span className="relative z-10 text-white">
                Cotizá tu proyecto
              </span>
              <ArrowRight className="w-7 h-7 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}