import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHead, CtaBand } from "@/components/ui";
import { AREAS } from "@/components/site";

export const metadata: Metadata = {
  title: "Oferta académica",
  description: "Bachillerato general con tres áreas de especialización: Ciencias Experimentales, Ciencias Sociales y Físico-Matemáticas. Validez oficial SEP en Tulancingo.",
};

const carreras: Record<string, string> = {
  "Ciencias Experimentales": "medicina, ingenierías y ciencias de la salud.",
  "Ciencias Sociales": "derecho, comunicación, psicología y administración.",
  "Físico-Matemáticas": "ingenierías, arquitectura y tecnología.",
};

export default function Oferta() {
  return (
    <main>
      <PageHero
        eyebrow="Oferta académica"
        title={<>Bachillerato general con tres áreas de <span className="serif-accent">especialización</span></>}
        sub="Un tronco común sólido durante los primeros semestres y, al final del bachillerato, la especialización alineada con la carrera universitaria que tu hijo quiere estudiar."
      />

      <section className="wrap" style={{ paddingTop: "clamp(40px,6vw,72px)", paddingBottom: "clamp(40px,6vw,72px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 24 }}>
          {AREAS.map((a) => (
            <Reveal key={a.title} className="card-hover" style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 24, overflow: "hidden", boxShadow: "0 2px 6px rgba(12,39,51,.05)" }}>
              <div style={{ height: 120, background: "var(--bg2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "var(--cyan-d)" }}><Icon name={a.icon as any} size={44} /></span>
              </div>
              <div style={{ padding: 28 }}>
                <h3 className="h3" style={{ fontSize: 22 }}>{a.title}</h3>
                <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 15 }}>Orientada a carreras como {carreras[a.title]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Plan de estudios */}
      <section className="band-bg2">
        <div className="wrap-narrow" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)" }}>
          <SectionHead center eyebrow="Plan de estudios" title="Un camino de seis semestres" />
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40 }}>
            <Reveal style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 22, padding: 32 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--cyan-50)", color: "var(--cyan-dd)", fontWeight: 700, fontSize: 13, padding: "6px 13px", borderRadius: 999 }}>1º – 4º semestre</div>
              <h3 className="h3" style={{ marginTop: 16 }}>Tronco común</h3>
              <p style={{ color: "var(--ink-600)", margin: "8px 0 14px", fontSize: 15 }}>Bases académicas sólidas en todas las áreas del conocimiento.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {["Matemáticas, ciencias y humanidades", "Lengua, comunicación e inglés", "Hábitos de estudio y tutoría"].map((t) => (
                  <span key={t} style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 14.5, color: "var(--ink-700)" }}><span style={{ color: "var(--cyan-d)", display: "flex" }}><Icon name="Check" size={17} /></span>{t}</span>
                ))}
              </div>
            </Reveal>
            <Reveal style={{ background: "var(--ink)", color: "#fff", borderRadius: 22, padding: 32 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(22,166,206,.18)", color: "var(--cyan)", fontWeight: 700, fontSize: 13, padding: "6px 13px", borderRadius: 999 }}>5º – 6º semestre</div>
              <h3 className="h3" style={{ marginTop: 16, color: "#fff" }}>Especialización</h3>
              <p style={{ color: "#bcd0d6", margin: "8px 0 14px", fontSize: 15 }}>Tu hijo elige el área alineada con la carrera que quiere estudiar.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {["Ciencias Experimentales", "Ciencias Sociales", "Físico-Matemáticas"].map((t) => (
                  <span key={t} style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 14.5, color: "#dce8ec" }}><span style={{ color: "var(--cyan)", display: "flex" }}><Icon name="Check" size={17} /></span>{t}</span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center", marginTop: 34 }}>
            {[{ i: "ShieldCheck", t: "Validez oficial SEP" }, { i: "GraduationCap", t: "Preparación para examen de admisión" }, { i: "Compass", t: "Orientación vocacional" }].map((s) => (
              <span key={s.t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "var(--ink-700)" }}><span style={{ color: "var(--cyan-d)", display: "flex" }}><Icon name={s.i as any} size={18} /></span>{s.t}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand title="¿Listo para conocer el plan completo?" sub="Solicita informes y te enviamos el plan de estudios y la lista de precios el mismo día." variant="ink" primary="informes" showSecondary={false} />
    </main>
  );
}
