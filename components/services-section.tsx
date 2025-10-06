"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, Code2, LineChart, Sparkles } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Diseño de Marca & Experiencia",
    description:
      "Creamos identidades visuales únicas y experiencias digitales que conectan con tus clientes y fortalecen tu marca en línea.",
  },
  {
    icon: Code2,
    title: "Desarrollo Web Profesional",
    description:
      "Desarrollamos sitios web rápidos, escalables y optimizados, utilizando las mejores tecnologías para ofrecer soluciones que realmente funcionan.",
  },
  {
    icon: LineChart,
    title: "Estrategia Digital",
    description:
      "Diseñamos estrategias digitales enfocadas en tus objetivos de negocio, ayudándote a atraer clientes, aumentar conversiones y crecer online.",
  },
  {
    icon: Sparkles,
    title: "Dirección Creativa",
    description:
      "Guiamos la visión creativa de tu proyecto desde la idea hasta la ejecución, asegurando que cada detalle refuerce la identidad de tu marca y genere impacto.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0A0A0A]" id="servicios">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-[family-name:var(--font-inter-semibold)] text-[clamp(2rem,5vw,4rem)] text-[#E9E9E9] mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-10 bg-[#121212] rounded-2xl border border-[#E9E9E9]/10 hover:border-[#E9E9E9]/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-[#E9E9E9] mb-6 group-hover:scale-110 transition-transform duration-300" />

              <h3 className="font-[family-name:var(--font-inter-semibold)] text-[2rem] text-[#E9E9E9] mb-4">
                {service.title}
              </h3>

              <p className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
