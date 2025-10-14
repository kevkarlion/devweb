"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Cormorant_Garamond, Inter, JetBrains_Mono, Oswald, EB_Garamond, Judson } from 'next/font/google'

// Configurar las fuentes con className en lugar de variable
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['italic', 'normal'],
  variable: '--font-cormorant'
})

const judson = Judson({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  variable: '--font-judson'
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['italic', 'normal'],
  variable: '--font-ebgaramond'
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export function HeroSection() {
  return (
    <div className={`w-full ${cormorant.variable} ${ebGaramond.variable} ${oswald.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <section
        className="relative min-h-screen flex items-center justify-center px-6 w-full pt-20 pb-16 overflow-hidden"
        style={{ backgroundColor: 'rgb(233, 233, 233)', backgroundImage: 'url(/bck-figure.png)', backgroundPosition: '30% 50%',  }}
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

        {/* Contenedor principal con layout dividido */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center min-h-[70vh]">
            
            {/* Lado izquierdo - Texto */}
            <motion.div
              className="flex flex-col justify-center space-y-4 lg:pr-6 text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.05] text-[#121212] text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <span 
                  className="uppercase font-normal tracking-normal text-[#121212]/90"
                  style={{ fontFamily: 'var(--font-oswald)' }}
                >
                  Creando
                </span>
                <br />
                <span 
                  className="uppercase font-medium italic text-[#121212]/90"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  Experiencias
                </span>
                <br />
                <span 
                  className="uppercase font-regular  tracking-tight	 text-[#121212]/90"
                  style={{ fontFamily: 'var(--font-judson)' }}
                >
                  Digitales
                </span>
              </motion.div>

              <motion.p
                className="text-[clamp(1.1rem,2.5vw,1.4rem)] text-[#121212]/70 max-w-lg pt-2 font-semibold"
                style={{ fontFamily: 'var(--font-inter)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Diseño y desarrollo web que potencia tu marca
              </motion.p>

              <motion.div
                className="pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="https://wa.me/5492984252859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#121212] text-[#E9E9E9] text-sm md:text-base rounded-full hover:bg-[#121212]/90 transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Inicia tu proyecto
                </a>
              </motion.div>
            </motion.div>

            {/* Lado derecho - Logo con diseño artístico */}
            <motion.div
              className="relative flex items-center justify-center lg:justify-start lg:pl-6 mt-4 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              
              {/* Línea difuminada de separación */}
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-[#121212]/20 to-transparent hidden lg:block" />
              
              {/* Contenedor del logo con efectos épicos */}
              <div className="relative">
                {/* Sombra épica animada */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  animate={{
                    boxShadow: [
                      "0 0 60px 30px rgba(18,18,18,0.3)",
                      "0 0 80px 40px rgba(18,18,18,0.4)",
                      "0 0 60px 30px rgba(18,18,18,0.3)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Efecto de partículas sutiles */}
                <motion.div
                  className="absolute -inset-4 opacity-20"
                  animate={{
                    background: [
                      "radial-gradient(circle at 30% 30%, rgba(18,18,18,0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 70% 70%, rgba(18,18,18,0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 30% 30%, rgba(18,18,18,0.3) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Logo principal */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/logo-black-svg.svg"
                    alt="Devweb Logo"
                    width={240}
                    height={240}
                    className="object-contain w-40 md:w-56 lg:w-64 h-auto drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Efecto de brillo sutil */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-sm"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Corte transversal decorativo */}
              <div className="absolute -right-2 top-0 bottom-0 w-6 bg-gradient-to-l from-[#121212]/5 to-transparent transform skew-x-12 hidden lg:block" />
            </motion.div>
          </div>
        </div>

        {/* Elemento decorativo de esquina */}
        <motion.div
          className="absolute right-0 top-1/4 w-32 h-32 bg-gradient-to-br from-[#121212]/10 to-transparent transform rotate-45 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        />
      </section>
    </div>
  )
}