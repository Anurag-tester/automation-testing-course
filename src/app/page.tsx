'use client'

import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { submitToIndexNow } from '@/lib/indexnow'
import { useEffect } from 'react'

import { courseData, getCategoryColor, getCategoryStats } from '@/data/courseData'
import { BookOpen, Code, TestTube, Play, Calendar, Award, ArrowRight, Search, Target, Users, Clock, Zap, CheckCircle, TrendingUp, Rocket, Star, ChevronRight, Globe, Smartphone, Database } from 'lucide-react'

export default function Home() {
  const categoryStats = getCategoryStats()
  
  useEffect(() => {
    const allUrls = [
      'https://testmaster-iota.vercel.app/',
      'https://testmaster-iota.vercel.app/curriculum',
      'https://testmaster-iota.vercel.app/practice',
      'https://testmaster-iota.vercel.app/interview-questions',
      'https://testmaster-iota.vercel.app/selenium-cheatsheet',
      'https://testmaster-iota.vercel.app/courses/manual-testing',
      'https://testmaster-iota.vercel.app/courses/java-programming',
      'https://testmaster-iota.vercel.app/courses/selenium-webdriver',
      'https://testmaster-iota.vercel.app/courses/api-testing',
      // All 38 course day URLs
      'https://testmaster-iota.vercel.app/manual-testing-basics',
      'https://testmaster-iota.vercel.app/testing-techniques-black-box-ecp-bva',
      'https://testmaster-iota.vercel.app/advanced-testing-methods-decision-table',
      'https://testmaster-iota.vercel.app/test-documentation-plans-cases',
      'https://testmaster-iota.vercel.app/defect-management-bug-lifecycle',
      'https://testmaster-iota.vercel.app/java-fundamentals-data-types-variables',
      'https://testmaster-iota.vercel.app/java-operators-control-structures',
      'https://testmaster-iota.vercel.app/loops-iterations-for-while-dowhile',
      'https://testmaster-iota.vercel.app/methods-functions-parameters-scope',
      'https://testmaster-iota.vercel.app/selenium-introduction-webdriver-setup',
      'https://testmaster-iota.vercel.app/web-element-identification-locators',
      'https://testmaster-iota.vercel.app/element-interactions-click-type-clear',
      'https://testmaster-iota.vercel.app/advanced-locators-xpath-css-selectors',
      'https://testmaster-iota.vercel.app/dropdown-handling-select-class',
      'https://testmaster-iota.vercel.app/checkbox-radio-buttons-handling',
      'https://testmaster-iota.vercel.app/alert-handling-javascript-popups',
      'https://testmaster-iota.vercel.app/frame-handling-iframe-navigation',
      'https://testmaster-iota.vercel.app/actions-class-mouse-keyboard-events',
      'https://testmaster-iota.vercel.app/javascript-executor-dom-manipulation',
      'https://testmaster-iota.vercel.app/relative-xpath-fundamentals',
      'https://testmaster-iota.vercel.app/advanced-xpath-axes-navigation',
      'https://testmaster-iota.vercel.app/xpath-practice-assignments',
      'https://testmaster-iota.vercel.app/xpath-sibling-navigation-following-preceding',
      'https://testmaster-iota.vercel.app/advanced-xpath-practice-assignments',
      'https://testmaster-iota.vercel.app/dropdown-handling-select-class-dynamic',
      'https://testmaster-iota.vercel.app/dynamic-table-calendar-handling',
      'https://testmaster-iota.vercel.app/multiple-window-tab-handling',
      'https://testmaster-iota.vercel.app/selenium-roadmap-comprehensive-review',
      'https://testmaster-iota.vercel.app/synchronization-implicit-explicit-fluent-wait',
      'https://testmaster-iota.vercel.app/screenshots-browser-options-configuration',
      'https://testmaster-iota.vercel.app/broken-link-detection-validation',
      'https://testmaster-iota.vercel.app/selenium-theory-interview-questions',
      'https://testmaster-iota.vercel.app/advanced-selenium-exception-handling',
      'https://testmaster-iota.vercel.app/shadow-dom-handling-selenium',
      'https://testmaster-iota.vercel.app/ssl-certificate-file-upload-autoit',
      'https://testmaster-iota.vercel.app/javascript-executor-interface-advanced-operations',
      'https://testmaster-iota.vercel.app/javascript-executor-scroll-alerts-styling',
      'https://testmaster-iota.vercel.app/api-testing-introduction-postman'
    ]
    submitToIndexNow(allUrls)
  }, [])
  
  const manualTestingDays = courseData.filter(day => day.category === 'manual-testing')
  const javaDays = courseData.filter(day => day.category === 'java')
  const seleniumDays = courseData.filter(day => day.category === 'selenium')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'SDET Mastery - Complete Automation Testing Bootcamp',
    description: 'Transform into a job-ready SDET expert! Comprehensive automation testing bootcamp covering Selenium WebDriver, Java Programming, Manual Testing, and API Testing with real-world projects.',
    url: 'https://testmaster-iota.vercel.app',
    image: 'https://testmaster-iota.vercel.app/apple-touch-icon.png',
    provider: {
      '@type': 'Organization',
      name: 'SDET Mastery',
      url: 'https://testmaster-iota.vercel.app',
      logo: 'https://testmaster-iota.vercel.app/apple-touch-icon.png'
    },
    instructor: {
      '@type': 'Person',
      name: 'Praful Pawar',
      jobTitle: 'SDET Trainer & Automation Expert'
    },
    courseCode: 'SDET-BOOTCAMP',
    educationalLevel: 'Beginner to Advanced',
    teaches: ['Selenium WebDriver', 'Java Programming', 'Manual Testing', 'API Testing', 'Test Automation', 'Postman', 'TestNG', 'Maven'],
    numberOfCredits: 50,
    timeRequired: 'PT40H',
    coursePrerequisites: 'Basic computer knowledge',
    educationalCredentialAwarded: 'SDET Certification',
    inLanguage: 'en',
    isAccessibleForFree: true,
    learningResourceType: 'Course',
    educationalUse: 'Professional Development',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student'
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Software Testing'
      },
      {
        '@type': 'Thing', 
        name: 'Test Automation'
      },
      {
        '@type': 'Thing',
        name: 'Selenium WebDriver'
      },
      {
        '@type': 'Thing',
        name: 'Java Programming'
      }
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
      category: 'Educational'
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT40H',
      instructor: {
        '@type': 'Person',
        name: 'Praful Pawar',
        jobTitle: 'SDET Trainer & Automation Expert'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full text-xs font-medium mb-6 border border-blue-200">
            <Rocket className="w-4 h-4" />
            <span>Your SDET Journey Starts Here</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Become an
            <br />
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SDET Expert</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Master automation testing with our comprehensive 37+ day SDET course. Learn Selenium WebDriver, Java programming, manual testing techniques, API testing, and advanced automation frameworks used by top tech companies.
          </p>

          {/* Interactive Stats */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">5</div>
              <div className="text-xs text-gray-600">Automation Stacks</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">40+</div>
              <div className="text-xs text-gray-600">Technologies</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">{courseData.length}</div>
              <div className="text-xs text-gray-600">Days Available</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/manual-testing-basics">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Play className="w-4 h-4 mr-2" />
                Start Your Journey
              </Button>
            </Link>
            <Link href="/curriculum">
              <Button variant="outline" className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 text-sm font-semibold hover:bg-gray-50 transition-all duration-300">
                <Calendar className="w-4 h-4 mr-2" />
                View Curriculum
              </Button>
            </Link>
            <Link href="/interview-questions">
              <Button variant="outline" className="border-2 border-orange-300 hover:border-orange-400 text-orange-700 px-6 py-3 text-sm font-semibold hover:bg-orange-50 transition-all duration-300">
                <Target className="w-4 h-4 mr-2" />
                Interview Prep
              </Button>
            </Link>
            <Link href="/practice">
              <Button variant="outline" className="border-2 border-green-300 hover:border-green-400 text-green-700 px-6 py-3 text-sm font-semibold hover:bg-green-50 transition-all duration-300">
                <Code className="w-4 h-4 mr-2" />
                Practice Problems
              </Button>
            </Link>
          </div>
        </div>

        {/* Full Stack SDET Training */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Full Stack SDET Training</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master all aspects of test automation from Web UI to API, Database, and Mobile testing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Web UI Automation</h3>
              <p className="text-sm text-gray-600">
                Selenium WebDriver, TestNG, POM Design Pattern, Data Driven & BDD Frameworks with GitHub Copilot AI
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">API Automation</h3>
              <p className="text-sm text-gray-600">
                Rest Assured, JSON Path, Schema Validation, Hamcrest Library with BDD Framework and CI/CD integration
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile & Database</h3>
              <p className="text-sm text-gray-600">
                Appium for iOS/Android automation, JDBC for database testing, plus Jenkins CI/CD and GitHub integration
              </p>
            </div>
          </div>

          {/* Interactive Progress Bar */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">5 Complete Automation Stacks</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md">
                  <TestTube className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-blue-600 mb-1">Manual</div>
                <div className="text-xs text-gray-500">Foundation</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-green-600 mb-1">Java</div>
                <div className="text-xs text-gray-500">Programming</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-purple-600 mb-1">Selenium</div>
                <div className="text-xs text-gray-500">WebDriver</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-orange-600 mb-1">API</div>
                <div className="text-xs text-gray-500">Testing</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-red-600 mb-1">Mobile</div>
                <div className="text-xs text-gray-500">Automation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-stretch">
          {/* Manual Testing */}
          <Link href="/courses/manual-testing" className="block h-full">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 cursor-pointer h-full flex flex-col">
              <CardHeader className="pb-4 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
                    {categoryStats['manual-testing']} Days
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  Manual Testing Foundation
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Master testing fundamentals, SDLC, test design techniques, and documentation standards
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6 mt-auto">
                <div className="space-y-2 mb-4">
                  {manualTestingDays.slice(0, 3).map((day) => (
                    <div key={day.id} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="truncate">{day.title}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                  View Course
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </Link>

          {/* Java Programming */}
          <Link href="/courses/java-programming" className="block h-full">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 cursor-pointer h-full flex flex-col">
              <CardHeader className="pb-4 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200 px-3 py-1">
                    {categoryStats.java} Days
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  Java Programming
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Learn Java fundamentals, OOP concepts, and programming skills essential for automation
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6 mt-auto">
                <div className="space-y-2 mb-4">
                  {javaDays.slice(0, 3).map((day) => (
                    <div key={day.id} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="truncate">{day.title}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                  View Course
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </Link>

          {/* Selenium WebDriver */}
          <Link href="/courses/selenium-webdriver" className="block h-full">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 cursor-pointer h-full flex flex-col">
              <CardHeader className="pb-4 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <TestTube className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200 px-3 py-1">
                    {categoryStats.selenium} Days
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                  Selenium WebDriver
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Master web automation with Selenium WebDriver, advanced locators, and complex interactions
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6 mt-auto">
                <div className="space-y-2 mb-4">
                  {seleniumDays.slice(0, 3).map((day) => (
                    <div key={day.id} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="truncate">{day.title}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                  View Course
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </Link>

          {/* API Testing */}
          <Link href="/courses/api-testing" className="block h-full">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 cursor-pointer h-full flex flex-col">
              <CardHeader className="pb-4 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200 px-3 py-1">
                    {categoryStats['api-testing']} Day
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                  API Testing
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Master API testing fundamentals, HTTP methods, Postman, and business logic validation
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6 mt-auto">
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600 flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    <span className="truncate">API Testing Introduction</span>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    <span className="truncate">HTTP Methods & Postman</span>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    <span className="truncate">Business Logic Testing</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                  View Course
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </Link>
        </div>

        {/* Quick Access */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Interview Preparation</CardTitle>
              </div>
              <CardDescription className="text-gray-600 mb-4">
                40+ comprehensive interview questions covering Manual Testing, Java, Selenium, and TestNG with detailed explanations.
              </CardDescription>
              <Link href="/interview-questions">
                <Button variant="outline" className="w-full border-2 border-orange-300 hover:border-orange-400 text-orange-700 hover:bg-orange-50">
                  <Target className="w-4 h-4 mr-2" />
                  Prepare for Interviews
                </Button>
              </Link>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">Practice Challenges</CardTitle>
              </div>
              <CardDescription className="text-gray-600 mb-4">
                22 hands-on practice problems from beginner to expert level. Build real automation skills with interactive challenges.
              </CardDescription>
              <Link href="/practice">
                <Button variant="outline" className="w-full border-2 border-green-300 hover:border-green-400 text-green-700 hover:bg-green-50">
                  <Code className="w-4 h-4 mr-2" />
                  Start Practicing
                </Button>
              </Link>
            </CardHeader>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose Our SDET Course?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">37+ Days Structured</h3>
              <p className="text-sm text-gray-600">Comprehensive curriculum designed for progressive learning</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Hands-on Practice</h3>
              <p className="text-sm text-gray-600">22 interactive challenges and real-world scenarios</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Industry Ready</h3>
              <p className="text-sm text-gray-600">Skills used by top tech companies and startups</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-sm text-gray-600">Learn from experienced SDET professionals</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}