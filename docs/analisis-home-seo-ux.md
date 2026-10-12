# Auditoría de la Home — SEO, Mensaje Comercial y UX

**Sitio:** Devweb Patagonia (Next.js App Router, TypeScript, Tailwind)
**Alcance:** Solo la homepage (`/`). El navbar y el footer se incluyen porque enmarcan la home.
**Tipo de documento:** Auditoría del estado actual del código. No es un plan de ejecución ni una propuesta de rediseño.
**Fecha:** 2026-10-12
**Referencias de estrategia:** `docs/seo-roadmap-b2b.md` (roadmap B2B existente; no se reescribe).

Criterio de análisis: cada hallazgo es verificable con su ubicación exacta `ruta/archivo.tsx:línea`. Se distingue explícitamente entre impacto **SEO** (rastreo, semántica, metadatos) y **UX/comercial** (percepción humana); ambos pueden divergir.

---

## Resumen ejecutivo

La home **sí está bien alineada en su propuesta de valor central** (el H1 y el subhead del hero coinciden casi textualmente con el roadmap B2B), pero la ejecución se rompe en tres frentes: la **semántica de encabezados** (7 elementos `<h1>` en el DOM), los **metadatos globales** (apuntan a "diseño web / ecommerce / one page", no al software industrial) y el **copy y la prueba de secciones intermedias** (que retroceden a lenguaje de agencia web/B2C y diluyen el CTA primario).

- El H1 del hero (`hero-section.tsx:115`) y el subhead (`hero-section.tsx:123`) son fieles al roadmap (`seo-roadmap-b2b.md:32-33`). **Bien.**
- La home emite **7 `<h1>`** (el hero solo emite 2 en el DOM: mobile y desktop). El roadmap espera un H1 único por página. **Crítico SEO.**
- Los metadatos `title`/`description`/`keywords` (`layout.tsx:34-60`) siguen apuntando a la posición de agencia web de la versión anterior, en contradicción directa con el copy industrial del cuerpo.
- Dos secciones completas usan beneficios **B2C/ecommerce** ("Ventas 24/7", "Catálogo Infinito", "Cotizá tu web a medida") que el roadmap prohíbe (`about-section.tsx:25-56`, `portfolio-section.tsx:16-37`).
- La home define **múltiples CTAs divergentes** en lugar de un CTA primario dominante, contra el lineamiento "cero «Hablemos»" del roadmap (`seo-roadmap-b2b.md:130`).
- Faltan **prueba/casos de éxito con métricas** y una **FAQ técnica**: el portfolio muestra proyectos web/ecommerce, no casos industriales.
- No hay `FAQPage` schema en la home (`FaqSectionSchema.tsx` se monta solo en spokes); el JSON-LD de la home se limita a `LocalBusiness` + `WebSite`.
- `app/robots.ts:10` bloquea `/_next/`, lo que puede impedir el render de CSS/JS y perjudicar el rastreo.
- **UX:** la página es larga (8 secciones, varias a pantalla completa) y mobile/desktop renderizan **contenido y CTAs distintos**, lo que fragmenta el mensaje.

---

## 1. Inventario de secciones (orden de render)

Orden tomado de `app/page.tsx:13-20`. El navbar y el footer provienen de `app/layout.tsx:165,174`.

| # | Sección | Componente (`path:line`) | Propósito | CTA presente |
|---|---|---|---|---|
| — | Navbar (chrome) | `components/navbar.tsx:113` | Navegación de silos + acceso a diagnóstico | "Pedir diagnóstico técnico" (`navbar.tsx:192`), "Comenzar ahora" en drawer (`navbar.tsx:355`) |
| 1 | Hero | `components/hero-section.tsx:22` | Propuesta de valor + CTA principal | "Pedir diagnóstico técnico" → WhatsApp (`hero-section.tsx:84,127`) |
| 2 | Soluciones | `components/services-section.tsx:89` | 4 soluciones de software (cards/links) | "Pedir diagnóstico técnico" → WhatsApp (`services-section.tsx:284,311`) |
| 3 | Sistemas | `components/software-systems-section.tsx:113` | 4 sistemas + demo CRM + imagen dashboard | "Abrir demo" (externo, `software-systems-section.tsx:282`), "Pedir diagnóstico técnico" (`:412`) |
| 4 | Hubs | `components/homepage-hub-links.tsx:32` | Puente a `/soluciones`, `/industrias`, `/localidades` | Ninguno (solo navegación a hubs) |
| 5 | Portfolio | `components/PortfolioSection.tsx:121` | 10 proyectos con enlaces externos | "Hablemos sobre tu proyecto" → WhatsApp (`PortfolioSection.tsx:297`) |
| 6 | Sobre nosotros | `components/about-section.tsx:109` | Bio del fundador + beneficios + stack | "Pedir diagnóstico técnico" desktop (`about-section.tsx:701`), "Empecemos tu proyecto" mobile (`:407`) |
| 7 | Metodología | `components/portfolio-section.tsx:65` (export `ProcessTimeline`) | Proceso en 4 pasos | "Cotizá tu web a medida" (`portfolio-section.tsx:118`), "Solicita tu consultoría Gratuita" mobile (`:361`), "Empecemos tu proyecto hoy" (`:427`) |
| 8 | Contacto | `components/contact-section.tsx:113` | Formulario de diagnóstico | "Pedir diagnóstico técnico" (submit, `contact-section.tsx:383`) + WhatsApp alterno (`:429`) |
| — | Footer (chrome) | `components/footer.tsx:60` | Enlaces de silo, contacto, redes | Enlaces a `/#servicios`, `/#sistemas` (fragmentos, `footer.tsx:11-16`) |

