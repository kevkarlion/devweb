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
      icon: <Briefcase className="w-7 h-7 text-coral" />,
      title: "Comercio Digital",
      position: { left: -50, top: -20 },
      delay: 0.6,
    },
    {
      icon: <Users className="w-7 h-7 text-coral" />,
      title: "Consigue Clientes",
      position: { left: 35, top: 150 },
      delay: 0.8,
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-coral" />,
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
      className={`${cormorant.variable} ${ebGaramond.variable} ${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} ${judson.variable}`}
    >
      <section
        className="relative min-h-screen flex items-center justify-center px-6 w-full pt-24 pb-20 overflow-hidden bg-gradient-primary"
        id="home"
        style={{ overflowY: 'hidden' }} // ← Agregar esto
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
              className="flex flex-col justify-center items-center space-y-6 lg:space-y-8 text-center w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-[clamp(3rem,10vw,5.24rem)] leading-[0.95] tracking-tighter text-[#121212] w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <span
                  className="font-regular tracking-[-0.02em]"
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
                  className="font-normal tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-judson)", display: "block" }}
                >
                  Digitales
                </span>
              </motion.h1>

              <motion.p
                className="text-[clamp(1rem,3vw,1rem)] md:px-8 lg:px-16 xl:px-32 text-center text-black max-w-xl pt-4 font-medium leading-relaxed mx-auto"
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300 shadow-md font-medium text-base group"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Solicitá tu consultoría
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
                <div className="mb-4 mt-8">
                  <Image
                    src="/logo-black-svg.svg"
                    alt="Logo de Devweb Patagonia, diseño y desarrollo web profesional en Alto Valle"
                    width={140}
                    height={140}
                    className="object-contain w-24 md:w-32 lg:w-36 xl:w-40 h-auto drop-shadow-xl"
                    priority
                  />
                  <div className="flex flex-col items-center text-black" >
                    <p className="inter text-2xl font-semibold">devweb</p>
                    <p className="uppercase  font-semibold text-xl"> <span className="mb-4">patagonia</span></p>
                  </div>
                </div>

                {/* Ítems semicirculares desktop */}
                <div className="relative w-[400px] h-[350px] hidden sm:block ml-6 xl:ml-8">
                  {desktopItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col items-center justify-center text-center w-28 h-28 rounded-full bg-[#022244] shadow-2xl hover:scale-115 transition-all duration-300 hover:shadow-2xl border border-white/10 group"
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
                      <div  style={{ color: 'var(--color-coral)' }} className="mb-2 text-coral transform group-hover:scale-110 transition-transform duration-300 " >
                        {item.icon}
                      </div>
                      <p
                        className="text-[0.8rem] font-medium leading-tight px-3 text-mint"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.title}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Ítems mobile */}
                <div className="relative w-[120px] h-[120px] sm:hidden ml-3">
                  {mobileItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col items-center justify-center text-center w-20 h-20 rounded-full bg-[#022244] shadow-lg hover:scale-110 transition-transform duration-300 border border-white/10 group"
                      style={{
                        left: `${item.position.left}px`,
                        top: `${item.position.top}px`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: item.delay }}
                    >
                      <div className="mb-1 text-mint">{item.icon}</div>
                      <p
                        className="text-[0.65rem] font-medium leading-tight px-2 text-mint"
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
        </div>
      </section>
    </div>
  );
}
