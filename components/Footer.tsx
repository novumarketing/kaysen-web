import Link from "next/link";
import { NAV, PHONE, EMAIL, ADDRESS } from "./site";

export default function Footer() {
  return (
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
            <ul className="grid gap-2.5">{NAV.map((n) => (<li key={n.href}><Link href={n.href} className="text-sm text-[#aebfd2] transition hover:text-white">{n.label}</Link></li>))}</ul>
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
  );
}
