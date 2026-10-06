"use client"

import { useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Check } from "lucide-react"

interface SuccessModalProps {
  open: boolean
  message: string
  onClose: () => void
}

export function SuccessModal({ open, message, onClose }: SuccessModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)
  const messageId = useId()
  const [mounted, setMounted] = useState(false)
  const lastMessageRef = useRef(message)

  // Keep the last non-empty message so it stays visible during the exit animation.
  if (open && message) {
    lastMessageRef.current = message
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  // Move focus into the dialog when it opens; restore it on close/unmount.
  useEffect(() => {
    if (!open || !mounted) return
    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
    const frame = requestAnimationFrame(() => dialogRef.current?.focus())
    return () => {
      cancelAnimationFrame(frame)
      const previous = previouslyFocusedRef.current
      if (previous && previous.isConnected) {
        previous.focus()
      }
    }
  }, [open, mounted])

  // Lock body scroll while open (restoring the previous value), and block wheel
  // events so the Lenis smooth-scroll wrapper cannot move the page behind.
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const preventWheelBehind = (event: WheelEvent) => {
      event.preventDefault()
      event.stopPropagation()
    }
    document.addEventListener("wheel", preventWheelBehind, { capture: true, passive: false })
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("wheel", preventWheelBehind, { capture: true })
    }
  }, [open])

  // Escape closes; Tab cycles inside the dialog.
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== "Tab") return
      const dialog = dialogRef.current
      if (!dialog) return
      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      )
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (!first || !last) return
      const active = document.activeElement
      if (event.shiftKey) {
        if (active === first || !dialog.contains(active)) {
          event.preventDefault()
          last.focus()
        }
      } else if (active === last || !dialog.contains(active)) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, onClose])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="success-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="pointer-events-auto fixed inset-0 z-[1200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={messageId}
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="pointer-events-auto w-full max-w-md rounded-2xl border border-green-500/20 bg-neutral-950 p-6 sm:p-8 text-center shadow-2xl outline-none"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 border border-green-500/20">
              <Check className="h-7 w-7 text-green-400" aria-hidden="true" />
            </div>
            <p
              id={messageId}
              className="text-green-400 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {lastMessageRef.current}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-lg border border-green-500/20 bg-green-500/10 px-6 py-3.5 font-semibold text-green-400 transition-colors duration-300 hover:bg-green-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400/60"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Entendido
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
