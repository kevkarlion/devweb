"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5492984252859?text=Hola%20Devweb%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20chat%20IA%20conversacional%20para%20mi%20negocio.";

const BODY = { fontFamily: "var(--font-body)" };
const MONO = { fontFamily: "var(--font-mono)" };

const BENEFITS = [
  {
    label: "Atención 24/7",
    description: "responde consultas en cualquier momento.",
  },
  {
    label: "Información de productos",
    description: "comunica precios, características y disponibilidad.",
  },
  {
    label: "Más oportunidades de venta",
    description: "acompaña al cliente durante su decisión de compra.",
  },
  {
    label: "Atención personalizada",
    description: "adapta las respuestas a las necesidades de cada cliente.",
  },
  {
    label: "Menos trabajo manual",
    description: "automatiza consultas frecuentes y libera tiempo del equipo.",
  },
];

export function AutomationBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="automatizaciones"
      aria-label="Chat IA conversacional integrado a tu negocio"
      className="w-full bg-neutral-950 px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0F]"
        >
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <Image
              src="/automatizaciones.webp"
              alt="Chat de IA conversacional de Devweb respondiendo consultas de productos y stock"
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              quality={90}
              priority={false}
              className="object-cover object-[78%_center] brightness-105 saturate-125 lg:object-right"
            />
          </div>

          {/* Velo para legibilidad */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/50 lg:bg-gradient-to-r lg:from-black/92 lg:via-black/65 lg:via-[55%] lg:to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden"
          />

          {/* Contenido incrustado sobre la imagen */}
          <div className="relative z-10 max-w-xl px-6 py-14 sm:px-10 md:py-16 lg:px-12 lg:py-20">
            {/* Título */}
            <h2
              className="text-3xl font-bold leading-[1.05] text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              Tu asistente virtual, integrado a tu negocio.
            </h2>

            {/* Marca, eslogan y descriptor */}
            <div className="mt-8 flex flex-col gap-1">
              <span
                className="text-2xl font-bold tracking-tight text-white md:text-3xl"
                style={{ fontFamily: "var(--font-titles)" }}
              >
                Devweb
              </span>
              <span
                className="text-sm font-light text-neutral-200 md:text-base"
                style={BODY}
              >
                Tecnología aplicada a tu negocio.
              </span>
              <span
                className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-400 md:text-[13px]"
                style={MONO}
              >
                Diseño Web · Software a medida · Integración IA
              </span>
            </div>

            {/* Label */}
            <span className="mt-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm md:text-[11px]">
              Chat IA conversacional
            </span>

            {/* Subtítulo */}
            <p
              className="mt-5 max-w-xl text-base font-light leading-relaxed text-neutral-200 md:text-lg"
              style={BODY}
            >
              Responde consultas, informa sobre tus productos y atiende a tus
              clientes las 24 horas.
            </p>

            {/* Beneficios */}
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4">
              {BENEFITS.map((benefit, index) => (
                <motion.li
                  key={benefit.label}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-gradient">
                    <Check
                      className="h-3.5 w-3.5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    className="text-sm leading-relaxed text-neutral-200 md:text-[15px]"
                    style={BODY}
                  >
                    <strong className="font-semibold text-white">
                      {benefit.label}:
                    </strong>{" "}
                    {benefit.description}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Cierre */}
            <div className="mt-10 border-t border-white/15 pt-8">
              <p
                className="text-xl font-bold leading-snug text-white md:text-2xl"
                style={{ fontFamily: "var(--font-titles)" }}
              >
                Automatizá la atención. Tu equipo se enfoca en el negocio.
              </p>
              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  <MessageCircle
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  Hablar por WhatsApp
                </a>
                <Link
                  href="/soluciones/automatizacion-con-ia"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-200 transition-colors duration-300 hover:text-white"
                >
                  Conocer la solución
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
