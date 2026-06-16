import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kaysen-web.vercel.app"),
  title: { default: "Colegio Universitario Kaysen | Bachillerato en Tulancingo", template: "%s | Colegio Kaysen" },
  description:
    "Preparatoria Colegio Universitario Kaysen: bachillerato general de excelencia en Tulancingo, Hidalgo. Áreas de Ciencias Experimentales, Sociales y Físico-Matemáticas. Inscripciones abiertas.",
  keywords: ["Kaysen", "preparatoria Tulancingo", "bachillerato Hidalgo", "prepa Tulancingo"],
  openGraph: { title: "Colegio Universitario Kaysen", description: "Bachillerato general de excelencia en Tulancingo, Hidalgo.", locale: "es_MX", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        {children}
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
