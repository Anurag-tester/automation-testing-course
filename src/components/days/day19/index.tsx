export const metadata = {
  title: 'Day 19: JavaScript Executor - DOM Manipulation | SDET Course',
  description: 'Learn Selenium JavaScript Executor for DOM manipulation and advanced browser interactions. Master executeScript() methods.',
  keywords: 'selenium javascript executor, DOM manipulation, executeScript, browser javascript, scroll, click using js',
}
import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day19() {
  return (
    <DayLayout
      dayNumber={19}
      title="Keyboard Events & Actions Class"
      description="Master keyboard events using Actions class including sendKeys, keyDown, keyUp operations, text manipulation, and navigation keys."
      previousDay="/actions-class-mouse-keyboard-events"
      nextDay="/relative-xpath-fundamentals"
    >
      <div className="max-w-4xl mx-auto">
        {/* Multiple Ways Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Multiple Ways to Perform Operations</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Different Approaches in Selenium</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">Enter Text (3 Ways)</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>1. WebElement sendKeys()</li>
                  <li>2. Actions class sendKeys()</li>
                  <li>3. JavaScript Executor</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-3">Click Element (5 Ways)</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>1. WebElement click()</li>
                  <li>2. WebElement submit()</li>
                  <li>3. Actions class click()</li>
                  <li>4. Actions class ENTER</li>
                  <li>5. JavaScript Executor</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-3">Handle Dropdown (6 Ways)</h4>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>1. selectByVisibleText()</li>
                  <li>2. selectByIndex()</li>
                  <li>3. selectByValue()</li>
                  <li>4. Iterating values</li>
                  <li>5. Actions class</li>
                  <li>6. JavaScript Executor</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-orange-50 rounded-lg p-4">
              <h4 className="font-medium text-orange-900 mb-2">Open URL (3 Ways)</h4>
              <ul className="text-orange-800 text-sm space-y-1">
                <li>1. get() method</li>
                <li>2. navigate().to() method</li>
                <li>3. JavaScript Executor interface</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Keyboard Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Keyboard Events in Actions Class</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Keyboard Event Methods</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">sendKeys() Method</h4>
                  <p className="text-blue-700 text-sm mb-2">Enter text in text box / Send keys to web element</p>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                    act.sendKeys(wb, <span className="text-green-300">"text"</span>)
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">keyDown() Method</h4>
                  <p className="text-green-700 text-sm mb-2">Press modifier keys (CTRL, SHIFT, ALT, etc.)</p>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                    act.keyDown(Keys.CONTROL)
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">keyUp() Method</h4>
                  <p className="text-purple-700 text-sm mb-2">Release pressed modifier keys</p>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                    act.keyUp(Keys.CONTROL)
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> All keyboard event methods are present in Actions class and return Actions class.
                </p>
              </div>
            </div>
          </div>

          {/* Send Keys Example */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">sendKeys() Method Example</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Example: https://www.saucedemo.com/</h4>
                <p className="text-blue-800 text-sm">Enter username using Actions class sendKeys() method</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-purple-300">package</span> Tutorial11;<br/><br/>
                
                <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                <span className="text-purple-300">import</span> org.openqa.selenium.WebElement;<br/>
                <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/>
                <span className="text-purple-300">import</span> org.openqa.selenium.interactions.Actions;<br/><br/>
                
                <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo1</span> {`{`}<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) {`{`}<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://www.saucedemo.com/"</span>);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> wb = driver.findElement(By.name(<span className="text-green-300">"user-name"</span>));<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;act.sendKeys(wb, <span className="text-green-300">"standard_user"</span>).build().perform();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                {`}`}
              </div>
            </div>
          </div>
        </section>

        {/* Text Manipulation */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Text Manipulation Operations</h2>
          
          <div className="space-y-8">
            {/* Delete Characters */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Delete Characters from Text Box</h3>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-2">Delete Last Characters</h4>
                  <p className="text-red-800 text-sm">Use BACK_SPACE key to delete characters from the end</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Enter text and delete last 3 characters"}</span><br/>
                  act.sendKeys(wb, <span className="text-green-300">"Rahul"</span>)<br/>
                  &nbsp;&nbsp;&nbsp;.keyDown(Keys.BACK_SPACE)<br/>
                  &nbsp;&nbsp;&nbsp;.keyDown(Keys.BACK_SPACE)<br/>
                  &nbsp;&nbsp;&nbsp;.keyDown(Keys.BACK_SPACE)<br/>
                  &nbsp;&nbsp;&nbsp;.build().perform();
                </div>
              </div>
            </div>

            {/* Delete First Characters */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Delete First Characters</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Navigation + Delete Approach</h4>
                  <p className="text-green-800 text-sm">Use HOME key to navigate to beginning, then DELETE key</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Enter text, go to beginning, delete first 3 characters"}</span><br/>
                  act.sendKeys(wb, <span className="text-green-300">"anjali"</span>)<br/>
                  &nbsp;&nbsp;&nbsp;.keyDown(Keys.HOME)<br/>
                  &nbsp;&nbsp;&nbsp;.keyUp(Keys.HOME)<br/>
                  &nbsp;&nbsp;&nbsp;.keyDown(Keys.DELETE)<br/>
                  &nbsp;&nbsp;&nbsp;.keyDown(Keys.DELETE)<br/>
                  &nbsp;&nbsp;&nbsp;.keyDown(Keys.DELETE)<br/>
                  &nbsp;&nbsp;&nbsp;.keyUp(Keys.DELETE)<br/>
                  &nbsp;&nbsp;&nbsp;.build().perform();
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Copy-Paste Operations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Copy-Paste Operations</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Copy Text from One Field to Another</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Example: https://copyright.gov.in/UserRegistration/frmNewUser.aspx</h4>
                <p className="text-blue-800 text-sm">Copy first name and paste in last name field</p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-yellow-900 mb-2">Keyboard Shortcuts Used</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• CTRL + A = Select all text</li>
                  <li>• CTRL + C = Copy selected text</li>
                  <li>• TAB = Move to next field</li>
                  <li>• CTRL + V = Paste copied text</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-blue-300">WebElement</span> wb = driver.findElement(By.name(<span className="text-green-300">"ctl00$ContentPlaceHolder1$txtFName"</span>));<br/>
                <span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/><br/>
                
                act.sendKeys(wb, <span className="text-green-300">"Pavan"</span>)<br/>
                &nbsp;&nbsp;&nbsp;.keyDown(Keys.CONTROL).sendKeys(<span className="text-green-300">"a"</span>)<br/>
                &nbsp;&nbsp;&nbsp;.keyDown(Keys.CONTROL).sendKeys(<span className="text-green-300">"c"</span>)<br/>
                &nbsp;&nbsp;&nbsp;.keyUp(Keys.CONTROL)<br/>
                &nbsp;&nbsp;&nbsp;.keyDown(Keys.TAB)<br/>
                &nbsp;&nbsp;&nbsp;.keyUp(Keys.TAB)<br/>
                &nbsp;&nbsp;&nbsp;.keyDown(Keys.CONTROL).sendKeys(<span className="text-green-300">"v"</span>)<br/>
                &nbsp;&nbsp;&nbsp;.keyUp(Keys.CONTROL)<br/>
                &nbsp;&nbsp;&nbsp;.build()<br/>
                &nbsp;&nbsp;&nbsp;.perform();
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Keys */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Page Navigation Keys</h2>
          
          <div className="space-y-8">
            {/* Home and End Keys */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">HOME and END Keys</h3>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">HOME Key</h4>
                    <p className="text-green-700 text-sm mb-2">Navigate to the top of the page</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      act.keyDown(Keys.HOME).build().perform();
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">END Key</h4>
                    <p className="text-blue-700 text-sm mb-2">Navigate to the bottom of the page</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      act.keyDown(Keys.END).build().perform();
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Example: Navigate to end and then back to home"}</span><br/>
                  <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  driver.get(<span className="text-green-300">"https://www.redbus.in/"</span>);<br/><br/>
                  
                  <span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/>
                  act.keyDown(Keys.END).build().perform();<br/>
                  Thread.sleep(<span className="text-yellow-300">4000</span>);<br/>
                  act.keyDown(Keys.HOME).build().perform();
                </div>
              </div>
            </div>

            {/* Arrow Keys */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Arrow Keys for Scrolling</h3>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">ARROW_DOWN Key</h4>
                  <p className="text-purple-800 text-sm">Scroll down the page step by step</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Scroll down multiple times"}</span><br/>
                  act.keyDown(Keys.ARROW_DOWN).build().perform();<br/>
                  act.keyDown(Keys.ARROW_DOWN).build().perform();<br/>
                  act.keyDown(Keys.ARROW_DOWN).build().perform();<br/>
                  <span className="text-gray-400">{"// ... continue as needed"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dropdown Handling with Actions */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Dropdown Handling with Actions Class</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Select Dropdown Options Using Keyboard</h3>
            
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-900 mb-2">Example: Select "Ms." from Title Dropdown</h4>
                <p className="text-orange-800 text-sm">Use ARROW_DOWN keys to navigate and ENTER to select</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-blue-300">WebElement</span> wb = driver.findElement(By.name(<span className="text-green-300">"ctl00$ContentPlaceHolder1$ddlTitle"</span>));<br/>
                <span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/><br/>
                
                act.click(wb)<br/>
                &nbsp;&nbsp;&nbsp;.keyDown(Keys.ARROW_DOWN)<br/>
                &nbsp;&nbsp;&nbsp;.keyDown(Keys.ARROW_DOWN)<br/>
                &nbsp;&nbsp;&nbsp;.keyUp(Keys.ARROW_DOWN)<br/>
                &nbsp;&nbsp;&nbsp;.keyDown(Keys.ENTER)<br/>
                &nbsp;&nbsp;&nbsp;.keyUp(Keys.ENTER)<br/>
                &nbsp;&nbsp;&nbsp;.build()<br/>
                &nbsp;&nbsp;&nbsp;.perform();
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Steps Explained</h4>
                <ol className="text-blue-800 text-sm space-y-1 list-decimal list-inside">
                  <li>Click on dropdown to open it</li>
                  <li>Press ARROW_DOWN to move to next option</li>
                  <li>Press ARROW_DOWN again to move to "Ms."</li>
                  <li>Release ARROW_DOWN key</li>
                  <li>Press ENTER to select the option</li>
                  <li>Release ENTER key</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative: Robot Class */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Alternative Approach</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">Robot Class in Java</h4>
              <p className="text-gray-600 text-sm">
                Robot Class in Java can also be used to perform Mouse and Keyboard Events as an alternative to Actions class.
              </p>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 19 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "How many ways can you enter text in a text box using Selenium?",
              options: ["2 ways", "3 ways", "4 ways", "5 ways"],
              correctAnswer: 1,
              explanation: "There are 3 ways to enter text in a text box: WebElement sendKeys() method, Actions class sendKeys() method, and JavaScript Executor interface."
            },
            {
              id: 2,
              question: "Which key combination is used to select all text in a field?",
              options: ["CTRL + A", "CTRL + S", "SHIFT + A", "ALT + A"],
              correctAnswer: 0,
              explanation: "CTRL + A is the keyboard shortcut used to select all text in a field. This can be implemented using keyDown(Keys.CONTROL).sendKeys('a') in Actions class."
            },
            {
              id: 3,
              question: "What is the difference between keyDown() and keyUp() methods?",
              options: ["No difference", "keyDown() presses keys, keyUp() releases keys", "keyUp() is faster", "keyDown() is deprecated"],
              correctAnswer: 1,
              explanation: "keyDown() method is used to press keys (especially modifier keys like CTRL, SHIFT, ALT), while keyUp() method is used to release the pressed keys."
            },
            {
              id: 4,
              question: "Which key is used to delete characters from the beginning of text?",
              options: ["BACK_SPACE", "DELETE", "HOME", "END"],
              correctAnswer: 1,
              explanation: "DELETE key is used to delete characters from the current cursor position forward. To delete from beginning, first navigate to start using HOME key, then use DELETE key."
            },
            {
              id: 5,
              question: "What does the HOME key do when used in page navigation?",
              options: ["Goes to homepage", "Navigates to top of page", "Closes browser", "Refreshes page"],
              correctAnswer: 1,
              explanation: "The HOME key navigates to the top of the current page, while the END key navigates to the bottom of the page."
            }
          ]}
        />
      </div>
    </DayLayout>
  );
}