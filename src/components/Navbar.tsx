'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Code, ChevronDown, ChevronRight, Home, TestTube, BookOpen, Menu, X } from 'lucide-react'
import SearchBox from '@/components/SearchBox'
import { courseData } from '@/data/courseData'

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const manualTestingDays = courseData.filter(day => day.category === 'manual-testing')
  const javaDays = courseData.filter(day => day.category === 'java')
  const seleniumDays = courseData.filter(day => day.category === 'selenium')

  const courseCategories = [
    {
      id: 'manual-testing',
      title: 'Manual Testing',
      icon: TestTube,
      color: 'blue',
      days: manualTestingDays
    },
    {
      id: 'java',
      title: 'Java Programming',
      icon: Code,
      color: 'green',
      days: javaDays
    },
    {
      id: 'selenium',
      title: 'Selenium WebDriver',
      icon: BookOpen,
      color: 'purple',
      days: seleniumDays
    }
  ]

  return (
    <div className="border-b border-white/20 bg-white/95 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <div className="w-9 h-9 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <Code className="w-4 h-4 text-white" />
              </div>
            </Link>
            <Link href="/">
              <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <h1 className="text-base font-semibold text-gray-900">SDET Mastery</h1>
                <p className="text-xs text-gray-600">Master Test Automation</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center space-x-0.5">
              {/* Home */}
              <Link href="/" className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
                <Home className="w-3 h-3" />
                Home
              </Link>

              {/* Courses Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all"
                >
                  Courses
                  <ChevronDown className={`w-3 h-3 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCoursesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-[9999]"
                    onMouseLeave={() => {
                      setHoveredCategory(null)
                      if (hoverTimeout) clearTimeout(hoverTimeout)
                    }}
                  >
                    {courseCategories.map((category, index) => {
                      const IconComponent = category.icon
                      const colorClasses = {
                        blue: 'from-blue-500 to-blue-600',
                        green: 'from-green-500 to-green-600',
                        purple: 'from-purple-500 to-purple-600'
                      }
                      const hoverClasses = {
                        blue: 'hover:bg-blue-50',
                        green: 'hover:bg-green-50',
                        purple: 'hover:bg-purple-50'
                      }
                      
                      return (
                        <div key={category.id}>
                          <Link
                            href={`/#${category.id}`}
                            className={`flex items-center gap-3 px-4 py-3 ${hoverClasses[category.color as keyof typeof hoverClasses]} transition-all`}
                            onClick={() => {
                              setIsCoursesOpen(false)
                              setHoveredCategory(null)
                            }}
                          >
                            <div className={`w-8 h-8 bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 text-sm">{category.title}</h3>
                              <p className="text-xs text-gray-500">{category.days.length} days</p>
                            </div>
                          </Link>
                          {index < courseCategories.length - 1 && (
                            <div className="border-t border-gray-100 mx-4"></div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Other Navigation Items */}
              <Link href="/curriculum" className="px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all whitespace-nowrap">
                Curriculum
              </Link>
              <Link href="/practice" className="px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all whitespace-nowrap">
                Practice
              </Link>
              <Link href="/interview-questions" className="px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all whitespace-nowrap">
                Q&A
              </Link>
              <Link href="/selenium-cheatsheet" className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-md transition-all shadow-sm whitespace-nowrap">
                <Code className="w-3 h-3" />
                Cheat
              </Link>
            </nav>

            {/* Search Box - Desktop */}
            <div className="hidden md:block w-64">
              <SearchBox />
            </div>
            
            {/* Buy me a Chai - Desktop */}
            <a 
              href="https://onlychai.neocities.org/support.html?name=Anurag%20Patel&upi=9111282226%40apl"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all"
            >
              <span className="text-sm">🍵</span>
              <span>Buy me a Chai</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-3">
            {/* Search Box - Mobile */}
            <div className="mb-4">
              <SearchBox />
            </div>
            
            {/* Navigation Links */}
            <Link 
              href="/" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            
            {/* Course Categories */}
            {courseCategories.map((category) => {
              const IconComponent = category.icon
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600'
              }
              
              return (
                <Link
                  key={category.id}
                  href={`/#${category.id}`}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className={`w-6 h-6 bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]} rounded-md flex items-center justify-center`}>
                    <IconComponent className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <span>{category.title}</span>
                    <span className="text-xs text-gray-500 ml-1">({category.days.length} days)</span>
                  </div>
                </Link>
              )
            })}
            
            <div className="border-t border-gray-100 pt-3 mt-3">
              <Link 
                href="/curriculum" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Curriculum
              </Link>
              <Link 
                href="/practice" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Practice
              </Link>
              <Link 
                href="/interview-questions" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Interview Q&A
              </Link>
              <Link 
                href="/selenium-cheatsheet" 
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-md transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Code className="w-4 h-4" />
                Selenium Cheatsheet
              </Link>
            </div>
            
            {/* Buy me a Chai - Mobile */}
            <div className="border-t border-gray-100 pt-3">
              <a 
                href="https://onlychai.neocities.org/support.html?name=Anurag%20Patel&upi=9111282226%40apl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg">🍵</span>
                <span>Buy me a Chai</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for dropdown and mobile menu */}
      {(isCoursesOpen || hoveredCategory || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsCoursesOpen(false)
            setHoveredCategory(null)
            setIsMobileMenuOpen(false)
          }}
        />
      )}
    </div>
  )
}