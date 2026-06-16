import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Colegio Universitario Kaysen | Bachillerato en Tulancingo, Hidalgo",
  description:
    "Preparatoria Colegio Universitario Kaysen: bachillerato general con áreas de Ciencias Experimentales, Sociales y Físico-Matemáticas. Formación de excelencia en el corazón de Tulancingo. Inscripciones abiertas.",
  keywords: [
    "Kaysen",
    "preparatoria Tulancingo",
    "bachillerato Hidalgo",
    "colegio universitario Kaysen",
    "prepa Tulancingo",
  ],
  openGraph: {
    title: "Colegio Universitario Kaysen | Bachillerato en Tulancingo",
    description:
      "Bachillerato general de excelencia en Tulancingo, Hidalgo. Áreas de Ciencias Experimentales, Sociales y Físico-Matemáticas.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
