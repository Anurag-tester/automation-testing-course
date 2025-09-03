export const metadata = {
  title: 'Day 32: Selenium Theory & Interview Questions | SDET Course',
  description: 'Comprehensive review of Selenium concepts, theory, and commonly asked interview questions with detailed explanations.',
  keywords: 'selenium theory, selenium interview questions, webdriver interview, selenium concepts, automation interview, selenium knowledge',
}
import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day32() {
  const quizQuestions = [
    {
      id: 1,
      question: "Which is the fastest locator in Selenium?",
      options: [
        "XPath",
        "CSS Selector",
        "ID",
        "Name"
      ],
      correctAnswer: 2,
      explanation: "ID is the fastest locator in Selenium because it directly identifies unique elements on the page."
    },
    {
      id: 2,
      question: "What is the main difference between get() and navigate().to() methods?",
      options: [
        "get() is faster than navigate().to()",
        "get() waits for all components to load, navigate().to() doesn't",
        "navigate().to() is faster than get()",
        "There is no difference"
      ],
      correctAnswer: 1,
      explanation: "get() method waits until all components are loaded on the webpage, while navigate().to() doesn't wait for complete page loading."
    },
    {
      id: 3,
      question: "Which browser is fastest in Selenium?",
      options: [
        "Chrome",
        "Firefox",
        "Edge",
        "Headless browser"
      ],
      correctAnswer: 3,
      explanation: "Headless browser is the fastest in Selenium as it runs without GUI, reducing resource consumption and execution time."
    },
    {
      id: 4,
      question: "What exception is thrown when findElement() doesn't find an element?",
      options: [
        "ElementNotFoundException",
        "NoSuchElementException",
        "TimeoutException",
        "WebDriverException"
      ],
      correctAnswer: 1,
      explanation: "NoSuchElementException is thrown when findElement() method cannot locate the specified element on the page."
    },
    {
      id: 5,
      question: "Which interface contains the perform() method?",
      options: [
        "Actions class",
        "Action interface",
        "WebDriver interface",
        "WebElement interface"
      ],
      correctAnswer: 1,
      explanation: "The perform() method is present in the Action interface and is used to execute the combined actions."
    }
  ];

  return (
    <DayLayout
      dayNumber={32}
      title="Selenium Theory & Interview Questions"
      description="Comprehensive review of Selenium concepts, theory, and commonly asked interview questions with detailed explanations."
      previousDay="/broken-link-detection-validation"
      nextDay="/advanced-selenium-exception-handling"
    >
      <div className="max-w-4xl mx-auto">
        {/* Selenium Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">What is Selenium?</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-4">Selenium Definition</h3>
              <p className="text-blue-800 text-sm mb-4">
                Selenium is a suite of tools used to automate web-based applications. It's primarily used for automating 
                functional and regression test cases for web applications.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">What Selenium Can Do</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Automate web-based applications</li>
                    <li>• Functional testing automation</li>
                    <li>• Regression testing automation</li>
                    <li>• Cross-browser testing</li>
                    <li>• Multi-platform support</li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Limitations</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Cannot automate desktop applications</li>
                    <li>• Requires AutoIT for desktop automation</li>
                    <li>• Limited to web-based testing</li>
                    <li>• No built-in reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Selenium Suite */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Selenium Suite Components</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">Selenium IDE</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Record and playback test cases</li>
                    <li>• Uses Selenese commands</li>
                    <li>• Saves tests in .html format</li>
                    <li>• Firefox browser support only</li>
                    <li>• Limited programming capabilities</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-3">Selenium WebDriver</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Interface for writing test cases</li>
                    <li>• 8 types of locators available</li>
                    <li>• Multi-browser support</li>
                    <li>• Multi-language support</li>
                    <li>• Cross-platform compatibility</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-3">Selenium RC</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Remote Control (outdated)</li>
                    <li>• Similar to WebDriver</li>
                    <li>• Legacy tool</li>
                    <li>• Not recommended for new projects</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-3">Selenium Grid</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Parallel test execution</li>
                    <li>• Multiple platform support</li>
                    <li>• Cannot write test cases</li>
                    <li>• Only executes existing tests</li>
                    <li>• Distributed testing capability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locators */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Selenium Locators</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-6">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-yellow-900 mb-3">8 Types of Locators</h4>
                <p className="text-yellow-800 text-sm">
                  Locators are used to locate elements on web pages. Each has different performance characteristics and use cases.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="font-medium text-green-900 text-sm mb-1">1. ID (Fastest)</div>
                    <div className="text-green-700 text-xs">Most reliable and fastest locator</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="font-medium text-blue-900 text-sm mb-1">2. Name</div>
                    <div className="text-blue-700 text-xs">Second fastest, uses name attribute</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="font-medium text-purple-900 text-sm mb-1">3. ClassName</div>
                    <div className="text-purple-700 text-xs">Uses CSS class attribute</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="font-medium text-orange-900 text-sm mb-1">4. TagName</div>
                    <div className="text-orange-700 text-xs">Uses HTML tag names</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-red-50 rounded-lg p-3">
                    <div className="font-medium text-red-900 text-sm mb-1">5. LinkText</div>
                    <div className="text-red-700 text-xs">Exact text match for links</div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <div className="font-medium text-indigo-900 text-sm mb-1">6. PartialLinkText</div>
                    <div className="text-indigo-700 text-xs">Partial text match for links</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <div className="font-medium text-pink-900 text-sm mb-1">7. CSS Selector</div>
                    <div className="text-pink-700 text-xs">CSS-based element selection</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="font-medium text-gray-900 text-sm mb-1">8. XPath</div>
                    <div className="text-gray-700 text-xs">XML path-based selection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CSS vs XPath */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">CSS Selector vs XPath</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Feature</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">CSS Selector</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">XPath</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Direction</td>
                    <td className="py-3 px-4">Forward direction only</td>
                    <td className="py-3 px-4">Forward and backward direction</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Performance</td>
                    <td className="py-3 px-4">Faster execution</td>
                    <td className="py-3 px-4">Slower than CSS</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Shadow DOM</td>
                    <td className="py-3 px-4">Can locate shadow elements</td>
                    <td className="py-3 px-4">Cannot locate shadow elements</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Complexity</td>
                    <td className="py-3 px-4">Limited functionality</td>
                    <td className="py-3 px-4">Rich functionality with axes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Text Handling</td>
                    <td className="py-3 px-4">Limited text-based selection</td>
                    <td className="py-3 px-4">Excellent text() method support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Absolute vs Relative XPath */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Absolute vs Relative XPath</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-medium text-red-900 mb-3">Absolute XPath</h4>
                <div className="space-y-3">
                  <div className="bg-red-100 rounded-lg p-3">
                    <div className="text-red-800 text-sm space-y-1">
                      <div>• Starts with single forward slash (/)</div>
                      <div>• Forward direction only</div>
                      <div>• Faster execution</div>
                      <div>• Complete path from root</div>
                      <div>• More prone to failures</div>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono">
                    /html/body/div/form/input
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-3">Relative XPath</h4>
                <div className="space-y-3">
                  <div className="bg-green-100 rounded-lg p-3">
                    <div className="text-green-800 text-sm space-y-1">
                      <div>• Starts with double forward slash (//)</div>
                      <div>• Forward and backward direction</div>
                      <div>• Slower than absolute</div>
                      <div>• Can start from any point</div>
                      <div>• Less prone to failures</div>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono">
                    //input[@id='username']
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Browser & Method Differences */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Key Method Differences</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-6">
              {/* get() vs navigate().to() */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">get() vs navigate().to()</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <div className="font-medium text-blue-900 text-sm mb-2">get() Method</div>
                    <ul className="text-blue-800 text-xs space-y-1">
                      <li>• Waits for all components to load</li>
                      <li>• Present in WebDriver interface</li>
                      <li>• Return type: void</li>
                      <li>• Complete page loading</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <div className="font-medium text-blue-900 text-sm mb-2">navigate().to() Method</div>
                    <ul className="text-blue-800 text-xs space-y-1">
                      <li>• Doesn't wait for complete loading</li>
                      <li>• Present in Navigation interface</li>
                      <li>• Return type: void</li>
                      <li>• Supports forward/backward navigation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* findElement() vs findElements() */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-3">findElement() vs findElements()</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <div className="font-medium text-green-900 text-sm mb-2">findElement()</div>
                    <ul className="text-green-800 text-xs space-y-1">
                      <li>• Locates single element</li>
                      <li>• Return type: WebElement</li>
                      <li>• Throws NoSuchElementException</li>
                      <li>• Returns first matching element</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3">
                    <div className="font-medium text-green-900 text-sm mb-2">findElements()</div>
                    <ul className="text-green-800 text-xs space-y-1">
                      <li>• Locates multiple elements</li>
                      <li>• Return type: List&lt;WebElement&gt;</li>
                      <li>• Returns empty list if not found</li>
                      <li>• No exception thrown</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions vs Action */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-3">Actions vs Action</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <div className="font-medium text-purple-900 text-sm mb-2">Actions (Class)</div>
                    <ul className="text-purple-800 text-xs space-y-1">
                      <li>• Contains action methods</li>
                      <li>• click(), doubleClick(), contextClick()</li>
                      <li>• moveToElement(), dragAndDrop()</li>
                      <li>• build() method available</li>
                    </ul>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3">
                    <div className="font-medium text-purple-900 text-sm mb-2">Action (Interface)</div>
                    <ul className="text-purple-800 text-xs space-y-1">
                      <li>• Contains perform() method only</li>
                      <li>• Executes combined actions</li>
                      <li>• Return type: void</li>
                      <li>• Final execution step</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Handling Different Elements */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Element Handling Strategies</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-3">Dropdown Handling</h4>
                  <div className="text-orange-800 text-sm space-y-2">
                    <div><strong>With &lt;select&gt; tag:</strong></div>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• Use Select class</li>
                      <li>• selectByVisibleText()</li>
                      <li>• selectByIndex()</li>
                      <li>• selectByValue()</li>
                    </ul>
                    <div><strong>Without &lt;select&gt; tag:</strong></div>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• Click dropdown element</li>
                      <li>• Use findElements() for options</li>
                      <li>• Iterate with enhanced for loop</li>
                      <li>• Compare and click desired option</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-3">Alert Handling</h4>
                  <div className="text-red-800 text-sm space-y-2">
                    <div>Switch to alert: <code>driver.switchTo().alert()</code></div>
                    <ul className="text-xs space-y-1">
                      <li>• <code>accept()</code> - Click OK</li>
                      <li>• <code>dismiss()</code> - Click Cancel</li>
                      <li>• <code>getText()</code> - Get alert text</li>
                      <li>• <code>sendKeys()</code> - Enter text</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">Frame Handling</h4>
                  <div className="text-blue-800 text-sm space-y-2">
                    <div>Switch to frame using:</div>
                    <ul className="text-xs space-y-1">
                      <li>• Frame name</li>
                      <li>• Frame ID</li>
                      <li>• Frame index position</li>
                      <li>• Frame WebElement</li>
                    </ul>
                    <div>Navigation:</div>
                    <ul className="text-xs space-y-1">
                      <li>• <code>defaultContent()</code> - To main window</li>
                      <li>• <code>parentFrame()</code> - To parent frame</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">Calendar Handling</h4>
                  <div className="text-green-800 text-sm space-y-2">
                    <div>Steps:</div>
                    <ul className="text-xs space-y-1">
                      <li>1. Click calendar object</li>
                      <li>2. Use while loop for navigation</li>
                      <li>3. Compare month/year values</li>
                      <li>4. Click next/previous buttons</li>
                      <li>5. Find and click desired date</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="mb-16">
          <Quiz questions={quizQuestions} />
        </section>

        {/* Key Points Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Interview Preparation Summary</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">🎯 Core Concepts</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Selenium is a suite of 4 tools</li>
                    <li>• WebDriver is the main automation interface</li>
                    <li>• 8 locators with ID being fastest</li>
                    <li>• CSS Selector vs XPath trade-offs</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">⚡ Performance Tips</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Use ID locator whenever possible</li>
                    <li>• Prefer CSS Selector over XPath</li>
                    <li>• Headless browser for faster execution</li>
                    <li>• Relative XPath for maintainability</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">🔧 Best Practices</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Handle exceptions properly</li>
                    <li>• Use appropriate wait strategies</li>
                    <li>• Switch contexts for frames/alerts</li>
                    <li>• Implement proper element handling</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">🚨 Common Pitfalls</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Not switching to frames before interaction</li>
                    <li>• Using absolute XPath in frameworks</li>
                    <li>• Ignoring wait strategies</li>
                    <li>• Not handling dynamic elements properly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DayLayout>
  );
}