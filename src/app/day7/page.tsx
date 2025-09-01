import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day7() {
  return (
    <DayLayout
      dayNumber={7}
      title="Advanced Java Programming"
      description="Deep dive into Java fundamentals, data types, variable naming rules, and all four types of operators with practical examples"
      previousDay="/day6"
      nextDay="/day8"
    >
        {/* Lesson Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Lesson Overview</h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Today we&apos;ll explore advanced Java programming concepts including Java features, 
              detailed data types, variable naming rules, and all four operator types. 
              This comprehensive foundation is essential for Selenium automation development.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Java Features</h3>
                <p className="text-gray-600 text-sm">7 key characteristics</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Data Types</h3>
                <p className="text-gray-600 text-sm">Primitive vs Non-primitive</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Variable Rules</h3>
                <p className="text-gray-600 text-sm">Naming conventions</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Operators</h3>
                <p className="text-gray-600 text-sm">4 operator types</p>
              </div>
            </div>
          </div>
        </section>

        {/* Java Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Java Programming Language</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">About Java</h3>
            <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>• Java Programming language was developed by Sun Microsystems in 1995, now part of Oracle company</li>
              <li>• Java is an Object Oriented Programming Language - everything is objects</li>
              <li>• Java is platform independent (execute on any machine or OS: Windows, Mac, Linux, Unix)</li>
              <li>• Java is simple and easy to use</li>
              <li>• Java is secure - develop virus-free applications</li>
            </ul>
          </div>

          <div className="space-y-8">
            {/* Java Applications */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Java Applications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-blue-800 mb-2">Desktop Applications</h4>
                  <p className="text-blue-700 text-sm">GUI applications</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-green-800 mb-2">Web Applications</h4>
                  <p className="text-green-700 text-sm">Server-side development</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-purple-800 mb-2">Mobile Applications</h4>
                  <p className="text-purple-700 text-sm">Android development</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-yellow-800 mb-2">Games</h4>
                  <p className="text-yellow-700 text-sm">Game development</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-red-800 mb-2">Smart Cards</h4>
                  <p className="text-red-700 text-sm">Embedded systems</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-indigo-800 mb-2">Test Automation</h4>
                  <p className="text-indigo-700 text-sm">Selenium testing</p>
                </div>
              </div>
            </div>

            {/* Java Syntax Rules */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Java Syntax Rules</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <ul className="text-orange-800 space-y-2 text-sm">
                    <li>• <strong>Case Sensitive:</strong> Java is case sensitive language</li>
                    <li>• <strong>Class Name:</strong> First character should be upper case</li>
                    <li>• <strong>Method Name:</strong> Should start with lower case (camelCase)</li>
                    <li>• <strong>File Name:</strong> Must exactly match with class name</li>
                    <li>• <strong>Main Method:</strong> Mandatory for each Java class execution</li>
                    <li>• <strong>Semicolon:</strong> Every statement must end with semicolon (;)</li>
                    <li>• <strong>Braces:</strong> Every code block must be enclosed with { }</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Java Data Types</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Data Type Categories</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Data types are used to store different values as per the datatype. There are 2 different categories:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">1. Primitive Data Types</h4>
                <p className="text-gray-600 text-sm">8 built-in data types</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">2. Non-Primitive Data Types</h4>
                <p className="text-gray-600 text-sm">String, Arrays, Classes</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Primitive Data Types */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Primitive Data Types (8 Types)</h3>
              
              <div className="space-y-6">
                {/* Integer Types */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-medium text-blue-800 mb-4">Integer Types</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-blue-700 mb-2">byte</h5>
                      <p className="text-sm text-gray-600 mb-2">Range: -128 to 127</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">byte a = 100;</code>
                    </div>
                    <div className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-blue-700 mb-2">short</h5>
                      <p className="text-sm text-gray-600 mb-2">Range: -32,768 to 32,767</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">short b = 1000;</code>
                    </div>
                    <div className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-blue-700 mb-2">int</h5>
                      <p className="text-sm text-gray-600 mb-2">Range: -2,147,483,648 to 2,147,483,647</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">int c = 100000;</code>
                    </div>
                    <div className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-blue-700 mb-2">long</h5>
                      <p className="text-sm text-gray-600 mb-2">Very large numbers (add &apos;l&apos; or &apos;L&apos;)</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">long d = 12449494884l;</code>
                    </div>
                  </div>
                </div>

                {/* Decimal Types */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-medium text-green-800 mb-4">Decimal Types</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-green-700 mb-2">float</h5>
                      <p className="text-sm text-gray-600 mb-2">Precision: 6 to 7 digits (add &apos;f&apos; or &apos;F&apos;)</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">float m = 21434.45f;</code>
                    </div>
                    <div className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-green-700 mb-2">double</h5>
                      <p className="text-sm text-gray-600 mb-2">Precision: Up to 15 digits</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">double n = 38377474.445555;</code>
                    </div>
                  </div>
                </div>

                {/* Other Types */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-medium text-purple-800 mb-4">Other Types</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-purple-700 mb-2">boolean</h5>
                      <p className="text-sm text-gray-600 mb-2">Values: true or false</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">boolean k = true;</code>
                    </div>
                    <div className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-purple-700 mb-2">char</h5>
                      <p className="text-sm text-gray-600 mb-2">Single character (use single quotes)</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">char p = &apos;a&apos;;</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Primitive Data Types */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Non-Primitive Data Types</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-yellow-800 mb-2">String</h4>
                  <p className="text-yellow-700 text-sm">Text and words</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-yellow-800 mb-2">Arrays</h4>
                  <p className="text-yellow-700 text-sm">Collection of elements</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-yellow-800 mb-2">Classes</h4>
                  <p className="text-yellow-700 text-sm">User-defined types</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Variable Naming Rules */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Variable Naming Rules</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Valid vs Invalid Variable Names</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-medium text-green-800 mb-4">✅ Valid Variable Names</h4>
                <div className="space-y-2">
                  <code className="block bg-white px-3 py-2 rounded text-sm">abc</code>
                  <code className="block bg-white px-3 py-2 rounded text-sm">ABC</code>
                  <code className="block bg-white px-3 py-2 rounded text-sm">_abc</code>
                  <code className="block bg-white px-3 py-2 rounded text-sm">_ABC</code>
                  <code className="block bg-white px-3 py-2 rounded text-sm">_abCDE</code>
                  <code className="block bg-white px-3 py-2 rounded text-sm">$abc</code>
                  <code className="block bg-white px-3 py-2 rounded text-sm">$ABC</code>
                  <code className="block bg-white px-3 py-2 rounded text-sm">abc1233</code>
                  <code className="block bg-white px-3 py-2 rounded text-sm">ABC1234</code>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="font-medium text-red-800 mb-4">❌ Invalid Variable Names</h4>
                <div className="space-y-2">
                  <code className="block bg-white px-3 py-2 rounded text-sm">1262abc</code>
                  <p className="text-xs text-red-600 ml-3">Cannot start with number</p>
                  <code className="block bg-white px-3 py-2 rounded text-sm">#abc</code>
                  <p className="text-xs text-red-600 ml-3">Cannot start with special characters (except _ and $)</p>
                </div>
                
                <div className="mt-4 p-3 bg-white rounded border">
                  <h5 className="font-medium text-red-700 mb-2">Rules:</h5>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• Must start with letter, underscore (_), or dollar ($)</li>
                    <li>• Cannot start with numbers</li>
                    <li>• Cannot use Java keywords</li>
                    <li>• Case sensitive</li>
                    <li>• No spaces allowed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operators */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Java Operators</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">4 Types of Operators</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-medium text-gray-800">1. Arithmetic</h4>
                <p className="text-gray-600 text-sm">Math operations</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-medium text-gray-800">2. Relational</h4>
                <p className="text-gray-600 text-sm">Comparison</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-medium text-gray-800">3. Logical</h4>
                <p className="text-gray-600 text-sm">Boolean logic</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-medium text-gray-800">4. Assignment</h4>
                <p className="text-gray-600 text-sm">Value assignment</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Arithmetic Operators */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">1. Arithmetic Operators</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                    <span className="font-mono text-lg">+</span>
                    <span className="text-sm">Addition</span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                    <span className="font-mono text-lg">-</span>
                    <span className="text-sm">Subtraction</span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                    <span className="font-mono text-lg">*</span>
                    <span className="text-sm">Multiplication</span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                    <span className="font-mono text-lg">/</span>
                    <span className="text-sm">Division</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                    <span className="font-mono text-lg">%</span>
                    <span className="text-sm">Modulo (Remainder)</span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                    <span className="font-mono text-lg">++</span>
                    <span className="text-sm">Increment</span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-50 p-3 rounded">
                    <span className="font-mono text-lg">--</span>
                    <span className="text-sm">Decrement</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Arithmetic Example</span>
                </div>
                <pre className="p-4 text-gray-100 text-sm overflow-x-auto">
                  <code>{`int a = 10, b = 7;
System.out.println(a + b);  // 17
System.out.println(a - b);  // 3
System.out.println(a * b);  // 70
System.out.println(a / b);  // 1
System.out.println(a % b);  // 3
a++; System.out.println(a); // 11
b--; System.out.println(b); // 6`}</code>
                </pre>
              </div>
            </div>

            {/* Relational Operators */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">2. Relational Operators</h3>
              
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <p className="text-green-800 text-sm font-medium">Result criteria: Always returns boolean (true/false)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                    <span className="font-mono text-lg">==</span>
                    <span className="text-sm">Equal to</span>
                  </div>
                  <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                    <span className="font-mono text-lg">!=</span>
                    <span className="text-sm">Not equal to</span>
                  </div>
                  <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                    <span className="font-mono text-lg">&gt;</span>
                    <span className="text-sm">Greater than</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                    <span className="font-mono text-lg">&gt;=</span>
                    <span className="text-sm">Greater than or equal to</span>
                  </div>
                  <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                    <span className="font-mono text-lg">&lt;</span>
                    <span className="text-sm">Less than</span>
                  </div>
                  <div className="flex justify-between items-center bg-green-50 p-3 rounded">
                    <span className="font-mono text-lg">&lt;=</span>
                    <span className="text-sm">Less than or equal to</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Relational Example</span>
                </div>
                <pre className="p-4 text-gray-100 text-sm overflow-x-auto">
                  <code>{`int a = 800, b = 1200;
System.out.println(a == b);  // false
System.out.println(a != b);  // true
System.out.println(a > b);   // false
System.out.println(a >= b);  // false
System.out.println(a < b);   // true
System.out.println(a <= b);  // true`}</code>
                </pre>
              </div>
            </div>

            {/* Assignment Operators */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">4. Assignment Operators</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-purple-50 p-3 rounded">
                    <span className="font-mono text-lg">=</span>
                    <span className="text-sm">Assignment</span>
                  </div>
                  <div className="flex justify-between items-center bg-purple-50 p-3 rounded">
                    <span className="font-mono text-lg">+=</span>
                    <span className="text-sm">Add and assign</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-purple-50 p-3 rounded">
                    <span className="font-mono text-lg">-=</span>
                    <span className="text-sm">Subtract and assign</span>
                  </div>
                  <div className="flex justify-between items-center bg-purple-50 p-3 rounded">
                    <span className="font-mono text-lg">*=</span>
                    <span className="text-sm">Multiply and assign</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Assignment Example</span>
                </div>
                <pre className="p-4 text-gray-100 text-sm overflow-x-auto">
                  <code>{`int a = 5;
System.out.println(a);    // 5
a = 40;                   // Re-assign
System.out.println(a);    // 40
a += 10;                  // a = a + 10
System.out.println(a);    // 50
a -= 15;                  // a = a - 15
System.out.println(a);    // 35
a /= 3;                   // a = a / 3
System.out.println(a);    // 11`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 7 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "Which company originally developed Java and in what year?",
              options: ["Oracle in 1990", "Sun Microsystems in 1995", "Microsoft in 1995", "IBM in 1990"],
              correctAnswer: 1,
              explanation: "Java was developed by Sun Microsystems in 1995, and is now part of Oracle company."
            },
            {
              id: 2,
              question: "Which of the following is NOT a valid variable name in Java?",
              options: ["_abc", "$ABC", "abc123", "123abc"],
              correctAnswer: 3,
              explanation: "Variable names cannot start with numbers. '123abc' is invalid because it starts with a number."
            },
            {
              id: 3,
              question: "What suffix is required for long data type when storing large values?",
              options: ["f or F", "d or D", "l or L", "No suffix needed"],
              correctAnswer: 2,
              explanation: "Long data type requires 'l' (lowercase) or 'L' (uppercase) suffix for large values, e.g., long d = 12449494884l;"
            },
            {
              id: 4,
              question: "What does the relational operator '>=' mean?",
              options: ["Greater than", "Less than or equal to", "Greater than or equal to", "Not equal to"],
              correctAnswer: 2,
              explanation: "The '>=' operator means 'greater than or equal to'. It returns true if left operand is greater than OR equal to right operand."
            },
            {
              id: 5,
              question: "What is the result of 'a += 5' if a = 10?",
              options: ["a = 5", "a = 10", "a = 15", "a = 50"],
              correctAnswer: 2,
              explanation: "'a += 5' is equivalent to 'a = a + 5'. So if a = 10, then a += 5 makes a = 10 + 5 = 15."
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
                  <h3 className="font-medium text-gray-900 mb-3">Java Features</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Platform Independent</strong>: Run on any OS (Windows, Mac, Linux)</li>
                    <li><strong>Object Oriented</strong>: Everything is objects</li>
                    <li><strong>Secure</strong>: Virus-free application development</li>
                    <li><strong>Applications</strong>: Desktop, Web, Mobile, Games, Test Automation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Data Types</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Primitive (8)</strong>: byte, short, int, long, float, double, boolean, char</li>
                    <li><strong>Non-Primitive</strong>: String, Arrays, Classes</li>
                    <li><strong>Suffixes</strong>: long (l/L), float (f/F)</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Variable Naming Rules</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Valid Start</strong>: Letter, underscore (_), dollar ($)</li>
                    <li><strong>Invalid Start</strong>: Numbers, special chars (except _ $)</li>
                    <li><strong>Case Sensitive</strong>: abc ≠ ABC</li>
                    <li><strong>No Keywords</strong>: Cannot use Java reserved words</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">4 Operator Types</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Arithmetic</strong>: +, -, *, /, %, ++, --</li>
                    <li><strong>Relational</strong>: ==, !=, &gt;, &gt;=, &lt;, &lt;= (returns boolean)</li>
                    <li><strong>Assignment</strong>: =, +=, -=, *=, /=</li>
                    <li><strong>Logical</strong>: &&, ||, ! (covered in next class)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-100 rounded-xl">
              <p className="text-blue-800 text-sm font-medium">
                💡 These Java fundamentals form the core foundation for Selenium automation. 
                Master these concepts as they&apos;re essential for writing effective test automation scripts.
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}