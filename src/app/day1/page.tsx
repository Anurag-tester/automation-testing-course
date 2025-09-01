import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day1Page() {
  return (
    <DayLayout 
      dayNumber={1}
      title="Manual Testing Basics"
      description="Introduction to Software Development Life Cycle (SDLC) and Fish Model fundamentals"
      nextDay="/day2"
    >
      {/* Lesson Overview */}
      <div className="mb-16">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-light text-gray-900 mb-6">What You&apos;ll Learn</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Introduction to Software Development Life Cycle (SDLC) and Fish Model fundamentals
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">SDLC Fundamentals</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>7 phases of Software Development Life Cycle</li>
                <li>Role of Business Analysts and Testing teams</li>
                <li>Different deployment models (Waterfall, V, Agile)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Fish Model Deep Dive</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>Graphical representation of SDLC</li>
                <li>BRS and SRS document creation process</li>
                <li>Complete requirement analysis workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SDLC Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Software Development Life Cycle (SDLC)</h2>
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              SDLC means <strong>Software Development Life Cycle</strong> with different phases:
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">1. Requirement Gathering</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Business Analyst (BA) team is responsible to gather requirements from client</li>
                <li>• BA team creates BRS (Business Requirement Specification) documents</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">2. Analysis Requirement</h3>
              <ul className="text-gray-600 space-y-2 mb-4 text-sm">
                <li>• Analysis Requirement is done by Business Analysts (BA)</li>
                <li>• Once analysis is done, BA team again creates SRS/FRS/CRD/PRD/Stories/Epic documents</li>
              </ul>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-3">Document Types:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li><strong>SRS:</strong> System (Software) Requirement Specification</li>
                  <li><strong>FRS:</strong> Functional Requirement Specification</li>
                  <li><strong>CRD:</strong> Client Requirement Documents</li>
                  <li><strong>PRD:</strong> Product Requirement Documents</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">3. Design Application/Software/Products</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• On the basis of SRS documents, Design team designs the application</li>
                <li>• Creates High Level Design and Low Level Design</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">4. Coding</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Development team develops frontend and backend applications</li>
                <li>• Based on SRS documents</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-3">5. Testing</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Testing team tests frontend (Manual Testing) and backend (API Testing, Database Testing)</li>
                <li>• Based on SRS documents</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">6. Deployment</h3>
              <ul className="text-gray-600 space-y-2 mb-4 text-sm">
                <li>• Once Testing is done, deploy application to client environment</li>
                <li>• Follow deployment process models:</li>
              </ul>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-medium text-gray-700">Waterfall Model</div>
                  <div className="text-xs text-gray-500">90 Days/3 Months</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-medium text-gray-700">V Model</div>
                  <div className="text-xs text-gray-500">90 Days/3 Months</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-medium text-gray-700">Agile Model</div>
                  <div className="text-xs text-gray-500">30 Days/1 Month (flexible)</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">7. Maintenance</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Add new features</li>
                <li>• Modify existing features</li>
                <li>• Remove features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fish Model Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Fish Model</h2>
        <div className="space-y-6">
          <div className="bg-purple-50 rounded-xl p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              Fish model is nothing but the <strong>graphical representation of SDLC Life cycle</strong>.
              There are different phases present in Fish Model.
            </p>
          </div>

          {/* Phase 1: Requirement Gathering */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">1. Requirement Gathering</h3>
            <ul className="text-gray-600 space-y-2 mb-4 text-sm">
              <li>• Business Analyst people gather the requirement from client</li>
              <li>• BA people create BRS documents (Business Requirement Specification)</li>
              <li>• BRS document defines the client requirement to be used as software development process</li>
              <li>• BRS document acts as bridge between client team and technical team</li>
              <li>• BRS is formal document which is created by BA on the basis of Requirement gathering</li>
            </ul>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">BRS Document Examples</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 p-3 text-left text-sm font-medium">Client Requirement</th>
                      <th className="border border-gray-200 p-3 text-left text-sm font-medium">BRS Document</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3 text-sm">Dual SIM</td>
                      <td className="border border-gray-200 p-3 text-sm">1 Device contains 2 SIM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 text-sm">ATM</td>
                      <td className="border border-gray-200 p-3 text-sm">Withdraw amount, view balance, mini statement etc.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 text-sm">Login Functionality</td>
                      <td className="border border-gray-200 p-3 text-sm">Login using Admin role, and login using User role, login using Retailer Role</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Phase 2: Analysis the Requirement */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">2. Analysis the Requirement</h3>
            <ul className="text-gray-600 space-y-2 mb-4 text-sm">
              <li>• BA people analyze the BRS documents and they create detailed documents as SRS/FRS/CRS/CRD/PRD/Stories/Epic</li>
              <li>• SRS document is developed on the basis of BRS documents</li>
              <li>• One BRS document contains multiple SRS documents</li>
              <li>• SRS document defines client requirement to be used and functional requirement to be developed as software</li>
            </ul>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-blue-800 mb-2">Important Note</h4>
              <p className="text-sm text-blue-700 italic">
                Do you know SRS/FRS/CRS/CRD/PRD/Stories/Epic? Yes, without knowing the SRS documents, 
                how is it possible to write the test cases or execute the test cases.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">What are the different contents present in SRS/FRS/CRS/CRD/PRD/Stories/Epic?</h4>
              <p className="text-sm text-gray-600 mb-3">SRS documents consist of:</p>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-800 mb-2">i) Functional Requirements</h5>
                  <p className="text-sm text-gray-600">Define what the application should contain</p>
                  <p className="text-xs text-gray-500 mt-1 italic">
                    Example: Application contains username text box, password text box, login button, forgot link, and create account should be present
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-800 mb-2">ii) Use Cases</h5>
                  <p className="text-sm text-gray-600 mb-3">Use Cases means define functionality in terms of input, process and output</p>
                </div>
                
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-800 mb-2">iii) Functional Flow Diagram</h5>
                  <p className="text-sm text-gray-600">Visual representation of processes and workflow</p>
                </div>
                
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-800 mb-2">iv) Screenshots</h5>
                  <p className="text-sm text-gray-600">BA team creates screenshots of the application using IDOC software or HTML code</p>
                </div>
                
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-800 mb-2">v) High Level Design and Low Level Design</h5>
                  <p className="text-sm text-gray-600">Architecture specifications and detailed design documents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <Quiz 
        title="Day 1 Knowledge Check"
        questions={[
          {
            id: 1,
            question: "How many phases are there in the Software Development Life Cycle (SDLC)?",
            options: ["5 phases", "6 phases", "7 phases", "8 phases"],
            correctAnswer: 2,
            explanation: "SDLC has 7 phases: Requirement Gathering, Analysis, Design, Coding, Testing, Deployment, and Maintenance."
          },
          {
            id: 2,
            question: "What does BRS stand for in software development?",
            options: ["Basic Requirement Specification", "Business Requirement Specification", "Build Requirement System", "Business Review Specification"],
            correctAnswer: 1,
            explanation: "BRS stands for Business Requirement Specification, which is created by Business Analysts based on client requirements."
          },
          {
            id: 3,
            question: "Which team is responsible for creating SRS documents?",
            options: ["Development Team", "Testing Team", "Business Analyst Team", "Project Management Team"],
            correctAnswer: 2,
            explanation: "Business Analyst (BA) team creates SRS documents by analyzing the BRS documents."
          },
          {
            id: 4,
            question: "What is the Fish Model?",
            options: ["A testing technique", "A coding methodology", "Graphical representation of SDLC", "A deployment strategy"],
            correctAnswer: 2,
            explanation: "Fish Model is the graphical representation of SDLC Life Cycle with different phases."
          },
          {
            id: 5,
            question: "Which of the following is NOT a content of SRS documents?",
            options: ["Functional Requirements", "Use Cases", "Source Code", "Screenshots"],
            correctAnswer: 2,
            explanation: "SRS documents contain Functional Requirements, Use Cases, Functional Flow Diagrams, Screenshots, and HLD/LLD, but not source code."
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
                <h3 className="font-medium text-gray-900 mb-3">SDLC Phases (7 Steps)</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li><strong>Requirement Gathering</strong>: BA creates BRS documents</li>
                  <li><strong>Analysis</strong>: Create SRS/FRS/CRD/PRD documents</li>
                  <li><strong>Design</strong>: High Level + Low Level Design</li>
                  <li><strong>Coding</strong>: Frontend + Backend development</li>
                  <li><strong>Testing</strong>: Manual + API + Database testing</li>
                  <li><strong>Deployment</strong>: Waterfall (90 days), Agile (30 days)</li>
                  <li><strong>Maintenance</strong>: Add/modify/remove features</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">BRS Document Examples</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li><strong>Dual SIM</strong> → 1 Device contains 2 SIM</li>
                  <li><strong>ATM</strong> → Withdraw, view balance, mini statement</li>
                  <li><strong>Login</strong> → Admin, User, Retailer role access</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">SRS Document Contents</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li><strong>Functional Requirements</strong>: What app should contain</li>
                  <li><strong>Use Cases</strong>: Input → Process → Output format</li>
                  <li><strong>Functional Flow Diagram</strong>: Visual process representation</li>
                  <li><strong>Screenshots</strong>: UI mockups using IDOC/HTML</li>
                  <li><strong>HLD & LLD</strong>: Architecture specifications</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Key Relationships</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li><strong>BRS</strong> acts as bridge between client & technical team</li>
                  <li><strong>SRS</strong> developed based on BRS documents</li>
                  <li><strong>One BRS</strong> can contain multiple SRS documents</li>
                  <li><strong>Testing impossible</strong> without knowing SRS documents</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-100 rounded-xl">
            <p className="text-blue-800 text-sm font-medium">
              💡 These SDLC and Fish Model concepts form the foundation for all testing activities. 
              In Day 2, we will explore the remaining Fish Model phases and dive into Black Box Testing techniques.
            </p>
          </div>
        </div>
      </section>

    </DayLayout>
  )
}