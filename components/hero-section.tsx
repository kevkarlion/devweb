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
  const desktopItems = [
    {
      icon: <Briefcase className="w-5 h-5 text-white" />,
      title: "Comercio Digital",
      position: { left: -33, top: -14 },
      delay: 0.6,
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "Consigue Clientes",
      position: { left: 22, top: 100 },
      delay: 0.8,
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-white" />,
      title: "Muestra tu Negocio",
      position: { left: -33, top: 207 },
      delay: 1.0,
    },
  ];

  const mobileItems = [
    {
      icon: <Briefcase className="w-5 h-5 text-white" />,
      title: "Comercio Digital",
      position: { left: 5, top: -34 },
      delay: 0.6,
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "Consigue Clientes",
      position: { left: 41, top: 33 },
      delay: 0.8,
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-white" />,
      title: "Muestra tu Negocio",
      position: { left: 18, top: 103 },
      delay: 1.0,
    },
  ];

  return (
    <div
      className={`${cormorant.variable} ${ebGaramond.variable} ${oswald.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <section
        className="relative min-h-screen flex items-center justify-center px-6 w-full pt-20 pb-16 overflow-hidden"
        style={{
          backgroundColor: "#e9e9e9",
          backgroundImage: "url(/bck-figure.png)",
          backgroundPosition: "30% 50%",
        }}
        id="home"
      >
        {/* Fondo animado */}
        <motion.div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,rgba(18,18,18,0.15)_0%,transparent_50%)]"
          animate={{ backgroundPosition: ["0% 0%", "80% 80%", "0% 0%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-[70vh]">
            {/* Texto principal */}
            <motion.div
              className="flex flex-col justify-center space-y-4 text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.05] text-[#121212]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span
                  className="uppercase tracking-tight"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Creando
                </span>
                <br />
                <span
                  className="italic"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Experiencias
                </span>
                <br />
                <span
                  className="uppercase font-regular"
                  style={{ fontFamily: "var(--font-judson)" }}
                >
                  Digitales
                </span>
              </motion.div>

              <motion.p
                className="text-[clamp(1.1rem,2.5vw,1.4rem)] text-[#121212]/70 max-w-lg pt-2 font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Diseño y desarrollo web que potencia tu marca
              </motion.p>

              {/* Botón con ícono */}
              <motion.div
                className="pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="https://wa.me/5492984252859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#121212] text-[#E9E9E9] rounded-full hover:bg-[#121212]/90 transition-all duration-300 hover:scale-105 shadow-lg font-semibold group"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Inicia tu proyecto
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            {/* Logo + ítems */}
            <motion.div
              className="relative flex justify-center items-center lg:justify-start"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative flex items-center">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/logo-black-svg.svg"
                    alt="Devweb Logo"
                    width={220}
                    height={220}
                    className="object-contain w-40 md:w-56 lg:w-60 h-auto drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Ítems semicirculares (desktop) */}
                <div className="relative w-[320px] h-[280px] hidden sm:block ml-4">
                  {desktopItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col items-center justify-center text-center w-27 h-27 rounded-full bg-[#121212] text-white shadow-lg hover:scale-110 transition-transform duration-300"
                      style={{ 
                        left: `${item.position.left}px`, 
                        top: `${item.position.top}px` 
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: item.delay }}
                    >
                      <div className="mb-1">{item.icon}</div>
                      <p
                        className="text-[0.7rem] font-medium leading-tight px-2"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.title}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Ítems versión mobile - con posiciones exactas y burbujas más grandes */}
                <div className="relative w-[120px] h-[120px] sm:hidden ml-3">
                  {mobileItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col items-center justify-center text-center w-20 h-20 rounded-full bg-[#121212] text-white shadow-md hover:scale-105 transition-transform duration-300"
                      style={{ 
                        left: `${item.position.left}px`, 
                        top: `${item.position.top}px` 
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: item.delay }}
                    >
                      <div className="mb-1">{item.icon}</div>
                      <p
                        className="text-[0.65rem] font-medium leading-tight px-2"
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