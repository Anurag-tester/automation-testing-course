'use client'
export const metadata = {
  title: 'Day 21: Advanced XPath & Axes | SDET Course',
  description: 'Master advanced XPath techniques including XPath axes like child, descendant, and complex DOM navigation strategies.',
  keywords: 'advanced xpath, xpath axes, child axis, descendant axis, xpath navigation, dom traversal, xpath optimization',
}
import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day21() {
  return (
    <DayLayout
      dayNumber={21}
      title="Advanced XPath & Axes"
      description="Master advanced XPath techniques including attribute-based methods, XPath axes like child and descendant, and complex DOM navigation strategies."
      previousDay="/day20"
      nextDay="/day22"
    >
      <div className="max-w-4xl mx-auto">
        {/* XPath Methods Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Complete XPath Methods Overview</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">10 XPath Location Techniques</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Text-Based Methods (1-7)</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>1. Single attribute</li>
                    <li>2. AND Operator</li>
                    <li>3. OR Operator</li>
                    <li>4. text() method</li>
                    <li>5. starts-with() with text()</li>
                    <li>6. contains() with text()</li>
                    <li>7. normalize-space() with text()</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Attribute-Based Methods (8-10)</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>8. starts-with() with attribute</li>
                    <li>9. contains() with attribute</li>
                    <li>10. normalize-space() with attribute</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attribute-Based Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Attribute-Based XPath Methods</h2>
          
          <div className="space-y-8">
            {/* starts-with with attribute */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">8. starts-with() with Attribute</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Use Case</h4>
                  <p className="text-blue-800 text-sm">
                    When attribute value is dynamic at the end, but starting value is constant
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">starts-with(@attribute, 'value')</span>]
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-gray-400">{"// Dynamic ID with constant prefix"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">starts-with(@id, 'u_0_h')</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Dynamic name attribute"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">starts-with(@name, 'reg_email__')</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// ID starting with 'first'"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">starts-with(@id,'first')</span>]</div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">💡 Real-world Scenario</h4>
                  <p className="text-yellow-800 text-sm">
                    Facebook generates dynamic IDs like "u_0_h_abc123", "u_0_h_def456". Using starts-with(@id, 'u_0_h') captures all variations.
                  </p>
                </div>
              </div>
            </div>

            {/* contains with attribute */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">9. contains() with Attribute</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Use Case</h4>
                  <p className="text-green-800 text-sm">
                    When some part of attribute value is constant and remaining is dynamic
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">contains(@attribute, 'value')</span>]
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-gray-400">{"// ID containing specific pattern"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">contains(@id, 'u_0_h')</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Name containing 'email__'"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">contains(@name,'email__')</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// ID containing 'first'"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">input</span>[<span className="text-green-300">contains(@id,'first')</span>]</div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">🔍 Comparison</h4>
                  <div className="text-purple-800 text-sm space-y-1">
                    <div><strong>starts-with:</strong> "abc123def" matches starts-with(@attr, 'abc')</div>
                    <div><strong>contains:</strong> "abc123def" matches contains(@attr, '123')</div>
                  </div>
                </div>
              </div>
            </div>

            {/* normalize-space with attribute */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">10. normalize-space() with Attribute</h3>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">Use Case</h4>
                  <p className="text-orange-800 text-sm">
                    When attribute values have extra spaces that need to be normalized
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">normalize-space(@attribute)='value'</span>]
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-2">⚠️ Note</h4>
                  <p className="text-red-800 text-sm">
                    Less commonly used with attributes compared to text(), but useful for handling inconsistent attribute formatting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* XPath Axes */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">XPath Axes Navigation</h2>
          
          <div className="space-y-8">
            {/* Child Axis */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">1. child Keyword</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Purpose</h4>
                  <p className="text-blue-800 text-sm">
                    Navigate to direct child elements of a parent element
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax Variations</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span>]<span className="text-purple-300">/child::</span><span className="text-blue-300">tagname</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span>]<span className="text-purple-300">/child::</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span>]<span className="text-purple-300">/child::</span><span className="text-blue-300">tagname</span>[<span className="text-orange-300">position()=1</span>]</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-gray-400">{"// Basic child navigation"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">div</span>[<span className="text-green-300">@class='b11'</span>]<span className="text-purple-300">/child::</span><span className="text-blue-300">input</span></div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// First child element"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">div</span>[<span className="text-green-300">@class='b11'</span>]<span className="text-purple-300">/child::</span><span className="text-blue-300">input</span>[<span className="text-orange-300">position()=1</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Complex nested navigation"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">div</span>[<span className="text-green-300">contains(@id,'u_0_7')</span>]<span className="text-purple-300">/child::</span><span className="text-blue-300">div</span>[<span className="text-orange-300">position()=1</span>]<span className="text-purple-300">/child::</span><span className="text-blue-300">input</span></div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">🏗️ DOM Structure Example</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono">
                    <div><span className="text-gray-400">{"<!-- Grant Parent (div) -->"}</span></div>
                    <div>&nbsp;&nbsp;<span className="text-gray-400">{"<!-- Parent 1 div --> class=\"uiStickyPlaceholderInput\""}</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"<!-- child div -->"}</span></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{"<!-- child input -->"}</span></div>
                    <div>&nbsp;&nbsp;<span className="text-gray-400">{"<!-- Parent 2 div --> class=\"_1pc_\""}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Descendant Axis */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">2. descendant Keyword</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Purpose</h4>
                  <p className="text-green-800 text-sm">
                    Search all child tags, grandchild tags, and great-grandchild tags (entire subtree)
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Syntax Variations</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span>]<span className="text-purple-300">/descendant::</span><span className="text-blue-300">tagname</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span>]<span className="text-purple-300">/descendant::</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span>]</div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">tagname</span>[<span className="text-green-300">@attribute='value'</span>]<span className="text-purple-300">/descendant::</span><span className="text-blue-300">tagname</span>[<span className="text-orange-300">position()=1</span>]</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-800">Examples:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-xs font-mono space-y-1">
                    <div><span className="text-gray-400">{"// Find any input descendant"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">div</span>[<span className="text-green-300">contains(@id, 'u_0_7')</span>]<span className="text-purple-300">/descendant::</span><span className="text-blue-300">input</span></div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Complex form navigation"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">span</span>[<span className="text-green-300">@class='b1'</span>]<span className="text-purple-300">/descendant::</span><span className="text-blue-300">input</span>[<span className="text-green-300">@name='firstname'</span>][<span className="text-orange-300">position()=1</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Google search button"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">div</span>[<span className="text-green-300">@class='FPdoLc lJ9FBc'</span>]<span className="text-purple-300">/descendant::</span><span className="text-blue-300">input</span>[<span className="text-green-300">@name='btnK'</span>]</div>
                    
                    <div className="mt-2"><span className="text-gray-400">{"// Amazon price element"}</span></div>
                    <div><span className="text-yellow-300">//</span><span className="text-blue-300">span</span>[<span className="text-green-300">@data-csa-c-item-id='amzn1.asin.B0DGHYDZR9'</span>]<span className="text-purple-300">/descendant::</span><span className="text-blue-300">span</span>[<span className="text-green-300">@class='a-price-whole'</span>]</div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">🔍 child vs descendant</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-purple-800 mb-1">child::</h5>
                      <p className="text-purple-700">Only direct children (one level down)</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-800 mb-1">descendant::</h5>
                      <p className="text-purple-700">All levels down (children, grandchildren, etc.)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Example */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Combined Axes Example</h3>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">Complex Navigation</h4>
                  <p className="text-orange-800 text-sm">
                    Combining descendant and child axes for precise element targeting
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-gray-400">{"// Navigate to nested elements using combined axes"}</span><br/>
                  <span className="text-yellow-300">//</span><span className="text-blue-300">div</span>[<span className="text-green-300">@id='22d485af-325e-4680-a97f-289359347ee4'</span>]<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">/descendant::</span><span className="text-blue-300">h2</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">/child::</span><span className="text-blue-300">span</span>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">💡 Best Practices</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Use child:: when you know the exact parent-child relationship</li>
                    <li>• Use descendant:: when the element could be at any level below</li>
                    <li>• Combine with position() for specific element selection</li>
                    <li>• Use contains() and starts-with() with dynamic attributes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz 
          title="Day 21 Knowledge Check"
          questions={[
            {
              id: 1,
              question: "What is the difference between starts-with() with text() and starts-with() with attribute?",
              options: ["No difference", "Text version works with element text, attribute version works with attribute values", "Attribute version is faster", "Text version is deprecated"],
              correctAnswer: 1,
              explanation: "starts-with() with text() works on the visible text content of elements, while starts-with() with attribute works on attribute values like id, name, class, etc."
            },
            {
              id: 2,
              question: "When should you use contains() with attribute instead of starts-with()?",
              options: ["When attribute starts with specific value", "When any part of attribute contains specific value", "When attribute is empty", "When attribute is dynamic"],
              correctAnswer: 1,
              explanation: "Use contains() when you need to match any part of the attribute value, not just the beginning. It's useful when the constant part is in the middle or end of the attribute."
            },
            {
              id: 3,
              question: "What is the difference between child:: and descendant:: axes?",
              options: ["No difference", "child:: finds direct children only, descendant:: finds all levels down", "descendant:: is faster", "child:: is deprecated"],
              correctAnswer: 1,
              explanation: "child:: axis finds only direct children (one level down), while descendant:: axis searches all child tags, grandchild tags, and great-grandchild tags (entire subtree)."
            },
            {
              id: 4,
              question: "Which XPath would find the first input element that is a direct child of a div with class 'form-group'?",
              options: ["//div[@class='form-group']/input[1]", "//div[@class='form-group']/child::input[position()=1]", "//div[@class='form-group']/descendant::input[1]", "All of the above"],
              correctAnswer: 3,
              explanation: "All three XPath expressions will find the first input element that is a direct child of the specified div. The child:: axis is explicit, while /input[1] is implicit child navigation."
            },
            {
              id: 5,
              question: "What does position()=1 do in XPath?",
              options: ["Finds elements at position 1 in DOM", "Finds the first matching element in the result set", "Finds elements with position attribute", "Finds elements at coordinate 1"],
              correctAnswer: 1,
              explanation: "position()=1 selects the first element from the matching result set. It's useful when multiple elements match your criteria but you only want the first one."
            }
          ]}
        />
      </div>
    </DayLayout>
  );
}