> Nota: los componentes `OnePageSchema` (`layout.tsx:170`) y `WebsiteSchema` (`layout.tsx:171`) se montan globalmente; `ServiceHubSchema`, `SpokeServiceSchema` y `FaqSectionSchema` se montan **solo en otras rutas** (hubs y spokes), no en la home.

---

## 2. Arquitectura SEO por sección

### 2.1 Jerarquía de encabezados observada (H1/H2/H3)

Matriz real tomada del render de la home:

| # | Sección | H1 | H2 | H3 | H4 |
|---|---|---|---|---|---|
| 1 | Hero | "Software a medida para empresas industriales." (mobile, `hero-section.tsx:60`) **y** "…que no pueden frenar su operación." (desktop, `hero-section.tsx:109`) → **2 en el DOM** | — | — | — |
| 2 | Soluciones | "Soluciones para operación industrial" (`services-section.tsx:98`) | "Construidas a la medida de tu operación" (`:114`) | 4 títulos de servicio desktop (`:160`) + 4 mobile (`:209`) | — |
| 3 | Sistemas | — | "Software y sistemas que centralizan tu operación" (`software-systems-section.tsx:126`) | 4 títulos de sistema (`:183`) + demo CRM (`:244`) + dashboard (`:348`) + microcopy (`:392`) | — |
| 4 | Hubs | — | "Soluciones, industrias y localidades" (`homepage-hub-links.tsx:34`) | 3 labels de hub (`:47`) | — |
| 5 | Portfolio | "Portfolio" (`PortfolioSection.tsx:141`) | "Proyectos que impulsan tu marca" (`:153`) | 10 títulos de proyecto (`:239`) | — |
| 6 | Sobre nosotros | "Sobre nosotros" (`about-section.tsx:116`) | "Quién está detrás del código" (`:128`) + "Kevin Riquelme" (`:342` mobile, `:585` desktop) | 6 benefits del grid (`:174` mobile, `:457` desktop) | — |
| 7 | Metodología | "Nuestra metodología" (`portfolio-section.tsx:68`) | "Diseñada para tu éxito" (`:80`) | 4 pasos (`:195` desktop, `:291` mobile) | — |
| 8 | Contacto | "Pedí tu diagnóstico técnico" (`contact-section.tsx:122`) | "Contanos cómo opera tu empresa hoy…" (`:163`) | — | — |
| — | Footer | — | — | — | "Servicios" (`footer.tsx:129`), "Navegación" (`:158`), "Contacto" (`:187`) |

**Observaciones:**

- **H1 duplicado / múltiple (CRÍTICO SEO):** el DOM de la home contiene **7 elementos `<h1>`**: dos del hero (mobile + desktop renderizados simultáneamente, ocultos solo por CSS) y uno por cada sección Soluciones, Portfolio, Sobre nosotros, Metodología y Contacto. Evidencia: `hero-section.tsx:60,109`, `services-section.tsx:98`, `PortfolioSection.tsx:141`, `about-section.tsx:116`, `portfolio-section.tsx:68`, `contact-section.tsx:122`.
- **Salto de nivel en el footer:** el footer usa solo `<h4>` (`footer.tsx:129,158,187`) sin `<h3>` previo en su contexto; no rompe el rastreo pero desordena el outline.
- No se detectan H2/H3 huérfanos dentro de cada sección: el patrón por sección es H1 → H2 → H3, salvo que el H1 repetido en cada bloque invalida el outline global.

### 2.2 HTML semántico y landmarks

- `<main>` correcto en `app/page.tsx:12`.
- El hero declara `role="banner"` (`hero-section.tsx:24`) **dentro** de `<main>`, cuando `banner` corresponde al encabezado de página de nivel superior. Además aporta `aria-label` (`hero-section.tsx:25`).
- Navbar es `<nav>` implícito (`navbar.tsx:113`) y footer es `<footer>` implícito (`footer.tsx:60`). No hay un elemento `<header>` de página envolviendo la navegación.
- Las secciones usan `<section>` pero solo el hero tiene `aria-label`; el resto no se etiqueta (`id` presente pero sin `aria-labelledby`).
- El drawer mobile sí usa `role="dialog"` con `aria-label` (`navbar.tsx:249-250`) y `aria-expanded` en los acordeones (`navbar.tsx:287`). **Bien.**

