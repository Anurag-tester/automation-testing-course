import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Database, ArrowRight, Clock, Star } from 'lucide-react'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const Navbar = dynamic(() => import('@/components/Navbar'))

export const metadata: Metadata = {
  metadataBase: new URL('https://testmaster-iota.vercel.app'),
  title: 'API Testing Course - Coming Soon | SDET Training',
  description: 'Master API testing with REST Assured, JSON validation, and automated API testing frameworks. Course launching soon!',
}

export default function ApiTestingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Database className="w-4 h-4" />
            <span>Coming Soon</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            API Testing Course
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Master API testing with REST Assured, JSON validation, schema validation, and automated API testing frameworks. 
            This comprehensive course is launching soon!
          </p>

          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">REST</div>
              <div className="text-sm text-gray-600">Assured</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">JSON</div>
              <div className="text-sm text-gray-600">Validation</div>
            </div>
          </div>
        </div>

        <Card className="mb-8 border-2 border-orange-200">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900 mb-4">Course Under Development</CardTitle>
            <CardDescription className="text-gray-600 text-base leading-relaxed">
              We're currently developing a comprehensive API Testing course that will cover REST Assured framework, 
              JSON Path expressions, schema validation, authentication methods, and complete API automation frameworks.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                What's Coming
              </CardTitle>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• REST Assured Framework</div>
                <div>• JSON Path & Schema Validation</div>
                <div>• Authentication & Authorization</div>
                <div>• API Test Automation</div>
                <div>• Postman Integration</div>
                <div>• CI/CD for API Testing</div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Database className="w-5 h-5 text-blue-500 mr-2" />
                Prerequisites
              </CardTitle>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Java Programming Basics</div>
                <div>• Understanding of HTTP Methods</div>
                <div>• JSON Format Knowledge</div>
                <div>• Basic Testing Concepts</div>
                <div>• Maven/TestNG Experience</div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Complete the foundational courses first to prepare for API Testing
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/courses/selenium-webdriver">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Complete Selenium First
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}