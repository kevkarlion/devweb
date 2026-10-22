"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="w-full bg-neutral-950 py-24 md:py-32 px-6 relative overflow-hidden border-t border-[#434343]"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* H2 (la home ya tiene su único H1 en el Hero) */}
        <motion.h2
          className="text-5xl lg:text-6xl leading-[0.9] tracking-normal bg-clip-text text-transparent text-mobile-gradient lg:text-primary-gradient mb-6 font-bold text-center"
          style={{ fontFamily: "var(--font-titles)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Mi
        </motion.h2>

        {/* Subtítulo */}
        <motion.h3
          className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-6 text-center"
          style={{ fontFamily: "var(--font-titles)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Software con criterio de negocio
        </motion.h3>

        {/* Separador */}
        <div className="border border-white/60 w-[32%] md:w-[18%] mb-12"></div>

        {/* Contenido: foto + texto */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Foto + caption */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-xs lg:max-w-none h-96 lg:h-[520px] rounded-2xl overflow-hidden border border-[#434343]">
              <Image
                src="/Retrato profesional de hombre barbudo.webp"
                alt="Kevin Riquelme - Desarrollador de software"
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover"
                priority
              />
            </div>
            <p
              className="mt-4 text-center text-base lg:text-lg text-neutral-300"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              <span className="font-bold text-white">Kevin Riquelme</span>
              <span className="mx-2 text-neutral-500">|</span>
              <span className="font-light">Desarrollador Full Stack</span>
            </p>
          </motion.div>

          {/* Texto */}
          <motion.div
            className="lg:col-span-3 text-neutral-300 text-base lg:text-lg leading-relaxed text-center lg:text-left space-y-6"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p>
              Soy desarrollador con años de experiencia creando productos digitales de calidad. Entiendo la técnica, pero sobre todo entiendo cómo operan las empresas.
            </p>
            <p>
              Antes de programar, me involucro en analizar en detalle tu negocio para ver más allá de lo evidente y encontrar dónde está el verdadero valor. Mi objetivo es sacarle el máximo provecho al software para que cada línea de código, automatización o plataforma tenga un sentido operativo claro y sea 100% rentable para tu empresa. Trato directo, sin intermediarios..
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