### 2.3 Enlaces internos (destino y anchor text)

| Destino | Anchor text | Evidencia | Calidad |
|---|---|---|---|
| `/soluciones/software-a-medida` | "Software a medida" | `services-section.tsx:26,153`; `software-systems-section.tsx:41,176` | Descriptivo, correcto |
| `/soluciones/crm-para-empresas-de-servicios` | "CRM para empresas de servicios" | `services-section.tsx:33`; `software-systems-section.tsx:72` | Descriptivo |
| `/soluciones/automatizacion-con-ia` | "Automatización con IA" | `services-section.tsx:40`; `software-systems-section.tsx:87` | Descriptivo |
| `/soluciones/dashboards-y-portales-de-clientes` | "Dashboards y portales de clientes" | `services-section.tsx:47`; `software-systems-section.tsx:57` | Descriptivo |
| `/soluciones`, `/industrias`, `/localidades` | "Soluciones", "Industrias", "Localidades" | `homepage-hub-links.tsx:9-27,42` | Correcto (silo) |
| `/#servicios`, `/#sistemas` | "Desarrollo Web", "Ecommerce", "SEO", "Dashboards"… | `footer.tsx:11-16` | **Genérico/ambiguo**: "SEO" y "Ecommerce" apuntan al mismo fragmento `/#servicios` |
| `/#nosotros`, `/#contacto` | "Nosotros", "Contacto" | `navbar.tsx:56,57` | Correcto (anclas internas) |

- El cuerpo de la home **no enlaza directamente** a industrias ni localidades: solo llega a sus hubs (`homepage-hub-links.tsx`). Es coherente con el modelo de silos del roadmap.
- El navbar enlaza internamente con `<a>` en lugar de `next/link` (`navbar.tsx:124,145,178`), igual que el footer (`footer.tsx:139,167`). Funciona, pero pierde navegación de cliente (recarga completa).
- La mayoría de los enlaces externos de proyecto/redes tienen `target="_blank"` + `rel="noopener noreferrer"`. **Bien.**

### 2.4 Imágenes y `alt`

| Imagen | `alt` | Evidencia | Nota |
|---|---|---|---|
| `/panel-dashboard.webp` | "Dashboard empresarial con métricas en tiempo real" | `software-systems-section.tsx:376` | Descriptivo |
| Proyectos del portfolio | `alt={item.title}` (ej. "TechnoStore") | `PortfolioSection.tsx:206` | Genérico pero válido; usaría `fill` sin `sizes` |
| `/img-nosotros.webp` | "Resultados de negocio" (mobile) y "Resultados de negocio" (desktop) | `about-section.tsx:249,520` | Vago |
| `/kevin-yo.png` | "Kevin Riquelme" / "Kevin Riquelme - Fundador & Lead Developer" | `about-section.tsx:335,573` | Correcto |
| Logos de stack | "MongoDB Logo", etc. | `about-section.tsx:63,69,75,81,87` | Correcto |
| Pasos metodología | `alt={card.title}` | `portfolio-section.tsx:210,303` | Aceptable |
| Precarga oculta de imágenes mobile | `alt=""` + contenedor `aria-hidden` | `portfolio-section.tsx:257-268` | **Correcto** (decorativa) |

- El hero no usa `<img>`: carga video decorativo con `aria-hidden` (`hero-section.tsx:29,41`) y `tabIndex={-1}`. **Bien.**
- `PortfolioSection.tsx:206` y `about-section.tsx:249,521,576` usan `fill` sin `sizes` → advertencia de rendimiento (LCP) en Next.js.

### 2.5 Metadatos (`layout.tsx`)

- `title.default`: "Devweb Patagonia — Gestión Digital Integral para Empresas | Web + SEO + Soporte" (`layout.tsx:35-37`).
- `description`: "Tu partner digital en la Patagonia. Diseñamos webs que atraen clientes, optimizamos tu presencia en Google y te acompañamos con soporte permanente. Especialistas en General Roca, Cipolletti y Neuquén." (`layout.tsx:39-40`).
- `keywords`: 16 términos, encabezados por "diseño web alto valle río negro", "desarrollo web general roca patagonia", "ecommerce desarrollo alto valle", "portfolio desarrollador next.js patagonia", "one page landing alto valle" (`layout.tsx:41-60`).
- `lang="es"` correcto (`layout.tsx:127`); `og:locale` = `es_AR` (`layout.tsx:75`).
- `canonical: "/"` (`layout.tsx:70-72`), Open Graph y Twitter completos (`layout.tsx:73-103`), `robots` con directivas completas (`layout.tsx:104-114`), `verification` por variables de entorno (`layout.tsx:115-118`). **Bien.**
- La imagen OG declara `alt` de agencia: "Agencia de Diseño Web y Gestión Digital" (`layout.tsx:87`).

