'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Solo inicializar Lenis en desktop
    if (window.innerWidth < 768) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false, // Desactivar en móvil
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}