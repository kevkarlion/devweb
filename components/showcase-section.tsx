"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCards,
  Navigation,
  Pagination,
  Keyboard,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

const SLIDE_CARD =
  "aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-md";

const MONO = { fontFamily: "var(--font-mono)" };
const BODY = { fontFamily: "var(--font-body)" };

const ImageSlide = ({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) => (
  <div className="relative h-full w-full">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, 448px"
      quality={90}
      className="object-cover"
      priority={false}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-5">
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-200"
        style={MONO}
      >
        {label}
      </p>
    </div>
  </div>
);

function BlockCarousel({
  idSuffix,
  slides,
}: {
  idSuffix: string;
  slides: ReactNode;
}) {
  const prevClass = `showcase-prev-${idSuffix}`;
  const nextClass = `showcase-next-${idSuffix}`;

  return (
    <div className="relative w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-gradient opacity-20 blur-3xl" />
      </div>

      <Swiper
        modules={[EffectCards, Navigation, Pagination, Keyboard, A11y]}
        effect="cards"
        grabCursor
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}" role="button" tabindex="0" aria-label="Ir a la diapositiva ${index + 1}"></span>`,
        }}
        className="showcase-swiper relative z-10 mx-auto w-full max-w-md"
      >
        {slides}
      </Swiper>

      <div className="relative z-10 mt-9 flex items-center justify-center gap-4">
        <button
          type="button"
          className={`showcase-nav-btn ${prevClass} rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20`}
          aria-label="Anterior diapositiva"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className={`showcase-nav-btn ${nextClass} rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20`}
          aria-label="Siguiente diapositiva"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function ShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blocks = [
    {
      id: "web",
      title: "Webs corporativas, landing pages y SEO técnico",
      description:
        "Sitios desarrollados en Next.js para carga instantánea (< 1s), optimizados para celulares y estructurados para posicionar tu marca en Neuquén y el Alto Valle.",
      slides: [
        <SwiperSlide key="web-1" className={SLIDE_CARD}>
          <ImageSlide
            src="/web-1.webp"
            alt="Proyecto web desarrollado por DevWeb Patagonia"
            label="Proyecto Web 1"
          />
        </SwiperSlide>,
        <SwiperSlide key="web-2" className={SLIDE_CARD}>
          <ImageSlide
            src="/web-2.webp"
            alt="Proyecto web desarrollado por DevWeb Patagonia"
            label="Proyecto Web 2"
          />
        </SwiperSlide>,
        <SwiperSlide key="web-3" className={SLIDE_CARD}>
          <ImageSlide
            src="/web-3.webp"
            alt="Proyecto web desarrollado por DevWeb Patagonia"
            label="Proyecto Web 3"
          />
        </SwiperSlide>,
      ],
    },
    {
      id: "software",
      title: "CRMs, dashboards de control e integración de IA",
      description:
        "Sistemas a medida que centralizan la gestión de ventas, automatizan la pre-calificación de cotizaciones por WhatsApp y muestran el estado de tu operación en vivo.",
      slides: [
        <SwiperSlide key="crm-1" className={SLIDE_CARD}>
          <ImageSlide
            src="/crm-1.webp"
            alt="Sistema de gestión desarrollado por DevWeb Patagonia"
            label="Proyecto CRM 1"
          />
        </SwiperSlide>,
        <SwiperSlide key="crm-2" className={SLIDE_CARD}>
          <ImageSlide
            src="/crm-2.webp"
            alt="Sistema de gestión desarrollado por DevWeb Patagonia"
            label="Proyecto CRM 2"
          />
        </SwiperSlide>,
        <SwiperSlide key="crm-3" className={SLIDE_CARD}>
          <ImageSlide
            src="/crm-3.webp"
            alt="Sistema de gestión desarrollado por DevWeb Patagonia"
            label="Proyecto CRM 3"
          />
        </SwiperSlide>,
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="tecnologia"
      className="relative w-full overflow-x-clip bg-neutral-950"
    >
      <div className="relative z-10 px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-6xl flex-col justify-center">
          <motion.h2
            className="mx-auto max-w-4xl text-center text-4xl font-bold leading-[0.95] bg-clip-text text-transparent text-mobile-gradient lg:text-primary-gradient md:text-5xl"
            style={{ fontFamily: "var(--font-titles)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tecnología en acción: así operan nuestras soluciones en tiempo real
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-center text-base font-light leading-relaxed text-neutral-300 md:text-lg"
            style={BODY}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Desde sitios web B2B de ultra-alta velocidad hasta paneles de control
            integrados con IA para la industria.
          </motion.p>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
            {blocks.map((block, index) => (
              <motion.div
                key={block.id}
                className="flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
              >
                <h3
                  className="text-xl font-bold text-white md:text-2xl"
                  style={{ fontFamily: "var(--font-titles)" }}
                >
                  {block.title}
                </h3>
                <p
                  className="mt-4 text-sm leading-relaxed text-neutral-300 md:text-base"
                  style={BODY}
                >
                  {block.description}
                </p>

                <div className="mt-10">
                  <BlockCarousel idSuffix={block.id} slides={block.slides} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .showcase-swiper {
          overflow: visible;
        }
        /* Swiper's .swiper-slide { height: 100% } fights the aspect-video
           utility (CSS import order), collapsing the cards. Force height:auto
           so the aspect-ratio defines the card box. */
        .showcase-swiper .swiper-slide {
          border-radius: 1rem;
          height: auto;
        }
        .showcase-swiper .swiper-pagination {
          position: static;
          margin-top: 1.5rem;
        }
        .showcase-swiper .swiper-pagination-bullet {
          height: 0.5rem;
          width: 0.5rem;
          margin: 0 0.25rem;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .showcase-swiper .swiper-pagination-bullet-active {
          width: 1.25rem;
          border-radius: 9999px;
          background: #ffffff;
        }
        .showcase-nav-btn.swiper-button-disabled {
          opacity: 0.4;
          cursor: default;
        }
      `}</style>
    </section>
  );
}
