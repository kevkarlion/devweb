"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-inter-semibold)] text-[clamp(2rem,5vw,4rem)] text-[#E9E9E9] mb-6">
            Let's Create Together
          </h2>
          <p className="font-[family-name:var(--font-inter-light)] text-base text-[#E9E9E9]/70 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can bring your
            vision to life.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label
              htmlFor="name"
              className="block font-[family-name:var(--font-inter-light)] text-[0.8125rem] text-[#E9E9E9]/60 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 bg-[#121212] border border-[#E9E9E9]/10 rounded-lg text-[#E9E9E9] font-[family-name:var(--font-inter-light)] text-base focus:border-[#E9E9E9]/30 focus:outline-none transition-colors duration-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-[family-name:var(--font-inter-light)] text-[0.8125rem] text-[#E9E9E9]/60 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 bg-[#121212] border border-[#E9E9E9]/10 rounded-lg text-[#E9E9E9] font-[family-name:var(--font-inter-light)] text-base focus:border-[#E9E9E9]/30 focus:outline-none transition-colors duration-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-[family-name:var(--font-inter-light)] text-[0.8125rem] text-[#E9E9E9]/60 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-6 py-4 bg-[#121212] border border-[#E9E9E9]/10 rounded-lg text-[#E9E9E9] font-[family-name:var(--font-inter-light)] text-base focus:border-[#E9E9E9]/30 focus:outline-none transition-colors duration-300 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-12 py-4 bg-[#E9E9E9] text-[#121212] font-[family-name:var(--font-inter-semibold)] text-base rounded-full hover:bg-[#E9E9E9]/90 transition-all duration-300 hover:scale-[1.02]"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          className="mt-20 pt-12 border-t border-[#E9E9E9]/10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-[family-name:var(--font-inter-light)] text-[0.8125rem] text-[#E9E9E9]/40">
            © 2025 Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
