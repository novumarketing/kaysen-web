import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/ui";
import { PHONE, EMAIL, ADDRESS, WA } from "@/components/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta al Colegio Universitario Kaysen en Tulancingo. Teléfono, correo, ubicación y formulario de informes.",
};

const faqs = [
  { q: "¿Qué modalidad de bachillerato ofrecen?", a: "Bachillerato General con validez oficial ante la SEP (CCT 13PBH0319R), turno matutino, con tres áreas de especialización en quinto y sexto semestre." },
  { q: "¿Cuándo puedo inscribir a mi hijo?", a: "Las inscripciones para el próximo ciclo escolar ya están abiertas. Te recomendamos solicitar informes pronto, ya que el cupo por grupo es limitado." },
  { q: "¿Dónde están ubicados?", a: "En Morelos Oriente 304, Col. Centro, en el corazón de Tulancingo de Bravo, Hidalgo. Un punto céntrico y de fácil acceso." },
  { q: "¿Ofrecen becas?", a: "Sí, contamos con apoyos y becas académicas sujetas a evaluación y disponibilidad. Pregunta por los requisitos al solicitar informes." },
];

function Info({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-[13px] bg-blue-soft text-xl">{icon}</div>
      <div><b className="block font-display text-[15px] text-navy">{title}</b><p className="text-[14.5px] text-muted">{children}</p></div>
    </div>
  );
}

export default function Contacto() {
  return (
    <main>
      <PageHero kicker="Contacto" title={<>Da el <span className="grad-text">primer paso</span> hoy</>}
        sub="Déjanos tus datos y un asesor del colegio te contactará para resolver todas tus dudas." />

      <section className="py-20 md:py-24">
        <div className="wrap grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHead kicker="Datos de contacto" title="Estamos para ayudarte" />
            <Info icon="📍" title="Visítanos">{ADDRESS}</Info>
            <Info icon="📞" title="Llámanos">{PHONE} · Lun a Vie, turno matutino</Info>
            <Info icon="✉️" title="Escríbenos">{EMAIL}</Info>
            <Info icon="💬" title="WhatsApp">Respuesta inmediata en horario escolar</Info>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">Escribir por WhatsApp</a>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Preguntas frecuentes" title="Resuelve tus dudas" />
          <div className="mx-auto max-w-3xl">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="mb-3.5 overflow-hidden rounded-2xl border border-line bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3.5 px-5 py-5 font-display text-base font-semibold text-navy">
                  {f.q}<span className="faq-plus text-2xl font-normal text-blue transition">+</span>
                </summary>
                <p className="px-5 pb-5 text-[14.8px] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
