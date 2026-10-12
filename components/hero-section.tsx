"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";
import { LightningBolt } from "@/components/icons/lightning-bolt";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const WHATSAPP_URL = "https://wa.me/5492984252859";

interface Door {
  title: string;
  description: string;
  cta: string;
  href: string;
}

const doors: Door[] = [
  {
    title: "Presencia Digital",
    description:
      "Webs de alta velocidad, catálogos y posicionamiento SEO para captar más clientes.",
    cta: "Explorar Diseño Web",
    href: "/soluciones/desarrollo-web-b2b",
  },
  {
    title: "Software e IA",
    description:
      "CRMs, dashboards y automatización para empresas que necesitan centralizar su operación.",
    cta: "Explorar Sistemas Integrados",
    href: "/soluciones",
  },
];

interface DiscoveryCardProps extends Door {
  index: number;
}

function DiscoveryCard({ title, description, cta, href, index }: DiscoveryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
    >
      <Link
        href={href}
        className="group flex h-full flex-col justify-between rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 [@media(min-height:950px)]:p-8"
      >
        <div>
          <h3
            className="mb-3 text-xl font-bold text-white [@media(min-height:950px)]:text-2xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed text-neutral-300 [@media(min-height:950px)]:text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {description}
          </p>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <div className={jetbrainsMono.variable}>
      <section
        id="home"
        aria-label="Desarrollo de software a medida y diseño web B2B para empresas en Neuquén y el Alto Valle"
        className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black pt-14 [@media(min-height:950px)]:pt-24"
      >
        {/* Fondo: video full-bleed + overlay industrial */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-14 text-center sm:px-8 [@media(min-height:950px)]:py-24">
          {/* Kicker */}
          <motion.p
            className="mb-5 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300 sm:text-sm"
            style={{ fontFamily: "var(--font-mono)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LightningBolt className="h-4 w-4 shrink-0 drop-shadow-[0_0_6px_rgba(29,63,255,0.65)]" />
            Tecnología aplicada a tu negocio
          </motion.p>

          {/* H1 único del componente (sin duplicados mobile/desktop) */}
          <motion.h1
            className="mx-auto max-w-4xl text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl [@media(min-height:950px)]:text-6xl"
            style={{ fontFamily: "var(--font-titles)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Desarrollo de Software a Medida y{" "}
            <span className="text-primary-gradient bg-clip-text text-transparent">
              Diseño Web B2B
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Tecnología aplicada a tu negocio en Neuquén y el Alto Valle. Diseñamos plataformas para
            escalar tus ventas y construimos la infraestructura (CRM e IA) que ordena tu operación
            diaria.
          </motion.p>

          {/* Las dos puertas: Presencia Digital vs Software e IA */}
          <div className="mt-10 grid grid-cols-1 gap-5 text-left md:grid-cols-2 [@media(min-height:950px)]:mt-12">
            {doors.map((door, index) => (
              <DiscoveryCard key={door.title} index={index} {...door} />
            ))}
          </div>

          {/* CTA global principal */}
          <motion.div
            className="mt-10 flex justify-center [@media(min-height:950px)]:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center gap-3 rounded-sm border-2 border-white bg-primary-gradient px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 [@media(min-height:950px)]:py-4"
            >
              Pedir diagnóstico técnico
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
