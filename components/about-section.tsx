"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Animación de texto letra por letra para el título
  const titleText = "Tu presencia online"
  
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  }

  // Animación corregida para líneas de fondo
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut" as const,
        delay: 0.6
      }
    }
  }

  // Variantes corregidas para los párrafos
  const paragraphContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }

  const secondParagraphVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      filter: "blur(8px)" as const
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)" as const,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
        delay: 0.4
      }
    }
  }

  const circleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0, 
      rotate: -180 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 1
      }
    }
  }

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden" id="nosotros">
      {/* Elementos decorativos de fondo */}
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
        {/* Título con animación letra por letra */}
        <motion.h2
          className="font-[family-name:var(--font-inter-semibold)] text-[clamp(2rem,5vw,4rem)] text-[#E9E9E9] mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {titleText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
              whileHover={{
                y: -5,
                scale: 1.1,
                color: "#ffffff",
                transition: { duration: 0.2 }
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={paragraphContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Primer párrafo */}
          <motion.p
            className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/80 leading-relaxed max-w-3xl"
            variants={paragraphVariants}
          >
            Somos un estudio digital especializado en diseño y desarrollo web profesional, enfocado en crear experiencias únicas que combinan estética, estrategia y alto rendimiento.
          </motion.p>

          {/* Segundo párrafo */}
           <motion.p
            className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/80 leading-relaxed max-w-3xl"
            variants={paragraphVariants}
          >
            Nuestra misión es ayudarte a potenciar tu marca online con sitios web que no solo se vean bien, sino que funcionen, comuniquen y generen resultados reales.
          </motion.p>


          {/* Tercer párrafo */}
          <motion.p
            className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/80 leading-relaxed max-w-3xl"
            variants={secondParagraphVariants}
          >
            Trabajamos junto a marcas y emprendedores que piensan en grande, acompañándolos desde la idea hasta el lanzamiento. Cada proyecto que realizamos fusiona diseño, tecnología y estrategia digital, para lograr una presencia online sólida, memorable y eficaz.
          </motion.p>
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
            transition: { duration: 0.5 }
          }}
        />
      </div>
    </section>
  )
}