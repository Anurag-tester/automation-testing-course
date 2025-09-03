'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { courseData, additionalPages } from '@/data/courseData'

// Comprehensive keyword database for enhanced search
const searchKeywords = {
  // Manual Testing Keywords
  'sdlc': ['day1', 'day32'],
  'fish model': ['day1', 'day2'],
  'brs': ['day1', 'day32'],
  'srs': ['day1', 'day2', 'day32'],
  'waterfall': ['day1', 'day2'],
  'agile': ['day1', 'day2'],
  'v model': ['day1', 'day2'],
  'black box testing': ['day2', 'day32'],
  'white box testing': ['day2'],
  'ecp': ['day2'],
  'equivalence class partitioning': ['day2'],
  'bva': ['day2'],
  'boundary value analysis': ['day2'],
  'decision table': ['day2', 'day3'],
  'state transition': ['day2', 'day3'],
  'use case testing': ['day3'],
  'test plans': ['day4'],
  'test cases': ['day4'],
  'test documentation': ['day4'],
  'bug life cycle': ['day5'],
  'defect management': ['day5'],
  'severity': ['day5'],
  'priority': ['day5'],
  'integration testing': ['day6'],
  'top down': ['day6'],
  'bottom up': ['day6'],
  'stub': ['day6'],
  'driver': ['day6'],
  
  // Java Keywords
  'java': ['day6', 'day7', 'day8', 'day9', 'day32'],
  'data types': ['day6', 'day32'],
  'int': ['day6'],
  'float': ['day6'],
  'double': ['day6'],
  'boolean': ['day6'],
  'char': ['day6'],
  'string': ['day6', 'day7', 'day32'],
  'variables': ['day6'],
  'operators': ['day6', 'day7', 'day32'],
  'arithmetic': ['day6'],
  'conditional': ['day7'],
  'if else': ['day7'],
  'switch': ['day7'],
  'loops': ['day8'],
  'for loop': ['day8'],
  'while loop': ['day8'],
  'do while': ['day8'],
  'methods': ['day9'],
  'functions': ['day9'],
  'parameters': ['day9'],
  'return types': ['day9'],
  
  // Selenium Keywords
  'selenium': ['day10', 'day11', 'day12', 'day13', 'day14', 'day15', 'day16', 'day17', 'day18', 'day19', 'day20', 'day21', 'day22', 'day23', 'day24', 'day25', 'day26', 'day27', 'day28', 'day29', 'day30', 'day31', 'day32', 'day33', 'day34'],
  'webdriver': ['day10', 'day28', 'day29', 'day32'],
  'browser operations': ['day10', 'day28'],
  'chromedriver': ['day10'],
  'locators': ['day11', 'day13', 'day28', 'day32'],
  'id': ['day11'],
  'name': ['day11'],
  'class name': ['day11'],
  'xpath': ['day11', 'day13', 'day20', 'day21', 'day22', 'day23', 'day24', 'day28', 'day32'],
  'css selector': ['day11', 'day13', 'day28', 'day32'],
  'relative xpath': ['day20', 'day21', 'day32'],
  'absolute xpath': ['day32'],
  'xpath axes': ['day21', 'day23'],
  'following-sibling': ['day23'],
  'preceding-sibling': ['day23'],
  'child axis': ['day21'],
  'descendant axis': ['day21'],
  'click': ['day12'],
  'sendkeys': ['day12'],
  'clear': ['day12'],
  'dropdown': ['day14', 'day25', 'day28', 'day32'],
  'select class': ['day14', 'day25'],
  'checkbox': ['day15'],
  'radio button': ['day15'],
  'alerts': ['day16', 'day28', 'day32'],
  'javascript alerts': ['day16'],
  'frames': ['day17', 'day28', 'day32'],
  'iframe': ['day17', 'day32'],
  'switch to frame': ['day17'],
  'actions class': ['day18', 'day25', 'day28'],
  'mouse actions': ['day18'],
  'keyboard events': ['day18'],
  'drag drop': ['day18'],
  'hover': ['day18'],
  'right click': ['day18'],
  'double click': ['day18'],
  'javascript executor': ['day19', 'day25'],
  'execute script': ['day19'],
  'calendar': ['day26'],
  'date selection': ['day26'],
  'multiple windows': ['day27'],
  'window handling': ['day27'],
  'getWindowHandle': ['day27'],
  'tab handling': ['day27'],
  'synchronization': ['day29'],
  'implicit wait': ['day29', 'day32', 'day33'],
  'explicit wait': ['day29', 'day32', 'day33'],
  'fluent wait': ['day29', 'day32', 'day33'],
  'webdriverwait': ['day29'],
  'expected conditions': ['day29'],
  'screenshots': ['day30', 'day33'],
  'takescreenshot': ['day30'],
  'browser options': ['day30'],
  'headless mode': ['day30'],
  'incognito mode': ['day30'],
  'broken links': ['day31'],
  'http response codes': ['day31'],
  'exceptions': ['day32', 'day33'],
  'staleelementreferenceexception': ['day33'],
  'nosuchelementexception': ['day33'],
  'timeoutexception': ['day33'],
  'shadow dom': ['day34'],
  'getshadowroot': ['day34'],
  'web components': ['day34'],
  'scroll into view': ['day36-part2'],
  'scrollintoview': ['day36-part2'],
  'custom alerts': ['day36-part2'],
  'confirm popup': ['day36-part2'],
  'prompt popup': ['day36-part2'],
  'element highlighting': ['day36-part2'],
  'background color': ['day36-part2'],
  'border creation': ['day36-part2'],
  'style border': ['day36-part2'],
  'document title': ['day36-part2'],
  'document url': ['day36-part2'],
  'closed shadow root': ['day36-part2'],
  'element styling': ['day36-part2'],
  'javascript executor advanced': ['day36-part2'],
  'scroll alerts styling': ['day36-part2'],
  'js scroll': ['day36-part2'],
  'js alerts': ['day36-part2'],
  'js styling': ['day36-part2'],
  
  // API Testing Keywords
  'api testing': ['day37'],
  'postman': ['day37'],
  'http methods': ['day37'],
  'get request': ['day37'],
  'post request': ['day37'],
  'put request': ['day37'],
  'delete request': ['day37'],
  'patch request': ['day37'],
  'rest api': ['day37'],
  'web services': ['day37'],
  'json': ['day37'],
  'xml': ['day37'],
  'status codes': ['day37'],
  'response validation': ['day37'],
  'api documentation': ['day37'],
  'swagger': ['day37'],
  'path parameters': ['day37'],
  'query parameters': ['day37'],
  'request headers': ['day37'],
  'response headers': ['day37'],
  'cookies': ['day37'],
  'latency testing': ['day37'],
  'performance testing': ['day37'],
  'api automation': ['day37'],
  'endpoint testing': ['day37'],
  'business logic': ['day37'],
  'application programming interface': ['day37']
}

