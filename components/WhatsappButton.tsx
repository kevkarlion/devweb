"use client"

import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

export function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/5492984252859"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <FaWhatsapp className="w-8 h-8" />
    </motion.a>
  )
}
