// Datos centrales del sitio Kaysen
export const PHONE = "775 108 9469";
export const PHONE_HREF = "tel:+527751089469";
export const EMAIL = "contacto@colegiokaysen.edu.mx";
export const ADDRESS = "Luis Ponce Norte #907, Col. Centro, C.P. 43600, Tulancingo de Bravo, Hidalgo";
export const ADDRESS_SHORT = "Luis Ponce Norte #907, Tulancingo, Hidalgo · C.P. 43600";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=Luis+Ponce+Norte+907+Tulancingo+Hidalgo";
export const FACEBOOK = "https://facebook.com";
export const INSTAGRAM = "https://instagram.com";

const wa = (m: string) => "https://wa.me/527751089469?text=" + encodeURIComponent(m);
export const WA_INFORMES = wa("Hola, vi la web de Kaysen y quiero solicitar informes y la lista de precios para el próximo ciclo escolar.");
export const WA_RECORRIDO = wa("Hola, vi la web de Kaysen y me gustaría agendar un recorrido por las instalaciones.");

export const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Oferta académica", href: "/oferta" },
  { label: "Admisiones", href: "/admisiones" },
  { label: "Campus", href: "/campus" },
  { label: "Contacto", href: "/contacto" },
];

export const TRUST = [
  { icon: "ShieldCheck", label: "Incorporado a la SEP" },
  { icon: "Award", label: "Becas hasta 40%" },
  { icon: "Sun", label: "Turno matutino" },
];

export const STATS = [
  { value: "98%", label: "de egresados ingresa a la universidad" },
  { value: "30+", label: "años formando bachilleres" },
  { value: "18:1", label: "alumnos por docente" },
  { value: "4.2★", label: "calificación de familias" },
];

export const PILLARS = [
  { icon: "GraduationCap", title: "Listos para la universidad", desc: "Preparación enfocada en el examen de admisión y en las competencias que exige el nivel superior." },
  { icon: "HeartHandshake", title: "Acompañamiento cercano", desc: "Grupos reducidos, tutoría personalizada y orientación vocacional durante todo el bachillerato." },
  { icon: "Compass", title: "Formación en valores", desc: "Educamos personas íntegras, responsables y comprometidas con su comunidad." },
];

export const AREAS = [
  { icon: "FlaskConical", title: "Ciencias Experimentales", desc: "Medicina, ingenierías y ciencias de la salud." },
  { icon: "Scale", title: "Ciencias Sociales", desc: "Derecho, comunicación, psicología y administración." },
  { icon: "Ruler", title: "Físico-Matemáticas", desc: "Ingenierías, arquitectura y tecnología." },
];

export const FAQS = [
  { q: "¿Cuáles son los costos y planes de pago?", a: "Manejamos una inscripción anual y colegiaturas mensuales accesibles, con becas académicas y deportivas de hasta el 40%. Solicita la lista de precios vigente y los planes de pago por WhatsApp; te la enviamos el mismo día." },
  { q: "¿Qué requisitos necesito para inscribir a mi hijo?", a: "Certificado de secundaria (o constancia), acta de nacimiento, CURP, comprobante de domicilio, identificación del tutor y fotografías. El aspirante presenta un examen diagnóstico amigable como parte del proceso." },
  { q: "¿Tienen convenios con universidades o empresas?", a: "Sí. Contamos con convenios y vínculos que facilitan el pase y la orientación hacia universidades de la región, además de actividades de orientación vocacional durante todo el bachillerato." },
  { q: "¿Cómo es el proceso de admisión?", a: "Cuatro pasos: (1) solicitas informes y agendas tu recorrido, (2) examen diagnóstico, (3) entrega de documentos y (4) firma de inscripción y bienvenida. Todo el proceso lo realizas con el acompañamiento de un asesor." },
];

export const VALORES = [
  { icon: "Target", title: "Excelencia académica", desc: "Un modelo exigente que prepara a cada alumno para aprobar el examen de admisión y la universidad." },
  { icon: "HeartHandshake", title: "Acompañamiento", desc: "Tutoría personalizada y orientación vocacional durante todo el bachillerato." },
  { icon: "ShieldCheck", title: "Integridad", desc: "Formamos personas responsables, éticas y comprometidas con su comunidad." },
  { icon: "Users", title: "Comunidad", desc: "Una familia educativa que acompaña a sus alumnos dentro y fuera del aula." },
];

export const PASOS = [
  { n: "01", title: "Solicita informes y recorrido", desc: "Escríbenos por WhatsApp o llámanos; te enviamos la lista de precios y agendamos tu visita guiada el mismo día." },
  { n: "02", title: "Examen diagnóstico", desc: "El aspirante presenta un examen diagnóstico amigable que nos ayuda a conocer su nivel y acompañarlo mejor." },
  { n: "03", title: "Entrega de documentos", desc: "Reúnes la documentación requerida: certificado de secundaria, acta, CURP y comprobantes." },
  { n: "04", title: "Inscripción y bienvenida", desc: "Firmas la inscripción, asignamos grupo y damos la bienvenida a tu hijo a la comunidad Kaysen." },
];

export const CALENDARIO = [
  { mes: "Oct – Dic", title: "Informes y recorridos", desc: "Inicia el proceso, conoce las instalaciones y resuelve dudas con un asesor." },
  { mes: "Ene – Mar", title: "Examen diagnóstico", desc: "Agenda y presenta el examen diagnóstico para tu lugar." },
  { mes: "Abr – Jun", title: "Inscripciones", desc: "Entrega de documentos y firma de inscripción. Cupo limitado por grupo." },
  { mes: "Agosto", title: "Inicio de clases", desc: "Bienvenida e inicio del ciclo escolar 2026–2027, turno matutino." },
];

export const REQUISITOS = [
  "Certificado o constancia de secundaria",
  "Acta de nacimiento (original y copia)",
  "CURP del aspirante",
  "Comprobante de domicilio",
  "Identificación oficial del padre o tutor",
  "Fotografías tamaño infantil",
];

export const BECAS = [
  { icon: "Award", title: "Beca académica", tag: "Hasta 40%", desc: "Para alumnos con promedio destacado en secundaria que mantengan su rendimiento." },
  { icon: "Medal", title: "Beca deportiva", tag: "Hasta 40%", desc: "Para deportistas que representen al colegio en disciplinas y torneos." },
  { icon: "Users", title: "Apoyo por hermanos", tag: "Descuento", desc: "Beneficio para familias con más de un hijo inscrito en el colegio." },
];

export const UNIVERSIDADES = ["UNAM", "IPN", "UAEH", "Tecnológico", "U. Privadas", "UPN"];

export const GALERIA = [
  { label: "Fachada del colegio", span: true },
  { label: "Aulas", span: false },
  { label: "Laboratorio", span: false },
  { label: "Biblioteca", span: false },
  { label: "Áreas deportivas", span: false },
  { label: "Vida estudiantil", span: true },
];
