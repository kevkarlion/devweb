"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, FileSpreadsheet, MessageCircle, Clock, Users, Repeat, Database, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// The 7 signals data
const signals = [
  {
    id: 1,
    icon: FileSpreadsheet,
    title: "Planillas desactualizadas",
    description: "La operación se coordina en planillas que nadie actualiza y cada corrección depende de una conversación.",
    tip: "Un sistema central registra cotizaciones, stock y plazos en tiempo real.",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "WhatsApp disperso",
    description: "Pedidos, consultas y seguimiento de clientes repartidos en chats sueltos que después nadie puede consultar.",
    tip: "Centralizá cada contacto y su historial en un solo lugar.",
  },
  {
    id: 3,
    icon: Clock,
    title: "Cotizaciones que tardan",
    description: "Cada cotización exige juntar datos de varias fuentes y eso demora horas que no tenés.",
    tip: "Automatizá el armado de cotizaciones con los datos que ya cargaste.",
  },
  {
    id: 4,
    icon: Users,
    title: "Clientes sin visibilidad",
    description: "No sabés qué pasa con cada cliente: qué cotizó, desde cuándo espera y qué se le prometió.",
    tip: "Un tablero de seguimiento muestra el estado de cada cuenta.",
  },
  {
    id: 5,
    icon: Repeat,
    title: "Tareas repetitivas",
    description: "Cargar pedidos, armar listas y pasarlos en limpio consume horas que no generan valor.",
    tip: "Automatizá las tareas administrativas que se repiten todos los días.",
  },
  {
    id: 6,
    icon: Database,
    title: "Datos que nadie usa",
    description: "Acumulás datos sueltos, pero no los convertís en decisiones de operación.",
    tip: "Dashboards operativos que muestran lo importante sin esperar un informe.",
  },
  {
    id: 7,
    icon: TrendingUp,
    title: "Crecimiento que depende de contratar más gente",
    description: "Si no cambiás los procesos, crecer significa sumar más personal a las mismas tareas.",
    tip: "Digitalizá procesos para escalar sin duplicar la carga administrativa.",
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
        <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-titles)" }}>¡Listo!</h3>
        <p className="text-gray-300">Recibimos tu pedido. Te contactamos dentro de las próximas 24 h hábiles.</p>
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
            Descargar diagnóstico gratuito
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
              Diagnóstico gratuito
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              ¿Tu operación todavía se maneja con{" "}
              <span className="text-transparent bg-clip-text bg-primary-gradient">
                planillas y WhatsApp?
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Descargá esta guía y detectá en 5 minutos qué procesos se pueden automatizar
              antes de que otra licitación se te escape por falta de respuesta.
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
                style={{ fontFamily: "var(--font-titles)" }}>
              Las 7 señales de tu operación
            </h2>
            <p className="text-gray-400">
              ¿Cuántas de estas señales reconocés en tu operación?
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
                    <span className="text-primary-gradient">Tip:</span> {signal.tip}
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
              ¿Reconocés tu operación en alguna de estas señales?
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
                Solicitar diagnóstico técnico
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-black border-t border-[#434343]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-gradient bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-titles)" }}>
            ¿Por qué digitalizar tu operación?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Menos errores",
                description: "Procesos digitalizados reducen los errores de carga y de traslado de datos.",
              },
              {
                title: "Respuestas más rápidas",
                description: "Cotizaciones y seguimientos que no esperan a que alguien actualice una planilla.",
              },
              {
                title: "Decidí con datos",
                description: "Dashboards que reemplazan las suposiciones por información real de la operación.",
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
                    style={{ fontFamily: "var(--font-titles)" }}>
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