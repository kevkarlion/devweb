# Roadmap de Implementación SEO B2B — Devweb Patagonia

> Documento operativo para el equipo. Base: «Informe de Inteligencia Comercial y SEO B2B - Dev Web» (documento original en `/home/kriq/mis-proyectos/Devweb`). Última actualización: 2026-09-12.

## Contexto

Devweb Patagonia provee software a medida, automatización con IA, CRMs y ecosistemas web de alta performance (Next.js) para empresas B2B consolidadas en Oil & Gas, logística, agroindustria e instalaciones industriales del Alto Valle y Neuquén.

El objetivo SEO del sitio .com: **capturar demanda transaccional de digitalización** mostrando la relación directa entre «el problema corporativo del prospecto» y «nuestra solución de software». Prohibido lenguaje de agencia de marketing, adjetivos vacíos y enfoque B2C.

### ICPs y dolores detectados (resumen del informe)

| Empresa | Rubro | Dolor principal | Servicio Devweb asociado | Prioridad |
|---|---|---|---|---|
| Zille S.R.L. | Obras/instalaciones (Neuquén/Roca) | Presencia digital no refleja su envergadura; gestión de proveedores/subcontratistas multi-locación | Web corporativa + dashboard de obras/flota | 1 |
| Ingeniería Sima | Mantenimiento/Ingeniería O&G (Neuquén) | Reporte a clientes (operadoras) manual | Portales de clientes + SEO | 2 |
| Crexell | Logística/Montaje (Alto Valle/NQN) | Prospectos no calificados saturan ventas; embudos sin automatizar | CRM + IA pre-calificación (tonelaje/zona) | 3 |

### Keywords de oportunidad (del informe)

| Keyword | Zona | Intención | Competencia | Oportunidad |
|---|---|---|---|---|
| mantenimiento industrial petrolero | Neuquén Capital | Contratación B2B | Media | Alta |
| empresas de transporte de cargas pesadas | Cipolletti | Contratación B2B | Media-Baja | Alta |
| instalación sistemas de riego agroindustrial | General Roca | Contratación | Baja | Muy Alta |
| climatización naves industriales | Allen / V. Regina | Contratación / Presupuesto | Baja | Muy Alta |

---

## 1. Propuesta de Valor Principal (Homepage)

- **H1:** «Software a medida para empresas industriales que no pueden frenar su operación.»
- **Subhead:** «CRMs con IA, dashboards y portales para proveedores de Oil & Gas, logística y agroindustria en Neuquén y el Alto Valle. Reemplazamos las planillas y el WhatsApp por infraestructura que cotiza, pre-califica y reporta sola.»

**Pilares (dolor → mensaje):**

| Dolor del mercado | Pilar | Mensaje |
|---|---|---|
| Fuga de leads por gestión manual | CRM con IA que pre-califica | «Cada consulta de presupuesto se filtra por tonelaje, hectáreas o zona antes de tocar a tu equipo de ventas.» |
| Sin URLs dedicadas → invisibilidad | SEO B2B agresivo | «Una URL por servicio y por localidad. Captamos la búsqueda que hoy se lleva un directorio genérico.» |
| Clientes llaman para saber el estado | Dashboards y portales a medida | «Tu cliente ve el estado de sus mantenimientos en tiempo real. Vos, el estado de tu operación.» |

**Bloques de la homepage (en orden):**
1. Hero con H1 + CTA primario **«Pedir diagnóstico técnico»**.
2. Franja de sectores: Oil & Gas / Logística / Agroindustria / Instalaciones industriales.
3. «El costo de seguir operando como hoy» → 3 dolores, cada uno enlazando a su página de solución.
4. Entregables concretos (dashboard, CRM, portal, automatización) — no servicios genéricos.
5. Evidencia operativa: stack (Next.js), tiempos de respuesta, zonas de cobertura.
6. CTA final repetido + formulario con campos de negocio (empresa, rubro, cantidad de operaciones/mes).

---

## 2. Arquitectura de Silos de Conversión