**Contradicción central:** los metadatos describen una **agencia de diseño web/SEO/ecommerce** (B2C), mientras el cuerpo de la home vende **software a medida para operación industrial** (B2B). El roadmap prohíbe explícitamente "enfoque B2C" y "lenguaje de agencia de marketing" (`seo-roadmap-b2b.md:9`) y el término "integral" (`seo-roadmap-b2b.md:126`).

### 2.6 Datos estructurados JSON-LD presentes en la home

| Schema | `@type` | ¿Montado en la home? | Evidencia | Campos clave |
|---|---|---|---|---|
| `OnePageSchema` | `LocalBusiness` | **Sí** (global) | `layout.tsx:170`; definición `OnePageSchema.tsx:6-75` | `@id #organization`, `makesOffer` (5 `Service`), `knowsAbout`, `areaServed` (6 zonas), `telephone`, `email`, `priceRange` |
| `WebsiteSchema` | `WebSite` | **Sí** (global) | `layout.tsx:171`; definición `WebsiteSchema.tsx:3-19` | `publisher` = `Organization` "Devweb" |
| `ServiceHubSchema` | `ItemList` + `BreadcrumbList` | **No** (solo hubs/spokes) | `ServiceHubSchema.tsx:13`; uso en `app/soluciones/page.tsx:128` | — |
| `SpokeServiceSchema` | `Service` + `BreadcrumbList` | **No** (solo spokes) | `SpokeServiceSchema.tsx:10`; uso en `app/soluciones/*/page.tsx` | — |
| `FaqSectionSchema` | `FAQPage` | **No** (solo spokes/hubs) | `FaqSectionSchema.tsx:5` | — |

- No hay `FAQPage` en la home, pese a que el roadmap prevé FAQ técnica y ya existe el componente.
- No hay `SoftwareApplication` (el roadmap lo lista como tipo recomendado para el CRM/dashboard, `seo-roadmap-b2b.md:156`).
- No hay `BreadcrumbList` en la home (correcto: la home es la raíz; ver comentario en `OnePageSchema.tsx:77-78`).
- Higiene de entidades: `WebsiteSchema.tsx:11` publica `publisher.name = "Devweb"` mientras `OnePageSchema.tsx:10` usa "Devweb Patagonia — Gestión Digital Integral" y `@id #organization`; no hay `@id` cruzado entre ambos grafos.
- `LocalBusiness` no incluye `geo`, `openingHours` ni `contactPoint` (el roadmap F0 lista `contactPoint` como crítico, `seo-roadmap-b2b.md:154`).

### 2.7 Cobertura de sitemap

- `app/sitemap.ts:42-48` genera 25 URLs; la home figura con `priority: 1` y `changeFrequency: "weekly"` (`app/sitemap.ts:15`). **Cobertura correcta.**
- `lastModified` usa la fecha de build para todas las rutas (`app/sitemap.ts:6,45`), lo que es honesto a granularidad de deploy pero no refleja cambios reales de contenido.
- `app/robots.ts:6-13` permite `/` y declara el sitemap. **Pero** `disallow: ["/api/", "/_next/"]` (`app/robots.ts:10`) bloquea los assets JS/CSS de `/_next/`, que Googlebot necesita para renderizar. **Advertencia SEO.**

---

## 3. Mensaje comercial

### 3.1 Claridad de la propuesta de valor

- **Fuerte y alineada:** el H1 del hero coincide con el roadmap ("Software a medida para empresas industriales que no pueden frenar su operación", `hero-section.tsx:115-118` vs `seo-roadmap-b2b.md:32`) y el subhead desktop reproduce el dolor → solución del roadmap ("Reemplazamos las planillas y el WhatsApp por infraestructura que cotiza, pre-califica y reporta sola", `hero-section.tsx:123` vs `seo-roadmap-b2b.md:33`).
- El checklist del hero (CRM con IA, dashboards, portales, automatización, software a medida) refuerza el ICP industrial (`hero-section.tsx:12-18`).
- La sección Sistemas mantiene el registro correcto: paneles, dashboards, CRM, automatización (`software-systems-section.tsx:26-89`).

### 3.2 Alineación con ICP/keywords del roadmap

- **Sectores del roadmap** (Oil & Gas, logística, agroindustria, instalaciones industriales) aparecen en el subhead del hero (`hero-section.tsx:78`) y se explican en Hubs (`homepage-hub-links.tsx:18-21`). **Bien.**
- **Falta la franja de sectores** como bloque propio (roadmap bloque 2, `seo-roadmap-b2b.md:45`): los sectores se mencionan pero no hay un bloque dedicado "Oil & Gas / Logística / Agroindustria / Instalaciones".
- **Falta el bloque "El costo de seguir operando como hoy"** (roadmap bloque 3): no hay una sección de 3 dolores enlazando a solución.
- **Keywords del roadmap** (ej. "mantenimiento industrial petrolero", "empresas de transporte de cargas pesadas") no se reflejan en el copy de la home; el copy es de categoría ("software a medida", "CRM con IA") pero no de intención transaccional local.

