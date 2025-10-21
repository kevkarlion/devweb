"use client";

import { motion, useInView, Variants, Transition } from "framer-motion";
import { ArrowRight, Briefcase, Users, Lightbulb } from "lucide-react";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const titleText =
    "Devweb Patagonia – Diseño y desarrollo web profesional en el Alto Valle"; // nota el nbsp entre Alto y Valle

  // Transitions
  const easeTransition: Transition = {
    duration: 1.2,
    ease: "easeInOut",
    delay: 0.6,
  };
  const circleTransition: Transition = {
    duration: 1.5,
    ease: "easeOut",
    delay: 1,
  };

  // Variants
  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: easeTransition },
  };

  const paragraphContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const circleVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: circleTransition },
  };

  return (
    <section
      ref={ref}
      id="nosotros"
      className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Líneas decorativas */}
      <motion.div
        className="absolute top-1/4 -left-10 w-32 h-0.5 bg-[#E9E9E9]/10"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />
      <motion.div
        className="absolute bottom-1/4 -right-10 w-32 h-0.5 bg-[#E9E9E9]/10"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Título */}
        <motion.h2
          className="font-[family-name:var(--font-inter-semibold)] text-[clamp(1.8rem,5vw,3.5rem)] text-[#E9E9E9] mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Diseño y Desarrollo web profesional
          <br />
          en el Alto Valle
        </motion.h2>

        {/* Párrafos */}
        <motion.div
          className="space-y-8"
          variants={paragraphContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/80 leading-relaxed max-w-3xl"
            variants={paragraphVariants}
          >
            Somos un estudio digital ubicado en el Alto Valle Patagónico,
            especializado en diseño y desarrollo web profesional. Creamos
            experiencias únicas que combinan estética, estrategia y alto
            rendimiento.
          </motion.p>

          <motion.p
            className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/80 leading-relaxed max-w-3xl"
            variants={paragraphVariants}
          >
            Nuestra misión es ayudarte a potenciar tu marca online con sitios
            web que no solo se vean bien, sino que funcionen, comuniquen y
            generen resultados reales para tu negocio.
          </motion.p>

          <motion.p
            style={{ filter: "blur(8px)" }}
            animate={{ filter: isInView ? "blur(0px)" : "blur(8px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/80 leading-relaxed max-w-3xl"
          >
            Trabajamos junto a marcas y emprendedores que piensan en grande,
            acompañándolos desde la idea hasta el lanzamiento. Cada proyecto
            fusiona diseño, tecnología y estrategia digital para lograr una
            presencia online sólida, memorable y eficaz.
          </motion.p>

          {/* Botón CTA */}
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 border-2 border-black transition-all duration-300 shadow-md font-medium text-base group"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Solicitá tu consultoría
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Elemento decorativo flotante */}
        <motion.div
          className="absolute -right-20 top-1/2 w-40 h-40 rounded-full border border-[#E9E9E9]/5"
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{
            scale: 1.1,
            rotate: 45,
            borderColor: "rgba(233, 233, 233, 0.2)",
            transition: { duration: 0.5 },
          }}
        />
      </div>
    </section>
  );
}
