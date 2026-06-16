"use client";
import { useState } from "react";
import { GUIA_PDF } from "./site";

/**
 * CRO · Lead magnet. Captura nombre + WhatsApp y entrega la guía en PDF.
 * Al enviar, dispara la descarga del PDF (ubicado en /public).
 * Puedes conectar `onSubmit` a tu CRM / hoja de cálculo más adelante.
 */
export default function LeadMagnet() {
  const [done, setDone] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    // Descarga del PDF
    const a = document.createElement("a");
    a.href = GUIA_PDF;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setDone(true);
  };

  return (
    <section className="py-20">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-gradient-to-br from-navy to-blue px-7 py-12 md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-gold">Guía gratuita en PDF</span>
              <h2 className="mt-4 font-display text-[clamp(24px,3.2vw,34px)] font-bold leading-tight">
                ¿Cómo elegir la preparatoria ideal? Descarga nuestra guía gratuita
              </h2>
              <p className="mt-3 max-w-md text-[15.5px] text-[#d3e0f2]">
                Descarga gratis nuestra guía con los 7 criterios que toda familia debe evaluar antes de decidir. Práctica, breve y sin tecnicismos.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              {done ? (
                <div className="py-6 text-center">
                  <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-blue-soft text-2xl">✓</div>
                  <h3 className="font-display text-lg font-semibold text-navy">¡Tu guía va en camino!</h3>
                  <p className="mt-1.5 text-[14px] text-muted">Si la descarga no inició, <a href={GUIA_PDF} className="font-semibold text-blue underline" target="_blank" rel="noopener noreferrer">haz clic aquí</a>.</p>
                </div>
              ) : (
                <form onSubmit={handle}>
                  <p className="mb-4 font-display text-[15px] font-semibold text-navy">Recíbela ahora mismo</p>
                  <input required type="text" placeholder="Tu nombre" className="mb-3 w-full rounded-[11px] border-[1.5px] border-line bg-[#fbfcfe] px-3.5 py-3 text-[14.5px] text-ink outline-none focus:border-blue" />
                  <input required type="tel" placeholder="WhatsApp (10 dígitos)" className="mb-4 w-full rounded-[11px] border-[1.5px] border-line bg-[#fbfcfe] px-3.5 py-3 text-[14.5px] text-ink outline-none focus:border-blue" />
                  <button type="submit" className="btn btn-gold w-full">Descargar guía gratis</button>
                  <p className="mt-3 text-center text-[12px] text-muted">Sin spam. Solo información útil para tu decisión.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
