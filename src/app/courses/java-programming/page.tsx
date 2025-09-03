import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { courseData } from '@/data/courseData'
import { Code, ArrowRight, CheckCircle, Clock, Database, Zap, RotateCcw, Settings } from 'lucide-react'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
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
              <Button className="bg-green-600 hover:bg-green-700 text-white">
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
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <Link href="/courses/java-programming" className="hover:text-green-600">Courses</Link>
            <span>/</span>
            <span className="text-gray-900">Java Programming</span>
          </nav>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Course Lessons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {javaDays.map((day, index) => {
            const dayIcons = [Database, Zap, RotateCcw, Settings]
            const IconComponent = dayIcons[index] || Code
            
            return (
              <Card key={day.id} className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700 border-green-200 px-3 py-1">
                        Day {index + 6}
                      </Badge>
                      <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-green-500 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-800 transition-colors mb-2">
                    {day.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {day.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span className="text-gray-700">{["3 hours", "2.5 hours", "3.5 hours", "3 hours"][index]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {["Beginner", "Beginner", "Intermediate", "Intermediate"][index]}
                      </span>
                    </div>
                  </div>
                  <Link href={`/${day.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-xl group-hover:scale-105 transition-all duration-300 font-medium">
                      {index === 0 && "Learn Data Types"}
                      {index === 1 && "Master Operators"}
                      {index === 2 && "Practice Loops"}
                      {index === 3 && "Build Methods"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
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
              <Button className="bg-purple-700 hover:bg-purple-800 text-white font-medium">
                Selenium WebDriver Course
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}