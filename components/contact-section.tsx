"use client"

import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

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
    <section ref={ref} id="contacto" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-inter-semibold)] text-[clamp(2rem,5vw,4rem)] text-[#E9E9E9] mb-6">
            Hablemos de tu proyecto
          </h2>
          <p className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/70 max-w-2xl mx-auto">
            ¿Tenés un proyecto de diseño web o desarrollo de sitio profesional? Contanos tu idea y juntos
            vamos a crear una experiencia digital que potencie tu marca y atraiga clientes.
          </p>
        </motion.div>

        {/* Mensaje de estado */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg mb-6 text-center border ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block font-[family-name:var(--font-inter-light)] text-[0.8125rem] text-[#E9E9E9]/60 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-[#121212] border border-[#E9E9E9]/10 rounded-lg text-[#E9E9E9] font-[family-name:var(--font-inter-light)] text-base focus:border-[#E9E9E9]/30 focus:outline-none transition-colors duration-300"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-[family-name:var(--font-inter-light)] text-[0.8125rem] text-[#E9E9E9]/60 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-[#121212] border border-[#E9E9E9]/10 rounded-lg text-[#E9E9E9] font-[family-name:var(--font-inter-light)] text-base focus:border-[#E9E9E9]/30 focus:outline-none transition-colors duration-300"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-[family-name:var(--font-inter-light)] text-[0.8125rem] text-[#E9E9E9]/60 mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Contanos tu idea o proyecto..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-6 py-4 bg-[#121212] border border-[#E9E9E9]/10 rounded-lg text-[#E9E9E9] font-[family-name:var(--font-inter-light)] text-base focus:border-[#E9E9E9]/30 focus:outline-none transition-colors duration-300 resize-none"
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-12 py-4 text-[#121212] font-[family-name:var(--font-inter-semibold)] text-base rounded-full transition-all duration-300 ${
              loading
                ? "bg-[#E9E9E9]/60 cursor-not-allowed"
                : "bg-[#E9E9E9] hover:bg-[#E9E9E9]/90 hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-[#121212] border-t-transparent rounded-full animate-spin" />
                Enviando...
              </span>
            ) : (
              "Enviar Mensaje"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}