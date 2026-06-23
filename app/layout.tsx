import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Spectral } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-display", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-hanken", display: "swap" });
const spectral = Spectral({ subsets: ["latin"], weight: ["500"], style: ["italic"], variable: "--font-spectral", display: "swap" });

const SITE = "https://kaysen-web.vercel.app";
const OG_DESC =
  "Preparamos a tu hijo para el éxito universitario: el 98% de nuestros egresados lo logra. Bachillerato con validez SEP en Tulancingo, Hidalgo. Becas hasta 40%.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Preparatoria Kaysen | Excelencia Académica en Tulancingo",
    template: "%s | Preparatoria Kaysen Tulancingo",
  },
  description: OG_DESC,
  keywords: [
    "preparatoria en Tulancingo",
    "preparatoria Tulancingo Hidalgo",
    "bachillerato en Tulancingo",
    "prepa en Tulancingo",
    "mejor preparatoria Tulancingo",
    "Preparatoria Kaysen",
    "Colegio Universitario Kaysen",
    "preparatoria privada Tulancingo",
  ],
  alternates: { canonical: SITE },
  openGraph: {
    title: "Preparatoria Kaysen | Excelencia Académica en Tulancingo",
    description: OG_DESC,
    url: SITE,
    siteName: "Colegio Universitario Kaysen",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Preparatoria Kaysen — 98% de egresados a universidad · Tulancingo, Hidalgo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preparatoria Kaysen | Excelencia Académica en Tulancingo",
    description: OG_DESC,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Colegio Universitario Kaysen",
  alternateName: "Preparatoria Kaysen",
  url: SITE,
  telephone: "+52-775-108-9469",
  email: "contacto@colegiokaysen.edu.mx",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Luis Ponce Norte #907, Col. Centro",
    addressLocality: "Tulancingo de Bravo",
    addressRegion: "Hidalgo",
    postalCode: "43600",
    addressCountry: "MX",
  },
  areaServed: "Tulancingo de Bravo, Hidalgo",
  description: "Preparatoria (bachillerato general) en Tulancingo, Hidalgo, con validez oficial SEP y 98% de egresados a universidad.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${hanken.variable} ${spectral.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <ChatAssistant />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
