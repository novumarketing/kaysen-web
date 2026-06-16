"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, WA_RECORRIDO } from "./site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="wrap flex h-[74px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-navy to-blue font-display text-lg font-extrabold text-white shadow-[0_6px_18px_rgba(37,99,201,.35)]">K</div>
          <div className="leading-tight">
            <b className="block font-display text-[17px] font-bold text-navy">Colegio Kaysen</b>
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted">Bachillerato · Tulancingo</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => {
            const active = path === n.href;
            return (
              <Link key={n.href} href={n.href} className={`text-[14.5px] font-medium transition hover:text-blue ${active ? "text-blue" : "text-ink"}`}>
                {n.label}
              </Link>
            );
          })}
          {/* CTA persistente (punto 1) */}
          <a href={WA_RECORRIDO} target="_blank" rel="noopener noreferrer" className="btn btn-gold !px-5 !py-2.5">
            Agendar Recorrido
          </a>
        </nav>
        <button aria-label="Menú" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex flex-col gap-[5px] lg:hidden">
          <span className="h-[2.5px] w-6 rounded bg-navy" /><span className="h-[2.5px] w-6 rounded bg-navy" /><span className="h-[2.5px] w-6 rounded bg-navy" />
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`font-medium ${path === n.href ? "text-blue" : "text-ink"}`}>{n.label}</Link>
            ))}
            <a href={WA_RECORRIDO} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-gold">Agendar Recorrido</a>
          </div>
        </div>
      )}
    </header>
  );
}
