export const metadata = {
  title: 'Day 16: Alert Handling - JavaScript Alerts | SDET Course',
  description: 'Master Selenium alert handling including simple alerts, confirmation alerts, and prompt dialogs. Learn switchTo().alert() methods.',
  keywords: 'selenium alerts, javascript alerts, alert handling, confirmation alerts, prompt alerts, switchTo alert',
}
import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day16() {
  return (
    <DayLayout
      dayNumber={16}
      title="Alert Handling in Selenium"
      description="Master alert popup handling including simple alerts, confirmation alerts, prompt alerts, and authentication popups using Alert interface."
      previousDay="/day15"
      nextDay="/day17"
    >
      <div className="max-w-4xl mx-auto">
        {/* Alert Handling Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Alert Handling in Selenium</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Why Handle Alerts?</h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                We handle Alert Pop up in Selenium by using Alert Interface. Basically we can't inspect the alert pop up elements, so we have to use Alert interface methods to handle the alert pop up objects/elements.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">🔑 Key Points</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Alert elements cannot be inspected in browser developer tools</li>
                  <li>• Must switch focus from main window to alert window</li>
                  <li>• Use Alert interface methods to interact with alert elements</li>
                  <li>• Different types of alerts require different handling approaches</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alert Interface Methods */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Alert Interface Methods</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Switch Focus to Alert</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-blue-300">Alert</span> alt = driver.switchTo().alert();
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">accept() Method</h4>
                    <p className="text-green-700 text-sm mb-2">Click on OK button</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      alt.accept(); <span className="text-gray-400">{"// void"}</span>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-2">dismiss() Method</h4>
                    <p className="text-red-700 text-sm mb-2">Click on Cancel button</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      alt.dismiss(); <span className="text-gray-400">{"// void"}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">getText() Method</h4>
                    <p className="text-blue-700 text-sm mb-2">Capture alert text</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      <span className="text-blue-300">String</span> text = alt.getText();
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium text-purple-900 mb-2">sendKeys() Method</h4>
                    <p className="text-purple-700 text-sm mb-2">Enter value in alert textbox</p>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      alt.sendKeys(<span className="text-green-300">"value"</span>);
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Alerts */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Types of Alert Popups</h2>
          
          <div className="space-y-8">
            {/* Simple Alert */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">1. Simple Alert Popup</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Components:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Alert popup text</li>
                    <li>• OK button</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">Example: https://mail.rediff.com/cgi-bin/login.cgi</h4>
                  <p className="text-yellow-800 text-sm">Click Login button without entering credentials to trigger alert</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">package</span> Tutorial6;<br/><br/>
                  
                  <span className="text-purple-300">import</span> org.openqa.selenium.Alert;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/><br/>
                  
                  <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo1</span> {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.manage().window().maximize();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://mail.rediff.com/cgi-bin/login.cgi"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Locate Log In Button and click on it"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.name(<span className="text-green-300">"proceed"</span>)).click();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Switch focus from Main window to Alert Pop Up window"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Alert</span> alt = driver.switchTo().alert();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Capture Alert Pop Text"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">String</span> a = alt.getText();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(a);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Click on Alert Pop Up OK button"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt.accept();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>
            </div>

            {/* Confirmation Alert */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">2. Confirmation Alert Popup</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Components:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Alert popup text</li>
                    <li>• OK button</li>
                    <li>• Cancel button</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Example: https://demoqa.com/alerts</h4>
                  <p className="text-blue-800 text-sm">Click on 3rd "Click Me" button (confirmButton)</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  driver.get(<span className="text-green-300">"https://demoqa.com/alerts"</span>);<br/><br/>
                  
                  <span className="text-gray-400">{"// Find and click on 3rd Click Me button"}</span><br/>
                  driver.findElement(By.id(<span className="text-green-300">"confirmButton"</span>)).click();<br/><br/>
                  
                  <span className="text-gray-400">{"// Switch focus from main window to alert window"}</span><br/>
                  <span className="text-blue-300">Alert</span> alt = driver.switchTo().alert();<br/><br/>
                  
                  <span className="text-gray-400">{"// Capture alert pop up text"}</span><br/>
                  <span className="text-blue-300">String</span> a = alt.getText();<br/>
                  System.out.println(a);<br/><br/>
                  
                  <span className="text-gray-400">{"// Click on Cancel button"}</span><br/>
                  alt.dismiss();
                </div>
              </div>
            </div>

            {/* Prompt Alert */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">3. Prompt Alert Popup</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Components:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Alert popup text</li>
                    <li>• OK button</li>
                    <li>• Cancel button</li>
                    <li>• Alert popup text box</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Example: https://demoqa.com/alerts</h4>
                  <p className="text-green-800 text-sm">Click on 4th "Click Me" button (promtButton)</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  driver.get(<span className="text-green-300">"https://demoqa.com/alerts"</span>);<br/><br/>
                  
                  <span className="text-gray-400">{"// Find and click on 4th click me button"}</span><br/>
                  driver.findElement(By.id(<span className="text-green-300">"promtButton"</span>)).click();<br/><br/>
                  
                  <span className="text-gray-400">{"// Switch focus main window to alert window"}</span><br/>
                  <span className="text-blue-300">Alert</span> alt = driver.switchTo().alert();<br/><br/>
                  
                  <span className="text-gray-400">{"// Capture the alert pop up text"}</span><br/>
                  <span className="text-blue-300">String</span> a = alt.getText();<br/>
                  System.out.println(a);<br/><br/>
                  
                  <span className="text-gray-400">{"// Enter value in alert pop"}</span><br/>
                  alt.sendKeys(<span className="text-green-300">"Durga"</span>);<br/><br/>
                  
                  Thread.sleep(<span className="text-yellow-300">4000</span>);<br/><br/>
                  
                  <span className="text-gray-400">{"// Click on ok button"}</span><br/>
                  alt.accept();
                </div>
              </div>
            </div>

            {/* Authentication Alert */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">4. Authentication Alert Popup</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Components:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Username text box</li>
                    <li>• Password text box</li>
                    <li>• Sign In button</li>
                    <li>• Cancel button</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">🔐 Special Handling</h4>
                  <p className="text-orange-800 text-sm mb-2">
                    Authentication alerts that appear immediately after opening URL are handled by providing credentials in the URL itself.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                    https://username:password@url
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Example: Basic Authentication</h4>
                  <div className="text-purple-800 text-sm space-y-1">
                    <div>Username: admin</div>
                    <div>Password: admin</div>
                    <div>URL: https://the-internet.herokuapp.com/basic_auth</div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">package</span> Tutorial6;<br/><br/>
                  
                  <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/><br/>
                  
                  <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo4</span> {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.manage().window().maximize();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Handle authentication by embedding credentials in URL"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://admin:admin@the-internet.herokuapp.com/basic_auth"</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* switchTo() Method Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">switchTo() Method Overview</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">WebDriver switchTo() Capabilities</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">switchTo() Method Usage</h4>
                <p className="text-blue-800 text-sm mb-3">
                  switchTo() method is present in WebDriver Interface and returns TargetLocator interface. It's used to switch focus to:
                </p>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Alert window</li>
                  <li>• Frame window</li>
                  <li>• New window/tab</li>
                  <li>• Different tabs or windows</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Interface Details</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>WebDriver Interface:</strong></div>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      driver.switchTo() → TargetLocator
                    </div>
                    <div><strong>TargetLocator Interface:</strong></div>
                    <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                      .alert() → Alert Interface
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Alert Interface Methods</h4>
                  <div className="space-y-2 text-sm">
                    <div>• accept() → void</div>
                    <div>• dismiss() → void</div>
                    <div>• getText() → String</div>
                    <div>• sendKeys() → void</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice URLs */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practice URLs</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Alert Practice Websites</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Simple & Confirmation Alerts</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• https://demo.automationtesting.in/Alerts.html</li>
                  <li>• https://demoqa.com/alerts</li>
                  <li>• https://mail.rediff.com/cgi-bin/login.cgi</li>
                  <li>• https://rahulshettyacademy.com/AutomationPractice/</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Authentication Alerts</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• https://the-internet.herokuapp.com/basic_auth</li>
                  <li>• https://admin:admin@the-internet.herokuapp.com/basic_auth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

          questions={[
            {
              id: 1,
              question: "Why can't we inspect alert popup elements in browser developer tools?",
              options: ["They are hidden elements", "They are JavaScript generated", "They are browser native dialogs", "They are encrypted"],
              correctAnswer: 2,
              explanation: "Alert popups are browser native dialogs that cannot be inspected using browser developer tools. This is why we need to use Selenium's Alert interface to interact with them."
            },
            {
              id: 2,
              question: "Which method is used to click the Cancel button in a confirmation alert?",
              options: ["accept()", "dismiss()", "cancel()", "close()"],
              correctAnswer: 1,
              explanation: "The dismiss() method is used to click the Cancel button in alert popups, while accept() is used to click the OK button."
            },
            {
              id: 3,
              question: "How do you handle authentication alerts that appear immediately after opening a URL?",
              options: ["Use Alert interface", "Use sendKeys() method", "Embed credentials in URL", "Use JavaScript executor"],
              correctAnswer: 2,
              explanation: "Authentication alerts that appear immediately after opening a URL are handled by embedding credentials directly in the URL using the format: https://username:password@url"
            },
            {
              id: 4,
              question: "What is the return type of driver.switchTo().alert() method?",
              options: ["WebDriver", "TargetLocator", "Alert", "WebElement"],
              correctAnswer: 2,
              explanation: "The driver.switchTo().alert() method returns an Alert interface object, which provides methods like accept(), dismiss(), getText(), and sendKeys()."
            },
            {
              id: 5,
              question: "Which type of alert popup contains a text input field?",
              options: ["Simple Alert", "Confirmation Alert", "Prompt Alert", "Authentication Alert"],
              correctAnswer: 2,
              explanation: "Prompt Alert popup contains a text input field along with OK and Cancel buttons. You can enter text using the sendKeys() method."
            }
          ]}
        />
      </div>
    </DayLayout>
  );
}