"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Alfa_Slab_One, Inter } from "next/font/google";
import { 
  ArrowRight, 
  MousePointer, 
  ShoppingCart,
  Map,
  Filter,
  ArrowDown,
  Heart,
  Infinity,
  Star,
  Briefcase,
  Github,
  Instagram,
  MessageCircle,
  ChevronRight
} from "lucide-react";
import Image from "next/image";

// Fuentes
const afaScrubOne = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-afa-scrub-one",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const gridItems = [
  {
    icon: ShoppingCart,
    title: "Ventas 24/7",
    description: "Tu negocio sigue vendiendo y mostrando tu catálogo incluso cuando tú descansas."
  },
  {
    icon: Map,
    title: "Expansión Geográfica",
    description: "Expande tu mercado más allá de tu ubicación física y llega a clientes en cualquier lugar."
  },
  {
    icon: Filter,
    title: "Automatización de Leads",
    description: "Creamos una máquina que capta citas y consultas de forma constante."
  },
  {
    icon: ArrowDown,
    title: "Reducción de Costos",
    description: "Automatizamos procesos operativos para que ahorres dinero en tareas repetitivas."
  },
  {
    icon: Heart,
    title: "Fidelización",
    description: "Aumenta la frecuencia de compra con una experiencia de usuario fluida."
  },
  {
    icon: Infinity,
    title: "Catálogo Infinito",
    description: "Muestra toda tu gama de productos sin depender de los metros cuadrados de tu local."
  }
];

