import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Code, Database, Smartphone, Globe, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Complete SDET Curriculum - Full Stack Automation Testing Training',
  description: 'Comprehensive SDET curriculum covering Web UI, API, Database, and Mobile automation. Learn industry-standard tools and frameworks in our structured training program.',
  keywords: 'SDET curriculum, automation testing training, full stack SDET, web automation, API testing, mobile automation, database testing',
}

export default function Curriculum() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete SDET Curriculum</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Comprehensive Full Stack SDET Automation Training - 19th July Batch
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
            <CheckCircle className="w-4 h-4" />
            <span>Industry-Ready Curriculum</span>
          </div>
        </div>

        {/* Manual Testing Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Manual Testing Foundation</h2>
                <p className="text-gray-600">Theory concepts and domain knowledge</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Manual Testing Fundamentals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Database Testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">API Testing with Postman</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Basic Shell Scripting Commands</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Telecom Domain Project</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI Automation Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">UI/Web Based Automation</h2>
                <p className="text-gray-600">Complete web automation stack with modern tools</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Java Programming',
                'Selenium WebDriver',
                'TestNG Framework',
                'JavaScript Executor Interface',
                'Page Object Model (POM)',
                'Data Driven Testing Framework',
                'Hybrid Framework',
                'BDD Framework',
                'GitHub Version Control',
                'Jenkins CI/CD',
                'Maven Build Tool',
                'GitHub Copilot AI for Web Automation'
              ].map((topic, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Automation Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">API Automation</h2>
                <p className="text-gray-600">Complete REST API testing and automation</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Java Programming',
                'TestNG Framework',
                'Cucumber BDD',
                'Maven Build Tool',
                'GitHub Version Control',
                'Jenkins CI/CD',
                'Rest Assured Library',
                'JSON Path',
                'JSON Schema Validator',
                'Hamcrest Library',
                'JSON Schema Library',
                'Data Driven Framework',
                'Rest Assured with BDD',
                'GitHub Copilot AI for API'
              ].map((topic, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Database Automation Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Database Automation</h2>
                <p className="text-gray-600">Database testing and validation automation</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Database Automation using JDBC Library',
                'GitHub Copilot AI for Database Automation'
              ].map((topic, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Automation Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Mobile Automation</h2>
                <p className="text-gray-600">iOS and Android app automation testing</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Java Programming',
                'TestNG Framework',
                'Cucumber BDD',
                'Maven Build Tool',
                'GitHub Version Control',
                'Jenkins CI/CD',
                'Appium Framework',
                'Appium with BDD Framework',
                'GitHub Copilot AI for Mobile'
              ].map((topic, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your SDET Journey?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our comprehensive program and master all aspects of test automation from web to mobile to API testing.
          </p>
          <Link href="/manual-testing-basics">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Learning Now
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}