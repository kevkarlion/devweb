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
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? "py-4 border-b border-white/20"
            : "px-4 py-6"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          WebkitBackfaceVisibility: "hidden",
          WebkitTransform: "translateZ(0)",
          backdropFilter: isScrolled ? "blur(20px) saturate(200%)" : "blur(16px) saturate(180%)",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.20)",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.25)" : "none",
          boxShadow: isScrolled ? "0 4px 20px -4px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <motion.a
              href="#home"
              className="font-[family-name:var(--font-inter-semibold)] text-xl text-black hover:text-white/90 transition-colors duration-300 drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-bold">devweb</span> <span className="uppercase font-semibold">Patagonia</span>
            </motion.a>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="font-[family-name:var(--font-inter-semibold)] text-black hover:text-white transition-all duration-300 text-base relative drop-shadow-md"
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
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white"
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
                className="px-5 py-2.5 bg-white text-[#121212] font-[family-name:var(--font-inter-semibold)] text-sm rounded-full hover:bg-transparent hover:text-white border border-white transition-all duration-300 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(255,255,255,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Crea tu sitio web
              </motion.a>
            </motion.div>

            {/* BOTÓN HAMBURGER */}
            <motion.button
              className="md:hidden flex items-center justify-center w-10 h-10 relative z-[10000]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="absolute top-0 left-0 w-6 h-0.5 bg-white rounded drop-shadow-md"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute top-[8px] left-0 w-6 h-0.5 bg-white rounded drop-shadow-md"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 w-6 h-0.5 bg-white rounded drop-shadow-md"
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
            {/* Fondo esmerilado con buen contraste */}
            <motion.div
              className="absolute inset-0"
              style={{
                backdropFilter: "blur(25px) saturate(200%)",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                WebkitBackdropFilter: "blur(25px) saturate(200%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            />

            {/* BOTÓN X */}
            <motion.button
              onClick={handleCloseMenu}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center z-[10001] bg-white/20 rounded-full backdrop-blur-sm border border-white/30 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="absolute w-4 h-0.5 bg-white rotate-45 rounded"></span>
              <span className="absolute w-4 h-0.5 bg-white -rotate-45 rounded"></span>
            </motion.button>

            {/* Contenido */}
            <div className="relative z-10 h-full flex flex-col justify-start pt-20 px-6">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={handleNavigation}
                    className="font-[family-name:var(--font-inter-semibold)] text-lg text-white/90 hover:text-white transition-colors duration-200 py-4 px-4 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20 drop-shadow-lg"
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
                className="mt-8 px-5 py-3 bg-white text-[#121212] font-[family-name:var(--font-inter-semibold)] text-sm rounded-full hover:bg-transparent hover:text-white border border-white transition-all duration-200 text-center block max-w-xs mx-auto shadow-lg"
                onClick={handleNavigation}
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