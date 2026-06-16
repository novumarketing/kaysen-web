"use client";
import { useState } from "react";

/* ---------- Datos del colegio ---------- */
const PHONE = "775 108 9469";
const ADDRESS = "Morelos Oriente 304, Col. Centro, CP 43600, Tulancingo de Bravo, Hidalgo";
const EMAIL = "contacto@colegiokaysen.edu.mx";
const WA =
  "https://wa.me/527751089469?text=" +
  encodeURIComponent(
    "Hola, vi el sitio del Colegio Kaysen y me gustaría recibir informes sobre el proceso de inscripción al bachillerato."
  );
const WA_VISIT =
  "https://wa.me/527751089469?text=" +
  encodeURIComponent("Hola, me gustaría agendar una visita al Colegio Kaysen.");
const NAV = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#oferta", label: "Oferta académica" },
  { href: "#admisiones", label: "Admisiones" },
  { href: "#campus", label: "Campus" },
  { href: "#contacto", label: "Contacto" },
];

const areas = [
  { icon: "🔬", title: "Ciencias Experimentales", desc: "Ruta hacia medicina, ingenierías y ciencias de la salud.", items: ["Laboratorios de Física, Química y Biología", "Preparación para examen de admisión", "Proyectos de investigación"] },
  { icon: "📚", title: "Ciencias Sociales y Humanidades", desc: "Para derecho, comunicación, psicología y administración.", items: ["Pensamiento crítico y argumentación", "Talleres de oratoria y escritura", "Orientación vocacional"] },
  { icon: "📐", title: "Físico-Matemáticas", desc: "Base sólida para ingenierías, arquitectura y tecnología.", items: ["Matemáticas aplicadas", "Cómputo y programación", "Olimpiadas del conocimiento"] },
];
const valores = [
  { icon: "🎯", title: "Excelencia académica", desc: "Docentes especializados y un plan exigente que prepara a cada alumno para la universidad." },
  { icon: "🤝", title: "Acompañamiento cercano", desc: "Grupos reducidos, tutoría personalizada y orientación vocacional durante todo el bachillerato." },
  { icon: "🌱", title: "Formación en valores", desc: "Educamos personas íntegras, responsables y comprometidas con su comunidad." },
];
const pasos = [
  { n: 1, t: "Solicita informes", d: "Escríbenos por WhatsApp o llámanos y agenda una visita al colegio." },
  { n: 2, t: "Examen diagnóstico", d: "Evaluación amigable para conocer el nivel del aspirante." },
  { n: 3, t: "Entrega de documentos", d: "Certificado de secundaria, CURP, acta de nacimiento y fotografías." },
  { n: 4, t: "¡Bienvenido a Kaysen!", d: "Inscripción, asignación de grupo y kit de bienvenida." },
];
const stats = [
  { n: "4.2★", l: "Valoración de las familias" },
  { n: "30+", l: "Años formando egresados" },
  { n: "3", l: "Áreas de especialización" },
  { n: "100%", l: "Validez oficial SEP" },
];
const faqs = [
  { q: "¿Qué modalidad de bachillerato ofrecen?", a: "Bachillerato General con validez oficial ante la SEP (CCT 13PBH0319R), turno matutino, con tres áreas de especialización en quinto y sexto semestre." },
  { q: "¿Cuándo puedo inscribir a mi hijo?", a: "Las inscripciones para el próximo ciclo escolar ya están abiertas. Te recomendamos solicitar informes pronto, ya que el cupo por grupo es limitado." },
  { q: "¿Dónde están ubicados?", a: "En Morelos Oriente 304, Col. Centro, en el corazón de Tulancingo de Bravo, Hidalgo. Un punto céntrico y de fácil acceso." },
  { q: "¿Ofrecen becas?", a: "Sí, contamos con apoyos y becas académicas sujetas a evaluación y disponibilidad. Pregunta por los requisitos al solicitar informes." },
];
const campus = [
  { t: "Laboratorios de ciencias", cls: "col-span-2 row-span-2 bg-gradient-to-br from-[#1d3c63] to-blue" },
  { t: "Biblioteca", cls: "bg-gradient-to-br from-blue to-[#5b8de8]" },
  { t: "Salas de cómputo", cls: "bg-gradient-to-br from-gold to-[#d18f24]" },
  { t: "Áreas deportivas", cls: "bg-gradient-to-br from-navy to-[#1d3c63]" },
  { t: "Vida estudiantil", cls: "bg-gradient-to-br from-[#5b8de8] to-blue" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
        <div className="wrap flex h-[74px] items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-navy to-blue font-display text-lg font-extrabold text-white shadow-[0_6px_18px_rgba(37,99,201,.35)]">K</div>
            <div className="leading-tight">
              <b className="block font-display text-[17px] font-bold text-navy">Colegio Kaysen</b>
              <span className="text-[11px] uppercase tracking-[0.14em] text-muted">Bachillerato · Tulancingo</span>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (<a key={n.href} href={n.href} className="text-[14.5px] font-medium text-ink transition hover:text-blue">{n.label}</a>))}
            <a href="#contacto" className="btn btn-primary !px-5 !py-2.5">Solicitar informes</a>
          </nav>
          <button aria-label="Menú" onClick={() => setOpen((v) => !v)} className="flex flex-col gap-[5px] md:hidden">
            <span className="h-[2.5px] w-6 rounded bg-navy" /><span className="h-[2.5px] w-6 rounded bg-navy" /><span className="h-[2.5px] w-6 rounded bg-navy" />
          </button>
        </div>
        {open && (
          <div className="border-t border-line bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV.map((n) => (<a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-medium text-ink">{n.label}</a>))}
              <a href="#contacto" onClick={() => setOpen(false)} className="btn btn-primary">Solicitar informes</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-bg-2 to-white">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full bg-[#cfe0fb] opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-[#fbe7c0] opacity-50 blur-3xl" />
        <div className="wrap relative z-10 grid items-center gap-12 py-20 md:grid-cols-[1.05fr_.95fr] md:py-24">
          <div>
            <span className="fade-up inline-flex items-center gap-2 rounded-full bg-blue-soft px-4 py-2 text-[12.5px] font-semibold text-blue">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(232,169,59,.2)]" />
              Inscripciones abiertas · Tulancingo, Hidalgo
            </span>
            <h1 className="fade-up-1 mt-5 font-display text-[clamp(34px,5vw,55px)] font-extrabold leading-[1.08] tracking-tight text-navy">
              Educamos a los <span className="grad-text">profesionistas del mañana</span>
            </h1>
            <p className="fade-up-2 mt-5 max-w-xl text-lg text-muted">
              Bachillerato general de excelencia en el corazón de Tulancingo. Formación académica sólida, valores y acompañamiento cercano para que tu hijo llegue preparado a la universidad.
            </p>
            <div className="fade-up-3 mt-8 flex flex-wrap gap-3.5">
              <a href="#admisiones" className="btn btn-primary">Conoce el proceso de admisión</a>
              <a href="#oferta" className="btn btn-ghost">Ver oferta académica</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-6">
              <Trust>Incorporado a la SEP</Trust><Trust>Turno matutino</Trust><Trust>Becas disponibles</Trust>
            </div>
          </div>
          <div className="relative">
            <div className="h-[420px] w-full rounded-3xl bg-gradient-to-br from-[#1d3c63] to-blue shadow-soft" />
            <FloatBadge className="-left-6 top-6 animate-floaty" emoji="🎓" big="98%" small="Egresados a universidad" tint="bg-gold-soft" />
            <FloatBadge className="-right-5 bottom-6" emoji="🏫" big="30+" small="Años de trayectoria" tint="bg-blue-soft" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy">
        <div className="wrap grid grid-cols-2 gap-6 py-10 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="bg-gradient-to-r from-[#bcd2f6] to-gold bg-clip-text font-display text-[40px] font-extrabold text-transparent">{s.n}</div>
              <div className="mt-1 text-[13.5px] text-[#b9c6d6]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="bg-bg-2 py-20 md:py-24">
        <div className="wrap grid items-center gap-14 md:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-blue shadow-soft">
            <div className="grid h-full place-items-center p-8 text-center font-display text-2xl font-bold text-white/90">
              Colegio Universitario Kaysen<br /><span className="mt-2 text-base font-medium text-white/70">Aprender con propósito</span>
            </div>
          </div>
          <div>
            <span className="kicker">Nosotros</span>
            <h2 className="mt-3.5 font-display text-[clamp(28px,3.6vw,42px)] font-bold text-navy">Una comunidad donde cada alumno encuentra su lugar</h2>
            <p className="mt-3.5 text-[16.5px] text-muted">En Kaysen combinamos rigor académico, valores y desarrollo humano. Con grupos reducidos y atención personalizada, acompañamos a cada estudiante en la etapa más decisiva de su formación para que descubra su vocación y llegue listo a la universidad.</p>
            <div className="mt-7 grid gap-4">
              {valores.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="grid h-12 w-12 flex-none place-items-center rounded-[13px] bg-blue-soft text-[22px]">{v.icon}</div>
                  <div><h4 className="font-display text-[17px] font-semibold text-navy">{v.title}</h4><p className="text-[14.5px] text-muted">{v.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-20 md:py-24">
        <div className="wrap">
          <Head center kicker="Oferta académica" title="Tres áreas para tres futuros distintos" sub="Tronco común sólido y, en los últimos semestres, una especialización alineada con la carrera que tu hijo quiere estudiar." />
          <div className="grid gap-6 md:grid-cols-3">
            {areas.map((a) => (
              <div key={a.title} className="group rounded-xl2 border border-line bg-white p-8 transition hover:-translate-y-1.5 hover:border-[#cfe0fb] hover:shadow-soft">
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-[15px] bg-gradient-to-br from-blue to-navy text-2xl text-white">{a.icon}</div>
                <h3 className="font-display text-[19px] font-semibold text-navy">{a.title}</h3>
                <p className="mt-2 text-[14.5px] text-muted">{a.desc}</p>
                <ul className="mt-3.5 grid gap-2">
                  {a.items.map((it) => (<li key={it} className="flex items-center gap-2.5 text-[13.8px] text-ink"><span className="font-extrabold text-blue">✓</span> {it}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISIONES */}
      <section id="admisiones" className="bg-gradient-to-b from-navy to-[#16365c] py-20 text-white md:py-24">
        <div className="wrap">
          <Head center light kicker="Admisiones" title="Inscribir a tu hijo es muy sencillo" sub="Cuatro pasos para asegurar su lugar en el próximo ciclo escolar." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p) => (
              <div key={p.n} className="rounded-xl2 border border-white/10 bg-white/5 p-7">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-[#d18f24] font-display text-lg font-extrabold text-white">{p.n}</div>
                <h4 className="font-display text-[17px] font-semibold text-white">{p.t}</h4>
                <p className="mt-1.5 text-sm text-[#c2d0e2]">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-3.5">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Solicitar informes por WhatsApp</a>
            <span className="text-sm text-[#a9bbd1]">Cupo limitado por grupo · Becas sujetas a evaluación</span>
          </div>
        </div>
      </section>

      {/* CAMPUS */}
      <section id="campus" className="py-20 md:py-24">
        <div className="wrap">
          <Head center kicker="Campus" title="Instalaciones para aprender y crecer" sub="Espacios pensados para la formación integral de cada estudiante." />
          <div className="grid auto-rows-[170px] grid-cols-2 gap-4 md:grid-cols-4">
            {campus.map((c) => (
              <div key={c.t} className={`relative flex items-end overflow-hidden rounded-2xl p-4 font-display text-sm font-semibold text-white ${c.cls}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <span className="relative z-10">{c.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-bg-2 py-20 md:py-24">
        <div className="wrap">
          <Head kicker="Contacto" title="Da el primer paso hoy" sub="Déjanos tus datos y un asesor del colegio te contactará para resolver tus dudas." />
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
            <div>
              <Info icon="📍" title="Visítanos">{ADDRESS}</Info>
              <Info icon="📞" title="Llámanos">{PHONE} · Lun a Vie, turno matutino</Info>
              <Info icon="✉️" title="Escríbenos">{EMAIL}</Info>
              <Info icon="💬" title="WhatsApp">Respuesta inmediata en horario escolar</Info>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 md:pb-24">
        <div className="wrap">
          <Head center kicker="Preguntas frecuentes" title="Resuelve tus dudas" sub="Lo que las familias preguntan antes de inscribirse." />
          <div className="mx-auto max-w-3xl">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="mb-3.5 overflow-hidden rounded-2xl border border-line bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3.5 px-5 py-5 font-display text-base font-semibold text-navy">
                  {f.q}<span className="faq-plus text-2xl font-normal text-blue transition">+</span>
                </summary>
                <p className="px-5 pb-5 text-[14.8px] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-24">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-blue px-8 py-16 text-center">
            <div className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
            <h2 className="relative font-display text-[clamp(28px,4vw,40px)] font-bold text-white">El futuro de tu hijo empieza en Kaysen</h2>
            <p className="relative mx-auto mt-3.5 max-w-xl text-[17px] text-[#d3e0f2]">Agenda una visita y conoce por qué somos una de las mejores opciones de bachillerato en Tulancingo.</p>
            <a href={WA_VISIT} target="_blank" rel="noopener noreferrer" className="btn btn-gold relative mt-7">Agendar una visita</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy pt-16 pb-7 text-[#cdd9e7]">
        <div className="wrap">
          <div className="grid gap-10 border-b border-white/10 pb-9 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-navy to-blue font-display text-lg font-extrabold text-white">K</div>
                <div className="leading-tight"><b className="block font-display text-[17px] font-bold text-white">Colegio Kaysen</b><span className="text-[11px] uppercase tracking-[0.14em] text-[#aebfd2]">Bachillerato General</span></div>
              </div>
              <p className="max-w-xs text-sm text-[#aebfd2]">Preparatoria Colegio Universitario Kaysen. Formación académica de excelencia en el corazón de Tulancingo, Hidalgo.</p>
            </div>
            <div>
              <h5 className="mb-4 font-display text-sm uppercase tracking-wide text-white">Navegación</h5>
              <ul className="grid gap-2.5">{NAV.map((n) => (<li key={n.href}><a href={n.href} className="text-sm text-[#aebfd2] transition hover:text-white">{n.label}</a></li>))}</ul>
            </div>
            <div>
              <h5 className="mb-4 font-display text-sm uppercase tracking-wide text-white">Contacto</h5>
              <ul className="grid gap-2.5 text-sm text-[#aebfd2]"><li>{PHONE}</li><li>{EMAIL}</li><li>{ADDRESS}</li></ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-6 text-[13px] text-[#90a3ba]">
            <span>© {new Date().getFullYear()} Colegio Universitario Kaysen. Todos los derechos reservados.</span>
            <span>Desarrollado por <a href="https://novu-web-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold">NOVU</a></span>
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp" className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(0,0,0,.28)] transition hover:scale-110">
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white"><path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.8L.5 31.5l7.9-2c2.3 1.2 4.9 1.9 7.6 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.3c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.2 5.9-13 13.1-13s13 5.8 13 13-5.8 13-13.2 13zm7.2-9.7c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.2.2-.4.4-.6.1-.3 0-.5 0-.7s-.9-2.1-1.2-2.9c-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.3 2.6 4 6.3 5.5.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z" /></svg>
      </a>
    </main>
  );
}

function Trust({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-muted">
      <svg width="18" height="18" viewBox="0 0 24 24" className="flex-none"><circle cx="12" cy="12" r="10" fill="#2563c9" /><path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" fill="none" /></svg>
      {children}
    </div>
  );
}
function FloatBadge({ className = "", emoji, big, small, tint }: { className?: string; emoji: string; big: string; small: string; tint: string }) {
  return (
    <div className={`absolute flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-soft ${className}`}>
      <div className={`grid h-11 w-11 place-items-center rounded-xl text-xl ${tint}`}>{emoji}</div>
      <div className="leading-tight"><b className="block font-display text-base text-navy">{big}</b><small className="text-xs text-muted">{small}</small></div>
    </div>
  );
}
function Head({ kicker, title, sub, center, light }: { kicker: string; title: string; sub: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="kicker">{kicker}</span>
      <h2 className={`mt-3.5 font-display text-[clamp(28px,3.6vw,42px)] font-bold ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      <p className={`mt-3.5 text-[17px] ${light ? "text-[#c2d0e2]" : "text-muted"}`}>{sub}</p>
    </div>
  );
}
function Info({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-[13px] bg-blue-soft text-xl">{icon}</div>
      <div><b className="block font-display text-[15px] text-navy">{title}</b><p className="text-[14.5px] text-muted">{children}</p></div>
    </div>
  );
}
const inputCls = "w-full rounded-[11px] border-[1.5px] border-line bg-[#fbfcfe] px-3.5 py-3 text-[14.5px] text-ink outline-none transition focus:border-blue";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (<div className="mb-4"><label className="mb-1.5 block text-[13px] font-semibold text-navy">{label}</label>{children}</div>);
}
function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-xl2 border border-line bg-white p-7 shadow-soft">
      {sent ? (
        <div className="py-10 text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-blue-soft text-2xl">✓</div>
          <h3 className="font-display text-xl font-semibold text-navy">¡Gracias!</h3>
          <p className="mt-2 text-[14.5px] text-muted">Recibimos tus datos. Un asesor del colegio te contactará muy pronto.</p>
        </div>
      ) : (
        <>
          <Field label="Nombre del padre o tutor"><input required type="text" placeholder="Tu nombre completo" className={inputCls} /></Field>
          <Field label="Teléfono"><input required type="tel" placeholder="10 dígitos" className={inputCls} /></Field>
          <Field label="Correo electrónico"><input required type="email" placeholder="tucorreo@ejemplo.com" className={inputCls} /></Field>
          <Field label="Área de interés">
            <select className={inputCls}><option>Ciencias Experimentales</option><option>Ciencias Sociales y Humanidades</option><option>Físico-Matemáticas</option><option>Aún no lo decido</option></select>
          </Field>
          <Field label="Mensaje (opcional)"><textarea placeholder="Cuéntanos en qué podemos ayudarte" className={`${inputCls} min-h-[90px] resize-y`} /></Field>
          <button type="submit" className="btn btn-primary mt-1.5 w-full">Solicitar informes</button>
        </>
      )}
    </form>
  );
}