interface SearchResult {
  id: string
  title: string
  description: string
  category?: 'manual-testing' | 'java' | 'selenium' | 'api-testing'
  dayNumber?: number
  path?: string
  type: 'day' | 'page' | 'keyword'
  score: number
  matchedKeywords?: string[]
}

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Enhanced fuzzy search function
  const fuzzyMatch = (text: string, query: string): number => {
    const textLower = text.toLowerCase()
    const queryLower = query.toLowerCase()
    
    // Exact match gets highest score
    if (textLower.includes(queryLower)) return 100
    
    // Word-by-word matching
    const queryWords = queryLower.split(/\s+/).filter(word => word.length > 0)
    const textWords = textLower.split(/\s+/)
    
    let matchedWords = 0
    let partialMatches = 0
    
    for (const queryWord of queryWords) {
      let bestMatch = 0
      for (const textWord of textWords) {
        if (textWord === queryWord) {
          bestMatch = 1
          break
        } else if (textWord.includes(queryWord) || queryWord.includes(textWord)) {
          bestMatch = Math.max(bestMatch, 0.7)
        } else {
          // Simple character-based similarity
          const similarity = calculateSimilarity(textWord, queryWord)
          if (similarity > 0.6) {
            bestMatch = Math.max(bestMatch, similarity * 0.5)
          }
        }
      }
      if (bestMatch === 1) matchedWords++
      else if (bestMatch > 0) partialMatches++
    }
    
    const score = (matchedWords * 2 + partialMatches) / queryWords.length
    return Math.min(score * 50, 99) // Cap at 99 to keep exact matches highest
  }
  
  // Simple character similarity calculation
  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2
    const shorter = str1.length > str2.length ? str2 : str1
    
    if (longer.length === 0) return 1
    
    const editDistance = levenshteinDistance(longer, shorter)
    return (longer.length - editDistance) / longer.length
  }
  
  // Levenshtein distance for typo tolerance
  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix = []
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i]
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          )
        }
      }
    }
    
    return matrix[str2.length][str1.length]
  }

  const searchCourse = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      setIsOpen(false)
      return
    }

    const query = searchQuery.trim().toLowerCase()
    
    // Enhanced keyword-based search
    const keywordResults: SearchResult[] = []
    const matchedDays = new Set<string>()
    
    // Search through keyword database
    Object.entries(searchKeywords).forEach(([keyword, days]) => {
      if (keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase())) {
        days.forEach(dayId => {
          if (!matchedDays.has(dayId)) {
            matchedDays.add(dayId)
            const day = courseData.find(d => d.id === dayId)
            if (day) {
              keywordResults.push({
                ...day,
                dayNumber: parseInt(day.id.replace('day', '')),
                type: 'keyword' as const,
                score: 95, // High score for keyword matches
                matchedKeywords: [keyword]
              })
            }
          }
        })
      }
    })
    
    // Search course days with enhanced scoring
    const dayResults = courseData
      .map(day => {
        let maxScore = 0
        let matchedKeywords: string[] = []
        
        // Score different fields
        const titleScore = fuzzyMatch(day.title, query)
        const descScore = fuzzyMatch(day.description, query)
        const categoryScore = fuzzyMatch(day.category.replace('-', ' '), query)
        
        maxScore = Math.max(titleScore, descScore, categoryScore)
        
        // Enhanced tag matching with keyword database
        if (day.tags) {
          for (const tag of day.tags) {
            const tagScore = fuzzyMatch(tag.replace('-', ' '), query)
            maxScore = Math.max(maxScore, tagScore)
            
            // Check if tag matches any keywords
            Object.entries(searchKeywords).forEach(([keyword, days]) => {
              if (tag.toLowerCase().includes(keyword.toLowerCase()) && 
                  (keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase()))) {
                maxScore = Math.max(maxScore, 90)
                matchedKeywords.push(keyword)
              }
            })
          }
        }
        
        return {
          ...day,
          dayNumber: parseInt(day.id.replace('day', '')),
          type: 'day' as const,
          score: maxScore,
          matchedKeywords: matchedKeywords.length > 0 ? matchedKeywords : undefined
        }
      })
      .filter(day => day.score > 10)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)

    // Search additional pages with enhanced scoring
    const pageResults = additionalPages
      .map(page => {
        let maxScore = 0
        let matchedKeywords: string[] = []
        
        const titleScore = fuzzyMatch(page.title, query)
        const descScore = fuzzyMatch(page.description, query)
        
        maxScore = Math.max(titleScore, descScore)
        
        // Enhanced tag matching
        for (const tag of page.tags) {
          const tagScore = fuzzyMatch(tag.replace('-', ' '), query)
          maxScore = Math.max(maxScore, tagScore)
          
          // Check keyword matches
          Object.entries(searchKeywords).forEach(([keyword]) => {
            if (tag.toLowerCase().includes(keyword.toLowerCase()) && 
                (keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase()))) {
              maxScore = Math.max(maxScore, 85)
              matchedKeywords.push(keyword)
            }
          })
        }
        
        return {
          ...page,
          type: 'page' as const,
          score: maxScore,
          matchedKeywords: matchedKeywords.length > 0 ? matchedKeywords : undefined
        }
      })
      .filter(page => page.score > 10)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)

    // Combine all results and remove duplicates
    const allResultsMap = new Map<string, SearchResult>()
    
    // Add keyword results first (highest priority)
    keywordResults.forEach(result => {
      allResultsMap.set(result.id, result)
    })
    
    // Add day results (merge with keyword results if exists)
    dayResults.forEach(result => {
      const existing = allResultsMap.get(result.id)
      if (existing) {
        // Merge matched keywords
        const combinedKeywords = [...(existing.matchedKeywords || []), ...(result.matchedKeywords || [])]
        allResultsMap.set(result.id, {
          ...existing,
          score: Math.max(existing.score, result.score),
          matchedKeywords: Array.from(new Set(combinedKeywords))
        })
      } else {
        allResultsMap.set(result.id, result)
      }
    })
    
    // Add page results
    pageResults.forEach(result => {
      if (!allResultsMap.has(result.id)) {
        allResultsMap.set(result.id, result)
      }
    })
    
    // Convert to array and sort by score
    const allResults = Array.from(allResultsMap.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 10) // Limit to top 10 results
    
    setResults(allResults)
    setIsOpen(allResults.length > 0)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    searchCourse(value)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'manual-testing':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'java':
        return 'bg-green-50 text-green-700 border-green-200'
      case 'selenium':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      case 'api-testing':
        return 'bg-orange-50 text-orange-700 border-orange-200'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'manual-testing':
        return 'Manual Testing'
      case 'java':
        return 'Java'
      case 'selenium':
        return 'Selenium'
      case 'api-testing':
        return 'API Testing'
      default:
        return category
    }
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search topics, days, or concepts..."
          value={query}
          onChange={handleInputChange}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs text-gray-500 px-3 py-2 border-b border-gray-100">
              Found {results.length} result{results.length !== 1 ? 's' : ''}
            </div>
            {results.map((result) => (
              <Link
                key={result.id}
                href={result.type === 'day' || result.type === 'keyword' ? `/${result.id}` : result.path || '#'}
                onClick={() => {
                  setIsOpen(false)
                  setQuery('')
                }}
                className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {(result.type === 'day' || result.type === 'keyword') && (
                        <span className="text-xs font-medium text-gray-500">
                          Day {result.dayNumber}
                        </span>
                      )}
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${
                        result.type === 'page' ? 'bg-gray-50 text-gray-700 border-gray-200' : getCategoryColor(result.category!)
                      }`}>
                        {result.type === 'page' ? 'Resource' : getCategoryLabel(result.category!)}
                      </span>
                      {result.type === 'keyword' && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
                          Keyword Match
                        </span>
                      )}
                    </div>
                    <div className="font-medium text-gray-900 text-sm truncate">
                      {result.title.replace(/^Day \d+: /, '')}
                    </div>
                    <div className="text-xs text-gray-600 line-clamp-2 mt-1">
                      {result.description}
                    </div>
                    {result.matchedKeywords && result.matchedKeywords.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {result.matchedKeywords.slice(0, 3).map((keyword, idx) => (
                          <span key={idx} className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded">
                            {keyword}
                          </span>
                        ))}
                        {result.matchedKeywords.length > 3 && (
                          <span className="text-xs text-gray-500">+{result.matchedKeywords.length - 3} more</span>
                        )}
                      </div>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}