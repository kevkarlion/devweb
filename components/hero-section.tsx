"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated gradient glow background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(233, 233, 233, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(233, 233, 233, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(233, 233, 233, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(233, 233, 233, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h1
          className="font-[family-name:var(--font-inter-semibold)] text-[clamp(3rem,12vw,8rem)] leading-[0.9] text-[#E9E9E9] mb-8 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Crafting Digital
          <br />
          Experiences
        </motion.h1>

        <motion.p
          className="font-[family-name:var(--font-inter-semibold)] text-[clamp(1.25rem,3vw,2rem)] text-[#E9E9E9]/70 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Where creativity meets precision in web design and development
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-block px-12 py-4 bg-[#E9E9E9] text-[#121212] font-[family-name:var(--font-inter-semibold)] text-base rounded-full hover:bg-[#E9E9E9]/90 transition-all duration-300 hover:scale-105"
          >
            Start a Project
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-[#E9E9E9]/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#E9E9E9]/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
