import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const interLight = Inter({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-inter-light",
})

const interSemiBold = Inter({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-inter-semibold",
})

export const metadata: Metadata = {
  title: "Studio — Web Design & Development",
  description: "Premium digital craftsmanship for modern brands",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${interLight.variable} ${interSemiBold.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
