import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

interface DayLayoutProps {
  dayNumber: number
  title: string
  description: string
  children: React.ReactNode
  previousDay?: string
  nextDay?: string
}

export default function DayLayout({ 
  dayNumber, 
  title, 
  description, 
  children, 
  previousDay, 
  nextDay 
}: DayLayoutProps) {
  const getCategory = (day: number) => {
    if (day >= 1 && day <= 5) return 'Manual Testing'
    if (day >= 6 && day <= 9) return 'Java Programming'
    return 'Selenium WebDriver'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            {dayNumber > 0 && (
              <div className="inline-block px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600 mb-4">
                {getCategory(dayNumber)}
              </div>
            )}
            <h1 className="text-4xl font-light text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
          </div>
        </div>

        {/* Content */}
        {children}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-100">
          {previousDay ? (
            <Link href={previousDay}>
              <Button variant="ghost" className="group text-gray-600 hover:text-gray-900">
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
            <Link href={nextDay}>
              <Button className="bg-black hover:bg-gray-800 text-white">
                <div className="text-right">
                  <div className="text-xs text-gray-300">Next</div>
                  <div className="font-medium">Day {dayNumber + 1}</div>
                </div>
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}