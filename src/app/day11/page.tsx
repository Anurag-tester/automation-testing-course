'use client'

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day11() {
  return (
    <DayLayout
      dayNumber={11}
      title="Day 11: Selenium Locators & Dropdown Handling"
      description="Master Selenium locators (8 types), CSS Selector vs XPath, and dropdown handling with Select class"
      previousDay="/day10"
      nextDay="/day12"
    >
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Today&apos;s Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Selenium Locators</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 8 types of locators in Selenium</li>
                  <li>• CSS Selector vs XPath comparison</li>
                  <li>• Absolute vs Relative XPath</li>
                  <li>• XPath axes and methods</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Dropdown Handling</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Select class for dropdown handling</li>
                  <li>• selectByVisibleText(), selectByValue(), selectByIndex()</li>
                  <li>• Real-world dropdown examples</li>
                  <li>• Multiple dropdown interactions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selenium Locators */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Selenium Locators</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">8 Types of Locators in Selenium</h3>
              <p className="text-gray-600 mb-4 text-sm">
                <strong>What is a locator?</strong> Locator is used to locate the element or object in a web page.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Basic Locators</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>1. id</strong> - Fastest locator (unique identifier)</li>
                    <li><strong>2. name</strong> - Uses name attribute</li>
                    <li><strong>3. className</strong> - Uses class attribute</li>
                    <li><strong>4. tagName</strong> - Uses HTML tag name</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Advanced Locators</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>5. linkText</strong> - For complete link text</li>
                    <li><strong>6. partialLinkText</strong> - For partial link text</li>
                    <li><strong>7. CSS Selector</strong> - CSS-based selection</li>
                    <li><strong>8. XPath</strong> - XML path expressions</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  🏆 <strong>Fastest Locator:</strong> ID locator is the fastest locator in Selenium
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Selector vs XPath */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">CSS Selector vs XPath</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Comparison Overview</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Aspect</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">CSS Selector</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">XPath</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Direction</td>
                      <td className="py-3 px-4">Forward direction only</td>
                      <td className="py-3 px-4">Forward and backward direction</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Speed</td>
                      <td className="py-3 px-4 text-green-600">Faster</td>
                      <td className="py-3 px-4 text-yellow-600">Slower</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Shadow DOM</td>
                      <td className="py-3 px-4 text-green-600">Can locate shadow elements</td>
                      <td className="py-3 px-4 text-red-600">Cannot locate shadow elements</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Methods</td>
                      <td className="py-3 px-4">id, className, tagName</td>
                      <td className="py-3 px-4">text(), contains(), axes, etc.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CSS Selector Syntax */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">CSS Selector Syntax</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Using ID (#)</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-gray-400">{"// Syntax: #idValue"}</span><br/>
                    driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#yesRadio&quot;</span>)).click();
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Using Class Name (.)</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-gray-400">{"// Syntax: .className"}</span><br/>
                    driver.findElement(By.cssSelector(<span className="text-green-300">&quot;.custom-control-input&quot;</span>)).click();
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Using Tag Name</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-gray-400">{"// Syntax: tagName"}</span><br/>
                    driver.findElement(By.cssSelector(<span className="text-green-300">&quot;input&quot;</span>)).click();
                  </div>
                </div>
              </div>
            </div>

            {/* XPath Types */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Absolute vs Relative XPath</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 mb-3">Absolute XPath</h4>
                  <ul className="text-red-700 space-y-2 text-sm mb-4">
                    <li>• Complete path from root node</li>
                    <li>• Starts with single forward slash (/)</li>
                    <li>• Faster execution</li>
                    <li>• Higher failure chances</li>
                    <li>• Changes with DOM structure</li>
                  </ul>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono break-all">
                    /html/body/div[2]/div/div/div/<br/>
                    div[2]/div[2]/div[2]/input
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-3">Relative XPath</h4>
                  <ul className="text-green-700 space-y-2 text-sm mb-4">
                    <li>• Start from any point in DOM</li>
                    <li>• Starts with double forward slash (//)</li>
                    <li>• Slower execution</li>
                    <li>• Lower failure chances</li>
                    <li>• More flexible and robust</li>
                  </ul>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono">
                    {"//input[@id='yesRadio']"}<br/>
                    {"(//input[@name='like'])[1]"}
                  </div>
                </div>
              </div>
            </div>

            {/* XPath Axes */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">XPath Axes</h3>
              <p className="text-gray-600 mb-4 text-sm">
                XPath axes are used to locate elements in forward or backward direction from the current node.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Navigation Axes</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>following</strong> - All elements after current</li>
                    <li><strong>preceding</strong> - All elements before current</li>
                    <li><strong>following-sibling</strong> - Next siblings</li>
                    <li><strong>preceding-sibling</strong> - Previous siblings</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Relationship Axes</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>parent</strong> - Direct parent element</li>
                    <li><strong>child</strong> - Direct child elements</li>
                    <li><strong>ancestor</strong> - All parent elements</li>
                    <li><strong>descendant</strong> - All child elements</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-gray-400">{"// XPath Axes Examples"}</span><br/>
                {"//label[text()="}<span className="text-green-300">&apos;Yes&apos;</span>{"]"}/parent::div/child::input<br/>
                {"//input[@id="}<span className="text-green-300">&apos;yesRadio&apos;</span>{"]"}/following-sibling::label
              </div>
            </div>
          </div>
        </section>

        {/* Dropdown Handling */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Dropdown Handling in Selenium</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Select Class Overview</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Selenium provides the Select class to handle dropdown elements that use the &lt;select&gt; tag.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-blue-900 mb-2">6 Ways to Handle Dropdowns</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• selectByVisibleText()</li>
                    <li>• selectByValue()</li>
                  </ul>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• selectByIndex()</li>
                    <li>• deselectByVisibleText()</li>
                  </ul>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• deselectByValue()</li>
                    <li>• deselectByIndex()</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Basic Dropdown Handling Steps</h4>
                <ol className="text-gray-600 space-y-2 text-sm list-decimal list-inside">
                  <li>Open browser: <code>ChromeDriver driver = new ChromeDriver();</code></li>
                  <li>Open URL: <code>driver.get("https://www.facebook.com/reg");</code></li>
                  <li>Locate dropdown: <code>WebElement wb = driver.findElement(By.cssSelector("#month"));</code></li>
                  <li>Create Select object: <code>Select sel = new Select(wb);</code></li>
                  <li>Select option: <code>sel.selectByVisibleText("Jun");</code></li>
                </ol>
              </div>
            </div>

            {/* Dropdown Methods */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Dropdown Selection Methods</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">selectByVisibleText()</h4>
                  <p className="text-gray-600 text-sm mb-3">Selects option by the visible text displayed to user.</p>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">WebElement</span> monthDropdown = driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#month&quot;</span>));<br/>
                    <span className="text-blue-300">Select</span> sel = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(monthDropdown);<br/>
                    sel.selectByVisibleText(<span className="text-green-300">&quot;February&quot;</span>);
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">selectByValue()</h4>
                  <p className="text-gray-600 text-sm mb-3">Selects option by the value attribute of the option tag.</p>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    sel.selectByValue(<span className="text-green-300">&quot;3&quot;</span>); <span className="text-gray-400">{"// Selects March (value=3)"}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">selectByIndex()</h4>
                  <p className="text-gray-600 text-sm mb-3">Selects option by its index position (0-based).</p>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    sel.selectByIndex(<span className="text-yellow-300">1</span>); <span className="text-gray-400">{"// Selects second option (index 1)"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-world Example */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Real-world Example: Multiple Dropdowns</h3>
              <p className="text-gray-600 text-sm mb-4">
                Example using copyright.gov.in registration form with Title, Country, and State dropdowns.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                <span className="text-purple-300">import</span> org.openqa.selenium.WebElement;<br/>
                <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/>
                <span className="text-purple-300">import</span> org.openqa.selenium.support.ui.Select;<br/><br/>
                
                <span className="text-purple-300">public class</span> <span className="text-yellow-300">DropdownDemo</span> {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-blue-300">main</span>(String[] args) {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">&quot;https://copyright.gov.in/UserRegistration/frmNewUser.aspx&quot;</span>);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Handle Title dropdown"}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> titleDropdown = driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#ctl00_ContentPlaceHolder1_ddlTitle&quot;</span>));<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Select</span> titleSelect = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(titleDropdown);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;titleSelect.selectByVisibleText(<span className="text-green-300">&quot;Mrs.&quot;</span>);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Handle Country dropdown"}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> countryDropdown = driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#ctl00_ContentPlaceHolder1_ddlCountry&quot;</span>));<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Select</span> countrySelect = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(countryDropdown);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;countrySelect.selectByVisibleText(<span className="text-green-300">&quot;India&quot;</span>);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Handle State dropdown"}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> stateDropdown = driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#ctl00_ContentPlaceHolder1_ddlState&quot;</span>));<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Select</span> stateSelect = <span className="text-purple-3000">new</span> <span className="text-blue-300">Select</span>(stateDropdown);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stateSelect.selectByValue(<span className="text-green-300">&quot;24&quot;</span>);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                {`}`}
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 11 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "Which is the fastest locator in Selenium?",
              options: ["className", "id", "xpath", "cssSelector"],
              correctAnswer: 1,
              explanation: "ID locator is the fastest locator in Selenium because it's unique and directly identifies elements."
            },
            {
              id: 2,
              question: "What is the main difference between CSS Selector and XPath?",
              options: ["No difference", "CSS is slower", "XPath can navigate backward, CSS cannot", "CSS uses more memory"],
              correctAnswer: 2,
              explanation: "XPath can locate elements in both forward and backward directions, while CSS Selector can only locate elements in forward direction."
            },
            {
              id: 3,
              question: "How do you select a dropdown option by visible text?",
              options: ["selectByText()", "selectByVisibleText()", "selectByDisplay()", "selectByLabel()"],
              correctAnswer: 1,
              explanation: "Use selectByVisibleText() method of the Select class to select dropdown options by their visible text."
            },
            {
              id: 4,
              question: "What does '//' represent in XPath?",
              options: ["Absolute path", "Relative path", "Comment", "Division"],
              correctAnswer: 1,
              explanation: "Double forward slash (//) represents relative XPath, which can start searching from any point in the DOM structure."
            },
            {
              id: 5,
              question: "Which XPath axis is used to find the parent element?",
              options: ["ancestor", "parent", "preceding", "following"],
              correctAnswer: 1,
              explanation: "The 'parent' axis is used to locate the direct parent element of the current node in XPath."
            }
          ]}
        />

        {/* Practice Assignments */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practice Assignments</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="font-medium text-yellow-900 mb-4">🎯 Assignment 1: Registration Form</h3>
              <p className="text-yellow-800 text-sm mb-3">
                <strong>URL:</strong> https://demo.automationtesting.in/Register.html
              </p>
              <ul className="text-yellow-800 text-sm space-y-1 list-disc list-inside ml-4">
                <li>Fill first name and last name</li>
                <li>Enter address, email, and phone number</li>
                <li>Select gender and hobbies</li>
                <li>Select Skills dropdown (Java)</li>
                <li>Select Date, Month, and Year</li>
                <li>Enter password and confirm password</li>
                <li>Click submit button</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-medium text-green-900 mb-4">🎯 Assignment 2: E-commerce Flow</h3>
              <p className="text-green-800 text-sm mb-3">
                <strong>URL:</strong> https://www.saucedemo.com/inventory.html
              </p>
              <ul className="text-green-800 text-sm space-y-1 list-disc list-inside ml-4">
                <li>Login to the application</li>
                <li>Select &quot;Price (high to low)&quot; from sort dropdown</li>
                <li>Click on first &quot;Add to cart&quot; button</li>
                <li>Click on cart container</li>
                <li>Click on checkout button</li>
                <li>Enter first name, last name, and zip code</li>
                <li>Click continue and finish buttons</li>
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
                  <h3 className="font-medium text-gray-900 mb-3">Locator Hierarchy</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Fastest</strong>: id (unique, direct access)</li>
                    <li><strong>Fast</strong>: name, className, tagName</li>
                    <li><strong>Medium</strong>: linkText, partialLinkText</li>
                    <li><strong>Flexible</strong>: CSS Selector, XPath</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">CSS Selector Syntax</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>ID</strong>: #idValue</li>
                    <li><strong>Class</strong>: .className</li>
                    <li><strong>Tag</strong>: tagName</li>
                    <li><strong>Attribute</strong>: [attribute=&apos;value&apos;]</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">XPath Best Practices</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Prefer Relative</strong>: More robust than absolute</li>
                    <li><strong>Use Attributes</strong>: [@id=&apos;value&apos;], [@class=&apos;value&apos;]</li>
                    <li><strong>Text Methods</strong>: text(), contains(), starts-with()</li>
                    <li><strong>Axes Navigation</strong>: parent, child, sibling</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Dropdown Handling</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Select Class</strong>: For &lt;select&gt; tag dropdowns</li>
                    <li><strong>By Text</strong>: selectByVisibleText(&quot;Option&quot;)</li>
                    <li><strong>By Value</strong>: selectByValue(&quot;optionValue&quot;)</li>
                    <li><strong>By Index</strong>: selectByIndex(0) - zero-based</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-100 rounded-xl">
              <p className="text-blue-800 text-sm font-medium">
                💡 Master these locator strategies and dropdown handling techniques as they&apos;re essential for Day 12 
                where we&apos;ll explore advanced element interactions and form handling!
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}