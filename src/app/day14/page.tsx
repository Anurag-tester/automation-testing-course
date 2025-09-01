'use client'
export const metadata = {
  title: 'Day 14: Dropdown Handling with Select Class | SDET Course',
  description: 'Learn Selenium dropdown handling using Select class. Master selectByValue, selectByText, selectByIndex, and multi-select dropdowns.',
  keywords: 'selenium dropdown, select class, selectByValue, selectByText, selectByIndex, dropdown automation, multi-select dropdown',
}
import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day14() {
  return (
    <DayLayout
      dayNumber={14}
      title="CSS Selectors & Web Element Operations"
      description="Master CSS selectors and learn comprehensive web element operations including text boxes, radio buttons, checkboxes, buttons, links, and images."
      previousDay="/day13"
      nextDay="/day15"
    >
      <div className="max-w-4xl mx-auto">
        {/* CSS Selectors */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">CSS Selector Approaches</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <p className="text-gray-600 mb-6 text-sm">
              CSS Selector in Selenium is used to locate elements in web pages. We can locate elements using different approaches:
            </p>
            
            <div className="grid gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">1. By ID</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  #Id
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">2. By Class Name</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  .className
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">3. By Tag Name</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  tagName
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">4. Tag Name with ID</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  tagName#Id
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">5. Tag Name with Class</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  tagName.className
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">6. Tag Name with Attribute</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  tagName[attribute='value']
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">7. Ancestor and Descendant</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  ParentTagName ChildTagName
                </div>
              </div>
            </div>
          </div>

          {/* Advanced CSS Selectors */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Advanced CSS Selectors</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">8. Starts With (^=)</h4>
                <p className="text-blue-700 text-sm mb-2">If starting keyword is static, and remaining value is dynamic:</p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  tagName[attribute^='value']
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-2">9. Ends With ($=)</h4>
                <p className="text-green-700 text-sm mb-2">If ending keyword is static, and remaining value is dynamic:</p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  tagName[attribute$='value']
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-2">10. Contains (*=)</h4>
                <p className="text-purple-700 text-sm mb-2">If any location value is static:</p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  tagName[attribute*='value']
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-900 mb-2">11. Multiple Class Names</h4>
                <p className="text-orange-700 text-sm mb-2">Space with dot symbol for multiple classes:</p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  .className.className.className
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-medium text-red-900 mb-2">12. Single Class from Multiple</h4>
                <p className="text-red-700 text-sm mb-2">Use any one class name when multiple are present:</p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  .className
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Element Operations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Web Element Operations</h2>

          {/* Text Box Operations */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">1. Text Box Operations</h3>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <div className="space-y-2 text-sm">
                    <div>isDisplayed()</div>
                    <div>isEnabled()</div>
                    <div>sendKeys()</div>
                    <div>getAttribute()</div>
                    <div>clear()</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Return Type</h4>
                  <div className="space-y-2 text-sm">
                    <div>boolean</div>
                    <div>boolean</div>
                    <div>void</div>
                    <div>String</div>
                    <div>void</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-gray-400">{"// Text Box Example"}</span><br/>
                <span className="text-blue-300">WebElement</span> wb = driver.findElement(By.name(<span className="text-yellow-300">"firstname"</span>));<br/>
                <span className="text-blue-300">boolean</span> displayed = wb.isDisplayed();<br/>
                <span className="text-blue-300">boolean</span> enabled = wb.isEnabled();<br/>
                wb.sendKeys(<span className="text-yellow-300">"Suraj"</span>);<br/>
                <span className="text-blue-300">String</span> value = wb.getAttribute(<span className="text-yellow-300">"value"</span>);<br/>
                wb.clear();
              </div>
            </div>
          </div>

          {/* Radio Button Operations */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">2. Radio Button Operations</h3>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <div className="space-y-2 text-sm">
                    <div>isDisplayed()</div>
                    <div>isEnabled()</div>
                    <div>isSelected()</div>
                    <div>click()</div>
                    <div>isSelected()</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Return Type</h4>
                  <div className="space-y-2 text-sm">
                    <div>boolean</div>
                    <div>boolean</div>
                    <div>boolean</div>
                    <div>void</div>
                    <div>boolean</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-gray-400">{"// Radio Button Example"}</span><br/>
                <span className="text-blue-300">WebElement</span> wb = driver.findElement(By.id(<span className="text-yellow-300">"ctl00_ContentPlaceHolder1_rdoSociety"</span>));<br/>
                <span className="text-blue-300">boolean</span> displayed = wb.isDisplayed();<br/>
                <span className="text-blue-300">boolean</span> enabled = wb.isEnabled();<br/>
                <span className="text-blue-300">boolean</span> selected = wb.isSelected();<br/>
                wb.click();<br/>
                <span className="text-blue-300">boolean</span> selectedAfter = wb.isSelected();
              </div>
            </div>
          </div>

          {/* Checkbox Operations */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">3. Checkbox Operations</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-700 text-sm">
                  Checkbox operations are similar to radio buttons, but we can select multiple checkboxes simultaneously.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-gray-400">{"// Checkbox Example"}</span><br/>
                <span className="text-blue-300">WebElement</span> checkbox1 = driver.findElement(By.id(<span className="text-yellow-300">"checkbox1"</span>));<br/>
                <span className="text-blue-300">WebElement</span> checkbox2 = driver.findElement(By.id(<span className="text-yellow-300">"checkbox2"</span>));<br/>
                checkbox1.click(); <span className="text-gray-400">{"// Select first checkbox"}</span><br/>
                checkbox2.click(); <span className="text-gray-400">{"// Select second checkbox"}</span>
              </div>
            </div>
          </div>

          {/* Button Operations */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">4. Button Operations</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Button Types</h4>
                <p className="text-gray-600 text-sm">save / delete / submit / cancel / register / login / reset / sign up / open etc.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <div className="space-y-2 text-sm">
                    <div>isDisplayed()</div>
                    <div>isEnabled()</div>
                    <div>click()</div>
                    <div>getText() / getAttribute()</div>
                    <div>getCssValue()</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Return Type</h4>
                  <div className="space-y-2 text-sm">
                    <div>boolean</div>
                    <div>boolean</div>
                    <div>void</div>
                    <div>String</div>
                    <div>String</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-yellow-900 mb-2">📝 Important Note</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• If button tagName is "button" → use getText() method</li>
                  <li>• If button tagName is "input" → use getAttribute() method</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links Operations */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">5. Links Operations</h3>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <div className="space-y-2 text-sm">
                    <div>isDisplayed()</div>
                    <div>isEnabled()</div>
                    <div>click()</div>
                    <div>getText()</div>
                    <div>getAttribute()</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Purpose</h4>
                  <div className="space-y-2 text-sm">
                    <div>Check visibility</div>
                    <div>Check if clickable</div>
                    <div>Navigate to link</div>
                    <div>Capture link text</div>
                    <div>Capture link address</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-gray-400">{"// Link Example"}</span><br/>
                <span className="text-blue-300">WebElement</span> link = driver.findElement(By.linkText(<span className="text-yellow-300">"Click Here"</span>));<br/>
                <span className="text-blue-300">String</span> linkText = link.getText();<br/>
                <span className="text-blue-300">String</span> linkAddress = link.getAttribute(<span className="text-yellow-300">"href"</span>);<br/>
                link.click();
              </div>
            </div>
          </div>

          {/* Images Operations */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">6. Images Operations</h3>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Static Images</h4>
                  <div className="space-y-2 text-sm">
                    <div>• isDisplayed()</div>
                    <div>• isEnabled()</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Image Links</h4>
                  <div className="space-y-2 text-sm">
                    <div>• isDisplayed()</div>
                    <div>• isEnabled()</div>
                    <div>• click()</div>
                    <div>• getAttribute("src")</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practical Examples</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Complete Text Box Example</h3>
            
            <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
              <span className="text-purple-300">package</span> Tutorial5;<br/><br/>
              
              <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
              <span className="text-purple-300">import</span> org.openqa.selenium.WebElement;<br/>
              <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/><br/>
              
              <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo1</span> {`{`}<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) {`{`}<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-yellow-300">"https://www.facebook.com/reg"</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> wb = driver.findElement(By.name(<span className="text-yellow-300">"firstname"</span>));<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">boolean</span> a = wb.isDisplayed();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(a);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">boolean</span> b = wb.isEnabled();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(b);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wb.sendKeys(<span className="text-yellow-300">"Suraj"</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">String</span> c = wb.getAttribute(<span className="text-yellow-300">"value"</span>);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(c);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wb.clear();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
              {`}`}
            </div>
          </div>
        </section>

        {/* Assignment */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Assignment</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Practice Exercise: https://demoqa.com/automation-practice-form</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Tasks to Complete:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Perform operations on First Name text box (display, enable, enter value, capture value)</li>
                  <li>• Perform operations on Last Name text box (display, enable, enter value, capture value)</li>
                  <li>• Perform operations on Email ID text box (display, enable, enter value, capture value)</li>
                  <li>• Perform operations on Male/Female radio button (display, enable, select, check selection)</li>
                  <li>• Perform operations on Mobile Number text box (display, enable, enter value, capture value)</li>
                  <li>• Perform operations on Sports checkbox (display, enable, select, check selection)</li>
                  <li>• Perform operations on Address text box (display, enable, enter value, capture value)</li>
                  <li>• Perform operations on Submit button (display, enable, capture text, click)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 14 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "Which CSS selector approach is used to select elements that start with a specific value?",
              options: ["tagName[attribute*='value']", "tagName[attribute^='value']", "tagName[attribute$='value']", "tagName[attribute='value']"],
              correctAnswer: 1,
              explanation: "The ^= operator in CSS selectors is used when the starting keyword is static and the remaining value is dynamic. It matches elements where the attribute starts with the specified value."
            },
            {
              id: 2,
              question: "What method should you use to capture button text when the button tagName is 'input'?",
              options: ["getText()", "getAttribute()", "getCssValue()", "getTagName()"],
              correctAnswer: 1,
              explanation: "When button tagName is 'input', use getAttribute() method to capture the button text. When tagName is 'button', use getText() method."
            },
            {
              id: 3,
              question: "Which method is used to check if a radio button is currently selected?",
              options: ["isDisplayed()", "isEnabled()", "isSelected()", "isClicked()"],
              correctAnswer: 2,
              explanation: "isSelected() method returns a boolean value indicating whether a radio button, checkbox, or option is currently selected."
            },
            {
              id: 4,
              question: "What is the difference between radio buttons and checkboxes in terms of selection?",
              options: ["No difference", "Radio buttons allow multiple selections", "Checkboxes allow multiple selections", "Both allow only single selection"],
              correctAnswer: 2,
              explanation: "Radio buttons allow only single selection within a group, while checkboxes allow multiple selections. You can select multiple checkboxes simultaneously using multiple click() operations."
            },
            {
              id: 5,
              question: "Which CSS selector would you use to select elements with multiple class names?",
              options: [".class1 .class2", ".class1.class2.class3", ".class1, .class2", "class1.class2"],
              correctAnswer: 1,
              explanation: "When an element has multiple class names, use .className.className.className (space with dot symbol) to select elements that have all the specified classes."
            }
          ]}
        />
      </div>
    </DayLayout>
  );
}