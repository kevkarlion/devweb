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
      icon: <Briefcase className="w-7 h-7 text-white" />,
      title: "Comercio Digital",
      position: { left: -50, top: -20 },
      delay: 0.6,
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: "Consigue Clientes",
      position: { left: 35, top: 150 },
      delay: 0.8,
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-white" />,
      title: "Muestra tu Negocio",
      position: { left: -50, top: 310 },
      delay: 1.0,
    },
  ];

  const mobileItems = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Comercio Digital",
      position: { left: 8, top: -40 },
      delay: 0.6,
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Consigue Clientes",
      position: { left: 55, top: 45 },
      delay: 0.8,
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Muestra tu Negocio",
      position: { left: 25, top: 135 },
      delay: 1.0,
    },
  ];

  return (
    <div
      className={`${cormorant.variable} ${ebGaramond.variable} ${oswald.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <section
        className="relative min-h-screen flex items-center justify-center px-6 w-full pt-24 pb-20 overflow-hidden"
        style={{
          backgroundColor: "#e9e9e9",
          backgroundImage: "url(/bck-figure.png)",
          backgroundPosition: "30% 50%",
          backgroundSize: "cover",
        }}
        id="home"
      >
        {/* Fondo animado */}
        <motion.div
          className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_50%,rgba(18,18,18,0.2)_0%,transparent_60%)]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            backgroundSize: ["120% 120%", "150% 150%", "120% 120%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center min-h-[75vh] 2xl:min-h-[80vh]">
            {/* Texto principal */}
            <motion.div
              className="flex flex-col justify-center space-y-6 lg:space-y-8 text-left lg:ml-8 xl:ml-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-[clamp(3rem,10vw,6rem)] leading-[0.95] tracking-tighter text-[#121212]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <span
                  className="uppercase font-light tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-oswald)", display: "block" }}
                >
                  Creando
                </span>
                <span
                  className="italic font-normal tracking-[-0.01em]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    display: "block",
                  }}
                >
                  Experiencias
                </span>
                <span
                  className="uppercase font-normal tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-judson)", display: "block" }}
                >
                  Digitales
                </span>
              </motion.h1>

              <motion.p
                className="text-[clamp(1rem,3vw,1.3rem)] text-[#121212]/75 max-w-2xl pt-4 font-medium leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Diseño y desarrollo web que potencia tu marca y conecta con tu
                audiencia
              </motion.p>

              {/* Botón CTA WhatsApp */}
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
                  className="inline-flex items-center gap-3 px-10 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white rounded-full hover:scale-105 transition-all duration-300 shadow-xl font-semibold text-lg lg:text-xl group"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Inicia tu proyecto
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-2" />
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
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/logo-black-svg.svg"
                    alt="Logo de Devweb Patagonia, diseño y desarrollo web profesional en Alto Valle"
                    width={400}
                    height={400}
                    className="object-contain w-48 md:w-72 lg:w-80 xl:w-96 h-auto drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Ítems semicirculares desktop */}
                <div className="relative w-[480px] h-[420px] hidden sm:block ml-8 xl:ml-12">
                  {desktopItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col items-center justify-center text-center w-36 h-36 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white shadow-2xl hover:scale-115 transition-all duration-300 hover:shadow-2xl border border-white/10"
                      style={{
                        left: `${item.position.left}px`,
                        top: `${item.position.top}px`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: item.delay,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.15,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <p
                        className="text-[0.85rem] font-medium leading-tight px-3"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.title}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Ítems mobile */}
                {/* Ítems mobile */}
                <div className="relative w-[140px] h-[140px] sm:hidden ml-4">
                  {mobileItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col items-center justify-center text-center w-24 h-24 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white shadow-lg hover:scale-110 transition-transform duration-300 border border-white/10"
                      style={{
                        left: `${item.position.left}px`,
                        top: `${item.position.top}px`,
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
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator desktop */}
          <motion.div
            className="hidden xl:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex flex-col items-center text-[#121212]/60">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm font-light mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Scroll para descubrir
              </motion.div>
              <div className="w-px h-12 bg-[#121212]/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
