export const metadata = {
  title: 'Day 13: Advanced Locators - XPath & CSS Selectors | SDET Course',
  description: 'Master advanced Selenium locators including XPath expressions, CSS selectors, and complex element location strategies.',
  keywords: 'advanced locators, xpath expressions, css selectors, selenium locators, complex locators, xpath functions, css combinators',
}

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day13() {
  return (
    <DayLayout
      dayNumber={13}
      title="Day 13: Form Automation & Element Interactions"
      description="Complete form automation using CSS selectors with practical registration form examples and element interaction techniques"
      previousDay="/element-interactions-click-type-clear"
      nextDay="/dropdown-handling-select-class"
    >
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Today&apos;s Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Form Automation</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Complete registration form automation</li>
                  <li>• Text input and textarea handling</li>
                  <li>• Radio button and checkbox selection</li>
                  <li>• Multiple dropdown interactions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Element Interactions</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• sendKeys() for text input</li>
                  <li>• click() for buttons and selections</li>
                  <li>• Select class for dropdowns</li>
                  <li>• Real-world automation scenarios</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Element Locator Review */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Element Locator Syntax Review</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">WebElement Syntax for All Locators</h3>
            
            <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
              <div className="text-gray-400 mb-2">{"// All 8 locator types syntax"}</div>
              <span className="text-blue-300">WebElement</span> wb1 = driver.findElement(By.<span className="text-yellow-300">id</span>(<span className="text-green-300">&quot;id value&quot;</span>));<br/>
              <span className="text-blue-300">WebElement</span> wb2 = driver.findElement(By.<span className="text-yellow-300">name</span>(<span className="text-green-300">&quot;name value&quot;</span>));<br/>
              <span className="text-blue-300">WebElement</span> wb3 = driver.findElement(By.<span className="text-yellow-300">className</span>(<span className="text-green-300">&quot;class name value&quot;</span>));<br/>
              <span className="text-blue-300">WebElement</span> wb4 = driver.findElement(By.<span className="text-yellow-300">tagName</span>(<span className="text-green-300">&quot;tagname value&quot;</span>));<br/>
              <span className="text-blue-300">WebElement</span> wb5 = driver.findElement(By.<span className="text-yellow-300">linkText</span>(<span className="text-green-300">&quot;link value&quot;</span>));<br/>
              <span className="text-blue-300">WebElement</span> wb6 = driver.findElement(By.<span className="text-yellow-300">partialLinkText</span>(<span className="text-green-300">&quot;partial link value&quot;</span>));<br/>
              <span className="text-blue-300">WebElement</span> wb7 = driver.findElement(By.<span className="text-yellow-300">cssSelector</span>(<span className="text-green-300">&quot;CSS selector value&quot;</span>));<br/>
              <span className="text-blue-300">WebElement</span> wb8 = driver.findElement(By.<span className="text-yellow-300">xpath</span>(<span className="text-green-300">&quot;xpath value&quot;</span>));
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Elements/Objects:</strong> text box, radio button, button, dropdown, checkbox, links, 
                images, calendar, frame, popup, shadow window, etc.
              </p>
            </div>
          </div>
        </section>

        {/* CSS Selector Advanced Techniques */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Advanced CSS Selector Techniques</h2>
          
          <div className="space-y-8">
            {/* CSS Selector Variations */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">CSS Selector Syntax Variations</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Basic Selectors</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li><strong>By ID:</strong> <code>#idValue</code></li>
                      <li><strong>By Class:</strong> <code>.className</code></li>
                      <li><strong>By Tag:</strong> <code>tagName</code></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Combined Selectors</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li><strong>Tag + Class:</strong> <code>tagName.className</code></li>
                      <li><strong>Tag + ID:</strong> <code>tagName#idValue</code></li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Multiple Classes</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li><strong>Space → Dot:</strong> <code>.class1.class2.class3</code></li>
                      <li><strong>Any Single Class:</strong> <code>.className</code></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Attribute Selectors</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li><strong>Exact Match:</strong> <code>[attribute=&apos;value&apos;]</code></li>
                      <li><strong>Starts With:</strong> <code>[attribute^=&apos;value&apos;]</code></li>
                      <li><strong>Ends With:</strong> <code>[attribute$=&apos;value&apos;]</code></li>
                      <li><strong>Contains:</strong> <code>[attribute*=&apos;value&apos;]</code></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent-Child Relationships */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Parent-Child Relationships</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Ancestor-Descendant Selection</h4>
                  <p className="text-gray-600 text-sm mb-3">Use space to locate child elements within parent elements:</p>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-blue-300">parentTagname</span> <span className="text-green-300">childTagname</span><br/>
                    <span className="text-blue-300">parentTagname</span> <span className="text-green-300">childTagname</span>.<span className="text-yellow-300">className</span><br/>
                    <span className="text-blue-300">parentTagname</span> <span className="text-green-300">childTagname</span>#<span className="text-yellow-300">idValue</span><br/>
                    <span className="text-blue-300">parentTagname</span> <span className="text-green-300">childTagname</span>[<span className="text-purple-300">attribute</span>=<span className="text-green-300">&apos;value&apos;</span>]
                  </div>
                </div>
              </div>
            </div>

            {/* Real Examples */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Real-World CSS Selector Examples</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Form Elements</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    input[<span className="text-yellow-300">type</span>=<span className="text-green-300">&apos;email&apos;</span>]<br/>
                    .<span className="text-yellow-300">form-control</span>.<span className="text-yellow-300">ng-pristine</span>.<span className="text-yellow-300">ng-untouched</span>.<span className="text-yellow-300">ng-valid-email</span><br/>
                    input.<span className="text-yellow-300">form-control</span>.<span className="text-yellow-300">ng-pristine</span>.<span className="text-yellow-300">ng-untouched</span><br/>
                    input[<span className="text-yellow-300">ng-model</span>=<span className="text-green-300">&apos;EmailAdress&apos;</span>]
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Dynamic Elements</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    input[<span className="text-yellow-300">name</span>=<span className="text-green-300">&apos;firstname&apos;</span>]<br/>
                    input[<span className="text-yellow-300">aria-label</span>=<span className="text-green-300">&apos;First name&apos;</span>]<br/>
                    #<span className="text-yellow-300">u_0_8_V9</span><br/>
                    input[<span className="text-yellow-300">id</span>^=<span className="text-green-300">&apos;u_0_8&apos;</span>]<br/>
                    input[<span className="text-yellow-300">id</span>*=<span className="text-green-300">&apos;u_0_8&apos;</span>]
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Complex Selectors</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    .<span className="text-yellow-300">submit</span>.<span className="text-yellow-300">button</span><br/>
                    div.<span className="text-yellow-300">FPdoLc</span>.<span className="text-yellow-300">lJ9FBc</span> center input[<span className="text-green-300">name</span>=<span className="text-purple-300">&apos;btnK&apos;</span>]<br/>
                    .<span className="text-yellow-300">FPdoLc</span>.<span className="text-yellow-300">lJ9FBc</span> center input[<span className="text-green-300">class</span>=<span className="text-purple-300">&apos;gNO89b&apos;</span>]<br/>
                    .<span className="text-yellow-300">FPdoLc</span>.<span className="text-yellow-300">lJ9FBc</span> center input[<span className="text-green-300">value</span>=<span className="text-purple-300">&apos;Google Search&apos;</span>]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Form Automation */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Complete Registration Form Automation</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Demo Registration Form Example</h3>
            <p className="text-gray-600 mb-4 text-sm">
              <strong>URL:</strong> https://demo.automationtesting.in/Register.html
            </p>
            
            <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
              <span className="text-purple-300">package</span> Tutorial4;<br/><br/>
              
              <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
              <span className="text-purple-300">import</span> org.openqa.selenium.WebDriver;<br/>
              <span className="text-purple-300">import</span> org.openqa.selenium.WebElement;<br/>
              <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/>
              <span className="text-purple-300">import</span> org.openqa.selenium.support.ui.Select;<br/><br/>
              
              <span className="text-purple-300">public class</span> <span className="text-yellow-300">Demo1</span> {`{`}<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-blue-300">main</span>(String[] args) {`{`}<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">&quot;https://demo.automationtesting.in/Register.html&quot;</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Fill personal information"}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;input[ng-model=&apos;FirstName&apos;]&quot;</span>)).sendKeys(<span className="text-green-300">&quot;Rohit&quot;</span>);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;input[ng-model=&apos;LastName&apos;]&quot;</span>)).sendKeys(<span className="text-green-300">&quot;Mane&quot;</span>);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;textarea[ng-model=&apos;Adress&apos;]&quot;</span>)).sendKeys(<span className="text-green-300">&quot;Pune&quot;</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Contact information"}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#eid input&quot;</span>)).sendKeys(<span className="text-green-300">&quot;rohit@gmail.com&quot;</span>);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;input[ng-model=&apos;Phone&apos;]&quot;</span>)).sendKeys(<span className="text-green-300">&quot;9090909012&quot;</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Gender selection"}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;input[value=&apos;Male&apos;]&quot;</span>)).click();<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Hobbies selection"}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#checkbox1&quot;</span>)).click();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#checkbox2&quot;</span>)).click();<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Skills dropdown"}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> skillsDropdown = driver.findElement(By.id(<span className="text-green-300">&quot;Skills&quot;</span>));<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Select</span> skillsSelect = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(skillsDropdown);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skillsSelect.selectByVisibleText(<span className="text-green-300">&quot;Java&quot;</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Date of birth - Year"}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> yearDropdown = driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#yearbox&quot;</span>));<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Select</span> yearSelect = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(yearDropdown);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yearSelect.selectByVisibleText(<span className="text-green-300">&quot;2010&quot;</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Date of birth - Month"}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> monthDropdown = driver.findElement(By.cssSelector(<span className="text-green-300">&quot;select[ng-model=&apos;monthbox&apos;]&quot;</span>));<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Select</span> monthSelect = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(monthDropdown);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;monthSelect.selectByVisibleText(<span className="text-green-300">&quot;April&quot;</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Date of birth - Day"}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> dayDropdown = driver.findElement(By.id(<span className="text-green-300">&quot;daybox&quot;</span>));<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Select</span> daySelect = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(dayDropdown);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;daySelect.selectByVisibleText(<span className="text-green-300">&quot;20&quot;</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Password fields"}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#firstpassword&quot;</span>)).sendKeys(<span className="text-green-300">&quot;Rohit@123&quot;</span>);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#secondpassword&quot;</span>)).sendKeys(<span className="text-green-300">&quot;Rohit@123&quot;</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Submit form"}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#submitbtn&quot;</span>)).click();<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
              {`}`}
            </div>
          </div>
        </section>

        {/* Form Elements Breakdown */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Form Elements Breakdown</h2>
          
          <div className="space-y-8">
            {/* Text Inputs */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Text Input Elements</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Input Fields</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>First Name:</strong> <code>input[ng-model=&apos;FirstName&apos;]</code></li>
                    <li><strong>Last Name:</strong> <code>input[ng-model=&apos;LastName&apos;]</code></li>
                    <li><strong>Email:</strong> <code>#eid input</code> (parent-child selector)</li>
                    <li><strong>Phone:</strong> <code>input[ng-model=&apos;Phone&apos;]</code></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Textarea</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Address:</strong> <code>textarea[ng-model=&apos;Adress&apos;]</code></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Selection Elements */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Selection Elements</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Radio Buttons</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Gender (Male):</strong> <code>input[value=&apos;Male&apos;]</code></li>
                    <li><strong>Gender (Female):</strong> <code>input[value=&apos;Female&apos;]</code></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Checkboxes</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Hobby 1:</strong> <code>#checkbox1</code></li>
                    <li><strong>Hobby 2:</strong> <code>#checkbox2</code></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Dropdowns (Select Elements)</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Skills:</strong> <code>#Skills</code></li>
                    <li><strong>Year:</strong> <code>#yearbox</code></li>
                    <li><strong>Month:</strong> <code>select[ng-model=&apos;monthbox&apos;]</code></li>
                    <li><strong>Day:</strong> <code>#daybox</code></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Password and Submit */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Password and Submit Elements</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Password Fields</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Password:</strong> <code>#firstpassword</code></li>
                    <li><strong>Confirm Password:</strong> <code>#secondpassword</code></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Submit Button</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Submit:</strong> <code>#submitbtn</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Element Interaction Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Element Interaction Methods</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Common WebElement Methods</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Text Input Methods</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li><strong>sendKeys():</strong> Enter text in input fields</li>
                      <li><strong>clear():</strong> Clear existing text</li>
                      <li><strong>getText():</strong> Get element text content</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Click Methods</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li><strong>click():</strong> Click buttons, links, checkboxes</li>
                      <li><strong>submit():</strong> Submit forms</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Dropdown Methods</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li><strong>Select class:</strong> For &lt;select&gt; elements</li>
                      <li><strong>selectByVisibleText():</strong> Select by text</li>
                      <li><strong>selectByValue():</strong> Select by value</li>
                      <li><strong>selectByIndex():</strong> Select by index</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Attribute Methods</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li><strong>getAttribute():</strong> Get attribute value</li>
                      <li><strong>isEnabled():</strong> Check if enabled</li>
                      <li><strong>isSelected():</strong> Check if selected</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 13 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "Which method is used to enter text in input fields?",
              options: ["setText()", "sendKeys()", "enterText()", "inputText()"],
              correctAnswer: 1,
              explanation: "The sendKeys() method is used to enter text in input fields, textareas, and other text input elements."
            },
            {
              id: 2,
              question: "How do you select a dropdown option by visible text using Select class?",
              options: ["selectByText()", "selectByVisibleText()", "selectByDisplay()", "selectByLabel()"],
              correctAnswer: 1,
              explanation: "Use selectByVisibleText() method of the Select class to select dropdown options by their visible text."
            },
            {
              id: 3,
              question: "Which CSS selector would select an input with ng-model='FirstName'?",
              options: ["input.FirstName", "input#FirstName", "input[ng-model='FirstName']", "input:FirstName"],
              correctAnswer: 2,
              explanation: "Use square brackets for attribute selection: input[ng-model='FirstName'] selects input elements with ng-model attribute equal to 'FirstName'."
            },
            {
              id: 4,
              question: "What is the correct way to handle multiple class names in CSS selectors?",
              options: ["Use spaces", "Replace spaces with dots", "Use commas", "Use semicolons"],
              correctAnswer: 1,
              explanation: "When multiple class names are present, replace spaces with dots. For example: .class1.class2.class3"
            },
            {
              id: 5,
              question: "Which selector uses parent-child relationship to find elements?",
              options: ["parentTag > childTag", "parentTag childTag", "parentTag + childTag", "parentTag ~ childTag"],
              correctAnswer: 1,
              explanation: "Use space between parent and child tags for descendant selection: 'parentTag childTag' selects child elements within parent elements."
            }
          ]}
        />

        {/* Practice Assignments */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practice Assignments</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="font-medium text-yellow-900 mb-4">🎯 Assignment 1: Complete Form Automation</h3>
              <p className="text-yellow-800 text-sm mb-3">
                <strong>URL:</strong> https://demo.automationtesting.in/Register.html
              </p>
              <ul className="text-yellow-800 text-sm space-y-1 list-disc list-inside ml-4">
                <li>Automate the complete registration form</li>
                <li>Use only CSS selectors (no XPath)</li>
                <li>Fill all required fields with valid data</li>
                <li>Select appropriate dropdowns and checkboxes</li>
                <li>Submit the form successfully</li>
                <li>Add proper waits and error handling</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-medium text-green-900 mb-4">🎯 Assignment 2: Alternative Registration Sites</h3>
              <p className="text-green-800 text-sm mb-3">
                <strong>URL:</strong> https://demo.guru99.com/test/newtours/register.php
              </p>
              <ul className="text-green-800 text-sm space-y-1 list-disc list-inside ml-4">
                <li>Practice with different form structure</li>
                <li>Use various CSS selector techniques</li>
                <li>Handle different input types</li>
                <li>Compare selector strategies</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-medium text-purple-900 mb-4">🎯 Assignment 3: CSS Selector Mastery</h3>
              <ul className="text-purple-800 text-sm space-y-1 list-disc list-inside ml-4">
                <li>Create 10 different CSS selectors for the same element</li>
                <li>Practice attribute selectors with ^, $, * operators</li>
                <li>Use parent-child relationships in complex forms</li>
                <li>Handle dynamic elements with partial matching</li>
                <li>Compare performance of different selector strategies</li>
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
                  <h3 className="font-medium text-gray-900 mb-3">Form Automation Essentials</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Text Input:</strong> sendKeys() for input/textarea</li>
                    <li><strong>Selections:</strong> click() for radio/checkbox</li>
                    <li><strong>Dropdowns:</strong> Select class for &lt;select&gt; elements</li>
                    <li><strong>Submission:</strong> click() on submit button</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">CSS Selector Mastery</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Attribute Selectors:</strong> [attribute=&apos;value&apos;]</li>
                    <li><strong>Dynamic Elements:</strong> ^, $, * operators</li>
                    <li><strong>Multiple Classes:</strong> .class1.class2</li>
                    <li><strong>Parent-Child:</strong> parent child syntax</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Best Practices</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Prefer CSS:</strong> Faster than XPath</li>
                    <li><strong>Use IDs:</strong> Most reliable when available</li>
                    <li><strong>Attribute Selectors:</strong> For dynamic content</li>
                    <li><strong>Clear Selectors:</strong> Readable and maintainable</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Real-World Applications</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Registration Forms:</strong> Complete user onboarding</li>
                    <li><strong>E-commerce:</strong> Product selection and checkout</li>
                    <li><strong>Contact Forms:</strong> Lead generation automation</li>
                    <li><strong>Survey Forms:</strong> Data collection automation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-100 rounded-xl">
              <p className="text-blue-800 text-sm font-medium">
                💡 Master these form automation techniques as they&apos;re fundamental for real-world test automation. 
                Day 14 will introduce advanced Selenium features and framework concepts!
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}