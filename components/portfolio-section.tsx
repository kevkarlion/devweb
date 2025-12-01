"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Instagram, MessageCircle, ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Alfa_Slab_One, Inter } from "next/font/google";
import Image from "next/image";

// Fuentes
const afaScrubOne = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-afa-scrub-one",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentCard, setCurrentCard] = useState(0);

  const cardsData = [
    {
      title: "Estrategia y Análisis | Comprendemos a Fondo Tu Negocio",
      image: "/ct-img1.webp",
      description: "No desarrollamos a ciegas. Empezamos con una reunión en profundidad para sumergirnos en tu empresa, tu mercado objetivo y tus objetivos únicos. No solo preguntamos '¿cómo quieres que se vea?', sino '¿qué debe lograr tu web?' Identificamos juntos el camino claro hacia el éxito."
    },
    {
      title: "Diseño Centrado en el Usuario (UX/UI) y Planificación",
      image: "/ct-img2.webp",
      description: "Con toda la información, creamos la arquitectura de tu sitio y los wireframes. Diseñamos pensando en tu cliente final: una experiencia intuitiva y atractiva que guíe al visitante hacia la acción que deseas (contactar, comprar, etc.). Tu aprobación en esta fase es crucial."
    },
    {
      title: "Desarrollo Técnico y Optimización SEO",
      image: "/ct-img3.webp",
      description: "Llega el momento de programar. Desarrollamos tu web con código limpio y escalable, asegurando que sea ultrarrápida, totalmente adaptable a cualquier dispositivo (responsive) y optimizada para los motores de búsqueda desde el primer día. La base de un buen posicionamiento se construye aquí."
    },
    {
      title: "Lanzamiento y Entrega | Tu Éxito es Nuestro Éxito",
      image: "/ct-img4.webp",
      description: "Todo listo! Realizamos los últimos ajustes y lanzamos tu web al mundo. Pero nuestro trabajo no termina aquí: te entregamos la gestión completa y te formamos para que la puedas manejar. Tu éxito es el nuestro, por lo que estamos contigo para asegurar que todo funcione a la perfección"
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  return (
    <section ref={ref} className={`${afaScrubOne.variable} ${inter.variable} w-full bg-black py-24 md:py-32 px-6 relative overflow-hidden border-t border-[#434343]`} id="metodo">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        {/* Título principal */}
        <motion.h1
          className="flex flex-col justify-center items-center text-[2.7rem] lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[0.9] tracking-normal bg-clip-text text-transparent text-center text-mobile-gradient lg:text-primary-gradient mb-4 mt-16 uppercase"
          style={{
            fontFamily: "var(--font-afa-scrub-one)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          NUESTRA <br /> METODOLOGÍA <br /> <span className="text-2xl">diseñada para tu éxito</span> 
        </motion.h1>

        <div className="flex justify-center self-center items-center border-2 border-white w-[50%] md:w-[32%] lg:w-[18%] mb-16"></div>

        {/* VERSIÓN DESKTOP */}
        <div className="hidden lg:block">
          {/* Contenido principal - Texto y CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 mb-20 items-start w-[92%] mt-8">
            {/* Texto descriptivo */}
            <motion.div
              className="flex flex-col justify-center col-span-7"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p 
                className="font-['Inter'] text-left text-sm lg:text-base text-white leading-relaxed tracking-wide  hyphens-auto w-[88%]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                En un mundo donde el desarrollo web rápido y genérico es la norma, nosotros elegimos el camino opuesto. Nuestra metodología de trabajo se basa en la comprensión profunda de tu negocio antes de escribir una sola línea de código. Garantizamos un resultado final que no solo cumple, sino que supera expectativas, porque está construido sobre los cimientos de una estrategia sólida.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex flex-col items-center justify-center col-span-5"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="https://wa.me/5492984252859"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[350px] inline-flex items-center justify-center gap-3 px-8 py-4 hover:scale-105 transition-all duration-300 shadow-2xl font-bold text-xl group relative"
                style={{
                  fontFamily: "var(--font-inter)",
                }}
              >
                <div className="absolute inset-0 rounded-md bg-primary-gradient border-2 border-white" />
                <span className="relative z-10 text-white text-center text-lg">
                  Cotizá tu web a medida
                </span>
                <ChevronDown className="w-8 h-8 text-white" />
              </a>
              
              {/* Redes Sociales */}
              <motion.div
                className="flex flex-col items-center mb-16 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex gap-6 justify-center mb-2">
                  <a 
                    href="https://github.com/kevkarlion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://www.instagram.com/kevinrqm?igsh=dWswMWg4MmplOWVk&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://wa.me/5492984252859" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>
                </div>
                <p 
                  className="font-['Inter'] font-light text-white mb-6 text-center text-lg"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Conoce nuestras redes sociales
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* 4 Cards Centradas */}
          <div className="w-full max-w-4xl mx-auto space-y-12">
            {cardsData.map((card, index) => (
              <motion.div
                key={index}
                className="bg-[#0D0D0D] border border-[#434343] rounded-tl-3xl rounded-br-3xl overflow-hidden flex flex-col lg:flex-row"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + (index * 0.2),
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Lado izquierdo - Título con fondo de color (35%) */}
                <div className="lg:w-[35%] bg-primary-gradient p-8 flex items-center justify-center">
                  <h3 
                    className="font-['Inter'] font-bold text-2xl lg:text-3xl text-white text-center leading-tight"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Lado derecho - Contenido (65%) */}
                <div className="lg:w-[65%] bg-white">
                  {/* Imagen */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 65vw"
                    />
                  </div>
                  
                  {/* Texto descriptivo */}
                  <p 
                    className="font-['Inter'] text-base text-black leading-relaxed tracking-wide px-8 py-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VERSIÓN MOBILE */}
        <div className="lg:hidden w-full">
          {/* Card con texto descriptivo */}
          <motion.div
            className="bg-[#0D0D0D] border border-[#434343] rounded-xl p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p 
              className="font-['Inter'] text-base text-white leading-relaxed tracking-wide text-center"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              En un mundo donde el desarrollo web rápido y genérico es la norma, nosotros elegimos el camino opuesto. Nuestra metodología de trabajo se basa en la comprensión profunda de tu negocio antes de escribir una sola línea de código. Garantizamos un resultado final que no solo cumple, sino que supera expectativas, porque está construido sobre los cimientos de una estrategia sólida.
            </p>
          </motion.div>

          {/* Flecha indicadora */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ArrowRight className="w-8 h-8 text-white transform rotate-90" />
          </motion.div>

          {/* Carrusel de Cards */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Card actual */}
            <div className="bg-[#0D0D0D] border border-[#434343] rounded-xl overflow-hidden">
              {/* Título */}
              <div className="bg-primary-gradient p-6">
                <h3 
                  className="font-['Inter'] font-bold text-xl text-white text-center leading-tight"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {cardsData[currentCard].title}
                </h3>
              </div>

              {/* Imagen */}
              <div className="relative w-full h-48">
                <Image
                  src={cardsData[currentCard].image}
                  alt={cardsData[currentCard].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Descripción */}
              <div className="p-6 bg-white">
                <p 
                  className="font-['Inter'] text-sm text-black leading-relaxed tracking-wide text-center"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {cardsData[currentCard].description}
                </p>
              </div>
            </div>

            {/* Controles del carrusel */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevCard}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Indicadores de puntos */}
              <div className="flex gap-2">
                {cardsData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCard ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextCard}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>

          {/* CTA Mobile */}
          <motion.div
            className="flex justify-center mb-18 mt-18"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[350px] inline-flex items-center justify-center gap-3 px-8 py-4 hover:scale-105 transition-all duration-300 shadow-2xl font-bold text-lg group relative"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              <div className="absolute inset-0 rounded-md bg-primary-gradient border-2 border-white" />
              <span className="relative z-10 text-white text-center">
                Solicita tu consultoría Gratuita
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 text-white" />
            </a>
          </motion.div>

          {/* Redes Sociales Mobile */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex gap-4 justify-center mb-4">
              <a 
                href="https://github.com/kevkarlion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/kevinrqm?igsh=dWswMWg4MmplOWVk&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://wa.me/5492984252859" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
            </div>
            <p 
              className="font-['Inter'] font-light text-white text-center text-base"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Conoce nuestras redes
            </p>
          </motion.div>
        </div>

        {/* CTA Final (solo en desktop) */}
        <motion.div
          className="hidden lg:flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <a
            href="https://wa.me/5492984252859"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[400px] inline-flex items-center justify-center gap-3 px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg group relative"
            style={{
              fontFamily: "var(--font-inter)",
            }}
          >
            <div className="absolute inset-0 rounded-lg bg-primary-gradient border-2 border-white" />
            <span className="relative z-10 text-white text-center text-lg">
              Empecemos tu proyecto hoy
            </span>
            <ArrowRight className="w-6 h-6 relative z-10 text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}