'use client'

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day22() {
  return (
    <DayLayout
      dayNumber={22}
      title="Day 22: XPath Practice & Assignments"
      description="Comprehensive XPath practice session with real-world assignments and hands-on exercises"
      previousDay="/day21"
      nextDay="/day23"
    >
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Today&apos;s Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">XPath Mastery</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Apply all XPath techniques learned</li>
                  <li>• Practice with real websites</li>
                  <li>• Complex element location scenarios</li>
                  <li>• XPath optimization strategies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Practical Assignments</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Dynamic element handling</li>
                  <li>• Table data extraction</li>
                  <li>• Form element identification</li>
                  <li>• Complex DOM navigation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* XPath Review */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">XPath Techniques Review</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Basic XPath Methods</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">Single Attribute</h4>
                  <code className="text-xs text-gray-600">//input[@id='username']</code>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">AND Operator</h4>
                  <code className="text-xs text-gray-600">//input[@type='text' and @name='user']</code>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">OR Operator</h4>
                  <code className="text-xs text-gray-600">//input[@id='user' or @name='username']</code>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">Text Method</h4>
                  <code className="text-xs text-gray-600">//button[text()='Submit']</code>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Advanced XPath Methods</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">Contains Method</h4>
                  <code className="text-xs text-gray-600">//div[contains(@class,'btn-primary')]</code>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">Starts-with Method</h4>
                  <code className="text-xs text-gray-600">//input[starts-with(@id,'user')]</code>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">Normalize-space</h4>
                  <code className="text-xs text-gray-600">//span[normalize-space()='Login']</code>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 text-sm mb-1">XPath Axes</h4>
                  <code className="text-xs text-gray-600">//div/child::input</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Assignments */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practice Assignments</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Assignment 1: Form Element Location</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Practice locating various form elements using different XPath techniques.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-blue-800 mb-3">Website: Registration Form</h4>
                <p className="text-blue-700 text-sm mb-3">Use any registration form website to practice these XPath expressions:</p>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 text-sm mb-2">Task 1: Locate Username Field</h5>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600">Using ID: <code>//input[@id='username']</code></p>
                      <p className="text-xs text-gray-600">Using Name: <code>//input[@name='username']</code></p>
                      <p className="text-xs text-gray-600">Using Type: <code>//input[@type='text']</code></p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 text-sm mb-2">Task 2: Locate Submit Button</h5>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600">Using Text: <code>//button[text()='Submit']</code></p>
                      <p className="text-xs text-gray-600">Using Contains: <code>//button[contains(text(),'Submit')]</code></p>
                      <p className="text-xs text-gray-600">Using Type: <code>//input[@type='submit']</code></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Assignment 2: Table Data Extraction</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Practice extracting data from HTML tables using XPath axes and methods.
              </p>
              
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-green-800 mb-3">Website: https://rahulshettyacademy.com/AutomationPractice/</h4>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 text-sm mb-2">Task 1: Course Prices</h5>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600">Selenium courses: <code>//td[contains(text(),'Selenium')]/following-sibling::td</code></p>
                      <p className="text-xs text-gray-600">Python courses: <code>//td[contains(text(),'Python')]/following-sibling::td</code></p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 text-sm mb-2">Task 2: Employee Data</h5>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600">Engineer salary: <code>//td[text()='Engineer']/following-sibling::td[2]</code></p>
                      <p className="text-xs text-gray-600">Chennai employees: <code>//td[text()='Chennai']/preceding-sibling::td[2]</code></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Assignment 3: Dynamic Elements</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Handle dynamic elements where attributes change frequently.
              </p>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-800 mb-3">Dynamic Element Strategies</h4>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 text-sm mb-2">Partial Attribute Match</h5>
                    <code className="text-xs text-gray-600">//div[contains(@id,'dynamic')]</code>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 text-sm mb-2">Multiple Attributes</h5>
                    <code className="text-xs text-gray-600">//input[@type='text' and contains(@class,'form-control')]</code>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 text-sm mb-2">Text-based Location</h5>
                    <code className="text-xs text-gray-600">//span[normalize-space(text())='Click Me']</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assignment Documents */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Assignment Documents</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Download Practice Assignments</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Complete the following assignments to master XPath techniques and element location strategies.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Assignment Document</h4>
                <p className="text-blue-700 text-sm mb-3">Detailed XPath practice exercises with step-by-step instructions.</p>
                <a 
                  href="/Day 22/Assignment.pdf" 
                  target="_blank" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  📄 View PDF Assignment
                </a>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">Word Document</h4>
                <p className="text-green-700 text-sm mb-3">Editable assignment document for practice and notes.</p>
                <a 
                  href="/Day 22/Assignment.docx" 
                  target="_blank" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  📝 Download DOCX
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">XPath Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">✅ Do&apos;s</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use unique attributes like ID when available
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Prefer shorter, more readable XPath expressions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use contains() for partial matches
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Test XPath in browser console first
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use normalize-space() for text with whitespace
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">❌ Don&apos;ts</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Avoid absolute XPath (starts with /html)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Don&apos;t rely on position-based selectors
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Avoid overly complex nested expressions
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Don&apos;t use dynamic attributes that change
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Avoid XPath with hardcoded index values
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="mb-16">
          <Quiz
            questions={[
              {
                id: 1,
                question: "Which XPath expression correctly locates an element with partial class name 'btn-primary'?",
                options: [
                  "//div[@class='btn-primary']",
                  "//div[contains(@class,'btn-primary')]",
                  "//div[starts-with(@class,'primary')]",
                  "//div[@class*='btn-primary']"
                ],
                correctAnswer: 1,
                explanation: "The contains() method is used to match partial attribute values. contains(@class,'btn-primary') will find elements where the class attribute contains 'btn-primary' anywhere within it."
              },
              {
                id: 2,
                question: "What is the correct XPath to find a button with text 'Submit' that may have extra whitespace?",
                options: [
                  "//button[text()='Submit']",
                  "//button[contains(text(),'Submit')]",
                  "//button[normalize-space(text())='Submit']",
                  "//button[trim(text())='Submit']"
                ],
                correctAnswer: 2,
                explanation: "normalize-space() removes leading and trailing whitespace and collapses multiple spaces into single spaces, making it perfect for matching text that may have formatting whitespace."
              },
              {
                id: 3,
                question: "Which XPath axes keyword is used to locate the next sibling element?",
                options: [
                  "next-sibling::",
                  "following-sibling::",
                  "sibling::",
                  "next::"
                ],
                correctAnswer: 1,
                explanation: "following-sibling:: is the correct XPath axis to locate the next sibling element that shares the same parent in the DOM structure."
              },
              {
                id: 4,
                question: "What is the main advantage of using relative XPath over absolute XPath?",
                options: [
                  "Relative XPath is faster to execute",
                  "Relative XPath is more readable and maintainable",
                  "Relative XPath uses less memory",
                  "Relative XPath works in all browsers"
                ],
                correctAnswer: 1,
                explanation: "Relative XPath is more maintainable because it doesn't depend on the complete DOM structure from root. If the page structure changes, relative XPath is less likely to break compared to absolute XPath."
              },
              {
                id: 5,
                question: "Which XPath expression uses the AND operator correctly?",
                options: [
                  "//input[@type='text' & @name='username']",
                  "//input[@type='text' AND @name='username']",
                  "//input[@type='text' and @name='username']",
                  "//input[@type='text' + @name='username']"
                ],
                correctAnswer: 2,
                explanation: "In XPath, the AND operator is written as 'and' (lowercase). It combines multiple conditions where all conditions must be true for the element to match."
              }
            ]}
          />
        </section>

        {/* Key Points Summary */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Key Points Summary</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-3">XPath Mastery</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Practice all 21 XPath techniques regularly</li>
                  <li>• Use browser console to test XPath expressions</li>
                  <li>• Combine multiple methods for complex scenarios</li>
                  <li>• Always prefer unique and stable attributes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Assignment Focus</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Complete all practice assignments thoroughly</li>
                  <li>• Test XPath on different websites</li>
                  <li>• Document your learning and challenges</li>
                  <li>• Prepare for advanced Selenium topics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </DayLayout>
  )
}