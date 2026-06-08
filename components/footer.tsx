"use client"

import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa"
import { MdEmail, MdLocationOn } from "react-icons/md"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUp } from "lucide-react"

const services = [
  { name: "Desarrollo Web", href: "/#servicios" },
  { name: "Ecommerce", href: "/#servicios" },
  { name: "Sistemas de Gestión", href: "/#sistemas" },
  { name: "Dashboards", href: "/#sistemas" },
  { name: "CRM a Medida", href: "/#sistemas" },
  { name: "SEO", href: "/#servicios" },
]

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Contacto", href: "/#contacto" },
]

const contactInfo = [
  {
    icon: FaWhatsapp,
    label: "+54 9 298 425-2859",
    href: "https://wa.me/5492984252859",
    color: "hover:text-[#25D366]",
  },
  {
    icon: MdEmail,
    label: "devwebpatagonia@gmail.com",
    href: "mailto:devwebpatagonia@gmail.com",
    color: "hover:text-sky",
  },
  {
    icon: MdLocationOn,
    label: "General Roca, Río Negro",
    href: "https://maps.google.com/?q=General+Roca+Río+Negro",
    color: "hover:text-coral",
  },
]

const socialLinks = [
  { icon: FaWhatsapp, href: "https://wa.me/5492984252859", color: "hover:text-[#25D366]" },
  { icon: FaInstagram, href: "https://www.instagram.com/devwebpatagonia/", color: "hover:text-[#E1306C]" },
  { icon: FaGithub, href: "https://github.com/kevkarlion", color: "hover:text-white" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.footer
      className="w-full bg-neutral-950 border-t border-[#434343] relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-gradient border border-white/20 shadow-lg hover:scale-110 transition-all duration-300"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Volver al inicio"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </motion.button>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* Grid principal - 4 columnas en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand */}
          <motion.div
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/logo-new-white.png"
              alt="DevWeb Patagonia"
              width={56}
              height={56}
              className="object-contain mb-4"
            />
            <p
              className="text-neutral-400 text-sm leading-relaxed mb-5 max-w-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Agencia de desarrollo web y software en la Patagonia. Creamos
              soluciones digitales que impulsan tu negocio.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={`Ir a ${social.href}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Servicios */}
          <motion.div
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="text-sm font-bold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Navegación */}
          <motion.div
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4
              className="text-sm font-bold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contacto */}
          <motion.div
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4
              className="text-sm font-bold text-white uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-sm text-neutral-400 transition-colors duration-200 ${item.color}`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-xs text-neutral-500 text-center md:text-left"
              style={{ fontFamily: "var(--font-body)" }}
            >
              © {new Date().getFullYear()} DevWeb Patagonia — Gestión Digital.
              Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/blog"
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Blog
              </a>
              <span className="text-neutral-600 text-xs">|</span>
              <a
                href="https://wa.me/5492984252859"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Soporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
