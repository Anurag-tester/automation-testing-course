'use client'

import { lazy, Suspense } from 'react'

const Quiz = lazy(() => import('./Quiz'))

interface LazyQuizProps {
  questions: Array<{
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }>
}

export default function LazyQuiz({ questions }: LazyQuizProps) {
  return (
    <Suspense fallback={
      <div className="bg-gray-50 rounded-2xl p-8 animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    }>
      <Quiz questions={questions} />
    </Suspense>
  )
}