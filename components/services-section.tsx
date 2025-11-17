"use client"

import { Alfa_Slab_One, Inter } from 'next/font/google'
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

const afaScrubOne = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-afa-scrub-one',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const services = [
  {
    number: "01",
    title: "DESARROLLO WEB MODERNO",
    description: "Sitios rápidos, escalables y diseñados con Next.js, TS y Tailwind."
  },
  {
    number: "02",
    title: "DISEÑO UI/UX PERSONALIZADO",
    description: "Identidad visual única y experiencia de usuario pensada para convertir."
  },
  {
    number: "03",
    title: "SEO AVANZADO",
    description: "Optimización técnica y de contenido para aparecer en Google y atraer clientes."
  },
  {
    number: "04",
    title: "WEBS ORIENTADAS AL MARKETING",
    description: "Landing pages, funnels y páginas de venta listas para convertir."
  }
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className={`${afaScrubOne.variable} ${inter.variable} w-full bg-black relative`} id="servicios">
      {/* Cosmic Noise Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)"
        }}
      />
      
      {/* Contenido */}
      <div className="relative z-10 py-24 md:py-32  px-6">
        <div className="max-w-4xl mx-auto">
          {/* Título principal */}
          <motion.h1
            className="mt-4 relative text-[2.7rem] sm:text-5xl leading-[0.9] tracking-normal uppercase mb-12 bg-clip-text text-transparent text-center"
            style={{
              fontFamily: "var(--font-alfaslab)",
              backgroundImage: 'url("/bck-final-hero.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SERVICIOS DE DISEÑO & DESARROLLO WEB
          </motion.h1>

          {/* Subtítulo con rectángulos */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative inline-block">
              {/* Rectángulo exterior con sombra */}
              <div className="absolute inset-0 bg-[#121212] rounded-lg shadow-lg -z-10" />
              
              {/* Rectángulo interior */}
              <div className="relative px-8 py-4 rounded border border-[#E9E9E9]/20" style={{
                fontFamily: "var(--font-inter)",
                background: "linear-gradient(135deg, #FFB7B2 0%, #B9C8F5 50%, #5A5A5A 100%)",
              }}>
                <h2 className="font-['Inter'] font-medium text-xl text-black text-center">
                  Para emprendedores y pymes
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Párrafo con línea vertical */}
          <motion.div
            className="flex justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative max-w-2xl">
              {/* Línea vertical decorativa */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#E9E9E9] to-transparent rounded-full" />
              
              <p className="font-['Inter'] text-base lg:text-lg text-[#E9E9E9]/80 leading-relaxed text-left pl-8 tracking-wider lg:tracking-normal">
                Nuestra agencia crea sitios webs rápidos, modernos y estratégicos para que puedas atraer clientes y competir de verdad.
              </p>
            </div>
          </motion.div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 gap-24 justify-center">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="flex flex-col lg:flex-row items-center justify-evenly text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              >
                {/* Número en círculo */}
                <div className="flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white mb-6 lg:mb-0">
                  <span className="font-['Inter'] font-bold text-6xl lg:text-7xl text-white">
                    {service.number}
                  </span> 
                </div>

                {/* Card title and detail*/}
                <div className="flex flex-col items-center bg-[#FFB7B2] border border-white rounded px-8 py-4 lg:w-[650px]">
                  <h3 className="font-['Inter'] font-semibold text-xl text-black">
                    {service.title}
                  </h3>

                  {/* Flecha hacia abajo */}
                  <motion.div
                    className="mb-4"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <ChevronDown className="w-6 h-6 text-black" />
                  </motion.div>

                  {/* Descripción */}
                  <p className="font-['Inter'] font-light text-base text-black leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
               {/* Botón Consultoría */}
                    <motion.div
                      className="flex justify-center mb-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <a
                        href="https://wa.me/5492984252859"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[90%] lg:w-[70%] xl:w-[35%] mt-2 lg:mt-4 inline-flex items-center justify-left gap-3 px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg group relative"
                        style={{
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {/* Fondo negro */}
                        <div className="absolute inset-0 rounded-lg" />
            
                        {/* Borde degradado */}
                        <div
                          className="absolute inset-0 rounded-sm border-2 border-transparent"
                          style={{
                            background:
                              "linear-gradient(135deg, #FFB7B2 0%, #B9C8F5 50%, #5A5A5A 100%) border-box",
                            mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                            maskComposite: "exclude",
                          }}
                        />
            
                        {/* Contenido */}
                        <span className="relative z-10 text-white">Cotizá tu sitio web ideal</span>
                        <ArrowRight className="w-7 h-7 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}