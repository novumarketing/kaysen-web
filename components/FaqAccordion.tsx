"use client";
import { useState } from "react";
import { SectionHead } from "./ui";

const FAQS = [
  { q: "¿Cuáles son los costos y planes de pago?", a: "Manejamos una inscripción anual y colegiaturas mensuales accesibles, con becas académicas y deportivas de hasta el 40%. Solicita la lista de precios vigente y los planes de pago por WhatsApp; te la enviamos el mismo día." },
  { q: "¿Qué requisitos necesito para inscribir a mi hijo?", a: "Certificado de secundaria (o constancia), acta de nacimiento, CURP, comprobante de domicilio, identificación del tutor y fotografías. El aspirante presenta un examen diagnóstico amigable como parte del proceso." },
  { q: "¿Tienen convenios con universidades o empresas?", a: "Sí. Contamos con convenios y vínculos que facilitan el pase y la orientación hacia universidades de la región, además de actividades de orientación vocacional durante todo el bachillerato." },
  { q: "¿Cómo es el proceso de admisión?", a: "Cuatro pasos: (1) solicitas informes y agendas tu recorrido, (2) examen diagnóstico, (3) entrega de documentos y (4) firma de inscripción y bienvenida. Todo el proceso lo realizas con el acompañamiento de un asesor." },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-24">
      <div className="wrap">
        <SectionHead center kicker="Preguntas frecuentes" title="Resuelve tus dudas antes de inscribir" sub="Lo más consultado por las familias de Tulancingo." />
        <div className="mx-auto max-w-3xl">
          {FAQS.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={f.q} className="mb-3.5 overflow-hidden rounded-2xl border border-line bg-white">
                <h3>
                  <button
                    id={`faq-btn-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-base font-semibold text-navy"
                  >
                    {f.q}
                    <span aria-hidden className={`text-2xl font-normal text-blue transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14.8px] leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
