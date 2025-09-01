export const metadata = {
  title: 'Day 27: Multiple Window & Tab Handling | SDET Course',
  description: 'Master window and tab handling techniques using getWindowHandle(), getWindowHandles(), and switchTo().window() methods.',
  keywords: 'multiple windows, tab handling, window handling, getWindowHandle, getWindowHandles, switchTo window, window switching',
}

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day27() {
  return (
    <DayLayout
      dayNumber={27}
      title="Day 27: Multiple Window & Tab Handling in Selenium"
      description="Master window and tab handling techniques using getWindowHandle(), getWindowHandles(), and switchTo().window() methods"
      previousDay="/day26"
      nextDay="/day28"
    >
      {/* Course Overview */}
      <section className="mb-16">
        <div className="bg-purple-50 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Today's Learning Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Window Handling Fundamentals</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Understanding multiple windows and tabs</li>
                <li>• Window ID capture and management</li>
                <li>• Switching between windows efficiently</li>
                <li>• Set to ArrayList conversion techniques</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Practical Applications</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Multi-application workflow automation</li>
                <li>• Cross-window data transfer</li>
                <li>• Complex navigation scenarios</li>
                <li>• Real-world assignment challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Window Handling Methods */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Window Handling Methods</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Core Window Handling Methods</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-3">1. getWindowHandle() Method</h4>
                <p className="text-blue-700 text-sm mb-3">
                  Captures the current window ID number (single window)
                </p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  String mainWindowId = driver.getWindowHandle();
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-3">2. getWindowHandles() Method</h4>
                <p className="text-green-700 text-sm mb-3">
                  Captures all window ID numbers (multiple windows)
                </p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  Set&lt;String&gt; allWindowID = driver.getWindowHandles();
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-800 mb-3">3. switchTo().window() Method</h4>
                <p className="text-purple-700 text-sm mb-3">
                  Switches focus to the expected window using window ID
                </p>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  driver.switchTo().window("window ID");
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Window Handling Process */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Window Handling Process</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Step-by-Step Process</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-3">Step 1: Capture Main Window ID</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  String mainWindow = driver.getWindowHandle();
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-3">Step 2: Perform Operations & Open New Window</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  driver.findElement(By.name("fname")).sendKeys("Rahul");<br/>
                  driver.findElement(By.name("lname")).sendKeys("Patil");<br/>
                  driver.findElement(By.xpath("//a[text()='SauceDemo Link']")).click();
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-800 mb-3">Step 3: Capture All Window IDs</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  Set&lt;String&gt; allWindow = driver.getWindowHandles();
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-800 mb-3">Step 4: Convert Set to ArrayList</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  ArrayList&lt;String&gt; allArrayWindow = new ArrayList&lt;String&gt;(allWindow);
                </div>
                <p className="text-orange-700 text-xs mt-2">
                  This allows us to access window IDs by index position
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-medium text-red-800 mb-3">Step 5: Get Specific Window ID & Switch</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  String sauceWindowId = allArrayWindow.get(1);<br/>
                  driver.switchTo().window(sauceWindowId);
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example 1: Two Windows */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Example 1: Two Window Handling</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Task: Main Window + SauceDemo Window</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Website: <a href="https://prafpawar11.github.io/multiplewindows.html" className="text-blue-600 hover:underline">https://prafpawar11.github.io/multiplewindows.html</a>
            </p>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-blue-800 mb-3">Complete Implementation</h4>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-3">
                  <h5 className="font-medium text-gray-800 mb-2">Java Code Implementation</h5>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono overflow-x-auto">
                    <span className="text-purple-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-purple-300">ChromeDriver</span>();<br/>
                    driver.get(<span className="text-yellow-300">"https://prafpawar11.github.io/multiplewindows.html"</span>);<br/>
                    <br/>
                    <span className="text-gray-400">// Fill main window form</span><br/>
                    driver.findElement(By.name(<span className="text-yellow-300">"fname"</span>)).sendKeys(<span className="text-yellow-300">"Rahul"</span>);<br/>
                    driver.findElement(By.name(<span className="text-yellow-300">"lname"</span>)).sendKeys(<span className="text-yellow-300">"Pandit"</span>);<br/>
                    driver.findElement(By.xpath(<span className="text-yellow-300">"//a[text()='SauceDemo Link']"</span>)).click();<br/>
                    <br/>
                    <span className="text-gray-400">// Capture all window IDs</span><br/>
                    Set&lt;String&gt; allSetWindowIds = driver.getWindowHandles();<br/>
                    ArrayList&lt;String&gt; allArrayWindowIds = <span className="text-purple-300">new</span> ArrayList&lt;String&gt;(allSetWindowIds);<br/>
                    <br/>
                    <span className="text-gray-400">// Switch to SauceDemo window</span><br/>
                    String sauceWindowId = allArrayWindowIds.get(<span className="text-yellow-300">1</span>);<br/>
                    driver.switchTo().window(sauceWindowId);<br/>
                    <br/>
                    <span className="text-gray-400">// SauceDemo credentials</span><br/>
                    driver.findElement(By.name(<span className="text-yellow-300">"user-name"</span>)).sendKeys(<span className="text-yellow-300">"standard_user"</span>);<br/>
                    driver.findElement(By.name(<span className="text-yellow-300">"password"</span>)).sendKeys(<span className="text-yellow-300">"secret_sauce"</span>);<br/>
                    driver.findElement(By.name(<span className="text-yellow-300">"login-button"</span>)).click();<br/>
                    <br/>
                    <span className="text-gray-400">// Switch back to main window</span><br/>
                    String mainWindow = allArrayWindowIds.get(<span className="text-yellow-300">0</span>);<br/>
                    driver.switchTo().window(mainWindow);<br/>
                    driver.findElement(By.name(<span className="text-yellow-300">"address"</span>)).sendKeys(<span className="text-yellow-300">"Pune"</span>);
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-3">Key Points</h4>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Index 0 = Main window (first opened)</li>
                <li>• Index 1 = Second window (SauceDemo)</li>
                <li>• Always convert Set to ArrayList for index access</li>
                <li>• Switch back to main window using index 0</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example 2: Multiple Windows */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Example 2: Multiple Window Handling</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Task: Main + OrangeHRM + Cogmento Windows</h3>
            
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-800 mb-3">Workflow Overview</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-700 mb-1">1. Main Window → Enter first name → Click OrangeHRM link</p>
                    <p className="text-sm text-gray-700 mb-1">2. OrangeHRM Window → Login with credentials</p>
                    <p className="text-sm text-gray-700 mb-1">3. Back to Main → Enter last name → Click Cogmento link</p>
                    <p className="text-sm text-gray-700 mb-1">4. Cogmento Window → Login with credentials</p>
                    <p className="text-sm text-gray-700">5. Back to Main → Enter address</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-800 mb-3">Key Implementation Points</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 mb-2">Window Index Management</h5>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      <span className="text-gray-400">// After opening 3 windows:</span><br/>
                      String mainWindowId = allArrayWindowIds.get(<span className="text-yellow-300">0</span>);    <span className="text-gray-400">// Main</span><br/>
                      String orangeWindowId = allArrayWindowIds.get(<span className="text-yellow-300">1</span>);   <span className="text-gray-400">// OrangeHRM</span><br/>
                      String cogmentoWindowId = allArrayWindowIds.get(<span className="text-yellow-300">2</span>); <span className="text-gray-400">// Cogmento</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 mb-2">Re-capturing Window Handles</h5>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      <span className="text-gray-400">// Re-assign after opening new window</span><br/>
                      allSetWindowIds = driver.getWindowHandles();<br/>
                      allArrayWindowIds = <span className="text-purple-300">new</span> ArrayList&lt;String&gt;(allSetWindowIds);
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Real-World Applications</h2>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Common Use Cases</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">E-commerce Testing</h4>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Product comparison across tabs</li>
                    <li>• Payment gateway redirections</li>
                    <li>• Social media login popups</li>
                    <li>• Help/Support chat windows</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">Banking Applications</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Fund transfer confirmations</li>
                    <li>• Document upload windows</li>
                    <li>• OTP verification popups</li>
                    <li>• Statement download tabs</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">Enterprise Applications</h4>
                  <ul className="text-purple-700 space-y-1 text-sm">
                    <li>• Multi-system integrations</li>
                    <li>• Report generation windows</li>
                    <li>• External tool integrations</li>
                    <li>• Dashboard popup windows</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-800 mb-2">Social Media Testing</h4>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Share content across platforms</li>
                    <li>• Login with social accounts</li>
                    <li>• Media upload windows</li>
                    <li>• External link validations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assignment Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Comprehensive Assignment</h2>
        
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Multi-Application Workflow Challenge</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Website: <a href="https://prafpawar11.github.io/multiplewindows.html" className="text-blue-600 hover:underline">https://prafpawar11.github.io/multiplewindows.html</a>
          </p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">Phase 1: Initial Setup</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Enter first name → Click SauceDemo link → Login</li>
                <li>• Return to main → Enter last name → Click OrangeHRM link → Login</li>
                <li>• Return to main → Enter address → Click Cogmento CRM → Login</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">Phase 2: SauceDemo Operations</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Switch to SauceDemo → Select "High to Low" price filter</li>
                <li>• Add highest price item to cart → Complete checkout process</li>
                <li>• Enter personal information → Click finish button</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">Phase 3: Cogmento CRM Operations</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Switch to Cogmento → Click Contacts → Create new contact</li>
                <li>• Enter first name, last name, select status</li>
                <li>• Select TikTok as social channel → Save contact</li>
                <li>• Delete created contact → Logout application</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">Phase 4: OrangeHRM Operations</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Switch to OrangeHRM → PIM → Add Employee</li>
                <li>• Enter employee details → Capture employee ID</li>
                <li>• Set nationality, gender, DOB → Save</li>
                <li>• Admin → Add user → Create employee credentials</li>
                <li>• Logout → Login with new employee credentials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Best Practices for Window Handling</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">✅ Do's</h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-3">
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Always capture main window ID before opening new windows</li>
                  <li>• Convert Set to ArrayList for index-based access</li>
                  <li>• Re-capture window handles after opening new windows</li>
                  <li>• Use meaningful variable names for window IDs</li>
                  <li>• Add explicit waits after window switches</li>
                  <li>• Close unused windows to free memory</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">❌ Don'ts</h3>
            
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-3">
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Don't assume window order will remain constant</li>
                  <li>• Avoid hardcoding window indices without verification</li>
                  <li>• Don't forget to switch back to main window</li>
                  <li>• Avoid performing operations without switching context</li>
                  <li>• Don't leave multiple windows open unnecessarily</li>
                  <li>• Avoid using Thread.sleep() for window loading</li>
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
              question: "Which method is used to capture the current window ID in Selenium?",
              options: [
                "getCurrentWindow()",
                "getWindowHandle()",
                "getActiveWindow()",
                "getWindowId()"
              ],
              correctAnswer: 1,
              explanation: "getWindowHandle() method is used to capture the current window ID number (single window). It returns a String representing the current window handle."
            },
            {
              id: 2,
              question: "Why do we convert Set<String> to ArrayList<String> in window handling?",
              options: [
                "To improve performance",
                "To access window IDs by index position",
                "To sort the window IDs",
                "To remove duplicate window IDs"
              ],
              correctAnswer: 1,
              explanation: "We convert Set<String> to ArrayList<String> to access window IDs by index position. Set doesn't support index-based access, but ArrayList does, allowing us to use get(0), get(1), etc."
            },
            {
              id: 3,
              question: "In a scenario with 3 windows, which index represents the main window?",
              options: [
                "Index 1",
                "Index 2", 
                "Index 0",
                "Index 3"
              ],
              correctAnswer: 2,
              explanation: "Index 0 represents the main window (first opened window). Subsequent windows opened will have indices 1, 2, 3, etc. in the order they were opened."
            },
            {
              id: 4,
              question: "What should you do after opening a new window and before switching to it?",
              options: [
                "Wait for 5 seconds",
                "Refresh the page",
                "Re-capture all window handles",
                "Close the previous window"
              ],
              correctAnswer: 2,
              explanation: "After opening a new window, you should re-capture all window handles using getWindowHandles() to get the updated list of all open windows before switching."
            },
            {
              id: 5,
              question: "Which method is used to switch focus between windows?",
              options: [
                "driver.switchWindow(windowId)",
                "driver.changeWindow(windowId)",
                "driver.switchTo().window(windowId)",
                "driver.focusWindow(windowId)"
              ],
              correctAnswer: 2,
              explanation: "driver.switchTo().window(windowId) is the correct method to switch focus between windows. You pass the window ID as a parameter to switch to that specific window."
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
              <h3 className="font-medium text-gray-800 mb-3">Window Handling Methods</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>getWindowHandle():</strong> Current window ID</li>
                <li>• <strong>getWindowHandles():</strong> All window IDs</li>
                <li>• <strong>switchTo().window():</strong> Switch between windows</li>
                <li>• <strong>Set to ArrayList:</strong> Index-based access</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Best Practices</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Capture main window ID first</li>
                <li>• Re-capture handles after new windows</li>
                <li>• Use meaningful variable names</li>
                <li>• Always switch back to main window</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </DayLayout>
  )
}