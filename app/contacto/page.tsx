import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/ui";
import { PHONE, EMAIL, ADDRESS, WA } from "@/components/site";
import ContactForm from "@/components/ContactForm";
import LazyMap from "@/components/LazyMap";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a la Preparatoria Colegio Universitario Kaysen en Tulancingo, Hidalgo. Teléfono, correo, ubicación y formulario de informes.",
};

function Info({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-[13px] bg-blue-soft text-xl">{icon}</div>
      <div><b className="block font-display text-[15px] text-navy">{title}</b><p className="text-[14.5px] text-muted">{children}</p></div>
    </div>
  );
}

export default function Contacto() {
  return (
    <main>
      <PageHero kicker="Contacto" title={<>Da el <span className="grad-text">primer paso</span> hoy</>}
        sub="Déjanos tus datos y un asesor del colegio te contactará para resolver todas tus dudas." />

      <section className="py-20 md:py-24">
        <div className="wrap grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHead kicker="Datos de contacto" title="Estamos para ayudarte" />
            <Info icon="📍" title="Visítanos">{ADDRESS}</Info>
            <Info icon="📞" title="Llámanos">{PHONE} · Lun a Vie, turno matutino</Info>
            <Info icon="✉️" title="Escríbenos">{EMAIL}</Info>
            <Info icon="💬" title="WhatsApp">Respuesta inmediata en horario escolar</Info>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">Escribir por WhatsApp</a>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Mapa con lazy loading (no afecta el LCP) */}
      <section className="pb-20 md:pb-24">
        <div className="wrap">
          <SectionHead center kicker="Ubicación" title="Encuéntranos en el centro de Tulancingo" />
          <LazyMap />
        </div>
      </section>
    </main>
  );
}
