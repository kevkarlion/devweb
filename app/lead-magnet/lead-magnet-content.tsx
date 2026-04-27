"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Search, Smartphone, Clock, BarChart3, Shield, MessageCircle, Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// The 7 signals data
const signals = [
  {
    id: 1,
    icon: Zap,
    title: "Carga lenta",
    description: "Si tu sitio tarda más de 3 segundos en cargar, estás perdiendo clientes. El 53% de los usuarios abandona una web que tarda más de 3 segundos.",
    tip: "Optimiza imágenes, usa CDN, implementa lazy loading.",
  },
  {
    id: 2,
    icon: Search,
    title: "No aparece en Google",
    description: "Sin SEO actualizado, tu web es invisible. El 75% de los usuarios nunca pasa de la primera página de resultados.",
    tip: "Actualiza meta tags, mejora estructura, optimiza contenido.",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "No es responsive",
    description: "Más del 60% del tráfico web proviene de dispositivos móviles. Si tu sitio no se ve bien en celular, estás perdiendo la mayoría.",
    tip: "Diseña mobile-first, testa en múltiples dispositivos.",
  },
  {
    id: 4,
    icon: Clock,
    title: "Diseño obsoleto",
    description: "Un sitio web con diseño anticuado genera desconfianza. Los visitantes interpretan una web vieja como un negocio que no se actualiza.",
    tip: "Actualiza el diseño cada 3-4 años, usa tendencias modernas.",
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Sin analytics",
    description: "No sabes cuántos visitantes tienes, de dónde vienen, ni qué hacen. Sin datos, optimizar es imposible.",
    tip: "Implementa Google Analytics 4, configura objetivos.",
  },
  {
    id: 6,
    icon: Shield,
    title: "No tiene SSL o está desactualizado",
    description: "Los navegadores marcan sitios sin SSL como \"no seguros\". Además, vulnerabilidades sin parchear exponen tus datos.",
    tip: "Renueva certificados, mantiene actualizado el CMS y plugins.",
  },
  {
    id: 7,
    icon: Settings,
    title: "Sin mantenimiento técnico",
    description: "Security patches, backups, actualizaciones del CMS. El mantenimiento prevent problems majors.",
    tip: "Contrata un plan de mantenimiento o actualiza regularmente.",
  },
];

function LeadForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Error al enviar");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión");
    }
  };

if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 border-2 border-white/30 rounded-lg bg-black"
      >
        <Check className="w-16 h-16 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-alfaslab)" }}>¡Listo!</h3>
        <p className="text-gray-300">Revisa tu email para ver el checklist completo.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-14 bg-black border-white/50 text-white placeholder:text-white/40 text-lg"
          disabled={status === "loading"}
        />
      </div>
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-14 text-lg font-semibold bg-black hover:bg-gray-900 text-white border-2 border-white rounded-lg transition-all hover:scale-[1.02]"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            Enviando...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Obtener Checklist Gratis
          </span>
        )}
      </Button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">{errorMessage}</p>
      )}
      <p className="text-center text-white/40 text-xs">
        No spam. Solo te enviamos lo que solicitas.
      </p>
    </form>
  );
}

export default function LeadMagnetContent() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,99,255,0.3),transparent)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-primary-gradient text-white rounded-full text-sm font-medium mb-6">
              🎁 Descarga Gratis
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-alfaslab)" }}
            >
              7 Señales de que tu Web{" "}
              <span className="text-transparent bg-clip-text bg-primary-gradient">
                Necesita una Renewal
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              ¿Tu sitio web está obsoleto? Descarga nuestro checklist gratuito 
              y descubre las 7 señales que indican que es momento de renovar tu presencia digital.
            </p>

            {/* Email Form */}
            <div className="max-w-md mx-auto border-2 border-white rounded-lg p-6 bg-primary-gradient">
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signals List */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-gradient bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-alfaslab)" }}>
              Las 7 Señales
            </h2>
            <p className="text-gray-400">
              ¿Cuántas de estas señales tiene tu sitio actual?
            </p>
          </motion.div>

          <div className="space-y-4">
            {signals.map((signal, index) => (
              <motion.div
                key={signal.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 border-2 border-white/30 rounded-lg bg-black hover:border-white transition-all"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-primary-gradient rounded-full">
                  <signal.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/50 font-mono text-sm">
                      #{signal.id}
                    </span>
                    <h3 className="text-xl font-bold text-white">{signal.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-2">{signal.description}</p>
                  <p className="text-sm text-gray-500">
                    <span className="text-primary-gradient">💡 Tip:</span> {signal.tip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-xl text-gray-300 mb-6">
              ¿Detectaste al menos 3 señales?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5492984252859"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-gradient hover:scale-105 transition-all text-white rounded-lg font-semibold border-2 border-white"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 hover:bg-white/5 text-white rounded-lg font-semibold"
              >
                Solicitar Auditoría
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-black border-t border-[#434343]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-alfaslab)" }}>
            ¿Por qué renovar tu web?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Más Conversiones",
                description: "Una web moderna convierte más visitantes en clientes.",
              },
              {
                title: "Mejor Posicionamiento",
                description: "Google favorece sitios rápidos y bien diseñados.",
              },
              {
                title: "Mayor Confianza",
                description: "Un sitio profesional genera más confianza.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border-2 border-white/30 rounded-lg bg-black"
              >
                <h3 className="text-xl font-semibold text-primary-gradient bg-clip-text text-transparent mb-2"
                    style={{ fontFamily: "var(--font-alfaslab)" }}>
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}