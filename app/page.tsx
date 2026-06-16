import Link from "next/link";
import { SectionHead } from "@/components/ui";
import { WA_RECORRIDO } from "@/components/site";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import LeadMagnet from "@/components/LeadMagnet";

const highlights = [
  { icon: "🎓", title: "Listos para la universidad", desc: "Preparación enfocada en el examen de admisión y en las competencias que exige el nivel superior." },
  { icon: "🤝", title: "Acompañamiento cercano", desc: "Grupos reducidos, tutoría personalizada y orientación vocacional durante todo el bachillerato." },
  { icon: "🌱", title: "Formación en valores", desc: "Educamos personas íntegras, responsables y comprometidas con su comunidad." },
];
const areas = [
  { icon: "🔬", title: "Ciencias Experimentales", desc: "Medicina, ingenierías y ciencias de la salud." },
  { icon: "📚", title: "Ciencias Sociales", desc: "Derecho, comunicación, psicología y administración." },
  { icon: "📐", title: "Físico-Matemáticas", desc: "Ingenierías, arquitectura y tecnología." },
];

export default function Home() {
  return (
    <main>
      {/* HERO — prioriza el 98% (punto 4) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-2 to-white">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full bg-[#cfe0fb] opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-[#fbe7c0] opacity-50 blur-3xl" />
        <div className="wrap relative z-10 grid items-center gap-12 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
          <div>
            <span className="fade-up inline-flex items-center gap-2 rounded-full bg-blue-soft px-4 py-2 text-[12.5px] font-semibold text-blue">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(232,169,59,.2)]" />
              Preparatoria en Tulancingo, Hidalgo
            </span>
            <h1 className="fade-up-1 mt-5 font-display text-[clamp(33px,5vw,54px)] font-extrabold leading-[1.05] tracking-tight text-navy">
              El <span className="grad-text">98%</span> de nuestros egresados llega a la universidad
            </h1>
            <p className="fade-up-2 mt-5 max-w-xl text-lg text-muted">
              En Colegio Kaysen formamos bachilleres preparados para aprobar el examen de admisión y triunfar en el nivel superior. Excelencia académica, valores y acompañamiento cercano, en el corazón de Tulancingo.
            </p>
            <div className="fade-up-3 mt-8 flex flex-wrap gap-3.5">
              <a href={WA_RECORRIDO} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Agendar Recorrido</a>
              <Link href="/oferta" className="btn btn-ghost">Ver oferta académica</Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-6">
              {["Incorporado a la SEP", "Becas hasta 40%", "Turno matutino"].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-[13.5px] font-medium text-muted">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="flex-none"><circle cx="12" cy="12" r="10" fill="#2563c9" /><path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" fill="none" /></svg>{t}
                </div>
              ))}
            </div>
          </div>

          {/* Panel de confianza: el dato como protagonista */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-navy to-blue p-8 text-center text-white shadow-soft">
              <div className="font-display text-[88px] font-extrabold leading-none">98<span className="align-top text-4xl">%</span></div>
              <div className="mt-1 text-[15px] font-medium text-[#d3e0f2]">de egresados ingresa a la universidad</div>
              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/15 pt-6">
                <div><div className="font-display text-2xl font-extrabold text-gold">30+</div><div className="mt-1 text-[11.5px] text-[#c2d0e2]">años</div></div>
                <div><div className="font-display text-2xl font-extrabold text-gold">18:1</div><div className="mt-1 text-[11.5px] text-[#c2d0e2]">alumnos/docente</div></div>
                <div><div className="font-display text-2xl font-extrabold text-gold">4.2★</div><div className="mt-1 text-[11.5px] text-[#c2d0e2]">familias</div></div>
              </div>
            </div>
            <div className="absolute -left-5 -top-4 hidden animate-floaty items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft sm:flex">
              <span className="text-xl">🏅</span><span className="font-display text-[13px] font-semibold text-navy">Validez oficial SEP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué Kaysen */}
      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Por qué Kaysen" title="Una preparatoria que forma personas, no solo alumnos" sub="Tres pilares que distinguen la experiencia educativa en nuestro colegio." />
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-xl2 border border-line bg-white p-8 transition hover:-translate-y-1.5 hover:border-[#cfe0fb] hover:shadow-soft">
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-blue to-navy text-2xl text-white">{h.icon}</div>
                <h3 className="font-display text-[19px] font-semibold text-navy">{h.title}</h3>
                <p className="mt-2 text-[14.5px] text-muted">{h.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><Link href="/nosotros" className="font-semibold text-blue hover:underline">Conoce más sobre el colegio →</Link></div>
        </div>
      </section>

      {/* Oferta teaser */}
      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Oferta académica" title="Tres áreas para tres futuros distintos" sub="En los últimos semestres tu hijo elige la especialización alineada con la carrera que quiere estudiar." />
          <div className="grid gap-6 md:grid-cols-3">
            {areas.map((a) => (
              <div key={a.title} className="rounded-xl2 border border-line bg-white p-8">
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-blue to-navy text-2xl text-white">{a.icon}</div>
                <h3 className="font-display text-[19px] font-semibold text-navy">{a.title}</h3>
                <p className="mt-2 text-[14.5px] text-muted">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><Link href="/oferta" className="font-semibold text-blue hover:underline">Ver el plan de estudios completo →</Link></div>
        </div>
      </section>

      {/* Social proof (punto 2) */}
      <Testimonials />

      {/* FAQ dinámico (punto 3) */}
      <FaqAccordion />

      {/* Lead magnet (punto 6) */}
      <LeadMagnet />
    </main>
  );
}
