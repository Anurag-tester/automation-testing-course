'use client'
export const metadata = {
  title: 'Day 20: Relative XPath Fundamentals | SDET Course',
  description: 'Master relative XPath techniques including single attributes, logical operators, and XPath functions for robust element location.',
  keywords: 'relative xpath, xpath fundamentals, xpath functions, xpath techniques, element location, xpath methods',
}
import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day20() {
  return (
    <DayLayout
      dayNumber={20}
      title="Relative XPath Fundamentals"
      description="Master relative XPath techniques including single attributes, logical operators, text methods, and advanced XPath functions for robust element location."
      previousDay="/day19"
      nextDay="/day21"
    >
      <div className="max-w-4xl mx-auto">
        {/* Relative XPath Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Relative XPath Overview</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Why Relative XPath?</h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                Relative XPath is used to locate elements in web pages and is the most preferable XPath method because we can start searching elements from the middle of the HTML DOM structure.
              </p>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">🔑 Key Characteristics</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Starts with double forward slash (//) </li>
                  <li>• More flexible than absolute XPath</li>
                  <li>• Has different inbuilt methods and keywords</li>
                  <li>• Can start searching from any point in DOM</li>
                  <li>• Most robust and maintainable approach</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-2">Basic Syntax Structure</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Basic relative XPath syntax"}</span><br/>
                  <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span>]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* XPath Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">XPath Location Methods</h2>
          
          <div className="space-y-8">
            {/* Single Attribute */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">1. Single Attribute XPath</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span>]
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  
                  <div className="grid gap-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h5 className="font-medium text-blue-900 mb-2">Facebook Registration Form</h5>
                      <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono space-y-1">
                        <div><span className="text-gray-400">{"// First name input"}</span></div>
                        <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">@name='firstname'</span>]</div>
                        
                        <div className="mt-2"><span className="text-gray-400">{"// Month dropdown"}</span></div>
                        <div><span className="text-yellow-300">//</span><span className="text-blue-300">select</span>[<span className="text-green-300">@aria-label='Month'</span>]</div>
                        <div><span className="text-yellow-300">//</span><span className="text-blue-300">select</span>[<span className="text-green-300">@name='birthday_month'</span>]</div>
                        <div><span className="text-yellow-300">//</span><span className="text-blue-300">select</span>[<span className="text-green-300">@id='month'</span>]</div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3">
                      <h5 className="font-medium text-green-900 mb-2">Form Elements</h5>
                      <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono space-y-1">
                        <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">@id='userEmail'</span>]</div>
                        <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">@placeholder='name@example.com'</span>]</div>
                        <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">@value='Male'</span>]</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AND Operator */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">2. XPath with AND Operator</h3>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">Condition</h4>
                  <p className="text-yellow-800 text-sm">Both attribute values should exist in the same element</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span> <span className="text-purple-300">and</span> <span className="text-green-300">@attribute='value'</span>]
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-gray-400">{"// Checkbox with multiple attributes"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">@id='hobbies-checkbox-1'</span> <span className="text-purple-300">and</span> <span className="text-green-300">@type='checkbox'</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Login button"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">@data-test='login-button'</span> <span className="text-purple-300">and</span> <span className="text-green-300">@id='login-button'</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Submit button"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">@type='submit'</span> <span className="text-purple-300">and</span> <span className="text-green-300">@class='submit-button btn_action'</span>]</div>
                  </div>
                </div>
              </div>
            </div>

            {/* OR Operator */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">3. XPath with OR Operator</h3>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Condition</h4>
                  <p className="text-purple-800 text-sm">Any one attribute value should exist in the same element</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span> <span className="text-purple-300">or</span> <span className="text-green-300">@attribute='value'</span>]
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">@name='login-button'</span> <span className="text-purple-300">or</span> <span className="text-green-300">@value='Login'</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">@id='u_0_8_p/'</span> <span className="text-purple-300">or</span> <span className="text-green-300">@aria-label='First name'</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">select</span>[<span className="text-green-300">@id='dropdown-class-example'</span> <span className="text-purple-300">or</span> <span className="text-green-300">@name='dropdown-class-example'</span>]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Text-Based Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Text-Based XPath Methods</h2>
          
          <div className="space-y-8">
            {/* text() Method */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">4. text() Method</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Use Case</h4>
                  <p className="text-blue-800 text-sm">
                    Locate elements using their physical text content (buttons, labels, links)
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">text()='value'</span>]
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-gray-400">{"// Button elements"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">button</span>[<span className="text-green-300">text()='Submit'</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">div</span>[<span className="text-green-300">text()='Login'</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Label elements"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">label</span>[<span className="text-green-300">text()='Female'</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">label</span>[<span className="text-green-300">text()='Music'</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Link elements"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">a</span>[<span className="text-green-300">text()='Forgot your password?'</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">a</span>[<span className="text-green-300">text()='Sign Up'</span>]</div>
                  </div>
                </div>
              </div>
            </div>

            {/* starts-with() Method */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">5. starts-with() Method</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Use Case</h4>
                  <p className="text-green-800 text-sm">
                    Locate elements when starting value is constant and remaining value is dynamic
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">starts-with(text(),'value')</span>]
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">a</span>[<span className="text-green-300">starts-with(text(),'Forgot')</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">a</span>[<span className="text-green-300">starts-with(text(),'Sign')</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">div</span>[<span className="text-green-300">starts-with(text(),'Login')</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">label</span>[<span className="text-green-300">starts-with(text(),'Female')</span>]</div>
                  </div>
                </div>
              </div>
            </div>

            {/* contains() Method */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">6. contains() Method</h3>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Use Case</h4>
                  <p className="text-purple-800 text-sm">
                    Locate elements using partial text values (any part of the text)
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">contains(text(), 'value')</span>]
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">label</span>[<span className="text-green-300">contains(text(),'Reading')</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">label</span>[<span className="text-green-300">contains(text(),'Other')</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">a</span>[<span className="text-green-300">contains(text(),'account')</span>]</div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">Comparison Example</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-gray-400">{"// Same element, different approaches:"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">a</span>[<span className="text-green-300">text()='Already have an account?'</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">a</span>[<span className="text-green-300">starts-with(text(),'Already')</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">a</span>[<span className="text-green-300">contains(text(),'account')</span>]</div>
                  </div>
                </div>
              </div>
            </div>

            {/* normalize-space() Method */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">7. normalize-space() Method</h3>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">Use Case</h4>
                  <p className="text-orange-800 text-sm">
                    Removes extra spaces (starting, middle, ending) and ignores case sensitivity
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">normalize-space(text())='value'</span>]
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-gray-400">{"// Handles extra spaces"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">button</span>[<span className="text-green-300">normalize-space(text())='Login'</span>]</div>
                    <div><span className="text-gray-400">{"// Works with: ' Login ', 'Login', '  Login  '"}</span></div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Combined with other methods"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">a</span>[<span className="text-green-300">normalize-space(contains(text(),'google'))</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">a</span>[<span className="text-green-300">normalize-space(starts-with(text(),'google'))</span>]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Practical Implementation</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Java Implementation Example</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Facebook Registration Form</h4>
                <p className="text-blue-800 text-sm">Locating month dropdown using different XPath approaches</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-gray-400">{"// Multiple ways to locate the same element"}</span><br/>
                <span className="text-blue-300">WebElement</span> monthDropdown1 = driver.findElement(By.xpath(<span className="text-green-300">"//select[@name='birthday_month']"</span>));<br/>
                <span className="text-blue-300">WebElement</span> monthDropdown2 = driver.findElement(By.xpath(<span className="text-green-300">"//select[@aria-label='Month']"</span>));<br/>
                <span className="text-blue-300">WebElement</span> monthDropdown3 = driver.findElement(By.xpath(<span className="text-green-300">"//select[@id='month']"</span>));<br/><br/>
                
                <span className="text-gray-400">{"// Using AND operator for more specific targeting"}</span><br/>
                <span className="text-blue-300">WebElement</span> loginBtn = driver.findElement(By.xpath(<span className="text-green-300">"//input[@type='submit' and @class='submit-button btn_action']"</span>));<br/><br/>
                
                <span className="text-gray-400">{"// Using text() method for buttons"}</span><br/>
                <span className="text-blue-300">WebElement</span> submitBtn = driver.findElement(By.xpath(<span className="text-green-300">"//button[text()='Submit']"</span>));<br/><br/>
                
                <span className="text-gray-400">{"// Using normalize-space for buttons with extra spaces"}</span><br/>
                <span className="text-blue-300">WebElement</span> loginBtnNorm = driver.findElement(By.xpath(<span className="text-green-300">"//button[normalize-space(text())='Login']"</span>));
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 20 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "What symbol does relative XPath start with?",
              options: ["Single forward slash (/)", "Double forward slash (//)", "Hash symbol (#)", "Dot symbol (.)"],
              correctAnswer: 1,
              explanation: "Relative XPath starts with double forward slash (//) which allows searching from any point in the HTML DOM structure, making it more flexible than absolute XPath."
            },
            {
              id: 2,
              question: "What is the difference between AND and OR operators in XPath?",
              options: ["No difference", "AND requires both conditions true, OR requires any one condition true", "OR is faster than AND", "AND is deprecated"],
              correctAnswer: 1,
              explanation: "AND operator requires both attribute conditions to be true in the same element, while OR operator requires only one of the attribute conditions to be true."
            },
            {
              id: 3,
              question: "Which XPath method is best for locating elements with dynamic text at the end?",
              options: ["text()", "contains()", "starts-with()", "normalize-space()"],
              correctAnswer: 2,
              explanation: "starts-with() method is ideal when the starting value is constant but the remaining value is dynamic, making it perfect for elements with dynamic suffixes."
            },
            {
              id: 4,
              question: "What does the normalize-space() method do?",
              options: ["Converts to lowercase", "Removes extra spaces and ignores case", "Only removes spaces", "Only ignores case"],
              correctAnswer: 1,
              explanation: "normalize-space() method removes extra spaces (starting, middle, ending) from text and can ignore case sensitivity, making it useful for handling inconsistent spacing in text elements."
            },
            {
              id: 5,
              question: "Which XPath method should you use to find an element containing the word 'account' anywhere in its text?",
              options: ["text()='account'", "starts-with(text(),'account')", "contains(text(),'account')", "normalize-space(text()='account')"],
              correctAnswer: 2,
              explanation: "contains() method is used to locate elements by partial text values, so contains(text(),'account') will find any element that has 'account' anywhere in its text content."
            }
          ]}
        />
      </div>
    </DayLayout>
  );
}