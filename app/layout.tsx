import type React from "react";
import type { Metadata } from "next";

import { Suspense } from "react";
import "./globals.css";
import  { Navbar }  from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// ✅ Importar los componentes de Schema
import { OnePageSchema } from "@/components/OnePageSchema";
import { FAQSchema } from "@/components/FAQSchema";
import { WebsiteSchema } from "@/components/WebsiteSchema";

import { Titillium_Web, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { LeadCapturePopupProvider } from "@/components/lead-capture-popup-provider";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-titles",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });


export const metadata: Metadata = {
  title: {
    default:
      "Devweb Patagonia — Gestión Digital Integral para Empresas | Web + SEO + Soporte",
    template: "%s | Devweb Patagonia",
  },
  description:
    "Tu partner digital en la Patagonia. Diseñamos webs que atraen clientes, optimizamos tu presencia en Google y te acompañamos con soporte permanente. Especialistas en General Roca, Cipolletti y Neuquén.",
  keywords: [
    // Originales mantenidas
    "diseño web alto valle río negro",
    "desarrollo web general roca patagonia",
    "crear sitio web cipolletti empresarial",
    "agencia digital neuquén capital",
    "desarrollador web freelance alto valle",
    "portfolio desarrollador next.js patagonia",
    "one page landing alto valle",
    "mantenimiento web río negro",
    "optimización seo neuquén",
    "ecommerce desarrollo alto valle",
    // Nuevas incorporaciones de gestión
    "gestión de presencia digital",
    "partner tecnológico para empresas",
    "posicionamiento en google patagonia",
    "estrategia digital permanente",
    "mantenimiento técnico web profesional",
    "desarrollo de software y dashboards",
  ].join(", "),
  authors: [{ name: "Devweb" }],
  creator: "Devweb",
  publisher: "Devweb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://devwebpatagonia.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://devwebpatagonia.com/",
    siteName: "Devweb Patagonia — Gestión Digital Integral",
    title:
      "Devweb Patagonia — Gestión Digital Integral para Empresas",
    description:
      "Tu partner digital en la Patagonia. Webs que atraen clientes, SEO optimizado y soporte permanente. General Roca, Cipolletti, Neuquén.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb - Agencia de Diseño Web y Gestión Digital en Alto Valle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devweb Patagonia — Gestión Digital Integral para Empresas",
    description:
      "Tu partner digital en la Patagonia. Webs que atraen clientes, SEO optimizado y soporte permanente.",
    images: ["/twitter-image.jpg"],
    creator: "@devweb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-verificacion-google",
    yandex: "tu-codigo-verificacion-yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark w-screen">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Preconexiones para mejor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${titilliumWeb.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased p-0! w-full`}
      >
        <LeadCapturePopupProvider>
          <Navbar />
          <WhatsappButton />
          <Suspense fallback={null}>{children}</Suspense>

          {/* ✅ SCHEMA MARKUP IMPLEMENTADO */}
          <OnePageSchema />
          <WebsiteSchema />
          <FAQSchema />

          <GoogleAnalytics />
          <Footer />
        </LeadCapturePopupProvider>
      </body>
    </html>
  );
}
