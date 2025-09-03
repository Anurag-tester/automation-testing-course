'use client'

import DayLayout from '@/components/DayLayout'
import Image from 'next/image'
import LazyQuiz from '@/components/LazyQuiz'

export default function Day37() {
  return (
    <DayLayout
      dayNumber={37}
      title="API Testing Introduction & Postman Basics"
      description="Master API testing fundamentals, HTTP methods, Postman basics, and API validation techniques for comprehensive automation testing."
      previousDay="/javascript-executor-scroll-alerts-styling"
    >
      <div className="max-w-4xl mx-auto">
        {/* What is API? */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">What is API?</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-4">API - Application Programming Interface</h3>
              <div className="space-y-4">
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">Key Definitions</h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>• <strong>API stands for Application Programming Interface</strong></li>
                    <li>• API is used for communication between 2 or more software components [Front End and Backend Database]</li>
                    <li>• API is used to exchange test data between 2 or more software components</li>
                    <li>• Everyday we use applications like Facebook, WhatsApp, YouTube, Amazon, mobile phones - we use API</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* API Architecture Diagram */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">API Communication Flow</h3>
            <Image
              src="/day37/APITesting1.png"
              alt="API Communication Flow - Browser, API, Server interaction diagram showing how frontend communicates with backend through APIs"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg border border-gray-200"
              priority
            />
            <p className="text-sm text-gray-600 mt-4 text-center">
              Understanding how Browser (Frontend), API (Middleware), and Server (Backend Database) communicate with each other
            </p>
          </div>
        </section>

        {/* What is API Testing? */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">What is API Testing?</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-green-900 mb-4">API Testing Fundamentals</h3>
              <div className="space-y-4">
                <div className="bg-green-100 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">Core Concepts</h4>
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>• <strong>API testing is a type of software testing</strong></li>
                    <li>• Inside API testing we focus on <strong>business logic of the functionality</strong></li>
                    <li>• API lacks UI (user interface) - no user interface is present</li>
                    <li>• We validate business logic of functionality with the help of different <strong>HTTP Requests</strong></li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-medium text-yellow-900 mb-2">🎯 Key Focus Area</h4>
                  <p className="text-yellow-800 text-sm">
                    <strong>Business Logic Testing:</strong> Since APIs don't have UI, we concentrate on testing the core business rules, 
                    data processing, and functionality logic through various HTTP request methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HTTP Request Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">HTTP Request Methods</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-purple-900 mb-4">5 Different Types of HTTP Requests</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-purple-200">
                    <span className="font-medium text-purple-900">1. POST Request</span>
                    <p className="text-purple-700 text-xs mt-1">Create new data</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-purple-200">
                    <span className="font-medium text-purple-900">2. PUT Request</span>
                    <p className="text-purple-700 text-xs mt-1">Update entire resource</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-purple-200">
                    <span className="font-medium text-purple-900">3. PATCH Request</span>
                    <p className="text-purple-700 text-xs mt-1">Partial update</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-purple-200">
                    <span className="font-medium text-purple-900">4. GET Request</span>
                    <p className="text-purple-700 text-xs mt-1">Retrieve data</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-purple-200">
                    <span className="font-medium text-purple-900">5. DELETE Request</span>
                    <p className="text-purple-700 text-xs mt-1">Remove data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GET Request Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">GET Request - Detailed Explanation</h2>
          
          <div className="space-y-8">
            {/* GET Request Definition */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-blue-900 mb-4">GET Request Purpose</h3>
                <div className="space-y-4">
                  <div className="bg-blue-100 rounded-lg p-4">
                    <ul className="text-blue-800 text-sm space-y-2">
                      <li>• <strong>GET Request is used to retrieve entity from the server</strong></li>
                      <li className="text-center text-blue-600 font-medium">OR</li>
                      <li>• <strong>GET Request used to search user information or open user information as per condition</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* GET Request Examples */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-6">GET Request Examples</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Example URLs and Use Cases</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">1</span>
                        <span className="font-medium text-gray-900">Search all Employee</span>
                        <span className="text-gray-500 text-sm">→ GET Request</span>
                      </div>
                      <div className="bg-gray-900 rounded p-2 text-green-400 text-sm font-mono">
                        http://localhost:3000/employees
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">2</span>
                        <span className="font-medium text-gray-900">Search Employee as per employee ID</span>
                        <span className="text-gray-500 text-sm">→ GET Request with Path Parameter</span>
                      </div>
                      <div className="bg-gray-900 rounded p-2 text-green-400 text-sm font-mono">
                        http://localhost:3000/employees/{`{id}`}
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">3</span>
                        <span className="font-medium text-gray-900">Search Employee as per employee first Name</span>
                        <span className="text-gray-500 text-sm">→ GET Request with Query Parameter</span>
                      </div>
                      <div className="bg-gray-900 rounded p-2 text-green-400 text-sm font-mono">
                        http://localhost:3000/employees?firstName='Anuja'
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">4</span>
                        <span className="font-medium text-gray-900">Search Employee as per employee dept name</span>
                        <span className="text-gray-500 text-sm">→ GET Request with Query Parameter</span>
                      </div>
                      <div className="bg-gray-900 rounded p-2 text-green-400 text-sm font-mono">
                        http://localhost:3000/employees?deptName='IT'
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-medium text-yellow-900 mb-2">📋 URL Source</h4>
                  <p className="text-yellow-800 text-sm">
                    To hit GET Request we need URL → <strong>Swagger Documentation</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* GET Request Validation */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-6">GET Request Validation Points</h3>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-medium text-green-900 mb-4">Once we hit the Request we verify different things:</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-medium text-green-900 text-sm">1. Status Code / Response Code</div>
                      <div className="text-green-700 text-xs mt-1">Expected: <strong>200</strong></div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-medium text-green-900 text-sm">2. Status Line</div>
                      <div className="text-green-700 text-xs mt-1">Expected: <strong>200 OK</strong></div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-medium text-green-900 text-sm">3. Response Time or Latency</div>
                      <div className="text-green-700 text-xs mt-1">Performance validation</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-medium text-green-900 text-sm">4. Response Payload or Body</div>
                      <div className="text-green-700 text-xs mt-1">Employee info in <strong>JSON or XML Format</strong></div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-medium text-green-900 text-sm">5. Response Header</div>
                      <div className="text-green-700 text-xs mt-1">Header validation</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="font-medium text-green-900 text-sm">6. Response Cookies</div>
                      <div className="text-green-700 text-xs mt-1">Cookie validation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELETE Request Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">DELETE Request - Detailed Explanation</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-red-900 mb-4">DELETE Request Purpose & URL</h3>
                
                <div className="space-y-4">
                  <div className="bg-red-100 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-2">DELETE Request URL Example</h4>
                    <div className="bg-gray-900 rounded p-3 text-green-400 text-sm font-mono">
                      http://localhost:3000/employees/{`{id}`}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <h4 className="font-medium text-red-900 mb-3">DELETE Request Validation Points</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <div className="bg-red-50 rounded p-2">
                          <div className="font-medium text-red-900 text-sm">1. Status Code / Response Code</div>
                          <div className="text-red-700 text-xs">Expected: <strong>204</strong></div>
                        </div>
                        <div className="bg-red-50 rounded p-2">
                          <div className="font-medium text-red-900 text-sm">2. Status Line</div>
                          <div className="text-red-700 text-xs">Expected: <strong>204 No Content</strong></div>
                        </div>
                        <div className="bg-red-50 rounded p-2">
                          <div className="font-medium text-red-900 text-sm">3. Response Time or Latency</div>
                          <div className="text-red-700 text-xs">Performance check</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-red-50 rounded p-2">
                          <div className="font-medium text-red-900 text-sm">4. Response Header</div>
                          <div className="text-red-700 text-xs">Header validation</div>
                        </div>
                        <div className="bg-red-50 rounded p-2">
                          <div className="font-medium text-red-900 text-sm">5. Response Cookies</div>
                          <div className="text-red-700 text-xs">Cookie validation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Postman Tool Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Postman Tool for API Testing</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-orange-900 mb-4">🚀 Postman - API Testing Tool</h3>
              <div className="space-y-4">
                <div className="bg-orange-100 rounded-lg p-4">
                  <p className="text-orange-800 text-sm mb-3">
                    <strong>Postman</strong> is a popular API testing tool that allows you to:
                  </p>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Send HTTP requests (GET, POST, PUT, DELETE, PATCH)</li>
                    <li>• Validate API responses and status codes</li>
                    <li>• Test API endpoints with different parameters</li>
                    <li>• Automate API testing with collections and scripts</li>
                    <li>• Monitor API performance and response times</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-medium text-yellow-900 mb-2">📚 Learning Path</h4>
                  <p className="text-yellow-800 text-sm">
                    In upcoming lessons, we'll dive deep into Postman usage, API automation, 
                    and advanced API testing techniques with practical examples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample JSON Data */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Sample Employee Database (JSON)</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Employee API Test Data</h3>
              <p className="text-gray-600 text-sm mb-4">
                This is sample JSON data that represents employee information used for API testing examples:
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                <pre>{`{
  "employees": [
    {
      "firstname": "anuja",
      "lastname": "patil",
      "city": "pune",
      "mobilenumber": 909090,
      "email": "anuja1@gmail.com",
      "id": "1"
    },
    {
      "firstname": "Suraj",
      "lastname": "Yadav",
      "city": "Delhi",
      "mobilenumber": 7777,
      "email": "suraj1@gmail.com",
      "id": "3"
    }
  ]
}`}</pre>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                <h4 className="font-medium text-blue-900 text-sm mb-2">JSON Structure Explanation:</h4>
                <ul className="text-blue-800 text-xs space-y-1">
                  <li>• <strong>employees:</strong> Array containing employee objects</li>
                  <li>• <strong>firstname, lastname:</strong> Employee name fields</li>
                  <li>• <strong>city:</strong> Employee location</li>
                  <li>• <strong>mobilenumber:</strong> Contact number (numeric)</li>
                  <li>• <strong>email:</strong> Employee email address</li>
                  <li>• <strong>id:</strong> Unique employee identifier</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PDF Documentation */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">📄 JSON Server Setup Documentation</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-medium text-blue-900 mb-2">JSON Server Setup Guide</h3>
              <p className="text-blue-800 text-sm">
                Complete documentation for setting up JSON Server for API testing practice. 
                This PDF contains step-by-step instructions for creating a local API server.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">JSON Server Setup Guide</span>
                <a
                  href="/day37/Json Server SetUp.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in new tab
                </a>
              </div>
              <object
                data="/day37/Json Server SetUp.pdf"
                type="application/pdf"
                width="100%"
                height="600px"
                className="w-full"
              >
                <div className="flex flex-col items-center justify-center h-96 bg-gray-50">
                  <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-600 text-center mb-4">
                    PDF viewer not supported in your browser.
                  </p>
                  <a
                    href="/day37/Json Server SetUp.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View PDF
                  </a>
                </div>
              </object>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="mb-16">
          <LazyQuiz
            questions={[
              {
                id: 1,
                question: "What does API stand for?",
                options: [
                  "Application Programming Interface",
                  "Automated Programming Interface", 
                  "Advanced Programming Interface",
                  "Application Process Interface"
                ],
                correctAnswer: 0,
                explanation: "API stands for Application Programming Interface, which is used for communication between software components."
              },
              {
                id: 2,
                question: "Which HTTP method is used to retrieve data from the server?",
                options: ["POST", "PUT", "GET", "DELETE"],
                correctAnswer: 2,
                explanation: "GET request is used to retrieve entity from the server or search user information."
              },
              {
                id: 3,
                question: "What is the typical status code for a successful GET request?",
                options: ["404", "500", "200", "204"],
                correctAnswer: 2,
                explanation: "Status code 200 (OK) indicates a successful GET request with data returned."
              },
              {
                id: 4,
                question: "What is the typical status code for a successful DELETE request?",
                options: ["200", "201", "204", "404"],
                correctAnswer: 2,
                explanation: "Status code 204 (No Content) indicates a successful DELETE request with no response body."
              },
              {
                id: 5,
                question: "What does API testing focus on?",
                options: ["User interface design", "Business logic of functionality", "Database structure", "Network protocols"],
                correctAnswer: 1,
                explanation: "API testing focuses on business logic of the functionality since API lacks UI (user interface)."
              },
              {
                id: 6,
                question: "How many different types of HTTP requests are commonly used?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 2,
                explanation: "There are 5 main HTTP request types: POST, PUT, PATCH, GET, and DELETE."
              },
              {
                id: 7,
                question: "Which tool is mentioned for API testing in this lesson?",
                options: ["Selenium", "Postman", "JMeter", "RestAssured"],
                correctAnswer: 1,
                explanation: "Postman tool is mentioned as the primary tool for API testing and validation."
              },
              {
                id: 8,
                question: "What format is commonly used for API response data?",
                options: ["CSV", "JSON or XML", "PDF", "HTML"],
                correctAnswer: 1,
                explanation: "JSON or XML formats are commonly used for API response data exchange."
              }
            ]}
          />
        </section>

        {/* Key Takeaways */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Key Takeaways</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">🔗 API Fundamentals</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• API enables communication between software components</li>
                    <li>• Used for data exchange between frontend and backend</li>
                    <li>• Essential for modern application architecture</li>
                    <li>• Present in everyday applications we use</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">🧪 API Testing Focus</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Tests business logic without UI dependency</li>
                    <li>• Validates data processing and functionality</li>
                    <li>• Focuses on backend system behavior</li>
                    <li>• Uses HTTP requests for validation</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">📡 HTTP Methods</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• <strong>GET:</strong> Retrieve data (Status: 200 OK)</li>
                    <li>• <strong>POST:</strong> Create new data</li>
                    <li>• <strong>PUT:</strong> Update entire resource</li>
                    <li>• <strong>DELETE:</strong> Remove data (Status: 204 No Content)</li>
                    <li>• <strong>PATCH:</strong> Partial updates</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">✅ Validation Points</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Status codes and status lines</li>
                    <li>• Response time and latency</li>
                    <li>• Response payload (JSON/XML)</li>
                    <li>• Headers and cookies validation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DayLayout>
  )
}