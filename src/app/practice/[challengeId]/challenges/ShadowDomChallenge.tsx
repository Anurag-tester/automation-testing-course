'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Target, Clock, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function ShadowDomChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [shadowText, setShadowText] = useState('');
  const [nestedShadowText, setNestedShadowText] = useState('');
  const shadowHostRef = useRef<HTMLDivElement>(null);
  const nestedShadowHostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create shadow DOM elements
    if (shadowHostRef.current && !shadowHostRef.current.shadowRoot) {
      const shadowRoot = shadowHostRef.current.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
        <style>
          .shadow-content { 
            padding: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            border-radius: 8px; 
            margin: 10px 0;
          }
          .shadow-input { 
            padding: 8px; 
            border: none; 
            border-radius: 4px; 
            margin: 10px 0; 
            width: 200px;
          }
          .shadow-button { 
            padding: 8px 16px; 
            background: #4CAF50; 
            color: white; 
            border: none; 
            border-radius: 4px; 
            cursor: pointer; 
            margin: 5px;
          }
          .shadow-button:hover { background: #45a049; }
        </style>
        <div class="shadow-content">
          <h3>Shadow DOM Content</h3>
          <p id="shadow-text">This text is inside Shadow DOM</p>
          <input type="text" class="shadow-input" id="shadow-input" placeholder="Enter text in shadow DOM">
          <button class="shadow-button" id="shadow-button">Click Me (Shadow)</button>
          <div id="shadow-output">Output will appear here</div>
        </div>
      `;

      // Add event listeners to shadow DOM elements
      const shadowInput = shadowRoot.getElementById('shadow-input');
      const shadowButton = shadowRoot.getElementById('shadow-button');
      const shadowOutput = shadowRoot.getElementById('shadow-output');

      shadowInput?.addEventListener('input', (e) => {
        setShadowText((e.target as HTMLInputElement).value);
      });

      shadowButton?.addEventListener('click', () => {
        if (shadowOutput) {
          shadowOutput.textContent = `You clicked the shadow button! Input: ${shadowText}`;
        }
      });
    }

    // Create nested shadow DOM
    if (nestedShadowHostRef.current && !nestedShadowHostRef.current.shadowRoot) {
      const outerShadowRoot = nestedShadowHostRef.current.attachShadow({ mode: 'open' });
      outerShadowRoot.innerHTML = `
        <style>
          .outer-shadow { 
            padding: 15px; 
            background: #f0f0f0; 
            border: 2px solid #ddd; 
            border-radius: 8px; 
          }
          .inner-shadow-host { 
            margin: 10px 0; 
            padding: 10px; 
            background: #e0e0e0; 
            border-radius: 4px; 
          }
        </style>
        <div class="outer-shadow">
          <h4>Outer Shadow DOM</h4>
          <p>This is the outer shadow DOM layer</p>
          <div class="inner-shadow-host" id="inner-shadow-host">
            <!-- Inner shadow will be attached here -->
          </div>
        </div>
      `;

      const innerHost = outerShadowRoot.getElementById('inner-shadow-host');
      if (innerHost) {
        const innerShadowRoot = innerHost.attachShadow({ mode: 'open' });
        innerShadowRoot.innerHTML = `
          <style>
            .inner-content { 
              padding: 10px; 
              background: linear-gradient(45deg, #ff6b6b, #feca57); 
              color: white; 
              border-radius: 4px; 
            }
            .nested-input { 
              padding: 5px; 
              border: none; 
              border-radius: 3px; 
              margin: 5px 0; 
            }
          </style>
          <div class="inner-content">
            <h5>Nested Shadow DOM</h5>
            <input type="text" class="nested-input" id="nested-input" placeholder="Nested shadow input">
            <p id="nested-output">Nested shadow content</p>
          </div>
        `;

        const nestedInput = innerShadowRoot.getElementById('nested-input');
        const nestedOutput = innerShadowRoot.getElementById('nested-output');

        nestedInput?.addEventListener('input', (e) => {
          const value = (e.target as HTMLInputElement).value;
          setNestedShadowText(value);
          if (nestedOutput) {
            nestedOutput.textContent = `Nested input: ${value}`;
          }
        });
      }
    }
  }, [shadowText]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const solutionCode = `// Shadow DOM Challenge - Shadow Root Navigation
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.SearchContext;

public class ShadowDomChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        try {
            driver.get("http://localhost:3000/practice/shadow-dom");
            
            // Test Case 1: Access simple shadow DOM
            WebElement shadowHost = driver.findElement(By.id("shadow-host"));
            SearchContext shadowRoot = shadowHost.getShadowRoot();
            
            // Find elements inside shadow DOM (use CSS selectors only)
            WebElement shadowText = shadowRoot.findElement(By.cssSelector("#shadow-text"));
            System.out.println("Shadow text: " + shadowText.getText());
            
            // Test Case 2: Interact with shadow DOM input
            WebElement shadowInput = shadowRoot.findElement(By.cssSelector("#shadow-input"));
            shadowInput.sendKeys("Hello Shadow DOM!");
            
            System.out.println("✓ Text entered in shadow DOM input");
            
            // Test Case 3: Click shadow DOM button
            WebElement shadowButton = shadowRoot.findElement(By.cssSelector("#shadow-button"));
            shadowButton.click();
            
            System.out.println("✓ Shadow DOM button clicked");
            
            // Test Case 4: Verify shadow DOM output
            WebElement shadowOutput = shadowRoot.findElement(By.cssSelector("#shadow-output"));
            System.out.println("Shadow output: " + shadowOutput.getText());
            
            // Test Case 5: Handle nested shadow DOM
            WebElement nestedShadowHost = driver.findElement(By.id("nested-shadow-host"));
            SearchContext outerShadowRoot = nestedShadowHost.getShadowRoot();
            
            // Navigate to inner shadow host
            WebElement innerShadowHost = outerShadowRoot.findElement(By.cssSelector("#inner-shadow-host"));
            SearchContext innerShadowRoot = innerShadowHost.getShadowRoot();
            
            // Interact with nested shadow DOM
            WebElement nestedInput = innerShadowRoot.findElement(By.cssSelector("#nested-input"));
            nestedInput.sendKeys("Nested Shadow Text");
            
            System.out.println("✓ Nested shadow DOM input filled");
            
            // Test Case 6: Verify nested shadow DOM content
            WebElement nestedOutput = innerShadowRoot.findElement(By.cssSelector("#nested-output"));
            System.out.println("Nested output: " + nestedOutput.getText());
            
            // Test Case 7: Multiple shadow DOM elements
            WebElement multiShadowHost = driver.findElement(By.id("multi-shadow-host"));
            SearchContext multiShadowRoot = multiShadowHost.getShadowRoot();
            
            // Find all shadow buttons
            var shadowButtons = multiShadowRoot.findElements(By.cssSelector(".shadow-button"));
            System.out.println("Found " + shadowButtons.size() + " shadow buttons");
            
            // Click each shadow button
            for (int i = 0; i < shadowButtons.size(); i++) {
                shadowButtons.get(i).click();
                System.out.println("✓ Clicked shadow button " + (i + 1));
            }
            
            System.out.println("\\n🎉 Shadow DOM Challenge Completed!");
            System.out.println("📋 Key Points:");
            System.out.println("- Use getShadowRoot() to access shadow DOM");
            System.out.println("- Only CSS selectors work in shadow DOM");
            System.out.println("- XPath doesn't work inside shadow DOM");
            System.out.println("- Chain shadow root calls for nested shadow DOM");
            
        } catch (Exception e) {
            System.out.println("❌ Error: " + e.getMessage());
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}`;

  return (
    <DayLayout
      dayNumber={0}
      title="Shadow - DOM Challenge"
      description="Master Shadow DOM interactions with getShadowRoot() method."
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/practice" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Practice Problems
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <section className="mb-8">
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-slate-700 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                        Expert
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="w-3 h-3" />
                        35-40 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Shadow DOM Navigation</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master Shadow DOM interactions using getShadowRoot() and CSS selectors.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Access simple shadow DOM',
                  'Interact with shadow DOM inputs',
                  'Click shadow DOM buttons',
                  'Verify shadow DOM content',
                  'Handle nested shadow DOM',
                  'Navigate multiple shadow levels',
                  'Find multiple shadow elements'
                ].map((testCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-sm">{testCase}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Selenium Solution</h2>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                >
                  {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showSolution ? 'Hide' : 'Show'} Solution
                </button>
              </div>

              {showSolution && (
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white text-sm font-medium">Java + Selenium WebDriver</span>
                    <button 
                      onClick={() => copyToClipboard(solutionCode)}
                      className="flex items-center gap-2 px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs hover:bg-gray-600 transition-colors"
                    >
                      {copySuccess ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copySuccess ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="text-green-400 text-xs leading-relaxed overflow-x-auto">
                    <code>{solutionCode}</code>
                  </pre>
                </div>
              )}
            </section>
          </div>

          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Shadow DOM</h2>
                
                <div className="space-y-6">
                  {/* Simple Shadow DOM */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Simple Shadow DOM</label>
                    <div 
                      id="shadow-host" 
                      ref={shadowHostRef}
                      className="border border-gray-300 rounded-lg p-2"
                    >
                      <p className="text-gray-500 text-sm">Shadow DOM will be attached here</p>
                    </div>
                  </div>

                  {/* Nested Shadow DOM */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nested Shadow DOM</label>
                    <div 
                      id="nested-shadow-host" 
                      ref={nestedShadowHostRef}
                      className="border border-gray-300 rounded-lg p-2"
                    >
                      <p className="text-gray-500 text-sm">Nested Shadow DOM will be attached here</p>
                    </div>
                  </div>

                  {/* Multiple Shadow Elements */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Multiple Shadow Elements</label>
                    <div id="multi-shadow-host" className="border border-gray-300 rounded-lg p-4">
                      <div className="space-y-2">
                        <button className="shadow-button px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                          Regular Button 1
                        </button>
                        <button className="shadow-button px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                          Regular Button 2
                        </button>
                        <button className="shadow-button px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                          Regular Button 3
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Shadow DOM Info */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-medium text-blue-900 mb-2">🔒 Shadow DOM Concepts</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• <strong>Encapsulation:</strong> Styles and DOM are isolated</li>
                      <li>• <strong>CSS Only:</strong> XPath doesn't work in shadow DOM</li>
                      <li>• <strong>getShadowRoot():</strong> Access shadow DOM content</li>
                      <li>• <strong>Nested:</strong> Chain shadow root calls for nested DOM</li>
                    </ul>
                  </div>

                  {/* Current Values Display */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Current Values</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Shadow Input: <span className="font-mono">{shadowText || 'Empty'}</span></div>
                      <div>Nested Input: <span className="font-mono">{nestedShadowText || 'Empty'}</span></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-800 space-y-1">
                        <div><code>By.id("shadow-host").getShadowRoot()</code></div>
                        <div><code>shadowRoot.findElement(By.cssSelector("#shadow-input"))</code></div>
                        <div><code>By.id("nested-shadow-host").getShadowRoot()</code></div>
                        <div><code>outerShadow.findElement(By.cssSelector("#inner-shadow-host"))</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs text-gray-700 font-medium">💡 Only CSS selectors work in Shadow DOM!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link href="/practice/file-management" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors">
            Back to Practice →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}