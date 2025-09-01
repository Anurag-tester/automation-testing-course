'use client'
export const metadata = {
  title: 'Day 24: Advanced XPath Practice | SDET Course',
  description: 'Advanced XPath practice with complex scenarios, real-world applications, and comprehensive assignments for expert-level skills.',
  keywords: 'advanced xpath practice, complex xpath, xpath mastery, xpath challenges, expert xpath, xpath optimization',
}

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day24() {
  return (
    <DayLayout
      dayNumber={24}
      title="Day 24: Advanced XPath Practice & Assignments"
      description="Advanced XPath practice with complex scenarios, real-world applications, and comprehensive assignments"
      previousDay="/day23"
      nextDay="/day25"
    >
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Today&apos;s Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Advanced XPath Mastery</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Complex XPath combinations and chaining</li>
                  <li>• Dynamic element handling strategies</li>
                  <li>• Performance optimization techniques</li>
                  <li>• Cross-browser compatibility considerations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Real-World Applications</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• E-commerce website automation</li>
                  <li>• Form handling and validation</li>
                  <li>• Data extraction from complex tables</li>
                  <li>• Multi-level navigation scenarios</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* XPath Mastery Review */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Complete XPath Techniques Mastery</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Methods (1-7)</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 rounded-lg p-2">
                  <strong>1.</strong> Single attribute
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <strong>2.</strong> AND operator
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <strong>3.</strong> OR operator
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <strong>4.</strong> text() method
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <strong>5.</strong> contains() with text()
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <strong>6.</strong> starts-with() with text()
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <strong>7.</strong> normalize-space()
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Attribute Methods (8-9)</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-blue-50 rounded-lg p-2">
                  <strong>8.</strong> contains() with attribute
                </div>
                <div className="bg-blue-50 rounded-lg p-2">
                  <strong>9.</strong> starts-with() with attribute
                </div>
              </div>
              
              <h4 className="font-medium text-gray-800 mt-4 mb-2">XPath Axes (10-17)</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-50 rounded-lg p-2">
                  <strong>10.</strong> child::
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <strong>11.</strong> descendant::
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <strong>12.</strong> parent::
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <strong>13.</strong> ancestor::
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Sibling Axes (14-17)</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-purple-50 rounded-lg p-2">
                  <strong>14.</strong> following-sibling::
                </div>
                <div className="bg-purple-50 rounded-lg p-2">
                  <strong>15.</strong> preceding-sibling::
                </div>
                <div className="bg-purple-50 rounded-lg p-2">
                  <strong>16.</strong> following::
                </div>
                <div className="bg-purple-50 rounded-lg p-2">
                  <strong>17.</strong> preceding::
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced XPath Scenarios */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Advanced XPath Scenarios</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Complex Table Navigation</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-3">Multi-Column Data Extraction</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Get employee salary by name:</p>
                      <code className="text-xs text-blue-600 break-all">
                        //td[text()='John Doe']/following-sibling::td[3]
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Get all employees in specific department:</p>
                      <code className="text-xs text-blue-600 break-all">
                        //td[text()='Engineering']/preceding-sibling::td[1]
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-3">Dynamic Table Handling</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Find row by multiple criteria:</p>
                      <code className="text-xs text-green-600 break-all">
                        //tr[td[text()='Active'] and td[contains(text(),'Manager')]]
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Get nth column of specific row:</p>
                      <code className="text-xs text-green-600 break-all">
                        //tr[td[text()='John']]/td[position()=4]
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Form Element Relationships</h3>
              
              <div className="space-y-6">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-800 mb-3">Label-Input Associations</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Input field by label text:</p>
                      <code className="text-xs text-orange-600 break-all">
                        //label[text()='Email Address']/following-sibling::input
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Complex form navigation:</p>
                      <code className="text-xs text-orange-600 break-all">
                        //label[contains(text(),'Password')]/parent::div/following-sibling::div/input
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-3">Checkbox and Radio Groups</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Select checkbox by label:</p>
                      <code className="text-xs text-purple-600 break-all">
                        //label[text()='I agree to terms']/preceding-sibling::input[@type='checkbox']
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Radio button in group:</p>
                      <code className="text-xs text-purple-600 break-all">
                        //input[@name='gender' and @value='female']
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Optimization */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">XPath Performance Optimization</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">⚡ Fast XPath Strategies</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-medium text-green-800 text-sm mb-2">Use Unique Attributes</h4>
                  <div className="space-y-1">
                    <p className="text-xs text-green-700">✅ Good: <code>//input[@id='username']</code></p>
                    <p className="text-xs text-gray-500">❌ Slow: <code>//div//div//input[@type='text']</code></p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-medium text-green-800 text-sm mb-2">Minimize Depth</h4>
                  <div className="space-y-1">
                    <p className="text-xs text-green-700">✅ Good: <code>//form//input[@name='email']</code></p>
                    <p className="text-xs text-gray-500">❌ Slow: <code>/html/body/div/div/form/div/input</code></p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-medium text-green-800 text-sm mb-2">Use Specific Tags</h4>
                  <div className="space-y-1">
                    <p className="text-xs text-green-700">✅ Good: <code>//button[text()='Submit']</code></p>
                    <p className="text-xs text-gray-500">❌ Slow: <code>//*[text()='Submit']</code></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🐌 Avoid These Patterns</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="font-medium text-red-800 text-sm mb-2">Wildcard Overuse</h4>
                  <p className="text-xs text-red-700">❌ <code>//*[@class='btn']//*[@type='submit']</code></p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="font-medium text-red-800 text-sm mb-2">Deep Nesting</h4>
                  <p className="text-xs text-red-700">❌ <code>//div/div/div/div/div/input</code></p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="font-medium text-red-800 text-sm mb-2">Position-based Selectors</h4>
                  <p className="text-xs text-red-700">❌ <code>//tr[5]/td[3]</code></p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="font-medium text-red-800 text-sm mb-2">Complex Text Matching</h4>
                  <p className="text-xs text-red-700">❌ <code>//*[contains(text(),'very long text with spaces')]</code></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assignment Documents */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Advanced Practice Assignments</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Comprehensive XPath Assignments</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Complete these advanced assignments to master complex XPath scenarios and real-world automation challenges.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Assignment 2 (Advanced)</h4>
                <p className="text-blue-700 text-sm mb-3">Complex scenarios with dynamic elements, table navigation, and form automation.</p>
                <div className="bg-white rounded-lg p-4 mt-3">
                  <iframe 
                    src="/Day 24/Assignment 2.pdf" 
                    width="100%" 
                    height="600" 
                    className="border border-gray-200 rounded-lg"
                    title="Assignment 2 PDF"
                  >
                    <p>Your browser does not support PDFs. 
                      <a href="/Day 24/Assignment 2.pdf" target="_blank" className="text-blue-600 hover:underline">
                        Download the PDF
                      </a>
                    </p>
                  </iframe>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">Practice Document</h4>
                <p className="text-green-700 text-sm mb-3">Editable document with practice exercises and solution templates.</p>
                <a 
                  href="/Day 24/Assignment.docx" 
                  target="_blank" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  📝 Download Practice DOCX
                </a>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-medium text-yellow-800 mb-3">Assignment Focus Areas</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-yellow-700 space-y-1 text-sm">
                  <li>• E-commerce product selection</li>
                  <li>• Multi-step form completion</li>
                  <li>• Dynamic dropdown handling</li>
                  <li>• Table data validation</li>
                </ul>
                <ul className="text-yellow-700 space-y-1 text-sm">
                  <li>• Cross-browser compatibility</li>
                  <li>• Performance optimization</li>
                  <li>• Error handling scenarios</li>
                  <li>• Complex navigation patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="mb-16">
          <Quiz
            questions={[
              {
                id: 1,
                question: "Which XPath expression is most efficient for locating a unique element?",
                options: [
                  "//*[@class='btn-primary']",
                  "//div//button[@id='submit-btn']",
                  "//button[@id='submit-btn']",
                  "//html//body//div//button[@id='submit-btn']"
                ],
                correctAnswer: 2,
                explanation: "Using a specific tag name (button) with a unique attribute (id) is the most efficient. It avoids wildcards and unnecessary depth traversal while being precise."
              },
              {
                id: 2,
                question: "How would you locate the salary of an employee named 'John Smith' in a table?",
                options: [
                  "//td[text()='John Smith']/preceding-sibling::td[2]",
                  "//td[text()='John Smith']/following-sibling::td[2]",
                  "//td[text()='John Smith']/parent::tr/td[4]",
                  "Both B and C could be correct depending on table structure"
                ],
                correctAnswer: 3,
                explanation: "The correct approach depends on the table structure. If salary is in a following column, use following-sibling. If you know the exact column position, use parent::tr/td[position]. Both could be valid."
              },
              {
                id: 3,
                question: "What's wrong with this XPath: //*[@class='form-control']//*[@type='text']?",
                options: [
                  "It uses incorrect syntax",
                  "It's too specific and won't find elements",
                  "It uses wildcards which makes it slow and imprecise",
                  "Nothing is wrong with it"
                ],
                correctAnswer: 2,
                explanation: "Using wildcards (//*) makes XPath slow as it searches all elements. It's also imprecise as it could match unintended elements. Better to use specific tag names."
              },
              {
                id: 4,
                question: "Which approach is best for handling dynamic element IDs like 'user-123', 'user-456'?",
                options: [
                  "//input[@id='user-123']",
                  "//input[starts-with(@id,'user-')]",
                  "//input[contains(@id,'user')]",
                  "Both B and C are good approaches"
                ],
                correctAnswer: 3,
                explanation: "Both starts-with(@id,'user-') and contains(@id,'user') can handle dynamic IDs. starts-with is more precise if the prefix is consistent, while contains is more flexible."
              },
              {
                id: 5,
                question: "How do you select a checkbox associated with the label 'I agree to terms'?",
                options: [
                  "//label[text()='I agree to terms']/input[@type='checkbox']",
                  "//label[text()='I agree to terms']/preceding-sibling::input[@type='checkbox']",
                  "//label[text()='I agree to terms']/following-sibling::input[@type='checkbox']",
                  "The answer depends on the HTML structure"
                ],
                correctAnswer: 3,
                explanation: "The correct XPath depends on whether the checkbox comes before or after the label in the HTML. You need to examine the DOM structure to determine if it's a preceding-sibling, following-sibling, or child relationship."
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
                  <li>• Master all 17 XPath techniques for complete coverage</li>
                  <li>• Combine multiple methods for complex scenarios</li>
                  <li>• Optimize for performance using specific selectors</li>
                  <li>• Handle dynamic elements with flexible strategies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Best Practices</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Use unique attributes when available (ID, name)</li>
                  <li>• Avoid wildcards and deep nesting</li>
                  <li>• Test XPath expressions in browser console</li>
                  <li>• Consider maintainability and readability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </DayLayout>
  )
}