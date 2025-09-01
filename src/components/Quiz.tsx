'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface QuizProps {
  questions: QuizQuestion[]
  title?: string
}

export default function Quiz({ questions, title = "Knowledge Check" }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex)
  }

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const newAnswers = [...selectedAnswers]
      newAnswers[currentQuestion] = selectedOption
      setSelectedAnswers(newAnswers)
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        setShowResults(true)
      }
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(selectedAnswers[currentQuestion - 1] ?? null)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setSelectedOption(null)
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0)
    }, 0)
  }

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (showResults) {
    const score = calculateScore()
    const percentage = Math.round((score / questions.length) * 100)
    
    return (
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">{title} - Results</h2>
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <div className="text-center mb-8">
            <div className={`text-4xl font-bold mb-2 ${getScoreColor(score, questions.length)}`}>
              {score}/{questions.length}
            </div>
            <div className="text-lg text-gray-600 mb-4">
              You scored {percentage}%
            </div>
            <Button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700">
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </Button>
          </div>
          
          <div className="space-y-6">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index]
              const isCorrect = userAnswer === question.correctAnswer
              
              return (
                <div key={question.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-start mb-3">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">
                        {index + 1}. {question.question}
                      </h3>
                      <div className="space-y-2">
                        <div className={`p-2 rounded text-sm ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                          Your answer: {question.options[userAnswer]}
                        </div>
                        {!isCorrect && (
                          <div className="p-2 rounded text-sm bg-green-50 text-green-800">
                            Correct answer: {question.options[question.correctAnswer]}
                          </div>
                        )}
                        {question.explanation && (
                          <div className="p-2 rounded text-sm bg-blue-50 text-blue-800">
                            {question.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  const question = questions[currentQuestion]
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-light text-gray-900 mb-8">{title}</h2>
      <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            {question.question}
          </h3>
        </div>
        
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedOption === index
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                  selectedOption === index
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {selectedOption === index && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                  )}
                </div>
                <span className="text-sm">{option}</span>
              </div>
            </button>
          ))}
        </div>
        
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </div>
      </div>
    </section>
  )
}