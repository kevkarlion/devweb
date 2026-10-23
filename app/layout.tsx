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
      "Páginas Web, Software a Medida y CRM con IA | Devweb Patagonia",
    template: "%s | Devweb Patagonia",
  },
  description:
    "Desarrollo de páginas web, software a medida, CRM y chatbots con IA en Neuquén y Río Negro. Integra IA para automatizar tu negocio. Solicite diagnóstico.",
  keywords: [
    "software a medida neuquén",
    "crm con ia para empresas de servicios",
    "software para oil & gas vaca muerta",
    "automatización de procesos industriales",
    "dashboards de operación industrial",
    "software para logística y transporte alto valle",
    "digitalización agroindustrial río negro",
    "software para instalaciones industriales",
    "portal de clientes para proveedores petroleros",
    "desarrollo de software patagonia",
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
    siteName: "Devweb Patagonia",
    title: "Software a medida para operación industrial | Devweb", // 52
    description:
      "Software a medida, CRM con IA y dashboards para la industria en Neuquén y Vaca Muerta. Solicite un diagnóstico.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devweb Patagonia - Software a medida para la operación industrial en Neuquén y Vaca Muerta", // 99
      },
    ],
    ttl: 604800,
  },
  twitter: {
    card: "summary_large_image",
    site: "@devweb",
    creator: "@devweb",
    title: "Software a medida para operación industrial | Devweb",
    description:
      "Software a medida, CRM con IA y dashboards para la industria en Neuquén y Vaca Muerta. Solicite diagnóstico técnico.",
    images: {
      url: "/twitter-image.jpg",
      alt: "Devweb Patagonia - Software a medida para operación industrial",
    },
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
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
        <meta name="theme-color" content="#121212" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
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

          <GoogleAnalytics />
          <Footer />
        </LeadCapturePopupProvider>
      </body>
    </html>
  );
}
