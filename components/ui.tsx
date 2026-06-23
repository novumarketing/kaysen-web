import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { WA_INFORMES, WA_RECORRIDO } from "./site";

/* Page hero used on inner pages */
export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub: string }) {
  return (
    <section style={{ background: "radial-gradient(1000px 480px at 80% -20%,rgba(22,166,206,.10),transparent 60%),var(--bg)" }}>
      <div className="wrap" style={{ paddingTop: "clamp(44px,6vw,80px)", paddingBottom: "clamp(28px,4vw,48px)" }}>
        <Reveal style={{ maxWidth: 760 }}>
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="h1" style={{ marginTop: 14 }}>{title}</h1>
          <p className="lead" style={{ marginTop: 18, maxWidth: 620 }}>{sub}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* Centered or left section heading */
export function SectionHead({ eyebrow, title, sub, center, light }: { eyebrow: string; title: string; sub?: string; center?: boolean; light?: boolean }) {
  return (
    <Reveal style={{ maxWidth: center ? 760 : 680, marginLeft: center ? "auto" : undefined, marginRight: center ? "auto" : undefined, textAlign: center ? "center" : "left" }}>
      <div className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</div>
      <h2 className="h2" style={{ marginTop: 12, color: light ? "#fff" : undefined }}>{title}</h2>
      {sub && <p style={{ marginTop: 16, fontSize: 18, color: light ? "#bcd0d6" : "var(--ink-600)" }}>{sub}</p>}
    </Reveal>
  );
}

/* CTA band — dark or cyan */
export function CtaBand({ title, sub, variant = "ink", primary = "informes", showSecondary = true }: { title: string; sub: string; variant?: "ink" | "cyan"; primary?: "informes" | "recorrido"; showSecondary?: boolean }) {
  const bg = variant === "ink"
    ? "linear-gradient(120deg,var(--ink),var(--ink-800))"
    : "linear-gradient(120deg,var(--cyan-d),var(--cyan-dd))";
  return (
    <section style={{ background: bg }}>
      <Reveal style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(48px,7vw,100px) clamp(20px,4vw,48px)", textAlign: "center" }}>
        <h2 className="h2" style={{ color: "#fff", fontSize: "clamp(28px,4vw,48px)" }}>{title}</h2>
        <p style={{ color: variant === "ink" ? "#bcd0d6" : "#e3f6fc", fontSize: 18, margin: "16px auto 0", maxWidth: 560 }}>{sub}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 32 }}>
          {variant === "ink" ? (
            <a href={primary === "informes" ? WA_INFORMES : WA_RECORRIDO} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Icon name="FileText" size={19} />{primary === "informes" ? "Solicitar informes" : "Agendar recorrido"}
            </a>
          ) : (
            <a href={primary === "informes" ? WA_INFORMES : WA_RECORRIDO} target="_blank" rel="noopener noreferrer" className="btn btn-white">
              {primary === "informes" ? "Solicitar informes" : "Agendar recorrido"}
            </a>
          )}
          {showSecondary && (
            <a href={primary === "informes" ? WA_RECORRIDO : WA_INFORMES} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              {primary === "informes" ? "Agendar recorrido" : "Solicitar informes"}
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}

/* Image placeholder slot (until client photos arrive) */
export function ImageSlot({ label, radius = 24, ratio = "4/5" }: { label: string; radius?: number; ratio?: string }) {
  return (
    <div style={{ borderRadius: radius, overflow: "hidden", aspectRatio: ratio, background: "linear-gradient(135deg,var(--bg2),#dbe8ed)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "var(--ink-500)", textAlign: "center", padding: 20 }}>
        <Icon name="MapPin" size={28} style={{ opacity: 0.5 }} />
        <span style={{ fontSize: 13.5, fontWeight: 600 }}>{label}</span>
      </div>
    </div>
  );
}
