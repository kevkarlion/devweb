// components/SocialStrip.jsx
"use client";

import { motion } from "framer-motion";
import { Github, Instagram, MessageCircle } from "lucide-react";

export function SocialStrip() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/kevkarlion",
      label: "Visita mi GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/devwebpatagonia?igsh=Mm50aHFlZjlmaTRy&utm_source=qr",
      label: "Sígueme en Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/5492984252859",
      label: "Contáctame por WhatsApp",
      color: "hover:text-green-500"
    }
  ];

  return (
    <motion.div
      className="w-full bg-black border-t border-b border-white/10 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Texto descriptivo */}
          <motion.p
            className="text-sm text-white/60 text-center sm:text-left"
            style={{ fontFamily: "var(--font-inter)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Sígueme en mis redes y contáctame para tu proyecto web
          </motion.p>
          
          {/* Iconos de redes sociales */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`text-white/70 transition-all duration-300 transform hover:scale-110 ${social.color} group`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
                {/* Tooltip sutil */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}