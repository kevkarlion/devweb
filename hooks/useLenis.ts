'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // No inicializar en móvil
    if (window.innerWidth < 768) return

    const lenisInstance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    setLenis(lenisInstance)

    function raf(time: number) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisInstance.destroy()
      setLenis(null)
    }
  }, [])

  return lenis
}