import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsappButton } from "@/components/WhatsappButton"
import GoogleAnalytics from '@/components/GoogleAnalytics';

// ✅ Importar los componentes de Schema
import { OnePageSchema } from "@/components/OnePageSchema"
import { WebsiteSchema } from "@/components/WebsiteSchema"

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
    default: 'Devweb - Diseño y Desarrollo Web | Alto Valle, General Roca, Cipolletti, Neuquén',
    template: '%s | Devweb Patagonia'
  },
  description: 'Agencia líder en diseño web y desarrollo en Alto Valle Patagónico. Servicios para General Roca, Cipolletti, Neuquén y Río Negro. Sitios rápidos, modernos y optimizados SEO.',
  keywords: [
    'diseño web alto valle',
    'desarrollo web general roca',
    'crear página web cipolletti',
    'agencia digital neuquén',
    'sitios web río negro',
    'one page patagonia',
    'landing page alto valle',
    'portfolio web desarrollador',
    'next.js desarrollo argentina',
    'react desarrollo patagonia'
  ].join(', '),
  authors: [{ name: 'Devweb' }],
  creator: 'Devweb',
  publisher: 'Devweb',
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
    siteName: 'Devweb',
    title: 'Devweb - Diseño Web Profesional | Alto Valle, General Roca, Cipolletti, Neuquén',
    description: 'Agencia especializada en diseño web y desarrollo de sitios en Alto Valle Patagónico, General Roca, Cipolletti, Neuquén y Río Negro.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Devweb - Agencia de Diseño Web en Alto Valle, General Roca, Cipolletti, Neuquén',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devweb - Diseño Web Alto Valle | General Roca, Cipolletti, Neuquén',
    description: 'Desarrollo web profesional en Alto Valle Patagónico, General Roca, Cipolletti, Neuquén y Río Negro. Tecnología moderna y diseño impactante.',
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
    <html lang="es" className="dark w-screen">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        
        {/* ✅ Preconexiones para mejor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${interLight.variable} ${interSemiBold.variable} antialiased p-0! w-full`}>
        <Navbar />
        <WhatsappButton />
        <Suspense fallback={null}>{children}</Suspense>
        
        {/* ✅ SCHEMA MARKUP IMPLEMENTADO */}
        <OnePageSchema />
        <WebsiteSchema />
        
        <GoogleAnalytics />
        <Footer />
      </body>
    </html>
  )
}