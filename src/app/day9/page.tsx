export const metadata = {
  title: 'Day 9: Java Methods & Functions | SDET Course',
  description: 'Learn Java methods, parameters, return types, and variable scope. Master method creation and function concepts for test automation.',
  keywords: 'java methods, functions, parameters, return types, variable scope, method overloading, java programming, automation methods',
}
'use client'

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day9() {
  return (
    <DayLayout
      dayNumber={9}
      title="Day 9: Java Loops - for, while & do-while"
      description="Master Java loop structures for repetitive operations: for loop, while loop, and do-while loop with practical examples"
      previousDay="/day8"
      nextDay="/day10"
    >
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Today&apos;s Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Loop Fundamentals</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Understanding loop concepts and purpose</li>
                  <li>• 4 types of loops in Java</li>
                  <li>• Loop syntax and structure</li>
                  <li>• Infinite loops and how to avoid them</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Practical Applications</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Number sequences and patterns</li>
                  <li>• Conditional loops with exclusions</li>
                  <li>• Increment and decrement operations</li>
                  <li>• Real-world loop examples</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Loop Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Introduction to Loops in Java</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What are Loops?</h3>
            <p className="text-gray-600 mb-4 text-sm">
              If you want to repeat a block of statements for a specific amount of time, then we use loop concepts.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-3">4 Types of Loops in Java</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li><strong>1. for loop</strong> - Known number of iterations</li>
                  <li><strong>2. while loop</strong> - Condition-based repetition</li>
                </ul>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li><strong>3. do-while loop</strong> - Execute at least once</li>
                  <li><strong>4. enhanced for loop</strong> - Array/collection iteration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For Loop */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">1. For Loop</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">For Loop Syntax</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Use for loop when you want to repeat a block of statements for a specific amount of time.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Syntax Structure</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-purple-300">for</span>(<span className="text-blue-300">startValue</span>; <span className="text-green-300">endValue with condition</span>; <span className="text-yellow-300">increment/decrement</span>) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// statements to repeat"}</span><br/>
                  {`}`}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Basic Example: Print 1 to 5</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-purple-300">for</span>(<span className="text-blue-300">int</span> i = <span className="text-yellow-300">1</span>; i &lt;= <span className="text-yellow-300">5</span>; i++) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-400">{"// Output: 1 2 3 4 5"}</span><br/>
                    {`}`}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Reverse Order: Print 10 to 5</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-purple-300">for</span>(<span className="text-blue-300">int</span> i = <span className="text-yellow-300">10</span>; i &gt;= <span className="text-yellow-300">5</span>; i--) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-400">{"// Output: 10 9 8 7 6 5"}</span><br/>
                    {`}`}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Custom Increment: Print 1, 3 (i = i + 2)</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-purple-300">for</span>(<span className="text-blue-300">int</span> i = <span className="text-yellow-300">1</span>; i &lt; <span className="text-yellow-300">5</span>; i = i + <span className="text-yellow-300">2</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-400">{"// Output: 1 3"}</span><br/>
                    {`}`}
                  </div>
                </div>
              </div>
            </div>

            {/* For Loop Edge Cases */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">For Loop Edge Cases</h3>
              
              <div className="space-y-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 mb-3">⚠️ Missing Increment (Infinite Loop)</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono mb-2">
                    <span className="text-purple-300">for</span>(<span className="text-blue-300">int</span> i = <span className="text-yellow-300">1</span>; i &lt;= <span className="text-yellow-300">5</span>; ) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-400">{"// Prints 1 infinitely"}</span><br/>
                    {`}`}
                  </div>
                  <p className="text-red-700 text-sm">Without increment/decrement, the loop runs infinitely!</p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 mb-3">⚠️ Missing Condition (Infinite Loop)</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono mb-2">
                    <span className="text-purple-300">for</span>(<span className="text-blue-300">int</span> i = <span className="text-yellow-300">1</span>; ; i++) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-400">{"// Prints 1, 2, 3... infinitely"}</span><br/>
                    {`}`}
                  </div>
                  <p className="text-red-700 text-sm">Without end condition, the loop never stops!</p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-800 mb-3">⚠️ False Initial Condition</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono mb-2">
                    <span className="text-purple-300">for</span>(<span className="text-blue-300">int</span> i = <span className="text-yellow-300">1</span>; i == <span className="text-yellow-300">5</span>; i++) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-400">{"// No output"}</span><br/>
                    {`}`}
                  </div>
                  <p className="text-yellow-700 text-sm">If initial condition is false, loop doesn&apos;t execute at all.</p>
                </div>
              </div>
            </div>

            {/* For Loop with Conditions */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">For Loop with Conditional Logic</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Print 1 to 5 except 3</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-purple-300">for</span>(<span className="text-blue-300">int</span> i = <span className="text-yellow-300">1</span>; i &lt;= <span className="text-yellow-300">5</span>; i++) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(i != <span className="text-yellow-300">3</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-400">{"// Output: 1 2 4 5"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    {`}`}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Print 1 to 5 except 2 and 3</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-purple-300">for</span>(<span className="text-blue-300">int</span> i = <span className="text-yellow-300">1</span>; i &lt;= <span className="text-yellow-300">5</span>; i++) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(i != <span className="text-yellow-300">2</span> && i != <span className="text-yellow-300">3</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-400">{"// Output: 1 4 5"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    {`}`}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Print 30 to 40 except 34, 38, and 39</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-purple-300">for</span>(<span className="text-blue-300">int</span> i = <span className="text-yellow-300">30</span>; i &lt;= <span className="text-yellow-300">40</span>; i++) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(i != <span className="text-yellow-300">34</span> && i != <span className="text-yellow-300">38</span> && i != <span className="text-yellow-300">39</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    {`}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* While Loop */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">2. While Loop</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">While Loop Syntax</h3>
              <p className="text-gray-600 mb-4 text-sm">
                While loop repeats a block of statements while the condition is true.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Syntax Structure</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Declare variable/start value/initial value"}</span><br/>
                  <span className="text-blue-300">datatype</span> variable = startValue;<br/><br/>
                  
                  <span className="text-purple-300">while</span>(<span className="text-green-300">endValue with condition</span>) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// statements"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">increment/decrement</span>;<br/>
                  {`}`}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Basic Example: Print 1 to 5</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">int</span> i = <span className="text-yellow-300">1</span>;<br/><br/>
                    
                    <span className="text-purple-300">while</span>(i &lt;= <span className="text-yellow-300">5</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-400">{"// Output: 1 2 3 4 5"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i++;<br/>
                    {`}`}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Reverse Order: Print 30 to 20</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">int</span> i = <span className="text-yellow-300">30</span>;<br/><br/>
                    
                    <span className="text-purple-300">while</span>(i &gt;= <span className="text-yellow-300">20</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i--;<br/>
                    {`}`}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">With Conditions: Print 1 to 10 except 4 and 7</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">int</span> i = <span className="text-yellow-300">1</span>;<br/><br/>
                    
                    <span className="text-purple-300">while</span>(i &lt;= <span className="text-yellow-300">10</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(i != <span className="text-yellow-300">4</span> && i != <span className="text-yellow-300">7</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i++;<br/>
                    {`}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Do-While Loop */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">3. Do-While Loop</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Do-While Loop Syntax</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Do-while loop repeats a block of statements while condition is true, but it will execute at least once even if condition is false.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Syntax Structure</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Declare variable/start value/initial value"}</span><br/>
                  <span className="text-blue-300">datatype</span> variable = startValue;<br/><br/>
                  
                  <span className="text-purple-300">do</span> {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Java statements"}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">increment/decrement</span>;<br/>
                  {`}`} <span className="text-purple-300">while</span>(<span className="text-green-300">endValue with condition</span>);
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Basic Example: Print 1 to 5</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">int</span> i = <span className="text-yellow-300">1</span>;<br/><br/>
                    
                    <span className="text-purple-300">do</span> {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-400">{"// Output: 1 2 3 4 5"}</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i++;<br/>
                    {`}`} <span className="text-purple-300">while</span>(i &lt;= <span className="text-yellow-300">5</span>);
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Reverse Order: Print 30 to 20</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">int</span> i = <span className="text-yellow-300">30</span>;<br/><br/>
                    
                    <span className="text-purple-300">do</span> {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i--;<br/>
                    {`}`} <span className="text-purple-300">while</span>(i &gt;= <span className="text-yellow-300">20</span>);
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">With Conditions: Print 30 to 20 except 25</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">int</span> i = <span className="text-yellow-300">30</span>;<br/><br/>
                    
                    <span className="text-purple-300">do</span> {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(i != <span className="text-yellow-300">25</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;i--;<br/>
                    {`}`} <span className="text-purple-300">while</span>(i &gt;= <span className="text-yellow-300">20</span>);
                  </div>
                </div>
              </div>
            </div>

            {/* Key Difference */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-medium text-blue-900 mb-3">🔑 Key Difference: do-while vs while</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">while loop</h5>
                  <p className="text-blue-700 text-sm">Checks condition first, then executes. May not execute at all if condition is false initially.</p>
                </div>
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">do-while loop</h5>
                  <p className="text-blue-700 text-sm">Executes first, then checks condition. Always executes at least once, even if condition is false.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 9 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "What happens if you forget the increment/decrement in a for loop?",
              options: ["Loop executes once", "Loop throws an error", "Loop runs infinitely", "Loop skips execution"],
              correctAnswer: 2,
              explanation: "Without increment/decrement, the loop condition never changes, causing the loop to run infinitely and print the same value repeatedly."
            },
            {
              id: 2,
              question: "What is the key difference between while and do-while loops?",
              options: ["while is faster", "do-while executes at least once", "while uses less memory", "do-while is newer syntax"],
              correctAnswer: 1,
              explanation: "do-while loop executes the code block first, then checks the condition. This means it always runs at least once, even if the condition is false initially."
            },
            {
              id: 3,
              question: "What will this code output: for(int i=1; i==5; i++) { System.out.println(i); }",
              options: ["1 2 3 4 5", "5", "Nothing (no output)", "Infinite loop"],
              correctAnswer: 2,
              explanation: "The condition i==5 is false initially (i starts at 1), so the loop body never executes and produces no output."
            },
            {
              id: 4,
              question: "How many times will this loop execute: for(int i=1; i<5; i=i+2)?",
              options: ["2 times", "3 times", "4 times", "5 times"],
              correctAnswer: 0,
              explanation: "i starts at 1, then becomes 3 (1+2), then becomes 5 (3+2). Since 5 is not less than 5, the loop stops. So it executes 2 times, printing 1 and 3."
            },
            {
              id: 5,
              question: "Which loop structure is best when you know exactly how many iterations you need?",
              options: ["while loop", "do-while loop", "for loop", "All are equally good"],
              correctAnswer: 2,
              explanation: "for loop is best when you know the exact number of iterations because it has the initialization, condition, and increment/decrement all in one line, making it more readable and organized."
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
                  <h3 className="font-medium text-gray-900 mb-3">Loop Types & Usage</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>for loop</strong>: Known iterations, compact syntax</li>
                    <li><strong>while loop</strong>: Condition-based, check first</li>
                    <li><strong>do-while loop</strong>: Execute first, check later</li>
                    <li><strong>enhanced for</strong>: Arrays/collections (Day 10+)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Loop Components</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Initialization</strong>: Starting value (int i = 1)</li>
                    <li><strong>Condition</strong>: When to continue (i &lt;= 5)</li>
                    <li><strong>Update</strong>: Change per iteration (i++, i--)</li>
                    <li><strong>Body</strong>: Code to repeat</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Common Patterns</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Ascending</strong>: for(int i=1; i&lt;=n; i++)</li>
                    <li><strong>Descending</strong>: for(int i=n; i&gt;=1; i--)</li>
                    <li><strong>Skip Values</strong>: Use if(i != value) inside loop</li>
                    <li><strong>Custom Step</strong>: i = i + 2, i = i + 3</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Best Practices</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Avoid Infinite Loops</strong>: Always include proper increment/decrement</li>
                    <li><strong>Clear Conditions</strong>: Use meaningful comparison operators</li>
                    <li><strong>Readable Code</strong>: Choose appropriate loop type for the task</li>
                    <li><strong>Test Edge Cases</strong>: Verify loop behavior with boundary values</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-100 rounded-xl">
              <p className="text-blue-800 text-sm font-medium">
                💡 Practice Assignment: Print 20 to 40 values except 25 and 35 using for loop. 
                Master these loop concepts as they&apos;re fundamental for Day 10&apos;s Selenium automation!
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}