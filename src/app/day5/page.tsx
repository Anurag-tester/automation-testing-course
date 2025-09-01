export const metadata = {
  title: 'Day 5: Defect Management - Bug Life Cycle & Quality Metrics | SDET Course',
  description: 'Learn defect management including Bug Life Cycle, Severity vs Priority classification, and Quality Metrics for effective bug tracking.',
  keywords: 'bug life cycle, defect management, severity vs priority, quality metrics, bug tracking, defect reporting, JIRA, defect analysis',
}
import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day5() {
  return (
    <DayLayout
      dayNumber={5}
      title="Advanced Functional Testing Types"
      description="Deep dive into Sanity, Risk-based, Adhoc, Exploratory, and Monkey Testing with practical scenarios and interview questions"
      previousDay="/day4"
      nextDay="/day6"
    >
        {/* Lesson Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Lesson Overview</h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Today we&apos;ll explore advanced functional testing types that are crucial for real-world testing scenarios. 
              You&apos;ll learn when and how to apply different testing strategies based on time constraints and project requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Testing Types</h3>
                <p className="text-gray-600 text-sm">5 advanced techniques</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Interview Questions</h3>
                <p className="text-gray-600 text-sm">Common scenarios</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Practical Applications</h3>
                <p className="text-gray-600 text-sm">Real-world examples</p>
              </div>
            </div>
          </div>
        </section>

        {/* Functional Testing Recap */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Functional Testing Overview</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What is Functional Testing?</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              In Functional Testing, we verify the application functionality works as per the client requirements.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              There are 13 different types of functional testing techniques:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">1. Smoke Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">2. Retesting</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">3. Regression Testing</span>
            </div>
            <div className="bg-blue-100 rounded-lg border border-blue-200 p-4 text-center">
              <span className="text-blue-800 text-sm font-medium">4. Sanity Testing</span>
            </div>
            <div className="bg-green-100 rounded-lg border border-green-200 p-4 text-center">
              <span className="text-green-800 text-sm font-medium">5. Adhoc Testing</span>
            </div>
            <div className="bg-purple-100 rounded-lg border border-purple-200 p-4 text-center">
              <span className="text-purple-800 text-sm font-medium">6. Exploratory Testing</span>
            </div>
            <div className="bg-yellow-100 rounded-lg border border-yellow-200 p-4 text-center">
              <span className="text-yellow-800 text-sm font-medium">7. Monkey Testing</span>
            </div>
            <div className="bg-red-100 rounded-lg border border-red-200 p-4 text-center">
              <span className="text-red-800 text-sm font-medium">8. Risk Based Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">9. Integration Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">10. User Acceptance Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">11. API Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">12. Database Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">13. Black Box Testing</span>
            </div>
          </div>
        </section>

        {/* Advanced Testing Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Advanced Testing Types</h2>
          
          <div className="space-y-8">
            {/* Sanity Testing */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mr-3">4</div>
                <h3 className="text-xl font-medium text-gray-900">Sanity Testing</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Sanity is done at release level</li>
                  <li>• Sanity Testing is subset of Regression Testing</li>
                  <li>• We quickly validate current sprint main (core/basic) functionality works as per client requirements</li>
                  <li>• We don&apos;t write test cases for sanity testing, we pick necessary test cases from already written ones</li>
                  <li>• If found any defect in sanity testing, we log defect to development team and do retesting once resolved</li>
                  <li>• Most of the time due to time constraints we don&apos;t get enough time for regression testing, so we choose sanity testing</li>
                  <li>• Can be performed manually or automation</li>
                </ul>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">When to Use Sanity Testing:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Time constraints in Agile model</li>
                    <li>• Pressure from Product Owner or Scrum Master to complete testing before EOD</li>
                    <li>• Need to test current sprint functionality quickly</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Risk Based Testing */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full mr-3">5</div>
                <h3 className="text-xl font-medium text-gray-900">Risk Based Testing / Priority Based Testing</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Identify the critical functionality of the application and provide priority to test cases</li>
                  <li>• First test high priority test cases, then medium priority, then low priority if time remaining</li>
                  <li>• If can&apos;t complete high priority test cases within time, convince Scrum Master/Product Owner to extend Sprint Life Cycle</li>
                  <li>• If completed high priority but medium and low priority remaining, release sprint functionality and test remaining in next release</li>
                </ul>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 mb-3">Interview Question: 100 Test Cases Before EOD?</h4>
                  <p className="text-red-700 text-sm">
                    <strong>What do you do if you have 100 test cases and need to execute before EOD or within hours?</strong>
                  </p>
                  <p className="text-red-700 text-sm mt-2">
                    <strong>Answer:</strong> Use Risk Based Testing - prioritize and execute high priority test cases first, 
                    then medium and low priority if time permits.
                  </p>
                </div>
              </div>
            </div>

            {/* Adhoc Testing */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mr-3">6</div>
                <h3 className="text-xl font-medium text-gray-900">Adhoc Testing</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Adhoc Testing is type of informal testing with aim to find defects by doing negative testing</li>
                  <li>• Adhoc Testing is unplanned activity</li>
                  <li>• Does not follow any process and test cases technique to find defects</li>
                  <li>• Done when tester has higher knowledge about the application functionality</li>
                  <li>• Does not follow any documentation, no planning, and no process</li>
                  <li>• Means test the known [domain] application</li>
                </ul>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">Example:</h4>
                  <p className="text-green-700 text-sm">
                    <strong>Test Gmail Application</strong> → Adhoc Testing (known application)
                  </p>
                </div>
              </div>
            </div>

            {/* Exploratory Testing */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full mr-3">7</div>
                <h3 className="text-xl font-medium text-gray-900">Exploratory Testing</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Exploratory Testing means explore the application functionality and test it</li>
                  <li>• Understand application current sprint requirements documents or refer existing sprint documentations</li>
                  <li>• When we are not aware about application functionality and test it with help of documentation and test data</li>
                  <li>• Test level by level application functionality</li>
                  <li>• Test unknown application functionality as per requirement documents, test data, or existing documentation</li>
                </ul>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">Example:</h4>
                  <p className="text-purple-700 text-sm">
                    <strong>Test Cogmento CRM application</strong> → Exploratory Testing (unknown application)
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 mt-4">
                  <h4 className="font-medium text-purple-800 mb-3">Interview Scenario: Testing Unknown Functionality</h4>
                  <p className="text-purple-700 text-sm mb-2">
                    <strong>Q: How to test unknown functionality without documentation?</strong>
                  </p>
                  <ol className="text-purple-700 text-sm space-y-1 list-decimal list-inside">
                    <li>Ask senior for KT (Knowledge Transfer) on application functionality</li>
                    <li>If no time for KT, ask for current sprint documentation</li>
                    <li>If no current sprint docs, ask for existing sprint documentation, test data, or test cases</li>
                    <li>As per documents, explore application and test one by one using Exploratory Testing</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Monkey Testing */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full mr-3">8</div>
                <h3 className="text-xl font-medium text-gray-900">Monkey Testing</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Monkey testing is also called Speed Testing or Gorilla Testing</li>
                  <li>• Monkey Testing is conducted to find tricky defects in applications</li>
                </ul>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-800 mb-2">Alternative Names:</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Speed Testing</li>
                    <li>• Gorilla Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Visual Examples & Comparisons</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-900">Testing Types Comparison - Visual Guide</h3>
              </div>
              <div className="p-6">
                <img 
                  src="/Day 5/6.png" 
                  alt="Testing Types Comparison Diagram"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-900">Detailed Differences Document</h3>
              </div>
              <div className="p-0">
                <iframe
                  src="/Day 5/Differences.pdf"
                  className="w-full h-[600px] border-0"
                  title="Testing Types Differences"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Comparisons */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Important Comparisons</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-medium text-blue-900 mb-4">Smoke Testing vs Sanity Testing</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Smoke Testing</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Day 0 testing (10-15 minutes)</li>
                    <li>• Build verification</li>
                    <li>• Subset of Acceptance Testing</li>
                    <li>• Never log defects - reject/accept build</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Sanity Testing</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Release level testing</li>
                    <li>• Current sprint functionality validation</li>
                    <li>• Subset of Regression Testing</li>
                    <li>• Log defects and do retesting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-medium text-green-900 mb-4">Adhoc Testing vs Exploratory Testing</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-800 mb-2">Adhoc Testing</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Test known applications (e.g., Gmail)</li>
                    <li>• No documentation needed</li>
                    <li>• Unplanned activity</li>
                    <li>• Higher domain knowledge required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-800 mb-2">Exploratory Testing</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Test unknown applications (e.g., Cogmento CRM)</li>
                    <li>• Requires documentation/test data</li>
                    <li>• Systematic exploration</li>
                    <li>• Level by level functionality testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 5 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "Sanity Testing is a subset of which testing type?",
              options: ["Smoke Testing", "Regression Testing", "Integration Testing", "Acceptance Testing"],
              correctAnswer: 1,
              explanation: "Sanity Testing is a subset of Regression Testing, done at release level to validate current sprint functionality."
            },
            {
              id: 2,
              question: "What is the main difference between Adhoc and Exploratory Testing?",
              options: ["Adhoc is automated, Exploratory is manual", "Adhoc tests known apps, Exploratory tests unknown apps", "Adhoc is faster than Exploratory", "No difference, they are the same"],
              correctAnswer: 1,
              explanation: "Adhoc Testing is for known applications (like Gmail) without documentation, while Exploratory Testing is for unknown applications (like Cogmento CRM) with documentation help."
            },
            {
              id: 3,
              question: "In Risk Based Testing, what is the correct priority order?",
              options: ["Low → Medium → High", "Medium → High → Low", "High → Medium → Low", "Random order"],
              correctAnswer: 2,
              explanation: "Risk Based Testing follows High → Medium → Low priority order. Test high priority first, then medium if time permits, then low priority."
            },
            {
              id: 4,
              question: "What are the alternative names for Monkey Testing?",
              options: ["Speed Testing and Gorilla Testing", "Fast Testing and Animal Testing", "Quick Testing and Rapid Testing", "Random Testing and Chaos Testing"],
              correctAnswer: 0,
              explanation: "Monkey Testing is also called Speed Testing or Gorilla Testing, conducted to find tricky defects in applications."
            },
            {
              id: 5,
              question: "When do you typically use Sanity Testing?",
              options: ["When you have plenty of time", "When testing new applications", "Due to time constraints in Agile", "Only for API testing"],
              correctAnswer: 2,
              explanation: "Sanity Testing is used due to time constraints, especially in Agile model when there's pressure from Product Owner/Scrum Master to complete testing before EOD."
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
                  <h3 className="font-medium text-gray-900 mb-3">Advanced Testing Types</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Sanity</strong>: Release level, subset of Regression, time constraints</li>
                    <li><strong>Risk-based</strong>: High → Medium → Low priority testing</li>
                    <li><strong>Adhoc</strong>: Known apps, no documentation, unplanned</li>
                    <li><strong>Exploratory</strong>: Unknown apps, with documentation, systematic</li>
                    <li><strong>Monkey</strong>: Speed/Gorilla testing, find tricky defects</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Key Comparisons</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Smoke vs Sanity</strong>: Build verification vs Release validation</li>
                    <li><strong>Adhoc vs Exploratory</strong>: Known vs Unknown applications</li>
                    <li><strong>Retesting vs Regression</strong>: Failed vs Pass test cases</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Interview Scenarios</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>100 Test Cases EOD</strong>: Use Risk-based Testing approach</li>
                    <li><strong>Unknown Functionality</strong>: Ask for KT → Documentation → Exploratory Testing</li>
                    <li><strong>Time Constraints</strong>: Choose Sanity over full Regression</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Practical Applications</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Agile Environment</strong>: Sanity testing for sprint releases</li>
                    <li><strong>Domain Knowledge</strong>: Adhoc for familiar applications</li>
                    <li><strong>New Projects</strong>: Exploratory with documentation</li>
                    <li><strong>Critical Issues</strong>: Risk-based prioritization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-purple-100 rounded-xl">
              <p className="text-purple-800 text-sm font-medium">
                💡 These advanced testing techniques are essential for handling real-world testing challenges, 
                especially in Agile environments with tight deadlines and varying project requirements.
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}