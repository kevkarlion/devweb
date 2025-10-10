import { MetadataRoute } from 'next'

// Definimos la URL base de tu sitio
const baseUrl = 'https://devwebpatagonia.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl, // La página principal
      lastModified: new Date(), // Fecha de última modificación (importante para SEO)
      changeFrequency: 'yearly', // Puedes usar 'weekly', 'monthly', o 'yearly'
      priority: 1, // La página principal siempre debe tener la máxima prioridad
    },
    // Si tuvieras un blog o una política de privacidad, las agregarías aquí:
    // { url: `${baseUrl}/politica-privacidad`, ... }
  ]
}