### 3.3 Jerarquía de CTAs

- CTA primario declarado por el roadmap: **"Pedir diagnóstico técnico"** (`seo-roadmap-b2b.md:44,130`). Aparece consistentemente en hero, soluciones, sistemas, navbar y contacto.
- **Problema: proliferación de CTAs divergentes** que compiten con el primario:
  - "Abrir demo" (externo al CRM) — `software-systems-section.tsx:290`.
  - "Hablemos sobre tu proyecto" — `PortfolioSection.tsx:311` (el roadmap prohíbe "Hablemos", `seo-roadmap-b2b.md:130`).
  - "Cotizá tu web a medida" — `portfolio-section.tsx:129`.
  - "Solicita tu consultoría Gratuita" — `portfolio-section.tsx:372`.
  - "Empecemos tu proyecto hoy" — `portfolio-section.tsx:438`.
  - "Comenzar ahora" — `navbar.tsx:359`.
- El CTA primario y los secundarios usan el mismo estilo visual (`bg-primary-gradient` + borde blanco), sin jerarquía visual que distinga principal de secundario. Evidencia: `hero-section.tsx:129`, `PortfolioSection.tsx:307`, `portfolio-section.tsx:127,370`.

### 3.4 Prueba y evidencia

- **Stack:** visible en "Orquestado por IA" + logos (Next.js, Node, MongoDB, Figma, TW) — `about-section.tsx:58-89,373-402`. Alineado a la idea de especificidad técnica del roadmap (`seo-roadmap-b2b.md:132`).
- **Casos de éxito:** el portfolio son **proyectos web/ecommerce** (TechnoStore, Inmobiliaria, Casa de la Cultura, Ushuaia Glow, NGURU, La Negra uñas, Bodega, Coworking; `PortfolioSection.tsx:14-117`). No hay casos de **industria** (oil & gas, logística, agro) ni **métricas** (tonelaje, hectáreas, tiempos de respuesta, reducción de costos). El roadmap pide explícitamente hechos con número/proceso (`seo-roadmap-b2b.md:126`).
- **Métricas:** no hay ninguna cifra en la home (ni "cotización en 48 h", ni "respuesta < 1 s", ni zonas de cobertura cuantificadas).

### 3.5 Continuidad del embudo hero → contacto

- El CTA del hero va a **WhatsApp** (`hero-section.tsx:84,127`), no al formulario. El formulario de negocio (empresa, sector, necesidad) está solo al final (`contact-section.tsx:243-360`).
- Coincidencia positiva: el formulario incluye los campos de negocio del roadmap bloque 6 (empresa, sector con Oil & Gas / Logística / Agroindustria / Instalaciones, necesidad) — `contact-section.tsx:251,316-332,343-359`, alineado a `seo-roadmap-b2b.md:49`.
- En el recorrido hay saltos de registro: Portfolio y Metodología, antes de contacto, vuelven a copy de agencia web, que reencuadra al visitante fuera del discurso industrial.

### 3.6 Contradicciones y mensajes genéricos

| Mensaje observado | Evidencia | Contradicción con el roadmap |
|---|---|---|
| "Ventas 24/7", "Expansión Geográfica", "Automatización de Leads", "Reducción de Costos", "Fidelización", "Catálogo Infinito" | `about-section.tsx:25-56` | Beneficios B2C/ecommerce; el roadmap prohíbe enfoque B2C (`seo-roadmap-b2b.md:9`) |
| "Cotizá tu web a medida", "arquitectura de tu sitio y los wireframes", "Diseño Centrado en el Usuario (UX/UI)" | `portfolio-section.tsx:16-37,129` | Lenguaje de agencia web; el roadmap lo prohíbe (`seo-roadmap-b2b.md:9,126`) |
| "Agencia de desarrollo web y software… soluciones digitales que impulsan tu negocio" | `footer.tsx:100-101` | Genérico, sin métrica ni ICP |
| "Seguime en mis redes", "No soy solo un programador; soy tu socio estratégico" | `about-section.tsx:291,362` | Voz personal e informal; el roadmap pide voz formal de empresa (`seo-roadmap-b2b.md:129`) |
| `keywords` con "diseño web", "ecommerce", "one page", "portfolio" | `layout.tsx:41-60` | Contradice el posicionamiento industrial del propio cuerpo |
| Título "Gestión Digital Integral" | `layout.tsx:36` | El roadmap prohíbe "integral" (`seo-roadmap-b2b.md:126`) |

---

## 4. UX y legibilidad

### 4.1 Jerarquía visual y carga cognitiva

