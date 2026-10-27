"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

const BODY = { fontFamily: "var(--font-body)" };

const WHATSAPP_URL =
  "https://wa.me/5492984252859?text=Hola%20Devweb%2C%20quiero%20llevar%20mi%20empresa%20al%20siguiente%20nivel.";

const BRANDS = [
  {
    src: "/logos-marcas/riquelme-propiedades.webp",
    name: "Riquelme Propiedades",
    width: 256,
    height: 122,
  },
  {
    src: "/logos-marcas/la-negra-unas.webp",
    name: "La Negra Uñas",
    width: 480,
    height: 229,
  },
  {
    src: "/logos-marcas/ngurui-marketing.webp",
    name: "Ngurüi Marketing & Publicidad",
    width: 480,
    height: 204,
  },
  {
    src: "/logos-marcas/rolo-climatizacion.webp",
    name: "Rolo Climatización",
    width: 480,
    height: 116,
  },
  {
    src: "/logos-marcas/casa-de-la-cultura.webp",
    name: "Casa de la Cultura Asociación Civil",
    width: 480,
    height: 272,
  },
  {
    src: "/logos-marcas/techno-store.webp",
    name: "Techno Store",
    width: 280,
    height: 112,
  },
];

function BrandRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      role="list"
      aria-hidden={hidden || undefined}
    >
      {BRANDS.map((brand) => (
        <div
          key={brand.src}
          role="listitem"
          className="mr-10 flex h-16 w-44 items-center justify-center rounded-xl px-3 transition-colors duration-300 hover:bg-white/5 md:h-20 md:w-52"
        >
          <Image
            src={brand.src}
            alt={brand.name}
            width={brand.width}
            height={brand.height}
            className="max-h-full w-auto max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
            priority={false}
          />
        </div>
      ))}
    </div>
  );
}

export function BrandsMarquee() {
  return (
    <section
      id="marcas"
      aria-label="Marcas con las que trabajamos"
      className="w-full bg-neutral-950 px-6 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-center text-2xl font-bold text-white md:text-3xl"
          style={{ fontFamily: "var(--font-titles)" }}
        >
          Marcas con las que trabajamos
        </h2>
        <p
          className="mx-auto mt-3 max-w-xl text-center text-sm font-light leading-relaxed text-neutral-400 md:text-base"
          style={BODY}
        >
          Empresas de la región que ya operan con software, diseño web e
          inteligencia artificial de Devweb.
        </p>

        <div className="relative mt-10 overflow-hidden">
          <div className="brands-marquee flex w-max">
            <BrandRow />
            <BrandRow hidden />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex max-w-2xl items-center gap-3 rounded-full bg-primary-gradient px-7 py-3.5 text-center text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] md:text-base"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            Contáctanos para llevar a tu empresa al siguiente nivel
          </a>
        </div>
      </div>

      <style jsx global>{`
        .brands-marquee {
          animation: brands-marquee-scroll 38s linear infinite;
        }
        .brands-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes brands-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .brands-marquee {
            animation: none;
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
          .brands-marquee > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
