import { notFound } from 'next/navigation'
import { courseData } from '@/data/courseData'
import dynamic from 'next/dynamic'

// Dynamic component mapping
const componentMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  'manual-testing-basics': () => import('@/components/days/day1'),
  'testing-techniques-black-box-ecp-bva': () => import('@/components/days/day2'),
  'advanced-testing-methods-decision-table': () => import('@/components/days/day3'),
  'test-documentation-plans-cases': () => import('@/components/days/day4'),
  'defect-management-bug-lifecycle': () => import('@/components/days/day5'),
  'java-fundamentals-data-types-variables': () => import('@/components/days/day6'),
  'java-operators-control-structures': () => import('@/components/days/day7'),
  'loops-iterations-for-while-dowhile': () => import('@/components/days/day8'),
  'methods-functions-parameters-scope': () => import('@/components/days/day9'),
  'selenium-introduction-webdriver-setup': () => import('@/components/days/day10'),
  'web-element-identification-locators': () => import('@/components/days/day11'),
  'element-interactions-click-type-clear': () => import('@/components/days/day12'),
  'advanced-locators-xpath-css-selectors': () => import('@/components/days/day13'),
  'dropdown-handling-select-class': () => import('@/components/days/day14'),
  'checkbox-radio-buttons-handling': () => import('@/components/days/day15'),
  'alert-handling-javascript-popups': () => import('@/components/days/day16'),
  'frame-handling-iframe-navigation': () => import('@/components/days/day17'),
  'actions-class-mouse-keyboard-events': () => import('@/components/days/day18'),
  'javascript-executor-dom-manipulation': () => import('@/components/days/day19'),
  'relative-xpath-fundamentals': () => import('@/components/days/day20'),
  'advanced-xpath-axes-navigation': () => import('@/components/days/day21'),
  'xpath-practice-assignments': () => import('@/components/days/day22'),
  'xpath-sibling-navigation-following-preceding': () => import('@/components/days/day23'),
  'advanced-xpath-practice-assignments': () => import('@/components/days/day24'),
  'dropdown-handling-select-class-dynamic': () => import('@/components/days/day25'),
  'dynamic-table-calendar-handling': () => import('@/components/days/day26'),
  'multiple-window-tab-handling': () => import('@/components/days/day27'),
  'selenium-roadmap-comprehensive-review': () => import('@/components/days/day28'),
  'synchronization-implicit-explicit-fluent-wait': () => import('@/components/days/day29'),
  'screenshots-browser-options-configuration': () => import('@/components/days/day30'),
  'broken-link-detection-validation': () => import('@/components/days/day31'),
  'selenium-theory-interview-questions': () => import('@/components/days/day32'),
  'advanced-selenium-exception-handling': () => import('@/components/days/day33'),
  'shadow-dom-handling-selenium': () => import('@/components/days/day34'),
  'ssl-certificate-file-upload-autoit': () => import('@/components/days/day35'),
  'javascript-executor-interface-advanced-operations': () => import('@/components/days/day36'),
  'javascript-executor-scroll-alerts-styling': () => import('@/components/days/day36-part2'),
  'api-testing-introduction-postman': () => import('@/components/days/day37'),
}

export async function generateStaticParams() {
  return courseData.map((day) => ({
    slug: day.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const day = courseData.find(d => d.slug === slug)
  
  if (!day) {
    return {
      title: 'Page Not Found | SDET Course',
      description: 'The requested page could not be found.',
    }
  }

  const keywords = day.tags ? day.tags.join(', ') : day.slug?.replace(/-/g, ', ')
  
  return {
    title: `${day.title} | SDET Course`,
    description: day.description,
    keywords: `${keywords}, sdet, automation testing, selenium webdriver, java programming`,
    openGraph: {
      title: `${day.title} | SDET Course`,
      description: day.description,
      type: 'article',
      url: `https://testmaster-iota.vercel.app/${slug}`,
    },
    twitter: {
      card: 'summary',
      title: `${day.title} | SDET Course`,
      description: day.description,
    },
    alternates: {
      canonical: `https://testmaster-iota.vercel.app/${slug}`,
    },
  }
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const componentLoader = componentMap[slug]
  
  if (!componentLoader) {
    notFound()
  }

  const DynamicComponent = dynamic(componentLoader, {
    loading: () => (
      <div className="critical-loading">
        <div className="critical-spinner"></div>
      </div>
    )
  })

  return <DynamicComponent />
}