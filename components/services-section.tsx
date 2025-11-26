"use client";

import { Alfa_Slab_One, Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Code,
  Palette,
  Search,
  TrendingUp,
  Plus,
  ChevronLeft,
  ChevronRight,
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
    number: "1",
    title: "DESARROLLO WEB MODERNO",
    description:
      "Sitios rápidos, escalables y diseñados con Next.js, TS y Tailwind.",
    icon: Code,
  },
  {
    number: "2",
    title: "DISEÑO UI/UX PERSONALIZADO",
    description:
      "Identidad visual única y experiencia de usuario pensada para convertir.",
    icon: Palette,
  },
  {
    number: "3",
    title: "SEO AVANZADO",
    description:
      "Optimización técnica y de contenido para aparecer en Google y atraer clientes.",
    icon: Search,
  },
  {
    number: "4",
    title: "WEBS ORIENTADAS AL MARKETING",
    description:
      "Landing pages, funnels y páginas de venta listas para convertir.",
    icon: TrendingUp,
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
      className={`${afaScrubOne.variable} ${inter.variable} w-full bg-black relative`}
      id="servicios"
    >
      {/* Contenido */}
      <div className="relative z-10 py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col justify-center">
          {/* Título principal - Diferente texto para mobile y desktop */}
          <motion.h1
            className="mt-24 flex justify-center w-[95%] text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[0.9] tracking-normal mb-12 bg-clip-text text-transparent text-center self-center uppercase text-mobile-gradient lg:text-primary-gradient"
            style={{
              fontFamily: "var(--font-afa-scrub-one)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Texto para mobile */}
            <span className="block lg:hidden leading-14">NUESTROS SERVICIOS</span>
            {/* Texto para desktop */}
            <span className="hidden lg:block">Servicios de diseño & desarrollo web</span>
          </motion.h1>

          {/* Contenedor principal - Se reorganiza según breakpoint */}
          <div className="max-w-6xl mx-auto flex justify-center mt-8">
            {/* VERSIÓN DESKTOP */}
            <motion.div
              className="hidden lg:flex items-center justify-between gap-8 mb-16 w-[75%]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Esfera con texto */}
              <div className="shrink-0">
                <div className="bg-primary-gradient w-48 h-48 rounded-full border-white border-2 flex items-center justify-center p-4">
                  <p 
                    className="font-['Inter'] font-medium text-lg text-white text-center leading-tight"
                    style={{
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    Para Emprendedores y Pequeños Negocios
                  </p>
                </div>
              </div>

              {/* Línea divisoria */}
              <div className="shrink-0 w-px h-24 bg-white rounded-full mx-8" />

              {/* Texto descriptivo */}
              <div className="flex-1">
                <p 
                  className="font-['Inter'] text-base text-white leading-relaxed text-left w-[80%]"
                  style={{
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Nuestra agencia crea sitios webs rápidos, modernos y estratégicos para que puedas atraer clientes y competir de verdad.
                </p>
              </div>
            </motion.div>

            {/* VERSIÓN MOBILE/TABLET */}
            <motion.div
              className="lg:hidden flex flex-col items-center gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Texto descriptivo */}
              <div className="w-full">
                <p 
                  className="font-['Inter'] text-lg text-white leading-relaxed text-center "
                  style={{
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Nuestra agencia crea sitios webs rápidos, modernos y estratégicos para que puedas atraer clientes y competir de verdad.
                </p>
              </div>

              {/* Línea divisoria horizontal */}
              <div className="w-48 h-0.5 bg-white rounded-full my-4" />

              {/* Esfera con texto */}
              <div className="shrink-0">
                <div className="bg-mobile-gradient w-64 h-64 rounded-full border-2 border-white flex items-center justify-center p-4">
                  <p 
                    className="font-['Inter'] font-medium text-2xl text-white text-center leading-tight"
                    style={{
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    Para Emprendedores y Pequeños Negocios
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Grid de servicios - 2 columnas en desktop con cruz central */}
          <div className="hidden lg:block relative mb-20 mt-18">
            <div className="grid grid-cols-2 gap-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex items-center gap-8 "
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
                    className="flex-1 p-5 border-2 border-white  rounded-lg transition-all duration-300 group max-w-[320px] min-h-[200px] bg-primary-gradient "
                    
                  >
                    {/* Título con ícono */}
                    <div className="flex justify-center items-center gap-2 mb-3">
                      <service.icon className="w-8 h-8 text-white" />
                      <h3 className="font-['Inter'] font-semibold text-lg text-white transition-colors duration-300 text-center">
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
                      <ChevronDown className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Descripción */}
                    <p className="font-['Inter'] font-light text-sm text-white leading-relaxed text-center">
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

          {/* CARRUSEL MOBILE */}
          <div className="lg:hidden relative mb-12 ">
            <div className="flex flex-col items-center text-center mt-12 min-h-[340px]">
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
                  className="flex flex-col items-center text-center w-full"
                >
                  {/* Card */}
                  <div 
                    className="flex flex-col items-center border-2 border-white rounded-tr-2xl rounded-bl-2xl px-[23px] py-[25px] w-[90%] max-w-md min-w-[380px] min-h-60 bg-mobile-gradient mt-8"
                  >
                    {/* Título del servicio */}
                    <h3 className="font-['Inter'] font-bold text-3xl text-white mb-2 mt-4">
                      {services[currentSlide].title}
                    </h3>

                    {/* Flecha hacia abajo */}
                    <motion.div
                      className="mb-2"
                      animate={{ y: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <ChevronDown className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Descripción */}
                    <p className="font-['Inter'] font-light text-lg text-white leading-relaxed  tracking-wide	w-[95%]">
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
                fontFamily: "var(--font-inter)",
              }}
            >
              {/* Fondo con gradiente mobile */}
              <div className="absolute inset-0 rounded-lg bg-mobile-gradient border-white border-2" />

              {/* Contenido */}
              <span className="relative z-10 text-white">
                Cotizá tu sitio web ideal
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
                fontFamily: "var(--font-inter)",
              }}
            >
              {/* Fondo negro */}
              <div className="absolute inset-0 rounded-lg" />

              {/* Borde degradado */}
              <div
                className="absolute inset-0 rounded-sm border-2  bg-mobile-gradient border-white"
               
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