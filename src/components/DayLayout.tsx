import Link from 'next/link'
import { lazy, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Navbar = lazy(() => import('@/components/Navbar'))
const Footer = lazy(() => import('@/components/Footer'))

interface DayLayoutProps {
  dayNumber: number
  title: string
  description: string
  children: React.ReactNode
  previousDay?: string
  nextDay?: string
}

const getCategory = (day: number) => {
  if (day >= 1 && day <= 5) return 'Manual Testing'
  if (day >= 6 && day <= 9) return 'Java Programming'
  return 'Selenium WebDriver'
}

export default function DayLayout({ 
  dayNumber, 
  title, 
  description, 
  children, 
  previousDay, 
  nextDay 
}: DayLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div className="h-16 bg-white border-b" />}>
        <Navbar />
      </Suspense>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-16">
          <div className="text-center mb-8">
            {dayNumber > 0 && (
              <div className="inline-block px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600 mb-4">
                {getCategory(dayNumber)}
              </div>
            )}
            <h1 className="text-4xl font-light text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
          </div>
        </header>

        {children}

        <nav className="flex justify-between items-center pt-8 border-t border-gray-100" aria-label="Page navigation">
          {previousDay ? (
            <Link href={previousDay} aria-label={`Go to Day ${dayNumber - 1}`}>
              <Button variant="ghost" className="group text-gray-600 hover:text-gray-900 px-6 py-4 min-h-[48px]">
                <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Previous</div>
                  <div className="font-medium">Day {dayNumber - 1}</div>
                </div>
              </Button>
            </Link>
          ) : (
            <div />
          )}
          
          {nextDay && (
            <Link href={nextDay} aria-label={`Go to Day ${dayNumber + 1}`}>
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-4 min-h-[48px]">
                <div className="text-right">
                  <div className="text-xs text-gray-300">Next</div>
                  <div className="font-medium">Day {dayNumber + 1}</div>
                </div>
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </nav>
      </main>
      
      <Suspense fallback={<div className="h-32 bg-gray-50" />}>
        <Footer />
      </Suspense>
    </div>
  )
}