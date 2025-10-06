import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsappButton } from "@/components/WhatsappButton"

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
  title: {
    default: 'DevWeb - Diseño y Desarrollo Web Profesional | Buenos Aires',
    template: '%s | DevWeb - Agencia de Desarrollo Web'
  },
  description: 'Agencia especializada en diseño web, desarrollo de sitios profesionales y experiencias digitales. Creamos tu presencia online con tecnología moderna y diseño impactante.',
  keywords: 'diseño web, desarrollo web, agencia digital, sitio web, ecommerce, landing page, react, next.js, buenos aires',
  authors: [{ name: 'DevWeb' }],
  creator: 'DevWeb',
  publisher: 'DevWeb',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://devwebpatagonia.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://devwebpatagonia.com/',
    siteName: 'DevWeb',
    title: 'DevWeb - Diseño y Desarrollo Web Profesional',
    description: 'Agencia especializada en diseño web y desarrollo de sitios profesionales',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevWeb - Agencia de Diseño y Desarrollo Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevWeb - Diseño y Desarrollo Web Profesional',
    description: 'Agencia especializada en diseño web y desarrollo de sitios profesionales',
    images: ['/twitter-image.jpg'],
    creator: '@devweb',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-verificacion-google',
    yandex: 'tu-codigo-verificacion-yandex',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
       <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
<link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${interLight.variable} ${interSemiBold.variable} antialiased`}>
        <Navbar />
        <WhatsappButton />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  )
}
