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
import { WebsiteSchema } from "@/components/WebsiteSchema";

import { Alfa_Slab_One, Inter, JetBrains_Mono } from "next/font/google";

const alfaSlab = Alfa_Slab_One({ subsets: ["latin"], weight: ["400"], variable: "--font-alfaslab" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const interLight = Inter({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-inter-light",
});

const interSemiBold = Inter({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-inter-semibold",
});


export const metadata: Metadata = {
  title: {
    default:
      "Devweb - Gestión Digital y Desarrollo Web Profesional | Alto Valle, General Roca, Cipolletti, Neuquén",
    template: "%s | Devweb Patagonia",
  },
  description:
    "🚀 Diseño y desarrollo web profesional en Alto Valle. Especialistas en sitios rápidos, optimizados para SEO y gestión integral de presencia digital. Creamos páginas web en General Roca, Cipolletti y Neuquén que convierten visitantes en clientes con soporte permanente. ¡Presupuesto sin compromiso!",
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
    siteName: "Devweb - Gestión y Desarrollo Web",
    title:
      "Devweb - Diseño Web Profesional y Gestión Digital | Alto Valle, Roca, Cipolletti, Neuquén",
    description:
      "Agencia especializada en diseño web, SEO y gestión de presencia digital en Alto Valle Patagónico. Expertos en General Roca, Cipolletti y Neuquén.",
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
    title: "Devweb - Desarrollo Web y Gestión Digital Alto Valle",
    description:
      "Diseño web profesional, optimización SEO y gestión de presencia digital en General Roca, Cipolletti y Neuquén. Tecnología Next.js.",
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
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* ✅ Preconexiones para mejor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${interLight.variable} ${interSemiBold.variable} ${jetbrainsMono.variable} antialiased p-0! w-full`}
      >
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
  );
}
