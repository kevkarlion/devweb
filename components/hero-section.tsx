// components/HeroSection.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export function HeroSection() {
  // Checklist con enfoque en Gestión Integral y Presencia Permanente
  const checklistItems = [
    "Gestión Digital Activa",
    "Presencia en Google 24/7",
    "Soporte y Evolución",
    "Estrategia de Conversión",
    "Dashboard de Métricas",
    "Optimización Continua",
  ];

  return (
    <div className={`${jetbrainsMono.variable}`}>
      <section
        id="home"
        role="banner"
        aria-label="Gestión de presencia digital y desarrollo web en Patagonia"
        className="relative flex items-center justify-center w-full min-h-screen overflow-hidden pt-14  bg-black lg:pt-24"
      >
        <div className="relative z-10 max-w-8xl mx-auto w-full bg-black">
          
          {/* Layout Mobile */}
          <div className="lg:hidden flex flex-col items-center text-center">
            <motion.h1
              className="pt-16 relative text-[2.5rem] sm:text-5xl leading-[1.05] tracking-wide mb-6 font-bold text-mobile-gradient bg-clip-text text-transparent z-20 px-4 pb-1"
                style={{ fontFamily: "var(--font-titles)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Gestión y Presencia Digital
            </motion.h1>

            <div className="relative w-full mb-4">
              <motion.div className="relative w-full h-80 mx-auto -mt-16 flex justify-center items-start overflow-visible">
                <Image
                  src="/new-hero.webp"
                  alt="Gestión digital profesional en Patagonia"
                  width={800}
                  height={600}
                  className="object-contain w-full h-full scale-[1.35] -translate-y-4"
                  priority
                />
                <motion.div className="absolute inset-0 flex items-center justify-center z-10 px-4">
                  <div className="bg-black/60 rounded-xl px-4 py-3">
                    <p className="text-lg font-medium text-neutral-300 leading-tight">
                      Acompañamos el crecimiento de tu empresa con soluciones digitales permanentes.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div className="w-[97%] mb-6">
              <a
                href="https://wa.me/5492984252859"
                className="inline-flex items-center justify-center w-[95%] gap-3 px-8 py-4 border border-white rounded-sm font-semibold text-white bg-mobile-gradient"
              >
                Impulsar mi Empresa
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Checklist Mobile */}
            <div className="w-[90%] grid grid-cols-2 gap-3 p-4 border border-white bg-mobile-gradient rounded-sm">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-300 font-bold text-left uppercase" style={{ fontFamily: "var(--font-mono)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Layout Desktop */}
          <div className="hidden lg:block relative  min-h-[90vh] overflow-hidden">
            {/* Full background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/new-hero.webp"
                alt="Presencia digital estratégica"
                fill
                className="object-cover object-right scale-[1]"
                priority
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
            </div>

            {/* Content on top of background */}
            <div className="relative z-10 grid grid-cols-[55%_45%] items-start min-h-[75vh] px-8 py-16">
              <div className="flex flex-col pl-8 pt-4">
                <motion.h1
                  className="text-5xl xl:text-7xl leading-[1.05] tracking-wide mb-6 font-bold text-primary-gradient bg-clip-text text-transparent pb-1"
                style={{ fontFamily: "var(--font-titles)" }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  Gestión y <br /> Presencia Digital
                </motion.h1>

                <motion.div className="space-y-8">
                  <p className="text-lg text-neutral-300 max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    <strong>Gestionamos tu ecosistema digital</strong> de punta a punta. Diseño, SEO y tecnología escalable con soporte continuo para empresas que buscan liderar el mercado en la <strong>Patagonia</strong>.
                  </p>

                  <div className="w-[60%]">
                    <a
                      href="https://wa.me/5492984252859"
                      className="inline-flex items-center justify-center w-full gap-3 px-8 py-4 border-2 border-white rounded-sm hover:scale-105 transition-all font-semibold text-white bg-primary-gradient"
                    >
                      Solicitar Consultoría Integral
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