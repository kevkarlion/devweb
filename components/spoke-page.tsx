import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  LayoutDashboard,
  MonitorSmartphone,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SpokeStep = {
  title: string;
  description: string;
};

type SpokeFaq = {
  question: string;
  answer: string;
};

type SpokeLinkItem = {
  label: string;
  href: string;
};

type SpokePageProps = {
  eyebrow: string;
  crumbHref: string;
  crumbLabel: string;
  pageName: string;
  title: string;
  intro: string;
  pains: SpokeStep[];
  process: SpokeStep[];
  deliverables: SpokeStep[];
  risks: string[];
  faq: SpokeFaq[];
  related: SpokeLinkItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const deliverableIcons = [LayoutDashboard, Users, Bot, MonitorSmartphone];

export function SpokePage({
  eyebrow,
  crumbHref,
  crumbLabel,
  pageName,
  title,
  intro,
  pains,
  process,
  deliverables,
  risks,
  faq,
  related,
  ctaTitle,
  ctaDescription,
  ctaLabel = "Solicitar propuesta técnica",
  ctaHref = "/#contacto",
}: SpokePageProps) {
  return (
    <main className="w-full min-h-screen bg-[#121212] p-0">
      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-[#434343] bg-neutral-950 px-6 pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-light uppercase tracking-widest text-neutral-400 sm:text-sm sm:normal-case sm:tracking-normal"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Link href="/" className="transition-colors hover:text-white">
              Inicio
            </Link>
            <span className="text-neutral-600">/</span>
            <Link href={crumbHref} className="transition-colors hover:text-white">
              {crumbLabel}
            </Link>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-300">{pageName}</span>
          </nav>

          <p
            className="mb-4 text-sm uppercase tracking-widest text-neutral-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {eyebrow}
          </p>
          <h1
            className="max-w-4xl text-4xl font-bold leading-[0.95] tracking-wide text-primary-gradient bg-clip-text text-transparent md:text-5xl xl:text-6xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            {title}
          </h1>
          <p
            className="mt-8 max-w-3xl text-base font-light leading-relaxed text-neutral-300 md:text-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {intro}
          </p>
        </div>
      </section>

      {/* El costo de seguir operando como hoy */}
      <section className="w-full bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-3 text-sm uppercase tracking-widest text-neutral-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            El punto de partida
          </p>
          <h2
            className="mb-12 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            El costo de seguir operando como hoy
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pains.map((pain) => (
              <div
                key={pain.title}
                className="flex flex-col rounded-xl border border-[#434343] bg-[#0D0D0D] p-6"
              >
                <h3
                  className="mb-3 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-titles)" }}
                >
                  {pain.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed text-neutral-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo lo resolvemos */}
      <section className="w-full border-t border-[#434343] bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-3 text-sm uppercase tracking-widest text-neutral-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            El proceso
          </p>
          <h2
            className="mb-12 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            Cómo lo resolvemos
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col rounded-xl border border-[#434343] bg-[#0D0D0D] p-6"
              >
                <span
                  className="mb-4 text-sm font-bold text-primary-gradient bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mb-3 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-titles)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed text-neutral-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregables */}
      <section className="w-full border-t border-[#434343] bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-3 text-sm uppercase tracking-widest text-neutral-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Entregables concretos
          </p>
          <h2
            className="mb-12 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            Qué recibe su empresa
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((deliverable, index) => {
              const Icon = deliverableIcons[index] ?? LayoutDashboard;
              return (
                <div
                  key={deliverable.title}
                  className="flex flex-col rounded-xl border border-[#434343] bg-[#0D0D0D] p-6"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#434343] bg-white/5">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3
                    className="mb-3 text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-titles)" }}
                  >
                    {deliverable.title}
                  </h3>
                  <p
                    className="text-sm font-light leading-relaxed text-neutral-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {deliverable.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Riesgos que mitigamos */}
      <section className="w-full border-t border-[#434343] bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-3 text-sm uppercase tracking-widest text-neutral-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Implementación sin sorpresas
          </p>
          <h2
            className="mb-12 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            Riesgos que mitigamos en el camino
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {risks.map((risk) => (
              <li
                key={risk}
                className="flex items-start gap-3 rounded-xl border border-[#434343] bg-[#0D0D0D] p-6"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                <p
                  className="text-sm font-light leading-relaxed text-neutral-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {risk}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full border-t border-[#434343] bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-3 text-sm uppercase tracking-widest text-neutral-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            FAQ técnica
          </p>
          <h2
            className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            Preguntas frecuentes
          </h2>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="mx-auto w-full max-w-3xl rounded-xl border border-[#434343] bg-[#0D0D0D] px-6"
          >
            {faq.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-semibold text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light leading-relaxed text-neutral-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related */}
      <section className="w-full border-t border-[#434343] bg-neutral-950 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-6 text-sm uppercase tracking-widest text-neutral-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Sectores y zonas relacionados
          </p>
          <div className="flex flex-wrap gap-3">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-[#434343] bg-[#0D0D0D] px-5 py-2 text-sm font-light text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-[#434343] bg-neutral-950 px-6 pb-24 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-4 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            {ctaTitle}
          </h2>
          <p
            className="mb-8 font-light leading-relaxed text-neutral-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {ctaDescription}
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-3 rounded-lg border-2 border-white bg-primary-gradient px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105"
          >
            {ctaLabel}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}