import type { Metadata } from "next";
import { FlaskConical, BookOpen, Ruler } from "lucide-react";
import { PageHero, SectionHead, CtaBand } from "@/components/ui";
import { WA } from "@/components/site";

export const metadata: Metadata = {
  title: "Oferta académica",
  description: "Bachillerato General del Colegio Kaysen con áreas de Ciencias Experimentales, Ciencias Sociales y Físico-Matemáticas. Plan de estudios y actividades.",
};

const areas = [
  { icon: FlaskConical, title: "Ciencias Experimentales", desc: "Ruta ideal hacia medicina, enfermería, ingenierías y ciencias de la salud.", items: ["Laboratorios de Física, Química y Biología", "Preparación para examen de admisión", "Proyectos de investigación"] },
  { icon: BookOpen, title: "Ciencias Sociales y Humanidades", desc: "Para quienes buscan derecho, comunicación, psicología o administración.", items: ["Pensamiento crítico y argumentación", "Talleres de oratoria y escritura", "Orientación vocacional"] },
  { icon: Ruler, title: "Físico-Matemáticas", desc: "Base sólida para ingenierías, arquitectura y carreras de tecnología.", items: ["Matemáticas aplicadas", "Cómputo y programación", "Olimpiadas del conocimiento"] },
];
const plan = [
  { s: "1º y 2º semestre", d: "Tronco común: matemáticas, química, ética, lengua, informática y formación básica." },
  { s: "3º y 4º semestre", d: "Profundización en ciencias, humanidades e inglés, con orientación vocacional." },
  { s: "5º y 6º semestre", d: "Especialización en el área elegida y preparación para el examen de admisión." },
];
const extras = ["Inglés en todos los semestres", "Talleres culturales y deportivos", "Orientación vocacional permanente", "Asesorías académicas", "Actividades cívicas y sociales", "Preparación para la universidad"];

export default function Oferta() {
  return (
    <main>
      <PageHero kicker="Oferta académica" title={<>Un bachillerato que <span className="grad-text">abre puertas</span></>}
        sub="Bachillerato General con validez oficial ante la SEP (CCT 13PBH0319R), turno matutino, con tres áreas de especialización." />

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Áreas de especialización" title="Elige el camino que más te apasiona" sub="En quinto y sexto semestre cada alumno se especializa según la carrera que desea estudiar." />
          <div className="grid gap-6 md:grid-cols-3">
            {areas.map((a) => {
              const Icon = a.icon;
              return (
              <div key={a.title} className="rounded-xl2 border border-line bg-white p-8 transition hover:-translate-y-1.5 hover:border-[#cfe0fb] hover:shadow-soft">
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-blue to-navy text-white"><Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden /></div>
                <h3 className="font-display text-[19px] font-semibold text-navy">{a.title}</h3>
                <p className="mt-2 text-[14.5px] text-muted">{a.desc}</p>
                <ul className="mt-3.5 grid gap-2">
                  {a.items.map((it) => (<li key={it} className="flex items-center gap-2.5 text-[13.8px] text-ink"><span className="font-extrabold text-blue">✓</span> {it}</li>))}
                </ul>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Plan de estudios" title="Una ruta de 6 semestres bien acompañada" />
          <div className="mx-auto grid max-w-3xl gap-4">
            {plan.map((p, i) => (
              <div key={p.s} className="flex items-start gap-5 rounded-xl2 border border-line bg-white p-6">
                <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-blue to-navy font-display font-extrabold text-white">{i + 1}</div>
                <div><h4 className="font-display text-[17px] font-semibold text-navy">{p.s}</h4><p className="mt-1 text-[14.5px] text-muted">{p.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Formación integral" title="Mucho más que materias" sub="Complementamos lo académico con actividades que forman al alumno por completo." />
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {extras.map((e) => (
              <div key={e} className="flex items-center gap-3 rounded-xl border border-line bg-white px-5 py-4 text-[14.5px] text-ink">
                <span className="font-extrabold text-blue">✓</span> {e}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="¿Listo para conocer el plan completo?" sub="Escríbenos y te enviamos el plan de estudios detallado y los costos del ciclo escolar." href={WA} label="Solicitar informes por WhatsApp" />
    </main>
  );
}
