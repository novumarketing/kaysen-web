import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHead, CtaBand } from "@/components/ui";
import { PASOS, CALENDARIO, REQUISITOS, BECAS } from "@/components/site";

export const metadata: Metadata = {
  title: "Admisiones 2026–2027",
  description: "Asegura el lugar de tu hijo en cuatro pasos. Calendario de admisión, requisitos y becas de hasta 40% en la Preparatoria Kaysen, Tulancingo.",
};

export default function Admisiones() {
  return (
    <main>
      <PageHero
        eyebrow="Admisiones 2026–2027"
        title={<>Asegura el lugar de tu hijo en <span className="serif-accent">cuatro pasos</span></>}
        sub="Cupo limitado por grupo. Todo el proceso lo realizas acompañado de un asesor. Becas de hasta 40%."
      />

      {/* Pasos */}
      <section className="wrap" style={{ maxWidth: 1100, paddingTop: "clamp(40px,6vw,72px)", paddingBottom: "clamp(40px,6vw,72px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22 }}>
          {PASOS.map((s) => (
            <Reveal key={s.n} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 22, padding: 28 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 40, color: "var(--cyan-100)", lineHeight: 1 }}>{s.n}</div>
              <h3 className="h3" style={{ fontSize: 19, marginTop: 10 }}>{s.title}</h3>
              <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 14.5 }}>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Calendario */}
      <section className="band-bg2">
        <div className="wrap-narrow" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)" }}>
          <SectionHead center eyebrow="Fechas clave" title="Calendario de admisión · Ciclo 2026–2027" />
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 14 }}>
            {CALENDARIO.map((c) => (
              <Reveal key={c.mes} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 18, padding: "22px 26px", display: "flex", gap: 22, alignItems: "center" }}>
                <div style={{ flex: "none", width: 120, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--cyan-d)" }}>{c.mes}</div>
                <div style={{ width: 1, alignSelf: "stretch", background: "var(--bd)" }} />
                <div><div style={{ fontWeight: 700, color: "var(--ink)", fontSize: 17 }}>{c.title}</div><div style={{ color: "var(--ink-600)", fontSize: 14.5, marginTop: 3 }}>{c.desc}</div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos + Becas */}
      <section className="wrap two-col" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(32px,5vw,56px)" }}>
        <Reveal>
          <div className="eyebrow">Requisitos</div>
          <h2 className="h2" style={{ fontSize: "clamp(24px,3vw,34px)", margin: "12px 0 22px" }}>Lo que necesitas para inscribir</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {REQUISITOS.map((r) => (
              <div key={r} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ flex: "none", width: 26, height: 26, borderRadius: "50%", background: "var(--cyan-50)", color: "var(--cyan-d)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}><Icon name="Check" size={15} /></span>
                <span style={{ color: "var(--ink-700)", fontSize: 15.5 }}>{r}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="eyebrow">Becas y apoyos</div>
          <h2 className="h2" style={{ fontSize: "clamp(24px,3vw,34px)", margin: "12px 0 22px" }}>Apoyamos tu inversión</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {BECAS.map((b) => (
              <div key={b.title} style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 18, padding: 22, display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ flex: "none", width: 48, height: 48, borderRadius: 13, background: "var(--cyan-50)", color: "var(--cyan-d)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={b.icon as any} size={23} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 700, color: "var(--ink)", fontSize: 17 }}>{b.title}</span>
                    <span style={{ background: "var(--cyan)", color: "#fff", fontWeight: 700, fontSize: 12, padding: "3px 10px", borderRadius: 999 }}>{b.tag}</span>
                  </div>
                  <div style={{ color: "var(--ink-600)", fontSize: 14, marginTop: 4 }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand title="Comienza el proceso hoy" sub="Te enviamos la lista de precios y agendamos tu recorrido el mismo día." variant="cyan" primary="informes" />
    </main>
  );
}
