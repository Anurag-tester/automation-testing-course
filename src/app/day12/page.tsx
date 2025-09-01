'use client'
export const metadata = {
  title: 'Day 12: Element Interactions - Click, Type, Clear | SDET Course',
  description: 'Learn Selenium element interactions including click, sendKeys, clear operations. Master element states and web element methods.',
  keywords: 'selenium element interactions, click, sendkeys, clear, web element methods, element states, selenium operations',
}

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day12() {
  return (
    <DayLayout
      dayNumber={12}
      title="Day 12: Advanced Selenium Locators & CSS Selectors"
      description="Deep dive into CSS Selectors, XPath axes, and advanced element location techniques in Selenium WebDriver"
      previousDay="/day11"
      nextDay="/day13"
    >
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Today&apos;s Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Advanced CSS Selectors</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• CSS Selector syntax variations</li>
                  <li>• Attribute-based selectors</li>
                  <li>• Dynamic element location</li>
                  <li>• Parent-child relationships</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">XPath Mastery</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• XPath axes in detail</li>
                  <li>• Real-world XPath examples</li>
                  <li>• Interview preparation</li>
                  <li>• Best practices and tips</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Locator Review */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Selenium Locators Review</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">8 Types of Locators</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 mb-2">Basic Locators</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li><strong>1. id</strong> - Fastest and most reliable</li>
                    <li><strong>2. name</strong> - Uses name attribute</li>
                    <li><strong>3. className</strong> - Uses class attribute</li>
                    <li><strong>4. tagName</strong> - Uses HTML tag</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-800 mb-2">Advanced Locators</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li><strong>5. linkText</strong> - Complete link text</li>
                    <li><strong>6. partialLinkText</strong> - Partial link text</li>
                    <li><strong>7. cssSelector</strong> - CSS-based selection</li>
                    <li><strong>8. xpath</strong> - XML path expressions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Purpose:</strong> Locators are used to locate elements/objects in web pages such as text boxes, 
                radio buttons, dropdowns, checkboxes, links, images, calendars, frames, popups, etc.
              </p>
            </div>
          </div>
        </section>

        {/* CSS Selector Advanced */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Advanced CSS Selector Techniques</h2>
          
          <div className="space-y-8">
            {/* Basic CSS Syntax */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">CSS Selector Syntax Variations</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      <li><strong>Multiple Classes:</strong> <code>.class1.class2.class3</code></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <div className="text-gray-400 mb-2">{"// CSS Selector Examples"}</div>
                  driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#yesRadio&quot;</span>)).click();<br/>
                  driver.findElement(By.cssSelector(<span className="text-green-300">&quot;.custom-control-input&quot;</span>)).click();<br/>
                  driver.findElement(By.cssSelector(<span className="text-green-300">&quot;input&quot;</span>)).click();<br/>
                  driver.findElement(By.cssSelector(<span className="text-green-300">&quot;input.form-control&quot;</span>)).sendKeys(<span className="text-green-300">&quot;text&quot;</span>);
                </div>
              </div>
            </div>

            {/* Attribute Selectors */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Attribute-Based Selectors</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Basic Attribute Selector</h4>
                  <p className="text-gray-600 text-sm mb-3">Use square brackets to select elements by attributes:</p>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-blue-300">tagname</span>[<span className="text-yellow-300">attributeKeyName</span>=<span className="text-green-300">&apos;value&apos;</span>]
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Dynamic Element Selectors</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 text-sm mb-2"><strong>Starts with (^):</strong> When starting characters are constant</p>
                      <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                        <span className="text-blue-300">tagname</span>[<span className="text-yellow-300">attribute</span>^=<span className="text-green-300">&apos;StartingConstantValue&apos;</span>]
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm mb-2"><strong>Ends with ($):</strong> When ending characters are constant</p>
                      <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                        <span className="text-blue-300">tagname</span>[<span className="text-yellow-300">attribute</span>$=<span className="text-green-300">&apos;EndingConstantValue&apos;</span>]
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm mb-2"><strong>Contains (*):</strong> When characters are constant anywhere</p>
                      <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono">
                        <span className="text-blue-300">tagname</span>[<span className="text-yellow-300">attribute</span>*=<span className="text-green-300">&apos;constantValue&apos;</span>]
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <div className="text-gray-400 mb-2">{"// Real Examples"}</div>
                  input[<span className="text-yellow-300">type</span>=<span className="text-green-300">&apos;email&apos;</span>]<br/>
                  input[<span className="text-yellow-300">name</span>=<span className="text-green-300">&apos;firstname&apos;</span>]<br/>
                  input[<span className="text-yellow-300">id</span>^=<span className="text-green-300">&apos;u_0_8&apos;</span>]<br/>
                  input[<span className="text-yellow-300">id</span>*=<span className="text-green-300">&apos;u_0_8&apos;</span>]
                </div>
              </div>
            </div>

            {/* Parent-Child Selectors */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Parent-Child Relationship Selectors</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Ancestor-Descendant Selection</h4>
                  <p className="text-gray-600 text-sm mb-3">Use space to select child elements within parent elements:</p>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-blue-300">parentTagname</span> <span className="text-green-300">childTagname</span><br/>
                    <span className="text-blue-300">parentTagname</span> <span className="text-green-300">childTagname</span>.<span className="text-yellow-300">className</span><br/>
                    <span className="text-blue-300">parentTagname</span> <span className="text-green-300">childTagname</span>#<span className="text-yellow-300">idValue</span><br/>
                    <span className="text-blue-300">parentTagname</span> <span className="text-green-300">childTagname</span>[<span className="text-yellow-300">attribute</span>=<span className="text-purple-300">&apos;value&apos;</span>]
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <div className="text-gray-400 mb-2">{"// Complex Parent-Child Examples"}</div>
                  div.<span className="text-yellow-300">FPdoLc</span>.<span className="text-yellow-300">lJ9FBc</span> center input[<span className="text-green-300">name</span>=<span className="text-purple-300">&apos;btnK&apos;</span>]<br/>
                  .<span className="text-yellow-300">FPdoLc</span>.<span className="text-yellow-300">lJ9FBc</span> center input[<span className="text-green-300">class</span>=<span className="text-purple-300">&apos;gNO89b&apos;</span>]<br/>
                  .<span className="text-yellow-300">FPdoLc</span>.<span className="text-yellow-300">lJ9FBc</span> center input[<span className="text-green-300">value</span>=<span className="text-purple-300">&apos;Google Search&apos;</span>]<br/>
                  #<span className="text-yellow-300">eid</span> input
                </div>
              </div>
            </div>

            {/* Multiple Class Names */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Handling Multiple Class Names</h3>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-800 mb-2">Important Note</h4>
                  <p className="text-yellow-700 text-sm">
                    When multiple class names are present, replace spaces with dots. You can use any one class name 
                    or combine multiple classes for more specific targeting.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <div className="text-gray-400 mb-2">{"// Multiple Class Examples"}</div>
                  .<span className="text-yellow-300">ng-touched</span><br/>
                  .<span className="text-yellow-300">form-control</span>.<span className="text-yellow-300">ng-pristine</span>.<span className="text-yellow-300">ng-valid</span>.<span className="text-yellow-300">ng-touched</span><br/>
                  input.<span className="text-yellow-300">form-control</span>.<span className="text-yellow-300">ng-pristine</span>.<span className="text-yellow-300">ng-untouched</span><br/>
                  .<span className="text-yellow-300">submit</span>.<span className="text-yellow-300">button</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* XPath Axes Deep Dive */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">XPath Axes Deep Dive</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">XPath Axes Overview</h3>
              <p className="text-gray-600 mb-4 text-sm">
                XPath axes are used to locate elements in forward or backward direction from the current context node.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Navigation Axes</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>following</strong> - All elements after current node</li>
                    <li><strong>preceding</strong> - All elements before current node</li>
                    <li><strong>following-sibling</strong> - Next sibling elements</li>
                    <li><strong>preceding-sibling</strong> - Previous sibling elements</li>
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
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Real-World XPath Examples</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Absolute vs Relative XPath</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 text-sm mb-2"><strong>Absolute XPath Examples:</strong></p>
                      <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono">
                        /html/body/div[2]/div/div/div/div[2]/div[2]/div[2]/input<br/>
                        /html/body/div[2]/div/div/div/div[2]/div[2]/div/div[2]/input<br/>
                        /html/body/div[2]/div/div/div/div[2]/div[2]/span/div/div[2]/input
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm mb-2"><strong>Relative XPath Examples:</strong></p>
                      <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono">
                        {"//input[@id='yesRadio']"}<br/>
                        {"(//input[@name='like'])[1]"}<br/>
                        {"//label[text()='Yes']/parent::div/child::input"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Interview Tip</h4>
                  <p className="text-blue-700 text-sm">
                    <strong>Be prepared to write at least 2 XPath expressions for real-time websites during interviews.</strong> 
                    Practice with popular sites like Facebook, Google, Amazon, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practical Implementation Examples</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Facebook Registration Form</h3>
              
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <div className="text-gray-400 mb-2">{"// Facebook form automation"}</div>
                <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                driver.get(<span className="text-green-300">&quot;https://www.facebook.com/reg&quot;</span>);<br/><br/>
                
                <span className="text-gray-400">{"// Using CSS Selectors"}</span><br/>
                <span className="text-blue-300">WebElement</span> monthDropdown = driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#month&quot;</span>));<br/>
                <span className="text-blue-300">Select</span> sel = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(monthDropdown);<br/>
                sel.selectByVisibleText(<span className="text-green-300">&quot;Feb&quot;</span>);
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Copyright Registration Form</h3>
              
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <div className="text-gray-400 mb-2">{"// Multiple dropdown handling"}</div>
                driver.get(<span className="text-green-300">&quot;https://copyright.gov.in/UserRegistration/frmNewUser.aspx&quot;</span>);<br/><br/>
                
                <span className="text-gray-400">{"// Title dropdown"}</span><br/>
                <span className="text-blue-300">WebElement</span> titleDropdown = driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#ctl00_ContentPlaceHolder1_ddlTitle&quot;</span>));<br/>
                <span className="text-blue-300">Select</span> titleSelect = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(titleDropdown);<br/>
                titleSelect.selectByValue(<span className="text-green-300">&quot;30&quot;</span>);<br/><br/>
                
                <span className="text-gray-400">{"// Country dropdown"}</span><br/>
                <span className="text-blue-300">WebElement</span> countryDropdown = driver.findElement(By.cssSelector(<span className="text-green-300">&quot;select#ctl00_ContentPlaceHolder1_ddlCountry&quot;</span>));<br/>
                <span className="text-blue-300">Select</span> countrySelect = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(countryDropdown);<br/>
                countrySelect.selectByValue(<span className="text-green-300">&quot;80&quot;</span>);<br/><br/>
                
                <span className="text-gray-400">{"// State dropdown"}</span><br/>
                <span className="text-blue-300">WebElement</span> stateDropdown = driver.findElement(By.cssSelector(<span className="text-green-300">&quot;#ctl00_ContentPlaceHolder1_ddlState&quot;</span>));<br/>
                <span className="text-blue-300">Select</span> stateSelect = <span className="text-purple-300">new</span> <span className="text-blue-300">Select</span>(stateDropdown);<br/>
                stateSelect.selectByValue(<span className="text-green-300">&quot;24&quot;</span>);
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 12 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "Which CSS selector syntax is used to select elements that start with a specific value?",
              options: ["attribute$='value'", "attribute^='value'", "attribute*='value'", "attribute='value'"],
              correctAnswer: 1,
              explanation: "The ^ symbol is used in CSS selectors to match attributes that start with a specific value: tagname[attribute^='StartingValue']"
            },
            {
              id: 2,
              question: "How do you handle multiple class names in CSS selectors?",
              options: ["Use spaces between classes", "Replace spaces with dots", "Use commas between classes", "Use semicolons between classes"],
              correctAnswer: 1,
              explanation: "When multiple class names are present, replace spaces with dots. For example: .class1.class2.class3"
            },
            {
              id: 3,
              question: "Which XPath axis is used to find the direct parent element?",
              options: ["ancestor", "parent", "preceding", "following"],
              correctAnswer: 1,
              explanation: "The 'parent' axis is used to locate the direct parent element of the current node in XPath."
            },
            {
              id: 4,
              question: "What is the difference between absolute and relative XPath in terms of failure chances?",
              options: ["Absolute has lower failure chances", "Relative has higher failure chances", "Absolute has higher failure chances", "Both have equal failure chances"],
              correctAnswer: 2,
              explanation: "Absolute XPath has higher failure chances because any changes in the DOM structure will break the complete path, while relative XPath is more flexible."
            },
            {
              id: 5,
              question: "Which CSS selector would select an input element with type='email'?",
              options: ["input.email", "input#email", "input[type='email']", "input:email"],
              correctAnswer: 2,
              explanation: "Use square brackets for attribute selection: input[type='email'] selects input elements with type attribute equal to 'email'."
            }
          ]}
        />

        {/* Practice Assignments */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practice Assignments</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="font-medium text-yellow-900 mb-4">🎯 Assignment 1: Registration Form Automation</h3>
              <p className="text-yellow-800 text-sm mb-3">
                <strong>URL:</strong> https://demo.automationtesting.in/Register.html
              </p>
              <ul className="text-yellow-800 text-sm space-y-1 list-disc list-inside ml-4">
                <li>Use CSS selectors for all form fields</li>
                <li>Fill first name, last name, address</li>
                <li>Enter email and phone number</li>
                <li>Select gender and hobbies</li>
                <li>Select Skills dropdown (Java)</li>
                <li>Select Date, Month, Year dropdowns</li>
                <li>Enter and confirm password</li>
                <li>Submit the form</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-medium text-green-900 mb-4">🎯 Assignment 2: E-commerce Automation</h3>
              <p className="text-green-800 text-sm mb-3">
                <strong>URL:</strong> https://www.saucedemo.com/inventory.html
              </p>
              <ul className="text-green-800 text-sm space-y-1 list-disc list-inside ml-4">
                <li>Login using CSS selectors</li>
                <li>Select &quot;Price (high to low)&quot; from sort dropdown</li>
                <li>Click first &quot;Add to cart&quot; button</li>
                <li>Navigate to cart and checkout</li>
                <li>Fill checkout form using attribute selectors</li>
                <li>Complete the purchase flow</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-medium text-purple-900 mb-4">🎯 Assignment 3: XPath Practice</h3>
              <p className="text-purple-800 text-sm mb-3">
                <strong>Task:</strong> Create XPath expressions for popular websites
              </p>
              <ul className="text-purple-800 text-sm space-y-1 list-disc list-inside ml-4">
                <li>Write 5 different XPath expressions for Google search</li>
                <li>Create relative XPath for Facebook login elements</li>
                <li>Use XPath axes (parent, child, sibling) in real scenarios</li>
                <li>Practice both absolute and relative XPath approaches</li>
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
                  <h3 className="font-medium text-gray-900 mb-3">CSS Selector Mastery</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Basic:</strong> #id, .class, tagName</li>
                    <li><strong>Combined:</strong> tag.class, tag#id</li>
                    <li><strong>Attribute:</strong> [attribute=&apos;value&apos;]</li>
                    <li><strong>Dynamic:</strong> ^, $, * operators</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">XPath Axes</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Navigation:</strong> following, preceding, sibling</li>
                    <li><strong>Relationship:</strong> parent, child, ancestor, descendant</li>
                    <li><strong>Best Practice:</strong> Use relative XPath for flexibility</li>
                    <li><strong>Interview Prep:</strong> Practice real-world examples</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Advanced Techniques</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Multiple Classes:</strong> Replace spaces with dots</li>
                    <li><strong>Parent-Child:</strong> Use space for descendant selection</li>
                    <li><strong>Dynamic Elements:</strong> Use partial matching</li>
                    <li><strong>Complex Selectors:</strong> Combine multiple techniques</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Best Practices</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Prefer ID:</strong> Most reliable and fastest</li>
                    <li><strong>CSS over XPath:</strong> Better performance</li>
                    <li><strong>Relative XPath:</strong> More maintainable</li>
                    <li><strong>Attribute Selectors:</strong> For dynamic content</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-100 rounded-xl">
              <p className="text-blue-800 text-sm font-medium">
                💡 Master these advanced locator techniques as they&apos;re essential for handling complex web applications. 
                Day 13 will focus on practical form automation and element interactions!
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}