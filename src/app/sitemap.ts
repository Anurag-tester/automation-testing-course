import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://testmaster-iota.vercel.app'
  
  // Static pages
  const staticPages = [
    '',
    '/curriculum',
    '/practice',
    '/interview-questions',
    '/selenium-cheatsheet',
    '/courses/manual-testing',
    '/courses/java-programming',
    '/courses/selenium-webdriver',
  ]

  // Generate day pages (1-35)
  const dayPages = Array.from({ length: 35 }, (_, i) => `/day${i + 1}`)

  const allPages = [...staticPages, ...dayPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}