- **Longitud:** 8 secciones, con hero (`min-h-screen`, `hero-section.tsx:26`) y portfolio (`min-h-screen`, `PortfolioSection.tsx:125,130`) a pantalla completa. La home es muy larga antes de llegar al formulario.
- **Densidad:** varias secciones repiten la misma estructura de encabezado grande + divider + grid de cards (Soluciones, Sistemas, Hubs, Portfolio, Sobre nosotros, Metodología). Buena consistencia, pero favorece el "scroll monótono".
- Las animaciones de entrada usan `initial={{ opacity: 0 }}` con `useInView`/`whileInView` (`services-section.tsx:53,103`, `about-section.tsx:93`, `portfolio-section.tsx:12`, `PortfolioSection.tsx:136`). El contenido está en el DOM (rastreable), pero si el JS falla permanece invisible. Riesgo UX/no-SEO.

### 4.2 Diferencias mobile vs desktop

La home renderiza **dos bloques de contenido completos y distintos** según breakpoint, no solo un reacomodo responsive:

| Sección | Mobile | Desktop | Evidencia |
|---|---|---|---|
| Hero | H1 corto + checklist 2 col | H1 largo + subhead + checklist 3 col | `hero-section.tsx:59` (`lg:hidden`) vs `:105` (`hidden lg:block`) |
| Soluciones | Título "Nuestras soluciones" + **carrusel** 1×1 | Título "Soluciones para operación industrial" + **grid 2 columnas** | `services-section.tsx:108` vs `:110`; `:180` (`lg:hidden`) vs `:144` (`hidden lg:grid`) |
| Sistemas | Título mobile corto | Título desktop largo | `software-systems-section.tsx:134` vs `:138` |
| Sobre nosotros | Carrusel + info personal + stack + CTA "Empecemos tu proyecto" | Grid 3×2 + dos rectángulos + card + CTAs "Pedir diagnóstico técnico" y "Diagnóstico técnico" | `about-section.tsx:151` (`lg:hidden`) vs `:425` (`hidden lg:block`); CTAs `:407` vs `:701` |
| Metodología | Texto + carrusel + CTA "Solicita tu consultoría Gratuita" | Texto + 4 cards + CTA "Cotizá tu web a medida" + CTA "Empecemos tu proyecto hoy" | `portfolio-section.tsx:230` (`lg:hidden`) vs `:93` (`hidden lg:block`); CTAs `:361` vs `:118,427` |

- **Implicación comercial:** el CTA y el mensaje cambian según dispositivo. En desktop, Sobre nosotros cierra con "Diagnóstico técnico"; en mobile cierra con "Empecemos tu proyecto". El roadmap exige **un** CTA primario coherente.
- Las clases `lg:hidden` / `hidden lg:*` **no ocultan contenido en mobile** (el requisito del análisis era detectar ocultamiento): en todos los casos hay una versión alternativa para cada breakpoint, no una ausencia. El único caso de contenido oculto es la precarga de imágenes (`portfolio-section.tsx:257`, `hidden` + `aria-hidden`).

### 4.3 Accesibilidad básica

| Ítem | Estado | Evidencia |
|---|---|---|
| `lang="es"` en `<html>` | Correcto | `layout.tsx:127` |
| Botones hamburguesa con `aria-label` | Correcto | `navbar.tsx:208` |
| Drawer con `role="dialog"` + `aria-label` | Correcto | `navbar.tsx:249-250` |
| Acordeones con `aria-expanded` | Correcto | `navbar.tsx:287` |
| Formulario: `label` + `htmlFor`/`id` | Correcto | `contact-section.tsx:222,244,266,288,309,336,363` |
| Modal de éxito con `role="dialog"` | Correcto | `success-modal.tsx:113` |
| **Botón flotante de WhatsApp sin nombre accesible** | **Falla** | `WhatsappButton.tsx:8-18` (sin `aria-label`) |
| **Error del formulario sin `role="alert"`/`aria-live`** | **Falla** | `contact-section.tsx:135-144` |
| Botones de carrusel sin `aria-label` | Falla | `services-section.tsx:231,255`; `about-section.tsx:193`; `portfolio-section.tsx:326,345` |
| `role="banner"` dentro de `<main>` | Incorrecto | `hero-section.tsx:24` + `page.tsx:12` |
| Contraste texto pequeño | Riesgo | `text-neutral-500` y `placeholder:text-neutral-600` sobre `#0D0D0D` (`software-systems-section.tsx:203`; `contact-section.tsx:236`) |
| Videos decorativos con `aria-hidden` + `tabIndex={-1}` | Correcto | `hero-section.tsx:29,37,41,49` |

### 4.4 Escaneabilidad

- Buena: encabezados claros, párrafos cortos, grids de cards, listas de beneficios.
- Débil: uso intensivo de mayúsculas con `uppercase` en textos largos (checklist del hero, `hero-section.tsx:98,142`; beneficio de sistemas, `software-systems-section.tsx:215`), que reduce velocidad de lectura.
- Los dividers decorativos (`<div className="border ...">`) se repiten como elemento de diseño en cada sección, sin valor semántico.

---

## 5. Hallazgos priorizados

