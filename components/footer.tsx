"use client"

import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <div className="bg-black border-t-2 border-[#E9E9E9]/10"> {/* Contenedor con fondo fijo */}
      <motion.footer
        className="bg-black text-[#E9E9E9] py-12 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0">

          {/* Izquierda: Logo + descripción */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 md:gap-4">
            <Image
              src="/logo-blanco.png"
              alt="Devweb Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <p className="text-white text-base max-w-xs">
              Creando experiencias digitales que potencian tu marca.
            </p>
          </div>

          {/* Línea divisoria izquierda */}
          <div className="hidden md:block border-l border-[#E9E9E9]/10 h-16"></div>

          {/* Centro: Navegación */}
          <div className="flex flex-col items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#E9E9E9] transition-colors duration-300 text-base"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Línea divisoria derecha */}
          <div className="hidden md:block border-l border-[#E9E9E9]/10 h-16"></div>

          {/* Derecha: Redes sociales */}
          <div className="flex items-center gap-6 text-2xl">
            <a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#25D366] transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/devwebpatagonia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E1306C] transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Divider horizontal */}
        <div className="border-t border-[#E9E9E9]/10 mt-8"></div>

        {/* Copyright */}
        <p className="text-sm text-[#E9E9E9]/50 mt-4 text-center">
          © 2025 Devweb. Todos los derechos reservados.
        </p>
      </motion.footer>
    </div>
  )
}