"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/modern-ecommerce-dark.png",
  },
  {
    title: "Brand Identity",
    category: "Design",
    image: "/luxury-brand-identity-minimal.jpg",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "/modern-dashboard-interface-dark.jpg",
  },
  {
    title: "Mobile App",
    category: "App Development",
    image: "/sleek-mobile-app-interface.png",
  },
  {
    title: "Corporate Website",
    category: "Web Design",
    image: "/corporate-website-elegant.jpg",
  },
  {
    title: "Digital Campaign",
    category: "Strategy",
    image: "/digital-marketing-campaign-creative.jpg",
  },
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-[family-name:var(--font-inter-semibold)] text-[clamp(2rem,5vw,4rem)] text-[#E9E9E9] mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#0A0A0A] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-[family-name:var(--font-inter-light)] text-[0.8125rem] text-[#E9E9E9]/60 mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-[family-name:var(--font-inter-semibold)] text-[2rem] text-[#E9E9E9]">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
