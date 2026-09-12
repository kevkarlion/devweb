"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";
import { ChevronDown, X } from "lucide-react";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

type NavItem = { name: string; href: string };
type NavSection = {
  name: string;
  hub: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    name: "Soluciones",
    hub: "/soluciones",
    items: [
      { name: "Software a medida", href: "/soluciones/software-a-medida" },
      { name: "CRM para empresas de servicios", href: "/soluciones/crm-para-empresas-de-servicios" },
      { name: "Automatización con IA", href: "/soluciones/automatizacion-con-ia" },
      { name: "Dashboards y portales de clientes", href: "/soluciones/dashboards-y-portales-de-clientes" },
      { name: "Desarrollo web B2B", href: "/soluciones/desarrollo-web-b2b" },
    ],
  },
  {
    name: "Industrias",
    hub: "/industrias",
    items: [
      { name: "Oil & Gas", href: "/industrias/oil-gas" },
      { name: "Logística y transporte", href: "/industrias/logistica-y-transporte" },
      { name: "Agroindustria", href: "/industrias/agroindustria" },
      { name: "Instalaciones industriales", href: "/industrias/instalaciones-industriales" },
    ],
  },
  {
    name: "Localidades",
    hub: "/localidades",
    items: [
      { name: "Neuquén", href: "/localidades/neuquen" },
      { name: "Cipolletti", href: "/localidades/cipolletti" },
      { name: "General Roca", href: "/localidades/general-roca" },
      { name: "Villa Regina", href: "/localidades/villa-regina" },
      { name: "Allen", href: "/localidades/allen" },
      { name: "Añelo · Vaca Muerta", href: "/localidades/anelo-vaca-muerta" },
    ],
  },
];

const simpleItems: NavItem[] = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Contacto", href: "/#contacto" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock: cuando el drawer mobile está abierto, el fondo no debe moverse detrás.
  useEffect(() => {
    if (!isMounted) return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isMounted]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    // Pequeño delay para que el cierre del drawer no se sienta brusco
    setTimeout(() => setOpenSection(null), 350);
  };

  const toggleSection = (name: string) => {
    setOpenSection((prev) => (prev === name ? null : name));
  };

  const baseNavStyles = {
    background: "rgba(8, 10, 16, 0.65)",
    backdropFilter: "blur(12px) saturate(140%)",
    WebkitBackdropFilter: "blur(12px) saturate(140%)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.4)",
  };

  const scrolledNavStyles = {
    background: "rgba(4, 6, 10, 0.85)",
    backdropFilter: "blur(14px) saturate(150%)",
    WebkitBackdropFilter: "blur(14px) saturate(150%)",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
  };

  // Con el menú abierto el nav queda tapado por el scrim: desactivar el blur evita
  // doble backdrop-filter (nav + scrim + video hero) → menos jank de paint en mobile.
  const navStyle = isMenuOpen
    ? {
        ...(isScrolled ? scrolledNavStyles : baseNavStyles),
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
      }
    : isScrolled
      ? scrolledNavStyles
      : baseNavStyles;

  const linkClasses = `relative text-sm uppercase font-medium text-gray-300 hover:text-white transition-colors duration-300 ${jetbrainsMono.variable}`;

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-1000 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
        style={navStyle}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO - Imagen siempre a la izquierda */}
          <motion.a
            href="/"
            className="flex items-center shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Image
              src="/logo-new-white.png"
              alt="Devweb Patagonia"
              width={100}
              height={79}
              className="h-10 md:h-11 w-auto object-contain"
              priority
            />
          </motion.a>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {/* Silos con dropdown */}
            {navSections.map((section) => (
              <div key={section.name} className="relative group">
                <a
                  href={section.hub}
                  className={`${linkClasses} inline-flex items-center gap-1`}
                >
                  {section.name}
                  <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-300 group-hover:rotate-180" />
                </a>
                {/* Panel dropdown */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block">
                  <div className="w-64 rounded-md border border-white/10 bg-[#0B0F1A]/95 backdrop-blur-xl shadow-2xl py-2">
                    <a
                      href={section.hub}
                      className="block px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/5"
                    >
                      Ver todas · {section.name}
                    </a>
                    <div className="h-px bg-white/10 my-1" />
                    {section.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Links simples */}
            {simpleItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${linkClasses} ${item.name === "Nosotros" ? "hidden lg:inline-block" : ""}`}
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-px bg-white"
                  whileHover={{ width: "100%" }}
                />
              </a>
            ))}

            <motion.a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#B9C8F5] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Potenciar mi marca
            </motion.a>
          </div>

          {/* BOTÓN HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-[1100] relative touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <motion.span 
              className="w-8 h-0.5 bg-white rounded-full" 
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            />
            <motion.span 
              className="w-8 h-0.5 bg-white rounded-full" 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span 
              className="w-8 h-0.5 bg-white rounded-full" 
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* MENÚ MOBILE - Drawer lateral con acordeones */}
      {/* AnimatePresence requires direct children with keys (no fragment) para que el exit corra. */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="scrim"
            className="fixed inset-0 z-[1101] bg-black/60 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
        {isMenuOpen && (
          <motion.div
            key="drawer"
            className="fixed top-0 right-0 h-full w-[86%] max-w-sm z-[1102] bg-[#0B0F1A] border-l border-white/10 flex flex-col md:hidden select-none"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
            style={{ willChange: "transform" }}
            role="dialog"
            aria-label="Menú de navegación"
          >
            {/* Header del drawer */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
              <span
                className="text-sm font-bold uppercase tracking-widest text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Menú
              </span>
              <button
                onClick={closeMenu}
                className="p-2 -mr-2 text-gray-400 hover:text-white transition-colors touch-manipulation"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido scrolleable */}
            <div className="flex-1 overflow-y-auto px-5 py-2 overscroll-contain">
              {/* Inicio */}
              <a
                href="/"
                onClick={closeMenu}
                className="block py-3.5 text-base font-bold text-white uppercase tracking-tight border-b border-white/5"
              >
                Inicio
              </a>

              {/* Silos como acordeones */}
              {navSections.map((section) => {
                const isOpen = openSection === section.name;
                return (
                  <div key={section.name} className="border-b border-white/5">
                    <button
                      onClick={() => toggleSection(section.name)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between py-3.5 text-base font-bold text-white uppercase tracking-tight touch-manipulation"
                    >
                      {section.name}
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.2, ease: "easeOut" },
                            opacity: { duration: 0.15 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 pl-4 border-l border-white/10 ml-2">
                            <a
                              href={section.hub}
                              onClick={closeMenu}
                              className="block py-2 text-xs font-bold uppercase tracking-widest text-[#B9C8F5] touch-manipulation"
                            >
                              Ver todas · {section.name}
                            </a>
                            {section.items.map((item) => (
                              <a
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className="block py-2 text-sm text-gray-400 hover:text-white transition-colors touch-manipulation"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Links simples restantes */}
              {simpleItems
                .filter((item) => item.name !== "Inicio")
                .map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-3.5 text-base font-bold text-white uppercase tracking-tight border-b border-white/5 touch-manipulation"
                  >
                    {item.name}
                  </a>
                ))}
            </div>

            {/* CTA fijo */}
            <div className="p-5 border-t border-white/10 shrink-0">
              <a
                href="https://wa.me/5492984252859"
                className="block w-full px-6 py-3.5 bg-white text-black font-bold uppercase text-xs tracking-widest text-center touch-manipulation"
              >
                Comenzar ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}