const technologies = [
  {
    id: 1,
    name: "MongoDb",
    logoPath: "/mongo-logo.webp",
    alt: "MongoDB Logo",
  },
  {
    id: 2,
    name: "Tw",
    logoPath: "/tw-logo.webp",
    alt: "TW Logo",
  },
  {
    id: 3,
    name: "Next.js",
    logoPath: "/next-logo.webp",
    alt: "Next Logo",
  },
  {
    id: 4,
    name: "Node",
    logoPath: "/node-logo.webp",
    alt: "Node Logo",
  },
  {
    id: 5,
    name: "Figma",
    logoPath: "/figma-logo.webp",
    alt: "Figma Logo",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const cardInView = useInView(cardRef, { margin: "-100px" });
  
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentGridPage, setCurrentGridPage] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Para mobile: dividir las 6 cards en 3 páginas de 2 cards cada una
  const gridPages = [];
  for (let i = 0; i < gridItems.length; i += 2) {
    gridPages.push(gridItems.slice(i, i + 2));
  }

  const nextGridPage = () => {
    setCurrentGridPage((prev) => (prev === gridPages.length - 1 ? 0 : prev + 1));
  };

  // Efecto para detectar dirección del scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (cardInView) {
        if (currentScrollY > lastScrollY) {
          // Scroll hacia abajo - mostrar texto
          setIsFlipped(true);
        } else if (currentScrollY < lastScrollY) {
          // Scroll hacia arriba - mostrar burbuja
          setIsFlipped(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, cardInView]);

  return (
    <section
      ref={ref}
      id="nosotros"
      className={`${afaScrubOne.variable} ${inter.variable} w-full bg-black py-24 md:py-32 px-6 relative overflow-hidden border-t border-[#434343]`}
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center">
        {/* Título principal */}
        <motion.h1
          className="flex justify-center w-[95%] text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[0.9] tracking-normal  bg-clip-text text-transparent text-center self-center uppercase text-mobile-gradient lg:text-primary-gradient mt-12"
          style={{
            fontFamily: "var(--font-afa-scrub-one)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          NOSOTROS
        </motion.h1>
        <div className="flex justify-center self-center items-center border-2 border-white w-[50%] md:w-[32%] lg:w-[18%] mb-12 mt-4"></div>

        {/* VERSIÓN MOBILE/TABLET */}
        <div className="lg:hidden">
          {/* Card Intro & Filosofía - Mobile CON EFECTO DE SCROLL DIRECCIONAL */}
          <div ref={cardRef}>
            <motion.div
              className="flex justify-center mb-16 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div 
                className="relative w-full max-w-[350px] h-62 bg-[#0D0D0D] border-[#434343] border rounded-xl"
              >
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-4 backface-hidden"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-32 h-32 rounded-full border-4 border-white flex flex-col items-center justify-center">
                    <span 
                      className="font-['Inter'] font-medium text-xl text-white text-center leading-tight"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      INTRO &<br />FILOSOFÍA
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-4 backface-hidden h-auto"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 0 : -180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute top-2 right-2 z-20">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <p 
                    className="font-['Inter'] text-sm text-white leading-relaxed text-center tracking-wide"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    En devweb PATAGONIA, creemos que una web o un sistema no es solo un producto digital; es el activo más valioso de tu empresa. Por eso, nuestro enfoque va más allá de la estética visual. Nos especializamos en desarrollar experiencias digitales con una sola intención: hacer que tu negocio funcione mejor.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Grid Mobile - Carrusel de 2 cards */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 gap-0 mb-6 relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
              {gridPages[currentGridPage]?.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 border-r border-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 
                      className="font-['Inter'] font-bold text-2xl text-white mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="font-['Inter'] text-base text-white font-light leading-relaxed px-8"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Controles del carrusel */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={nextGridPage}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-9 h-9 text-white" />
              </button>
              
              {/* Indicadores de puntos */}
              <div className="flex gap-2">
                {gridPages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentGridPage ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Mobile */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[300px] inline-flex items-center justify-center gap-2 px-6 py-4 hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-base group relative"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              <div className="absolute inset-0 rounded-md bg-primary-gradient border border-white" />
              <span className="relative z-10 text-white text-center">
                TRANSFORMÁ TU NEGOCIO
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 text-white" />
            </a>
          </motion.div>

          {/* Imagen con texto superpuesto */}
          <motion.div
            className="relative mb-12 rounded-xl overflow-hidden mt-18"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative w-full h-72">
              <Image
                src="/img-nosotros.webp"
                alt="Resultados de negocio"
                fill
                className="object-cover"
                priority
              />
              {/* Capa oscura para mejor legibilidad */}
              <div className="absolute inset-0 bg-black/50" />
              
              {/* Texto superpuesto */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <p 
                  className="font-['Inter'] text-base text-white leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Cada línea de código y cada funcionalidad que implementamos responde a una pregunta fundamental:
                </p>
                <p 
                  className="font-['Inter'] font-bold text-lg text-white uppercase leading-relaxed tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  ¿CÓMO AYUDA ESTO A TU NEGOCIO A RENTABILIZAR LA INVERSIÓN?
                </p>
                <div className="relative">
                  <Briefcase className="w-8 h-8 text-white" />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm">
                    $
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p 
              className="font-['Inter'] font-medium text-white mb-4 text-center text-lg"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Seguime en mis redes:
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://github.com/kevkarlion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-8 h-8 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/kevinrqm?igsh=dWswMWg4MmplOWVk&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Instagram className="w-8 h-8 text-white" />
              </a>
              <a 
                href="https://wa.me/5492984252859" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Información Personal Mobile */}
          <motion.div
            className="p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col items-center text-center mt-8">
              {/* Foto */}
              <div className="relative w-82 h-82  overflow-hidden mb-4">
                <Image
                  src="/kevin-yo.png"
                  alt="Kevin Riquelme"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Nombre y profesión */}
              <div className="bg-[#0D0D0D] border-[#434343] border rounded-lg p-3 mb-4 w-full">
                <h2 
                  className="font-['Inter'] font-bold text-lg text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Kevin Riquelme
                </h2>
                <p 
                  className="font-['Inter'] font-light text-base text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Fundador & Lead Developer
                </p>
              </div>

              {/* Descripción */}
              <div className="space-y-3 mb-16 mt-6">
                <p 
                  className="font-['Inter'] text-base text-white leading-relaxed tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  No soy solo un programador; soy tu socio estratégico. Me dedico a transformar los desafíos operativos de emprendedores y PyMEs en soluciones digitales elegantes y eficientes.
                </p>
                <p 
                  className="font-['Inter'] text-base text-white leading-relaxed tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Al trabajar conmigo, obtienes trato directo y sin intermediarios. Me aseguro personalmente de que obtengas una herramienta confiable que te ahorre tiempo, reduzca costos y aumente tus ganancias.
                </p>
              </div>

              {/* Tecnologías Mobile */}
              <div className="flex gap-4 justify-center flex-wrap mb-8">
                {technologies.map((tech) => (
                  <div 
                    key={tech.id}
                    className="w-18 h-18 bg-white/10 rounded-lg flex items-center justify-center"
                  >
                    <Image
                      src={tech.logoPath}
                      alt={tech.alt}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Final Mobile */}
          <a
            href="https://wa.me/5492984252859"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-full md:w-[70%] xl:w-[35%]  lg:mt-4 inline-flex items-center justify-center self-center gap-3 px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg group relative"
            style={{
              fontFamily: "var(--font-inter)",
            }}
          >
            <div className="absolute inset-0 rounded-lg bg-primary-gradient border-2 border-white" />
            <span className="relative z-10 text-white text-center text-lg">
              Empecemos tu proyecto
            </span>
            <ArrowRight className="w-6 h-6 relative z-10 text-white" />
          </a>
        </div>

        {/* VERSIÓN DESKTOP - Se mantiene igual */}
        <div className="hidden lg:block">
          {/* Card Intro & Filosofía Desktop */}
          <motion.div
            className="flex justify-center mb-16 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div 
              className="relative w-full max-w-[650px] h-64 bg-[#0D0D0D] border-[#434343] border rounded-xl cursor-pointer"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              {/* Frente de la card */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Círculo con borde blanco y cursor elegante */}
                <div className="relative">
                  <div className="w-48 h-48 rounded-full border-6 border-white flex flex-col items-center justify-center mb-4">
                    <span 
                      className="font-['Inter'] font-medium text-3xl text-white text-center leading-tight"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      INTRO &<br />FILOSOFÍA
                    </span>
                  </div>
                  {/* Cursor elegante horizontal inclinado - posición superior derecha */}
                  <div className="absolute top-42 -right-3">
                    <MousePointer className="w-10 h-10 text-white transform -rotate-12" />
                  </div>
                </div>
              </motion.div>

              {/* Reverso de la card CON ESTRELLA */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-8 backface-hidden"
                initial={false}
                animate={{ rotateY: isFlipped ? 0 : -180 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Estrella en esquina superior derecha - SOLO en el reverso */}
                <div className="absolute top-4 right-4 z-20">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>

                <p 
                  className="font-['Inter'] text-base text-white leading-relaxed text-center px-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  En devweb PATAGONIA, creemos que una web o un sistema no es solo un producto digital; es el activo más valioso de tu empresa. Por eso, nuestro enfoque va más allá de la estética visual. Nos especializamos en desarrollar experiencias digitales con una sola intención: hacer que tu negocio funcione mejor.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Grid de 3 columnas y 2 filas - Desktop */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 mt-12 relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* SOLO 1 línea horizontal central que divide las 2 filas */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20" />
            
            {/* SOLO 2 líneas verticales que dividen las 3 columnas */}
            <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/20" />
            <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/20" />

            {gridItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative p-4 rounded-lg group hover:bg-white/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {/* Contenido */}
                <div className="flex flex-col items-center text-center">
                  {/* Círculo con icono */}
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Título */}
                  <h3 
                    className="font-['Inter'] font-bold text-2xl text-white mb-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Descripción */}
                  <p 
                    className="font-['Inter'] text-sm text-white font-light leading-relaxed w-[75%]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dos Rectángulos - Desktop */}
          <motion.div
            className="grid grid-cols-5 gap-8 mb-32 relative mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Primer Rectángulo - Descripción */}
            <div className="col-span-2 bg-primary-gradient border border-white rounded-xl p-8 flex flex-col items-center justify-center">
              <div>
                {/* Primer párrafo - texto normal */}
                <p 
                  className="font-['Inter'] text-lg text-white leading-relaxed mb-6 text-center px-8"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Cada línea de código y cada funcionalidad que implementamos responde a una pregunta fundamental:
                </p>

                {/* Segundo párrafo - mayúsculas */}
                <p 
                  className="font-['Inter'] font-bold text-xl text-white uppercase leading-relaxed tracking-wide mb-6 text-center px-6"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  ¿CÓMO AYUDA ESTO A TU NEGOCIO A RENTABILIZAR LA INVERSIÓN?
                </p>
              </div>

              {/* Icono maletín con $ */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Briefcase className="w-12 h-12 text-white" />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
                    $
                  </span>
                </div>
              </div>
            </div>

            {/* Segundo Rectángulo - Imagen (más largo) */}
            <div className="col-span-3 bg-[#0D0D0D] border border-[#434343] rounded-xl">
              <div className="relative w-full h-104">
                <Image
                  src="/img-nosotros.webp"
                  alt="Resultados de negocio"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </motion.div>
          
          {/* CTA Especial - mitad sobre las cards, mitad afuera - Desktop */}
          <motion.div
            className="flex justify-center relative z-20 -mt-42"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              {/* Sombra detrás */}
              <div className="absolute inset-0 bg-black/50 blur-lg rounded-lg -z-10 transform scale-105" />
              
              <a
                href="https://wa.me/5492984252859"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[90%] lg:w-[500px] inline-flex items-center justify-center gap-3 px-12 py-6 hover:scale-105 transition-all duration-300 shadow-2xl font-bold text-xl group relative"
                style={{
                  fontFamily: "var(--font-inter)",
                }}
              >
                {/* Fondo con gradiente */}
                <div className="absolute inset-0 rounded-lg bg-primary-gradient border border-white" />

                {/* Contenido */}
                <span className="relative z-10 text-white text-center">
                  TRANSFORMÁ TU NEGOCIO HOY
                </span>
                <ArrowRight className="w-8 h-8 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </motion.div>

          {/* Card Grande - Información Personal - Desktop */}
          <motion.div
            className="w-[80%] mx-auto bg-[#0D0D0D] border-[#434343] border rounded-xl p-4 mb-32 mt-32"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
              {/* Imagen - 38% */}
              <div className="lg:w-[38%]">
                <div className="relative w-full h-104 rounded-lg overflow-hidden top-9">
                  <Image
                    src="/kevin-yo.png"
                    alt="Kevin Riquelme - Fundador & Lead Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Contenido - 62% */}
              <div className="lg:w-[54%] flex flex-col">
                {/* Rectángulo con nombre y profesión */}
                <div className="bg-[#323232] border rounded-lg p-2 mb-2 w-[95%] mt-8">
                  <h2 
                    className="font-['Inter'] font-bold text-lg text-white text-center"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Kevin Riquelme
                  </h2>
                  <p 
                    className="font-['Inter'] font-medium text-base text-white text-center"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Fundador & Lead Developer
                  </p>
                </div>

                {/* Párrafos */}
                <div className="space-y-4 mb-8">
                  <p 
                    className="font-['Inter'] text-sm text-white leading-relaxed mt-8"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    No soy solo un programador; soy tu socio estratégico. Me dedico a transformar los desafíos operativos de emprendedores y PyMEs en soluciones digitales elegantes y eficientes.
                  </p>
                  <p 
                    className="font-['Inter'] text-sm text-white leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Al trabajar conmigo, obtienes trato directo y sin intermediarios. Me aseguro personalmente de que obtengas una herramienta confiable que te ahorre tiempo, reduzca costos y aumente tus ganancias.
                  </p>
                </div>

                {/* Iconos de redes sociales */}
                <div className="flex flex-col items-center justify-center">
                  <p 
                    className="font-['Inter'] font-lg text-white mb-4 text-center lg:text-left"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Seguime en mis redes:
                  </p>
                  <div className="flex gap-6 justify-center">
                    <a 
                      href="https://github.com/kevkarlion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="https://www.instagram.com/kevinrqm?igsh=dWswMWg4MmplOWVk&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="https://wa.me/5492984252859" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <MessageCircle className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Iconos de Tecnologías - Desktop */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex gap-8 justify-center items-center flex-wrap">
              {technologies.map((tech) => (
                <div 
                  key={tech.id}
                  className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  <Image
                    src={tech.logoPath}
                    alt={tech.alt}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Botón Consultoría (original) - Desktop */}
          <motion.div
            className="flex justify-center mt-16 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[90%] lg:w-[70%] xl:w-[35%] mt-2 lg:mt-4 inline-flex items-center justify-center gap-3 px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg group relative"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              {/* Fondo con gradiente */}
              <div className="absolute inset-0 rounded-lg bg-primary-gradient border-white border-2" />

              {/* Contenido */}
              <span className="relative z-10 text-white">
                Consultoría
              </span>
              <ArrowRight className="w-7 h-7 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Estilos para el efecto flip 3D */}
      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}