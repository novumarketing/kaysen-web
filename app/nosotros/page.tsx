import type { Metadata } from "next";
import { PageHero, SectionHead, StatsBar, CtaBand } from "@/components/ui";
import { WA_VISIT } from "@/components/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, misión y valores del Colegio Universitario Kaysen, preparatoria de excelencia en Tulancingo, Hidalgo.",
};

const valores = [
  { icon: "📖", title: "Compromiso académico", desc: "Buscamos la excelencia y el esfuerzo constante en cada alumno." },
  { icon: "🤝", title: "Respeto", desc: "Una comunidad sana donde cada persona es valorada." },
  { icon: "💡", title: "Pensamiento crítico", desc: "Formamos jóvenes que cuestionan, analizan y proponen." },
  { icon: "🫶", title: "Responsabilidad", desc: "Hábitos y valores que acompañan al alumno toda la vida." },
];

export default function Nosotros() {
  return (
    <main>
      <PageHero kicker="Nosotros" title={<>Una comunidad donde cada alumno <span className="grad-text">encuentra su lugar</span></>}
        sub="Desde hace más de tres décadas formamos a jóvenes de Tulancingo en la etapa más decisiva de su educación." />

      <section className="py-20 md:py-24">
        <div className="wrap grid items-center gap-14 md:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-blue shadow-soft">
            <div className="grid h-full place-items-center p-8 text-center font-display text-2xl font-bold text-white/90">
              Colegio Universitario Kaysen<br /><span className="mt-2 text-base font-medium text-white/70">Aprender con propósito</span>
            </div>
          </div>
          <div>
            <SectionHead kicker="Nuestra historia" title="Más de 30 años formando egresados" />
            <p className="text-[16.5px] text-muted">El Colegio Universitario Kaysen nació con una convicción: que la preparatoria debe ser mucho más que un trámite hacia la universidad. En el corazón de Tulancingo, hemos acompañado a generaciones de estudiantes combinando rigor académico, valores y desarrollo humano.</p>
            <p className="mt-4 text-[16.5px] text-muted">Con grupos reducidos y atención personalizada, conocemos a cada alumno por su nombre y lo guiamos para que descubra su vocación y llegue preparado al siguiente paso de su vida.</p>
          </div>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap grid gap-8 md:grid-cols-2">
          <div className="rounded-xl2 border border-line bg-white p-8">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-[13px] bg-blue-soft text-2xl">🎯</div>
            <h3 className="font-display text-xl font-semibold text-navy">Misión</h3>
            <p className="mt-3 text-[15.5px] text-muted">Formar bachilleres competentes, críticos y responsables, brindándoles una educación integral de calidad que los prepare para la educación superior y para la vida.</p>
          </div>
          <div className="rounded-xl2 border border-line bg-white p-8">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-[13px] bg-gold-soft text-2xl">🌅</div>
            <h3 className="font-display text-xl font-semibold text-navy">Visión</h3>
            <p className="mt-3 text-[15.5px] text-muted">Ser la preparatoria de referencia en Tulancingo por la calidad de sus egresados, su modelo de acompañamiento cercano y su compromiso con la formación en valores.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Nuestros valores" title="Lo que vivimos cada día en el aula" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v) => (
              <div key={v.title} className="rounded-xl2 border border-line bg-white p-7 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-blue to-navy text-2xl text-white">{v.icon}</div>
                <h3 className="font-display text-[17px] font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-[14px] text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar items={[
        { n: "30+", l: "Años de trayectoria" },
        { n: "18:1", l: "Alumnos por docente" },
        { n: "200+", l: "Egresados acompañados" },
        { n: "100%", l: "Validez oficial SEP" },
      ]} />

      <CtaBand title="Conoce nuestra comunidad de cerca" sub="Te invitamos a una visita guiada para vivir el ambiente Kaysen." href={WA_VISIT} label="Agendar una visita" />
    </main>
  );
}
