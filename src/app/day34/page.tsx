import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day34() {
  const quizQuestions = [
    {
      id: 1,
      question: "What is Shadow DOM in web development?",
      options: [
        "A hidden HTML element",
        "An encapsulated DOM tree attached to an element",
        "A CSS styling technique",
        "A JavaScript framework"
      ],
      correctAnswer: 1,
      explanation: "Shadow DOM is an encapsulated DOM tree that is attached to an element, providing style and markup encapsulation."
    },
    {
      id: 2,
      question: "Which method is used to access shadow root elements in Selenium?",
      options: [
        "getShadowElement()",
        "findShadowRoot()",
        "getShadowRoot()",
        "shadowRoot()"
      ],
      correctAnswer: 2,
      explanation: "getShadowRoot() method is used to access the shadow root of an element, returning a SearchContext interface."
    },
    {
      id: 3,
      question: "What interface does getShadowRoot() method return?",
      options: [
        "WebElement",
        "WebDriver",
        "SearchContext",
        "ShadowRoot"
      ],
      correctAnswer: 2,
      explanation: "getShadowRoot() method returns SearchContext interface, which allows finding elements within the shadow DOM."
    },
    {
      id: 4,
      question: "How can you locate shadow elements in browser console?",
      options: [
        "Using XPath only",
        "Using CSS Selector with shadowRoot",
        "Using ID locator",
        "Using className locator"
      ],
      correctAnswer: 1,
      explanation: "Shadow elements can be located in console using CSS Selector with shadowRoot, like document.querySelector('#parent').shadowRoot.querySelector('child')."
    },
    {
      id: 5,
      question: "Can XPath be used to locate shadow DOM elements?",
      options: [
        "Yes, XPath works with shadow DOM",
        "No, only CSS Selector works with shadow DOM",
        "Yes, but only absolute XPath",
        "XPath works only with nested shadow DOM"
      ],
      correctAnswer: 1,
      explanation: "XPath cannot be used to locate shadow DOM elements. Only CSS Selector can be used to locate elements within shadow DOM."
    }
  ];

  return (
    <DayLayout
      dayNumber={34}
      title="Shadow DOM Handling in Selenium"
      description="Master the techniques for handling Shadow DOM elements in modern web applications using Selenium WebDriver."
      previousDay="/day33"
      nextDay="/day35"
    >
      <div className="max-w-4xl mx-auto">
        {/* Shadow DOM Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Understanding Shadow DOM</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-purple-900 mb-4">What is Shadow DOM?</h3>
              <p className="text-purple-800 text-sm mb-4">
                Shadow DOM is a web standard that allows developers to create encapsulated DOM trees that are attached to elements 
                but kept separate from the main document DOM. This provides style and markup encapsulation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-100 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Key Characteristics</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Encapsulated DOM structure</li>
                    <li>• Style isolation from main document</li>
                    <li>• Hidden from regular DOM queries</li>
                    <li>• Used in modern web components</li>
                    <li>• Provides better modularity</li>
                  </ul>
                </div>
                <div className="bg-purple-100 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Common Use Cases</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Custom web components</li>
                    <li>• Browser native elements (video, audio)</li>
                    <li>• Third-party widgets</li>
                    <li>• Modern JavaScript frameworks</li>
                    <li>• Polymer-based applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge with Shadow DOM */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Shadow DOM Testing Challenges</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-medium text-red-900 mb-3">❌ What Doesn't Work</h4>
                <ul className="text-red-800 text-sm space-y-2">
                  <li>• <strong>Inspector Window:</strong> Cannot locate shadow elements directly</li>
                  <li>• <strong>Regular Locators:</strong> Standard findElement() fails</li>
                  <li>• <strong>XPath:</strong> Cannot traverse into shadow DOM</li>
                  <li>• <strong>Standard CSS:</strong> Regular CSS selectors don't work</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-3">✅ What Works</h4>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>• <strong>Browser Console:</strong> JavaScript functions work</li>
                  <li>• <strong>getShadowRoot():</strong> Selenium 4+ method</li>
                  <li>• <strong>CSS Selector:</strong> With shadowRoot navigation</li>
                  <li>• <strong>SearchContext:</strong> Interface for shadow DOM</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Console-based Shadow DOM Location */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Locating Shadow Elements in Console</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">Console Method</h4>
                <p className="text-blue-800 text-sm mb-4">
                  Before automating shadow DOM elements, you can locate them in the browser console using JavaScript functions 
                  to understand the shadow DOM structure.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Basic Shadow DOM Console Syntax</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Basic shadow DOM navigation"}</span><br/>
                  document.querySelector(<span className="text-green-300">'#shadow-host'</span>).shadowRoot.querySelector(<span className="text-green-300">'button'</span>)<br/><br/>
                  
                  <span className="text-gray-400">{"// Nested shadow DOM navigation"}</span><br/>
                  document.querySelector(<span className="text-green-300">'ntp-app'</span>)<br/>
                  &nbsp;&nbsp;.shadowRoot.querySelector(<span className="text-green-300">'cr-searchbox'</span>)<br/>
                  &nbsp;&nbsp;.shadowRoot.querySelector(<span className="text-green-300">'#input'</span>)<br/><br/>
                  
                  <span className="text-gray-400">{"// Complex shadow DOM structure"}</span><br/>
                  document.querySelector(<span className="text-green-300">'shop-app'</span>)<br/>
                  &nbsp;&nbsp;.shadowRoot.querySelector(<span className="text-green-300">'shop-home'</span>)<br/>
                  &nbsp;&nbsp;.shadowRoot.querySelector(<span className="text-green-300">'a[aria-label=\"Men\\'s Outerwear Shop Now\"]'</span>)
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-medium text-yellow-900 mb-2">💡 Console Testing Tips</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Use browser DevTools Console tab</li>
                  <li>• Test shadow DOM navigation before automation</li>
                  <li>• Verify element accessibility and attributes</li>
                  <li>• Understand the shadow DOM hierarchy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selenium Shadow DOM Automation */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Selenium Shadow DOM Automation</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-3">7-Step Shadow DOM Automation Process</h4>
                <p className="text-green-800 text-sm">
                  Follow this systematic approach to interact with shadow DOM elements using Selenium WebDriver.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="font-medium text-green-900 text-sm mb-1">Step 1: Open Browser</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      ChromeDriver driver = new ChromeDriver();
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="font-medium text-green-900 text-sm mb-1">Step 2: Navigate to URL</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      driver.get("https://practice.expandtesting.com/shadowdom");
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="font-medium text-green-900 text-sm mb-1">Step 3: Locate Shadow Host</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      WebElement shadowHost = driver.findElement(<br/>
                      &nbsp;&nbsp;By.cssSelector("#shadow-host"));
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="font-medium text-green-900 text-sm mb-1">Step 4: Get Shadow Root</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      SearchContext shadowRoot = <br/>
                      &nbsp;&nbsp;shadowHost.getShadowRoot();
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="font-medium text-green-900 text-sm mb-1">Step 5: Locate Shadow Element</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      WebElement shadowElement = <br/>
                      &nbsp;&nbsp;shadowRoot.findElement(By.cssSelector("button"));
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="font-medium text-green-900 text-sm mb-1">Step 6: Perform Operations</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      String text = shadowElement.getText();<br/>
                      shadowElement.click();
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="font-medium text-green-900 text-sm mb-1">Step 7: Cleanup</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      driver.quit();
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practical Shadow DOM Examples</h2>
          
          <div className="space-y-8">
            {/* Example 1: Simple Shadow DOM */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Example 1: Simple Shadow DOM Interaction</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">URL: https://practice.expandtesting.com/shadowdom</h4>
                  <p className="text-blue-800 text-sm">Task: Locate and interact with button inside shadow DOM</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">package</span> Tutorial19;<br/><br/>
                  
                  <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.SearchContext;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.WebElement;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/><br/>
                  
                  <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo1</span> {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) <span className="text-purple-300">throws</span> <span className="text-blue-300">InterruptedException</span> {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://practice.expandtesting.com/shadowdom"</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Thread</span>.sleep(<span className="text-yellow-300">4000</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Find the shadow root parent tag"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> parentShadow = driver.findElement(<span className="text-blue-300">By</span>.cssSelector(<span className="text-green-300">"#shadow-host"</span>));<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Get shadow root to locate internal elements"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">SearchContext</span> shadowRoot = parentShadow.getShadowRoot();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Locate internal shadow element"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> button = shadowRoot.findElement(<span className="text-blue-300">By</span>.cssSelector(<span className="text-green-300">"button"</span>));<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Get button text and perform operations"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">String</span> buttonText = button.getText();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">System</span>.out.println(buttonText);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;button.click();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.quit();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>
            </div>

            {/* Example 2: Nested Shadow DOM */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Example 2: Nested Shadow DOM Navigation</h3>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">URL: chrome://newtab</h4>
                  <p className="text-purple-800 text-sm">Task: Enter text in Chrome's new tab search box (nested shadow DOM)</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">package</span> Tutorial19;<br/><br/>
                  
                  <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.SearchContext;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.WebElement;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/><br/>
                  
                  <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo2</span> {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) <span className="text-purple-300">throws</span> <span className="text-blue-300">InterruptedException</span> {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"chrome://newtab"</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Thread</span>.sleep(<span className="text-yellow-300">4000</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Step 1: Locate first shadow root parent"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> parentShadowRoot = driver.findElement(<span className="text-blue-300">By</span>.cssSelector(<span className="text-green-300">"ntp-app"</span>));<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Step 2: Get first shadow root"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">SearchContext</span> shadowRoot1 = parentShadowRoot.getShadowRoot();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Step 3: Locate nested shadow root parent"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> childShadowRoot = shadowRoot1.findElement(<span className="text-blue-300">By</span>.cssSelector(<span className="text-green-300">"cr-searchbox"</span>));<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Step 4: Get nested shadow root"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">SearchContext</span> shadowRoot2 = childShadowRoot.getShadowRoot();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Step 5: Locate and interact with final element"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shadowRoot2.findElement(<span className="text-blue-300">By</span>.cssSelector(<span className="text-green-300">"input"</span>)).sendKeys(<span className="text-green-300">"Selenium WebDriver"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.quit();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Shadow DOM Best Practices</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">✅ Best Practices</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Always use CSS Selector for shadow DOM</li>
                    <li>• Test shadow DOM structure in console first</li>
                    <li>• Use SearchContext interface properly</li>
                    <li>• Handle nested shadow DOM systematically</li>
                    <li>• Add appropriate waits for shadow elements</li>
                    <li>• Verify element accessibility before interaction</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">🔧 Technical Tips</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Selenium 4+ required for getShadowRoot()</li>
                    <li>• Only CSS Selector works with shadow DOM</li>
                    <li>• SearchContext provides findElement() method</li>
                    <li>• Chain shadow root navigation for nested DOM</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-3">❌ Common Mistakes</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Using XPath for shadow DOM elements</li>
                    <li>• Trying to inspect shadow elements directly</li>
                    <li>• Not using getShadowRoot() method</li>
                    <li>• Mixing regular and shadow DOM locators</li>
                    <li>• Forgetting to handle nested shadow roots</li>
                    <li>• Not testing in console before automation</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-3">⚠️ Limitations</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• XPath cannot traverse shadow DOM</li>
                    <li>• Regular DOM methods don't work</li>
                    <li>• Browser inspector has limited support</li>
                    <li>• Requires modern browser versions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Knowledge Check</h2>
          <Quiz questions={quizQuestions} />
        </section>



        {/* Key Points Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Shadow DOM Key Points</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">🎯 Shadow DOM Essentials</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Shadow DOM provides encapsulation</li>
                    <li>• Use getShadowRoot() method in Selenium 4+</li>
                    <li>• Only CSS Selector works with shadow DOM</li>
                    <li>• SearchContext interface for shadow elements</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">⚡ Implementation Strategy</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Test in console before automation</li>
                    <li>• Navigate shadow DOM systematically</li>
                    <li>• Handle nested shadow roots properly</li>
                    <li>• Use appropriate wait strategies</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">🔧 Technical Requirements</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Selenium WebDriver 4.0 or higher</li>
                    <li>• Modern browser versions</li>
                    <li>• CSS Selector expertise</li>
                    <li>• JavaScript console knowledge</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">🚨 Remember</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• XPath doesn't work with shadow DOM</li>
                    <li>• Regular DOM methods fail</li>
                    <li>• Inspector has limited shadow DOM support</li>
                    <li>• Always chain shadow root navigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DayLayout>
  );
}