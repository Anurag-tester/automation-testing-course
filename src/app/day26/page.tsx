export const metadata = {
  title: 'Day 26: Dynamic Table & Calendar Handling | SDET Course',
  description: 'Master dynamic calendar navigation and date selection techniques using while loops and enhanced for loops in Selenium WebDriver.',
  keywords: 'dynamic calendar, calendar handling, date selection, table operations, calendar automation, date picker automation',
}

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day26() {
  return (
    <DayLayout
      dayNumber={26}
      title="Day 26: Dynamic Table & Calendar Handling in Selenium"
      description="Master dynamic calendar navigation and date selection techniques using while loops and enhanced for loops in Selenium WebDriver"
      previousDay="/day25"
      nextDay="/day27"
    >
      {/* Course Overview */}
      <section className="mb-16">
        <div className="bg-purple-50 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Today's Learning Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Calendar Navigation</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Dynamic calendar handling techniques</li>
                <li>• While loop for month/year navigation</li>
                <li>• Enhanced for loop for date selection</li>
                <li>• Real-world calendar implementations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Practical Applications</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• RedBus calendar automation</li>
                <li>• Goibibo flight booking dates</li>
                <li>• Complex XPath for date elements</li>
                <li>• Assignment: Complete booking workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Handling Strategy */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Dynamic Calendar Handling Strategy</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Step-by-Step Approach</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-3">Step 1: Click on Calendar Object</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  driver.findElement(By.xpath(<span className="text-yellow-300">"//calendar-xpath"</span>)).click();
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-3">Step 2: Navigate to Target Month/Year</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-purple-300">while</span>(<span className="text-yellow-300">true</span>) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">// Step 3: Capture current month and year</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;String actualMonthAndYear = driver.findElement(<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By.xpath(<span className="text-yellow-300">"//month-year-xpath"</span>)).getText();<br/>
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">// Step 4: Compare with expected month/year</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(actualMonthAndYear.equals(<span className="text-yellow-300">"December 2025"</span>)) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">break</span>;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`} <span className="text-purple-300">else</span> {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">// Step 5: Click next button</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.xpath(<span className="text-yellow-300">"//next-button-xpath"</span>)).click();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-800 mb-3">Step 6-10: Select Specific Date</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-gray-400">// Step 6: Find all dates</span><br/>
                  List&lt;WebElement&gt; listDates = driver.findElements(<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;By.xpath(<span className="text-yellow-300">"//date-elements-xpath"</span>));<br/>
                  <br/>
                  <span className="text-gray-400">// Step 7: Iterate through dates</span><br/>
                  <span className="text-purple-300">for</span>(WebElement date : listDates) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">// Step 8: Capture actual date</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;String actualDate = date.getText();<br/>
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">// Step 9: Compare with expected date</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(actualDate.equals(<span className="text-yellow-300">"10"</span>)) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">// Step 10: Click and break</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date.click();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">break</span>;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RedBus Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Example 1: RedBus Calendar</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Task: Select 15 December 2025</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Website: <a href="https://www.redbus.in/" className="text-blue-600 hover:underline">https://www.redbus.in/</a>
            </p>
            
            <div className="bg-red-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-red-800 mb-3">Complete Implementation</h4>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-3">
                  <h5 className="font-medium text-gray-800 mb-2">Java Code Implementation</h5>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono overflow-x-auto">
                    <span className="text-purple-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-purple-300">ChromeDriver</span>();<br/>
                    driver.manage().window().maximize();<br/>
                    driver.get(<span className="text-yellow-300">"https://www.redbus.in/"</span>);<br/>
                    <br/>
                    <span className="text-gray-400">// Step 1: Click on calendar</span><br/>
                    driver.findElement(By.xpath(<span className="text-yellow-300">"//div[@class='dojWrapper___42f532']"</span>)).click();<br/>
                    <br/>
                    <span className="text-gray-400">// Step 2-5: Navigate to target month</span><br/>
                    <span className="text-purple-300">while</span>(<span className="text-yellow-300">true</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;String actualMonthAndYear = driver.findElement(<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By.xpath(<span className="text-yellow-300">"//p[@class='monthYear___fe577e']"</span>)).getText();<br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(actualMonthAndYear.equals(<span className="text-yellow-300">"April 2026"</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">break</span>;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`} <span className="text-purple-300">else</span> {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.xpath(<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"//i[@class='icon icon-arrow arrow___19a681 right___65d0b5 ']"</span>)).click();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    {`}`}<br/>
                    <br/>
                    <span className="text-gray-400">// Step 6-10: Select specific date</span><br/>
                    List&lt;WebElement&gt; allDates = driver.findElements(<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;By.xpath(<span className="text-yellow-300">"//div[@class='dateWrap___8a859f']/descendant::span"</span>));<br/>
                    <br/>
                    <span className="text-purple-300">for</span>(WebElement date : allDates) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;String actualDate = date.getText();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(actualDate.equals(<span className="text-yellow-300">"7"</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date.click();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">break</span>;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    {`}`}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-3">Key XPath Locators</h4>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-2">
                  <p className="text-sm font-medium text-gray-800">Calendar Trigger:</p>
                  <code className="text-xs text-gray-600">//div[@class='dojWrapper___42f532']</code>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <p className="text-sm font-medium text-gray-800">Month/Year Display:</p>
                  <code className="text-xs text-gray-600">//p[@class='monthYear___fe577e']</code>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <p className="text-sm font-medium text-gray-800">Next Button:</p>
                  <code className="text-xs text-gray-600">//i[@class='icon icon-arrow arrow___19a681 right___65d0b5 ']</code>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <p className="text-sm font-medium text-gray-800">Date Elements:</p>
                  <code className="text-xs text-gray-600">//div[@class='dateWrap___8a859f']/descendant::span</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goibibo Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Example 2: Goibibo Calendar</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Task: Select 24 March 2026</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Website: <a href="https://www.goibibo.com/" className="text-blue-600 hover:underline">https://www.goibibo.com/</a>
            </p>
            
            <div className="bg-orange-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-orange-800 mb-3">Different Calendar Structure</h4>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-3">
                  <h5 className="font-medium text-gray-800 mb-2">Goibibo Implementation</h5>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono overflow-x-auto">
                    <span className="text-purple-300">WebDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-purple-300">ChromeDriver</span>();<br/>
                    driver.manage().window().maximize();<br/>
                    driver.get(<span className="text-yellow-300">"https://www.goibibo.com/"</span>);<br/>
                    <br/>
                    <span className="text-gray-400">// Click on departure date</span><br/>
                    driver.findElement(By.xpath(<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"//span[text()='Departure']/following-sibling::p[@class='sc-12foipm-4 czGBLf fswWidgetTitle']"</span>)).click();<br/>
                    <br/>
                    <span className="text-gray-400">// Navigate to target month</span><br/>
                    <span className="text-purple-300">while</span>(<span className="text-yellow-300">true</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;String actualMonthAndYear = driver.findElement(By.xpath(<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"//div[@class='DayPicker-Month']/preceding-sibling::div/child::div[@class='DayPicker-Caption']/child::div"</span>)).getText();<br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(actualMonthAndYear.equals(<span className="text-yellow-300">"March 2026"</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">break</span>;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`} <span className="text-purple-300">else</span> {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.xpath(<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"//span[@class='DayPicker-NavButton DayPicker-NavButton--next']"</span>)).click();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    {`}`}<br/>
                    <br/>
                    <span className="text-gray-400">// Select specific date</span><br/>
                    List&lt;WebElement&gt; allDates = driver.findElements(By.xpath(<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">"//div[@class='DayPicker-Month']/preceding-sibling::div/child::div[@class='DayPicker-Body']/descendant::p"</span>));<br/>
                    <br/>
                    <span className="text-purple-300">for</span>(WebElement date : allDates) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;String actualDate = date.getText();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(actualDate.equals(<span className="text-yellow-300">"24"</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date.click();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">break</span>;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    {`}`}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-3">Complex XPath Analysis</h4>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-2">
                  <p className="text-sm font-medium text-gray-800">Departure Trigger:</p>
                  <code className="text-xs text-gray-600">//span[text()='Departure']/following-sibling::p</code>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <p className="text-sm font-medium text-gray-800">Month/Year Caption:</p>
                  <code className="text-xs text-gray-600">//div[@class='DayPicker-Caption']/child::div</code>
                </div>
                <div className="bg-white rounded-lg p-2">
                  <p className="text-sm font-medium text-gray-800">Date Elements:</p>
                  <code className="text-xs text-gray-600">//div[@class='DayPicker-Body']/descendant::p</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assignment Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Assignment: Complete Goibibo Booking</h2>
        
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Complete Flight Booking Workflow</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Website: <a href="https://www.goibibo.com/" className="text-blue-600 hover:underline">https://www.goibibo.com/</a>
          </p>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">Required Tasks</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>Step 1:</strong> Click on round trip radio button</li>
                <li>• <strong>Step 2:</strong> Enter "Pune" in From dropdown</li>
                <li>• <strong>Step 3:</strong> Enter "Delhi" in To dropdown</li>
                <li>• <strong>Step 4:</strong> Select departure date: 28 November 2025</li>
                <li>• <strong>Step 5:</strong> Select return date: 4 December 2025</li>
                <li>• <strong>Step 6:</strong> Add 5 adults passengers</li>
                <li>• <strong>Step 7:</strong> Add 2 children</li>
                <li>• <strong>Step 8:</strong> Select Premium economy class</li>
                <li>• <strong>Step 9:</strong> Click on Done button</li>
                <li>• <strong>Step 10:</strong> Click on Search Flight button</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-3">Complex XPath for Date Selection</h4>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-gray-800 mb-2">Advanced Date Locator:</p>
                <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono overflow-x-auto">
                  <span className="text-yellow-300">//div[@class='rdrMonth']/preceding-sibling::div/descendant::button[@class='rdrDay' or @class='rdrDay rdrDayWeekend rdrDayEndOfWeek' or @class='rdrDay rdrDayWeekend rdrDayStartOfWeek' or @class='rdrDay rdrDayStartOfMonth' or @class='rdrDay rdrDayEndOfMonth']/descendant::span[@class='date']</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">This XPath handles multiple date button classes for comprehensive date selection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Best Practices for Calendar Handling</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">✅ Do's</h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-3">
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Always use while(true) for month navigation</li>
                  <li>• Break the loop immediately after finding target</li>
                  <li>• Use Thread.sleep() for calendar loading</li>
                  <li>• Capture month/year text for comparison</li>
                  <li>• Use enhanced for loop for date iteration</li>
                  <li>• Handle different calendar structures</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">❌ Don'ts</h3>
            
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-3">
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Don't forget to break while loop</li>
                  <li>• Avoid hardcoded date selections</li>
                  <li>• Don't assume calendar structure</li>
                  <li>• Avoid clicking without verification</li>
                  <li>• Don't use fixed wait times</li>
                  <li>• Avoid complex nested loops</li>
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
              question: "What is the correct approach for navigating to a specific month in a dynamic calendar?",
              options: [
                "Use a for loop with fixed iterations",
                "Use while(true) loop with month/year comparison",
                "Click next button multiple times without checking",
                "Use Thread.sleep() and direct date clicking"
              ],
              correctAnswer: 1,
              explanation: "Use while(true) loop to continuously navigate months until you reach the target month/year, then break the loop. This handles any future date dynamically."
            },
            {
              id: 2,
              question: "Why is it important to break the loop after clicking a date in calendar handling?",
              options: [
                "To improve performance",
                "To prevent StaleElementReferenceException",
                "To save memory",
                "To avoid clicking multiple dates"
              ],
              correctAnswer: 3,
              explanation: "Breaking the loop after clicking the target date prevents the iteration from continuing and accidentally clicking other dates or causing errors."
            },
            {
              id: 3,
              question: "Which method is used to capture the current month and year in calendar navigation?",
              options: [
                "getAttribute()",
                "getText()",
                "getTitle()",
                "getValue()"
              ],
              correctAnswer: 1,
              explanation: "getText() method is used to capture the visible text content of the month/year element for comparison with the expected month/year."
            },
            {
              id: 4,
              question: "What type of loop is best for iterating through date elements in a calendar?",
              options: [
                "while loop",
                "do-while loop", 
                "enhanced for loop",
                "nested for loop"
              ],
              correctAnswer: 2,
              explanation: "Enhanced for loop (for-each) is best for iterating through date elements as it's cleaner and automatically handles the collection iteration."
            },
            {
              id: 5,
              question: "In the RedBus example, what XPath is used to find all date elements?",
              options: [
                "//div[@class='dateWrap___8a859f']",
                "//div[@class='dateWrap___8a859f']/descendant::span",
                "//span[@class='date']",
                "//div[@class='calendar-date']"
              ],
              correctAnswer: 1,
              explanation: "The XPath //div[@class='dateWrap___8a859f']/descendant::span is used to find all date span elements within the date wrapper divs in RedBus calendar."
            }
          ]}
        />
      </section>

      {/* Key Points Summary */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Key Points Summary</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Calendar Navigation Steps</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>Step 1:</strong> Click calendar trigger element</li>
                <li>• <strong>Step 2-5:</strong> while(true) loop for month navigation</li>
                <li>• <strong>Step 6:</strong> Find all date elements using findElements()</li>
                <li>• <strong>Step 7-10:</strong> Enhanced for loop for date selection</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Real-World Applications</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>RedBus:</strong> Bus booking date selection</li>
                <li>• <strong>Goibibo:</strong> Flight departure/return dates</li>
                <li>• <strong>Complex XPath:</strong> Multiple date button classes</li>
                <li>• <strong>Assignment:</strong> Complete booking workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </DayLayout>
  )
}