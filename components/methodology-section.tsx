"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico y Arquitectura",
    description:
      "Relevamos tus objetivos comerciales o cuellos de botella operativos para definir la arquitectura adecuada antes de programar.",
  },
  {
    number: "02",
    title: "Diseño UX/UI e Interfaces",
    description:
      "Diseñamos interfaces de ultra-alta velocidad, intuitivas y optimizadas para celulares, tablets y escritorios.",
  },
  {
    number: "03",
    title: "Desarrollo e Integración",
    description:
      "Programamos con Next.js, TypeScript e integramos bases de datos, pasarelas, APIs de WhatsApp y modelos de IA.",
  },
  {
    number: "04",
    title: "Despliegue y Soporte Regional",
    description:
      "Publicamos tu plataforma en infraestructura de alta disponibilidad y brindamos acompañamiento técnico directo en la Patagonia.",
  },
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB Atlas",
  "WhatsApp Cloud API",
  "OpenAI API",
];

export function MethodologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="metodologia"
      className="w-full bg-neutral-950 py-24 md:py-32 px-6 relative overflow-hidden border-t border-[#434343]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold leading-[0.95] bg-clip-text text-transparent text-mobile-gradient lg:text-primary-gradient"
          style={{ fontFamily: "var(--font-titles)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Metodología transparente y arquitectura moderna
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-base font-light leading-relaxed text-neutral-300 md:text-lg"
          style={{ fontFamily: "var(--font-body)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Sin sorpresas ni demoras: un proceso de 4 pasos para diseñar tu
          presencia digital o construir tu software a medida.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 flex flex-col gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
            >
              <h3
                className="text-lg font-bold text-white leading-snug"
                style={{ fontFamily: "var(--font-titles)" }}
              >
                <span style={{ color: "#E6B255" }}>{step.number}.</span>{" "}
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-neutral-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3
            className="text-center text-2xl md:text-3xl font-bold text-white mb-8"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            Infraestructura sobre la que construimos
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-md px-4 py-2 text-sm text-neutral-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
