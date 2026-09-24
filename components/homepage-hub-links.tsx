import Link from "next/link";

type HubLink = {
  label: string;
  description: string;
  href: "/soluciones" | "/industrias" | "/localidades";
};

const HUB_LINKS: HubLink[] = [
  {
    label: "Soluciones",
    description:
      "Software a medida, CRM con IA, automatización, dashboards y portales de clientes construidos sobre tu operación.",
    href: "/soluciones",
  },
  {
    label: "Industrias",
    description:
      "Oil & Gas, logística y agroindustria: sistemas para el cuello de botella de cada sector.",
    href: "/industrias",
  },
  {
    label: "Localidades",
    description:
      "Neuquén, Cipolletti, General Roca, Allen, Villa Regina y Añelo: software para la operación real de cada zona.",
    href: "/localidades",
  },
];

export function HomepageHubLinks() {
  return (
    <section id="hubs" className="w-full bg-neutral-950 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col justify-center">
        <h2
          className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
          style={{ fontFamily: "var(--font-titles)" }}
        >
          Soluciones, industrias y localidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HUB_LINKS.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="flex flex-col rounded-xl border border-[#434343] bg-[#0D0D0D] p-6 hover:border-neutral-500 transition-colors duration-300"
            >
              <h3 className="mb-3 text-xl font-bold text-white">
                {hub.label}
              </h3>
              <p className="text-sm font-light leading-relaxed text-neutral-300">
                {hub.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}