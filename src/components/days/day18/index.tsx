export const metadata = {
  title: 'Day 18: Actions Class - Mouse & Keyboard Events | SDET Course',
  description: 'Master Selenium Actions class for mouse and keyboard events. Learn drag-drop, hover, right-click, and complex interactions.',
  keywords: 'selenium actions class, mouse actions, keyboard events, drag drop, hover, right click, complex interactions',
}
import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day18() {
  return (
    <DayLayout
      dayNumber={18}
      title="Mouse Events & Actions Class"
      description="Master mouse events and Actions class including click, double-click, right-click, drag-and-drop, scroll, and mouse hover operations."
      previousDay="/frame-handling-iframe-navigation"
      nextDay="/javascript-executor-dom-manipulation"
    >
      <div className="max-w-4xl mx-auto">
        {/* Actions Class Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Actions Class Overview</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Mouse Events in Actions Class</h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                All mouse event methods are present in Actions class and return Actions class. To perform actions on elements using Actions class, create an Actions object by passing the driver instance.
              </p>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">Actions Class Syntax</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Mouse Events</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• click() - Click on element</li>
                    <li>• doubleClick() - Double click on element</li>
                    <li>• contextClick() - Right click on element</li>
                    <li>• moveToElement() - Mouse hover without click</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Advanced Actions</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• scrollToElement() - Scroll to element</li>
                    <li>• clickAndHold() - Hold element</li>
                    <li>• dragAndDrop() - Drag and drop</li>
                    <li>• build().perform() - Execute actions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Build and Perform Methods */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">build() and perform() Methods</h3>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">build() Method</h4>
                  <p className="text-green-700 text-sm mb-2">
                    Used to combine multiple actions in a single statement. Present in Actions class, returns Action interface.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                    act.click(wb).build()
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">perform() Method</h4>
                  <p className="text-purple-700 text-sm mb-2">
                    Used to execute each and every combined action. Present in Action interface, returns void.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                    .build().perform()
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Click Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Click Operations</h2>
          
          <div className="space-y-8">
            {/* Simple Click */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">1. click() Method</h3>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">5 Ways to Click on Element</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>1. WebElement click() method</li>
                    <li>2. WebElement submit() method</li>
                    <li>3. Actions class click() method</li>
                    <li>4. Actions class ENTER keyword</li>
                    <li>5. JavaScript Executor click() method</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Example: https://demoqa.com/automation-practice-form</h4>
                  <p className="text-blue-800 text-sm">Click on female radio button using Actions class</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">package</span> Tutorial8;<br/><br/>
                  
                  <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.WebElement;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.interactions.Actions;<br/><br/>
                  
                  <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo1</span> {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.manage().window().maximize();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://demoqa.com/automation-practice-form"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> wb = driver.findElement(By.id(<span className="text-green-300">"gender-radio-2"</span>));<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;act.click(wb).build().perform();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>
            </div>

            {/* Double Click */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">2. doubleClick() Method</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Example: https://demoqa.com/buttons</h4>
                  <p className="text-green-800 text-sm">Double click on "Double Click Me" button</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  driver.get(<span className="text-green-300">"https://demoqa.com/buttons"</span>);<br/><br/>
                  
                  <span className="text-blue-300">WebElement</span> wb = driver.findElement(By.id(<span className="text-green-300">"doubleClickBtn"</span>));<br/>
                  <span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/><br/>
                  
                  act.doubleClick(wb).build().perform();
                </div>
              </div>
            </div>

            {/* Right Click */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">3. contextClick() Method</h3>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-2">Right Click Operation</h4>
                  <p className="text-red-800 text-sm">contextClick() method is used to perform right-click operations on elements</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  driver.get(<span className="text-green-300">"https://demoqa.com/buttons"</span>);<br/><br/>
                  
                  <span className="text-blue-300">WebElement</span> wb = driver.findElement(By.id(<span className="text-green-300">"rightClickBtn"</span>));<br/>
                  <span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/><br/>
                  
                  act.contextClick(wb).build().perform();
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drag and Drop Operations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Drag and Drop Operations</h2>
          
          <div className="space-y-8">
            {/* Click and Hold + Release */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">clickAndHold() + release() = dragAndDrop()</h3>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">Example: https://jqueryui.com/droppable/</h4>
                  <p className="text-orange-800 text-sm">Drag element from source to target location</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Method 1: Separate Actions</h4>
                    <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono">
                      <span className="text-gray-400">{"// Hold source element"}</span><br/>
                      act.clickAndHold(wb1).build().perform();<br/><br/>
                      
                      <span className="text-gray-400">{"// Release at target"}</span><br/>
                      act.release(wb2).build().perform();
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Method 2: Combined Actions</h4>
                    <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono">
                      <span className="text-gray-400">{"// Combined in single statement"}</span><br/>
                      act.clickAndHold(wb1)<br/>
                      &nbsp;&nbsp;&nbsp;.release(wb2)<br/>
                      &nbsp;&nbsp;&nbsp;.build().perform();
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  driver.get(<span className="text-green-300">"https://jqueryui.com/droppable/"</span>);<br/><br/>
                  
                  <span className="text-gray-400">{"// Switch to frame containing drag-drop elements"}</span><br/>
                  driver.switchTo().frame(<span className="text-yellow-300">0</span>);<br/><br/>
                  
                  <span className="text-blue-300">WebElement</span> wb1 = driver.findElement(By.id(<span className="text-green-300">"draggable"</span>));<br/>
                  <span className="text-blue-300">WebElement</span> wb2 = driver.findElement(By.id(<span className="text-green-300">"droppable"</span>));<br/><br/>
                  
                  <span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/>
                  act.clickAndHold(wb1).release(wb2).build().perform();
                </div>
              </div>
            </div>

            {/* Drag and Drop Method */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">dragAndDrop() Method</h3>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Single Method Approach</h4>
                  <p className="text-purple-800 text-sm">
                    dragAndDrop() method combines clickAndHold() and release() in a single operation
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-blue-300">WebElement</span> wb1 = driver.findElement(By.id(<span className="text-green-300">"draggable"</span>));<br/>
                  <span className="text-blue-300">WebElement</span> wb2 = driver.findElement(By.id(<span className="text-green-300">"droppable"</span>));<br/><br/>
                  
                  <span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/>
                  act.dragAndDrop(wb1, wb2).build().perform();
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll and Mouse Hover */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Scroll and Mouse Hover Operations</h2>
          
          <div className="space-y-8">
            {/* Scroll to Element */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">scrollToElement() Method</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Scroll to Element Location</h4>
                  <p className="text-blue-800 text-sm">
                    Used to scroll down or scroll up to element locations automatically
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  driver.get(<span className="text-green-300">"https://jqueryui.com/droppable/"</span>);<br/><br/>
                  
                  <span className="text-blue-300">WebElement</span> wb = driver.findElement(By.linkText(<span className="text-green-300">"Position"</span>));<br/>
                  <span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/><br/>
                  
                  act.scrollToElement(wb).build().perform();
                </div>
              </div>
            </div>

            {/* Mouse Hover */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">moveToElement() Method</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Mouse Hover Without Click</h4>
                  <p className="text-green-800 text-sm">
                    Used to mouse over on element without clicking on it (pointing on element)
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">Example: https://www.amazon.in/</h4>
                  <p className="text-yellow-800 text-sm">Mouse hover on "Account & Lists" to show dropdown menu</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  driver.get(<span className="text-green-300">"https://www.amazon.in/"</span>);<br/><br/>
                  
                  <span className="text-blue-300">WebElement</span> wb = driver.findElement(By.id(<span className="text-green-300">"nav-link-accountList"</span>));<br/>
                  <span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/><br/>
                  
                  act.moveToElement(wb).build().perform();
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Assignments */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practice Assignments</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🎯 Assignment 1: Flipkart Navigation</h3>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">URL: https://www.flipkart.com/</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Mouse over on "Electronics"</li>
                  <li>• Mouse over on "Gaming"</li>
                  <li>• Click on "Controller"</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🎯 Assignment 2: Context Menu</h3>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">URL: https://swisnl.github.io/jQuery-contextMenu/demo.html</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Right click on button</li>
                  <li>• Click on "Copy" keyword</li>
                  <li>• Switch focus to alert window</li>
                  <li>• Capture alert text and click OK</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🎯 Assignment 3: Button Operations</h3>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">URL: https://testkru.com/Elements/Buttons</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Double-Click on button</li>
                  <li>• Right-Click on button</li>
                  <li>• Left-Click on button</li>
                  <li>• Test disabled button</li>
                  <li>• Test color change on hover button</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 18 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "How many ways can you click on an element in Selenium?",
              options: ["3 ways", "4 ways", "5 ways", "6 ways"],
              correctAnswer: 2,
              explanation: "There are 5 ways to click on an element: WebElement click(), WebElement submit(), Actions class click(), Actions class ENTER keyword, and JavaScript Executor click()."
            },
            {
              id: 2,
              question: "What is the difference between clickAndHold() + release() and dragAndDrop()?",
              options: ["No difference, they do the same thing", "dragAndDrop() is faster", "clickAndHold() + release() allows more control", "dragAndDrop() works only with images"],
              correctAnswer: 0,
              explanation: "clickAndHold() + release() and dragAndDrop() perform the same operation. dragAndDrop() is essentially a combination of clickAndHold() and release() in a single method."
            },
            {
              id: 3,
              question: "Which method is used for mouse hover without clicking?",
              options: ["hoverElement()", "mouseOver()", "moveToElement()", "pointToElement()"],
              correctAnswer: 2,
              explanation: "moveToElement() method is used to mouse over on an element without clicking on it, also known as pointing on element."
            },
            {
              id: 4,
              question: "What does the build() method do in Actions class?",
              options: ["Executes the actions", "Combines multiple actions in single statement", "Creates new Actions object", "Validates the actions"],
              correctAnswer: 1,
              explanation: "The build() method is used to combine multiple actions in a single statement. It's present in Actions class and returns Action interface."
            },
            {
              id: 5,
              question: "Which method is used to perform right-click operation?",
              options: ["rightClick()", "contextClick()", "secondaryClick()", "menuClick()"],
              correctAnswer: 1,
              explanation: "contextClick() method is used to perform right-click operations on elements. It's present in Actions class and returns Actions class."
            }
          ]}
        />
      </div>
    </DayLayout>
  );
}