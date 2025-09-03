import Link from 'next/link'
import dynamic from 'next/dynamic'

import { courseData, getUniqueDaysCount, getTotalTopicsCount } from '@/data/courseData'
import { TestTube, ArrowRight, CheckCircle, Clock, Globe, MousePointer, Search, Layers, Zap, Camera, Link2, Code2, Shield, Upload } from 'lucide-react'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'))
const Navbar = dynamic(() => import('@/components/Navbar'))

export const metadata: Metadata = {
  metadataBase: new URL('https://testmaster-iota.vercel.app'),
  title: 'Selenium WebDriver Course - 28 Days Complete Training',
  description: 'Master Selenium WebDriver automation with our comprehensive 28-day course covering locators, interactions, waits, and advanced automation techniques.',
}

export default function SeleniumWebDriverPage() {
  const seleniumDays = courseData.filter(day => day.category === 'selenium')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Selenium WebDriver Mastery Course',
    description: 'Master web automation with Selenium WebDriver. Learn advanced locators, element interactions, synchronization, and complex automation scenarios.',
    provider: {
      '@type': 'Organization',
      name: 'SDET Mastery',
      url: 'https://testmaster-iota.vercel.app'
    },
    instructor: {
      '@type': 'Person',
      name: 'Praful Pawar'
    },
    courseCode: 'SEL-001',
    educationalLevel: 'Intermediate to Advanced',
    teaches: ['Selenium WebDriver', 'Web Automation', 'XPath', 'CSS Selectors', 'Synchronization', 'Actions Class'],
    numberOfCredits: 28,
    timeRequired: 'P28D',
    url: 'https://testmaster-iota.vercel.app/courses/selenium-webdriver'
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
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TestTube className="w-4 h-4" />
            <span>Selenium WebDriver</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Selenium WebDriver Mastery
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Master web automation with Selenium WebDriver. Learn advanced locators, element interactions, 
            synchronization, and complex automation scenarios used in real-world projects.
          </p>

          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">{getUniqueDaysCount('selenium')}</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{getTotalTopicsCount('selenium')}</div>
              <div className="text-sm text-gray-600">Topics</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">Advanced</div>
              <div className="text-sm text-gray-600">Level</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/selenium-introduction-webdriver-setup">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
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
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <span>/</span>
            <Link href="/courses/selenium-webdriver" className="hover:text-purple-600">Courses</Link>
            <span>/</span>
            <span className="text-gray-900">Selenium WebDriver</span>
          </nav>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Course Lessons</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {seleniumDays.map((day, index) => {
            const dayIcons = [
              TestTube, Globe, MousePointer, Search, Layers, CheckCircle, 
              Zap, Layers, MousePointer, Code2, Search, Search, TestTube, 
              Search, TestTube, Layers, MousePointer, Code2, Search, Search, 
              TestTube, Search, Globe, TestTube, Zap, Camera, Link2, TestTube, 
              Clock, Camera, Link2, TestTube, Shield, Shield, Upload, Code2
            ]
            const IconComponent = dayIcons[index] || TestTube
            
            return (
              <Link key={day.id} href={`/${day.slug}`}>
                <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-3 py-1 rounded-full text-xs font-medium border bg-purple-100 text-purple-700 border-purple-200 flex items-center gap-1">
                            Day {day.id.startsWith('day') ? day.id.match(/\d+/)?.[0] : index + 10}
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            {[
                              "2 hours", "2.5 hours", "2 hours", "3 hours", "2.5 hours", "2 hours", "2.5 hours", "2 hours", "3 hours", "2.5 hours",
                              "3.5 hours", "4 hours", "3 hours", "3.5 hours", "3 hours", "2.5 hours", "3 hours", "3.5 hours", "2 hours", "4 hours",
                              "2.5 hours", "3 hours", "2 hours", "3.5 hours", "4 hours", "3 hours", "3.5 hours"
                            ][index] || "2-3 hours"}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {day.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {day.description}
                        </p>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {index < 5 ? "Beginner" : index < 15 ? "Intermediate" : "Advanced"}
                          </span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">
                            Selenium
                          </span>
                        </div>
                        
                        <div className="text-xs text-gray-500">
                          Interactive Learning Module
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <IconComponent className="w-4 h-4" />
                        <span>Start Learning</span>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Next?</h2>
          <p className="text-gray-600 mb-6">
            Complete your SDET journey with API Testing, Database Testing, and Mobile Automation. More courses coming soon!
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/practice">
              <button className="bg-orange-700 hover:bg-orange-800 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2">
                Practice Challenges
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/interview-questions">
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-6 py-3 rounded-lg font-medium">
                Interview Prep
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}