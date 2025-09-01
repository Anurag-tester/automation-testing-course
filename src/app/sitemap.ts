import { MetadataRoute } from 'next'
import { courseData } from '@/data/courseData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://automation-testing-course.vercel.app'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/curriculum`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/interview-questions`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/practice`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Day pages
  const dayPages = courseData.map((day) => ({
    url: `${baseUrl}/${day.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Practice challenges
  const practicePages = [
    'button-click', 'input-handling', 'select-dropdown', 'radio-toggle', 'elements', 'forms',
    'multi-select', 'slider', 'calendar', 'waits',
    'table-simple', 'table-advanced', 'frame-navigation', 'window-management', 'drag-drop', 'sort', 'alert-dialog', 'file-management', 'shadow-dom'
  ].map((challenge) => ({
    url: `${baseUrl}/practice/${challenge}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...dayPages, ...practicePages]
}