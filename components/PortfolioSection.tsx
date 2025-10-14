"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Cormorant_Garamond, Inter, JetBrains_Mono, Oswald, EB_Garamond, Judson } from 'next/font/google'

// Configurar las fuentes
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

// Datos del portfolio
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Premium",
    description: "Plataforma de comercio electrónico con diseño centrado en la experiencia de usuario",
    image: "/portfolio/ecommerce-web.jpg",
    category: "Desarrollo Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://ejemplo-ecommerce.com"
  },
  {
    id: 2,
    title: "Portal Corporativo",
    description: "Sitio web corporativo con sistema de gestión de contenidos integrado",
    image: "/portfolio/corporate-web.jpg",
    category: "Diseño UI/UX",
    technologies: ["React", "Framer Motion", "Styled Components"],
    link: "https://ejemplo-corporativo.com"
  },
  {
    id: 3,
    title: "Aplicación SaaS",
    description: "Plataforma de software como servicio con dashboard interactivo",
    image: "/portfolio/saas-web.jpg",
    category: "Product Design",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    link: "https://ejemplo-saas.com"
  },
  {
    id: 4,
    title: "Sitio Portfolio Artístico",
    description: "Galería digital para artistas contemporáneos con scroll experiencial",
    image: "/portfolio/art-web.jpg",
    category: "Diseño Creativo",
    technologies: ["GSAP", "Three.js", "WebGL"],
    link: "https://ejemplo-arte.com"
  },
  {
    id: 5,
    title: "Plataforma Educativa",
    description: "E-learning platform with interactive courses and progress tracking",
    image: "/portfolio/education-web.jpg",
    category: "Desarrollo Web",
    technologies: ["React", "Firebase", "Stripe"],
    link: "https://ejemplo-educacion.com"
  },
  {
    id: 6,
    title: "App Móvil HealthTech",
    description: "Aplicación de salud y bienestar con seguimiento personalizado",
    image: "/portfolio/health-web.jpg",
    category: "Product Design",
    technologies: ["React Native", "GraphQL", "AWS"],
    link: "https://ejemplo-salud.com"
  }
]

export function PortfolioSection() {
  return (
    <div className={`w-full ${cormorant.variable} ${oswald.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <section
        className="relative min-h-screen py-20 px-6 w-full overflow-hidden"
        style={{ 
          backgroundColor: 'rgb(233, 233, 233)', 
          backgroundImage: 'url(/bck-figure.png)', 
          backgroundPosition: '80% 20%' 
        }}
        id="portfolio"
      >
        {/* Animated gradient glow background */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(18,18,18,0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(18,18,18,0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(18,18,18,0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(18,18,18,0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Contenedor principal */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          
          {/* Header del Portfolio */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-[clamp(2.5rem,6vw,4rem)] text-[#121212] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span 
                className="uppercase font-light tracking-wide"
                style={{ fontFamily: 'var(--font-oswald)' }}
              >
                Portfolio
              </span>
              <br />
              <span 
                className="italic font-medium"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Selección de
              </span>
              <br />
              <span 
                className="font-regular tracking-tight"
                style={{ fontFamily: 'var(--font-judson)' }}
              >
                Proyectos
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-[#121212]/70 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Una colección cuidadosamente curada de proyectos donde el diseño y la tecnología 
              se fusionan para crear experiencias digitales excepcionales.
            </motion.p>
          </motion.div>

          {/* Grid de Portfolio */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Imagen del proyecto */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Categoría */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm text-[#121212]"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Botón de vista */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-[#121212] rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-[#121212] hover:text-white"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Ver Proyecto
                    </a>
                  </motion.div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-semibold text-[#121212] mb-3"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {item.title}
                  </h3>
                  
                  <p 
                    className="text-[#121212]/70 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {item.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-[#121212]/5 text-[#121212]/80 rounded-md"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Efecto de borde sutil */}
                <div className="absolute inset-0 rounded-2xl border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Final */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.p
              className="text-lg text-[#121212]/70 mb-6 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              ¿Interesado en colaborar en tu próximo proyecto?
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <a
                href="https://wa.me/5492984252859"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#121212] text-[#E9E9E9] rounded-full hover:bg-[#121212]/90 transition-all duration-300 shadow-lg font-semibold"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Hablemos de tu proyecto
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Elementos decorativos */}
        <motion.div
          className="absolute left-0 top-1/4 w-24 h-24 bg-gradient-to-br from-[#121212]/5 to-transparent transform -rotate-45 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        />
        
        <motion.div
          className="absolute right-0 bottom-1/4 w-32 h-32 bg-gradient-to-tl from-[#121212]/5 to-transparent transform rotate-12 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
        />
      </section>
    </div>
  )
}