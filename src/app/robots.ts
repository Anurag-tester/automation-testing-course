import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/api/'],
      }
    ],
    sitemap: 'https://testmaster-iota.vercel.app/sitemap.xml',
    host: 'https://testmaster-iota.vercel.app',
  }
}