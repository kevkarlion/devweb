"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Mail, ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LeadCapturePopupProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

type FormStatus = "default" | "loading" | "success" | "error";

export function LeadCapturePopup({ open: externalOpen, onOpenChange: externalOnOpenChange }: LeadCapturePopupProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("default");
  const [errorMessage, setErrorMessage] = useState("");

  // Support both controlled and uncontrolled modes
  const isControlled = externalOpen !== undefined;
  const isOpen = isControlled ? externalOpen : internalOpen;

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (isControlled) {
        externalOnOpenChange?.(newOpen);
      } else {
        setInternalOpen(newOpen);
        // Reset form when closing
        if (!newOpen) {
          setStatus("default");
          setEmail("");
          setErrorMessage("");
        }
      }
    },
    [isControlled, externalOnOpenChange]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

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
        // Auto-close after 3 seconds
        setTimeout(() => {
          handleOpenChange(false);
        }, 3000);
      } else {
        setStatus("error");
        setErrorMessage(data.warning || data.error || "Error al enviar");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión");
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-black p-1">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 opacity-50" />
                  
                  {/* Content */}
                  <div className="relative rounded-xl bg-slate-900/95 p-6 sm:p-8 backdrop-blur">
                    {/* Close button */}
                    <Dialog.Close asChild>
                      <button
                        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Cerrar"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </Dialog.Close>

                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 mb-4">
                        <Mail className="h-6 w-6 text-green-400" />
                      </div>
                      <Dialog.Title className="text-2xl font-bold text-white">
                        🎁 Checklist Gratis
                      </Dialog.Title>
                      <Dialog.Description className="mt-2 text-gray-400">
                        Las 7 señales que indican que tu web necesita una renovación
                      </Dialog.Description>
                    </div>

                    {/* Form */}
                    {status === "success" ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-4"
                      >
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                        <p className="text-white font-semibold">¡Listo!</p>
                        <p className="text-gray-400 text-sm">
                          Revisa tu email para ver el checklist completo
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Input
                            type="email"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={status === "loading"}
                            className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full h-12 font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0"
                        >
                          {status === "loading" ? (
                            <span className="flex items-center justify-center gap-2">
                              <Loader2 className="h-5 w-5 animate-spin" />
                              Enviando...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              Obtener Checklist
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          )}
                        </Button>
                        {status === "error" && (
                          <div className="flex items-center gap-2 text-red-400 text-sm">
                            <AlertCircle className="h-4 w-4" />
                            <span>{errorMessage}</span>
                          </div>
                        )}
                        <p className="text-center text-gray-500 text-xs">
                          No spam. Solo te enviamos lo que solicitas.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}