import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHead, CtaBand, ImageSlot } from "@/components/ui";
import { VALORES, UNIVERSIDADES } from "@/components/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Más de 30 años formando bachilleres listos para la universidad en Tulancingo, Hidalgo. Conoce la misión, visión y valores del Colegio Universitario Kaysen.",
};

export default function Nosotros() {
  return (
    <main>
      <PageHero
        eyebrow="Nosotros"
        title={<>Más de 30 años formando bachilleres listos para la <span className="serif-accent">universidad</span></>}
        sub="En el Colegio Universitario Kaysen formamos personas íntegras y preparadas, con excelencia académica y un acompañamiento cercano, en el corazón de Tulancingo, Hidalgo."
      />

      <section className="wrap two-col" style={{ paddingTop: "clamp(40px,6vw,80px)", paddingBottom: "clamp(40px,6vw,80px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
        <Reveal style={{ boxShadow: "0 24px 60px rgba(12,39,51,.16)", borderRadius: 28 }}>
          <ImageSlot label="Foto de las instalaciones o comunidad Kaysen" radius={28} ratio="4/3" />
        </Reveal>
        <Reveal>
          <h2 className="h2" style={{ fontSize: "clamp(26px,3.4vw,40px)" }}>Una preparatoria que forma personas, no solo alumnos</h2>
          <p style={{ fontSize: 17, color: "var(--ink-600)", marginTop: 18 }}>Combinamos un modelo académico exigente con grupos reducidos y tutoría personalizada. Cada alumno es acompañado por un asesor durante todo el bachillerato, con orientación vocacional para que elija con seguridad su camino universitario.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 28 }}>
            <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 34, color: "var(--cyan-d)", lineHeight: 1 }}>98%</div><div style={{ fontSize: 14, color: "var(--ink-600)", fontWeight: 600, marginTop: 4 }}>de egresados a la universidad</div></div>
            <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 34, color: "var(--cyan-d)", lineHeight: 1 }}>18:1</div><div style={{ fontSize: 14, color: "var(--ink-600)", fontWeight: 600, marginTop: 4 }}>alumnos por docente</div></div>
          </div>
        </Reveal>
      </section>

      {/* Misión / Visión */}
      <section className="band-bg2">
        <div className="wrap two-col" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <Reveal className="card">
            <div className="icon-chip-sm"><Icon name="Target" size={26} /></div>
            <h3 className="h3" style={{ fontSize: 23, marginTop: 18 }}>Nuestra misión</h3>
            <p style={{ color: "var(--ink-600)", marginTop: 10 }}>Formar bachilleres competentes y éticos, preparados para ingresar y triunfar en la universidad, mediante una educación académica de excelencia y acompañamiento humano.</p>
          </Reveal>
          <Reveal className="card">
            <div className="icon-chip-sm"><Icon name="Eye" size={26} /></div>
            <h3 className="h3" style={{ fontSize: 23, marginTop: 18 }}>Nuestra visión</h3>
            <p style={{ color: "var(--ink-600)", marginTop: 10 }}>Ser la preparatoria de referencia en Tulancingo por sus resultados académicos, su comunidad y la calidad humana de sus egresados.</p>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="wrap" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)" }}>
        <SectionHead eyebrow="Nuestros valores" title="Lo que nos distingue" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 20, marginTop: 36 }}>
          {VALORES.map((v) => (
            <Reveal key={v.title} className="card-hover" style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderLeft: "5px solid var(--cyan)", borderRadius: 18, padding: 26 }}>
              <div style={{ fontSize: 26, color: "var(--cyan-d)" }}><Icon name={v.icon as any} size={26} /></div>
              <h3 className="h3" style={{ fontSize: 19, marginTop: 14 }}>{v.title}</h3>
              <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 14.5 }}>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Universidades */}
      <section style={{ background: "var(--ink)", color: "#fff" }}>
        <div className="wrap" style={{ paddingTop: "clamp(48px,7vw,90px)", paddingBottom: "clamp(48px,7vw,90px)" }}>
          <SectionHead center light eyebrow="A dónde llegan nuestros egresados" title="Nuestros egresados estudian en las mejores universidades" sub="El 98% ingresa a la universidad. Acompañamos su orientación vocacional y la preparación para el examen de admisión." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 16, marginTop: 40 }}>
            {UNIVERSIDADES.map((u) => (
              <Reveal key={u} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, height: 88, display: "flex", alignItems: "center", justifyContent: "center", color: "#dce8ec", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, letterSpacing: ".02em" }}>{u}</Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", color: "#7e979f", fontSize: 13, marginTop: 18 }}>Referencias de destino. Comparte tus logotipos oficiales para personalizar esta sección.</div>
        </div>
      </section>

      <CtaBand title="Conoce Kaysen por dentro" sub="Agenda un recorrido y vive la experiencia de nuestra comunidad educativa." variant="cyan" primary="recorrido" showSecondary={false} />
    </main>
  );
}
