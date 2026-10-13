"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaqSectionSchema } from "@/components/FaqSectionSchema";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqTab = {
  id: string;
  label: string;
  items: FaqItem[];
};

const faqTabs: FaqTab[] = [
  {
    id: "presencia-digital",
    label: "Presencia Digital, Landing Pages & SEO",
    items: [
      {
        question: "¿Cuánto tarda el desarrollo de un sitio web B2B o Landing Page?",
        answer:
          "Una Landing Page de alta conversión suele demorar entre 1 y 2 semanas, mientras que un sitio web B2B corporativo completo requiere de 3 a 5 semanas, incluyendo diseño UX/UI, desarrollo en Next.js y optimización SEO inicial.",
      },
      {
        question:
          "¿Cómo funciona el posicionamiento SEO y la optimización para chats de IA (LLMs)?",
        answer:
          "No solo optimizamos tu web para motores de búsqueda tradicionales como Google (SEO técnico, LocalBusiness Schema y velocidad Core Web Vitals < 1s), sino que aplicamos estrategias de GEO (Generative Engine Optimization) para que tu marca, servicios y cobertura regional en Neuquén y el Alto Valle sean citados y recomendados directamente por modelos de IA como ChatGPT, Perplexity, Gemini y Claude.",
      },
      {
        question: "¿Puedo autogestionar el contenido de mi página web o catálogo?",
        answer:
          "Sí. Entregamos plataformas con paneles de administración amigables donde puedes actualizar productos, servicios, artículos o proyectos de forma rápida y sin depender de un programador.",
      },
    ],
  },
  {
    id: "software-medida",
    label: "Software a Medida, CRM & Dashboards",
    items: [
      {
        question: "¿El código fuente y los sistemas desarrollados son de mi propiedad?",
        answer:
          "Sí, totalmente. A diferencia de las plataformas SaaS cerradas con alquileres perpetuos, todo el código fuente, la infraestructura y la base de datos desarrollada son 100% de tu empresa.",
      },
      {
        question:
          "¿Se pueden integrar sus sistemas y agentes de IA con WhatsApp y herramientas actuales?",
        answer:
          "Sí. Nos conectamos directamente con la API oficial de WhatsApp Cloud, tu correo corporativo, pasarelas de pago y los sistemas o planillas que utilices hoy para automatizar respuestas, pre-calificar leads y sincronizar datos en tiempo real.",
      },
      {
        question: "¿Cómo es la modalidad de trabajo y el soporte post-implementación?",
        answer:
          "Trabajamos con una metodología transparente en 4 pasos (Diagnóstico, Diseño UX, Desarrollo e Integración, y Despliegue). Una vez lanzado el proyecto, brindamos capacitación a tu equipo y acompañamiento técnico directo en la región.",
      },
    ],
  },
];

const allQuestions: FaqItem[] = faqTabs.flatMap((tab) => tab.items);

export function FaqSection() {
  const [activeTab, setActiveTab] = useState(faqTabs[0].id);
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  const toggleItem = (tabId: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [tabId]: prev[tabId] === index ? null : index,
    }));
  };

  const currentTab = faqTabs.find((tab) => tab.id === activeTab) ?? faqTabs[0];

  return (
    <section
      id="faq"
      className="w-full bg-neutral-950 py-24 md:py-32 px-6 relative border-t border-[#434343]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold leading-[0.95] bg-clip-text text-transparent text-mobile-gradient lg:text-primary-gradient"
          style={{ fontFamily: "var(--font-titles)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Preguntas Frecuentes
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-base font-light leading-relaxed text-neutral-300 md:text-lg"
          style={{ fontFamily: "var(--font-body)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Despejamos tus dudas sobre presencia digital, SEO, software a medida y nuestra
          modalidad de trabajo.
        </motion.p>

        <div
          className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Categorías de preguntas frecuentes"
        >
          {faqTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full sm:w-auto sm:flex-1 rounded-lg px-5 py-3 text-sm font-semibold text-center transition-all duration-300 ${
                  isActive
                    ? "bg-mobile-gradient lg:bg-primary-gradient text-white border border-white/20 shadow-lg"
                    : "border border-white/10 bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-md overflow-hidden">
          {currentTab.items.map((item, index) => {
            const isOpen = openItems[currentTab.id] === index;
            return (
              <div
                key={item.question}
                className="border-b border-white/10 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(currentTab.id, index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-white/5"
                >
                  <span
                    className="text-base md:text-lg font-semibold text-white"
                    style={{ fontFamily: "var(--font-titles)" }}
                  >
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-neutral-300"
                  >
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-5 pb-5 text-sm md:text-base leading-relaxed text-neutral-300"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <FaqSectionSchema questions={allQuestions} />
    </section>
  );
}
