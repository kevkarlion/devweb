"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Alfa_Slab_One, Inter, JetBrains_Mono } from "next/font/google";

// Fuentes
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

export function HeroSection() {
  const checklistItems = [
    "Comercio digital",
    "SEO orgánico",
    "Transforma visitantes en clientes",
    "Diseño U/X U/I",
  ];

  return (
    <div
      className={`${alfaSlab.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <section
        id="home"
        className="relative flex items-center justify-center w-full min-h-screen overflow-hidden   pt-14 pb-20 bg-black"
      >
        <div className="relative z-10 max-w-8xl mx-auto w-full">
          {/* Layout Mobile */}
          <div className="lg:hidden flex flex-col items-center text-center">
            {/* Título principal */}
            <motion.h1
              className="mt-16 relative text-[2.7rem] sm:text-5xl leading-[0.9] tracking-normal uppercase mb-6 bg-clip-text text-transparent z-[200]"
              style={{
                fontFamily: "var(--font-alfaslab)",
                backgroundImage: 'url("/bck-final-hero.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Creando experiencias digitales
            </motion.h1>

            {/* Contenedor imagen con texto superpuesto */}
            <div className="relative w-full mb-4">
              <motion.div
                className="relative w-full  h-64 mx-auto -mt-10 sm:h-72 md:h-80 flex justify-center items-center overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src="/imghero.png"
                  alt="Experiencias digitales - devweb Patagonia"
                  width={800}
                  height={600}
                  className="
    object-contain 
    rounded-2xl 
    w-full 
    sm:w-[95%] 
    md:w-[90%] 
    translate-x-[35%] sm:translate-x-[35%] md:translate-x-[30%]
  "
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
                />

                {/* Texto superpuesto */}
                {/* Texto superpuesto */}
<motion.div
  className="absolute inset-0 flex items-center justify-center z-10 px-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  <div className="bg-black/50 rounded-xl px-4 py-2 flex justify-center items-center">
    <p
      className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-white text-center max-w-[85%] drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      Diseño y desarrollo web que potencia tu marca y conecta con
      tu audiencia
    </p>
  </div>
</motion.div>


                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-2xl z-0" />
              </motion.div>
            </div>

            {/* Botón */}
            <motion.div
              className="w-[97%] mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="https://wa.me/5492984252859"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[95%] md::max-w-[75%] gap-3 px-8 py-4 border border-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg group bg-gradient-to-r from-[#FFB7B2] to-[#B9C8F5] text-black hover:from-[#B9C8F5] hover:to-[#FFB7B2]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Solicitá tu consultoría
                <ArrowRight className="w-5 h-5 font-bold transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Checklist */}
            <motion.div
              className="w-[90%] max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="rounded-lg p-6 bg-gradient-to-r from-[#FFB7B2] to-[#B9C8F5] border border-white/40 shadow-2xl shadow-black/50 backdrop-blur-sm">
                <div className="space-y-4">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <Check className="w-5 h-5 text-black font-bold flex-shrink-0" />
                      <span
                        className="text-lg text-black font-bold text-left"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Layout Desktop */}
          <div className="hidden lg:px-0 lg:pl-8  lg:grid lg:mt-16 grid-cols-1 lg:grid-cols-[45%_65%] xl:grid-cols-[60%_40%] items-start min-h-[80vh] lg:min-h-[75vh]">
            {/* Columna izquierda */}
            <div className="flex flex-col w-full">
              <motion.h1
                className="lg:pt-8 relative text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-[0.9] tracking-normal uppercase mb-4 lg:mb-6 bg-clip-text text-transparent z-[200]"
                style={{
                  fontFamily: "var(--font-alfaslab)",
                  backgroundImage: 'url("/bck-final-hero.webp")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Creando experiencias digitales
              </motion.h1>

              <motion.div
                className="flex flex-col justify-center items-start space-y-8 text-left w-full mt-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.p
                  className="text-xl lg:text-xl lg:w-[72%] xl:w-[48%] max-w-2xl font-semibold leading-relaxed text-gray-300"
                  style={{ fontFamily: "var(--font-inter)" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Diseño y desarrollo web que potencia tu marca y conecta con tu
                  audiencia
                </motion.p>

                <motion.div
                  className="w-[72%] lg:w-[87%] xl:w-[58%]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="rounded-lg p-6 bg-gradient-to-r from-[#FFB7B2] to-[#B9C8F5] border border-white/40 shadow-2xl shadow-black/50 backdrop-blur-sm">
                    <div className="space-y-4">
                      {checklistItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 group"
                        >
                          <Check className="w-5 h-5 text-black font-bold flex-shrink-0" />
                          <span
                            className="text-lg text-black font-bold transition-colors duration-300"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="w-[40%] lg:w-[75%] xl:w-[45%]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <a
                    href="https://wa.me/5492984252859"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full gap-3 px-8 py-4 border border-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg group bg-gradient-to-r from-[#FFB7B2] to-[#B9C8F5] text-black hover:from-[#B9C8F5] hover:to-[#FFB7B2]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Solicitá tu consultoría
                    <ArrowRight className="w-7 h-7 font-bold transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Columna derecha - Imagen */}
            <motion.div
              className="relative flex justify-center items-start lg:justify-end lg:items-center  z-250"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full h-96 lg:h-[500px] xl:h-[500px] xl:top-4 xl:right-12 rounded-2xl overflow-hidden">
                <Image
                  src="/imghero.png"
                  alt="Experiencias digitales - Devweb Patagonia"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  className="object-cover object-center rounded-2xl"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Efectos de fondo */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "linear-gradient(135deg, #FFB7B2 0%, #B9C8F5 50%, #5A5A5A 100%)",
            }}
          />
          <div className="absolute inset-0 bg-black" />
        </div>
      </section>
    </div>
  );
}
