export const metadata = {
  title: 'Day 25: Dropdown Handling - Select Class & Dynamic | SDET Course',
  description: 'Master dropdown handling techniques including Select class for HTML select tags and iteration methods for dynamic dropdowns.',
  keywords: 'dropdown handling, select class, dynamic dropdowns, dropdown automation, selectByVisibleText, custom dropdowns',
}

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day25() {
  return (
    <DayLayout
      dayNumber={25}
      title="Day 25: Dropdown Handling in Selenium - Select Class & Dynamic Dropdowns"
      description="Master dropdown handling techniques in Selenium: Select class for HTML select tags and iteration methods for dynamic dropdowns"
      previousDay="/day24"
      nextDay="/day26"
    >
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Today&apos;s Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Dropdown Fundamentals</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Understanding dropdown types in web applications</li>
                  <li>• HTML select tag vs custom dropdowns</li>
                  <li>• Select class methods and usage</li>
                  <li>• StaleElementReferenceException handling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Advanced Techniques</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Dynamic dropdown iteration methods</li>
                  <li>• Actions class for dropdown handling</li>
                  <li>• JavaScriptExecutor for complex scenarios</li>
                  <li>• Real-world application examples</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dropdown Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Types of Dropdowns in Web Applications</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">1. HTML Select Tag Dropdowns</h3>
              
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-green-800 mb-3">Identification & Handling</h4>
                <p className="text-green-700 text-sm mb-3">
                  First, check the tagname of dropdown. If dropdown tagname starts with <strong>&lt;select&gt;</strong> tag, 
                  then we handle dropdown using <strong>Select class</strong> from Selenium.
                </p>
                
                <div className="bg-white rounded-lg p-3">
                  <h5 className="font-medium text-gray-800 mb-2">HTML Structure Example</h5>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-blue-300">&lt;select</span> <span className="text-yellow-300">id=&quot;country&quot;</span><span className="text-blue-300">&gt;</span><br/>
                    &nbsp;&nbsp;<span className="text-green-300">&lt;option</span> <span className="text-yellow-300">value=&quot;in&quot;</span><span className="text-green-300">&gt;</span>India<span className="text-green-300">&lt;/option&gt;</span><br/>
                    &nbsp;&nbsp;<span className="text-green-300">&lt;option</span> <span className="text-yellow-300">value=&quot;us&quot;</span><span className="text-green-300">&gt;</span>USA<span className="text-green-300">&lt;/option&gt;</span><br/>
                    &nbsp;&nbsp;<span className="text-green-300">&lt;option</span> <span className="text-yellow-300">value=&quot;uk&quot;</span><span className="text-green-300">&gt;</span>UK<span className="text-green-300">&lt;/option&gt;</span><br/>
                    <span className="text-blue-300">&lt;/select&gt;</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-800 mb-3">Select Class Methods</h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-medium text-blue-800 mb-2">selectByVisibleText()</h5>
                    <p className="text-blue-700 text-sm mb-2">Select by the visible text displayed to user</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      select.selectByVisibleText(<span className="text-yellow-300">&quot;India&quot;</span>);
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-medium text-green-800 mb-2">selectByIndex()</h5>
                    <p className="text-green-700 text-sm mb-2">Select by index position (starts from 0)</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      select.selectByIndex(<span className="text-yellow-300">0</span>);
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h5 className="font-medium text-purple-800 mb-2">selectByValue()</h5>
                    <p className="text-purple-700 text-sm mb-2">Select by the value attribute</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      select.selectByValue(<span className="text-yellow-300">&quot;in&quot;</span>);
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">2. Custom/Dynamic Dropdowns</h3>
              
              <div className="bg-orange-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-orange-800 mb-3">Non-Select Tag Dropdowns</h4>
                <p className="text-orange-700 text-sm mb-3">
                  If dropdown tagname starts <strong>without select</strong> tag (div, span, ul, li, a, p, h1-h6, etc.), 
                  we use different approaches.
                </p>
                
                <div className="bg-white rounded-lg p-3">
                  <h5 className="font-medium text-gray-800 mb-2">Three Handling Methods</h5>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li><strong>1.</strong> Using Actions class</li>
                    <li><strong>2.</strong> Using JavaScriptExecutor interface</li>
                    <li><strong>3.</strong> By iterating all dropdown values (Most Common)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Iteration Method */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Method 3: Iterating Dropdown Values</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Step-by-Step Process</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-3">Step 1: Click on Dropdown Element</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    driver.findElement(By.xpath(<span className="text-yellow-300">&quot;//div[@id='dropdown']&quot;</span>)).click();
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-3">Step 2: Find All Dropdown Values</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    List&lt;WebElement&gt; listDropdownValues = <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;driver.findElements(By.xpath(<span className="text-yellow-300">&quot;//div[@class='option']&quot;</span>));
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-3">Step 3: Iterate Using Enhanced For Loop</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-purple-300">for</span>(WebElement value : listDropdownValues) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Step 4: Capture dropdown values"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;String actualValue = value.getText();<br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Step 5: Check if expected value matches"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(actualValue.equals(<span className="text-yellow-300">&quot;Haryana&quot;</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Step 6: Click on the value"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value.click();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Step 7: Break the loop"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">break</span>;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    {`}`}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">⚠️ StaleElementReferenceException</h3>
              
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-medium text-red-800 mb-3">What is StaleElementReferenceException?</h4>
                <p className="text-red-700 text-sm mb-3">
                  This exception occurs when the previous element existed in HTML DOM structure but currently 
                  the element is not present in HTML DOM structure.
                </p>
                
                <div className="bg-white rounded-lg p-3">
                  <h5 className="font-medium text-gray-800 mb-2">Common Cause</h5>
                  <p className="text-gray-600 text-sm">
                    If you don&apos;t break the loop after finding and clicking the expected value, 
                    the loop continues and tries to access elements that are no longer available in DOM.
                  </p>
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
              <h3 className="text-lg font-medium text-gray-900 mb-4">Example 1: DemoQA Practice Form</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Website: <a href="https://demoqa.com/automation-practice-form" className="text-blue-600 hover:underline">https://demoqa.com/automation-practice-form</a>
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-blue-800 mb-3">Task: Select Haryana from State Dropdown</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 mb-2">Complete Java Code</h5>
                    <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono overflow-x-auto">
                      <span className="text-purple-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-purple-300">ChromeDriver</span>();<br/>
                      driver.manage().window().maximize();<br/>
                      driver.get(<span className="text-yellow-300">&quot;https://demoqa.com/automation-practice-form&quot;</span>);<br/>
                      <br/>
                      <span className="text-gray-400">{"// Click on state dropdown"}</span><br/>
                      driver.findElement(By.xpath(<span className="text-yellow-300">&quot;//div[@id='state']/descendant::div[@class=' css-1hwfws3']&quot;</span>)).click();<br/>
                      <br/>
                      <span className="text-gray-400">{"// Find all dropdown values"}</span><br/>
                      List&lt;WebElement&gt; listValues = driver.findElements(<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;By.xpath(<span className="text-yellow-300">&quot;//div[@class=' css-11unzgr']/child::div&quot;</span>));<br/>
                      <br/>
                      <span className="text-gray-400">{"// Iterate and select Uttar Pradesh"}</span><br/>
                      <span className="text-purple-300">for</span>(WebElement value : listValues) {`{`}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;String actualValue = value.getText();<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(actualValue.equals(<span className="text-yellow-300">&quot;Uttar Pradesh&quot;</span>)) {`{`}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value.click();<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">break</span>;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                      {`}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Example 2: OrangeHRM Employee Management</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Website: <a href="https://opensource-demo.orangehrmlive.com/" className="text-blue-600 hover:underline">https://opensource-demo.orangehrmlive.com/</a>
              </p>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-3">Complete Employee Creation Workflow</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 mb-2">Key Dropdown Selections</h5>
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-sm font-medium text-gray-800">Nationality Dropdown:</p>
                        <code className="text-xs text-gray-600">Select &quot;Indian&quot; from nationality options</code>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-sm font-medium text-gray-800">Marital Status:</p>
                        <code className="text-xs text-gray-600">Select &quot;Other&quot; from marital status options</code>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-sm font-medium text-gray-800">User Role:</p>
                        <code className="text-xs text-gray-600">Select &quot;ESS&quot; from user role dropdown</code>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 mb-2">Advanced Techniques Used</h5>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Employee ID capture using getAttribute(&quot;value&quot;)</li>
                      <li>• Actions class for employee name autocomplete</li>
                      <li>• Keyboard navigation with Keys.ARROW_DOWN and Keys.ENTER</li>
                      <li>• Complex XPath with parent/child/sibling navigation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Example 3: Cogmento CRM</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Website: <a href="https://ui.cogmento.com/" className="text-blue-600 hover:underline">https://ui.cogmento.com/</a>
              </p>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-800 mb-3">Contact Creation Workflow</h4>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 mb-2">Multiple Dropdown Selections</h5>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• <strong>Access:</strong> Select dropdown option</li>
                      <li>• <strong>Status:</strong> Select &quot;On Hold&quot; value</li>
                      <li>• <strong>Category:</strong> Select &quot;Customer Category&quot;</li>
                      <li>• <strong>Social Channels:</strong> Select &quot;TikTok&quot;</li>
                      <li>• <strong>Country:</strong> Select &quot;India&quot; value</li>
                      <li>• <strong>Source:</strong> Select &quot;Google&quot; source</li>
                      <li>• <strong>Birthday:</strong> Date picker selection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Techniques */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Advanced Dropdown Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Actions Class Method</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-medium text-blue-800 mb-2">Employee Name Autocomplete</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                    Actions act = <span className="text-purple-300">new</span> Actions(driver);<br/>
                    act.sendKeys(employeeName, <span className="text-yellow-300">&quot;Rohini Patil&quot;</span>)<br/>
                    &nbsp;&nbsp;&nbsp;.build().perform();<br/>
                    <br/>
                    act.keyDown(Keys.ARROW_DOWN).perform();<br/>
                    act.keyDown(Keys.ENTER).build().perform();
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-medium text-green-800 mb-2">Benefits</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Handles autocomplete dropdowns</li>
                    <li>• Keyboard navigation support</li>
                    <li>• More realistic user interaction</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Best Practices</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-medium text-green-800 mb-2">✅ Do&apos;s</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Always break the loop after selection</li>
                    <li>• Use explicit waits for dropdown loading</li>
                    <li>• Verify dropdown is clickable before interaction</li>
                    <li>• Handle StaleElementReferenceException</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="font-medium text-red-800 mb-2">❌ Don&apos;ts</h4>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Don&apos;t forget to break the loop</li>
                    <li>• Avoid hardcoded Thread.sleep()</li>
                    <li>• Don&apos;t assume dropdown structure</li>
                    <li>• Avoid selecting by index for dynamic content</li>
                  </ul>
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
                question: "When should you use the Select class in Selenium for dropdown handling?",
                options: [
                  "For all types of dropdowns",
                  "Only when the dropdown tagname starts with <select>",
                  "When the dropdown has more than 5 options",
                  "When using Chrome browser only"
                ],
                correctAnswer: 1,
                explanation: "The Select class should only be used when the dropdown HTML element uses the <select> tag. For other dropdown implementations (div, span, ul, etc.), you need to use iteration methods or other approaches."
              },
              {
                id: 2,
                question: "What causes StaleElementReferenceException in dropdown handling?",
                options: [
                  "Using wrong XPath locators",
                  "Not breaking the loop after finding and clicking the expected value",
                  "Using Thread.sleep() instead of explicit waits",
                  "Selecting dropdown options too quickly"
                ],
                correctAnswer: 1,
                explanation: "StaleElementReferenceException occurs when you continue iterating through dropdown elements after the DOM has changed (typically after clicking an option). Always break the loop after successful selection."
              },
              {
                id: 3,
                question: "Which Select class method would you use to select an option with value='us'?",
                options: [
                  "selectByVisibleText('us')",
                  "selectByIndex('us')",
                  "selectByValue('us')",
                  "selectByAttribute('us')"
                ],
                correctAnswer: 2,
                explanation: "selectByValue() method is used to select an option based on its 'value' attribute. selectByVisibleText() uses the displayed text, and selectByIndex() uses the position number."
              },
              {
                id: 4,
                question: "What is the correct sequence for handling dynamic dropdowns?",
                options: [
                  "Find all options → Click dropdown → Iterate → Click option → Break",
                  "Click dropdown → Find all options → Iterate → Click option → Break",
                  "Iterate → Click dropdown → Find all options → Click option → Break",
                  "Click dropdown → Iterate → Find all options → Click option → Break"
                ],
                correctAnswer: 1,
                explanation: "The correct sequence is: 1) Click dropdown to open it, 2) Find all dropdown options using findElements(), 3) Iterate through options, 4) Click the matching option, 5) Break the loop to prevent StaleElementReferenceException."
              },
              {
                id: 5,
                question: "Which approach is best for handling autocomplete dropdowns?",
                options: [
                  "Select class methods",
                  "Direct XPath clicking",
                  "Actions class with keyboard navigation",
                  "JavaScript execution"
                ],
                correctAnswer: 2,
                explanation: "Actions class with keyboard navigation (sendKeys, ARROW_DOWN, ENTER) is best for autocomplete dropdowns as it mimics real user behavior and handles dynamic suggestion lists effectively."
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
                <h3 className="font-medium text-gray-800 mb-3">Dropdown Handling</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Use Select class for &lt;select&gt; tag dropdowns</li>
                  <li>• Use iteration method for custom dropdowns</li>
                  <li>• Always break the loop after successful selection</li>
                  <li>• Handle StaleElementReferenceException properly</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Advanced Techniques</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Actions class for autocomplete dropdowns</li>
                  <li>• Keyboard navigation for better user simulation</li>
                  <li>• Explicit waits for dynamic content loading</li>
                  <li>• Complex XPath for nested dropdown structures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </DayLayout>
  )
}