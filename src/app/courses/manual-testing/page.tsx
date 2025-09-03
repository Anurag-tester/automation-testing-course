import Link from 'next/link'
import dynamic from 'next/dynamic'

import { courseData } from '@/data/courseData'
import { BookOpen, ArrowRight, CheckCircle, Clock, TestTube, FileText, Bug, Clipboard, AlertTriangle } from 'lucide-react'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'))
const Navbar = dynamic(() => import('@/components/Navbar'))

export const metadata: Metadata = {
  metadataBase: new URL('https://testmaster-iota.vercel.app'),
  title: 'Manual Testing Foundation Course - 5 Days Complete Training',
  description: 'Master manual testing fundamentals with our comprehensive 5-day course covering SDLC, testing techniques, documentation, and defect management.',
}

export default function ManualTestingPage() {
  const manualTestingDays = courseData.filter(day => day.category === 'manual-testing')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Manual Testing Foundation Course',
    description: 'Master manual testing fundamentals with comprehensive coverage of SDLC, testing techniques, documentation standards, and defect management processes.',
    provider: {
      '@type': 'Organization',
      name: 'SDET Mastery',
      url: 'https://testmaster-iota.vercel.app'
    },
    instructor: {
      '@type': 'Person',
      name: 'Praful Pawar'
    },
    courseCode: 'MT-001',
    educationalLevel: 'Beginner',
    teaches: ['Manual Testing', 'SDLC', 'Test Design Techniques', 'Test Documentation', 'Defect Management'],
    numberOfCredits: 5,
    timeRequired: 'P5D',
    url: 'https://testmaster-iota.vercel.app/courses/manual-testing'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Manual Testing Foundation</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Manual Testing Foundation
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Build a solid foundation in manual testing with comprehensive coverage of SDLC, testing techniques, 
            documentation standards, and defect management processes.
          </p>

          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{manualTestingDays.length}</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">5</div>
              <div className="text-sm text-gray-600">Topics</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">Beginner</div>
              <div className="text-sm text-gray-600">Level</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/manual-testing-basics">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
                Start Course
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/">
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-6 py-3 rounded-lg font-medium">
                Back to Home
              </button>
            </Link>
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mt-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/courses/manual-testing" className="hover:text-blue-600">Courses</Link>
            <span>/</span>
            <span className="text-gray-900">Manual Testing Foundation</span>
          </nav>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Course Lessons</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {manualTestingDays.map((day, index) => {
            const dayIcons = [TestTube, FileText, Clipboard, Bug, AlertTriangle]
            const IconComponent = dayIcons[index] || TestTube
            
            return (
              <Link key={day.id} href={`/${day.slug}`}>
                <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-3 py-1 rounded-full text-xs font-medium border bg-blue-100 text-blue-700 border-blue-200 flex items-center gap-1">
                            Day {index + 1}
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            {["2 hours", "2.5 hours", "3 hours", "2 hours", "2.5 hours"][index]}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {day.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {day.description}
                        </p>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {["Beginner", "Beginner", "Intermediate", "Beginner", "Intermediate"][index]}
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                            Manual Testing
                          </span>
                        </div>
                        
                        <div className="text-xs text-gray-500">
                          Interactive Learning Module
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <IconComponent className="w-4 h-4" />
                        <span>Start Learning</span>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for the Next Level?</h2>
          <p className="text-gray-600 mb-6">
            After completing Manual Testing Foundation, advance to Java Programming to build coding skills for automation.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/courses/java-programming">
              <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2">
                Java Programming Course
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}