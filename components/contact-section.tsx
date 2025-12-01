"use client"

import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Alfa_Slab_One, Inter } from "next/font/google"

// Fuentes
const afaScrubOne = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-afa-scrub-one",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

interface FormData {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState<FormData>({ 
    name: "", 
    email: "", 
    message: "" 
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // Leer respuesta una sola vez
      const responseText = await res.text()
      
      if (!res.ok) {
        let errorMessage = `Error del servidor (${res.status})`
        
        try {
          const errorData = JSON.parse(responseText)
          errorMessage = errorData.error || errorMessage
        } catch {
          errorMessage = responseText || errorMessage
        }
        
        throw new Error(errorMessage)
      }

      // Procesar respuesta exitosa
      const data = JSON.parse(responseText)

      setSubmitStatus({
        type: 'success',
        message: data.message || '¡Mensaje enviado correctamente! Te contactaremos pronto.'
      })
      
      // Limpiar formulario
      setFormData({ name: "", email: "", message: "" })

    } catch (err: any) {
      console.error("Error enviando formulario:", err)
      
      let errorMessage = err.message || 'Error inesperado al enviar el mensaje'
      
      // Mensajes amigables
      if (err.message.includes('Failed to fetch')) {
        errorMessage = 'Error de conexión. Verificá tu internet e intentá nuevamente.'
      } else if (err.message.includes('500')) {
        errorMessage = 'Error del servidor. Por favor intentá más tarde.'
      }

      setSubmitStatus({
        type: 'error',
        message: errorMessage
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpiar mensaje de error al escribir
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  return (
    <section ref={ref} id="contacto" className={`${afaScrubOne.variable} ${inter.variable} w-full bg-black py-24 md:py-32 px-6 relative overflow-hidden border-t border-[#434343]`}>
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="flex flex-col justify-center items-center text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[0.9] tracking-normal bg-clip-text text-transparent text-center text-mobile-gradient lg:text-primary-gradient mb-4 mt-16 uppercase"
            style={{
              fontFamily: "var(--font-afa-scrub-one)",
            }}
          >
            HABLEMOS <br /> DE TU PROYECTO
          </motion.h1>

          <div className="flex justify-center self-center items-center border-2 border-white w-[50%] md:w-[32%] lg:w-[18%] mb-8"></div>

          <p 
            className="font-['Inter'] text-lg text-white/90 leading-relaxed tracking-wide text-center max-w-2xl mx-auto mt-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            ¿Tenés un proyecto de diseño web o desarrollo de sitio profesional? Contanos tu idea y juntos vamos a crear una experiencia digital que potencie tu marca y atraiga clientes.
          </p>
        </motion.div>

        {/* Mensaje de estado */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full max-w-2xl p-4 rounded-lg mb-6 text-center border ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {submitStatus.message}
          </motion.div>
        )}

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label 
              htmlFor="name" 
              className="block font-['Inter'] font-medium text-sm text-white/80 mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-[#0D0D0D] border border-[#434343] rounded-lg text-white font-['Inter'] text-base focus:border-white focus:outline-none transition-all duration-300 placeholder:text-white/40"
              style={{ fontFamily: "var(--font-inter)" }}
              required
              disabled={loading}
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block font-['Inter'] font-medium text-sm text-white/80 mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-[#0D0D0D] border border-[#434343] rounded-lg text-white font-['Inter'] text-base focus:border-white focus:outline-none transition-all duration-300 placeholder:text-white/40"
              style={{ fontFamily: "var(--font-inter)" }}
              required
              disabled={loading}
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block font-['Inter'] font-medium text-sm text-white/80 mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Contanos tu idea o proyecto..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-6 py-4 bg-[#0D0D0D] border border-[#434343] rounded-lg text-white font-['Inter'] text-base focus:border-white focus:outline-none transition-all duration-300 resize-none placeholder:text-white/40"
              style={{ fontFamily: "var(--font-inter)" }}
              required
              disabled={loading}
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full max-w-md mx-auto flex items-center justify-center gap-3 px-8 py-4 hover:scale-105 transition-all duration-300 shadow-2xl font-bold text-lg group relative ${
              loading ? "cursor-not-allowed" : ""
            }`}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            style={{
              fontFamily: "var(--font-inter)",
            }}
          >
            {/* Fondo con gradiente */}
            <div className={`absolute inset-0 rounded-lg border-2 border-white transition-all duration-300 ${
              loading ? "bg-gray-500" : "bg-primary-gradient"
            }`} />

            {/* Contenido */}
            {loading ? (
              <span className="relative z-10 text-white text-center flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Enviando...
              </span>
            ) : (
              <>
                <span className="relative z-10 text-white text-center">
                  Enviar Mensaje
                </span>
                <ArrowRight className="w-5 h-5 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Información de contacto alternativa */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p 
            className="font-['Inter'] text-white/80 mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            ¿Preferís contactarnos directamente?
          </p>
          <a
            href="https://wa.me/5492984252859"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <span 
              className="font-['Inter'] text-white"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Escribinos por WhatsApp
            </span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}