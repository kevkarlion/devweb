// components/HeroSection.jsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export function HeroSection() {
  // Checklist con enfoque en Software a Medida e IA
  const checklistItems = [
    "Software a Medida",
    "CRM a Medida",
    "Chatbots con IA",
    "Integración de IA",
    "Automatización de Procesos",
    "Tiendas Online",
  ];

  return (
    <div className={`${jetbrainsMono.variable}`}>
      <section
        id="home"
        role="banner"
        aria-label="Software a medida, CRM e inteligencia artificial para empresas en la Patagonia"
        className="relative flex items-center justify-center w-full min-h-screen overflow-hidden pt-14 bg-black lg:pt-24"
      >
        {/* Full-bleed background video - mobile crop */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center opacity-80 lg:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/85 lg:hidden" />
          <video
            className="absolute inset-0 h-full w-full object-cover object-right opacity-80 hidden lg:block"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 hidden lg:block" />
        </div>

        <div className="relative z-10 max-w-8xl mx-auto w-full">
          
          {/* Layout Mobile */}
          <div className="lg:hidden relative flex flex-col items-center text-center overflow-hidden min-h-screen">
            <motion.h1
              className="pt-16 relative text-[2.5rem] sm:text-5xl leading-[1.05] tracking-wide mb-6 font-bold text-mobile-gradient bg-clip-text text-transparent z-20 px-4 pb-1"
                style={{ fontFamily: "var(--font-titles)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Software a medida. <br /> IA que trabaja 24/7.
            </motion.h1>

            <motion.div
              className="relative z-10 w-full px-4 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-black/60 rounded-xl px-4 py-3">
                <p className="text-lg font-medium text-neutral-300 leading-tight">
                  Software a medida, CRMs y chatbots con IA que trabajan 24/7.
                </p>
              </div>
            </motion.div>

            <motion.div className="relative z-10 w-[97%] mb-6">
              <a
                href="https://wa.me/5492984252859"
                className="inline-flex items-center justify-center w-[95%] gap-3 px-8 py-4 border border-white rounded-sm font-semibold text-white bg-mobile-gradient"
              >
                Solicitar una consultoría
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Checklist Mobile */}
            <div className="relative z-10 w-[90%] grid grid-cols-2 gap-3 p-4 border border-white bg-mobile-gradient rounded-sm">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-300 font-bold text-left uppercase" style={{ fontFamily: "var(--font-mono)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Layout Desktop */}
          <div className="hidden lg:block relative min-h-[90vh] overflow-hidden">
            {/* Content on top of background */}
            <div className="relative z-10 grid grid-cols-[55%_45%] items-start min-h-[75vh] px-8 py-16">
              <div className="flex flex-col pl-8 pt-4">
                <motion.h1
                  className="text-[clamp(2.25rem,3.6vw,4rem)] leading-[1.05] tracking-wide mb-6 font-bold text-primary-gradient bg-clip-text text-transparent pb-1"
                style={{ fontFamily: "var(--font-titles)" }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  Software a medida. <br /> IA que trabaja 24/7.
                </motion.h1>

                <motion.div className="space-y-8">
                  <p className="text-lg text-neutral-300 max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <strong>Desarrollamos sistemas a la medida de tu operación</strong>: CRMs, automatización y chatbots con IA que responden a tus clientes de día y de noche. Tu proceso no cambia; el software se adapta a él. Software a medida para empresas de la <strong>Patagonia</strong> que quieren crecer sin duplicar esfuerzo.
                  </p>

                  <div className="w-[60%]">
                    <a
                      href="https://wa.me/5492984252859"
                      className="inline-flex items-center justify-center w-full gap-3 px-8 py-4 border-2 border-white rounded-sm hover:scale-105 transition-all font-semibold text-white bg-primary-gradient"
                    >
                      Solicitar una consultoría
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Checklist Desktop */}
                  <div className="w-[95%] p-6 border border-white bg-primary-gradient rounded-sm shadow-2xl">
                    <div className="grid grid-cols-3 gap-4">
                      {checklistItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-white shrink-0" />
                          <span className="text-sm text-neutral-300 font-bold uppercase" style={{ fontFamily: "var(--font-mono)" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}