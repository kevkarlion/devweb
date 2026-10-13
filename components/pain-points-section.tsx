"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  ClipboardList,
  MonitorX,
  SearchX,
  MousePointerClick,
  MessageSquareOff,
  LayoutDashboard,
  Bot,
} from "lucide-react";

const sectors = [
  "Oil & Gas",
  "Logística y Transporte",
  "Agroindustria",
  "Comercios y Servicios B2B",
];

const painPoints = [
  {
    icon: Globe,
    title: "Tu marca no se ve o no convierte en Google",
    items: [
      {
        icon: MonitorX,
        text: "Tienes un sitio web antiguo o que no transmite la verdadera envergadura de tu empresa.",
      },
      {
        icon: SearchX,
        text: "No apareces en la primera página cuando un cliente busca tus servicios en la zona.",
      },
      {
        icon: MousePointerClick,
        text: "Inviertes en publicidad o redes, pero las visitas no se convierten en consultas reales por falta de Landing Pages enfocadas.",
      },
    ],
  },
  {
    icon: ClipboardList,
    title: "Tu operación depende de planillas y WhatsApp sueltos",
    items: [
      {
        icon: MessageSquareOff,
        text: "Las cotizaciones y presupuestos se pierden en chats individuales de los vendedores.",
      },
      {
        icon: LayoutDashboard,
        text: "Falta de un dashboard centralizado para ver el estado de obras, flotas o servicios en tiempo real.",
      },
      {
        icon: Bot,
        text: "Tu equipo pierde horas en tareas administrativas repetitivas que podrían automatizarse con IA.",
      },
    ],
  },
];

export function PainPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="diagnostico"
      className="w-full bg-neutral-950 relative"
    >
      {/* Cinta de Validación */}
      <div className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 py-4">
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Sectores que impulsamos en la región:
          </span>
          {sectors.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-6xl flex-col justify-center">
          {/* H2 único de la sección */}
          <motion.h2
            className="mx-auto max-w-4xl text-center text-4xl font-bold leading-[0.95] bg-clip-text text-transparent text-mobile-gradient lg:text-primary-gradient md:text-5xl"
            style={{ fontFamily: "var(--font-titles)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Qué está frenando el crecimiento de tu empresa hoy?
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-center text-base font-light leading-relaxed text-neutral-300 md:text-lg"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Identificamos y resolvemos los dos cuellos de botella más comunes en
            Neuquén y el Alto Valle:
          </motion.p>

          {/* Divider line */}
          <motion.div
            className="mt-8 flex w-[50%] items-center justify-center self-center border border-white/60 md:w-[32%] lg:w-[18%]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          />

          {/* Grid de pain points */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {painPoints.map((card, cardIndex) => (
              <motion.div
                key={card.title}
                className="flex flex-col rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/30 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + cardIndex * 0.15 }}
              >
                {/* Header de la card */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-gradient">
                    <card.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold text-white md:text-2xl"
                    style={{ fontFamily: "var(--font-titles)" }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Lista de pain points */}
                <ul className="mt-6 flex flex-col gap-5">
                  {card.items.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <item.icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400"
                        aria-hidden="true"
                      />
                      <p
                        className="text-sm leading-relaxed text-neutral-300 md:text-base"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
