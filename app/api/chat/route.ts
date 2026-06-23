import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

type Msg = { role: "user" | "assistant"; text: string };

const SYSTEM = `Eres el asistente virtual de la Preparatoria Colegio Universitario Kaysen, un bachillerato privado incorporado a la SEP en Tulancingo, Hidalgo, México. Atiendes a padres y madres de familia. Responde SIEMPRE en español de México, con trato de "tú", tono cálido, cercano y profesional. Sé breve: 2 a 4 frases. No uses emojis ni markdown.
DATOS DEL COLEGIO:
- 98% de los egresados ingresa a la universidad. Más de 30 años de experiencia. Grupos reducidos (18 alumnos por docente). Turno matutino.
- Becas académicas y deportivas de hasta 40%.
- Tres áreas de especialización en los últimos semestres: Ciencias Experimentales (medicina, ingenierías, ciencias de la salud), Ciencias Sociales (derecho, comunicación, psicología, administración) y Físico-Matemáticas (ingenierías, arquitectura, tecnología).
- Proceso de admisión en 4 pasos: 1) solicitar informes y agendar recorrido, 2) examen diagnóstico amigable, 3) entrega de documentos, 4) firma de inscripción y bienvenida.
- Requisitos: certificado o constancia de secundaria, acta de nacimiento, CURP, comprobante de domicilio, identificación del tutor y fotografías.
- Dirección: Luis Ponce Norte #907, Tulancingo, Hidalgo, C.P. 43600.
- Teléfono y WhatsApp: 775 108 9469. Correo: contacto@colegiokaysen.edu.mx.
REGLAS:
- NO inventes precios exactos. Si preguntan por costos, di que la inscripción y las colegiaturas son accesibles, que hay becas de hasta 40%, y que la lista de precios vigente se envía el mismo día por WhatsApp al 775 108 9469.
- Siempre que sea oportuno, invita a solicitar informes o agendar un recorrido por WhatsApp (775 108 9469).
- Si no sabes algo, sugiere contactar por WhatsApp.`;

/* ---- Motor de conocimiento local (funciona sin API key) ---- */
function localAnswer(text: string): string {
  const t = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const has = (...k: string[]) => k.some((w) => t.includes(w));

  if (has("hola", "buenas", "buenos dias", "buenas tardes", "que tal") && t.length < 30)
    return "¡Hola! Con gusto te ayudo. Puedo darte información sobre costos, becas, el proceso de admisión, requisitos o agendar tu recorrido. ¿Qué te gustaría saber?";

  if (has("costo", "precio", "cuanto cuesta", "colegiatura", "inscripcion", "mensualidad", "pago", "cuesta"))
    return "Manejamos una inscripción anual y colegiaturas mensuales accesibles, además de becas de hasta 40%. La lista de precios vigente y los planes de pago te los enviamos el mismo día por WhatsApp al 775 108 9469. ¿Quieres que te la mandemos?";

  if (has("beca", "descuento", "apoyo"))
    return "Tenemos becas académicas y deportivas de hasta 40%, y apoyo para familias con más de un hijo inscrito. El porcentaje depende del promedio y del caso de cada familia. Escríbenos por WhatsApp al 775 108 9469 y revisamos tu caso.";

  if (has("admision", "proceso", "inscribir", "como le hago", "pasos", "ingreso"))
    return "El proceso son 4 pasos: 1) solicitas informes y agendas tu recorrido, 2) examen diagnóstico amigable, 3) entrega de documentos y 4) firma de inscripción y bienvenida. Todo con el acompañamiento de un asesor. ¿Te ayudo a iniciarlo?";

  if (has("requisito", "documento", "papeles", "necesito", "que llevar"))
    return "Necesitas: certificado o constancia de secundaria, acta de nacimiento, CURP, comprobante de domicilio, identificación del tutor y fotografías. El aspirante presenta un examen diagnóstico amigable. ¿Quieres agendar?";

  if (has("recorrido", "visita", "conocer", "instalacion", "cita"))
    return "¡Claro! Con gusto agendamos tu recorrido por las instalaciones. Escríbenos por WhatsApp al 775 108 9469 y coordinamos el día y la hora que mejor te convenga.";

  if (has("area", "especiali", "carrera", "bachillerato", "experimental", "social", "fisico", "matematic"))
    return "Ofrecemos tres áreas de especialización en los últimos semestres: Ciencias Experimentales (medicina, ingenierías, salud), Ciencias Sociales (derecho, comunicación, psicología, administración) y Físico-Matemáticas (ingenierías, arquitectura, tecnología). ¿Sobre cuál te interesa saber más?";

  if (has("direccion", "ubicacion", "donde estan", "como llego", "mapa", "lugar"))
    return "Estamos en Luis Ponce Norte #907, Col. Centro, C.P. 43600, Tulancingo de Bravo, Hidalgo. Turno matutino. Si quieres te compartimos la ubicación en Google Maps por WhatsApp al 775 108 9469.";

  if (has("horario", "turno", "hora"))
    return "Trabajamos en turno matutino. Para conocer los horarios exactos por grado, con gusto te damos los detalles por WhatsApp al 775 108 9469.";

  if (has("telefono", "whatsapp", "contacto", "numero", "correo", "email", "llamar"))
    return "Puedes contactarnos por WhatsApp o teléfono al 775 108 9469, o por correo a contacto@colegiokaysen.edu.mx. Te respondemos el mismo día.";

  if (has("universidad", "egresado", "98", "examen de admision", "ceneval"))
    return "El 98% de nuestros egresados ingresa a la universidad. Preparamos a tu hijo específicamente para el examen de admisión y lo acompañamos con orientación vocacional durante todo el bachillerato.";

  if (has("gracias", "muchas gracias", "perfecto", "excelente", "ok"))
    return "¡Con mucho gusto! Si necesitas algo más sobre Kaysen, aquí estoy. Y cuando quieras, agenda tu recorrido por WhatsApp al 775 108 9469.";

  return "Con gusto te ayudo con eso. Para darte la información más precisa y la lista de precios vigente, escríbenos por WhatsApp al 775 108 9469 y te atendemos el mismo día. ¿Te puedo ayudar con costos, becas, requisitos o el proceso de admisión?";
}

export async function POST(req: NextRequest) {
  let messages: Msg[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ reply: "Disculpa, no entendí tu mensaje. ¿Puedes repetirlo?", source: "error" });
  }

  const lastUser = [...messages].reverse().find((m) => m.role === "user")?.text || "";
  const key = process.env.ANTHROPIC_API_KEY;

  // Si hay API key configurada en Vercel, usamos Claude para respuestas con IA real.
  if (key) {
    try {
      const apiMessages = messages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role, content: m.text }));
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 320,
          system: SYSTEM,
          messages: apiMessages,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        const reply = data?.content?.[0]?.text?.trim();
        if (reply) return NextResponse.json({ reply, source: "ai" });
      }
    } catch {
      // cae al motor local
    }
  }

  // Fallback: motor de conocimiento local (siempre disponible)
  return NextResponse.json({ reply: localAnswer(lastUser), source: "local" });
}
