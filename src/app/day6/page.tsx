export const metadata = {
  title: 'Day 6: Java Fundamentals - Data Types & Variables | SDET Course',
  description: 'Master Java fundamentals including primitive data types, variables, and arithmetic operations. Essential Java concepts for automation testing.',
  keywords: 'java fundamentals, java data types, variables, arithmetic operations, primitive types, java programming, automation testing java',
}
import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day6() {
  return (
    <DayLayout
      dayNumber={6}
      title="Integration Testing & Java Fundamentals"
      description="Learn Integration Testing approaches and Java programming basics including data types, variables, and operators"
      previousDay="/day5"
      nextDay="/day7"
    >
        {/* Lesson Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Lesson Overview</h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Today we&apos;ll complete our functional testing journey with Integration Testing and begin 
              Java programming fundamentals. You&apos;ll learn integration approaches and Java basics 
              essential for Selenium automation testing.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Integration Testing</h3>
                <p className="text-gray-600 text-sm">3 approaches & concepts</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Java Data Types</h3>
                <p className="text-gray-600 text-sm">9 primitive types</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Java Operators</h3>
                <p className="text-gray-600 text-sm">Arithmetic operations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Testing */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Integration Testing</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What is Integration Testing?</h3>
            <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>• Once development develops new module or functionality, they integrate latest code with existing code</li>
              <li>• Development team integrates dependent and independent modules to make the software</li>
              <li>• Development is responsible to integrate all modules based on HLD and LLD design</li>
              <li>• Testing team is responsible to test all integrated modules</li>
            </ul>
          </div>

          <div className="space-y-8">
            {/* Top Down Approach */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mr-3">1</div>
                <h3 className="text-xl font-medium text-gray-900">Top Down Approach</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Main module is developed but sub module or child module is under development</li>
                  <li>• Development team writes temporary code to display main module functionality result in sub module pages</li>
                  <li>• Temporary code is written using XML (Extensive Markup Language) or JSON (JavaScript Object Notation) format</li>
                  <li>• Development team uses <strong>stub</strong> - temporary program written in XML or JSON format</li>
                  <li>• Stub is also called <strong>&quot;Called Program&quot;</strong></li>
                  <li>• We validate expected main functionality result is present in result grid functionality</li>
                </ul>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">When to Use:</h4>
                  <p className="text-blue-700 text-sm">
                    Use stub when main module is developed and sub module is under development
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Up Approach */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mr-3">2</div>
                <h3 className="text-xl font-medium text-gray-900">Bottom Up Approach</h3>
              </div>
              
              <div className="space-y-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Main module is under development and sub module is developed</li>
                  <li>• Development team writes temporary code to display or mark child functionality as part of main functionality</li>
                  <li>• Temporary code is written using XML or JSON format</li>
                  <li>• Development team uses <strong>driver</strong> - temporary program written in XML or JSON format</li>
                  <li>• Driver is also called <strong>&quot;Calling Program&quot;</strong></li>
                  <li>• Once we achieve main module functionality using XML or JSON, same information should exist in sub module</li>
                </ul>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">When to Use:</h4>
                  <p className="text-green-700 text-sm">
                    Use driver when main module is under development and sub module is developed
                  </p>
                </div>
              </div>
            </div>

            {/* Hybrid Approach */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full mr-3">3</div>
                <h3 className="text-xl font-medium text-gray-900">Hybrid Approach</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 text-sm">
                  It is a combination of Top Down and Bottom Up approaches
                </p>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">Best of Both Worlds:</h4>
                  <p className="text-purple-700 text-sm">
                    Combines the benefits of both Top Down (using stubs) and Bottom Up (using drivers) approaches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Java Data Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Java Data Types</h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What are Data Types?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Data types specify what kind of values we can store in Java programs. Java supports various data types for different purposes.
            </p>
          </div>

          <div className="space-y-8">
            {/* Numbers */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">1. Numbers (Integer Types)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">byte</h4>
                    <p className="text-blue-700 text-sm">Range: -128 to 127</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">short</h4>
                    <p className="text-blue-700 text-sm">Range: -32,768 to 32,767</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-300">
                    <h4 className="font-medium text-blue-800 mb-2">int ⭐ (Most Used)</h4>
                    <p className="text-blue-700 text-sm">Range: -2,147,483,648 to 2,147,483,647</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">long</h4>
                    <p className="text-blue-700 text-sm">Very large numbers (add &apos;l&apos; at end)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decimal Values */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">2. Decimal Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-100 rounded-lg p-4 border-2 border-green-300">
                  <h4 className="font-medium text-green-800 mb-2">float ⭐ (Most Used)</h4>
                  <p className="text-green-700 text-sm">Precision: 6 to 7 digits (add &apos;f&apos; at end)</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">double</h4>
                  <p className="text-green-700 text-sm">Precision: Up to 15 digits</p>
                </div>
              </div>
            </div>

            {/* Other Types */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">3. Other Data Types</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">boolean</h4>
                  <p className="text-purple-700 text-sm">Values: true / false</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">char</h4>
                  <p className="text-purple-700 text-sm">Single character (use single quotes)</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">String</h4>
                  <p className="text-purple-700 text-sm">Words or text (use double quotes)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Variable Declaration */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Variable Declaration Syntax</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Standard Syntax</h3>
            <div className="bg-white rounded-lg p-6 font-mono text-lg text-center border-2 border-purple-200">
              <span className="text-blue-600">datatype</span>{' '}
              <span className="text-green-600">variablename</span>{' '}
              <span className="text-gray-600">=</span>{' '}
              <span className="text-red-600">value</span><span className="text-gray-600">;</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-medium text-blue-900 mb-3">1. Datatype</h4>
              <p className="text-blue-700 text-sm mb-3">Specify the data type:</p>
              <div className="text-xs space-y-1">
                <span className="inline-block bg-white px-2 py-1 rounded mr-1 mb-1">byte</span>
                <span className="inline-block bg-white px-2 py-1 rounded mr-1 mb-1">int</span>
                <span className="inline-block bg-white px-2 py-1 rounded mr-1 mb-1">float</span>
                <span className="inline-block bg-white px-2 py-1 rounded mr-1 mb-1">boolean</span>
                <span className="inline-block bg-white px-2 py-1 rounded mr-1 mb-1">String</span>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="font-medium text-green-900 mb-3">2. Variable Name</h4>
              <p className="text-green-700 text-sm mb-3">Any name you choose:</p>
              <ul className="text-xs space-y-1 text-green-700">
                <li>• Can start with letter, _, $</li>
                <li>• Case sensitive</li>
                <li>• No Java keywords</li>
                <li>• No spaces</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-xl p-6">
              <h4 className="font-medium text-red-900 mb-3">3. Value</h4>
              <p className="text-red-700 text-sm mb-3">Expected value:</p>
              <ul className="text-xs space-y-1 text-red-700">
                <li>• Must match datatype</li>
                <li>• Numbers: 123</li>
                <li>• Text: &quot;hello&quot;</li>
                <li>• Character: &apos;a&apos;</li>
              </ul>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">Demo1.java</span>
            </div>
            <pre className="p-6 text-gray-100 text-sm overflow-x-auto">
              <code>{`public class Demo1 {
    public static void main(String[] args) {
        // Variable declarations with different data types
        byte a = 10;
        System.out.println(a);
        
        short b = 20;
        System.out.println(b);
        
        int c = 22333;
        System.out.println(c);
        
        long d = 234455555555l;  // Note the 'l' at end
        System.out.println(d);
        
        float e = 344.45f;       // Note the 'f' at end
        System.out.println(e);
        
        double f = 344555455.5566;
        System.out.println(f);
        
        boolean m = false;
        System.out.println(m);
        
        char n = 't';            // Single quotes
        System.out.println(n);
        
        String k = "automation"; // Double quotes
        System.out.println(k);
    }
}`}</code>
            </pre>
          </div>
        </section>

        {/* Arithmetic Operators */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Arithmetic Operators</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-orange-900 mb-4">Basic Operators</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white p-3 rounded border">
                  <span className="font-mono text-lg text-orange-600">+</span>
                  <span className="text-sm">Addition</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded border">
                  <span className="font-mono text-lg text-orange-600">-</span>
                  <span className="text-sm">Subtraction</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded border">
                  <span className="font-mono text-lg text-orange-600">*</span>
                  <span className="text-sm">Multiplication</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded border">
                  <span className="font-mono text-lg text-orange-600">/</span>
                  <span className="text-sm">Division</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded border">
                  <span className="font-mono text-lg text-orange-600">%</span>
                  <span className="text-sm">Modulo (Remainder)</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-lg font-medium text-red-900 mb-4">Unary Operators</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-lg text-red-600">++</span>
                    <span className="text-sm font-medium">Increment</span>
                  </div>
                  <p className="text-xs text-gray-600">Increase value by 1</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-lg text-red-600">--</span>
                    <span className="text-sm font-medium">Decrement</span>
                  </div>
                  <p className="text-xs text-gray-600">Decrease value by 1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arithmetic Example */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">Demo2.java</span>
            </div>
            <pre className="p-6 text-gray-100 text-sm overflow-x-auto">
              <code>{`public class Demo2 {
    public static void main(String[] args) {
        int a = 100;
        int b = 20;
        
        // Basic arithmetic operations
        System.out.println(a + b);  // 120 (Addition)
        System.out.println(a - b);  // 80  (Subtraction)
        System.out.println(a * b);  // 2000 (Multiplication)
        System.out.println(a / b);  // 5   (Division)
        System.out.println(a % b);  // 0   (Modulo)
        
        // Increment and Decrement
        a++;  // Increment a by 1
        System.out.println(a);      // 101
        
        b--;  // Decrement b by 1
        System.out.println(b);      // 19
    }
}`}</code>
            </pre>
          </div>
        </section>

        {/* Java Project Setup */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Java Project Setup Guide</h2>
          
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
              <h3 className="font-medium text-gray-900">Java Project Creation Steps</h3>
            </div>
            <div className="p-0">
              <iframe
                src="/Day 6/Java Project Create Steps.pdf"
                className="w-full h-[600px] border-0"
                title="Java Project Setup Guide"
              />
            </div>
          </div>
        </section>

          questions={[
            {
              id: 1,
              question: "Which integration testing approach uses 'stub' as a temporary program?",
              options: ["Bottom Up Approach", "Top Down Approach", "Hybrid Approach", "All approaches"],
              correctAnswer: 1,
              explanation: "Top Down Approach uses 'stub' (Called Program) when main module is developed and sub module is under development."
            },
            {
              id: 2,
              question: "What is the range of 'int' data type in Java?",
              options: ["-128 to 127", "-32,768 to 32,767", "-2,147,483,648 to 2,147,483,647", "Up to 15 digits"],
              correctAnswer: 2,
              explanation: "The 'int' data type in Java has a range of -2,147,483,648 to 2,147,483,647 and is the most commonly used integer type."
            },
            {
              id: 3,
              question: "Which suffix is required when declaring a float variable in Java?",
              options: ["l (lowercase L)", "f (lowercase F)", "d (lowercase D)", "No suffix needed"],
              correctAnswer: 1,
              explanation: "Float variables require 'f' suffix at the end of the value, e.g., float x = 123.45f;"
            },
            {
              id: 4,
              question: "What is the correct syntax for variable declaration in Java?",
              options: ["value = datatype variablename;", "variablename datatype = value;", "datatype variablename = value;", "datatype = variablename value;"],
              correctAnswer: 2,
              explanation: "The correct syntax is: datatype variablename = value; (e.g., int age = 25;)"
            },
            {
              id: 5,
              question: "Which operator is used for finding the remainder in Java?",
              options: ["/", "*", "%", "++"],
              correctAnswer: 2,
              explanation: "The modulo operator (%) is used to find the remainder after division. For example, 10 % 3 = 1."
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
                  <h3 className="font-medium text-gray-900 mb-3">Integration Testing Approaches</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Top Down</strong>: Main developed, sub under development (uses stub)</li>
                    <li><strong>Bottom Up</strong>: Sub developed, main under development (uses driver)</li>
                    <li><strong>Hybrid</strong>: Combination of both approaches</li>
                    <li><strong>Stub</strong>: Called Program (XML/JSON temporary code)</li>
                    <li><strong>Driver</strong>: Calling Program (XML/JSON temporary code)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Java Data Types</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Numbers</strong>: byte, short, int (most used), long (add &apos;l&apos;)</li>
                    <li><strong>Decimals</strong>: float (add &apos;f&apos;), double</li>
                    <li><strong>Others</strong>: boolean (true/false), char (&apos;single&apos;), String (&quot;double&quot;)</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Variable Declaration</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Syntax</strong>: datatype variablename = value;</li>
                    <li><strong>Examples</strong>: int age = 25; float price = 99.99f;</li>
                    <li><strong>Rules</strong>: No keywords, case sensitive, no spaces</li>
                    <li><strong>Print</strong>: System.out.println(variablename);</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Arithmetic Operators</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Basic</strong>: + (add), - (subtract), * (multiply), / (divide), % (modulo)</li>
                    <li><strong>Unary</strong>: ++ (increment), -- (decrement)</li>
                    <li><strong>Example</strong>: a++ increases value by 1</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-100 rounded-xl">
              <p className="text-green-800 text-sm font-medium">
                💡 These Java fundamentals are essential for Selenium automation. Master data types and operators 
                as they form the foundation for writing automation test scripts.
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}