| Severidad | Hallazgo | Evidencia (`path:line`) | Impacto |
|---|---|---|---|
| **CRÍTICO** | 7 elementos `<h1>` en el DOM (hero emite 2) | `hero-section.tsx:60,109`; `services-section.tsx:98`; `PortfolioSection.tsx:141`; `about-section.tsx:116`; `portfolio-section.tsx:68`; `contact-section.tsx:122` | SEO |
| **CRÍTICO** | Metadatos globales (title/description/keywords) apuntan a agencia web/ecommerce, no al software industrial B2B | `layout.tsx:34-60` vs `hero-section.tsx:115`; `seo-roadmap-b2b.md:9,126` | SEO + Comercial |
| **CRÍTICO** | Sección Sobre nosotros vende beneficios B2C/ecommerce ("Ventas 24/7", "Catálogo Infinito", "Fidelización") | `about-section.tsx:25-56` | Comercial |
| **ADVERTENCIA** | Metodología usa lenguaje de agencia web ("Cotizá tu web a medida", "arquitectura de tu sitio") | `portfolio-section.tsx:16-37,77,129` | Comercial |
| **ADVERTENCIA** | CTAs divergentes que compiten con el primario ("Hablemos", "Cotizá tu web", "Solicita tu consultoría Gratuita", "Empecemos tu proyecto", "Comenzar ahora") | `PortfolioSection.tsx:311`; `portfolio-section.tsx:129,372,438`; `navbar.tsx:359` | Comercial |
| **ADVERTENCIA** | Sin prueba cuantificable: casos son web/ecommerce, sin métricas ni casos industriales | `PortfolioSection.tsx:14-117`; `seo-roadmap-b2b.md:126` | Comercial |
| **ADVERTENCIA** | `robots.ts` bloquea `/_next/` (assets JS/CSS necesarios para render) | `app/robots.ts:10` | SEO |
| **ADVERTENCIA** | No hay `FAQPage` en la home (componente existe, no montado) | `FaqSectionSchema.tsx:5`; no en `page.tsx`/`layout.tsx` | SEO |
| **ADVERTENCIA** | Contenido y CTAs distintos entre mobile y desktop | `about-section.tsx:151,425,407,701`; `hero-section.tsx:59,105`; `services-section.tsx:144,180` | UX + Comercial |
| **ADVERTENCIA** | Botón flotante de WhatsApp sin nombre accesible | `WhatsappButton.tsx:8-18` | UX (a11y) |
| **ADVERTENCIA** | `role="banner"` aplicado dentro de `<main>` | `hero-section.tsx:24` + `page.tsx:12` | SEO/UX (a11y) |
| **ADVERTENCIA** | Imágenes `fill` sin `sizes` (riesgo LCP) | `PortfolioSection.tsx:206`; `about-section.tsx:249,521,576` | UX (perf) |
| **SUGERENCIA** | `LocalBusiness` sin `geo`/`openingHours`/`contactPoint` | `OnePageSchema.tsx:6-75` | SEO |
| **SUGERENCIA** | Entidad inconsistente: `WebSite.publisher.name="Devweb"` vs `LocalBusiness` "Devweb Patagonia…", sin `@id` cruzado | `WebsiteSchema.tsx:11`; `OnePageSchema.tsx:10` | SEO |
| **SUGERENCIA** | Anchor text genérico en footer ("SEO"/"Ecommerce" → mismo `/#servicios`) | `footer.tsx:11-16` | SEO |
| **SUGERENCIA** | Footer usa `<h4>` sin `<h3>` en contexto | `footer.tsx:129,158,187` | SEO |
| **SUGERENCIA** | Error de formulario sin `role="alert"`/`aria-live` | `contact-section.tsx:135-144` | UX (a11y) |
| **SUGERENCIA** | Carruseles con botones sin `aria-label` | `services-section.tsx:231,255`; `about-section.tsx:193`; `portfolio-section.tsx:326,345` | UX (a11y) |
| **SUGERENCIA** | Enlaces internos con `<a>` en lugar de `next/link` (navbar/footer) | `navbar.tsx:124,145,178`; `footer.tsx:139,167` | UX (perf) |
| **SUGERENCIA** | `w-screen` en `<html>` puede causar overflow horizontal | `layout.tsx:127` | UX |
| **SUGERENCIA** | Faltan bloques del roadmap: franja de sectores y "El costo de seguir operando como hoy" | `seo-roadmap-b2b.md:45,46` vs `app/page.tsx:13-20` | Comercial |

**Lo que está bien (explícito):**

