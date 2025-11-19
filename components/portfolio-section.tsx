"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, LayoutDashboard, PenTool, Code2, Activity, Rocket } from "lucide-react"

const processSteps = [
  { title: "Reunión Inicial", description: "Entendemos tu marca, objetivos y necesidades. Escuchamos tu visión y definimos la dirección estratégica.", icon: Users },
  { title: "Planificación & Estrategia", description: "Creamos un plan de acción detallado, definiendo funcionalidades y estructura, alineando todo a tus objetivos de negocio.", icon: Activity },
  { title: "Diseño UI/UX", description: "Diseñamos interfaces y experiencias atractivas, cuidando cada detalle para que tu proyecto conecte con tus clientes.", icon: PenTool },
  { title: "Desarrollo Web", description: "Convertimos los diseños en un sitio web funcional, rápido y optimizado, usando tecnologías modernas y escalables.", icon: Code2 },
  { title: "Pruebas & Optimización", description: "Revisamos cada detalle: velocidad, usabilidad y compatibilidad, asegurando una experiencia digital impecable.", icon: LayoutDashboard },
  { title: "Entrega & Lanzamiento", description: "Lanzamos tu proyecto online, garantizando que todo funcione perfectamente y proporcionándote soporte para crecer online.", icon: Rocket }, // ← Coma agregada aquí
]

export function ProcessTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0A0A0A] relative overflow-x-hidden">
      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          className="font-(family-name:--font-inter-semibold) text-[clamp(2rem,5vw,4rem)] text-[#E9E9E9] mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Nuestro Proceso de Trabajo
        </motion.h2>

        {/* Línea vertical del timeline - SOLUCIÓN APLICADA */}
        <motion.div
          className="absolute left-0 md:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E9E9E9]/30 to-transparent hidden md:block"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <div className="space-y-16">
          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.title}
                className={`flex flex-col md:flex-row items-start ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2, 
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Icon circle */}
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-[#E9E9E9] flex items-center justify-center mb-4 md:mb-0 z-10 md:mr-6 md:ml-0">
                  <IconComponent className="w-6 h-6 text-[#0A0A0A]" />
                </div>

                {/* Content */}
                <motion.div
                  className="bg-[#121212] p-6 rounded-2xl border border-[#E9E9E9]/10 flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <h3 className="font-[family-name:var(--font-inter-semibold)] text-[1.8rem] text-[#E9E9E9] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}