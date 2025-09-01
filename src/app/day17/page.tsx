import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day17() {
  return (
    <DayLayout
      dayNumber={17}
      title="Frame Handling in Selenium"
      description="Master frame handling techniques including switching between frames, nested frames, and frame navigation using index, ID, name, and WebElement."
      previousDay="/day16"
      nextDay="/day18"
    >
      <div className="max-w-4xl mx-auto">
        {/* Frame Handling Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Frame Handling in Selenium</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What are Frames?</h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                Frame is used to divide the browser window into multiple sections and each section carries separate HTML documents. If we try to perform operations on frame elements without switching to it, we get NoSuchElementException.
              </p>
              
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-medium text-red-900 mb-2">⚠️ Important</h4>
                <p className="text-red-800 text-sm">
                  If you try to perform operations on frame elements without switching to the frame first, you will get <strong>NoSuchElementException</strong>.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">🔍 How to Identify Frames</h4>
                <p className="text-blue-800 text-sm">
                  Check if frames exist in the application by looking for <code>&lt;frame&gt;</code> and <code>&lt;iframe&gt;</code> tags in HTML DOM Structure.
                </p>
              </div>
            </div>
          </div>

          {/* Frame Switching Methods */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Frame Switching Methods</h3>
            
            <div className="space-y-6">
              <p className="text-gray-600 text-sm">
                We switch focus from main window to frame window using four different approaches:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">1. By Frame Index</h4>
                    <p className="text-green-700 text-sm mb-2">Frame index starts from top-left to bottom-right</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      driver.switchTo().frame(<span className="text-yellow-300">0</span>);
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">2. By Frame ID</h4>
                    <p className="text-blue-700 text-sm mb-2">Using the id attribute of frame</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      driver.switchTo().frame(<span className="text-green-300">"frameId"</span>);
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium text-purple-900 mb-2">3. By Frame Name</h4>
                    <p className="text-purple-700 text-sm mb-2">Using the name attribute of frame</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      driver.switchTo().frame(<span className="text-green-300">"frameName"</span>);
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-medium text-orange-900 mb-2">4. By Frame WebElement</h4>
                    <p className="text-orange-700 text-sm mb-2">Using WebElement reference</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      driver.switchTo().frame(webElement);
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-yellow-900 mb-2">📝 Important Notes</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Cannot switch from one frame to another frame directly</li>
                  <li>• Must first switch to top frame/parent frame</li>
                  <li>• All frame methods return WebDriver interface</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frame Navigation Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Frame Navigation Methods</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-3">defaultContent() Method</h4>
                <p className="text-green-700 text-sm mb-3">
                  Switch focus from frame window to top window (main window)
                </p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  driver.switchTo().defaultContent();
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">parentFrame() Method</h4>
                <p className="text-blue-700 text-sm mb-3">
                  Switch focus from frame window to immediate parent window (frame or main window)
                </p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  driver.switchTo().parentFrame();
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practical Examples</h2>
          
          <div className="space-y-8">
            {/* Example 1: Single Frame */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Example 1: Single Frame Handling</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">URL: https://prafpawar11.github.io/mainFrame.html</h4>
                  <p className="text-blue-800 text-sm">Task: Enter value in first name text box and select Selenium checkbox</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">package</span> Tutorial7;<br/><br/>
                  
                  <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/><br/>
                  
                  <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo1</span> {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://prafpawar11.github.io/mainFrame.html"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Enter value in main window text box"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.id(<span className="text-green-300">"name"</span>)).sendKeys(<span className="text-green-300">"Rahul"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Switch focus to checkbox frame"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switchTo().frame(<span className="text-green-300">"mainframe"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Find and select Selenium Checkbox"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.id(<span className="text-green-300">"Selenium"</span>)).click();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>
            </div>

            {/* Example 2: Multiple Frames */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Example 2: Multiple Frames Handling</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">URL: https://prafpawar11.github.io/twoFrame.html</h4>
                  <p className="text-green-800 text-sm">Task: Enter full name, select Cucumber checkbox, and select Jenkins from dropdown</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">package</span> Tutorial7;<br/><br/>
                  
                  <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.WebElement;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.support.ui.Select;<br/><br/>
                  
                  <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo2</span> {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://prafpawar11.github.io/twoFrame.html"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Enter value in main window"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.name(<span className="text-green-300">"name"</span>)).sendKeys(<span className="text-green-300">"Rahul"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Switch to first frame (index 0)"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switchTo().frame(<span className="text-yellow-300">0</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.id(<span className="text-green-300">"Cucumber"</span>)).click();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Switch back to main window"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switchTo().defaultContent();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Switch to second frame"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switchTo().frame(<span className="text-green-300">"topic"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Handle dropdown"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> wb = driver.findElement(By.name(<span className="text-green-300">"course"</span>));<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Select</span> sel = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(wb);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sel.selectByVisibleText(<span className="text-green-300">"Jenkins"</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>
            </div>

            {/* Example 3: Nested Frames */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Example 3: Nested Frames Handling</h3>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">URL: https://prafpawar11.github.io/frame.html</h4>
                  <p className="text-purple-800 text-sm">Task: Enter name, select TestNG checkbox, and enter address (nested frames)</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">package</span> Tutorial7;<br/><br/>
                  
                  <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/><br/>
                  
                  <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo3</span> {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://prafpawar11.github.io/frame.html"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Enter name in main window"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.id(<span className="text-green-300">"name"</span>)).sendKeys(<span className="text-green-300">"Anjali"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Switch to address frame"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switchTo().frame(<span className="text-yellow-300">0</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Switch to nested checkbox frame"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switchTo().frame(<span className="text-yellow-300">0</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.id(<span className="text-green-300">"TestNG"</span>)).click();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Switch back to parent frame (address frame)"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.switchTo().parentFrame();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.id(<span className="text-green-300">"add"</span>)).sendKeys(<span className="text-green-300">"Pune"</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frame Navigation Flow */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Frame Navigation Flow</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Navigation Rules</h3>
            
            <div className="space-y-6">
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-medium text-red-900 mb-2">❌ Cannot Do</h4>
                <p className="text-red-800 text-sm">
                  Cannot switch directly from one frame to another frame. Must first switch to parent/top window.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-2">✅ Correct Approach</h4>
                <div className="text-green-800 text-sm space-y-2">
                  <div><strong>Step 1:</strong> Switch to Frame A</div>
                  <div><strong>Step 2:</strong> Perform operations in Frame A</div>
                  <div><strong>Step 3:</strong> Switch back to main window (defaultContent)</div>
                  <div><strong>Step 4:</strong> Switch to Frame B</div>
                  <div><strong>Step 5:</strong> Perform operations in Frame B</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">🔄 Navigation Methods Comparison</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-800 mb-1">defaultContent()</h5>
                    <p className="text-blue-700 text-sm">Switches to top-level window (main window)</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-1">parentFrame()</h5>
                    <p className="text-blue-700 text-sm">Switches to immediate parent frame</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Assignments */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practice Assignments</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🎯 Assignment 1: HYR Tutorials</h3>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">URL: https://www.hyrtutorials.com/p/frames-practice.html</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-700">Frame 1 Tasks:</h5>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Select Contact dropdown values</li>
                      <li>• Select Alerts value from dropdown</li>
                      <li>• Click on "Click Me" button</li>
                      <li>• Capture alert text and click OK</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700">Frame 2 Tasks:</h5>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Select Basic Control dropdown value</li>
                      <li>• Enter first name and last name</li>
                      <li>• Select gender and language</li>
                      <li>• Enter email address</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🎯 Assignment 2: Nested iFrames</h3>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">URL: https://demo.automationtesting.in/Frames.html</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Enter value in iframe Demo text box</li>
                  <li>• Switch to main window</li>
                  <li>• Click on "iframe with an iframe"</li>
                  <li>• Switch to nested frame → switch to iframe → enter value</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🎯 Assignment 3: Complex Frame Navigation</h3>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">URL: https://praf002.github.io/</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Enter full name and select GitHub checkbox</li>
                  <li>• Select Database Automation from dropdown</li>
                  <li>• Enter mobile number and address</li>
                  <li>• Unselect GitHub checkbox</li>
                  <li>• Click on Selenium, enter new name</li>
                  <li>• Select JavaScript Executor from dropdown</li>
                  <li>• Enter new address</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 17 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "What exception do you get when trying to interact with frame elements without switching to the frame?",
              options: ["ElementNotVisibleException", "NoSuchElementException", "TimeoutException", "StaleElementReferenceException"],
              correctAnswer: 1,
              explanation: "When you try to perform operations on frame elements without switching to the frame first, you get NoSuchElementException because the elements are not accessible from the main window context."
            },
            {
              id: 2,
              question: "Which HTML tags are used to identify frames in a web page?",
              options: ["<div> and <span>", "<frame> and <iframe>", "<section> and <article>", "<header> and <footer>"],
              correctAnswer: 1,
              explanation: "Frames are identified by <frame> and <iframe> tags in the HTML DOM structure. These tags indicate separate HTML documents within the main page."
            },
            {
              id: 3,
              question: "What is the difference between defaultContent() and parentFrame() methods?",
              options: ["No difference", "defaultContent() goes to top window, parentFrame() goes to immediate parent", "parentFrame() is faster", "defaultContent() is deprecated"],
              correctAnswer: 1,
              explanation: "defaultContent() switches to the top-level window (main window), while parentFrame() switches to the immediate parent frame. Use defaultContent() to go to main window, parentFrame() for nested frame navigation."
            },
            {
              id: 4,
              question: "Can you switch directly from one frame to another frame?",
              options: ["Yes, always", "No, must switch to parent first", "Only with frame index", "Only with frame name"],
              correctAnswer: 1,
              explanation: "You cannot switch directly from one frame to another frame. You must first switch to the parent frame or main window using defaultContent() or parentFrame(), then switch to the target frame."
            },
            {
              id: 5,
              question: "What is the return type of all frame switching methods?",
              options: ["Alert", "WebElement", "WebDriver", "TargetLocator"],
              correctAnswer: 2,
              explanation: "All frame switching methods (frame(), defaultContent(), parentFrame()) return WebDriver interface, allowing you to chain additional operations."
            }
          ]}
        />
      </div>
    </DayLayout>
  );
}