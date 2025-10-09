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

  // Bloquear scroll optimizado
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.dataset.scrollY = window.scrollY.toString();
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      if (document.body.dataset.scrollY) {
        window.scrollTo(0, parseInt(document.body.dataset.scrollY));
      }
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-[#E9E9E9]/80 backdrop-blur-xl py-4"
            : "bg-transparent px-4 py-8"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          WebkitBackfaceVisibility: "hidden",
          WebkitTransform: "translateZ(0)",
        }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <motion.a
              href="#home"
              className="font-[family-name:var(--font-inter-semibold)] text-xl text-[#121212] hover:text-[#121212]/80 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Devweb Patagonia
            </motion.a>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="font-[family-name:var(--font-inter-semibold)] text-[#121212]/70 hover:text-[#121212] transition-all duration-300 text-base relative"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#121212]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA DESKTOP */}
            <motion.div className="hidden md:block">
              <motion.a
                href="https://wa.me/5492984252859"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#121212] text-[#E9E9E9] font-[family-name:var(--font-inter-semibold)] text-sm rounded-full hover:bg-[#121212]/90 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(18,18,18,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Crea tu sitio web
              </motion.a>
            </motion.div>

            {/* BOTÓN HAMBURGER */}
            {/* BOTÓN HAMBURGER / X con morph suave */}
<motion.button
  className="md:hidden flex items-center justify-center w-10 h-10 relative z-[10000]"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  whileTap={{ scale: 0.9 }}
  style={{ WebkitTapHighlightColor: "transparent" }}
>
  <div className="relative w-6 h-5 flex flex-col justify-between">
    {/* Línea superior */}
    <motion.span
      className="absolute top-0 left-0 w-6 h-0.5 bg-[#121212] rounded"
      animate={{
        rotate: isMenuOpen ? 45 : 0,
        y: isMenuOpen ? 8 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    />

    {/* Línea del medio */}
    <motion.span
      className="absolute top-[8px] left-0 w-6 h-0.5 bg-[#121212] rounded"
      animate={{
        opacity: isMenuOpen ? 0 : 1,
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    />

    {/* Línea inferior */}
    <motion.span
      className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#121212] rounded"
      animate={{
        rotate: isMenuOpen ? -45 : 0,
        y: isMenuOpen ? -8 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    />
  </div>
</motion.button>

          </div>
        </div>
      </motion.nav>

      {/* MENÚ MÓVIL */}
      <AnimatePresence mode="sync" initial={false}>
        {isMenuOpen && (
          <motion.div
            key="mobileMenu"
            className="md:hidden fixed inset-0 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              WebkitBackfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-[#E9E9E9]/90 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            />

            {/* BOTÓN X */}
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center z-[10001]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="absolute w-6 h-0.5 bg-[#121212] rotate-45 rounded"></span>
              <span className="absolute w-6 h-0.5 bg-[#121212] -rotate-45 rounded"></span>
            </motion.button>

            {/* Contenido */}
            <div className="relative z-10 h-full flex flex-col justify-start pt-20 px-6">
              <div className="flex flex-col space-y-5">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-[family-name:var(--font-inter-semibold)] text-xl text-[#121212]/80 hover:text-[#121212] transition-colors duration-200 py-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* CTA MOBILE */}
              <motion.a
                href="https://wa.me/5492984252859"
                className="mt-8 px-5 py-2.5 bg-[#121212] text-[#E9E9E9] font-[family-name:var(--font-inter-semibold)] text-sm rounded-full hover:bg-[#121212]/90 transition-all duration-200 text-center block max-w-xs mx-auto"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
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
