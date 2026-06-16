import Link from "next/link";
import { Btn, SectionHead, StatsBar, CtaBand } from "@/components/ui";
import { WA, WA_VISIT } from "@/components/site";

const highlights = [
  { icon: "🎯", title: "Excelencia académica", desc: "Plan exigente y docentes especializados que preparan a cada alumno para la universidad." },
  { icon: "🤝", title: "Acompañamiento cercano", desc: "Grupos reducidos, tutoría personalizada y orientación vocacional permanente." },
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
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-2 to-white">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full bg-[#cfe0fb] opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-[#fbe7c0] opacity-50 blur-3xl" />
        <div className="wrap relative z-10 grid items-center gap-12 py-20 md:grid-cols-[1.05fr_.95fr] md:py-24">
          <div>
            <span className="fade-up inline-flex items-center gap-2 rounded-full bg-blue-soft px-4 py-2 text-[12.5px] font-semibold text-blue">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(232,169,59,.2)]" />
              Inscripciones abiertas · Tulancingo, Hidalgo
            </span>
            <h1 className="fade-up-1 mt-5 font-display text-[clamp(34px,5vw,55px)] font-extrabold leading-[1.08] tracking-tight text-navy">
              Educamos a los <span className="grad-text">profesionistas del mañana</span>
            </h1>
            <p className="fade-up-2 mt-5 max-w-xl text-lg text-muted">
              Bachillerato general de excelencia en el corazón de Tulancingo. Formación académica sólida, valores y acompañamiento cercano para que tu hijo llegue preparado a la universidad.
            </p>
            <div className="fade-up-3 mt-8 flex flex-wrap gap-3.5">
              <Btn href="/admisiones">Proceso de admisión</Btn>
              <Btn href="/oferta" variant="ghost">Ver oferta académica</Btn>
            </div>
            <div className="mt-9 flex flex-wrap gap-6">
              {["Incorporado a la SEP", "Turno matutino", "Becas disponibles"].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-[13.5px] font-medium text-muted">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="flex-none"><circle cx="12" cy="12" r="10" fill="#2563c9" /><path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" fill="none" /></svg>{t}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="h-[420px] w-full rounded-3xl bg-gradient-to-br from-[#1d3c63] to-blue shadow-soft" />
            <div className="absolute -left-6 top-6 flex animate-floaty items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-soft text-xl">🎓</div>
              <div className="leading-tight"><b className="block font-display text-base text-navy">98%</b><small className="text-xs text-muted">Egresados a universidad</small></div>
            </div>
            <div className="absolute -right-5 bottom-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-soft text-xl">🏫</div>
              <div className="leading-tight"><b className="block font-display text-base text-navy">30+</b><small className="text-xs text-muted">Años de trayectoria</small></div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar items={[
        { n: "4.2★", l: "Valoración de las familias" },
        { n: "30+", l: "Años formando egresados" },
        { n: "3", l: "Áreas de especialización" },
        { n: "100%", l: "Validez oficial SEP" },
      ]} />

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

      <CtaBand title="El futuro de tu hijo empieza en Kaysen" sub="Agenda una visita y conoce por qué somos una de las mejores opciones de bachillerato en Tulancingo." href={WA_VISIT} label="Agendar una visita" />
    </main>
  );
}