- H1 y subhead del hero alineados al roadmap (`hero-section.tsx:115,123`).
- `<main>` correcto y landmarks de nav/footer presentes (`page.tsx:12`, `navbar.tsx:113`, `footer.tsx:60`).
- Metadatos técnicos completos: canonical, OG, Twitter, robots, verification, `lang="es"` (`layout.tsx:64-118,127`).
- `LocalBusiness` + `WebSite` JSON-LD montados en la home con `makesOffer`, `knowsAbout` y `areaServed` (`layout.tsx:170-171`, `OnePageSchema.tsx:36-73`).
- Formulario con campos de negocio del roadmap (`contact-section.tsx:243-360`).
- Home en sitemap con prioridad 1 (`app/sitemap.ts:15`).
- Precarga de imágenes decorativas con `alt=""` y `aria-hidden` (`portfolio-section.tsx:257-268`).
- Navbar accesible y con scroll-lock (`navbar.tsx:75-97,208,249,287`).
- Limpieza de URL: `/blog` eliminado y redirección 301 (referenciado en `seo-roadmap-b2b.md:204`).

---

## 6. Recomendaciones

### Prioridad Alta

1. **Unificar el H1.** Dejar un único `<h1>` (hero) y convertir a `<h2>` los encabezados de Soluciones, Portfolio, Sobre nosotros, Metodología y Contacto. Resuelve el hallazgo CRÍTICO de 7 H1. Evidencia: `services-section.tsx:98`, `PortfolioSection.tsx:141`, `about-section.tsx:116`, `portfolio-section.tsx:68`, `contact-section.tsx:122`.
2. **Reescribir metadatos con el posicionamiento industrial.** Alinear `title`, `description` y `keywords` al ICP B2B del roadmap y eliminar "integral" y las keywords de diseño web/ecommerce. Evidencia: `layout.tsx:34-60`; `seo-roadmap-b2b.md:9,126`.
3. **Corregir el copy B2C de Sobre nosotros.** Reemplazar "Ventas 24/7", "Catálogo Infinito", "Fidelización", etc. por beneficios de operación industrial. Evidencia: `about-section.tsx:25-56`.
4. **Reencuadrar Metodología** al proceso de software a medida (no "Cotizá tu web"). Evidencia: `portfolio-section.tsx:16-37,129`.
5. **Consolidar el CTA primario** "Pedir diagnóstico técnico" y degradar visualmente los secundarios; eliminar "Hablemos" (prohibido por el roadmap). Evidencia: `PortfolioSection.tsx:311`; `portfolio-section.tsx:129,372,438`; `navbar.tsx:359`.

### Prioridad Media

6. **Desbloquear `/_next/` en robots** para no impedir el render. Evidencia: `app/robots.ts:10`.
7. **Añadir `FAQPage` a la home** con 3–6 preguntas técnicas del sector, reutilizando `FaqSectionSchema`. Evidencia: `FaqSectionSchema.tsx:5`.
8. **Añadir prueba cuantificable** (casos industriales, tiempos, zonas) y sustituir/etiquetar el portfolio genérico por casos del ICP. Evidencia: `PortfolioSection.tsx:14-117`; `seo-roadmap-b2b.md:126`.
9. **Unificar versión mobile/desktop** de CTAs y H1 para que el mensaje no cambie según dispositivo. Evidencia: `about-section.tsx:407,701`; `hero-section.tsx:59,105`.
10. **Añadir nombre accesible al botón de WhatsApp** y `role="alert"` al error del formulario. Evidencia: `WhatsappButton.tsx:8-18`; `contact-section.tsx:135-144`.
11. **Añadir bloques faltantes del roadmap** (franja de sectores y "El costo de seguir operando como hoy"). Evidencia: `seo-roadmap-b2b.md:45,46`.

### Prioridad Baja

12. **Ampliar `LocalBusiness`** con `geo`, `openingHours` y `contactPoint`; alinear la entidad `WebSite.publisher` con `LocalBusiness` vía `@id`. Evidencia: `OnePageSchema.tsx:6-75`; `WebsiteSchema.tsx:11`.
13. **Corregir `sizes` en imágenes `fill`** y revisar LCP. Evidencia: `PortfolioSection.tsx:206`; `about-section.tsx:249,521,576`.
14. **Mejorar anchor text del footer** y la estructura de encabezados (`h4` → jerarquía correcta). Evidencia: `footer.tsx:11-16,129,158,187`.
15. **Migrar enlaces internos a `next/link`** en navbar/footer. Evidencia: `navbar.tsx:124,145,178`; `footer.tsx:139,167`.
16. **Quitar `role="banner"` del hero** o envolver la navegación en `<header>`. Evidencia: `hero-section.tsx:24`.
17. **Revisar `w-screen` en `<html>`** para evitar overflow horizontal. Evidencia: `layout.tsx:127`.

---

## Cómo leer este documento

- **Sección 2 (SEO):** rastreo, semántica, metadatos. Se puede mejorar aunque la percepción humana no cambie.
- **Sección 3 (Comercial):** percepción del decisor (director de operaciones / dueño / gerente). Puede divergir del SEO: una home puede estar perfectamente rastreada y aun así no vender.
- **Sección 4 (UX):** experiencia humana y accesibilidad.
- **Sección 5 y 6:** síntesis accionable priorizada por severidad.
