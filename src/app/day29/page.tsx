'use client'
export const metadata = {
  title: 'Day 29: Synchronization - Waits in Selenium | SDET Course',
  description: 'Master synchronization concepts including implicit wait, explicit wait, and fluent wait to handle dynamic web elements effectively.',
  keywords: 'selenium synchronization, implicit wait, explicit wait, fluent wait, webdriverwait, expected conditions, wait strategies',
}
import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day29() {
  const quizQuestions = [
    {
      id: 1,
      question: "What is the main purpose of synchronization in Selenium?",
      options: [
        "To speed up test execution",
        "To match the speed of application under test and test tool",
        "To reduce memory usage",
        "To improve code readability"
      ],
      correctAnswer: 1,
      explanation: "Synchronization matches the speed of application under test and test tool to ensure proper execution flow."
    },
    {
      id: 2,
      question: "Which wait is also called as 'global wait'?",
      options: [
        "Explicit Wait",
        "Fluent Wait",
        "Implicit Wait",
        "Thread.sleep()"
      ],
      correctAnswer: 2,
      explanation: "Implicit Wait is called global wait because it applies to all findElement() and findElements() methods throughout the driver session."
    },
    {
      id: 3,
      question: "What exception is thrown when Explicit Wait times out?",
      options: [
        "NoSuchElementException",
        "TimeoutException",
        "ElementNotVisibleException",
        "StaleElementReferenceException"
      ],
      correctAnswer: 1,
      explanation: "Explicit Wait throws TimeoutException when the expected condition is not met within the specified time."
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
      explanation: "pollingEvery() method in Fluent Wait is used to change the frequency of element searching/polling."
    },
    {
      id: 5,
      question: "What is the return type of implicitlyWait() method?",
      options: [
        "void",
        "WebDriver",
        "Timeouts",
        "Duration"
      ],
      correctAnswer: 2,
      explanation: "implicitlyWait() method returns Timeouts interface, allowing method chaining."
    }
  ];

  return (
    <DayLayout
      dayNumber={29}
      title="Synchronization in Selenium"
      description="Master synchronization concepts including implicit wait, explicit wait, and fluent wait to handle dynamic web elements effectively."
      previousDay="/day28"
      nextDay="/day30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Synchronization Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Understanding Synchronization</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-4">What is Synchronization?</h3>
              <p className="text-blue-800 text-sm mb-4">
                Synchronization is a process of matching the speed of application under test and test tool to ensure proper execution flow. 
                During test execution, some elements take longer to become visible while others appear quickly.
              </p>
              <div className="bg-blue-100 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Why Do We Need Synchronization?</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Web pages load at different speeds</li>
                  <li>• Elements appear dynamically based on user actions</li>
                  <li>• Network latency affects element loading</li>
                  <li>• JavaScript execution can delay element availability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Synchronization */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Types of Synchronization</h2>
          
          <div className="space-y-8">
            {/* Unconditional Synchronization */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">1. Unconditional Synchronization (Static Wait)</h3>
              
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-red-900 mb-2">⚠️ Thread.sleep()</h4>
                <p className="text-red-800 text-sm mb-3">
                  Waits for a fixed amount of time regardless of element availability. Not recommended for production use.
                </p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  Thread.sleep(5000); // Waits exactly 5 seconds
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-yellow-900 mb-2">Disadvantages</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Always waits for full duration</li>
                  <li>• Slows down test execution</li>
                  <li>• Not dynamic or intelligent</li>
                  <li>• Can cause unnecessary delays</li>
                </ul>
              </div>
            </div>

            {/* Conditional Synchronization */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">2. Conditional Synchronization (Dynamic Wait)</h3>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-2">✅ Dynamic Wait Types</h4>
                <p className="text-green-800 text-sm mb-3">
                  Intelligent waits that check conditions periodically and proceed as soon as the condition is met.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="font-medium text-green-900 text-sm">Implicit Wait</div>
                    <div className="text-green-700 text-xs">Global wait for all elements</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="font-medium text-green-900 text-sm">Explicit Wait</div>
                    <div className="text-green-700 text-xs">Local wait with conditions</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="font-medium text-green-900 text-sm">Fluent Wait</div>
                    <div className="text-green-700 text-xs">Customizable polling wait</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implicit Wait */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Implicit Wait</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">Characteristics</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Also called <strong>Global Wait</strong></li>
                    <li>• Applies to all findElement() methods</li>
                    <li>• Dynamic wait behavior</li>
                    <li>• Defined once in Base class</li>
                    <li>• Throws NoSuchElementException on timeout</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    driver.manage().timeouts()<br/>
                    &nbsp;&nbsp;.implicitlyWait(Duration.ofSeconds(30));
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-3">How It Works</h4>
                  <div className="text-purple-800 text-sm space-y-2">
                    <div>1. Set once for entire driver session</div>
                    <div>2. Applies to every findElement() call</div>
                    <div>3. Waits up to specified time</div>
                    <div>4. Proceeds immediately when element found</div>
                    <div>5. Throws exception if timeout reached</div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-3">Example Scenario</h4>
                  <div className="text-orange-800 text-sm">
                    If set to 30 seconds but element appears in 2 seconds, 
                    it will proceed immediately, ignoring remaining 28 seconds.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">Complete Example</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-purple-300">package</span> Tutorial17;<br/><br/>
                
                <span className="text-purple-300">import</span> java.time.Duration;<br/>
                <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/><br/>
                
                <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo1</span> {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://www.facebook.com/reg"</span>);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Set implicit wait"}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(<span className="text-yellow-300">30</span>));<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// All findElement calls will use implicit wait"}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.name(<span className="text-green-300">"firstname"</span>)).sendKeys(<span className="text-green-300">"Ajay"</span>);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.name(<span className="text-green-300">"lastname"</span>)).sendKeys(<span className="text-green-300">"Yadav"</span>);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                {`}`}
              </div>
            </div>
          </div>
        </section>

        {/* Explicit Wait */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Explicit Wait</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">Characteristics</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Also called <strong>Local Wait</strong></li>
                    <li>• Applied to specific elements</li>
                    <li>• Requires ExpectedConditions</li>
                    <li>• More flexible than Implicit Wait</li>
                    <li>• Throws TimeoutException on timeout</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">Common ExpectedConditions</h4>
                  <div className="text-blue-800 text-sm space-y-1">
                    <div>• <code>visibilityOf(element)</code></div>
                    <div>• <code>elementToBeClickable()</code></div>
                    <div>• <code>presenceOfElementLocated()</code></div>
                    <div>• <code>alertIsPresent()</code></div>
                    <div>• <code>frameToBeAvailable()</code></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-3">Basic Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    WebDriverWait wait = new WebDriverWait(<br/>
                    &nbsp;&nbsp;driver, Duration.ofSeconds(30));<br/><br/>
                    
                    wait.until(ExpectedConditions<br/>
                    &nbsp;&nbsp;.visibilityOf(element)).sendKeys("text");
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-3">Advanced Usage</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    wait.until(ExpectedConditions<br/>
                    &nbsp;&nbsp;.elementToBeClickable(By.id("btn")))<br/>
                    &nbsp;&nbsp;.click();
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">Complete Example</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-blue-300">WebDriverWait</span> wait = <span className="text-purple-300">new</span> <span className="text-blue-300">WebDriverWait</span>(driver, Duration.ofSeconds(<span className="text-yellow-300">15</span>));<br/><br/>
                
                <span className="text-gray-400">{"// Wait for element to be visible and interact"}</span><br/>
                wait.until(ExpectedConditions.visibilityOfElementLocated(By.name(<span className="text-green-300">"lastname"</span>)))<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;.sendKeys(<span className="text-green-300">"Yadav"</span>);<br/><br/>
                
                <span className="text-gray-400">{"// Wait for element to be clickable"}</span><br/>
                wait.until(ExpectedConditions.elementToBeClickable(By.xpath(<span className="text-green-300">"//a[text()='Login']"</span>)))<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;.click();<br/><br/>
                
                <span className="text-gray-400">{"// Wait for alert and accept"}</span><br/>
                wait.until(ExpectedConditions.alertIsPresent()).accept();
              </div>
            </div>
          </div>
        </section>

        {/* Fluent Wait */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Fluent Wait</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-3">Advanced Features</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Customizable polling frequency</li>
                    <li>• Exception ignoring capability</li>
                    <li>• Most flexible wait mechanism</li>
                    <li>• Supports custom conditions</li>
                    <li>• Local wait for specific elements</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">Key Methods</h4>
                  <div className="text-blue-800 text-sm space-y-1">
                    <div>• <code>withTimeout()</code> - Maximum wait time</div>
                    <div>• <code>pollingEvery()</code> - Check frequency</div>
                    <div>• <code>ignoring()</code> - Ignore exceptions</div>
                    <div>• <code>until()</code> - Wait condition</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">Basic Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    FluentWait&lt;WebDriver&gt; wait = <br/>
                    &nbsp;&nbsp;new FluentWait&lt;WebDriver&gt;(driver)<br/>
                    &nbsp;&nbsp;.withTimeout(Duration.ofSeconds(30))<br/>
                    &nbsp;&nbsp;.pollingEvery(Duration.ofSeconds(5))<br/>
                    &nbsp;&nbsp;.ignoring(Exception.class);
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-3">Custom Function</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    WebElement element = wait.until(<br/>
                    &nbsp;&nbsp;new Function&lt;WebDriver, WebElement&gt;() {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;public WebElement apply(WebDriver driver) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return driver.findElement(By.id("id"));<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    &nbsp;&nbsp;{`}`});
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">Polling Timeline Example</h4>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-blue-800 text-sm mb-2">
                  <strong>Scenario:</strong> 30-second timeout with 5-second polling
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="bg-blue-200 px-2 py-1 rounded">0s</div>
                  <div className="bg-blue-200 px-2 py-1 rounded">5s</div>
                  <div className="bg-blue-200 px-2 py-1 rounded">10s</div>
                  <div className="bg-blue-200 px-2 py-1 rounded">15s</div>
                  <div className="bg-blue-200 px-2 py-1 rounded">20s</div>
                  <div className="bg-blue-200 px-2 py-1 rounded">25s</div>
                  <div className="bg-red-200 px-2 py-1 rounded">30s (Timeout)</div>
                </div>
                <div className="text-blue-700 text-xs mt-2">
                  Checks for element every 5 seconds until found or 30 seconds elapsed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wait Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Wait Types Comparison</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Feature</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Implicit Wait</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Explicit Wait</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Fluent Wait</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Scope</td>
                    <td className="py-3 px-4">Global (All elements)</td>
                    <td className="py-3 px-4">Local (Specific element)</td>
                    <td className="py-3 px-4">Local (Specific element)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Conditions</td>
                    <td className="py-3 px-4">Element presence only</td>
                    <td className="py-3 px-4">Multiple conditions</td>
                    <td className="py-3 px-4">Custom conditions</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Polling</td>
                    <td className="py-3 px-4">Fixed (500ms)</td>
                    <td className="py-3 px-4">Fixed (500ms)</td>
                    <td className="py-3 px-4">Customizable</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">Exception Handling</td>
                    <td className="py-3 px-4">NoSuchElementException</td>
                    <td className="py-3 px-4">TimeoutException</td>
                    <td className="py-3 px-4">Configurable</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Best Use Case</td>
                    <td className="py-3 px-4">General element waiting</td>
                    <td className="py-3 px-4">Specific conditions</td>
                    <td className="py-3 px-4">Complex scenarios</td>
                  </tr>
                </tbody>
              </table>
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
          <h2 className="text-2xl font-light text-gray-900 mb-8">Key Points Summary</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">🎯 Best Practices</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Use Explicit Wait for specific conditions</li>
                    <li>• Set reasonable timeout values</li>
                    <li>• Avoid Thread.sleep() in production</li>
                    <li>• Combine different wait strategies wisely</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">⚡ Performance Tips</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Use shorter timeouts for fast elements</li>
                    <li>• Implement proper exception handling</li>
                    <li>• Choose appropriate polling intervals</li>
                    <li>• Monitor wait effectiveness in logs</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">🔄 When to Use Which Wait</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• <strong>Implicit:</strong> General element loading</li>
                    <li>• <strong>Explicit:</strong> Specific conditions</li>
                    <li>• <strong>Fluent:</strong> Complex polling needs</li>
                    <li>• <strong>Thread.sleep:</strong> Only for debugging</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">🚨 Common Pitfalls</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Mixing implicit and explicit waits</li>
                    <li>• Using excessive timeout values</li>
                    <li>• Not handling timeout exceptions</li>
                    <li>• Overusing static waits</li>
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