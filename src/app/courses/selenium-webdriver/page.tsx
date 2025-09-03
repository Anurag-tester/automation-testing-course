import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { courseData } from '@/data/courseData'
import { TestTube, ArrowRight, CheckCircle, Clock, Globe, MousePointer, Search, Layers, Zap, Camera, Link2, Code2, Shield, Upload } from 'lucide-react'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const Navbar = dynamic(() => import('@/components/Navbar'))

export const metadata: Metadata = {
  metadataBase: new URL('https://testmaster-iota.vercel.app'),
  title: 'Selenium WebDriver Course - 27 Days Complete Training',
  description: 'Master Selenium WebDriver automation with our comprehensive 27-day course covering locators, interactions, waits, and advanced automation techniques.',
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
    numberOfCredits: 27,
    timeRequired: 'P27D',
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
              <div className="text-2xl font-bold text-purple-600 mb-1">{seleniumDays.length}</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">27</div>
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
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Start Course
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                Back to Home
              </Button>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Card key={day.id} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-100 text-purple-700 border-purple-200 px-3 py-1">
                        Day {index + 10}
                      </Badge>
                      <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-purple-500 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors mb-2">
                    {day.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {day.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span className="text-gray-700">
                        {[
                          "2 hours", "2.5 hours", "2 hours", "3 hours", "2.5 hours", "2 hours", "2.5 hours", "2 hours", "3 hours", "2.5 hours",
                          "3.5 hours", "4 hours", "3 hours", "3.5 hours", "3 hours", "2.5 hours", "3 hours", "3.5 hours", "2 hours", "4 hours",
                          "2.5 hours", "3 hours", "2 hours", "3.5 hours", "4 hours", "3 hours", "3.5 hours"
                        ][index] || "2-3 hours"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                        {index < 5 ? "Beginner" : index < 15 ? "Intermediate" : "Advanced"}
                      </span>
                    </div>
                  </div>
                  <Link href={`/${day.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-md hover:shadow-xl group-hover:scale-105 transition-all duration-300 font-medium">
                      {[
                        "Setup WebDriver", "Find Elements", "Interact & Click", "Advanced Locators", "Handle Dropdowns",
                        "Checkboxes & Radio", "Manage Alerts", "Navigate Frames", "Mouse & Keyboard", "Execute JavaScript",
                        "Relative XPath", "Advanced XPath", "XPath Practice", "Sibling Navigation", "XPath Mastery",
                        "Dynamic Dropdowns", "Tables & Calendar", "Multiple Windows", "Selenium Roadmap", "Master Waits",
                        "Screenshots & Config", "Broken Links", "Interview Prep", "Exception Handling", "Shadow DOM",
                        "SSL & File Upload", "Advanced JavaScript"
                      ][index] || "Start Learning"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
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
              <Button className="bg-orange-700 hover:bg-orange-800 text-white font-medium">
                Practice Challenges
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/interview-questions">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                Interview Prep
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}