"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // Establecer el estado inicial de scroll inmediatamente
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contacto", href: "#contacto" },
  ];

  // Estilos base para evitar FOUC (Flash of Unstyled Content)
  const baseNavStyles = {
    background: "linear-gradient(90deg, rgba(255,183,178,0.18) 0%, rgba(185,200,245,0.18) 100%)",
    backdropFilter: "blur(18px) saturate(160%)",
    WebkitBackdropFilter: "blur(18px) saturate(160%)",
    borderBottom: "none",
    boxShadow: "none",
  };

  const scrolledNavStyles = {
    background: "linear-gradient(90deg, rgba(255,183,178,0.12) 0%, rgba(185,200,245,0.12) 100%)",
    backdropFilter: "blur(18px) saturate(160%)",
    WebkitBackdropFilter: "blur(18px) saturate(160%)",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 4px 30px rgba(0,0,0,0.25)",
  };

  return (
    <>
      {/* NAVBAR PRINCIPAL */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-1000 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
        style={isScrolled ? scrolledNavStyles : baseNavStyles}
        initial={isMounted ? { y: -60, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94],
          opacity: { duration: 0.4 }
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <motion.a
            href="#home"
            className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-[#FFB7B2] via-[#B9C8F5] to-white bg-clip-text text-transparent drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            devweb <span className="uppercase font-semibold">Patagonia</span>
          </motion.a>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-white/80 hover:text-white text-base font-medium transition-colors duration-300"
                whileHover={{ y: -2 }}
                initial={isMounted ? { opacity: 0, y: -10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: isMounted ? 0.1 + index * 0.05 : 0,
                  duration: 0.4,
                  ease: "easeOut"
                }}
              >
                {item.name}
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#FFB7B2] to-[#B9C8F5]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}

            {/* CTA */}
            <motion.a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold text-black bg-linear-to-r from-[#FFB7B2] to-[#B9C8F5] shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={isMounted ? { opacity: 0, scale: 0.9 } : false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: isMounted ? 0.3 : 0,
                duration: 0.4 
              }}
            >
              Crea tu sitio web
            </motion.a>
          </div>

          {/* BOTÓN HAMBURGER */}
          <motion.button
            className="md:hidden flex flex-col justify-between w-7 h-5 relative z-1001"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            initial={isMounted ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            transition={{ delay: isMounted ? 0.2 : 0 }}
          >
            <motion.span
              className="block h-0.5 bg-white rounded"
              animate={{ 
                rotate: isMenuOpen ? 45 : 0, 
                y: isMenuOpen ? 8 : 0,
                width: isMenuOpen ? "100%" : "100%"
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
            />
            <motion.span
              className="block h-0.5 bg-white rounded"
              animate={{ 
                opacity: isMenuOpen ? 0 : 1,
                scale: isMenuOpen ? 0 : 1
              }}
              transition={{ 
                duration: 0.2,
                ease: "easeInOut"
              }}
            />
            <motion.span
              className="block h-0.5 bg-white rounded"
              animate={{ 
                rotate: isMenuOpen ? -45 : 0, 
                y: isMenuOpen ? -8 : 0,
                width: isMenuOpen ? "100%" : "100%"
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* MENÚ MOBILE */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-999 flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.25,
              ease: "easeInOut"
            }}
            style={{
              background: "radial-gradient(circle at top right, rgba(185,200,245,0.25), rgba(0,0,0,0.85) 70%)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
            }}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white text-2xl font-semibold hover:text-[#B9C8F5] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.3,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 rounded-full bg-linear-to-r from-[#FFB7B2] to-[#B9C8F5] text-black font-semibold shadow-lg"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                delay: menuItems.length * 0.05,
                duration: 0.3
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Crea tu sitio web
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}