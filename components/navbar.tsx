"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* NAVBAR PRINCIPAL */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
        style={{
          background: isScrolled
            ? "linear-gradient(90deg, rgba(255,183,178,0.12) 0%, rgba(185,200,245,0.12) 100%)"
            : "linear-gradient(90deg, rgba(255,183,178,0.18) 0%, rgba(185,200,245,0.18) 100%)",
          backdropFilter: "blur(18px) saturate(160%)",
          WebkitBackdropFilter: "blur(18px) saturate(160%)",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.2)" : "none",
          boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.25)" : "none",
          willChange: "transform, opacity",
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <motion.a
            href="#home"
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#FFB7B2] via-[#B9C8F5] to-white bg-clip-text text-transparent drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            devweb <span className="uppercase font-semibold">Patagonia</span>
          </motion.a>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-white/80 hover:text-white text-base font-medium transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#FFB7B2] to-[#B9C8F5]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            {/* CTA */}
            <motion.a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-[#FFB7B2] to-[#B9C8F5] shadow-md hover:scale-105 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              Crea tu sitio web
            </motion.a>
          </div>

          {/* BOTÓN HAMBURGER */}
          <motion.button
            className="md:hidden flex flex-col justify-between w-7 h-5 relative z-[1001]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="block h-0.5 bg-white rounded"
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 bg-white rounded"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 bg-white rounded"
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* MENÚ MOBILE */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center space-y-8 will-change-transform will-change-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background:
                "radial-gradient(circle at top right, rgba(185,200,245,0.25), rgba(0,0,0,0.85) 70%)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
            }}
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white text-2xl font-semibold hover:text-[#B9C8F5] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://wa.me/5492984252859"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#FFB7B2] to-[#B9C8F5] text-black font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Crea tu sitio web
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
