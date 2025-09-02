export const metadata = {
  title: 'Day 4: Test Documentation - Test Plans & Test Cases | SDET Course',
  description: 'Master test documentation including Test Plans, Test Cases, and Documentation Standards. Learn IEEE standards and traceability matrix creation.',
  keywords: 'test plans, test cases, test documentation, IEEE standards, traceability matrix, test planning, test execution, test reporting',
}
import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day4() {
  return (
    <DayLayout
      dayNumber={4}
      title="Testing Environments & Functional Testing"
      description="Learn about different testing environments and comprehensive functional testing types including Smoke, Retesting, and Regression Testing"
      previousDay="/advanced-testing-methods-decision-table"
      nextDay="/defect-management-bug-lifecycle"
    >
        {/* Lesson Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Lesson Overview</h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Today we&apos;ll explore testing environments and dive deep into functional testing types. 
              You&apos;ll understand the 5 different environments used in software development and master 
              13 types of functional testing techniques.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Environments</h3>
                <p className="text-gray-600 text-sm">5 testing environments</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Functional Testing</h3>
                <p className="text-gray-600 text-sm">13 testing types</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Key Concepts</h3>
                <p className="text-gray-600 text-sm">Smoke, Retesting, Regression</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Environments */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Testing Environments</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What are Environments?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Environments are where we configure hardware and software configurations for different stages of development and testing.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mr-3">1</div>
                <h3 className="text-lg font-medium text-gray-900">Dev Environment</h3>
              </div>
              <p className="text-gray-600 text-sm">Development environment where developers write and test their code</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mr-3">2</div>
                <h3 className="text-lg font-medium text-gray-900">QA Environment</h3>
                <span className="ml-2 text-gray-500 text-sm">(Test Environment / SIT Environment)</span>
              </div>
              <p className="text-gray-600 text-sm">Quality Assurance environment for comprehensive testing by QA team</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full mr-3">3</div>
                <h3 className="text-lg font-medium text-gray-900">Client Environment</h3>
                <span className="ml-2 text-gray-500 text-sm">(UAT Environment)</span>
              </div>
              <p className="text-gray-600 text-sm">User Acceptance Testing environment where clients validate functionality</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full mr-3">4</div>
                <h3 className="text-lg font-medium text-gray-900">Staging Environment</h3>
                <span className="ml-2 text-gray-500 text-sm">(Pre-Production Environment)</span>
              </div>
              <p className="text-gray-600 text-sm">Final testing environment that mirrors production for last-minute validation</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full mr-3">5</div>
                <h3 className="text-lg font-medium text-gray-900">Live Environment</h3>
                <span className="ml-2 text-gray-500 text-sm">(Production Environment)</span>
              </div>
              <p className="text-gray-600 text-sm">Production environment where end users access the live application</p>
            </div>
          </div>
        </section>

        {/* Functional Testing */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Functional Testing</h2>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What is Functional Testing?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              In Functional Testing, we verify the application functionality works as per the client requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">1. Smoke Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">2. Retesting</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">3. Regression Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">4. Sanity Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">5. Adhoc Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">6. Exploratory Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">7. Monkey Testing</span>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-4 text-center">
              <span className="text-gray-700 text-sm font-medium">8. Risk Based Testing</span>
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

        {/* Detailed Testing Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Key Testing Types Explained</h2>
          
          <div className="space-y-8">
            {/* Smoke Testing */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full mr-3">IMPORTANT</div>
                <h3 className="text-xl font-medium text-gray-900">Smoke Testing</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 text-sm font-medium mb-2">Also called:</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Build Verification Testing</li>
                    <li>• Day 0 Testing</li>
                    <li>• Tester Acceptance Testing</li>
                  </ul>
                </div>

                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Smoke Testing is subset of Acceptance Testing</li>
                  <li>• Once we get build from Development team, we verify quickly basic (main/core) functionality works or not</li>
                  <li>• Smoke testing is done at day 0 within 10-15 minutes</li>
                  <li>• By using Smoke testing we verify build is testable or not</li>
                  <li>• Helps not to waste time testing whole application if main functionality is not working</li>
                  <li>• If main functionality is not working fine, we reject the build</li>
                  <li>• If we found blocker defect in smoke testing, we reject the build instead of logging defect</li>
                  <li>• If we found general defect, we accept the build and log defects in future</li>
                  <li>• We never write test cases for smoke testing, we pick necessary test cases from existing ones</li>
                </ul>

                <div className="bg-red-50 rounded-lg p-4 mt-4">
                  <h4 className="font-medium text-red-800 mb-2">Interview Question: Have you logged defect in Smoke Testing?</h4>
                  <p className="text-red-700 text-sm">
                    <strong>Answer:</strong> No, we never log defect in Smoke Testing. If we found critical defect then we reject the build. 
                    If defect is minor then we accept the build and in future we will log the defects.
                  </p>
                </div>
              </div>
            </div>

            {/* Retesting */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mr-3">IMPORTANT</div>
                <h3 className="text-xl font-medium text-gray-900">Re-Testing</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Retesting means retest the same application functionality with multiple positive and negative test data once the defect is resolved by dev team</li>
                  <li>• If we found any defect in application, we log defect to development team</li>
                  <li>• Development team resolves it and shares modified build with testing team</li>
                  <li>• Testing team again checks application functionality is working or not as expected by using retesting</li>
                  <li>• We perform retesting on failed test cases</li>
                  <li>• By using retesting we verify defect is closed or not [fix or not]</li>
                </ul>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">Key Points:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Performed on <strong>Failed Test Cases</strong></li>
                    <li>• Verifies if defect is <strong>Fixed</strong></li>
                    <li>• Tests same functionality with <strong>Multiple Test Data</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Regression Testing */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mr-3">IMPORTANT</div>
                <h3 className="text-xl font-medium text-gray-900">Regression Testing</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-blue-800 mb-2">Two Definitions:</h4>
                  <div className="space-y-3 text-blue-700 text-sm">
                    <p><strong>1.</strong> If found any defect in test execution, we log to development team. Due to modified code, we validate if any side effect occurs in existing features or functionality.</p>
                    <p><strong>2.</strong> If we add new functionality or modify existing code, we verify if any side effect occurs in existing functionality as well as new functionality.</p>
                  </div>
                </div>

                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• We perform regression on <strong>Pass test Cases</strong></li>
                  <li>• By using Regression we check if side effect occurs or not</li>
                  <li>• We can perform regression by using manually and automation</li>
                </ul>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Key Points:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Performed on <strong>Pass Test Cases</strong></li>
                    <li>• Checks for <strong>Side Effects</strong></li>
                    <li>• Can be done <strong>Manually or Automated</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Visual Examples & Diagrams</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-900">Testing Environments & Functional Testing - Diagram 1</h3>
              </div>
              <div className="p-6">
                <img 
                  src="/Day 4/4.png" 
                  alt="Testing Environments and Functional Testing Diagram"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-900">Testing Types & Methodologies - Diagram 2</h3>
              </div>
              <div className="p-6">
                <img 
                  src="/Day 4/5.png" 
                  alt="Testing Types and Methodologies Diagram"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 4 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "How many testing environments are mentioned in Day 4?",
              options: ["3 environments", "4 environments", "5 environments", "6 environments"],
              correctAnswer: 2,
              explanation: "There are 5 testing environments: Dev, QA/SIT, UAT, Staging, and Production environments."
            },
            {
              id: 2,
              question: "What does UAT stand for?",
              options: ["Unit Acceptance Testing", "User Acceptance Testing", "Universal Application Testing", "Unified Acceptance Testing"],
              correctAnswer: 1,
              explanation: "UAT stands for User Acceptance Testing, where clients validate the functionality in the Client Environment."
            },
            {
              id: 3,
              question: "How long does Smoke Testing typically take?",
              options: ["5-10 minutes", "10-15 minutes", "20-30 minutes", "1 hour"],
              correctAnswer: 1,
              explanation: "Smoke Testing is done at Day 0 within 10-15 minutes to quickly verify basic functionality."
            },
            {
              id: 4,
              question: "What is the key difference between Retesting and Regression Testing?",
              options: ["Retesting is automated, Regression is manual", "Retesting uses failed cases, Regression uses pass cases", "Retesting is faster than Regression", "No difference, they are the same"],
              correctAnswer: 1,
              explanation: "Retesting is performed on failed test cases to verify defect fixes, while Regression testing is performed on pass test cases to check for side effects."
            },
            {
              id: 5,
              question: "In Smoke Testing, what do you do if you find a critical defect?",
              options: ["Log the defect and continue testing", "Reject the build", "Fix the defect immediately", "Report to management"],
              correctAnswer: 1,
              explanation: "In Smoke Testing, if you find a critical/blocker defect, you reject the build instead of logging the defect. Only minor defects are accepted for future logging."
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
                  <h3 className="font-medium text-gray-900 mb-3">5 Testing Environments</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Dev</strong>: Development environment for coding</li>
                    <li><strong>QA/SIT</strong>: Quality Assurance testing environment</li>
                    <li><strong>UAT</strong>: User Acceptance Testing by clients</li>
                    <li><strong>Staging</strong>: Pre-production final validation</li>
                    <li><strong>Production</strong>: Live environment for end users</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Smoke Testing</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Day 0 testing within 10-15 minutes</li>
                    <li>• Verify basic/core functionality works</li>
                    <li>• Never log defects - reject or accept build</li>
                    <li>• Use existing test cases, don&apos;t write new ones</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Testing Comparison</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                      <p className="text-sm"><strong>Retesting:</strong> Failed test cases → Verify defect fix</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                      <p className="text-sm"><strong>Regression:</strong> Pass test cases → Check side effects</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                      <p className="text-sm"><strong>Smoke:</strong> Core functionality → Build acceptance</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">13 Functional Testing Types</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• <strong>Core:</strong> Smoke, Retesting, Regression, Sanity</li>
                    <li>• <strong>Exploratory:</strong> Adhoc, Exploratory, Monkey</li>
                    <li>• <strong>Specialized:</strong> Risk-based, Integration, UAT</li>
                    <li>• <strong>Technical:</strong> API, Database, Black Box</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-orange-100 rounded-xl">
              <p className="text-orange-800 text-sm font-medium">
                💡 Understanding environments and testing types is crucial for effective test planning and execution. 
                Master the differences between Retesting (failed cases) and Regression (pass cases) testing.
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}