import { MetadataRoute } from 'next'
import { courseData } from '@/data/courseData'

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
    '/courses/api-testing',
    '/privacy',
  ]

  // Generate course day pages using actual slugs
  const dayPages = courseData.map(day => `/${day.slug || day.id}`)

  // Practice challenge pages
  const practicePages = [
    '/practice/button-click',
    '/practice/input-handling',
    '/practice/dropdown-select',
    '/practice/radio-toggle',
    '/practice/elements',
    '/practice/forms',
    '/practice/multi-select',
    '/practice/slider',
    '/practice/calendar',
    '/practice/waits',
    '/practice/table-simple',
    '/practice/table-advanced',
    '/practice/frame-navigation',
    '/practice/window-management',
    '/practice/drag-drop',
    '/practice/sort',
    '/practice/alert-dialog',
    '/practice/file-management',
    '/practice/shadow-dom',
  ]

  const allPages = [...staticPages, ...dayPages, ...practicePages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : page.startsWith('/practice/') ? 0.6 : 0.8,
  }))
}