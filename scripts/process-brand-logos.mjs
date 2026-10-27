/**
 * Normaliza los logos de clientes para el marquee del home.
 *
 * Entrada:  public/logos marcas/*.webp  (no se modifica)
 * Salida:   public/logos-marcas/<slug>.webp  (alfa real, sin halo de matte blanco)
 *
 * Pasos por logo:
 *  1. Des-matte contra blanco: los bordes antialiasados vienen premultiplicados
 *     sobre blanco (halo claro). Se recupera el color real del logo.
 *  2. Detección de monocromo: si el logo no tiene color (negro/blanco/gris),
 *     se invierte a blanco para que se lea sobre el fondo oscuro del sitio.
 *  3. Normalización de tamaño: ancho máximo 480px, sin upscaling.
 */
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const SRC_DIR = "public/logos marcas";
const OUT_DIR = "public/logos-marcas";

const LOGOS = [
  { file: "logo-desktop-2026.webp", slug: "riquelme-propiedades", mono: false },
  { file: "logo-dorado-white-nvo.7db2f1f5.webp", slug: "la-negra-unas", mono: false },
  { file: "logo-small.webp", slug: "ngurui-marketing", mono: false },
  { file: "000000771.webp", slug: "rolo-climatizacion", mono: false },
  { file: "nvologocdc.webp", slug: "casa-de-la-cultura", mono: true },
  { file: "logo-texto.webp", slug: "techno-store", mono: false },
];

const MAX_WIDTH = 480;

async function processLogo({ file, slug, mono }) {
  const input = path.join(SRC_DIR, file);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.from(data);

  // 1 + 2: des-matte contra blanco y eventual monocromo a blanco.
  for (let i = 0; i < width * height; i++) {
    const o = i * channels;
    const a = out[o + 3];
    if (a === 0) continue;

    if (a < 255) {
      // c_real = (c - (1 - a) * 255) / a  -> quita el halo del matte blanco
      for (let c = 0; c < 3; c++) {
        const value = (out[o + c] - 255 * (1 - a / 255)) / (a / 255);
        out[o + c] = Math.max(0, Math.min(255, Math.round(value)));
      }
    }

    if (mono) {
      out[o] = 255;
      out[o + 1] = 255;
      out[o + 2] = 255;
    }
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  const pipeline = sharp(out, {
    raw: { width, height, channels },
  });

  const meta = await pipeline.metadata();
  const targetWidth = Math.min(MAX_WIDTH, meta.width);
  const targetHeight = Math.round((meta.height / meta.width) * targetWidth);

  const target = path.join(OUT_DIR, `${slug}.webp`);
  await pipeline
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(target);

  const stats = await fs.stat(target);
  console.log(
    `${file} -> ${target} (${targetWidth}x${targetHeight}, ${Math.round(stats.size / 1024)} KB)`,
  );
}

for (const logo of LOGOS) {
  await processLogo(logo);
}