```
/
├── /soluciones/                          HUB (Solución)
│   ├── /soluciones/software-a-medida
│   ├── /soluciones/crm-para-empresas-de-servicios
│   ├── /soluciones/automatizacion-con-ia
│   ├── /soluciones/dashboards-y-portales-de-clientes
│   └── /soluciones/desarrollo-web-b2b
│
├── /industrias/                          HUB (Sector → dolor)
│   ├── /industrias/oil-gas
│   ├── /industrias/logistica-y-transporte
│   ├── /industrias/agroindustria
│   └── /industrias/instalaciones-industriales
│
└── /localidades/                         HUB (Zona → contexto local)
    ├── /localidades/neuquen
    ├── /localidades/cipolletti
    ├── /localidades/general-roca
    ├── /localidades/villa-regina
    ├── /localidades/allen
    └── /localidades/anelo-vaca-muerta

Páginas de problema BoFU (prioridad alta):
├── /localidades/neuquen/software-para-oil-gas
├── /localidades/general-roca/digitalizacion-agroindustrial
├── /localidades/cipolletti/software-para-logistica
├── /localidades/anelo-vaca-muerta/software-para-servicios-petroleros
└── /localidades/villa-regina/riego-y-climatizacion-digital
```

**Reglas:**
- Sin blog generalista ni sección de noticias. El contenido editable vive en **secciones problema→solución** dentro de estas páginas y en **FAQs técnicas**.
- `agroindustria` existe por riego/climatización (oportunidad Muy Alta). `logistica-y-transporte` por Crexell (Alta). `oil-gas` por Sima + Vaca Muerta (Alta). `instalaciones-industriales` por Zille.
- Linking interno hub → spoke: cada página de solución enlaza a las 2 industrias que la compran y a su localidad principal.

---

## 3. Mapeo de Keywords vs. Soluciones

### A. Keywords transaccionales del mercado (capa interceptación)

| Keyword | Página Devweb que capta | Ángulo comercial |
|---|---|---|
| mantenimiento industrial petrolero — Neuquén | `/industrias/oil-gas` + `/localidades/neuquen` | «Los proveedores de mantenimiento para operadoras siguen cotizando por WhatsApp y reportando por mail. Construimos el sistema que ordena cotizaciones y reportes a operadoras.» |
| empresas de transporte de cargas pesadas — Cipolletti | `/industrias/logistica-y-transporte` + `/localidades/cipolletti` | «CRM que pre-califica por tonelaje y zona para que ventas no pierda horas con proyectos chicos.» |
| instalación sistemas de riego agroindustrial — Gral. Roca | `/industrias/agroindustria` + `/localidades/general-roca` | «El productor busca riego automatizado. Vos aparecés primero y un CRM con IA pre-cotiza según hectáreas y agenda la visita sin mover un dedo.» |
| climatización naves industriales — Allen/V. Regina | `/industrias/agroindustria` + `/localidades/villa-regina` | «Portales de cliente para que el productor vea el estado de la instalación en tiempo real y firme el próximo mantenimiento sin llamadas.» |
| empresas de obras civiles — Neuquén | `/industrias/instalaciones-industriales` + `/localidades/neuquen` | «Su presencia en Google no refleja su envergadura operativa. Web corporativa + dashboard de obras y flota.» |
| alquiler de grúas — Cipolletti | `/industrias/logistica-y-transporte` + `/localidades/cipolletti` | «Escalá tu autoridad de marca y monopolizá las búsquedas transaccionales de logística en Vaca Muerta.» |
| ingeniería de detalle — Neuquén | `/industrias/oil-gas` + `/soluciones/dashboards-y-portales-de-clientes` | «Digitalización del reporte a clientes (operadoras): portal donde ven el avance sin llamar.» |
| reparación de bombas sumergibles — Cipolletti | `/industrias/agroindustria` | Página demostración: «Una URL dedicada a una intención específica es la diferencia entre aparecer o no.» |
| sistemas de riego automatizado — Gral. Roca | `/industrias/agroindustria` | «Pre-cotización automática por hectáreas, decisión de riego respaldada por datos.» |
| mantenimiento de instalaciones industriales — Neuquén | `/industrias/instalaciones-industriales` + `/soluciones/dashboards-y-portales-de-clientes` | «Visibilidad de datos operativos: el cliente final ve el estado de sus mantenimientos en tiempo real.» |

### B. Keywords propias de Devweb (capa demanda de digitalización)

