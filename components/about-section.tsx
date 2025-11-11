"use client";

import { motion, useInView, Variants, Transition } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRightIcon,
  Bot,
  Clock,
  Globe,
  TrendingDown,
  Users,
  LayoutGrid,
  Calendar,
  Zap,
  Target,
} from "lucide-react";
import { useRef } from "react";
import { Alfa_Slab_One } from "next/font/google";
import RotatingMovingBorder from "@/components/MovingBorderWrapper";
import Image from "next/image";

// Fuentes
const alfaSlab = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alfaslab",
});

// Función para obtener el icono según el beneficio
const getBenefitIcon = (benefit: string) => {
  const lowerBenefit = benefit.toLowerCase();

  if (lowerBenefit.includes("leads") || lowerBenefit.includes("automática")) {
    return <Bot className="w-6 h-6" />;
  }
  if (lowerBenefit.includes("24hs") || lowerBenefit.includes("vender")) {
    return <Clock className="w-6 h-6" />;
  }
  if (
    lowerBenefit.includes("zona") ||
    lowerBenefit.includes("expandir") ||
    lowerBenefit.includes("general roca")
  ) {
    return <Globe className="w-6 h-6" />;
  }
  if (lowerBenefit.includes("costos") || lowerBenefit.includes("reducir")) {
    return <TrendingDown className="w-6 h-6" />;
  }
  if (lowerBenefit.includes("fidelizar") || lowerBenefit.includes("clientes")) {
    return <Users className="w-6 h-6" />;
  }
  if (
    lowerBenefit.includes("catálogo") ||
    lowerBenefit.includes("mostrar") ||
    lowerBenefit.includes("espacio físico")
  ) {
    return <LayoutGrid className="w-6 h-6" />;
  }
  if (
    lowerBenefit.includes("citas") ||
    lowerBenefit.includes("consultas") ||
    lowerBenefit.includes("máquina")
  ) {
    return <Calendar className="w-6 h-6" />;
  }
  if (
    lowerBenefit.includes("información") ||
    lowerBenefit.includes("instant") ||
    lowerBenefit.includes("horario")
  ) {
    return <Zap className="w-6 h-6" />;
  }

  return <Target className="w-6 h-6" />;
};

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

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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

  const benefits = [
    "GENERAR LEADS DE FORMA AUTOMÁTICA Y CONSTANTE",
    "VENDER LAS 24HS",
    "EXPANDIR TU ZONA DE VENTAS MÁS ALLÁ DE GENERAL ROCA",
    "REDUCIR COSTOS OPERATIVOS MEDIANTE AUTOMATIZACIÓN DE PROCESOS",
    "FIDELIZAR CLIENTES Y AUMENTAR SU FRECUENCIA DE COMPRA",
    "MOSTRAR TU CATÁLOGO COMPLETO, SIN LÍMITES DE ESPACIO FÍSICO",
    "CREAR UNA MÁQUINA PARA GENERAR CITAS Y CONSULTAS PARA TU NEGOCIO",
    "PROVEER INFORMACIÓN DE PRODUCTOS Y SERVICIOS AL INSTANTE, SIN DEPENDER DEL HORARIO DE ATENCIÓN",
  ];

  return (
    <section
      ref={ref}
      id="nosotros"
      className={`${alfaSlab.variable} min-h-screen w-full py-24 sm:py-32 px-6 sm:px-6 lg:pt-32 relative overflow-hidden text-center`}
    >
      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />

      {/* Fondo base oscuro */}
      <div className="absolute inset-0 bg-[#0f172a] z-[-1]" />

      {/* Líneas decorativas */}
      <motion.div
        className="absolute top-1/4 -left-10 w-32 h-0.5 bg-[#E9E9E9]/10 z-10"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />
      <motion.div
        className="absolute bottom-1/4 -right-10 w-32 h-0.5 bg-[#E9E9E9]/10 z-10"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Título con efecto hero */}
        <motion.h1
          className="mt-14 relative text-[2.7rem] sm:text-5xl leading-[0.9] tracking-normal uppercase mb-12 bg-clip-text text-transparent"
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
          NOSOTROS
        </motion.h1>

        {/* Primer párrafo centrado */}
        <motion.div
          className="space-y-8 mb-12"
          variants={paragraphContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="tracking-wider lg:tracking-normal font-(family-name:--font-inter-light) text-base xl:text-lg text-[#E9E9E9]/80 leading-relaxed max-w-3xl mx-auto text-center"
            variants={paragraphVariants}
          >
            En devweb Patagonia, creemos que una web o un sistema no es solo un
            producto digital; es una herramienta de negocio.
            <br />
            <br />
            Por eso, nuestro enfoque va más allá de la estética.
            <br />
            <br />
            Nos especializamos en crear experiencias digitales diseñadas con una
            intención clara:
          </motion.p>
        </motion.div>

        {/* Sección de beneficios con borde animado e iconos */}
        <motion.div
          className="w-[90%] max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative rounded-lg p-8 backdrop-blur-sm bg-white/5 drop-shadow-2xl">
            {/* Moving Border con rotación automática */}
            <div className="absolute inset-0 overflow-hidden rounded-lg p-px">
              <div className="absolute inset-0 pointer-events-none">
                <RotatingMovingBorder duration={4000} rx="12" ry="12">
                  <div className="h-0.5 w-16 bg-blue-400 shadow-[0_0_10px_#3b82f6]" />
                </RotatingMovingBorder>
              </div>
            </div>

            {/* Borde base sutil */}
            <div className="absolute inset-0 rounded-lg border border-white/20" />

            <div className="relative z-10 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Icono */}
                  <div className="shrink-0 w-6 h-6 mt-1 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {getBenefitIcon(benefit)}
                  </div>

                  {/* Texto */}
                  <p
                    className="text-lg text-white font-bold text-left uppercase flex-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Segundo párrafo centrado */}
        <motion.div
          className="mb-12"
          variants={paragraphContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="tracking-wider lg:tracking-normal font-(family-name:--font-inter-light) text-base xl:text-lg text-[#E9E9E9]/80 leading-relaxed max-w-3xl mx-auto text-center"
            variants={paragraphVariants}
          >
            Cada línea de código, cada diseño y cada funcionalidad que
            desarrollamos responde a una pregunta fundamental: ¿Cómo esto ayuda
            a tu negocio a alcanzar sus objetivos?
          </motion.p>
        </motion.div>

        {/* Sección personal con foto y texto */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 mb-12 max-w-4xl mx-auto"
          variants={paragraphContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contenedor de foto con información */}
          <motion.div
            className="flex flex-col items-center text-center shrink-0"
            variants={paragraphVariants}
          >
            {/* Foto libre sin formato circular */}
            <div className="w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center bg-transparent">
              <Image
                src="/kevin-yo.png"
                alt="Kevin Riquelme - Fundador y Desarrollador"
                width={400}
                height={400}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Nombre */}
            <h3
              className="mt-4 text-xl font-bold text-white"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Kevin Riquelme
            </h3>

            {/* Cargo */}
            <p
              className="mt-2 text-sm text-[#E9E9E9]/80"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Fundador y Desarrollador
            </p>
          </motion.div>

          {/* Texto personal */}
          <motion.div
            className="text-left space-y-6 flex-1"
            variants={paragraphVariants}
          >
            <p className="tracking-wider text-center lg:text-left lg:tracking-normal font-(family-name:--font-inter-light) text-base xl:text-lg text-[#E9E9E9]/80 leading-relaxed">
              Mi pasión es convertir los desafíos operativos de emprendedores y
              pymes en soluciones digitales elegantes y eficientes. Como tu
              contacto directo, me aseguro de que no solo ames el diseño de tu
              proyecto, sino que también obtengas una herramienta confiable que
              te ahorre tiempo, reduzca costos y aumente tus ganancias.
            </p>

            <p className="tracking-wider text-center lg:text-left lg:tracking-normal font-(family-name:--font-inter-semibold) text-base xl:text-lg text-[#E9E9E9]/80 leading-relaxed">
              Hablemos de cómo podemos llevar tu visión al mundo digital
            </p>
          </motion.div>
        </motion.div>

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
            <span className="relative z-10 text-white">Consultoría</span>
            <ArrowRight className="w-7 h-7 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Logos de tecnologías */}
        <motion.div
          className="flex justify-center items-center gap-8 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.id}
              className="w-16 h-16 bg-[#E9E9E9]/10 rounded-lg flex items-center justify-center shrink-0"
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
