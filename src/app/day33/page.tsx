'use client'
export const metadata = {
  title: 'Day 33: Advanced Selenium & Exception Handling | SDET Course',
  description: 'Deep dive into synchronization, flaky scenarios, exception handling, and advanced Selenium concepts for robust test automation.',
  keywords: 'advanced selenium, exception handling, flaky tests, selenium exceptions, test stability, robust automation, selenium debugging',
}
import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day33() {
  const quizQuestions = [
    {
      id: 1,
      question: "What is a flaky scenario in Selenium?",
      options: [
        "A test that always fails",
        "A test that sometimes passes and sometimes fails",
        "A test that takes too long to execute",
        "A test with syntax errors"
      ],
      correctAnswer: 1,
      explanation: "A flaky scenario means the same test case sometimes passes and sometimes fails when executed, usually due to timing or synchronization issues."
    },
    {
      id: 2,
      question: "Which exception is thrown when an element exists previously but not anymore in DOM?",
      options: [
        "NoSuchElementException",
        "ElementNotFoundException",
        "StaleElementReferenceException",
        "TimeoutException"
      ],
      correctAnswer: 2,
      explanation: "StaleElementReferenceException is thrown when an element existed previously in HTML DOM but no longer exists after some operation."
    },
    {
      id: 3,
      question: "What library is used to take full page screenshots in Selenium?",
      options: [
        "Apache Commons",
        "AShot",
        "TestNG",
        "Selenium Grid"
      ],
      correctAnswer: 1,
      explanation: "AShot library is used to take full page screenshots by scrolling and combining multiple screenshots."
    },
    {
      id: 4,
      question: "Which method is used to change element searching frequency in Fluent Wait?",
      options: [
        "withTimeout()",
        "pollingEvery()",
        "ignoring()",
        "until()"
      ],
      correctAnswer: 1,
      explanation: "pollingEvery() method in Fluent Wait is used to change the element searching time/frequency."
    },
    {
      id: 5,
      question: "What causes SessionNotCreatedException?",
      options: [
        "Missing WebDriver library",
        "Browser and driver version mismatch",
        "Invalid locator",
        "Network connectivity issues"
      ],
      correctAnswer: 1,
      explanation: "SessionNotCreatedException occurs when there's a mismatch between browser version and WebDriver version."
    }
  ];

  return (
    <DayLayout
      dayNumber={33}
      title="Advanced Selenium Concepts & Exception Handling"
      description="Deep dive into synchronization, flaky scenarios, exception handling, and advanced Selenium concepts for robust test automation."
      previousDay="/day32"
      nextDay="/day34"
    >
      <div className="max-w-4xl mx-auto">
        {/* Synchronization Deep Dive */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Synchronization in Detail</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-4">What is Synchronization?</h3>
              <p className="text-blue-800 text-sm mb-4">
                Synchronization is the process of matching the speed of the application under test and the test tool 
                to maintain proper test execution flow. Different elements load at different speeds, requiring proper timing strategies.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Why Synchronization?</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Elements load at different speeds</li>
                    <li>• Network latency variations</li>
                    <li>• JavaScript execution delays</li>
                    <li>• Dynamic content loading</li>
                    <li>• Server response variations</li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Types of Synchronization</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Unconditional (Static Wait)</li>
                    <li>• Conditional (Dynamic Wait)</li>
                    <li>• - Implicit Wait</li>
                    <li>• - Explicit Wait</li>
                    <li>• - Fluent Wait</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wait Strategies Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Wait Strategies Detailed Comparison</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-6">
              {/* Implicit vs Explicit */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-3">Implicit Wait vs Explicit Wait</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-green-200">
                        <th className="text-left py-2 px-3 font-medium text-green-900">Aspect</th>
                        <th className="text-left py-2 px-3 font-medium text-green-900">Implicit Wait</th>
                        <th className="text-left py-2 px-3 font-medium text-green-900">Explicit Wait</th>
                      </tr>
                    </thead>
                    <tbody className="text-green-800">
                      <tr className="border-b border-green-100">
                        <td className="py-2 px-3 font-medium">Scope</td>
                        <td className="py-2 px-3">All elements (Global)</td>
                        <td className="py-2 px-3">Single element (Local)</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="py-2 px-3 font-medium">Expected Conditions</td>
                        <td className="py-2 px-3">Not required</td>
                        <td className="py-2 px-3">Required</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="py-2 px-3 font-medium">Exception</td>
                        <td className="py-2 px-3">NoSuchElementException</td>
                        <td className="py-2 px-3">TimeoutException</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium">Interface</td>
                        <td className="py-2 px-3">Timeouts interface</td>
                        <td className="py-2 px-3">WebDriverWait class</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Explicit vs Fluent */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-3">Explicit Wait vs Fluent Wait</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <h5 className="font-medium text-purple-900 text-sm mb-2">Similarities</h5>
                    <ul className="text-purple-800 text-xs space-y-1">
                      <li>• Both are dynamic waits</li>
                      <li>• Both apply to single elements</li>
                      <li>• Both require ExpectedConditions</li>
                      <li>• Both work with findElement/findElements</li>
                    </ul>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3">
                    <h5 className="font-medium text-purple-900 text-sm mb-2">Key Differences</h5>
                    <ul className="text-purple-800 text-xs space-y-1">
                      <li>• Fluent Wait: Custom polling frequency</li>
                      <li>• Fluent Wait: Exception ignoring capability</li>
                      <li>• Explicit Wait: Fixed polling (500ms)</li>
                      <li>• Fluent Wait: FluentWait class</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flaky Scenarios */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Flaky Scenarios in Selenium</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-6">
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-medium text-red-900 mb-3">What are Flaky Tests?</h4>
                <p className="text-red-800 text-sm mb-4">
                  Flaky scenarios occur when the same test case sometimes passes and sometimes fails during execution, 
                  creating unreliable test results and reducing confidence in the test suite.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <h5 className="font-medium text-red-900 text-sm mb-2">Common Causes</h5>
                    <ul className="text-red-800 text-xs space-y-1">
                      <li>• Timing and synchronization issues</li>
                      <li>• Network latency variations</li>
                      <li>• Dynamic content loading</li>
                      <li>• Race conditions</li>
                      <li>• Environment dependencies</li>
                      <li>• Asynchronous operations</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 rounded-lg p-3">
                    <h5 className="font-medium text-red-900 text-sm mb-2">Solutions</h5>
                    <ul className="text-red-800 text-xs space-y-1">
                      <li>• Implement proper wait strategies</li>
                      <li>• Use Explicit/Fluent waits</li>
                      <li>• Add appropriate ExpectedConditions</li>
                      <li>• Stabilize test environment</li>
                      <li>• Handle dynamic elements properly</li>
                      <li>• Implement retry mechanisms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-yellow-900 mb-3">Flaky Test Resolution Strategy</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Instead of direct element interaction"}</span><br/>
                  driver.findElement(By.id(<span className="text-green-300">"submit"</span>)).click(); <span className="text-red-300">// Flaky</span><br/><br/>
                  
                  <span className="text-gray-400">{"// Use explicit wait with expected conditions"}</span><br/>
                  <span className="text-blue-300">WebDriverWait</span> wait = <span className="text-purple-300">new</span> <span className="text-blue-300">WebDriverWait</span>(driver, Duration.ofSeconds(<span className="text-yellow-300">10</span>));<br/>
                  <span className="text-blue-300">WebElement</span> element = wait.until(<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ExpectedConditions</span>.elementToBeClickable(By.id(<span className="text-green-300">"submit"</span>))<br/>
                  );<br/>
                  element.click(); <span className="text-green-300">// Stable</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selenium Exceptions */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Selenium Exceptions & Handling</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-900 mb-3">Common Selenium Exceptions</h4>
                <p className="text-orange-800 text-sm mb-4">
                  Understanding and properly handling exceptions is crucial for creating robust and maintainable test automation scripts.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-medium text-red-900 text-sm mb-2">WebDriverException</h5>
                    <div className="text-red-800 text-xs mb-2">
                      <strong>Cause:</strong> WebDriver library not found in pom.xml or .m2 repository
                    </div>
                    <div className="text-red-700 text-xs">
                      <strong>Solution:</strong> Check WebDriver dependency in pom.xml
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-medium text-red-900 text-sm mb-2">SessionNotCreatedException</h5>
                    <div className="text-red-800 text-xs mb-2">
                      <strong>Cause:</strong> Browser and driver version mismatch
                    </div>
                    <div className="text-red-700 text-xs">
                      <strong>Solution:</strong> Update driver to match browser version
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-medium text-red-900 text-sm mb-2">NoSuchElementException</h5>
                    <div className="text-red-800 text-xs mb-2">
                      <strong>Cause:</strong> Element not found in HTML DOM
                    </div>
                    <div className="text-red-700 text-xs">
                      <strong>Solution:</strong> Verify locator and add proper waits
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-medium text-red-900 text-sm mb-2">TimeoutException</h5>
                    <div className="text-red-800 text-xs mb-2">
                      <strong>Cause:</strong> Element not found within specified wait time
                    </div>
                    <div className="text-red-700 text-xs">
                      <strong>Solution:</strong> Increase timeout or fix locator
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-medium text-red-900 text-sm mb-2">StaleElementReferenceException</h5>
                    <div className="text-red-800 text-xs mb-2">
                      <strong>Cause:</strong> Element existed before but not in current DOM
                    </div>
                    <div className="text-red-700 text-xs">
                      <strong>Solution:</strong> Re-locate element or refresh page
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-medium text-red-900 text-sm mb-2">ElementClickInterceptedException</h5>
                    <div className="text-red-800 text-xs mb-2">
                      <strong>Cause:</strong> Element is hidden or overlapped
                    </div>
                    <div className="text-red-700 text-xs">
                      <strong>Solution:</strong> Wait for element visibility or scroll
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-medium text-red-900 text-sm mb-2">NoSuchWindowException</h5>
                    <div className="text-red-800 text-xs mb-2">
                      <strong>Cause:</strong> Trying to switch to non-existent window
                    </div>
                    <div className="text-red-700 text-xs">
                      <strong>Solution:</strong> Verify window exists before switching
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-medium text-red-900 text-sm mb-2">NoAlertPresentException</h5>
                    <div className="text-red-800 text-xs mb-2">
                      <strong>Cause:</strong> Alert popup not present or already closed
                    </div>
                    <div className="text-red-700 text-xs">
                      <strong>Solution:</strong> Wait for alert presence before handling
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Exception Handling Best Practices</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">try</span> {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Selenium operations"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> element = driver.findElement(By.id(<span className="text-green-300">"submit"</span>));<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;element.click();<br/>
                  {`}`} <span className="text-purple-300">catch</span> (<span className="text-blue-300">StaleElementReferenceException</span> e) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Re-locate element"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> element = driver.findElement(By.id(<span className="text-green-300">"submit"</span>));<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;element.click();<br/>
                  {`}`} <span className="text-purple-300">catch</span> (<span className="text-blue-300">TimeoutException</span> e) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">System</span>.out.println(<span className="text-green-300">"Element not found within timeout"</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">throw</span> e;<br/>
                  {`}`} <span className="text-purple-300">catch</span> (<span className="text-blue-300">NoSuchElementException</span> e) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">System</span>.out.println(<span className="text-green-300">"Element not found: "</span> + e.getMessage());<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">return</span> <span className="text-purple-300">false</span>;<br/>
                  {`}`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Screenshot Techniques */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Advanced Screenshot Techniques</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">Screenshot Strategies</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <h5 className="font-medium text-blue-900 text-sm mb-2">Regular Screenshot</h5>
                    <ul className="text-blue-800 text-xs space-y-1">
                      <li>• TakesScreenshot interface</li>
                      <li>• getScreenshotAs(OutputType.FILE)</li>
                      <li>• FileUtils.copyFile() method</li>
                      <li>• Captures visible viewport only</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3">
                    <h5 className="font-medium text-blue-900 text-sm mb-2">Full Page Screenshot</h5>
                    <ul className="text-blue-800 text-xs space-y-1">
                      <li>• AShot library dependency</li>
                      <li>• shootingStrategy() method</li>
                      <li>• viewPortPasting() for scrolling</li>
                      <li>• ImageIO.write() for saving</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Full Page Screenshot Implementation</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Step 1: Create AShot object"}</span><br/>
                  <span className="text-blue-300">AShot</span> ashot = <span className="text-purple-300">new</span> <span className="text-blue-300">AShot</span>();<br/><br/>
                  
                  <span className="text-gray-400">{"// Step 2: Set shooting strategy with scroll timing"}</span><br/>
                  ashot.shootingStrategy(<span className="text-blue-300">ShootingStrategies</span>.viewPortPasting(<span className="text-yellow-300">1000</span>));<br/><br/>
                  
                  <span className="text-gray-400">{"// Step 3: Take screenshot and get BufferedImage"}</span><br/>
                  <span className="text-blue-300">BufferedImage</span> source = ashot.takeScreenshot(driver).getImage();<br/><br/>
                  
                  <span className="text-gray-400">{"// Step 4: Define destination file"}</span><br/>
                  <span className="text-blue-300">File</span> destination = <span className="text-purple-300">new</span> <span className="text-blue-300">File</span>(<span className="text-green-300">"fullpage-screenshot.png"</span>);<br/><br/>
                  
                  <span className="text-gray-400">{"// Step 5: Save using ImageIO"}</span><br/>
                  <span className="text-blue-300">ImageIO</span>.write(source, <span className="text-green-300">"PNG"</span>, destination);
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Knowledge Check</h2>
          <Quiz questions={quizQuestions} />
        </section>

        {/* Key Points Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Advanced Concepts Summary</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">🎯 Synchronization Mastery</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Use Explicit Wait for specific conditions</li>
                    <li>• Fluent Wait for complex polling scenarios</li>
                    <li>• Implicit Wait as baseline for all elements</li>
                    <li>• Avoid mixing different wait strategies</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">⚡ Flaky Test Prevention</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Implement proper wait strategies</li>
                    <li>• Use ExpectedConditions appropriately</li>
                    <li>• Handle dynamic content properly</li>
                    <li>• Stabilize test environment</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">🔧 Exception Handling</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Implement try-catch blocks strategically</li>
                    <li>• Handle StaleElementReference by re-locating</li>
                    <li>• Use appropriate recovery mechanisms</li>
                    <li>• Log exceptions with meaningful messages</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">🚨 Best Practices</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Keep browser and driver versions in sync</li>
                    <li>• Use framework-level wait utilities</li>
                    <li>• Implement proper screenshot strategies</li>
                    <li>• Create reusable exception handling methods</li>
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