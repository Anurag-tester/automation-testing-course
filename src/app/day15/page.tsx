export const metadata = {
  title: 'Day 15: Checkbox & Radio Button Handling | SDET Course',
  description: 'Learn Selenium checkbox and radio button handling. Master selection states, group operations, and form element automation.',
  keywords: 'selenium checkbox, radio buttons, form elements, selection handling, input elements, form automation',
}
import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day15() {
  return (
    <DayLayout
      dayNumber={15}
      title="Browser Operations & Selenium Locators"
      description="Master browser operations, navigation methods, and understand all Selenium locators with their differences and best practices."
      previousDay="/dropdown-handling-select-class"
      nextDay="/alert-handling-javascript-popups"
    >
      <div className="max-w-4xl mx-auto">
        {/* Browser Operations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Browser Operations</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Essential Browser Methods</h3>
            
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Operation</h4>
                      <div className="space-y-2 text-sm">
                        <div>Open Chrome Browser</div>
                        <div>Open URL</div>
                        <div>Capture Browser Title</div>
                        <div>Capture Browser URL</div>
                        <div>Navigate to URL</div>
                        <div>Navigate Back</div>
                        <div>Navigate Forward</div>
                        <div>Refresh Browser</div>
                        <div>Close Focused Window</div>
                        <div>Close All & Terminate</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div>new ChromeDriver()</div>
                        <div>driver.get("URL")</div>
                        <div>driver.getTitle()</div>
                        <div>driver.getCurrentUrl()</div>
                        <div>driver.navigate().to("URL")</div>
                        <div>driver.navigate().back()</div>
                        <div>driver.navigate().forward()</div>
                        <div>driver.navigate().refresh()</div>
                        <div>driver.close()</div>
                        <div>driver.quit()</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Return Type</h4>
                      <div className="space-y-2 text-sm">
                        <div>ChromeDriver</div>
                        <div>void</div>
                        <div>String</div>
                        <div>String</div>
                        <div>void</div>
                        <div>void</div>
                        <div>void</div>
                        <div>void</div>
                        <div>void</div>
                        <div>void</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Window Management */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Window Management Operations</h3>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Window Operations</h4>
                  <div className="space-y-2 text-sm">
                    <div>• Maximize Browser</div>
                    <div>• Minimize Browser</div>
                    <div>• Full Screen Browser</div>
                    <div>• Change Browser Dimension</div>
                    <div>• Open New Tab</div>
                    <div>• Open New Window</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Methods</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div>driver.manage().window().maximize()</div>
                    <div>driver.manage().window().minimize()</div>
                    <div>driver.manage().window().fullscreen()</div>
                    <div>driver.manage().window().setSize(d)</div>
                    <div>driver.switchTo().newWindow(TAB)</div>
                    <div>driver.switchTo().newWindow(WINDOW)</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">🔧 Browser Dimension Example</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-blue-300">Dimension</span> d = <span className="text-purple-300">new</span> <span className="text-blue-300">Dimension</span>(<span className="text-yellow-300">1000</span>, <span className="text-yellow-300">400</span>);<br/>
                  driver.manage().window().setSize(d);
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selenium Locators */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Selenium Locators</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">8 Different Locators in Selenium</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">1. ID</h4>
                  <p className="text-green-700 text-sm">Fastest locator in Selenium</p>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-sm font-mono mt-2">
                    By.id("elementId")
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">2. Name</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-sm font-mono">
                    By.name("elementName")
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">3. Class Name</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-sm font-mono">
                    By.className("className")
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">4. Tag Name</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-sm font-mono">
                    By.tagName("tagName")
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-2">5. Link Text</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-sm font-mono">
                    By.linkText("exactText")
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">6. Partial Link Text</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-sm font-mono">
                    By.partialLinkText("partialText")
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-medium text-indigo-900 mb-2">7. CSS Selector</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-sm font-mono">
                    By.cssSelector("cssSelector")
                  </div>
                </div>

                <div className="bg-pink-50 rounded-lg p-4">
                  <h4 className="font-medium text-pink-900 mb-2">8. XPath</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-sm font-mono">
                    By.xpath("xpathExpression")
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Locator Comparison */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">CSS Selector vs XPath</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">CSS Selector</h4>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Locate elements in forward direction only</li>
                  <li>• Uses ID, class name, tag name, and attributes</li>
                  <li>• Can locate shadow elements</li>
                  <li>• Generally faster performance</li>
                  <li>• Simpler syntax for basic selections</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-3">XPath</h4>
                <ul className="space-y-2 text-purple-700 text-sm">
                  <li>• Locate elements in forward and backward directions</li>
                  <li>• Uses text, contains(), starts-with(), following, preceding</li>
                  <li>• Cannot locate shadow elements</li>
                  <li>• More powerful for complex selections</li>
                  <li>• Supports parent, child, ancestor, descendant relationships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Method Differences */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Important Method Differences</h2>
          
          <div className="space-y-6">
            {/* Close vs Quit */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">close() vs quit() Method</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-2">close() Method</h4>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li>• Closes focused window only</li>
                    <li>• Does not terminate the session</li>
                    <li>• Other windows remain open</li>
                    <li>• WebDriver instance still active</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">quit() Method</h4>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• Closes all windows and tabs</li>
                    <li>• Terminates the WebDriver session</li>
                    <li>• Releases system resources</li>
                    <li>• WebDriver instance becomes inactive</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Get vs Navigate */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">get() vs navigate().to() Method</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">get() Method</h4>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Waits until all components are loaded</li>
                    <li>• Present in WebDriver interface</li>
                    <li>• Blocks until page is fully loaded</li>
                    <li>• Better for initial page loading</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">navigate().to() Method</h4>
                  <ul className="space-y-1 text-orange-700 text-sm">
                    <li>• Does not wait for all components</li>
                    <li>• Present in Navigation interface</li>
                    <li>• Non-blocking navigation</li>
                    <li>• Better for quick navigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Element Operations Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Element Operations Summary</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Text Box Operations</h4>
                <div className="text-sm space-y-1">
                  <div>• isDisplayed() → boolean | isEnabled() → boolean</div>
                  <div>• sendKeys("value") → void | getAttribute("value") → String</div>
                  <div>• clear() → void</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Radio Button & Checkbox Operations</h4>
                <div className="text-sm space-y-1">
                  <div>• isDisplayed() → boolean | isEnabled() → boolean</div>
                  <div>• isSelected() → boolean | click() → void</div>
                  <div>• isSelected() → boolean (after click)</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Button Operations</h4>
                <div className="text-sm space-y-1">
                  <div>• isDisplayed() → boolean | isEnabled() → boolean</div>
                  <div>• click() → void</div>
                  <div>• getText() or getAttribute() → String (based on tagName)</div>
                  <div>• getCssValue("background-color") → String</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Links & Images Operations</h4>
                <div className="text-sm space-y-1">
                  <div>• isDisplayed() → boolean | isEnabled() → boolean</div>
                  <div>• click() → void (for clickable elements)</div>
                  <div>• getText() → String | getAttribute("href"/"src") → String</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assignments */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Assignments</h2>
          
          <div className="space-y-6">
            {/* Assignment 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Assignment 1: Browser Navigation</h3>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Tasks:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Open a browser and maximize window</li>
                  <li>• Open Wikipedia URL</li>
                  <li>• Click on English Link</li>
                  <li>• Search "INDIA" and click search button</li>
                  <li>• Capture browser title and URL</li>
                  <li>• Navigate to RedBus application</li>
                  <li>• Refresh page, navigate back, navigate forward</li>
                  <li>• Close all windows and terminate session</li>
                </ul>
              </div>
            </div>

            {/* Assignment 2 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Assignment 2: E-commerce Flow</h3>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">URL: https://www.saucedemo.com/inventory.html</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Login to the application</li>
                  <li>• Select "Price (high to low)" sorting</li>
                  <li>• Click on first "Add to Cart" button</li>
                  <li>• Click on shopping cart container</li>
                  <li>• Click on "Checkout" button</li>
                  <li>• Enter first name, last name, and zip code</li>
                  <li>• Click on "Continue" button</li>
                  <li>• Click on "Finish" button</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 15 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "Which is the fastest locator in Selenium?",
              options: ["name", "id", "className", "xpath"],
              correctAnswer: 1,
              explanation: "ID is the fastest locator in Selenium because it directly targets a unique element identifier, making element location very efficient."
            },
            {
              id: 2,
              question: "What is the main difference between close() and quit() methods?",
              options: ["No difference", "close() terminates session, quit() doesn't", "quit() closes all windows and terminates session", "close() is faster than quit()"],
              correctAnswer: 2,
              explanation: "close() method closes only the focused window and does not terminate the session, while quit() method closes all windows and terminates the WebDriver session."
            },
            {
              id: 3,
              question: "Which locator can locate elements in both forward and backward directions?",
              options: ["CSS Selector", "XPath", "ID", "Class Name"],
              correctAnswer: 1,
              explanation: "XPath can locate elements in both forward and backward directions using various axes like parent, child, ancestor, descendant, following, and preceding."
            },
            {
              id: 4,
              question: "What is the difference between get() and navigate().to() methods?",
              options: ["get() is faster", "navigate().to() waits for all components", "get() waits for all components to load", "No difference"],
              correctAnswer: 2,
              explanation: "get() method waits until all components are loaded in the web page, while navigate().to() method does not wait for all components to be loaded."
            },
            {
              id: 5,
              question: "Which method is used to open a new tab in Selenium?",
              options: ["driver.newTab()", "driver.switchTo().newWindow(WindowType.TAB)", "driver.openTab()", "driver.createTab()"],
              correctAnswer: 1,
              explanation: "driver.switchTo().newWindow(WindowType.TAB) is used to open a new tab, while driver.switchTo().newWindow(WindowType.WINDOW) opens a new window."
            }
          ]}
        />
      </div>
    </DayLayout>
  );
}