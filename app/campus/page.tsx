import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, ImageSlot } from "@/components/ui";
import { GALERIA, MAPS } from "@/components/site";

export const metadata: Metadata = {
  title: "Campus",
  description: "Aulas, laboratorios y áreas comunes en el corazón de Tulancingo. Conoce las instalaciones de la Preparatoria Colegio Universitario Kaysen.",
};

export default function Campus() {
  return (
    <main>
      <PageHero
        eyebrow="Campus"
        title={<>Un espacio pensado para <span className="serif-accent">aprender</span></>}
        sub="Aulas, laboratorios y áreas comunes en el corazón de Tulancingo. Conoce nuestras instalaciones."
      />

      {/* Galería */}
      <section className="wrap" style={{ paddingTop: "clamp(36px,5vw,64px)", paddingBottom: "clamp(36px,5vw,64px)" }}>
        <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {GALERIA.map((g) => (
            <Reveal key={g.label} className={g.span ? "span2" : ""} style={{ gridColumn: g.span ? "span 2" : "auto", boxShadow: "0 2px 8px rgba(12,39,51,.06)", borderRadius: 20 }}>
              <ImageSlot label={g.label} radius={20} ratio="4/3" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ubicación */}
      <section className="band-bg2">
        <div className="wrap two-col" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,56px)", alignItems: "center" }}>
          <Reveal>
            <div className="eyebrow">Ubicación</div>
            <h2 className="h2" style={{ fontSize: "clamp(26px,3.2vw,38px)", marginTop: 12 }}>En el centro de Tulancingo</h2>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginTop: 22 }}>
              <span style={{ flex: "none", width: 42, height: 42, borderRadius: 12, background: "var(--cyan-50)", color: "var(--cyan-d)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="MapPin" size={20} /></span>
              <div style={{ fontSize: 16, color: "var(--ink-700)", fontWeight: 600 }}>Luis Ponce Norte #907<br /><span style={{ fontWeight: 400, color: "var(--ink-600)" }}>Col. Centro, C.P. 43600, Tulancingo de Bravo, Hidalgo</span></div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 16 }}>
              <span style={{ flex: "none", width: 42, height: 42, borderRadius: 12, background: "var(--cyan-50)", color: "var(--cyan-d)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="Sun" size={20} /></span>
              <div style={{ fontSize: 16, color: "var(--ink-700)", fontWeight: 600 }}>Turno matutino</div>
            </div>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" style={{ marginTop: 24, display: "inline-flex", alignItems: "center", gap: ".5em", background: "var(--cyan)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 24px", borderRadius: 999, textDecoration: "none" }}><Icon name="Navigation" size={18} />Ver en Google Maps</a>
          </Reveal>
          <Reveal>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" style={{ display: "block", borderRadius: 24, overflow: "hidden", boxShadow: "0 18px 48px rgba(12,39,51,.14)", aspectRatio: "4/3", background: "linear-gradient(135deg,#d7e7ec,#c2dae0)", position: "relative", textDecoration: "none" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "var(--cyan-dd)" }}>
                <Icon name="MapPin" size={48} />
                <span style={{ fontWeight: 700, marginTop: 8, fontSize: 15 }}>Luis Ponce Norte #907, Tulancingo</span>
                <span style={{ fontSize: 13, color: "var(--ink-600)", marginTop: 2 }}>Toca para abrir el mapa</span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
