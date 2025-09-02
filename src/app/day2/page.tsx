import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export const metadata = {
  title: 'Day 2: Testing Techniques - Black Box, ECP, BVA | SDET Course',
  description: 'Master Black Box Testing techniques including Equivalence Class Partitioning (ECP) and Boundary Value Analysis (BVA). Learn systematic testing approaches.',
  keywords: 'black box testing, equivalence class partitioning, boundary value analysis, ECP, BVA, testing techniques, manual testing, software testing',
}

export default function Day2Page() {
  return (
    <DayLayout 
      dayNumber={2}
      title="Testing Techniques"
      description="Fish Model continuation, Web Elements identification, and Black Box Testing methods"
      previousDay="/manual-testing-basics"
      nextDay="/advanced-testing-methods-decision-table"
    >
      {/* Lesson Overview */}
      <div className="mb-16">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-light text-gray-900 mb-6">What You&apos;ll Learn</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Fish Model continuation, Web Elements identification, and Black Box Testing methods
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Fish Model Phases</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>Complete SDLC phases (HLD, LLD, Coding)</li>
                <li>Testing phases (White Box, Black Box)</li>
                <li>Deployment and Maintenance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Web Elements & Testing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>16 different web elements identification</li>
                <li>Black Box Testing techniques</li>
                <li>ECP and BVA methods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>



        {/* Fish Model Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Fish Model - Complete Phases</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Fish Model is <strong>graphical representation of SDLC life Cycle</strong>. 
                There are different phases present:
              </p>
            </div>

            <div className="space-y-8">
              {/* Analysis Requirement */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Analysis Requirement</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">SRS Consist of:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Functional Requirements</li>
                    <li>• Use Cases</li>
                    <li>• Functional flow Diagram</li>
                    <li>• Screenshot</li>
                  </ul>
                </div>
              </div>

              {/* High Level Design */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">High Level Design</h3>
                <ul className="text-gray-600 space-y-2 mb-4 text-sm leading-relaxed">
                  <li>• It is also called as <strong>&quot;external design or main functionality design&quot;</strong></li>
                  <li>• HLD Design documents define structure of all possible functionality to be developed as main module [software]</li>
                  <li>• HLD Design is developed by the Solution Engineer or Senior Developer or Project Architect</li>
                  <li>• In HLD Design, Project Architect just combines multiple dependent or independent module or functionality or features to make the software</li>
                  <li>• HLD is part of functional flow diagram</li>
                </ul>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border">Enterprise Architect</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border">Microsoft Visio</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border">Draw.IO</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border">Graph-Viz</span>
                  </div>
                </div>
              </div>

              {/* Low Level Design */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Low Level Design</h3>
                <ul className="text-gray-600 space-y-2 mb-4 text-sm leading-relaxed">
                  <li>• Low Level design is <strong>internal design</strong></li>
                  <li>• It defines the static logic of each and every sub module</li>
                  <li>• LLD design is detailed of HLD design</li>
                  <li>• LLD Design is developed by the Project architect</li>
                </ul>
              </div>

              {/* Coding */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Coding</h3>
                <p className="text-gray-600 mb-4 text-sm">Development team are responsible to write code for Front End application and backend application</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Frontend Technologies</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• HTML, CSS, JavaScript</li>
                      <li>• React JS technology etc.</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2">Backend Technologies</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Java, Servlet</li>
                      <li>• Spring Framework, Spring Boot Framework</li>
                      <li>• Hibernate Framework, Struts Framework etc.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Testing */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Testing</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">White Box Testing</h4>
                    <p className="text-gray-600 text-sm">Developer team review their own code by using White Box Testing</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Black Box Testing</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Testing team are responsible to test the front end application as well as backend application</li>
                      <li>• We test frontend application by using Manual Testing (Selenium Automation Testing)</li>
                      <li>• We test backend application using API testing (Rest Assured) and Database Testing (JDBC)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Deployment */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Deployment</h3>
                <p className="text-gray-600 mb-4 text-sm">Once tester verify all functionality then we deploy application to next environments</p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="font-medium text-gray-700">Waterfall Model</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="font-medium text-gray-700">V Model</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="font-medium text-gray-700">Agile Model</div>
                  </div>
                </div>
              </div>

              {/* Maintenance */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Maintenance</h3>
                <p className="text-gray-600 text-sm">If any maintenance is present then we do application maintenance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Web Elements */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Web Elements in Applications</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Complete List of Web Elements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>Text box</li>
                  <li>Drop Down</li>
                  <li>Radio button</li>
                  <li>Sign Up/Save Button</li>
                </ul>
              </div>
              <div className="space-y-2">
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>Logo or Images</li>
                  <li>Physical text</li>
                  <li>Calendar</li>
                  <li>Check box</li>
                </ul>
              </div>
              <div className="space-y-2">
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>Audio or video</li>
                  <li>Frame</li>
                  <li>Scroll up or down</li>
                  <li>Menu or nav bar</li>
                </ul>
              </div>
              <div className="space-y-2">
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>Window popup</li>
                  <li>External device support</li>
                  <li>Zoom in or out</li>
                  <li>Map</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Black Box Testing */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Black Box Testing</h2>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What is Black Box Testing?</h3>
            <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>• Black Box testing is nothing but test the functionality of application with respect to client requirement</li>
              <li>• BBT Testing technique used to create test cases and test the applications</li>
              <li>• There are different techniques present:</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Equivalence Class Partitioning</h3>
              <p className="text-gray-600 mb-4 text-sm">In Equivalence Class Partitioning, we have to validate which type value is accepted by the Objects</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Different class types present:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Upper case and lower cases</li>
                  <li>• Numbers</li>
                  <li>• Special characters</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Boundary Value Analysis</h3>
              <p className="text-gray-600 text-sm">In Boundary Value Analysis, we validate length or size of objects</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error Guessing Technique</h3>
              <p className="text-gray-600 text-sm">Predict errors based on experience</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Decision Table Testing</h3>
              <p className="text-gray-600 text-sm">Test different combinations of inputs</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">State Transition Testing</h3>
              <p className="text-gray-600 text-sm">Test state changes in the application</p>
            </div>
          </div>
        </section>

        {/* ECP & BVA Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">ECP & BVA Examples</h2>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed text-sm">
              Below are detailed examples with tables showing practical implementation of 
              Equivalence Class Partitioning and Boundary Value Analysis techniques:
            </p>
          </div>
          
          {/* PDF Viewer */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
              <h3 className="font-medium text-gray-900">ECP and BVA Examples Document</h3>
            </div>
            <div className="p-0">
              <iframe
                src="/Day 2/ECP and BVA 2.pdf"
                className="w-full h-[600px] border-0"
                title="ECP and BVA Examples"
              />
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 2 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "What does HLD stand for in software development?",
              options: ["High Level Database", "High Level Design", "Hardware Level Design", "High Level Development"],
              correctAnswer: 1,
              explanation: "HLD stands for High Level Design, also called external design or main functionality design."
            },
            {
              id: 2,
              question: "Which testing technique validates the data types accepted by objects?",
              options: ["Boundary Value Analysis", "Error Guessing", "Equivalence Class Partitioning", "Decision Table Testing"],
              correctAnswer: 2,
              explanation: "Equivalence Class Partitioning validates which type of values (upper/lower case, numbers, special characters) are accepted by objects."
            },
            {
              id: 3,
              question: "How many web elements are mentioned in the complete list?",
              options: ["12 elements", "14 elements", "16 elements", "18 elements"],
              correctAnswer: 2,
              explanation: "There are 16 different web elements mentioned including text box, dropdown, radio button, checkbox, etc."
            },
            {
              id: 4,
              question: "What is the difference between White Box and Black Box testing?",
              options: ["White Box tests UI, Black Box tests backend", "White Box is done by developers, Black Box by testers", "White Box is manual, Black Box is automated", "White Box tests databases, Black Box tests APIs"],
              correctAnswer: 1,
              explanation: "White Box testing is done by developers to review their own code, while Black Box testing is done by testing teams to test application functionality."
            },
            {
              id: 5,
              question: "Which tool is NOT mentioned for creating HLD designs?",
              options: ["Enterprise Architect", "Microsoft Visio", "Draw.IO", "Adobe Photoshop"],
              correctAnswer: 3,
              explanation: "The tools mentioned for HLD design are Enterprise Architect, Microsoft Visio, Draw.IO, and Graph-Viz. Adobe Photoshop is not mentioned."
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
                  <h3 className="font-medium text-gray-900 mb-3">Fish Model Phases</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>HLD</strong>: External design by Project Architect</li>
                    <li><strong>LLD</strong>: Internal design with static logic</li>
                    <li><strong>Coding</strong>: Frontend (HTML, CSS, React) + Backend (Java, Spring)</li>
                    <li><strong>Testing</strong>: White Box (Developer) + Black Box (Tester)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Black Box Testing</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>Tests functionality vs client requirements</li>
                    <li><strong>ECP</strong>: Validate data types (upper/lower case, numbers, special chars)</li>
                    <li><strong>BVA</strong>: Validate length/size of objects</li>
                    <li>Other techniques: Error Guessing, Decision Table, State Transition</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Web Elements (16 Types)</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Input</strong>: Text box, Dropdown, Radio, Checkbox, Calendar</li>
                    <li><strong>Interactive</strong>: Buttons, Links, Menu, Mouse events</li>
                    <li><strong>Media</strong>: Images, Audio/Video, Physical text</li>
                    <li><strong>Advanced</strong>: Popups, Frames, Scroll, Zoom, Maps</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Tools & Technologies</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Design Tools</strong>: Enterprise Architect, Visio, Draw.IO</li>
                    <li><strong>Frontend</strong>: Manual Testing, Selenium Automation</li>
                    <li><strong>Backend</strong>: API Testing (Rest Assured), Database (JDBC)</li>
                    <li><strong>Deployment</strong>: Waterfall, V Model, Agile approaches</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-100 rounded-xl">
              <p className="text-blue-800 text-sm font-medium">
                💡 Understanding these concepts is crucial for Day 3 where we&apos;ll learn how to write effective test cases 
                using the ECP and BVA techniques covered today.
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}