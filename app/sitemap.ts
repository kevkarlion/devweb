import { MetadataRoute } from "next";

const baseUrl = "https://devwebpatagonia.com";
// Build-time instant shared by all routes: Vercel builds from a fresh clone, so
// source mtimes are unreliable. Truthful at deploy granularity.
const BUILD_DATE = new Date();

type SitemapEntry = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

const routes: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/lead-magnet", changeFrequency: "yearly", priority: 0.4 },
  { path: "/soluciones", changeFrequency: "weekly", priority: 0.8 },
  { path: "/industrias", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades", changeFrequency: "weekly", priority: 0.8 },
  { path: "/soluciones/software-a-medida", changeFrequency: "weekly", priority: 0.8 },
  { path: "/soluciones/crm-para-empresas-de-servicios", changeFrequency: "weekly", priority: 0.9 },
  { path: "/soluciones/automatizacion-con-ia", changeFrequency: "weekly", priority: 0.8 },
  { path: "/soluciones/dashboards-y-portales-de-clientes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/soluciones/desarrollo-web-b2b", changeFrequency: "weekly", priority: 0.8 },
  { path: "/industrias/oil-gas", changeFrequency: "weekly", priority: 0.9 },
  { path: "/industrias/logistica-y-transporte", changeFrequency: "weekly", priority: 0.9 },
  { path: "/industrias/agroindustria", changeFrequency: "weekly", priority: 0.9 },
  { path: "/industrias/instalaciones-industriales", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/neuquen", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/cipolletti", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/general-roca", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/villa-regina", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/allen", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/anelo-vaca-muerta", changeFrequency: "weekly", priority: 0.8 },
  { path: "/localidades/neuquen/software-para-oil-gas", changeFrequency: "weekly", priority: 0.9 },
  { path: "/localidades/general-roca/digitalizacion-agroindustrial", changeFrequency: "weekly", priority: 0.9 },
  { path: "/localidades/cipolletti/software-para-logistica", changeFrequency: "weekly", priority: 0.9 },
  { path: "/localidades/anelo-vaca-muerta/software-para-servicios-petroleros", changeFrequency: "weekly", priority: 0.9 },
  { path: "/localidades/villa-regina/riego-y-climatizacion-digital", changeFrequency: "weekly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: BUILD_DATE,
    changeFrequency,
    priority,
  }));
}