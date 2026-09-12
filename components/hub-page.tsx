import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type HubCard = {
  title: string;
  description: string;
  href?: string;
};

type HubFaq = {
  question: string;
  answer: string;
};

type HubPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: HubCard[];
  faq: HubFaq[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref?: string;
};

export function HubPage({
  eyebrow,
  title,
  intro,
  cards,
  faq,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref = "/#contacto",
}: HubPageProps) {
  return (
    <main className="w-full min-h-screen bg-[#121212] p-0">
      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-[#434343] bg-neutral-950 px-6 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-4 text-sm uppercase tracking-widest text-neutral-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {eyebrow}
          </p>
          <h1
            className="text-4xl font-bold leading-[0.95] tracking-wide text-primary-gradient bg-clip-text text-transparent md:text-5xl xl:text-6xl"
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

      {/* Cards */}
      <section className="w-full bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const inner = (
                <>
                  <h3
                    className="mb-3 text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-titles)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm font-light leading-relaxed text-neutral-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {card.description}
                  </p>
                </>
              );

              const className =
                "flex flex-col rounded-xl border border-[#434343] bg-[#0D0D0D] p-6";

              return card.href ? (
                <Link
                  key={card.title}
                  href={card.href}
                  className={`${className} transition-colors hover:border-neutral-500 hover:bg-[#111111]`}
                >
                  {inner}
                </Link>
              ) : (
                <div key={card.title} className={className}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full border-t border-[#434343] bg-neutral-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-titles)" }}
          >
            Preguntas frecuentes
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

      {/* CTA */}
      <section className="w-full bg-neutral-950 px-6 pb-24">
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