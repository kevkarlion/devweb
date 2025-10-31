"use client";

import { motion, useInView, Variants, Transition } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Alfa_Slab_One } from "next/font/google";

// Fuentes
const alfaSlab = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alfaslab",
});

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Transitions
  const easeTransition: Transition = {
    duration: 1.2,
    ease: "easeInOut",
    delay: 0.6,
  };
  const circleTransition: Transition = {
    duration: 1.5,
    ease: "easeOut",
    delay: 1,
  };

  // Variants
  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: easeTransition },
  };

  const paragraphContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const circleVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: circleTransition },
  };

  const technologies = [
    {
      id: 1,
      name: "Next.js",
      logoPath: "/figma-logo.webp",
      alt: "Next.js Logo",
    },
    {
      id: 2,
      name: "React",
      logoPath: "/mongo-logo.webp",
      alt: "React Logo",
    },
    {
      id: 3,
      name: "Node.js",
      logoPath: "/tw-logo.webp",
      alt: "Node.js Logo",
    },
    {
      id: 4,
      name: "MongoDB",
      logoPath: "/next-logo.webp",
      alt: "MongoDB Logo",
    },
    {
      id: 5,
      name: "Express.js",
      logoPath: "/node-logo.webp",
      alt: "Express.js Logo",
    },
  ];

  return (
    <section
      ref={ref}
      id="nosotros"
      className={`${alfaSlab.variable} py-24 sm:py-32 px-6 sm:px-6 lg:pt-32 relative overflow-hidden text-center bg-black border-t border-[white/10]`}
    >
      {/* Líneas decorativas */}
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
        {/* Título con efecto hero */}
        <motion.h1
          className="mt-14 relative text-[2.7rem] sm:text-5xl leading-[0.9] tracking-normal uppercase mb-12 bg-clip-text text-transparent z-[200]"
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
          devweb &gt; NOSOTROS
        </motion.h1>

        {/* Primer párrafo centrado */}
        <motion.div
          className="space-y-8 mb-12"
          variants={paragraphContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="border-l-3 border-white/70 pl-4 tracking-wider lg:tracking-normal font-[family-name:var(--font-inter-light)] text-base xl:text-lg text-[#E9E9E9]/80 leading-relaxed max-w-3xl mx-auto text-center lg:text-left"
            variants={paragraphVariants}
          >
            En devweb Patagonia elegimos trabajar con Next.js y Stack MERN para
            ofrecer soluciones web de alto rendimiento y escalabilidad. Estas
            tecnologías nos permiten crear experiencias digitales personalizadas
            que se adaptan exactamente a las necesidades de tu negocio.
          </motion.p>
        </motion.div>

        {/* Card con ventajas */}
        <motion.div
          className="mb-12"
          variants={paragraphContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="tracking-wider lg:tracking-normal font-[family-name:var(--font-inter-semibold)] text-xl text-[#E9E9E9]/80 mb-6 text-center"
            variants={paragraphVariants}
          >
            ¿Por qué desarrollamos con Next.js y MERN?
          </motion.h3>

          <motion.div
            className="w-[90%] max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div
              className="rounded-lg p-8 border border-white/40 shadow-2xl shadow-black/50 backdrop-blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, #FFB7B2 0%, #B9C8F5 50%, #5A5A5A 100%)",
              }}
            >
              <div className="space-y-4">
                <p
                  className="text-lg text-black font-bold text-left"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <strong>Máxima velocidad y rendimiento:</strong> Aplicaciones
                  web ultrarrápidas que mejoran la experiencia de usuario y el
                  posicionamiento SEO.
                </p>
                <p
                  className="text-lg text-black font-bold text-left"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <strong>Personalización total:</strong> Desarrollos 100% a
                  medida, sin las limitaciones de plantillas predefabricadas.
                </p>
                <p
                  className="text-lg text-black font-bold text-left"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <strong>Escalabilidad garantizada:</strong> Tu web crece junto
                  a tu negocio, manejando alto tráfico y funcionalidades
                  complejas.
                </p>
                <p
                  className="text-lg text-black font-bold text-left"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <strong>SEO técnico avanzado:</strong> Renderizado server-side
                  que los motores de búsqueda prefieren.
                </p>
                <p
                  className="text-lg text-black font-bold text-left"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <strong>Seguridad robusta:</strong> Arquitectura moderna que
                  protege tu sitio y datos sensibles.
                </p>

                <div className="mt-6 pt-4 border-t border-black/20">
                  <p
                    className="text-lg text-black font-bold text-left mb-3"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <strong>Ideal para proyectos donde importa:</strong>
                  </p>
                  <p
                    className="text-lg text-black font-bold text-left"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    • El rendimiento y la velocidad de carga.
                  </p>
                  <p
                    className="text-lg text-black font-bold text-left"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    • La personalización total del diseño y funcionalidades.
                  </p>
                  <p
                    className="text-lg text-black font-bold text-left"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    • La escalabilidad a futuro.
                  </p>
                  <p
                    className="text-lg text-black font-bold text-left"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    • La integración con sistemas y APIs complejas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tercer párrafo centrado */}
        <motion.div
          className="mb-12"
          variants={paragraphContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="tracking-wider lg:tracking-normal font-[family-name:var(--font-inter-light)] text-base xl:text-lg text-[#E9E9E9]/80 leading-relaxed max-w-3xl mx-auto text-center lg:text-left xl:mb-18 xl:mt-12"
            variants={paragraphVariants}
          >
            Trabajamos codo a codo con emprendedores, pymes y comercios de la
            Patagonia, combinando expertise técnico con diseño estratégico para
            convertir ideas en realidades digitales exitosas.
          </motion.p>
        </motion.div>

        {/* Logos de tecnologías - FIJOS */}
        <motion.div
          className="flex justify-center items-center gap-8 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.id}
              className="w-16 h-16 bg-[#E9E9E9]/10 rounded-lg flex items-center justify-center flex-shrink-0"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={tech.logoPath}
                alt={tech.alt}
                className="w-10 h-10 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Botón Contactanos */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://wa.me/5492984252859"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[90%] lg:w-[70%] xl:w-[35%] mt-2 lg:mt-4 inline-flex items-center justify-left gap-3 px-8 py-4  hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg group relative"
            style={{
              fontFamily: "var(--font-inter)",
            }}
          >
            {/* Fondo negro */}
            <div className="absolute inset-0 rounded-lg bg-black" />

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
            <span className="relative z-10 text-white ">Contáctanos</span>
            <ArrowRight className="w-7 h-7 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </a>
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
            transition: { duration: 0.5 },
          }}
        />
      </div>
    </section>
  );
}