| Keyword propia | Página que capta | Ángulo |
|---|---|---|
| software a medida Neuquén / desarrollo software Alto Valle | `/soluciones/software-a-medida` | «Sistemas para industrias multi-locación: cotizaciones, proveedores y subcontratistas en Roca, Neuquén y Añelo en una sola plataforma.» |
| CRM para empresas de servicios | `/soluciones/crm-para-empresas-de-servicios` | «CRM con IA que filtra prospectos no calificados y enruta consultas por tamaño de proyecto.» |
| software para oil gas / sistemas para Vaca Muerta | `/localidades/anelo-vaca-muerta/software-para-servicios-petroleros` | «Base operativa en Vaca Muerta: gestión de servicios petroleros con reportes a operadoras.» |
| digitalización agroindustrial | `/localidades/general-roca/digitalizacion-agroindustrial` | «Rezago tecnológico del sector frutícola = oportunidad de automatización y eficiencia de recursos.» |
| sistema de gestión de flotas | `/industrias/logistica-y-transporte` | «Flota, grúas y cargas especiales: un dashboard para saber dónde está cada equipo.» |
| automatización de procesos con IA | `/soluciones/automatizacion-con-ia` | «Chatbots entrenados con tu base de conocimiento que responden consultas técnicas 24/7 y agendan reuniones volcando datos al CRM.» |
| desarrollo Next.js Neuquén / Argentina | `/soluciones/desarrollo-web-b2b` | «Arquitecturas Jamstack con cargas < 1 segundo — clave para Core Web Vitals y para no perder al director que busca en el celular.» |

---

## 4. Lineamientos de Copywriting B2B

1. **Nada de adjetivos sin métrica.** Prohibido: «integral», «mejores», «calidad garantizada», «vanguardia», «soluciones completas». Cada claim lleva número o proceso: *cotización en 48 h*, *pre-calificación automática por tonelaje*, *reportes a operadoras en tiempo real*.
2. **Vocabulario del sector**: tonelaje, hectáreas, locaciones, operadoras, galpones de empaque, ductos, subcontratistas, cargas especiales, obras, flota. Si la palabra no la usaría un director de operaciones de Zille/Crexell/Sima, no va.
3. **Estructura problema → causa → solución** en cada landing. Nunca «ofrecemos X». Siempre: *«En el Alto Valle, los proveedores de riego pierden prospectos porque cotizan por WhatsApp → sin registro, sin seguimiento, sin pre-calificación → CRM con IA que pre-cotiza según hectáreas y agenda la visita.»*
4. **Lector = director de operaciones, dueño o gerente.** Segunda persona formal: «su empresa», «su equipo de ventas».
5. **CTAs de negocio**: «Pedir diagnóstico técnico», «Solicitar propuesta», «Agendar reunión con ingeniería». Cero «Descubrí más» / «Hablemos».
6. **Cada landing incluye**: cuello de botella → proceso → entregables → riesgos mitigados → FAQ técnica.
7. **Especificidad técnica como prueba de autoridad**: stack (Next.js), integraciones API, seguridad, hosting, tiempos de implementación, zonas operativas reales (Vaca Muerta, parques industriales de Roca/Regina).

**Plantilla de headings de landing:**
```
H1: [Problema del sector] + promesa operativa
H2: El costo de seguir operando como hoy
H2: Por qué las webs «tarjeta de presentación» no captan
H2: Cómo lo resolvemos (proceso en 4 pasos)
H2: Entregables (dashboard, CRM, automatización)
H2: Preguntas frecuentes técnicas (FAQPage schema)
CTA: Diagnóstico técnico sin costo
```

---

## 5. SEO Técnico y Autoridad

### Marcado JSON-LD por tipo de página

| Tipo | Schema | Campos críticos |
|---|---|---|
| Global | `Organization` | name, url, logo, sameAs, address, contactPoint |
| Localidades | `LocalBusiness` / `ProfessionalService` | areaServed, address, geo, openingHours |
| Soluciones/Industrias | `Service` | serviceType, provider, areaServed, offers, audience (Business) |
| Software | `SoftwareApplication` | applicationCategory (BusinessApplication), operatingSystem, offers |
| FAQs | `FAQPage` | 3–6 preguntas reales del sector |
| Navegación | `BreadcrumbList` | jerarquía silo → spoke |

### Estructura de entidades (Google + LLMs/GEO)

Grafo interno consistente: **Devweb** (proveedor) → **Servicios** (CRM, IA, dashboards, software a medida) → **Sectores** (Oil & Gas, logística, agroindustria, industrial) → **Zonas** (Neuquén, Cipolletti, Gral. Roca, Villa Regina, Allen, Añelo/Vaca Muerta). Cada página responde de forma directa y verificable: qué hace Devweb, a qué sector, dónde opera.

### Performance

- SSG/ISR por página con `revalidate` inteligente; páginas BoFU casi estáticas → LCP objetivo < 1.2 s.
- Core Web Vitals en verde como requisito de release: imágenes AVIF/WebP, fuentes auto-hospedadas, preload del hero, cero JS de terceros bloqueante.
- Sitemaps por silo, breadcrumbs visibles, linking interno hub → spoke.

