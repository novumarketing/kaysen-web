import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { EMAIL, PHONE, ADDRESS } from "@/components/site";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de Privacidad del Colegio Universitario Kaysen conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  robots: { index: true, follow: false },
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h2 className="mb-2 font-display text-xl font-semibold text-navy">{title}</h2>
      <div className="space-y-2 text-[15px] leading-relaxed text-muted">{children}</div>
    </div>
  );
}

export default function AvisoPrivacidad() {
  return (
    <main>
      <PageHero kicker="Legal" title={<>Aviso de <span className="grad-text">Privacidad</span></>}
        sub="Protección de tus datos personales conforme a la legislación mexicana vigente." />
      <section className="py-16 md:py-20">
        <div className="wrap max-w-3xl">
          <p className="mb-8 text-[15px] leading-relaxed text-muted">
            El <strong className="text-navy">Colegio Universitario Kaysen</strong>, con domicilio en {ADDRESS}, es responsable del tratamiento de sus datos personales conforme a la <strong className="text-navy">Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>.
          </p>
          <Block title="1. Datos que recabamos">
            <p>Nombre del aspirante y del padre o tutor, teléfono, correo electrónico y la información necesaria para atender solicitudes de informes e inscripción.</p>
          </Block>
          <Block title="2. Finalidades">
            <p>Los datos se utilizan para brindar informes, dar seguimiento al proceso de admisión, agendar visitas y enviar comunicaciones relacionadas con nuestros servicios educativos. No se comparten con terceros con fines comerciales.</p>
          </Block>
          <Block title="3. Derechos ARCO">
            <p>Usted puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO), así como revocar su consentimiento, enviando su solicitud al correo {EMAIL} o al teléfono {PHONE}.</p>
          </Block>
          <Block title="4. Cambios al aviso">
            <p>Este Aviso de Privacidad puede actualizarse. Cualquier modificación se publicará en este mismo sitio web.</p>
          </Block>
          <p className="mt-8 text-[13px] text-muted">Documento de referencia. Te recomendamos validar su contenido con tu asesor legal antes de publicarlo de forma definitiva.</p>
        </div>
      </section>
    </main>
  );
}
