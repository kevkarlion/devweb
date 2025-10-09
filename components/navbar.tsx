"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto - VERSIÓN MEJORADA
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      // Guardar el ancho del scrollbar para prevenir shifts
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* NAVBAR CORREGIDO */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#E9E9E9]/80 backdrop-blur-xl py-4"
            : "bg-transparent py-8"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ width: '100vw' }} // 👈 ASEGURAR ANCHO COMPLETO
      >
        {/* CONTENEDOR CON ANCHO DEFINIDO */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* LOGO */}
            <motion.a
              href="#home"
              className="font-[family-name:var(--font-inter-semibold)] text-xl text-[#121212] hover:text-[#121212]/80 transition-colors duration-300 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Devweb Patagonia
            </motion.a>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="font-[family-name:var(--font-inter-semibold)] text-[#121212]/70 hover:text-[#121212] transition-all duration-300 text-base relative whitespace-nowrap"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#121212]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA DESKTOP/TABLET */}
            <motion.div className="hidden md:block flex-shrink-0">
              <motion.a
                href="https://wa.me/5492984252859"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#121212] text-[#E9E9E9] font-[family-name:var(--font-inter-semibold)] text-sm rounded-full hover:bg-[#121212]/90 transition-all duration-300 inline-block"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(18,18,18,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Crea tu sitio web
              </motion.a>
            </motion.div>

            {/* BOTÓN HAMBURGER MÓVIL */}
            <motion.button
              className="md:hidden flex items-center justify-center w-10 h-10 relative z-[10000] flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {!isMenuOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 15, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="w-6 h-0.5 bg-[#121212] mb-1.5 block"></span>
                    <span className="w-6 h-0.5 bg-[#121212] mb-1.5 block"></span>
                    <span className="w-6 h-0.5 bg-[#121212] block"></span>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* MENÚ MÓVIL (sin cambios) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobileMenu"
            className="md:hidden fixed inset-0 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-[#E9E9E9]/90 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center z-[10001]"
            >
              <span className="absolute w-6 h-0.5 bg-[#121212] rotate-45 rounded"></span>
              <span className="absolute w-6 h-0.5 bg-[#121212] -rotate-45 rounded"></span>
            </button>

            <div className="relative z-10 h-full flex flex-col justify-start pt-20 px-6">
              <div className="flex flex-col space-y-5">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="font-[family-name:var(--font-inter-semibold)] text-xl text-[#121212]/80 hover:text-[#121212] transition-colors duration-200 py-1"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    whileHover={{ x: 8 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="https://wa.me/5492984252859"
                className="mt-8 px-5 py-2.5 bg-[#121212] text-[#E9E9E9] font-[family-name:var(--font-inter-semibold)] text-sm rounded-full hover:bg-[#121212]/90 transition-all duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.03 }}
              >
                Crea tu sitio web
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}