import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day3() {
  return (
    <DayLayout
      dayNumber={3}
      title="Black Box Testing Techniques"
      description="Deep dive into Black Box Testing techniques including ECP, BVA, Error Guessing, Decision Table, and State Transition Testing"
      previousDay="/day2"
      nextDay="/day4"
    >
        {/* Lesson Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Lesson Overview</h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Today we&apos;ll explore the comprehensive Black Box Testing techniques that form the foundation 
              of functional testing. You&apos;ll learn how to create effective test cases using proven methodologies 
              and understand the specific functionality of different web elements.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Testing Techniques</h3>
                <p className="text-gray-600 text-sm">5 core BBT methods</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Web Elements</h3>
                <p className="text-gray-600 text-sm">8 element functionalities</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Practical Examples</h3>
                <p className="text-gray-600 text-sm">Real-world scenarios</p>
              </div>
            </div>
          </div>
        </section>

        {/* Black Box Testing Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Black Box Testing Technique</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Core Principles</h3>
            <ul className="text-gray-600 space-y-3 text-sm leading-relaxed">
              <li>• In Black Box Testing technique we test application functionality with respect to client requirement</li>
              <li>• Black Box Testing is used to create the test cases</li>
              <li>• There are different techniques present in Black Box Testing technique</li>
            </ul>
          </div>
        </section>

        {/* Testing Techniques */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Black Box Testing Techniques</h2>
          
          <div className="space-y-8">
            {/* Equivalence Class Partitioning */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mr-3">1</div>
                <h3 className="text-xl font-medium text-gray-900">Equivalence Class Partitioning</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  We test which types of test data [value] are accepted by the text box [Object]
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-800 mb-3">Example: First Name Text Box</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• <strong>Valid inputs:</strong> Enter upper case and lower case values</p>
                    <p>• <strong>Invalid inputs:</strong> Enter special characters or numbers</p>
                    <p>• <strong>Expected result:</strong> Invalid inputs should return error message</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Boundary Value Analysis */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mr-3">2</div>
                <h3 className="text-xl font-medium text-gray-900">Boundary Value Analysis</h3>
                <div className="ml-auto bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">
                  IMPORTANT
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• In Boundary Value Analysis, we validate length or size of object</p>
                  <p className="text-gray-600 text-sm">• We validate how much character test data is accepted by the text box</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-800 mb-3">Example: First Name (3-8 characters)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-700 mb-2">Valid Boundary Tests:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 3 character test data (minimum)</li>
                        <li>• 8 character test data (maximum)</li>
                        <li>• 4/5 character test data (middle)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700 mb-2">Invalid Boundary Tests:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Below 3 character test data</li>
                        <li>• Above 8 character test data</li>
                        <li>• Validate response for each case</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Guessing Technique */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full mr-3">3</div>
                <h3 className="text-xl font-medium text-gray-900">Error Guessing Technique</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• We use our previous experience of application functionality to guess the errors</li>
                  <li>• Many defects can be found using error guessing testing technique where most developers make mistakes</li>
                </ul>
                
                <div className="bg-yellow-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-800 mb-3">Example: Gender Radio Button</h4>
                  <p className="text-gray-600 text-sm">
                    Test Gender radio button functionality - it should select only one option, 
                    but error occurs when both radio buttons can be selected simultaneously.
                  </p>
                </div>
              </div>
            </div>

            {/* Decision Table Testing */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full mr-3">4</div>
                <h3 className="text-xl font-medium text-gray-900">Decision Table Testing Technique</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• We write and test application functionality by providing multiple input conditions</li>
                  <li>• We validate/check what expected outcome occurs after executing the test cases</li>
                  <li>• Decision Table Testing Technique writes system behavior in table format</li>
                </ul>
                
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-800 mb-3">Example Application</h4>
                  <p className="text-gray-600 text-sm">
                    <strong>Client Requirement:</strong> Test Facebook register page with multiple input combinations 
                    and validate expected outcomes for each scenario.
                  </p>
                </div>
              </div>
            </div>

            {/* State Transition Testing */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mr-3">5</div>
                <h3 className="text-xl font-medium text-gray-900">State Transition Technique</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Every software functionality has various possible states</li>
                  <li>• These states change from one to another based on user actions</li>
                  <li>• State transition technique helps write test cases to cover all positive and negative functionalities</li>
                  <li>• Events are triggered which become scenarios, and we test all scenarios</li>
                </ul>
                
                <div className="bg-indigo-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-800 mb-3">Example: Account Lockout</h4>
                  <p className="text-gray-600 text-sm">
                    If we enter invalid credentials for the 4th time, then it blocks the account for the next 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Elements Functionality */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Web Elements & Their Functionality</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Object-Functionality Mapping</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Text box</span>
                    <span className="text-gray-600 text-sm">Enter, clear, delete, copy, paste, cut values</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Radio button</span>
                    <span className="text-gray-600 text-sm">Select only one option</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Button</span>
                    <span className="text-gray-600 text-sm">Click on button</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Link</span>
                    <span className="text-gray-600 text-sm">Click on link</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Drop down</span>
                    <span className="text-gray-600 text-sm">Select only one</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Drop down combo box</span>
                    <span className="text-gray-600 text-sm">Select one or multiple</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Image</span>
                    <span className="text-gray-600 text-sm">View</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Checkbox</span>
                    <span className="text-gray-600 text-sm">Select one or multiple</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Visual Examples & Diagrams</h2>
          
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-8">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
              <h3 className="font-medium text-gray-900">Black Box Testing Techniques - Visual Guide</h3>
            </div>
            <div className="p-6">
              <img 
                src="/Day 3/3.png" 
                alt="Black Box Testing Techniques Diagram"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* ECP & BVA Examples Document */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">ECP & BVA Detailed Examples</h2>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed text-sm">
              Explore comprehensive examples and tables demonstrating practical implementation of 
              Equivalence Class Partitioning and Boundary Value Analysis techniques with real test scenarios.
            </p>
          </div>
          
          {/* PDF Viewer */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
              <h3 className="font-medium text-gray-900">ECP and BVA Examples Document - Day 3</h3>
            </div>
            <div className="p-0">
              <iframe
                src="/Day 3/ECP and BVA 3.pdf"
                className="w-full h-[600px] border-0"
                title="ECP and BVA Examples Day 3"
              />
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 3 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "How many Black Box Testing techniques are covered in Day 3?",
              options: ["3 techniques", "4 techniques", "5 techniques", "6 techniques"],
              correctAnswer: 2,
              explanation: "There are 5 Black Box Testing techniques: ECP, BVA, Error Guessing, Decision Table, and State Transition Testing."
            },
            {
              id: 2,
              question: "What does BVA validate in testing?",
              options: ["Data types", "Length or size of objects", "User interface", "Database connections"],
              correctAnswer: 1,
              explanation: "BVA (Boundary Value Analysis) validates the length or size of objects, testing minimum, maximum, and invalid boundary values."
            },
            {
              id: 3,
              question: "In the first name example (3-8 characters), which is a valid boundary test?",
              options: ["2 characters", "3 characters", "9 characters", "All of the above"],
              correctAnswer: 3,
              explanation: "All are boundary tests: 2 chars (below min), 3 chars (min boundary), 9 chars (above max). BVA tests both valid and invalid boundaries."
            },
            {
              id: 4,
              question: "What functionality should a radio button have?",
              options: ["Select multiple options", "Select only one option", "Enter text values", "Display images"],
              correctAnswer: 1,
              explanation: "Radio buttons should allow selecting only one option. If both can be selected, it's an error that Error Guessing technique can identify."
            },
            {
              id: 5,
              question: "Which testing technique uses previous experience to predict errors?",
              options: ["Equivalence Class Partitioning", "Boundary Value Analysis", "Error Guessing Technique", "Decision Table Testing"],
              correctAnswer: 2,
              explanation: "Error Guessing Technique uses previous experience of application functionality to guess where developers commonly make mistakes."
            }
          ]}
        />

        {/* Key Points Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Key Takeaways</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">5 Black Box Testing Techniques</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>ECP</strong>: Test data types (upper/lower case, numbers, special chars)</li>
                    <li><strong>BVA</strong>: Test length/size boundaries (min, max, invalid ranges)</li>
                    <li><strong>Error Guessing</strong>: Use experience to predict common errors</li>
                    <li><strong>Decision Table</strong>: Test multiple input combinations systematically</li>
                    <li><strong>State Transition</strong>: Test state changes based on user actions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">BVA Testing Strategy</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Minimum boundary</strong>: Test exact minimum value</li>
                    <li><strong>Maximum boundary</strong>: Test exact maximum value</li>
                    <li><strong>Valid middle</strong>: Test values within range</li>
                    <li><strong>Below minimum</strong>: Test values below valid range</li>
                    <li><strong>Above maximum</strong>: Test values above valid range</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Web Element Functions</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Text box</strong>: Enter, clear, delete, copy, paste, cut</li>
                    <li><strong>Radio button</strong>: Select only one option</li>
                    <li><strong>Checkbox</strong>: Select one or multiple options</li>
                    <li><strong>Dropdown</strong>: Single selection vs combo (multiple)</li>
                    <li><strong>Buttons/Links</strong>: Click functionality</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Testing Applications</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>ECP Example</strong>: First name validation (text types)</li>
                    <li><strong>BVA Example</strong>: Character length validation (3-8 chars)</li>
                    <li><strong>Error Guessing</strong>: Gender radio button selection</li>
                    <li><strong>State Transition</strong>: Account lockout after failed attempts</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-100 rounded-xl">
              <p className="text-green-800 text-sm font-medium">
                💡 Master these 5 Black Box Testing techniques to create comprehensive test cases that cover 
                all functional scenarios and ensure thorough application validation.
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}