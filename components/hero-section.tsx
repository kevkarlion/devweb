"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Briefcase, Users, Lightbulb } from "lucide-react";
import {
  Cormorant_Garamond,
  Inter,
  JetBrains_Mono,
  Oswald,
  EB_Garamond,
  Judson,
} from "next/font/google";
import { useState } from "react";

// Fuentes
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant",
});
const judson = Judson({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-judson",
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ebgaramond",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-oswald",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export function HeroSection() {
  const [bgLoaded, setBgLoaded] = useState(false);

  const desktopItems = [
    {
      icon: <Briefcase className="w-6 h-6 lg:w-7 lg:h-7" />,
      title: "Comercio Digital",
      position: { lg: { left: -50, top: -20 } },
      delay: 0.6,
    },
    {
      icon: <Users className="w-6 h-6 lg:w-7 lg:h-7" />,
      title: "Consigue Clientes",
      position: { lg: { left: 25, top: 120 } },
      delay: 0.8,
    },
    {
      icon: <Lightbulb className="w-6 h-6 lg:w-7 lg:h-7" />,
      title: "Muestra tu Negocio",
      position: { lg: { left: -40, top: 260 } },
      delay: 1.0,
    },
  ];

  const mobileItems = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Comercio Digital",
      position: { left: 8, top: -30 },
      delay: 0.6,
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Consigue Clientes",
      position: { left: 45, top: 35 },
      delay: 0.8,
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Muestra tu Negocio",
      position: { left: 20, top: 105 },
      delay: 1.0,
    },
  ];

  return (
    <div
      className={`${cormorant.variable} ${ebGaramond.variable} ${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} ${judson.variable}`}
    >
      <section
        id="home"
        className="relative flex items-center justify-center w-full min-h-screen overflow-hidden px-4 sm:px-6 pt-32 pb-20 lg:pt-24 lg:pb-20"
      >
        {/* Imagen de fondo optimizada */}
        <div className="absolute inset-0 z-0">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-gray-100" />
  <Image
    src="/bck-final-hero.webp"
    alt="Fondo principal Devweb Patagonia"
    fill
    sizes="100vw"
    priority
    quality={90}
    placeholder="blur"
    blurDataURL="/blur-placeholder.webp"
    className="object-cover object-center transition-opacity duration-700 ease-in-out"
  />
  <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px]" />
</div>


        {/* Contenido principal */}
        <div className="relative z-10 max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 xl:gap-10 items-center min-h-[80vh] lg:min-h-[75vh] 2xl:min-h-[80vh]">
            {/* Texto principal */}
            <motion.div
              className="flex flex-col justify-center items-center space-y-6 text-center w-full pt-4 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-[clamp(2.8rem,9vw,4.5rem)] lg:text-[clamp(3rem,10vw,5.24rem)] leading-[0.95] tracking-tighter text-[#121212] w-full mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <span
                  className="block font-regular tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Creando
                </span>
                <span
                  className="block italic font-normal tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Experiencias
                </span>
                <span
                  className="block font-normal tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-judson)" }}
                >
                  Digitales
                </span>
              </motion.h1>

              <motion.p
                className="text-[clamp(1rem,3vw,1.1rem)] px-6 text-center text-black max-w-md lg:max-w-xl font-medium leading-relaxed mx-auto"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Diseño y desarrollo web que potencia tu marca y conecta con tu
                audiencia
              </motion.p>

              {/* CTA */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="https://wa.me/5492984252859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300 shadow-md font-medium text-base group"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Solicitá tu consultoría
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            {/* Logo + ítems */}
            <motion.div
              className="relative flex justify-center items-center lg:justify-start mt-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative flex items-center">
                <div className="mb-4 mt-4">
                  <Image
                    src="/logo-hero.png"
                    alt="Logo de Devweb Patagonia"
                    width={140}
                    height={140}
                    priority
                    className="object-contain w-28 md:w-32 lg:w-36 xl:w-40 h-auto drop-shadow-xl"
                  />
                </div>

                {/* Ítems semicirculares desktop */}
                <div className="relative hidden sm:block ml-4 w-[360px] h-[320px] lg:w-[400px] lg:h-[350px]">
                  {desktopItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col items-center justify-center text-center w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-[#022244] shadow-2xl hover:scale-110 transition-all duration-300 border border-white/10 group"
                      style={{
                        left: `${item.position.lg.left}px`,
                        top: `${item.position.lg.top}px`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: item.delay,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <div className="mb-2 text-coral group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <p
                        className="text-[0.75rem] font-medium leading-tight text-mint"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.title}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Ítems mobile */}
                <div className="relative w-[100px] h-[100px] sm:hidden ml-3">
                  {mobileItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col items-center justify-center text-center w-16 h-16 rounded-full bg-[#022244] shadow-lg border border-white/10 group"
                      style={{
                        left: `${item.position.left}px`,
                        top: `${item.position.top}px`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: item.delay }}
                    >
                      <div className="mb-0.5 text-coral">{item.icon}</div>
                      <p
                        className="text-[0.55rem] font-medium leading-tight text-mint"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
