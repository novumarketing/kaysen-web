import type { Metadata } from "next";
import { PageHero, SectionHead, CtaBand } from "@/components/ui";
import { WA_VISIT } from "@/components/site";

export const metadata: Metadata = {
  title: "Campus",
  description: "Conoce las instalaciones del Colegio Universitario Kaysen: laboratorios, biblioteca, salas de cómputo y áreas deportivas en Tulancingo.",
};

const gallery = [
  { t: "Laboratorios de ciencias", cls: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#1d3c63] to-blue", h: "h-full min-h-[260px]" },
  { t: "Biblioteca", cls: "bg-gradient-to-br from-blue to-[#5b8de8]", h: "h-[200px]" },
  { t: "Salas de cómputo", cls: "bg-gradient-to-br from-gold to-[#d18f24]", h: "h-[200px]" },
  { t: "Áreas deportivas", cls: "bg-gradient-to-br from-navy to-[#1d3c63]", h: "h-[200px]" },
  { t: "Vida estudiantil", cls: "bg-gradient-to-br from-[#5b8de8] to-blue", h: "h-[200px]" },
];
const facilities = [
  { icon: "🔬", t: "Laboratorios equipados", d: "Espacios de Física, Química y Biología para el aprendizaje práctico." },
  { icon: "📚", t: "Biblioteca", d: "Acervo y áreas de estudio para la investigación y la lectura." },
  { icon: "💻", t: "Salas de cómputo", d: "Equipo actualizado para clases de informática y programación." },
  { icon: "🏀", t: "Áreas deportivas", d: "Canchas y espacios para la activación física y la convivencia." },
  { icon: "🏛️", t: "Aulas cómodas", d: "Salones iluminados y pensados para grupos reducidos." },
  { icon: "📍", t: "Ubicación céntrica", d: "En el corazón de Tulancingo, de fácil acceso para las familias." },
];

export default function Campus() {
  return (
    <main>
      <PageHero kicker="Campus" title={<>Instalaciones para <span className="grad-text">aprender y crecer</span></>}
        sub="Espacios pensados para la formación integral de cada estudiante, en el corazón de Tulancingo." />

      <section className="py-16 md:py-20">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {gallery.map((g) => (
              <div key={g.t} className={`relative flex items-end overflow-hidden rounded-2xl p-4 font-display text-sm font-semibold text-white ${g.cls} ${g.h}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <span className="relative z-10">{g.t}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-[13.5px] text-muted">* Imágenes de referencia. Próximamente fotografías reales del campus.</p>
        </div>
      </section>

      <section className="bg-bg-2 py-20 md:py-24">
        <div className="wrap">
          <SectionHead center kicker="Instalaciones" title="Todo lo que tu hijo necesita" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div key={f.t} className="rounded-xl2 border border-line bg-white p-7">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-[13px] bg-blue-soft text-2xl">{f.icon}</div>
                <h3 className="font-display text-[17px] font-semibold text-navy">{f.t}</h3>
                <p className="mt-2 text-[14px] text-muted">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ven a conocer el campus en persona" sub="Agenda una visita guiada y recorre nuestras instalaciones con el equipo del colegio." href={WA_VISIT} label="Agendar una visita" />
    </main>
  );
}
