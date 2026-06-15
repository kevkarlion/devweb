"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Software a medida", href: "/#sistemas" },
    { name: "Proyectos", href: "/#portfolio" },
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Metodología", href: "/#metodo" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/#contacto" },
  ];

  const baseNavStyles = {
    background: "transparent",
    backdropFilter: "none",
    borderBottom: "1px solid rgba(255,255,255,0)",
  };

  const scrolledNavStyles = {
    background: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-1000 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
        style={isScrolled ? scrolledNavStyles : baseNavStyles}

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
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm uppercase font-medium text-gray-300 hover:text-white transition-colors duration-300 ${jetbrainsMono.variable}`}
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
            className="md:hidden flex flex-col gap-1.5 z-1001"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* MENÚ MOBILE - Full screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-999 bg-black flex flex-col items-center justify-center"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <div className="flex flex-col gap-8 text-center">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-bold text-white uppercase tracking-tighter hover:text-gray-400"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/5492984252859"
                className="mt-4 px-8 py-4 bg-white text-black font-bold uppercase text-sm tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Comenzar ahora
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
