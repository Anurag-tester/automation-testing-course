export const metadata = {
  title: 'Day 23: XPath Sibling Navigation | SDET Course',
  description: 'Master XPath sibling navigation techniques using following-sibling and preceding-sibling axes for related element location.',
  keywords: 'xpath sibling navigation, following-sibling, preceding-sibling, sibling axes, xpath navigation, element relationships',
}

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day23() {
  return (
    <DayLayout
      dayNumber={23}
      title="Day 23: XPath Sibling Navigation - following-sibling & preceding-sibling"
      description="Master XPath sibling navigation techniques to locate related elements in the same parent container"
      previousDay="/day22"
      nextDay="/day24"
    >
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Today&apos;s Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sibling Navigation</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Understanding sibling relationships in DOM</li>
                  <li>• following-sibling axis navigation</li>
                  <li>• preceding-sibling axis navigation</li>
                  <li>• Complex sibling combinations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Practical Applications</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Table data extraction techniques</li>
                  <li>• Form element relationships</li>
                  <li>• Radio button and checkbox groups</li>
                  <li>• Dynamic content navigation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Complete XPath Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Complete Relative XPath Techniques</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">All 17 Relative XPath Methods</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-3">Basic Methods (1-7)</h4>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li><strong>1)</strong> using single attribute</li>
                  <li><strong>2)</strong> using AND operator</li>
                  <li><strong>3)</strong> using OR operator</li>
                  <li><strong>4)</strong> using text() method</li>
                  <li><strong>5)</strong> using contains() with text() method</li>
                  <li><strong>6)</strong> using starts-with() with text() method</li>
                  <li><strong>7)</strong> using normalize-space() with text() method</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-3">Attribute Methods (8-9)</h4>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li><strong>8)</strong> using contains() with attribute</li>
                  <li><strong>9)</strong> using starts-with() with attribute</li>
                </ul>
                
                <div className="mt-4 pt-4 border-t border-green-200">
                  <h4 className="font-medium text-green-800 mb-2 text-center">↓ XPATH AXES ↓</h4>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-800 mb-3">XPath Axes (10-17)</h4>
                <ul className="text-purple-700 space-y-2 text-sm">
                  <li><strong>10)</strong> using child keyword</li>
                  <li><strong>11)</strong> using descendant keyword</li>
                  <li><strong>12)</strong> using parent keyword</li>
                  <li><strong>13)</strong> using ancestor keyword</li>
                  <li className="text-blue-600 font-medium"><strong>14)</strong> using following-sibling keyword</li>
                  <li className="text-blue-600 font-medium"><strong>15)</strong> using preceding-sibling keyword</li>
                  <li><strong>16)</strong> using following keyword</li>
                  <li><strong>17)</strong> using preceding keyword</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 rounded-lg p-4">
              <p className="text-yellow-800 text-sm text-center font-medium">
                Today&apos;s Focus: <strong>Methods 14 & 15</strong> - Sibling Navigation Techniques
              </p>
            </div>
          </div>
        </section>

        {/* XPath Axes Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">XPath Axes - Sibling Navigation</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Complete XPath Axes List</h3>
            <p className="text-gray-600 mb-6 text-sm">
              XPath provides 17 different axes for navigating the DOM tree. Today we focus on sibling navigation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Navigation Axes</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li><strong>10. child::</strong> Direct child elements</li>
                  <li><strong>11. descendant::</strong> All descendant elements</li>
                  <li><strong>12. parent::</strong> Direct parent element</li>
                  <li><strong>13. ancestor::</strong> All ancestor elements</li>
                  <li className="text-blue-600"><strong>14. following-sibling::</strong> Next siblings</li>
                  <li className="text-blue-600"><strong>15. preceding-sibling::</strong> Previous siblings</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Advanced Axes</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li><strong>16. following::</strong> All following elements</li>
                  <li><strong>17. preceding::</strong> All preceding elements</li>
                  <li><em className="text-gray-500">Plus 9 other axes for complete DOM navigation</em></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Following-Sibling */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">14. following-sibling Keyword</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Concept & Purpose</h3>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-medium mb-2">
                  Using following-sibling keyword we can locate <strong>&quot;next element in same parent tags&quot;</strong>
                </p>
                <p className="text-blue-700 text-sm">
                  If we have same parent tags present and within the DOM structure we have to locate next element, then we use following-sibling keyword.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Basic Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-purple-300">//tagname[@attribute='value']/following-sibling::tagname</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Advanced Syntax with Conditions</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-purple-300">//tagname[@attribute='value']/following-sibling::tagname[@attribute='value']</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HTML Example */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">HTML Structure Example</h3>
              
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono mb-6">
                <span className="text-blue-300">&lt;html&gt;</span><br/>
                &nbsp;&nbsp;<span className="text-blue-300">&lt;head&gt;&lt;/head&gt;</span><br/>
                &nbsp;&nbsp;<span className="text-blue-300">&lt;body&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">&lt;div class=&quot;a1&quot;&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;input type=&quot;checkbox&quot; name=&quot;selenium&quot;&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;input type=&quot;checkbox&quot; name=&quot;selenium&quot;&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">&lt;/div&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">&lt;div class=&quot;a1&quot;&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">Male &lt;input type=&quot;radio&quot; name=&quot;gender&quot;&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">Female &lt;input type=&quot;radio&quot; name=&quot;gender&quot;&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">&lt;/div&gt;</span><br/>
                &nbsp;&nbsp;<span className="text-blue-300">&lt;/body&gt;</span><br/>
                <span className="text-blue-300">&lt;/html&gt;</span>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-3">Locate Female Radio Button</h4>
                  <div className="space-y-2">
                    <p className="text-green-700 text-sm">Problem: <code>//input[@name='gender']</code> locates 2 elements</p>
                    <p className="text-green-700 text-sm">Solution: <code>//input[@name='gender']/following-sibling::input</code></p>
                    <p className="text-green-600 text-xs">This will locate the female radio button (next sibling)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preceding-Sibling */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">15. preceding-sibling Keyword</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Concept & Purpose</h3>
              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <p className="text-purple-800 font-medium mb-2">
                  Using preceding-sibling keyword we can locate <strong>&quot;previous element in same parent tags&quot;</strong>
                </p>
                <p className="text-purple-700 text-sm">
                  If we have same parent tags present and within the DOM structure we have to locate previous element, then we use preceding-sibling keyword.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Basic Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-purple-300">//tagname[@attribute='value']/preceding-sibling::tagname</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Advanced Syntax with Conditions</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-purple-300">//tagname[@attribute='value']/preceding-sibling::tagname[@attribute='value']</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Locate Male Radio Button</h3>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-800 mb-3">Using preceding-sibling</h4>
                <div className="space-y-2">
                  <p className="text-orange-700 text-sm">Problem: <code>//input[@name='gender']</code> locates 2 elements</p>
                  <p className="text-orange-700 text-sm">Solution: <code>//input[@name='gender']/preceding-sibling::input</code></p>
                  <p className="text-orange-600 text-xs">This will locate the male radio button (previous sibling)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complex Sibling Navigation */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Complex Sibling Navigation</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Chaining Sibling Navigation</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-3">Navigate to Other Radio Button</h4>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Double following-sibling:</p>
                      <code className="text-xs text-blue-600 break-all">
                        //input[@name='gender']/following-sibling::input/following-sibling::input
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Double preceding-sibling:</p>
                      <code className="text-xs text-blue-600 break-all">
                        //input[@name='gender']/preceding-sibling::input/preceding-sibling::input
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-3">Conditional Sibling Navigation</h4>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Female radio button with condition:</p>
                      <code className="text-xs text-green-600 break-all">
                        //input[@name='gender']/preceding-sibling::input[preceding-sibling::input]
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Male radio button with condition:</p>
                      <code className="text-xs text-green-600 break-all">
                        //input[@name='gender']/following-sibling::input[following-sibling::input]
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Real-World Examples</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Rahul Shetty Academy Practice</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Website: <a href="https://rahulshettyacademy.com/AutomationPractice/" className="text-blue-600 hover:underline">https://rahulshettyacademy.com/AutomationPractice/</a>
              </p>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-3">Course Price Extraction</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Selenium course prices (starts with):</p>
                      <code className="text-xs text-blue-600 break-all">
                        //td[starts-with(text(),'Selenium')]/following-sibling::td
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Selenium course prices (contains):</p>
                      <code className="text-xs text-blue-600 break-all">
                        //td[contains(text(),'Selenium')]/following-sibling::td
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-3">Employee Data Extraction</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Engineer position salary:</p>
                      <code className="text-xs text-green-600 break-all">
                        //td[text()='Engineer']/following-sibling::td/following-sibling::td
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Chennai city employee names:</p>
                      <code className="text-xs text-green-600 break-all">
                        //td[text()='Chennai']/preceding-sibling::td/preceding-sibling::td
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Engineer position cities:</p>
                      <code className="text-xs text-green-600 break-all">
                        //td[text()='Engineer']/following-sibling::td[following-sibling::td]
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Google Search & Registration Forms</h3>
              
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-3">Google Search Navigation</h4>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Navigate between search buttons:</p>
                      <code className="text-xs text-purple-600 break-all">
                        //div[@class='FPdoLc lJ9FBc']/descendant::input/following-sibling::input
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-gray-700 mb-1">Navigate to previous button:</p>
                      <code className="text-xs text-purple-600 break-all">
                        //div[@class='FPdoLc lJ9FBc']/descendant::input/preceding-sibling::input
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-800 mb-3">Registration Form Example</h4>
                  <p className="text-orange-700 text-sm mb-3">
                    Website: <a href="https://copyright.gov.in/UserRegistration/frmNewUser.aspx" className="text-orange-600 hover:underline">https://copyright.gov.in/UserRegistration/frmNewUser.aspx</a>
                  </p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-700 mb-1">Society User radio button:</p>
                    <code className="text-xs text-orange-600 break-all">
                      //label[text()='Society User']/preceding-sibling::input
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Advanced Sibling Combinations</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Complex Navigation Patterns</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Multi-Level Navigation</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-700 mb-1">Employee ID field navigation:</p>
                    <code className="text-xs text-gray-600 break-all">
                      //label[text()='Employee Id']/parent::div/following-sibling::div/child::input
                    </code>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-700 mb-1">Gender field complex navigation:</p>
                    <code className="text-xs text-gray-600 break-all">
                      //label[text()='Gender']/parent::div/following-sibling::div/child::div/
                      <br/>preceding-sibling::div/descendant::label
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-3">Button Navigation</h4>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-700 mb-1">Required field button:</p>
                  <code className="text-xs text-blue-600 break-all">
                    //p[text()=' * Required']/following-sibling::button
                  </code>
                </div>
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
                question: "What does the following-sibling:: axis locate in XPath?",
                options: [
                  "All child elements of the current element",
                  "The next element in the same parent container",
                  "All elements that come after the current element in the document",
                  "The parent element of the current element"
                ],
                correctAnswer: 1,
                explanation: "following-sibling:: locates the next element that shares the same parent as the current element. It only looks at sibling elements, not all following elements in the document."
              },
              {
                id: 2,
                question: "Which XPath expression correctly locates the female radio button if male comes first?",
                options: [
                  "//input[@name='gender']/preceding-sibling::input",
                  "//input[@name='gender']/following-sibling::input",
                  "//input[@name='gender']/next::input",
                  "//input[@name='gender']/sibling::input"
                ],
                correctAnswer: 1,
                explanation: "If male radio button comes first, then female radio button is the following sibling. following-sibling::input will locate the next input element with the same parent."
              },
              {
                id: 3,
                question: "What is the difference between following:: and following-sibling:: axes?",
                options: [
                  "There is no difference, they work the same way",
                  "following:: only looks at direct siblings, following-sibling:: looks at all elements",
                  "following-sibling:: only looks at siblings with same parent, following:: looks at all elements after current element",
                  "following:: is faster than following-sibling::"
                ],
                correctAnswer: 2,
                explanation: "following-sibling:: only considers elements that share the same parent (siblings), while following:: considers all elements that appear after the current element in the document, regardless of their parent."
              },
              {
                id: 4,
                question: "How would you locate the price of a course named 'Selenium Python' in a table?",
                options: [
                  "//td[text()='Selenium Python']/preceding-sibling::td",
                  "//td[text()='Selenium Python']/following-sibling::td",
                  "//td[text()='Selenium Python']/parent::td",
                  "//td[text()='Selenium Python']/child::td"
                ],
                correctAnswer: 1,
                explanation: "In a typical table structure, if the course name is in one column and price is in the next column, you would use following-sibling::td to get the price cell that comes after the course name cell."
              },
              {
                id: 5,
                question: "What does this XPath expression do: //input[@name='gender']/following-sibling::input/following-sibling::input?",
                options: [
                  "Locates the first radio button in the gender group",
                  "Locates the second radio button after the first one",
                  "Locates all radio buttons in the gender group",
                  "Locates the third radio button in the gender group"
                ],
                correctAnswer: 1,
                explanation: "This expression chains two following-sibling navigations. Starting from the first gender input, it goes to the next sibling (second input), then to the next sibling of that (which would be the second radio button after the first one)."
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
                <h3 className="font-medium text-gray-800 mb-3">Sibling Navigation</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• following-sibling:: locates next elements in same parent</li>
                  <li>• preceding-sibling:: locates previous elements in same parent</li>
                  <li>• Chain multiple sibling navigations for complex scenarios</li>
                  <li>• Use conditions with sibling axes for precise targeting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Practical Applications</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Table data extraction (course prices, employee data)</li>
                  <li>• Form element relationships (radio buttons, checkboxes)</li>
                  <li>• Dynamic content navigation</li>
                  <li>• Complex DOM structure traversal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </DayLayout>
  )
}