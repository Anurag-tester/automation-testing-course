'use client'
export const metadata = {
  title: 'Day 8: Java Loops & Iterations | SDET Course',
  description: 'Master Java loops including for, while, and do-while loops. Learn loop control statements and iteration techniques for automation.',
  keywords: 'java loops, for loop, while loop, do while loop, iterations, loop control, java programming, automation loops',
}

import DayLayout from '@/components/DayLayout'
import Quiz from '@/components/Quiz'

export default function Day8() {
  return (
    <DayLayout
      dayNumber={8}
      title="Day 8: Java Logical Operators & Conditional Statements"
      description="Master logical operators (AND, OR, NOT) and conditional statements (if, if-else, else-if) in Java programming"
      previousDay="/day7"
      nextDay="/day9"
    >
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Today&apos;s Learning Objectives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Logical Operators</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• AND (&&) operator with truth tables</li>
                  <li>• OR (||) operator with practical examples</li>
                  <li>• NOT (!) operator for condition reversal</li>
                  <li>• Multiple variable declarations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Conditional Statements</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Simple if statements</li>
                  <li>• if-else conditions</li>
                  <li>• else-if ladder structures</li>
                  <li>• Real-world programming examples</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Logical Operators */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Logical Operators in Java</h2>
          
          <div className="space-y-8">
            {/* AND Operator */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">1. AND Operator (&&)</h3>
              <p className="text-gray-600 mb-4 text-sm">In AND operator, if both conditions are true then we get result is true.</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-3">Truth Table</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Condition1</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Condition2</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Result</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3">true</td>
                        <td className="py-2 px-3">true</td>
                        <td className="py-2 px-3 font-medium text-green-600">true</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3">true</td>
                        <td className="py-2 px-3">false</td>
                        <td className="py-2 px-3 font-medium text-red-600">false</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3">false</td>
                        <td className="py-2 px-3">true</td>
                        <td className="py-2 px-3 font-medium text-red-600">false</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">false</td>
                        <td className="py-2 px-3">false</td>
                        <td className="py-2 px-3 font-medium text-red-600">false</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <div className="text-gray-400 mb-2">{"// Boolean AND Example"}</div>
                <div className="text-blue-300">boolean</div> a = <span className="text-green-300">true</span>;<br/>
                <div className="text-blue-300">boolean</div> b = <span className="text-green-300">true</span>;<br/>
                <div className="text-blue-300">boolean</div> c = <span className="text-red-300">false</span>;<br/>
                <div className="text-blue-300">boolean</div> d = <span className="text-red-300">false</span>;<br/><br/>
                
                System.out.println(a && b); <span className="text-gray-400">{"// true"}</span><br/>
                System.out.println(a && c); <span className="text-gray-400">{"// false"}</span><br/>
                System.out.println(c && b); <span className="text-gray-400">{"// false"}</span><br/>
                System.out.println(c && d); <span className="text-gray-400">{"// false"}</span>
              </div>

              <div className="mt-4 bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <div className="text-gray-400 mb-2">{"// Integer Comparison AND Example"}</div>
                <div className="text-blue-300">int</div> a = <span className="text-yellow-300">100</span>, b = <span className="text-yellow-300">150</span>, c = <span className="text-yellow-300">23</span>, d = <span className="text-yellow-300">430</span>;<br/><br/>
                
                System.out.println((a &lt; b) && (c &lt; d)); <span className="text-gray-400">{"// true"}</span><br/>
                System.out.println((a &lt; b) && (c &gt; d)); <span className="text-gray-400">{"// false"}</span><br/>
                System.out.println((a &gt; b) && (c &lt; d)); <span className="text-gray-400">{"// false"}</span><br/>
                System.out.println((a &gt; b) && (c &gt; d)); <span className="text-gray-400">{"// false"}</span>
              </div>
            </div>

            {/* OR Operator */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">2. OR Operator (||)</h3>
              <p className="text-gray-600 mb-4 text-sm">In OR operator, if any one condition is true then we get result is true.</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-3">Truth Table</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Condition1</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Condition2</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Result</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3">true</td>
                        <td className="py-2 px-3">true</td>
                        <td className="py-2 px-3 font-medium text-green-600">true</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3">true</td>
                        <td className="py-2 px-3">false</td>
                        <td className="py-2 px-3 font-medium text-green-600">true</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3">false</td>
                        <td className="py-2 px-3">true</td>
                        <td className="py-2 px-3 font-medium text-green-600">true</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">false</td>
                        <td className="py-2 px-3">false</td>
                        <td className="py-2 px-3 font-medium text-red-600">false</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <div className="text-gray-400 mb-2">{"// Boolean OR Example"}</div>
                <div className="text-blue-300">boolean</div> a = <span className="text-green-300">true</span>;<br/>
                <div className="text-blue-300">boolean</div> b = <span className="text-green-300">true</span>;<br/>
                <div className="text-blue-300">boolean</div> c = <span className="text-red-300">false</span>;<br/>
                <div className="text-blue-300">boolean</div> d = <span className="text-red-300">false</span>;<br/><br/>
                
                System.out.println(a || b); <span className="text-gray-400">{"// true"}</span><br/>
                System.out.println(a || c); <span className="text-gray-400">{"// true"}</span><br/>
                System.out.println(c || b); <span className="text-gray-400">{"// true"}</span><br/>
                System.out.println(c || d); <span className="text-gray-400">{"// false"}</span>
              </div>
            </div>

            {/* NOT Operator */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">3. NOT Operator (!)</h3>
              <p className="text-gray-600 mb-4 text-sm">NOT operator means reverse of original values. If condition is true then result is false, and vice versa.</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-3">Truth Table</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Condition</th>
                        <th className="text-left py-2 px-3 font-medium text-gray-700">Result</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3">true</td>
                        <td className="py-2 px-3 font-medium text-red-600">false</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">false</td>
                        <td className="py-2 px-3 font-medium text-green-600">true</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <div className="text-gray-400 mb-2">{"// NOT Operator Example"}</div>
                <div className="text-blue-300">boolean</div> a = <span className="text-green-300">true</span>;<br/>
                <div className="text-blue-300">boolean</div> b = <span className="text-red-300">false</span>;<br/><br/>
                
                System.out.println(a);  <span className="text-gray-400">{"// true"}</span><br/>
                System.out.println(!a); <span className="text-gray-400">{"// false"}</span><br/>
                System.out.println(b);  <span className="text-gray-400">{"// false"}</span><br/>
                System.out.println(!b); <span className="text-gray-400">{"// true"}</span><br/><br/>
                
                <div className="text-gray-400 mb-2">{"// With comparisons"}</div>
                <div className="text-blue-300">int</div> x = <span className="text-yellow-300">100</span>, y = <span className="text-yellow-300">23</span>;<br/>
                System.out.println(x &gt; y);  <span className="text-gray-400">{"// true"}</span><br/>
                System.out.println(!(x &gt; y)); <span className="text-gray-400">{"// false"}</span>
              </div>
            </div>

            {/* Multiple Variable Declaration */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Multiple Variable Declaration</h3>
              <p className="text-gray-600 mb-4 text-sm">You can define multiple variables of the same datatype in a single line.</p>
              
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <div className="text-gray-400 mb-2">{"// Syntax"}</div>
                datatype variableName1 = value1, variableName2 = value2, variableName3 = value3;<br/><br/>
                
                <div className="text-gray-400 mb-2">{"// Example"}</div>
                <div className="text-blue-300">int</div> a = <span className="text-yellow-300">100</span>, b = <span className="text-yellow-300">334</span>, c = <span className="text-yellow-300">345</span>, d = <span className="text-yellow-300">33</span>;<br/><br/>
                
                <div className="text-gray-400 mb-2">{"// Using in logical operations"}</div>
                System.out.println((a &lt;= b) && (c != d)); <span className="text-gray-400">{"// true"}</span><br/>
                System.out.println((a &lt;= b) || (c != d)); <span className="text-gray-400">{"// true"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Conditional Statements */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Java Conditional Statements</h2>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <p className="text-gray-700 text-sm">
              There are 2 types of conditional statements in Java: <strong>if-else conditions</strong> and <strong>switch statements</strong>. 
              Today we&apos;ll focus on if-else conditions.
            </p>
          </div>

          <div className="space-y-8">
            {/* Simple if */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">1. Simple if Statement</h3>
              <p className="text-gray-600 mb-4 text-sm">If block condition is true then it executes if block of code, otherwise it skips it.</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-purple-300">if</span>(condition)<br/>
                  {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// Java statements"}</span><br/>
                  {`}`}
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <div className="text-gray-400 mb-2">{"// Example"}</div>
                <span className="text-purple-300">public class</span> <span className="text-yellow-300">Demo7</span> {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-blue-300">main</span>(String[] args) {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Main method started&quot;</span>);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">int</span> a = <span className="text-yellow-300">100</span>;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">int</span> b = <span className="text-yellow-300">240</span>;<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">if</span>(a &lt; b) {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Pune...&quot;</span>);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Main method ended&quot;</span>);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                {`}`}
              </div>
            </div>

            {/* if-else */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">2. if-else Statement</h3>
              <p className="text-gray-600 mb-4 text-sm">If condition is true, execute if block. If condition is false, execute else block.</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-purple-300">if</span>(condition) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// if block code"}</span><br/>
                  {`}`} <span className="text-purple-300">else</span> {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// else block code"}</span><br/>
                  {`}`}
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <div className="text-gray-400 mb-2">{"// Example"}</div>
                <span className="text-blue-300">int</span> a = <span className="text-yellow-300">100</span>;<br/>
                <span className="text-blue-300">int</span> b = <span className="text-yellow-300">200</span>;<br/><br/>
                
                <span className="text-purple-300">if</span>(a &gt;= b) {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Pune..&quot;</span>);<br/>
                {`}`} <span className="text-purple-300">else</span> {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Mumbai..&quot;</span>);<br/>
                {`}`}
              </div>
            </div>

            {/* else if */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">3. else if</h3>
              <p className="text-gray-600 mb-4 text-sm">Multiple conditions checked sequentially. First true condition executes its block and skips remaining conditions.</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                  <span className="text-purple-300">if</span>(condition1) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// condition 1 block"}</span><br/>
                  {`}`} <span className="text-purple-300">else if</span>(condition2) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// condition 2 block"}</span><br/>
                  {`}`} <span className="text-purple-300">else if</span>(condition3) {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// condition 3 block"}</span><br/>
                  {`}`} <span className="text-purple-300">else</span> {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"// else block"}</span><br/>
                  {`}`}
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <div className="text-gray-400 mb-2">{"// Find maximum number example"}</div>
                <span className="text-blue-300">int</span> a = <span className="text-yellow-300">10000</span>, b = <span className="text-yellow-300">800</span>, c = <span className="text-yellow-300">230</span>;<br/><br/>
                
                <span className="text-purple-300">if</span>((a &gt; b) && (a &gt; c)) {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;a is bigger number&quot;</span>);<br/>
                {`}`} <span className="text-purple-300">else if</span>(b &gt; c) {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;b is bigger number&quot;</span>);<br/>
                {`}`} <span className="text-purple-300">else</span> {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;c is bigger number&quot;</span>);<br/>
                {`}`}
              </div>
            </div>

            {/* Real-world Examples */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Real-world Examples</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Age Category Classification</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">int</span> age = <span className="text-yellow-300">25</span>;<br/><br/>
                    
                    <span className="text-purple-300">if</span>((age &gt;= <span className="text-yellow-300">1</span>) && (age &lt;= <span className="text-yellow-300">11</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;child&quot;</span>);<br/>
                    {`}`} <span className="text-purple-300">else if</span>((age &gt;= <span className="text-yellow-300">12</span>) && (age &lt;= <span className="text-yellow-300">17</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;teen&quot;</span>);<br/>
                    {`}`} <span className="text-purple-300">else if</span>((age &gt;= <span className="text-yellow-300">18</span>) && (age &lt;= <span className="text-yellow-300">64</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;adult&quot;</span>);<br/>
                    {`}`} <span className="text-purple-300">else if</span>(age &gt; <span className="text-yellow-300">64</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;senior&quot;</span>);<br/>
                    {`}`} <span className="text-purple-300">else</span> {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Please enter valid age&quot;</span>);<br/>
                    {`}`}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Grade Classification System</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                    <span className="text-blue-300">int</span> marks = <span className="text-yellow-300">85</span>;<br/><br/>
                    
                    <span className="text-purple-300">if</span>(marks &lt; <span className="text-yellow-300">25</span>) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Grade is F&quot;</span>);<br/>
                    {`}`} <span className="text-purple-300">else if</span>((marks &gt;= <span className="text-yellow-300">25</span>) && (marks &lt;= <span className="text-yellow-300">45</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Grade is E&quot;</span>);<br/>
                    {`}`} <span className="text-purple-300">else if</span>((marks &gt;= <span className="text-yellow-300">46</span>) && (marks &lt;= <span className="text-yellow-300">55</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Grade is D&quot;</span>);<br/>
                    {`}`} <span className="text-purple-300">else if</span>((marks &gt;= <span className="text-yellow-300">56</span>) && (marks &lt;= <span className="text-yellow-300">65</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Grade is C&quot;</span>);<br/>
                    {`}`} <span className="text-purple-300">else if</span>((marks &gt;= <span className="text-yellow-300">66</span>) && (marks &lt;= <span className="text-yellow-300">75</span>)) {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Grade is B&quot;</span>);<br/>
                    {`}`} <span className="text-purple-300">else</span> {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-green-300">&quot;Grade is A&quot;</span>);<br/>
                    {`}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 8 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "What is the result of (true && false) || (false && true)?",
              options: ["true", "false", "null", "error"],
              correctAnswer: 1,
              explanation: "First part: (true && false) = false. Second part: (false && true) = false. Final: false || false = false."
            },
            {
              id: 2,
              question: "In the NOT operator (!), what happens when you apply it to a true condition?",
              options: ["Returns true", "Returns false", "Returns null", "Throws error"],
              correctAnswer: 1,
              explanation: "The NOT operator (!) reverses the boolean value. So !true returns false, and !false returns true."
            },
            {
              id: 3,
              question: "How many conditions need to be true in an OR (||) operator to get a true result?",
              options: ["All conditions", "At least one condition", "Exactly two conditions", "No conditions"],
              correctAnswer: 1,
              explanation: "In OR operator, if any one condition is true, the result is true. Only when all conditions are false does OR return false."
            },
            {
              id: 4,
              question: "What is the correct syntax for declaring multiple integer variables in one line?",
              options: ["int a, b, c;", "int a = 10, b = 20, c = 30;", "int a; int b; int c;", "integer a = 10, b = 20;"],
              correctAnswer: 1,
              explanation: "The correct syntax is: datatype variable1 = value1, variable2 = value2, variable3 = value3; So 'int a = 10, b = 20, c = 30;' is correct."
            },
            {
              id: 5,
              question: "In an else-if ladder, what happens when the first condition is true?",
              options: ["All conditions are checked", "Only the first block executes, remaining are skipped", "An error occurs", "The else block always executes"],
              correctAnswer: 1,
              explanation: "In else-if ladder, when the first condition is true, its block executes and all remaining conditions (else-if and else) are skipped."
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
                  <h3 className="font-medium text-gray-900 mb-3">Logical Operators</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>AND (&&)</strong>: Both conditions must be true → result is true</li>
                    <li><strong>OR (||)</strong>: Any one condition true → result is true</li>
                    <li><strong>NOT (!)</strong>: Reverses boolean value (true ↔ false)</li>
                    <li><strong>Multiple Variables</strong>: int a = 10, b = 20, c = 30;</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Truth Tables</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>AND</strong>: T&&T=T, T&&F=F, F&&T=F, F&&F=F</li>
                    <li><strong>OR</strong>: T||T=T, T||F=T, F||T=T, F||F=F</li>
                    <li><strong>NOT</strong>: !T=F, !F=T</li>
                    <li>Use parentheses for complex expressions</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Conditional Statements</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>if</strong>: Execute block only if condition is true</li>
                    <li><strong>if-else</strong>: Execute if block or else block</li>
                    <li><strong>else if</strong>: Multiple conditions, first true executes</li>
                    <li>Use logical operators in conditions for complex logic</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Real-world Applications</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li><strong>Age Categories</strong>: Child (1-11), Teen (12-17), Adult (18-64), Senior (65+)</li>
                    <li><strong>Grade System</strong>: F(&lt;25), E(25-45), D(46-55), C(56-65), B(66-75), A(75+)</li>
                    <li><strong>Number Classification</strong>: Small, Medium, Big, Biggest ranges</li>
                    <li><strong>Decision Making</strong>: User input validation, menu systems</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-100 rounded-xl">
              <p className="text-blue-800 text-sm font-medium">
                💡 Master these logical operators and conditional statements as they form the foundation for decision-making 
                in programming. Day 9 will introduce loops for repetitive operations.
              </p>
            </div>
          </div>
        </section>

    </DayLayout>
  )
}