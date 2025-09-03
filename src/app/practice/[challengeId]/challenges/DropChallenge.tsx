'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function DropChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [droppedItems, setDroppedItems] = useState<string[]>([]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDragStart = (e: React.DragEvent, item: string) => {
    setDraggedItem(item);
    e.dataTransfer.setData('text/plain', item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const item = e.dataTransfer.getData('text/plain');
    if (item && !droppedItems.includes(item)) {
      setDroppedItems([...droppedItems, item]);
    }
    setDraggedItem(null);
  };

  const solutionCode = `// Drop Challenge - Drag and Drop Solution
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class DropChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        Actions actions = new Actions(driver);
        
        try {
            driver.get("http://localhost:3000/practice/drag-drop");
            
            // Test Case 1: Simple drag and drop
            WebElement source = wait.until(ExpectedConditions.elementToBeClickable(
                By.id("draggable")));
            WebElement target = driver.findElement(By.id("droppable"));
            
            actions.dragAndDrop(source, target).perform();
            System.out.println("✓ Performed simple drag and drop");
            
            // Test Case 2: Multiple items drop
            WebElement itemA = driver.findElement(By.cssSelector("[data-testid='draggable-item-a']"));
            WebElement itemB = driver.findElement(By.cssSelector("[data-testid='draggable-item-b']"));
            WebElement multiDropZone = driver.findElement(By.xpath("//div[@data-testid='multi-drop-zone']"));
            
            actions.dragAndDrop(itemA, multiDropZone).perform();
            actions.dragAndDrop(itemB, multiDropZone).perform();
            System.out.println("✓ Dropped multiple items to collection zone");
            
            // Test Case 3: Conditional drop validation
            WebElement redItem = driver.findElement(By.cssSelector("[data-testid='red-draggable']"));
            WebElement redZone = driver.findElement(By.xpath("//div[@data-testid='red-drop-zone']"));
            WebElement blueItem = driver.findElement(By.cssSelector("[data-testid='blue-draggable']"));
            WebElement blueZone = driver.findElement(By.xpath("//div[@data-testid='blue-drop-zone']"));
            
            actions.dragAndDrop(redItem, redZone).perform();
            actions.dragAndDrop(blueItem, blueZone).perform();
            System.out.println("✓ Performed conditional drops with validation");
            
            // Test Case 4: Verify drop results
            WebElement dropZone = driver.findElement(By.id("droppable"));
            String dropText = dropZone.getText();
            System.out.println("Drop zone text: " + dropText);
            
            System.out.println("\\n🎉 Drop Challenge Completed Successfully!");
            System.out.println("📋 All drop operations tested: simple, multiple, conditional");
            
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
      title="Drop - AUI 2 Challenge"
      description="Master drag and drop operations with drop zones and validation."
    >
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/practice" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Practice Problems
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Challenge Description */}
          <div>
            {/* Challenge Header */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                        Advanced
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="w-3 h-3" />
                        15-20 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Drag & Drop Operations</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Practice drag and drop operations with drop zones and validation.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Simple drag and drop operation',
                  'Multiple items drop',
                  'Conditional drop validation',
                  'Verify drop zone acceptance'
                ].map((testCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-sm">{testCase}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Solution */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Selenium Solution</h2>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
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

          {/* Right Side - Interactive Practice */}
          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Drop Operations</h2>
                
                <div className="space-y-6">
                  {/* Simple Drop */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">1. Simple Drop</label>
                    <div className="flex gap-8 items-center">
                      <div
                        id="draggable"
                        className="w-24 h-24 bg-blue-500 text-white rounded-lg flex items-center justify-center cursor-move font-bold"
                        draggable
                        onDragStart={(e) => handleDragStart(e, 'simple-item')}
                        data-testid="drag-source"
                      >
                        Drag Me
                      </div>
                      <div
                        id="droppable"
                        className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        data-testid="drop-target"
                      >
                        {droppedItems.includes('simple-item') ? (
                          <span className="text-green-600 font-medium">✓ Dropped!</span>
                        ) : (
                          <span className="text-gray-500">Drop Here</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Multiple Items Drop */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">2. Multiple Items Drop</label>
                    <div className="flex gap-8">
                      <div className="space-y-4">
                        {['Item A', 'Item B', 'Item C'].map((item) => (
                          <div
                            key={item}
                            className="w-20 h-20 bg-green-500 text-white rounded-lg flex items-center justify-center cursor-move text-sm font-bold"
                            draggable
                            onDragStart={(e) => handleDragStart(e, item)}
                            data-testid={`draggable-${item.toLowerCase().replace(' ', '-')}`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      <div
                        className="w-48 h-48 border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        data-testid="multi-drop-zone"
                      >
                        <div className="text-center text-gray-500 mb-2">Collection Zone</div>
                        <div className="space-y-2">
                          {droppedItems.filter(item => ['Item A', 'Item B', 'Item C'].includes(item)).map((item) => (
                            <div key={item} className="bg-green-100 p-2 rounded text-sm" data-testid="dropped-item">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conditional Drop */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">3. Conditional Drop</label>
                    <div className="flex gap-8">
                      <div className="space-y-4">
                        <div
                          className="w-20 h-20 bg-red-500 text-white rounded-lg flex items-center justify-center cursor-move text-sm font-bold"
                          draggable
                          onDragStart={(e) => handleDragStart(e, 'red-item')}
                          data-testid="red-draggable"
                        >
                          Red
                        </div>
                        <div
                          className="w-20 h-20 bg-blue-500 text-white rounded-lg flex items-center justify-center cursor-move text-sm font-bold"
                          draggable
                          onDragStart={(e) => handleDragStart(e, 'blue-item')}
                          data-testid="blue-draggable"
                        >
                          Blue
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div
                          className="w-32 h-32 border-2 border-red-300 rounded-lg flex items-center justify-center bg-red-50"
                          onDragOver={handleDragOver}
                          onDrop={(e) => {
                            e.preventDefault();
                            const item = e.dataTransfer.getData('text/plain');
                            if (item === 'red-item' && !droppedItems.includes('red-in-red')) {
                              setDroppedItems([...droppedItems, 'red-in-red']);
                            }
                          }}
                          data-testid="red-drop-zone"
                        >
                          {droppedItems.includes('red-in-red') ? (
                            <span className="text-red-600 font-medium">Red Item</span>
                          ) : (
                            <span className="text-red-500">Red Zone</span>
                          )}
                        </div>
                        <div
                          className="w-32 h-32 border-2 border-blue-300 rounded-lg flex items-center justify-center bg-blue-50"
                          onDragOver={handleDragOver}
                          onDrop={(e) => {
                            e.preventDefault();
                            const item = e.dataTransfer.getData('text/plain');
                            if (item === 'blue-item' && !droppedItems.includes('blue-in-blue')) {
                              setDroppedItems([...droppedItems, 'blue-in-blue']);
                            }
                          }}
                          data-testid="blue-drop-zone"
                        >
                          {droppedItems.includes('blue-in-blue') ? (
                            <span className="text-blue-600 font-medium">Blue Item</span>
                          ) : (
                            <span className="text-blue-500">Blue Zone</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Locator Information */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="text-xs text-green-800 space-y-1">
                        <div><code>By.id("draggable")</code></div>
                        <div><code>By.id("droppable")</code></div>
                        <div><code>By.cssSelector("[data-testid='draggable-item-a']")</code></div>
                        <div><code>By.xpath("//div[@data-testid='multi-drop-zone']")</code></div>
                        <div><code>By.cssSelector("[data-testid='red-draggable']")</code></div>
                        <div><code>By.xpath("//div[@data-testid='red-drop-zone']")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-green-200">
                        <p className="text-xs text-green-700 font-medium">💡 Use Actions.dragAndDrop() for drop operations!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link href="/practice/drag-drop" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
            Back to Practice →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}