import Link from "next/link";
import type { ReactNode } from "react";

export function Btn({ href, children, variant = "primary", external = false }:
  { href: string; children: ReactNode; variant?: "primary" | "gold" | "ghost"; external?: boolean }) {
  const cls = `btn btn-${variant}`;
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}

export function SectionHead({ kicker, title, sub, center, light }:
  { kicker: string; title: string; sub?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="kicker">{kicker}</span>
      <h2 className={`mt-3.5 font-display text-[clamp(27px,3.4vw,40px)] font-bold ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {sub && <p className={`mt-3.5 text-[17px] ${light ? "text-[#c2d0e2]" : "text-muted"}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ kicker, title, sub }: { kicker: string; title: ReactNode; sub: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-bg-2 to-white">
      <div className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#cfe0fb] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-44 -left-32 h-[360px] w-[360px] rounded-full bg-[#fbe7c0] opacity-50 blur-3xl" />
      <div className="wrap relative z-10 py-16 text-center md:py-20">
        <span className="kicker">{kicker}</span>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(32px,4.6vw,50px)] font-extrabold leading-[1.1] tracking-tight text-navy">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{sub}</p>
      </div>
    </section>
  );
}

export function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#bcd2f6] to-gold bg-clip-text font-display text-[40px] font-extrabold text-transparent">{n}</div>
      <div className="mt-1 text-[13.5px] text-[#b9c6d6]">{l}</div>
    </div>
  );
}

export function StatsBar({ items }: { items: { n: string; l: string }[] }) {
  return (
    <section className="bg-navy">
      <div className="wrap grid grid-cols-2 gap-6 py-10 text-center md:grid-cols-4">
        {items.map((s) => (<Stat key={s.l} n={s.n} l={s.l} />))}
      </div>
    </section>
  );
}

export function CtaBand({ title, sub, href, label }:
  { title: string; sub: string; href: string; label: string }) {
  return (
    <section className="py-20">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-blue px-8 py-16 text-center">
          <div className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
          <h2 className="relative font-display text-[clamp(27px,3.8vw,38px)] font-bold text-white">{title}</h2>
          <p className="relative mx-auto mt-3.5 max-w-xl text-[17px] text-[#d3e0f2]">{sub}</p>
          <div className="relative mt-7"><a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-gold">{label}</a></div>
        </div>
      </div>
    </section>
  );
}
