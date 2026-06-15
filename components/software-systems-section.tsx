"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  LayoutDashboard,
  BarChart3,
  Users,
  Settings2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

interface SystemFeature {
  icon: typeof LayoutDashboard;
  title: string;
  description: string;
  features: string[];
  benefit: string;
  color: string;
}

const systems: SystemFeature[] = [
  {
    icon: LayoutDashboard,
    title: "Panel Administrativo",
    description:
      "Gestioná toda la información de tu negocio desde un único lugar.",
    features: [
      "Usuarios",
      "Productos",
      "Servicios",
      "Propiedades",
      "Contenido web",
    ],
    benefit: "Control total sin depender de terceros",
    color: "text-coral",
  },
  {
    icon: BarChart3,
    title: "Dashboard Inteligente",
    description:
      "Visualizá métricas clave en tiempo real para tomar mejores decisiones.",
    features: [
      "Ventas",
      "Consultas",
      "Conversiones",
      "Rendimiento",
      "Estadísticas",
    ],
    benefit: "Información clara para crecer con datos",
    color: "text-sky",
  },
  {
    icon: Users,
    title: "CRM y Gestión de Clientes",
    description:
      "Centralizá contactos, seguimientos y oportunidades comerciales.",
    features: [
      "Historial clientes",
      "Seguimiento",
      "Gestión de leads",
      "Automatización",
    ],
    benefit: "Más organización y mejores conversiones",
    color: "text-mint",
  },
  {
    icon: Settings2,
    title: "Automatización de Procesos",
    description:
      "Reducí tareas repetitivas y mejorá la eficiencia operativa.",
    features: [
      "Formularios inteligentes",
      "Notificaciones",
      "Integraciones",
      "Flujos personalizados",
    ],
    benefit: "Menos tiempo manual, más tiempo para vender",
    color: "text-lavender",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function SoftwareSystemsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="sistemas"
      className="w-full bg-neutral-950 relative overflow-hidden border-t border-[#434343]"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue/5 blur-3xl" />
      </div>

      <div className="relative z-10 py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col justify-center">
          {/* Title */}
          <motion.h2
            className="flex justify-center w-[95%] text-4xl lg:text-5xl xl:text-5xl leading-[1.1] tracking-normal mb-4 bg-clip-text text-transparent text-center self-center text-mobile-gradient lg:text-primary-gradient font-bold"
            style={{ fontFamily: "var(--font-titles)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mobile text */}
            <span className="block lg:hidden leading-tight">
              Software y Sistemas de Gestión
            </span>
            {/* Desktop text */}
            <span className="hidden lg:block">
              Software y Sistemas de Gestión para Empresas
            </span>
          </motion.h2>

          {/* Divider line */}
          <motion.div
            className="flex justify-center self-center items-center border border-white/60 w-[50%] md:w-[32%] lg:w-[18%] mb-6 mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg text-neutral-300 font-light leading-relaxed text-left max-w-2xl mx-auto mb-16 px-4"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Desarrollamos soluciones a medida para optimizar procesos,
            centralizar información y brindar control total sobre tu negocio
            desde cualquier dispositivo.
          </motion.p>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 xl:gap-6 mb-24"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {systems.map((system, index) => (
              <motion.div
                key={system.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-xl"
              >
                {/* Icon container */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover:scale-110 group-hover:border-white/40">
                  <system.icon className="h-7 w-7 text-white transition-all duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {system.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-4 text-sm text-neutral-400 font-light leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {system.description}
                </p>

                {/* Features list */}
                <ul className="mb-5 flex flex-wrap gap-x-3 gap-y-1.5">
                  {system.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-1 text-xs text-neutral-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Spacer to push benefit to bottom */}
                <div className="mt-auto">
                  <div className="h-px w-full bg-white/10 mb-3" />
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${system.color}`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {system.benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CRM Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-24"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 md:p-12 overflow-hidden group hover:border-white/20 transition-all duration-300">
              {/* Background glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue/10 blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left: Text + CTA */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mint/30 bg-mint/5 text-mint text-xs font-semibold uppercase tracking-wider mb-4">
                    Demo en vivo
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-titles)" }}
                  >
                    Probá nuestro{" "}
                    <span className="text-primary-gradient bg-clip-text text-transparent">
                      CRM
                    </span>{" "}
                    en acción
                  </h3>

                  <p
                    className="text-neutral-400 font-light leading-relaxed mb-6 max-w-lg text-base"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Gestioná contactos, seguimientos y oportunidades comerciales
                    en una interfaz moderna e intuitiva. Sin registros, sin
                    compromiso.
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      "Gestión de leads",
                      "Historial clientes",
                      "Dashboard ventas",
                      "Tareas y seguimiento",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="https://crm-demo-silk-gamma.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-gradient border border-white/20 font-semibold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Abrir demo</span>
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </motion.a>
                </div>

                {/* Right: Mockup preview */}
                <div className="flex-shrink-0 w-full lg:w-80 h-56 rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden relative">
                  <div className="absolute inset-0 flex flex-col">
                    {/* Browser bar mockup */}
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                      <span className="ml-3 flex-1 h-5 rounded bg-white/5 px-2 flex items-center text-[10px] text-neutral-500 truncate">
                        crm-demo-silk-gamma.vercel.app
                      </span>
                    </div>
                    {/* Mock content */}
                    <div className="flex-1 p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-mint/20 flex items-center justify-center">
                          <Users className="h-4 w-4 text-mint" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2.5 w-3/4 rounded bg-white/10" />
                          <div className="h-2 w-1/2 rounded bg-white/5" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[32, 24, 18].map((w) => (
                          <div
                            key={w}
                            className="h-16 rounded-lg border border-white/5 bg-white/[0.02] p-2 flex flex-col justify-between"
                          >
                            <div className="h-1.5 w-full rounded bg-white/10" />
                            <div className="h-3 w-2/3 rounded bg-mint/30" />
                          </div>
                        ))}
                      </div>
                      <div className="h-8 rounded-lg border border-white/5 bg-white/[0.02] flex items-center px-3">
                        <div className="h-1.5 w-1/3 rounded bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dashboard Real - Imagen + Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Texto */}
            <div className="flex flex-col">
              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-titles)" }}
              >
                Transformamos{" "}
                <span className="text-primary-gradient bg-clip-text text-transparent">
                  datos
                </span>{" "}
                en{" "}
                <span className="text-primary-gradient bg-clip-text text-transparent">
                  decisiones
                </span>
              </h3>
              <p
                className="text-base md:text-lg text-neutral-400 font-light leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Desarrollamos dashboards empresariales que centralizan toda la
                información de tu operación, brindando métricas en tiempo real,
                control total de procesos y una visión clara para impulsar el
                crecimiento de tu empresa.
              </p>
            </div>

            {/* Imagen */}
            <div className="relative w-full rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/panel-dashboard.webp"
                alt="Dashboard empresarial con métricas en tiempo real"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Microcopy Section */}
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              Tecnología diseñada para{" "}
              <span className="text-primary-gradient bg-clip-text text-transparent">
                hacer crecer tu empresa
              </span>
            </h3>

            <p
              className="text-base text-neutral-400 font-light leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Creamos soluciones digitales que combinan diseño, rendimiento y
              automatización para ayudarte a captar clientes, optimizar procesos
              y escalar tu negocio con herramientas desarrolladas a medida.
            </p>

            {/* CTA */}
            <motion.a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-primary-gradient border border-white/20 font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              style={{ fontFamily: "var(--font-body)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Contanos qué necesitas</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
