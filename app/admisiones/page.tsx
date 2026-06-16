import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHead } from "@/components/ui";
import { WA } from "@/components/site";

export const metadata: Metadata = {
  title: "Admisiones",
  description: "Proceso de admisión, requisitos, fechas y becas del Colegio Universitario Kaysen en Tulancingo. Inscripciones abiertas.",
};

const pasos = [
  { n: 1, t: "Solicita informes", d: "Escríbenos por WhatsApp o llámanos y agenda una visita al colegio." },
  { n: 2, t: "Examen diagnóstico", d: "Evaluación amigable para conocer el nivel del aspirante." },
  { n: 3, t: "Entrega de documentos", d: "Reúnes la documentación requerida para la inscripción." },
  { n: 4, t: "¡Bienvenido a Kaysen!", d: "Firma de inscripción, asignación de grupo y kit de bienvenida." },
];
const requisitos = ["Certificado de secundaria (o constancia de estudios)", "Acta de nacimiento (original y copia)", "CURP actualizada", "4 fotografías tamaño infantil", "Comprobante de domicilio", "Identificación del padre o tutor"];

export default function Admisiones() {
  return (
    <main>
      <PageHero kicker="Admisiones" title={<>Inscribir a tu hijo es <span className="grad-text">muy sencillo</span></>}
        sub="Inscripciones abiertas para el próximo ciclo escolar. El cupo por grupo es limitado." />

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Proceso" title="Cuatro pasos para asegurar su lugar" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p) => (
              <div key={p.n} className="rounded-xl2 border border-line bg-white p-7">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-[#d18f24] font-display text-lg font-extrabold text-white">{p.n}</div>
                <h4 className="font-display text-[17px] font-semibold text-navy">{p.t}</h4>
                <p className="mt-1.5 text-sm text-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <SectionHead kicker="Requisitos" title="Lo que necesitas para inscribir" />
            <ul className="grid gap-3">
              {requisitos.map((r) => (
                <li key={r} className="flex items-center gap-3 rounded-xl border border-line bg-white px-5 py-4 text-[14.5px] text-ink"><span className="font-extrabold text-blue">✓</span> {r}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead kicker="Becas y apoyos" title="Apoyamos tu esfuerzo" />
            <div className="rounded-xl2 border border-line bg-white p-8">
              <p className="text-[15.5px] text-muted">Contamos con becas académicas, deportivas y de continuidad, sujetas a evaluación y disponibilidad. Nuestro objetivo es que ningún alumno con ganas de estudiar se quede sin la oportunidad.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-bg-2 p-5 text-center"><div className="font-display text-2xl font-extrabold text-blue">Hasta 40%</div><div className="mt-1 text-[13px] text-muted">de beca académica</div></div>
                <div className="rounded-xl bg-bg-2 p-5 text-center"><div className="font-display text-2xl font-extrabold text-blue">Planes</div><div className="mt-1 text-[13px] text-muted">de pago accesibles</div></div>
              </div>
              <p className="mt-6 text-[13.5px] text-muted">* Becas sujetas a promedio, evaluación socioeconómica y disponibilidad de lugares.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-blue px-8 py-16 text-center">
            <div className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
            <h2 className="relative font-display text-[clamp(27px,3.8vw,38px)] font-bold text-white">Empieza el proceso hoy</h2>
            <p className="relative mx-auto mt-3.5 max-w-xl text-[17px] text-[#d3e0f2]">Cupo limitado por grupo. Solicita informes y agenda el examen diagnóstico de tu hijo.</p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3.5">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Solicitar informes por WhatsApp</a>
              <Link href="/contacto" className="btn btn-ghost">Ir a contacto</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
