import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-poppins" });

const SITE = "https://kaysen-web.vercel.app";

// SEO LOCAL (punto 5) — App Router Metadata API (reemplaza a <Head>)
const OG_DESC =
  "Preparamos a tu hijo para el éxito universitario: El 98% de nuestros egresados lo logran. Conoce nuestra oferta educativa y proceso de admisión.";

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
    "Colegio Kaysen",
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preparatoria Kaysen — 98% de egresados a universidad · Tulancingo, Hidalgo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preparatoria Kaysen | Excelencia Académica en Tulancingo",
    description: OG_DESC,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

// Datos estructurados para SEO local (Rich Results / Google Business)
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
    streetAddress: "Morelos Oriente 304, Col. Centro",
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
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        {children}
        <Footer />
        <WhatsApp />
        <StickyCTA />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
