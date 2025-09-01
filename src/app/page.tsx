import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { courseData, getCategoryColor, getCategoryStats } from '@/data/courseData'
import { BookOpen, Code, TestTube, Play, Calendar, Award, ArrowRight, Search, Target, Users, Clock, Zap, CheckCircle, TrendingUp, Rocket, Star, ChevronRight, Globe, Smartphone, Database } from 'lucide-react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  const categoryStats = getCategoryStats()
  
  const manualTestingDays = courseData.filter(day => day.category === 'manual-testing')
  const javaDays = courseData.filter(day => day.category === 'java')
  const seleniumDays = courseData.filter(day => day.category === 'selenium')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
            Complete Full Stack SDET Training covering Web, API, Database, and Mobile automation with modern tools and frameworks.
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
            <Link href="/day1">
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
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-green-600 mb-1">Web UI</div>
                <div className="text-xs text-gray-500">Selenium</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-purple-600 mb-1">API</div>
                <div className="text-xs text-gray-500">Rest Assured</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-orange-600 mb-1">Database</div>
                <div className="text-xs text-gray-500">JDBC</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-pink-600 mb-1">Mobile</div>
                <div className="text-xs text-gray-500">Appium</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Bootcamp Status */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 mb-12 text-white shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <div className="w-8 h-8 bg-white rounded-full animate-pulse flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">🔥 Full Stack SDET Bootcamp - Live!</h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Complete automation training covering Web, API, Database, and Mobile testing. Learn industry-standard tools 
              like Selenium, Rest Assured, Appium, and modern frameworks with AI assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="font-semibold">✓ 5 Automation Stacks</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="font-semibold">🚀 40+ Technologies</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="font-semibold">💼 Industry Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Complete Curriculum</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Three progressive modules designed to take you from beginner to expert</p>
          </div>
          
          {/* Manual Testing Module */}
          <section id="manual-testing" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                  <TestTube className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Manual Testing Fundamentals</h3>
                  <p className="text-gray-600 text-sm">Build your testing foundation with industry best practices</p>
                </div>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full border border-blue-200">
                <span className="text-sm font-bold text-blue-700">{categoryStats['manual-testing']} Days</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {manualTestingDays.map((day, index) => (
                <Link key={day.id} href={`/${day.id}`}>
                  <Card className="group hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 cursor-pointer h-full bg-gradient-to-br from-white to-blue-50/30">
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm">
                          Day {day.id.replace('day', '')}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <CardTitle className="text-base font-bold group-hover:text-blue-600 transition-colors mb-2">
                        {day.title.replace(/^Day \d+: /, '')}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-xs leading-relaxed">
                        {day.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Java Programming Module */}
          <section id="java" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Java Programming</h3>
                  <p className="text-gray-600 text-sm">Master the programming language that powers automation</p>
                </div>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 rounded-full border border-green-200">
                <span className="text-sm font-bold text-green-700">{categoryStats['java']} Days</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {javaDays.map((day, index) => (
                <Link key={day.id} href={`/${day.id}`}>
                  <Card className="group hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 cursor-pointer h-full bg-gradient-to-br from-white to-green-50/30">
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-12 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm">
                          Day {day.id.replace('day', '')}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <CardTitle className="text-base font-bold group-hover:text-green-600 transition-colors mb-2">
                        {day.title.replace(/^Day \d+: /, '')}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-xs leading-relaxed">
                        {day.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Selenium WebDriver Module */}
          <section id="selenium" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Selenium WebDriver</h3>
                  <p className="text-gray-600 text-sm">Become an automation expert with advanced techniques</p>
                </div>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-full border border-purple-200">
                <span className="text-sm font-bold text-purple-700">{categoryStats['selenium']} Days</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {seleniumDays.map((day, index) => (
                <Link key={day.id} href={`/${day.id}`}>
                  <Card className="group hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 cursor-pointer h-full bg-gradient-to-br from-white to-purple-50/30">
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-12 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm">
                          Day {day.id.replace('day', '')}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <CardTitle className="text-base font-bold group-hover:text-purple-600 transition-colors mb-2">
                        {day.title.replace(/^Day \d+: /, '')}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-xs leading-relaxed">
                        {day.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
        
        {/* Final CTA */}
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your SDET Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Begin with 35 comprehensive days of content and continue learning as we add advanced topics weekly
          </p>
          <Link href="/day1">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Rocket className="w-5 h-5 mr-3" />
              Start Your SDET Journey Now
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}