"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-32 pb-16"
      style={{ backgroundColor: 'rgb(233, 233, 233)' }}
      id="home"
    >
      {/* Animated gradient glow background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(18,18,18,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(18,18,18,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(18,18,18,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(18,18,18,0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Contenedor del contenido */}
      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
        
        {/* Logo encima del H1 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/logo-negro.png" // reemplazar con tu logo
            alt="Devweb Logo"
            width={120} 
            height={120}
            className="object-contain w-24 md:w-28 h-auto mx-auto"
            priority
          />
        </motion.div>

        <motion.h1
          className="font-[family-name:var(--font-inter-bold)] text-[clamp(3rem,12vw,8rem)] leading-[0.9] text-[#121212] mb-6 text-balance max-w-full overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Creando Experiencias
          <br />
          Digitales
        </motion.h1>

        <motion.p
          className="font-[family-name:var(--font-inter-semibold)] text-[clamp(1.25rem,3vw,2rem)] text-[#121212]/70 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Diseño y desarrollo web que potencia tu marca
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://wa.me/5492984252859"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-[#121212] text-[#E9E9E9] font-[family-name:var(--font-inter-semibold)] text-base rounded-full hover:bg-[#121212]/90 transition-all duration-300 hover:scale-105"
          >
            Inicia tu proyecto
          </a>
        </motion.div>
      </div>
    </section>
  )
}
