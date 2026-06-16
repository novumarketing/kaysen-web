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
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Preparatoria en Tulancingo, Hidalgo | Colegio Universitario Kaysen",
    template: "%s | Colegio Kaysen Tulancingo",
  },
  description:
    "Preparatoria en Tulancingo, Hidalgo. El 98% de nuestros egresados ingresa a la universidad. Bachillerato general con validez SEP, becas y acompañamiento. Agenda tu recorrido.",
  keywords: [
    "preparatoria en Tulancingo",
    "preparatoria Tulancingo Hidalgo",
    "bachillerato en Tulancingo",
    "prepa en Tulancingo",
    "mejor preparatoria Tulancingo",
    "Colegio Kaysen",
    "preparatoria privada Tulancingo",
  ],
  alternates: { canonical: SITE },
  openGraph: {
    title: "Preparatoria en Tulancingo | Colegio Universitario Kaysen",
    description: "98% de egresados a universidad. Bachillerato de excelencia en Tulancingo, Hidalgo. Agenda tu recorrido.",
    url: SITE,
    siteName: "Colegio Universitario Kaysen",
    locale: "es_MX",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Preparatoria en Tulancingo | Colegio Kaysen", description: "98% de egresados a universidad. Agenda tu recorrido." },
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