### Autoridad local

- Google Business Profile por base operativa (Neuquén, Cipolletti, Gral. Roca) con categoría de servicio.
- E-E-A-T: autoría técnica visible, stack público, menciones en directorios industriales regionales.

---

## Plan de Ejecución y Estado

| Fase | Alcance | Estado |
|---|---|---|
| **F0 — Base técnica** | Schema global (Organization/LocalBusiness/Service), sitemap actualizado, robots, Search Console + GA4, GBP por localidad | CÓDIGO ✅ / CUENTAS ⏳ |
| **F1 — Núcleo** | 5 soluciones + 4 industrias (spokes con contenido completo). Homepage pendiente de decisión del dueño (ajustar H1/bloques a la nueva propuesta) | CÓDIGO ✅ |
| **F2 — Localidades** | 6 páginas de localidad + 5 páginas de problema combinadas | CÓDIGO ✅ |
| **F3 — Conversión** | Chatbot LLM + CRM integrado al formulario, FAQ dinámicas, medición trimestral (20 keywords núcleo) | Pendiente |

### Checklist F0 (dueño/equipo)

- [x] Schema `Organization`/`Service` — extendido con `ServiceHubSchema` (ItemList + BreadcrumbList) en hubs
- [x] Sitemap data-driven (`app/sitemap.ts`) con hubs `/soluciones`, `/industrias`, `/localidades` (9 URLs)
- [x] Robots unificado: `app/robots.ts` como única fuente, eliminado `public/robots.txt` (reglas divergentes)
- [x] Hubs base creados: `/soluciones`, `/industrias`, `/localidades` (metadata, copy B2B, FAQ, CTA)
- [ ] Search Console: verificar propiedad `google12c516a9d454dd7a.html` (presente en `public/`)
- [ ] GA4 conectado (verificar `@vercel/analytics`)
- [ ] Google Business Profile: Neuquén, Cipolletti, Gral. Roca

### Checklist F1 (equipo)

- [x] 5 páginas de solución con contenido completo (`/soluciones/*`)
- [x] 4 páginas de industria con contenido completo (`/industrias/*`)
- [x] Schema `Service` + BreadcrumbList + FAQPage por spoke (`SpokeServiceSchema`, `FaqSectionSchema`)
- [x] Hubs `/soluciones` y `/industrias` enlazando a sus spokes
- [x] Navbar con dropdowns de silos (Soluciones/Industrias/Localidades) — desktop + menú mobile agrupado
- [x] Footer: links a silos (Soluciones/Industrias/Localidades) + CTA; sin Blog
- [x] Blog eliminado del sitio (`app/blog` borrado, `BlogArticleSchema` removido, redirección 301 de `/blog` y `/blog/:path*` → `/` en `next.config.mjs`) — no reflejaba el posicionamiento industrial B2B
- [x] Sitemap: 18 URLs, prioridad 0.9 en spokes Muy Alta/Alta (agroindustria, logística, oil-gas, CRM)
- [ ] Homepage: decidir si se aplica nueva propuesta de valor (H1 «Software a medida para empresas industriales que no pueden frenar su operación», bloques dolor→solución, formulario con campos de negocio)
- [ ] Commitear F0 + F1 (sin commitear aún)

### Checklist F2 (localidades)

- [x] 6 páginas de localidad (`/localidades/{neuquen,cipolletti,general-roca,villa-regina,allen,anelo-vaca-muerta}`)
- [x] 5 páginas combinadas de problema (solución × sector × zona, anidadas sin colisión de rutas)
- [x] Hub `/localidades` enlazando a las 6 localidades
- [x] Sitemap: 29 URLs totales (18 + 11), prioridad 0.9 en combinadas Muy Alta/Alta
- [ ] Homepage: decidir nueva propuesta de valor (H1/bloques/formulario)
- [ ] Commitear F0 + F1 + F2 (sin commitear aún)

---

## KPIs

- Posiciones top 3 para las 4 keywords del informe en 6 meses.
- Leads calificados/mes desde landings.
- 100% de páginas con Core Web Vitals en verde.
- % de conversión formulario → llamada diagnóstica.

## Fuente

«Informe de Inteligencia Comercial y SEO B2B - Dev Web» (docx) — ICPs: Zille S.R.L., Crexell S.A., Ingeniería Sima; mercado Alto Valle + Neuquén; sectores: mantenimiento industrial, servicios petroleros, logística, riego y climatización agroindustrial.