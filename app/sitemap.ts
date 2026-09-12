import { MetadataRoute } from "next";

const baseUrl = "https://devwebpatagonia.com";

type SitemapEntry = {
  path: string;
  lastModified: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

const routes: SitemapEntry[] = [
  { path: "/", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 1 },
  { path: "/lead-magnet", lastModified: "2026-04-27", changeFrequency: "yearly", priority: 0.4 },
  { path: "/soluciones", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/industrias", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/soluciones/software-a-medida", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/soluciones/crm-para-empresas-de-servicios", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.9 },
  { path: "/soluciones/automatizacion-con-ia", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/soluciones/dashboards-y-portales-de-clientes", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/soluciones/desarrollo-web-b2b", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/industrias/oil-gas", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.9 },
  { path: "/industrias/logistica-y-transporte", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.9 },
  { path: "/industrias/agroindustria", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.9 },
  { path: "/industrias/instalaciones-industriales", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/neuquen", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/cipolletti", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/general-roca", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/villa-regina", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/allen", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/anelo-vaca-muerta", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/neuquen/software-para-oil-gas", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.9 },
  { path: "/localidades/general-roca/digitalizacion-agroindustrial", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.9 },
  { path: "/localidades/cipolletti/software-para-logistica", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.9 },
  { path: "/localidades/anelo-vaca-muerta/software-para-servicios-petroleros", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.9 },
  { path: "/localidades/villa-regina/riego-y-climatizacion-digital", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}