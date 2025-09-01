'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Target, Clock, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function MultiSelectChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleItemSelect = (item: string) => {
    setSelectedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const solutionCode = `// Multi-Select Challenge - Selectable Elements
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.Keys;
import java.util.List;

public class MultiSelectChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        Actions actions = new Actions(driver);
        
        try {
            driver.get("http://localhost:3000/practice/multiselect-aui4");
            
            // Test Case 1: Single selection
            WebElement firstItem = driver.findElement(By.cssSelector("[data-testid='selectable-item-1']"));
            firstItem.click();
            System.out.println("✓ Single item selected");
            
            // Test Case 2: Multi-selection with Ctrl+Click
            List<WebElement> items = driver.findElements(By.className("selectable-item"));
            
            // Select multiple items using Ctrl+Click
            actions.keyDown(Keys.CONTROL)
                   .click(items.get(2))
                   .click(items.get(4))
                   .keyUp(Keys.CONTROL)
                   .perform();
            System.out.println("✓ Multiple items selected with Ctrl+Click");
            
            // Test Case 3: Range selection with Shift+Click
            items.get(0).click(); // Start selection
            actions.keyDown(Keys.SHIFT)
                   .click(items.get(3))
                   .keyUp(Keys.SHIFT)
                   .perform();
            System.out.println("✓ Range selection with Shift+Click");
            
            // Test Case 4: Verify selected items
            List<WebElement> selectedItems = driver.findElements(By.cssSelector(".selectable-item.selected"));
            System.out.println("Selected items count: " + selectedItems.size());
            
            // Test Case 5: Deselect items
            for (WebElement selected : selectedItems) {
                actions.keyDown(Keys.CONTROL)
                       .click(selected)
                       .keyUp(Keys.CONTROL)
                       .perform();
            }
            System.out.println("✓ All items deselected");
            
            System.out.println("\\n🎉 Multi-Select Challenge Completed!");
            
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
      title="Multi-Select - AUI 4 Challenge"
      description="Master multi-selection operations with Ctrl+Click and Shift+Click."
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
              <div className="bg-gradient-to-r from-lime-50 to-green-50 rounded-xl p-6 border border-lime-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-lime-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-lime-100 text-lime-800 text-xs font-medium rounded-full">
                        Advanced
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="w-3 h-3" />
                        25-30 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Multi-Selection Operations</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master multi-selection with Ctrl+Click, Shift+Click, and range selections.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Single item selection',
                  'Multi-selection with Ctrl+Click',
                  'Range selection with Shift+Click',
                  'Verify selected items count',
                  'Deselect all items'
                ].map((testCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                  className="flex items-center gap-2 px-3 py-2 bg-lime-100 text-lime-700 rounded-lg hover:bg-lime-200 transition-colors text-sm"
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
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Multi-Selection</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Selectable Items</label>
                    <div className="grid grid-cols-2 gap-2">
                      {Array.from({ length: 8 }, (_, i) => `Item ${i + 1}`).map((item) => (
                        <div
                          key={item}
                          className={`selectable-item p-3 border rounded-lg cursor-pointer transition-all text-center ${
                            selectedItems.includes(item)
                              ? 'selected bg-lime-100 border-lime-500 text-lime-700'
                              : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                          }`}
                          onClick={() => handleItemSelect(item)}
                          data-testid={`selectable-${item.toLowerCase().replace(' ', '-')}`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      Selected: {selectedItems.length > 0 ? selectedItems.join(', ') : 'None'}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-medium text-blue-900 mb-2">💡 Selection Tips</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• <strong>Single:</strong> Click any item</li>
                      <li>• <strong>Multi:</strong> Ctrl+Click multiple items</li>
                      <li>• <strong>Range:</strong> Click first, then Shift+Click last</li>
                      <li>• <strong>Deselect:</strong> Ctrl+Click selected items</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-lime-100 text-lime-700 rounded-lg hover:bg-lime-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <div className="text-xs text-lime-800 space-y-1">
                        <div><code>By.className("selectable-item")</code></div>
                        <div><code>By.cssSelector(".selectable-item.selected")</code></div>
                        <div><code>By.cssSelector("[data-testid='selectable-item-1']")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-lime-200">
                        <p className="text-xs text-lime-700 font-medium">💡 Use Actions class with Keys.CONTROL and Keys.SHIFT!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link href="/practice/sort-aui3" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice/slider-aui5" className="text-gray-600 hover:text-gray-800 transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}