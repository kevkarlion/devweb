import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type LocalityProblem = {
  title: string;
  description: string;
};

type LocalityService = {
  label: string;
  href: string;
  description: string;
};

type LocalityFaq = {
  question: string;
  answer: string;
};

type LocalityRelated = {
  label: string;
  href: string;
};

type LocalityPageProps = {
  eyebrow: string;
  crumbHref: string;
  crumbLabel: string;
  pageName: string;
  localityLabel: string;
  title: string;
  intro: string;
  problems: LocalityProblem[];
  services: LocalityService[];
  problemPage?: LocalityService;
  related: LocalityRelated[];
  faq: LocalityFaq[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function LocalityPage({
  eyebrow,
  crumbHref,
  crumbLabel,
  pageName,
  localityLabel,
  title,
  intro,
  problems,
  services,
  problemPage,
  related,
  faq,
  ctaTitle,
  ctaDescription,
  ctaLabel = "Solicitar propuesta técnica",
  ctaHref = "/#contacto",
}: LocalityPageProps) {
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
            {localityLabel} · El punto de partida
          </p>
          <h2
            className="mb-12 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            El costo de seguir operando como hoy
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="flex flex-col rounded-xl border border-[#434343] bg-[#0D0D0D] p-6"
              >
                <h3
                  className="mb-3 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-titles)" }}
                >
                  {problem.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed text-neutral-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios y sectores que aplican */}
      <section className="w-full border-t border-[#434343] bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-3 text-sm uppercase tracking-widest text-neutral-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Qué aplica en su zona
          </p>
          <h2
            className="mb-12 text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            Sistemas y sectores que se aplican en {localityLabel}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex flex-col rounded-xl border border-[#434343] bg-[#0D0D0D] p-6 transition-colors hover:border-neutral-500 hover:bg-[#111111]"
              >
                <h3
                  className="mb-3 text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-titles)" }}
                >
                  {service.label}
                </h3>
                <p
                  className="flex-1 text-sm font-light leading-relaxed text-neutral-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.description}
                </p>
                <span
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-gradient bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Ver página dedicada
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Página de problema dedicada */}
      {problemPage ? (
        <section className="w-full border-t border-[#434343] bg-neutral-950 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p
              className="mb-3 text-sm uppercase tracking-widest text-neutral-400"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Su problema puntual
            </p>
            <h2
              className="mb-12 text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "var(--font-titles)" }}
            >
              Una página dedicada al problema que más le cuesta
            </h2>
            <Link
              href={problemPage.href}
              className="group flex flex-col justify-between gap-6 rounded-xl border border-[#434343] bg-[#0D0D0D] p-8 transition-colors hover:border-neutral-500 hover:bg-[#111111] md:flex-row md:items-center"
            >
              <div className="max-w-2xl">
                <h3
                  className="mb-3 text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-titles)" }}
                >
                  {problemPage.label}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed text-neutral-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {problemPage.description}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-lg border-2 border-white bg-primary-gradient px-6 py-3 font-bold text-white transition-transform duration-300 group-hover:scale-105">
                Ver página dedicada
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </section>
      ) : null}

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
            Preguntas frecuentes sobre {localityLabel}
          </h2>
          <Accordion
            type="single"
            collapsible
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
            Zonas y servicios relacionados
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