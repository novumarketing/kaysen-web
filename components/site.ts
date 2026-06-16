// Datos del colegio y mensajes de WhatsApp (CRO)
export const PHONE = "775 108 9469";
export const PHONE_RAW = "527751089469";
export const ADDRESS = "Morelos Oriente 304, Col. Centro, CP 43600, Tulancingo de Bravo, Hidalgo";
export const EMAIL = "contacto@colegiokaysen.edu.mx";

const wa = (msg: string) => `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(msg)}`;

// Mensaje predeterminado solicitado (punto 7)
export const WA = wa("Hola, vi la web de Kaysen y me gustaría solicitar informes sobre el proceso de inscripción.");
export const WA_RECORRIDO = wa("Hola, vi la web de Kaysen y me gustaría agendar un recorrido por las instalaciones.");
// Alias para no romper imports previos
export const WA_VISIT = WA_RECORRIDO;

// Lead magnet (punto 6)
export const GUIA_PDF = "/guia-elegir-preparatoria-kaysen.pdf";

// Google Maps (embed para LazyMap)
export const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Morelos Oriente 304, Centro, 43600 Tulancingo de Bravo, Hidalgo") +
  "&output=embed";
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Colegio Universitario Kaysen, Morelos Oriente 304, Tulancingo, Hidalgo");

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/oferta", label: "Oferta académica" },
  { href: "/admisiones", label: "Admisiones" },
  { href: "/campus", label: "Campus" },
  { href: "/contacto", label: "Contacto" },
];
