"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-[family-name:var(--font-inter-semibold)] text-[clamp(2rem,5vw,4rem)] text-[#E9E9E9] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Studio
        </motion.h2>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/80 leading-relaxed max-w-3xl">
            We are a boutique digital studio specializing in creating exceptional web experiences that blend aesthetic
            excellence with technical precision. Our approach combines strategic thinking with meticulous execution to
            deliver solutions that don't just look beautiful—they perform brilliantly.
          </p>

          <p className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/80 leading-relaxed max-w-3xl">
            From concept to launch, we partner with forward-thinking brands to craft digital products that captivate
            audiences and drive meaningful results. Our expertise spans design, development, and digital strategy,
            ensuring every project is a masterpiece of form and function.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
