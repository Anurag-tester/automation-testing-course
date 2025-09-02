import { notFound, redirect } from 'next/navigation'
import { getDayBySlug, courseData } from '@/data/courseData'

// Import all day components
import Day1Page from '../day1/page'
import Day10Page from '../day10/page'
import Day36Page from '../day36/page'

// Component mapping
const dayComponents: Record<string, React.ComponentType> = {
  'day1': Day1Page,
  'day10': Day10Page,
  'day36': Day36Page,
}

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return courseData
    .filter(day => day.slug)
    .map((day) => ({
      slug: day.slug,
    }))
}

export async function generateMetadata({ params }: PageProps) {
  const day = getDayBySlug(params.slug)
  
  if (!day) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: `${day.title} | SDET Course`,
    description: day.description,
  }
}

export default function SlugPage({ params }: PageProps) {
  const day = getDayBySlug(params.slug)
  
  if (!day) {
    notFound()
  }

  // For days without slugs, redirect to old URL structure
  if (!day.slug) {
    redirect(`/${day.id}`)
  }

  const DayComponent = dayComponents[day.id]
  
  if (!DayComponent) {
    // Fallback: redirect to old URL structure for days not yet migrated
    redirect(`/${day.id}`)
  }

  return <DayComponent />
}