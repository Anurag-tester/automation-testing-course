import { courseData } from '@/data/courseData'

export interface LinkCheckResult {
  url: string
  status: 'valid' | 'broken' | 'redirect'
  statusCode?: number
  error?: string
}

// Define all valid routes in the application
const VALID_ROUTES = new Set([
  '/',
  '/curriculum',
  '/practice',
  '/interview-questions',
  '/selenium-cheatsheet',
  '/privacy',
  '/courses/manual-testing',
  '/courses/java-programming', 
  '/courses/selenium-webdriver',
  '/courses/api-testing'
])

// Add dynamic routes from courseData
courseData.forEach(day => {
  VALID_ROUTES.add(`/${day.slug}`)
})

// Practice challenge routes
const PRACTICE_CHALLENGES = [
  'button-click', 'input-handling', 'select-dropdown', 'radio-button-toggle',
  'elements-challenge', 'forms-challenge', 'multi-select', 'slider-challenge',
  'calendar-challenge', 'waits-challenge', 'table-operations', 'advanced-table',
  'frame-navigation', 'window-management', 'drag-drop', 'sort-challenge',
  'alert-dialog', 'file-management', 'shadow-dom', 'expert-scenario-1',
  'expert-scenario-2', 'expert-scenario-3', 'expert-scenario-4'
]

PRACTICE_CHALLENGES.forEach(challenge => {
  VALID_ROUTES.add(`/practice/${challenge}`)
})

export function checkInternalLink(url: string): LinkCheckResult {
  // Remove hash and query params for route checking
  const cleanUrl = url.split('#')[0].split('?')[0]
  
  if (VALID_ROUTES.has(cleanUrl)) {
    return { url, status: 'valid' }
  }
  
  return { 
    url, 
    status: 'broken', 
    error: 'Route not found in application' 
  }
}

export async function checkExternalLink(url: string): Promise<LinkCheckResult> {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    
    if (response.ok) {
      return { url, status: 'valid', statusCode: response.status }
    } else if (response.status >= 300 && response.status < 400) {
      return { url, status: 'redirect', statusCode: response.status }
    } else {
      return { url, status: 'broken', statusCode: response.status }
    }
  } catch (error) {
    return { 
      url, 
      status: 'broken', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

export function extractLinksFromContent(content: string): string[] {
  const linkRegex = /href=["']([^"']+)["']/g
  const links: string[] = []
  let match

  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1])
  }

  return links
}

export async function checkAllLinks(content: string): Promise<LinkCheckResult[]> {
  const links = extractLinksFromContent(content)
  const results: LinkCheckResult[] = []

  for (const link of links) {
    if (link.startsWith('http')) {
      results.push(await checkExternalLink(link))
    } else if (link.startsWith('/')) {
      results.push(checkInternalLink(link))
    }
  }

  return results
}