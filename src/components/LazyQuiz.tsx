'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Quiz = dynamic(() => import('./Quiz'), {
  loading: () => (
    <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  ),
  ssr: false
})

interface LazyQuizProps {
  title?: string
  questions: Array<{
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }>
}

export default function LazyQuiz({ title, questions }: LazyQuizProps) {
  return (
    <Suspense fallback={
      <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    }>
      <Quiz title={title} questions={questions} />
    </Suspense>
  )
}