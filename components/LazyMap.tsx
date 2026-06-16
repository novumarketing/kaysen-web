"use client";
import { useEffect, useRef, useState } from "react";
import { MAPS_EMBED, MAPS_LINK } from "./site";

/**
 * Google Maps con lazy loading vía IntersectionObserver:
 * el <iframe> solo se monta cuando el bloque entra al viewport,
 * evitando bloquear el LCP de la página.
 */
export default function LazyMap({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show]);

  return (
    <div ref={ref} className={`relative h-[320px] w-full overflow-hidden rounded-xl2 border border-line bg-bg-2 ${className}`}>
      {show ? (
        <iframe
          title="Ubicación del Colegio Kaysen en Tulancingo"
          src={MAPS_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      ) : (
        <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
          <span className="text-3xl">📍</span>
          <span className="font-display text-sm font-semibold text-navy">Ver ubicación en Google Maps</span>
          <span className="text-[13px]">Morelos Oriente 304, Centro · Tulancingo</span>
        </a>
      )}
    </div>
  );
}
