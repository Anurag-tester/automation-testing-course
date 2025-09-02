import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-light text-gray-900 mb-4">404</h1>
          <h2 className="text-xl font-medium text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Looking for course content?</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/manual-testing-basics" className="text-blue-600 hover:underline">Day 1</Link>
              <Link href="/practice" className="text-blue-600 hover:underline">Practice</Link>
              <Link href="/interview-questions" className="text-blue-600 hover:underline">Interview Q&A</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}