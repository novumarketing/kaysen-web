"use client";
import { useEffect, useState } from "react";
import { SectionHead } from "./ui";

type Testimonial = { name: string; role: string; quote: string; photo?: string };

// Edita estos textos / agrega la ruta de foto en `photo` (ej. "/testimonios/ana.jpg")
const ITEMS: Testimonial[] = [
  { name: "Ana Cristina Rangel", role: "Mamá de alumno de 6º semestre", quote: "El acompañamiento es real. Mi hijo pasó al examen de la universidad a la primera y siempre se sintió guiado.", photo: "" },
  { name: "Diego Martínez", role: "Egresado · Generación 2024", quote: "Salí de Kaysen con bases sólidas en matemáticas. La especialización me preparó para ingeniería.", photo: "" },
  { name: "Familia Hernández Soto", role: "Padres de familia", quote: "Grupos pequeños y maestros que conocen a cada alumno. Se nota la diferencia frente a otras prepas.", photo: "" },
];

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = ITEMS.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);

  // Autoplay accesible: se pausa al hover/foco y respeta prefers-reduced-motion
  useEffect(() => {
    if (paused) return;
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n, paused]);

  const t = ITEMS[i];
  return (
    <section className="bg-bg-2 py-20 md:py-24">
      <div className="wrap">
        <SectionHead center kicker="Testimonios" title="Familias que ya confían en Kaysen" sub="Historias reales de nuestra comunidad educativa." />
        <div
          className="mx-auto max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="relative rounded-xl2 border border-line bg-white p-8 text-center shadow-soft md:p-10">
            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-blue to-navy font-display text-2xl font-bold text-white">
              {t.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.photo} alt={t.name} className="h-full w-full object-cover" />
              ) : (
                initials(t.name)
              )}
            </div>
            <p className="font-display text-[19px] leading-relaxed text-ink md:text-[21px]">“{t.quote}”</p>
            <div className="mt-6">
              <div className="font-display font-semibold text-navy">{t.name}</div>
              <div className="text-[13.5px] text-muted">{t.role}</div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} aria-label="Anterior" className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy transition hover:border-blue hover:text-blue">‹</button>
            <div className="flex gap-2">
              {ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                  aria-current={idx === i}
                  onClick={() => setI(idx)}
                  className="grid h-11 w-11 place-items-center"
                >
                  <span className={`block h-2.5 rounded-full transition-all ${idx === i ? "w-6 bg-blue" : "w-2.5 bg-line"}`} />
                </button>
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Siguiente" className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy transition hover:border-blue hover:text-blue">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
