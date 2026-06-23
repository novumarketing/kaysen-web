import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import { SectionHead, CtaBand, ImageSlot } from "@/components/ui";
import { WA_INFORMES, TRUST, STATS, PILLARS, AREAS } from "@/components/site";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(1200px 600px at 78% -10%,rgba(22,166,206,.10),transparent 60%),radial-gradient(900px 500px at 5% 110%,rgba(22,166,206,.06),transparent 55%),var(--bg)" }}>
        <div className="wrap hero-grid" style={{ paddingTop: "clamp(48px,7vw,96px)", paddingBottom: "clamp(48px,7vw,96px)", display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
          <div>
            <Reveal style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#fff", border: "1px solid var(--bd)", padding: "7px 15px", borderRadius: 999, fontSize: 13, fontWeight: 600, color: "var(--ink-700)", boxShadow: "0 2px 10px rgba(12,39,51,.05)" }}>
              <span className="dot-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--cyan)" }} />
              Preparatoria en Tulancingo, Hidalgo
            </Reveal>
            <h1 className="h1-hero" style={{ marginTop: 20 }}>
              El <span style={{ color: "var(--cyan)" }}>98%</span> de nuestros egresados llega a la <span className="serif-accent">universidad</span>
            </h1>
            <p className="lead" style={{ maxWidth: 560, marginTop: 22 }}>
              Formamos bachilleres listos para aprobar el examen de admisión y triunfar en la universidad. Excelencia académica y acompañamiento cercano, en el corazón de Tulancingo.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 13, marginTop: 32 }}>
              <a href={WA_INFORMES} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Icon name="FileText" size={19} />Solicitar informes</a>
              <Link href="/oferta" className="btn btn-ghost">Ver oferta académica<Icon name="ArrowRight" size={18} /></Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 30 }}>
              {TRUST.map((t) => (
                <span key={t.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "var(--ink-700)" }}>
                  <Icon name={t.icon as any} size={17} style={{ color: "var(--cyan)" }} />{t.label}
                </span>
              ))}
            </div>
          </div>

          <Reveal style={{ position: "relative" }}>
            <div style={{ boxShadow: "0 30px 70px rgba(12,39,51,.18)", borderRadius: 32 }}>
              <ImageSlot label="Foto del campus o alumnos de Kaysen" radius={32} ratio="4/5" />
            </div>
            <div style={{ position: "absolute", left: -18, bottom: 34, background: "#fff", border: "1px solid var(--bd)", borderRadius: 20, padding: "18px 22px", boxShadow: "0 18px 48px rgba(12,39,51,.16)", maxWidth: 230 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 34, color: "var(--cyan)", lineHeight: 1 }}>4.2★</div>
              <div style={{ fontSize: 13, color: "var(--ink-600)", fontWeight: 600, marginTop: 2 }}>Calificación de familias que ya confían en Kaysen</div>
            </div>
            <div style={{ position: "absolute", right: -14, top: 26, background: "var(--ink)", color: "#fff", borderRadius: 16, padding: "13px 17px", boxShadow: "0 14px 34px rgba(12,39,51,.25)", display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="ShieldCheck" size={22} style={{ color: "var(--cyan)" }} />
              <div><div style={{ fontWeight: 800, fontSize: 14, lineHeight: 1.1 }}>Incorporado</div><div style={{ fontSize: 12, color: "#9fb6bd" }}>a la SEP</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: "var(--ink)" }}>
        <div className="wrap" style={{ paddingTop: "clamp(34px,4vw,52px)", paddingBottom: "clamp(34px,4vw,52px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 28 }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,4vw,48px)", color: "#fff", lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#9fb6bd", fontSize: 14, fontWeight: 500, marginTop: 6, maxWidth: 170, marginInline: "auto" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PILARES */}
      <section className="wrap section">
        <SectionHead eyebrow="Por qué Kaysen" title="Una preparatoria que forma personas, no solo alumnos" sub="Tres pilares que distinguen la experiencia educativa en nuestro colegio." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginTop: 44 }}>
          {PILLARS.map((p) => (
            <Reveal key={p.title} className="card card-hover">
              <div className="icon-chip"><Icon name={p.icon as any} size={28} /></div>
              <h3 className="h3" style={{ fontSize: 22, marginTop: 20 }}>{p.title}</h3>
              <p style={{ color: "var(--ink-600)", marginTop: 10, fontSize: 15.5 }}>{p.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 34 }}>
          <Link href="/nosotros" className="link-arrow">Conoce más sobre el colegio<Icon name="ArrowRight" size={18} /></Link>
        </Reveal>
      </section>

      {/* OFERTA preview */}
      <section className="band-bg2">
        <div className="wrap section">
          <SectionHead eyebrow="Oferta académica" title="Tres áreas para tres futuros distintos" sub="En los últimos semestres tu hijo elige la especialización alineada con la carrera que quiere estudiar." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginTop: 44 }}>
            {AREAS.map((a) => (
              <Reveal key={a.title} className="card-hover" style={{ background: "var(--surface)", border: "1px solid var(--bd)", borderRadius: 24, overflow: "hidden", boxShadow: "0 2px 6px rgba(12,39,51,.05)" }}>
                <div style={{ height: 6, background: "var(--cyan)" }} />
                <div style={{ padding: 30 }}>
                  <div className="icon-chip-sm"><Icon name={a.icon as any} size={26} /></div>
                  <h3 className="h3" style={{ marginTop: 18 }}>{a.title}</h3>
                  <p style={{ color: "var(--ink-600)", marginTop: 8, fontSize: 15 }}>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 34 }}>
            <Link href="/oferta" className="link-arrow">Ver el plan de estudios completo<Icon name="ArrowRight" size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="wrap section">
        <SectionHead center eyebrow="Testimonios" title="Familias que ya confían en Kaysen" />
        <Reveal style={{ maxWidth: 820, margin: "44px auto 0", background: "var(--ink)", borderRadius: 28, padding: "clamp(32px,5vw,56px)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -30, left: 30, fontFamily: "var(--font-spectral), Georgia, serif", fontStyle: "italic", fontSize: 180, color: "rgba(22,166,206,.16)", lineHeight: 1 }}>“</div>
          <p style={{ position: "relative", fontFamily: "var(--font-spectral), Georgia, serif", fontStyle: "italic", fontSize: "clamp(22px,2.6vw,30px)", color: "#fff", lineHeight: 1.4, margin: 0 }}>
            El acompañamiento es real. Mi hijo pasó al examen de la universidad a la primera y siempre se sintió guiado.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 28 }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--cyan)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontFamily: "var(--font-display)", fontSize: 18 }}>AC</div>
            <div><div style={{ color: "#fff", fontWeight: 700 }}>Ana Cristina Rangel</div><div style={{ color: "#9fb6bd", fontSize: 14 }}>Mamá de alumno de 6º semestre</div></div>
            <div style={{ marginLeft: "auto", color: "var(--gold)", fontSize: 18, letterSpacing: 2 }}>★★★★★</div>
          </div>
        </Reveal>
      </section>

      {/* LEAD MAGNET */}
      <section className="band-bg2">
        <div className="wrap" style={{ paddingTop: "clamp(48px,6vw,88px)", paddingBottom: "clamp(48px,6vw,88px)" }}>
          <Reveal className="lead-grid" style={{ background: "linear-gradient(120deg,var(--cyan-d),var(--cyan-dd))", borderRadius: 28, padding: "clamp(32px,5vw,56px)", display: "grid", gridTemplateColumns: "1.4fr .9fr", gap: 36, alignItems: "center", boxShadow: "0 24px 60px rgba(11,114,144,.32)" }}>
            <div>
              <div style={{ textTransform: "uppercase", letterSpacing: ".14em", fontSize: 13, fontWeight: 700, color: "#bfeefb" }}>Guía gratuita en PDF</div>
              <h2 className="h2" style={{ color: "#fff", fontSize: "clamp(26px,3.4vw,40px)", marginTop: 12 }}>¿Cómo elegir la preparatoria ideal para tu hijo?</h2>
              <p style={{ color: "#e3f6fc", fontSize: 17, marginTop: 14, maxWidth: 520 }}>Descarga gratis los 7 criterios que toda familia debe evaluar antes de decidir. Práctica, breve y sin tecnicismos.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 20, padding: 26 }}>
              <div style={{ fontWeight: 700, color: "var(--ink)", fontSize: 16, marginBottom: 14 }}>Recíbela ahora mismo</div>
              <input type="email" placeholder="Tu correo electrónico" className="fld" />
              <a href="/guia-elegir-preparatoria-kaysen.pdf" target="_blank" rel="noopener noreferrer" style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: ".5em", background: "var(--cyan)", color: "#fff", fontWeight: 700, fontSize: 16, padding: 14, borderRadius: 12, textDecoration: "none" }}>Descargar guía gratis</a>
              <div style={{ fontSize: 12, color: "var(--ink-500)", textAlign: "center", marginTop: 10 }}>Sin spam. Solo información útil para tu decisión.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap-narrow section">
        <SectionHead center eyebrow="Preguntas frecuentes" title="Resuelve tus dudas antes de inscribir" />
        <Faq />
      </section>

      {/* CTA BAND */}
      <CtaBand title="Asegura el lugar de tu hijo para el próximo ciclo" sub="Cupo limitado por grupo. Solicita la lista de precios y agenda un recorrido por nuestras instalaciones." variant="ink" primary="informes" />
    </main>
  );
}
