import Link from 'next/link'
import dynamic from 'next/dynamic'

import { courseData } from '@/data/courseData'
import { Code, ArrowRight, CheckCircle, Clock, Database, Zap, RotateCcw, Settings } from 'lucide-react'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'))
const Navbar = dynamic(() => import('@/components/Navbar'))

export const metadata: Metadata = {
  metadataBase: new URL('https://testmaster-iota.vercel.app'),
  title: 'Java Programming Course - 4 Days Complete Training',
  description: 'Master Java programming fundamentals with our comprehensive 4-day course covering data types, operators, loops, and methods essential for automation testing.',
}

export default function JavaProgrammingPage() {
  const javaDays = courseData.filter(day => day.category === 'java')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Java Programming Course',
    description: 'Learn Java programming fundamentals essential for automation testing. Master data types, operators, control structures, loops, and methods.',
    provider: {
      '@type': 'Organization',
      name: 'SDET Mastery',
      url: 'https://testmaster-iota.vercel.app'
    },
    instructor: {
      '@type': 'Person',
      name: 'Praful Pawar'
    },
    courseCode: 'JAVA-001',
    educationalLevel: 'Beginner',
    teaches: ['Java Programming', 'Data Types', 'Operators', 'Control Structures', 'Loops', 'Methods'],
    numberOfCredits: 4,
    timeRequired: 'P4D',
    url: 'https://testmaster-iota.vercel.app/courses/java-programming'
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
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4" />
            <span>Java Programming</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Java Programming
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Learn Java programming fundamentals essential for automation testing. Master data types, operators, 
            control structures, loops, and methods to build a strong coding foundation.
          </p>

          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{javaDays.length}</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">4</div>
              <div className="text-sm text-gray-600">Topics</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">Beginner</div>
              <div className="text-sm text-gray-600">Level</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/java-fundamentals-data-types-variables">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
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
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <Link href="/courses/java-programming" className="hover:text-green-600">Courses</Link>
            <span>/</span>
            <span className="text-gray-900">Java Programming</span>
          </nav>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Course Lessons</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {javaDays.map((day, index) => {
            const dayIcons = [Database, Zap, RotateCcw, Settings]
            const IconComponent = dayIcons[index] || Code
            
            return (
              <Link key={day.id} href={`/${day.slug}`}>
                <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-3 py-1 rounded-full text-xs font-medium border bg-green-100 text-green-700 border-green-200 flex items-center gap-1">
                            Day {index + 6}
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            {["3 hours", "2.5 hours", "3.5 hours", "3 hours"][index]}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                          {day.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {day.description}
                        </p>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {["Beginner", "Beginner", "Intermediate", "Intermediate"][index]}
                          </span>
                          <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
                            Java
                          </span>
                        </div>
                        
                        <div className="text-xs text-gray-500">
                          Interactive Learning Module
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <IconComponent className="w-4 h-4" />
                        <span>Start Learning</span>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Code className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-2xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Automation?</h2>
          <p className="text-gray-600 mb-6">
            With Java fundamentals mastered, you're ready to dive into Selenium WebDriver for web automation testing.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/courses/selenium-webdriver">
              <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2">
                Selenium WebDriver Course
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