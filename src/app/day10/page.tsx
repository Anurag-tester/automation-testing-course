export const metadata = {
  title: 'Day 10: Selenium Introduction & Setup | SDET Course',
  description: 'Learn Selenium WebDriver introduction, setup, and browser operations. Start your automation testing journey with first Selenium script.',
  keywords: 'selenium webdriver, selenium introduction, selenium setup, browser automation, chromedriver, automation testing, selenium tutorial',
}
'use client'

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day10() {
  return (
    <DayLayout
      dayNumber={10}
      title="Day 10: Selenium WebDriver - Browser Operations"
      description="Introduction to Selenium WebDriver with browser operations: opening browsers, navigation, capturing URLs and titles"
      previousDay="/day9"
      nextDay="/day11"
    >
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Today&apos;s Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Selenium Introduction</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Web-based automation using Selenium</li>
                  <li>• Browser and Web Object operations</li>
                  <li>• Setting up Selenium Maven project</li>
                  <li>• ChromeDriver and EdgeDriver usage</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Browser Operations</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Opening different browsers (Chrome, Edge, Safari)</li>
                  <li>• URL navigation and page operations</li>
                  <li>• Capturing browser title and current URL</li>
                  <li>• Window management and session control</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selenium Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Introduction to Selenium WebDriver</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Web-Based Automation Using Selenium</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Selenium WebDriver is a powerful tool for automating web applications. It provides two main categories of operations:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">1. Browser Related Operations</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Connect to actual browser</li>
                  <li>• Open Chrome/Edge/Opera/Safari/IE</li>
                  <li>• Open URLs and navigate</li>
                  <li>• Capture browser title and URL</li>
                  <li>• Window and tab management</li>
                  <li>• Browser navigation (back, forward, refresh)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">2. Web Object Related Operations</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Locate web elements</li>
                  <li>• Interact with forms and inputs</li>
                  <li>• Handle dropdowns and selections</li>
                  <li>• Click buttons and links</li>
                  <li>• Extract text and attributes</li>
                  <li>• Handle dynamic content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Browser Operations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Browser Related Operations</h2>
          
          <div className="space-y-8">
            {/* Opening Browser */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Opening Different Browsers</h3>
              <p className="text-gray-600 mb-4 text-sm">
                To open a browser, we create an object of the respective Driver class using the <code>new</code> keyword.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Chrome Browser</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-gray-400">{"// Syntax"}</span><br/>
                    <span className="text-blue-300">ChromeDriver</span> abc = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/><br/>
                    
                    <span className="text-gray-400">{"// Complete Example"}</span><br/>
                    <span className="text-purple-300">public class</span> <span className="text-yellow-300">Demo1</span> {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-blue-300">main</span>(String[] args) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> abc = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    {`}`}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Edge Browser</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">EdgeDriver</span> xyz = <span className="text-purple-300">new</span> <span className="text-blue-300">EdgeDriver</span>();
                  </div>
                </div>
              </div>
            </div>

            {/* Opening URLs */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Opening URLs</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Use the <code>get()</code> method to open a URL in the browser.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-gray-400">{"// Open Chrome browser and navigate to Facebook"}</span><br/>
                <span className="text-blue-300">ChromeDriver</span> abc = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                abc.get(<span className="text-green-300">&quot;https://www.facebook.com&quot;</span>);<br/><br/>
                
                <span className="text-gray-400">{"// Open Edge browser and navigate to Google"}</span><br/>
                <span className="text-blue-300">EdgeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">EdgeDriver</span>();<br/>
                driver.get(<span className="text-green-300">&quot;https://www.google.com&quot;</span>);
              </div>
            </div>

            {/* Capturing Information */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Capturing Browser Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Capture Browser Title</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">ChromeDriver</span> abc = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                    abc.get(<span className="text-green-300">&quot;https://www.facebook.com&quot;</span>);<br/><br/>
                    
                    <span className="text-blue-300">String</span> title = abc.getTitle();<br/>
                    System.out.println(title); <span className="text-gray-400">{"// Prints: Facebook – log in or sign up"}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Capture Current URL</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">ChromeDriver</span> abc = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                    abc.get(<span className="text-green-300">&quot;https://www.facebook.com&quot;</span>);<br/><br/>
                    
                    <span className="text-blue-300">String</span> currentUrl = abc.getCurrentUrl();<br/>
                    System.out.println(currentUrl); <span className="text-gray-400">{"// Prints current URL"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Operations */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Navigation Operations</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Navigation Methods</h4>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li><strong>navigate().to(url)</strong> - Navigate to another URL</li>
                      <li><strong>navigate().back()</strong> - Navigate back to previous page</li>
                      <li><strong>navigate().forward()</strong> - Navigate forward to next page</li>
                      <li><strong>navigate().refresh()</strong> - Refresh the current page</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">ChromeDriver</span> abc = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/><br/>
                    
                    <span className="text-gray-400">{"// Open Google"}</span><br/>
                    abc.get(<span className="text-green-300">&quot;https://www.google.com&quot;</span>);<br/><br/>
                    
                    <span className="text-gray-400">{"// Navigate to Facebook"}</span><br/>
                    abc.navigate().to(<span className="text-green-300">&quot;https://www.facebook.com&quot;</span>);<br/><br/>
                    
                    <span className="text-gray-400">{"// Go back to Google"}</span><br/>
                    abc.navigate().back();<br/><br/>
                    
                    <span className="text-gray-400">{"// Go forward to Facebook"}</span><br/>
                    abc.navigate().forward();<br/><br/>
                    
                    <span className="text-gray-400">{"// Refresh the page"}</span><br/>
                    abc.navigate().refresh();
                  </div>
                </div>
              </div>
            </div>

            {/* Window Management */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Window Management</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Closing Windows and Sessions</h4>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li><strong>close()</strong> - Closes the focused window (does not terminate session)</li>
                      <li><strong>quit()</strong> - Closes all windows and terminates the session</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">ChromeDriver</span> abc = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                    abc.get(<span className="text-green-300">&quot;https://www.facebook.com&quot;</span>);<br/><br/>
                    
                    <span className="text-blue-300">String</span> title = abc.getTitle();<br/>
                    System.out.println(title);<br/><br/>
                    
                    <span className="text-blue-300">String</span> url = abc.getCurrentUrl();<br/>
                    System.out.println(url);<br/><br/>
                    
                    <span className="text-gray-400">{"// Close window and terminate session"}</span><br/>
                    abc.quit();
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Adding Delays</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-gray-400">{"// Stop execution for 8 seconds"}</span><br/>
                    Thread.sleep(<span className="text-yellow-300">8000</span>);<br/><br/>
                    
                    <span className="text-gray-400">{"// Note: Add throws InterruptedException to main method"}</span><br/>
                    <span className="text-purple-300">public static void</span> <span className="text-blue-300">main</span>(String[] args) <span className="text-purple-300">throws</span> InterruptedException
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Setup */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Selenium Project Setup</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Creating Selenium Maven Project</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Setup Steps:</h4>
                <ol className="text-blue-800 space-y-1 text-sm list-decimal list-inside">
                  <li>Open Eclipse IDE</li>
                  <li>Click File → New → Maven Project → Next</li>
                  <li>Select Apache POI Quick Start 1.1/1.4 version</li>
                  <li>Enter Group Id and Artifact Id → Finish</li>
                  <li>Open pom.xml file</li>
                  <li>Add Selenium dependency (version 4.16.1)</li>
                  <li>Close pom.xml file</li>
                  <li>Create package and class</li>
                </ol>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-gray-400">&lt;!-- Add this dependency to pom.xml --&gt;</span><br/>
                <span className="text-blue-300">&lt;dependency&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;groupId&gt;</span>org.seleniumhq.selenium<span className="text-green-300">&lt;/groupId&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;artifactId&gt;</span>selenium-java<span className="text-green-300">&lt;/artifactId&gt;</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">&lt;version&gt;</span>4.16.1<span className="text-green-300">&lt;/version&gt;</span><br/>
                <span className="text-blue-300">&lt;/dependency&gt;</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 10 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "Which method is used to open a URL in Selenium WebDriver?",
              options: ["open()", "navigate()", "get()", "launch()"],
              correctAnswer: 2,
              explanation: "The get() method is used to open a URL in Selenium WebDriver. Example: driver.get('https://www.google.com')."
            },
            {
              id: 2,
              question: "What is the difference between close() and quit() methods?",
              options: ["No difference", "close() terminates session, quit() doesn't", "quit() terminates session, close() doesn't", "Both are deprecated"],
              correctAnswer: 2,
              explanation: "close() closes the focused window but doesn't terminate the session, while quit() closes all windows and terminates the entire session."
            },
            {
              id: 3,
              question: "Which method captures the current browser title?",
              options: ["getCurrentTitle()", "getTitle()", "getBrowserTitle()", "captureTitle()"],
              correctAnswer: 1,
              explanation: "The getTitle() method captures and returns the current browser title as a String."
            },
            {
              id: 4,
              question: "How do you navigate back to the previous page?",
              options: ["driver.back()", "driver.navigate().back()", "driver.goBack()", "driver.previous()"],
              correctAnswer: 1,
              explanation: "Use driver.navigate().back() to navigate back to the previous page in browser history."
            },
            {
              id: 5,
              question: "What are the two main categories of Selenium operations?",
              options: ["UI and API operations", "Browser and Web Object operations", "Frontend and Backend operations", "Manual and Automated operations"],
              correctAnswer: 1,
              explanation: "Selenium WebDriver provides two main categories: Browser related operations (navigation, window management) and Web Object related operations (element interactions)."
            }
          ]}
        />

        {/* Assignment */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practice Assignment</h2>
          
          <div className="bg-yellow-50 rounded-xl p-6">
            <h3 className="font-medium text-yellow-900 mb-4">🎯 Complete Browser Navigation Assignment</h3>
            <div className="space-y-3 text-yellow-800 text-sm">
              <p><strong>Task:</strong> Create a comprehensive browser navigation program</p>
              <ul className="space-y-1 list-disc list-inside ml-4">
                <li>Open Edge browser</li>
                <li>Open Wikipedia URL</li>
                <li>Capture and print title</li>
                <li>Navigate to Facebook URL</li>
                <li>Capture and print current URL</li>
                <li>Navigate back to Wikipedia</li>
                <li>Capture and print current URL</li>
                <li>Navigate forward to Facebook</li>
                <li>Capture and print title</li>
                <li>Refresh the page</li>
                <li>Close window and terminate session</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Key Takeaways</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Browser Operations</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Opening Browsers</strong>: ChromeDriver, EdgeDriver objects</li>
                    <li><strong>URL Navigation</strong>: get() method for opening URLs</li>
                    <li><strong>Information Capture</strong>: getTitle(), getCurrentUrl()</li>
                    <li><strong>Navigation</strong>: navigate().to(), back(), forward(), refresh()</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Project Setup</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Maven Project</strong>: Eclipse IDE with Maven structure</li>
                    <li><strong>Dependencies</strong>: Selenium Java 4.16.1 in pom.xml</li>
                    <li><strong>Package Structure</strong>: Organized class and package creation</li>
                    <li><strong>Import Statements</strong>: org.openqa.selenium packages</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Window Management</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>close()</strong>: Closes focused window only</li>
                    <li><strong>quit()</strong>: Closes all windows + terminates session</li>
                    <li><strong>Thread.sleep()</strong>: Add delays for observation</li>
                    <li><strong>Exception Handling</strong>: throws InterruptedException</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Best Practices</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Always use quit()</strong>: Properly terminate sessions</li>
                    <li><strong>Meaningful variable names</strong>: Clear driver object names</li>
                    <li><strong>Exception handling</strong>: Handle InterruptedException</li>
                    <li><strong>Resource cleanup</strong>: Close browsers after testing</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-100 rounded-xl">
              <p className="text-blue-800 text-sm font-medium">
                💡 Master these browser operations as they form the foundation for Day 11 where we&apos;ll learn about 
                locators and web element interactions!
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}