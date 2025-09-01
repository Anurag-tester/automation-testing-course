'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function FrameChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [lastAction, setLastAction] = useState('');
  const [frameInput, setFrameInput] = useState('');
  const [nestedInput, setNestedInput] = useState('');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const solutionCode = `// Frame Challenge - LetCode Style Solution
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class FrameChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            driver.get("http://localhost:3000/practice/frame-innerhtml");
            
            // Test Case 1: Enter text in first frame using complex locator
            WebElement firstFrame = wait.until(ExpectedConditions.presenceOfElementLocated(
                By.xpath("//div[@class='frame-container']//iframe[@data-frame-id='first-frame'][@name='frame1']")));
            driver.switchTo().frame(firstFrame);
            
            WebElement firstFrameInput = driver.findElement(
                By.cssSelector("input[data-testid='frame-input'][placeholder*='first frame']"));
            firstFrameInput.clear();
            firstFrameInput.sendKeys("I am in first frame");
            System.out.println("✓ Entered text in first frame");
            
            // Switch back to main content
            driver.switchTo().defaultContent();
            
            // Test Case 2: Enter text in second frame using frame index
            driver.switchTo().frame(1); // Second frame by index
            
            WebElement secondFrameInput = driver.findElement(
                By.xpath("//input[@class='frame-input-field' and @data-frame='second']"));
            secondFrameInput.clear();
            secondFrameInput.sendKeys("I am in second frame");
            System.out.println("✓ Entered text in second frame using index");
            
            // Switch back to main content
            driver.switchTo().defaultContent();
            
            // Test Case 3: Handle nested frames - switch to parent then child
            WebElement parentFrame = driver.findElement(
                By.cssSelector(".nested-frame-section iframe[data-nested='parent'][name='parentFrame']"));
            driver.switchTo().frame(parentFrame);
            System.out.println("✓ Switched to parent frame");
            
            // Now switch to child frame within parent
            WebElement childFrame = driver.findElement(
                By.xpath("//iframe[@data-nested='child' and @data-level='2']"));
            driver.switchTo().frame(childFrame);
            
            WebElement nestedInput = driver.findElement(
                By.cssSelector("input[data-testid='nested-input'][data-depth='2']"));
            nestedInput.clear();
            nestedInput.sendKeys("I am in nested child frame");
            System.out.println("✓ Entered text in nested child frame");
            
            // Test Case 4: Navigate frame hierarchy - parent to child to grandchild
            driver.switchTo().defaultContent(); // Back to main
            
            // Switch to parent frame
            driver.switchTo().frame("parentFrame");
            
            // Switch to child frame
            driver.switchTo().frame(driver.findElement(
                By.xpath("//iframe[@data-nested='child']")));
            
            // Switch to grandchild frame if exists
            try {
                WebElement grandchildFrame = driver.findElement(
                    By.cssSelector("iframe[data-level='3'][data-nested='grandchild']"));
                driver.switchTo().frame(grandchildFrame);
                
                WebElement grandchildInput = driver.findElement(
                    By.xpath("//input[@data-depth='3' and @placeholder='Enter in grandchild frame']"));
                grandchildInput.sendKeys("Deep nested frame text");
                System.out.println("✓ Entered text in grandchild frame (level 3)");
            } catch (Exception e) {
                System.out.println("! Grandchild frame not found - only 2 levels deep");
            }
            
            // Test Case 5: Get frame properties and validate
            driver.switchTo().defaultContent();
            
            // Get all frames on page
            List<WebElement> allFrames = driver.findElements(By.tagName("iframe"));
            System.out.println("\\n=== Frame Analysis ===");
            System.out.println("Total frames found: " + allFrames.size());
            
            for(int i = 0; i < allFrames.size(); i++) {
                WebElement frame = allFrames.get(i);
                String frameName = frame.getAttribute("name");
                String frameId = frame.getAttribute("data-frame-id");
                String frameClass = frame.getAttribute("class");
                
                System.out.println("Frame " + (i+1) + ":");
                System.out.println("  - Name: " + (frameName != null ? frameName : "No name"));
                System.out.println("  - Data-frame-id: " + (frameId != null ? frameId : "No ID"));
                System.out.println("  - Class: " + (frameClass != null ? frameClass : "No class"));
            }
            
            // Test Case 6: Switch between frames and validate content
            driver.switchTo().frame(0); // First frame
            String firstFrameContent = driver.findElement(
                By.cssSelector("input[data-testid='frame-input']")).getAttribute("value");
            driver.switchTo().defaultContent();
            
            driver.switchTo().frame(1); // Second frame  
            String secondFrameContent = driver.findElement(
                By.xpath("//input[@data-frame='second']")).getAttribute("value");
            driver.switchTo().defaultContent();
            
            System.out.println("\\n=== Frame Content Validation ===");
            System.out.println("First frame content: " + firstFrameContent);
            System.out.println("Second frame content: " + secondFrameContent);
            
            System.out.println("\\n🎉 Frame Challenge Completed Successfully!");
            System.out.println("📋 All frame operations tested: switchTo, defaultContent, nested frames");
            
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
      title="Frame - Inner HTML Challenge"
      description="Master frame switching with nested iframes, complex locators, and frame hierarchy navigation."
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
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        Intermediate
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="w-3 h-3" />
                        25-30 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Frame Navigation Mastery</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master iframe switching, nested frame navigation, and complex frame hierarchy handling.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Enter text in first frame',
                  'Enter text in second frame using index',
                  'Handle nested frames (parent → child)',
                  'Navigate frame hierarchy (3 levels deep)',
                  'Get frame properties and validate',
                  'Switch between frames and validate content'
                ].map((testCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                  className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
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

          {/* Right Side - Interactive Practice Frames */}
          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🖼️ Practice Frames</h2>
                
                <div className="space-y-6">
                  {/* Action Status */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Last Action:</div>
                    <div className="text-sm font-medium text-blue-600">{lastAction || 'No action performed'}</div>
                  </div>

                  {/* First Frame */}
                  <div className="frame-container">
                    <label className="block text-sm font-medium text-gray-700 mb-2">1. Enter text in first frame</label>
                    <div className="border-2 border-blue-200 rounded-lg p-2">
                      <iframe
                        data-frame-id="first-frame"
                        name="frame1"
                        className="frame-element first-frame w-full h-20 border-0"
                        srcDoc={`
                          <html>
                            <body style="margin:0; padding:10px; font-family:Arial;">
                              <input 
                                type="text" 
                                data-testid="frame-input"
                                placeholder="Enter text in first frame"
                                style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;"
                                onchange="parent.postMessage({frame:'first', value:this.value}, '*')"
                              />
                            </body>
                          </html>
                        `}
                      />
                    </div>
                  </div>

                  {/* Second Frame */}
                  <div className="frame-section-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">2. Enter text in second frame</label>
                    <div className="border-2 border-green-200 rounded-lg p-2">
                      <iframe
                        data-frame-id="second-frame"
                        name="frame2"
                        className="frame-element second-frame w-full h-20 border-0"
                        srcDoc={`
                          <html>
                            <body style="margin:0; padding:10px; font-family:Arial;">
                              <input 
                                type="text" 
                                class="frame-input-field"
                                data-frame="second"
                                placeholder="Enter text in second frame"
                                style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;"
                                onchange="parent.postMessage({frame:'second', value:this.value}, '*')"
                              />
                            </body>
                          </html>
                        `}
                      />
                    </div>
                  </div>

                  {/* Nested Frames */}
                  <div className="nested-frame-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">3. Nested frames (parent → child)</label>
                    <div className="border-2 border-purple-200 rounded-lg p-2">
                      <iframe
                        data-nested="parent"
                        name="parentFrame"
                        className="nested-frame parent-frame w-full h-32 border-0"
                        srcDoc={`
                          <html>
                            <body style="margin:0; padding:10px; font-family:Arial; background:#f8f9fa;">
                              <div style="margin-bottom:10px; font-size:12px; color:#666;">Parent Frame</div>
                              <iframe 
                                data-nested="child" 
                                data-level="2"
                                style="width:100%; height:60px; border:1px solid #ddd;"
                                srcdoc="
                                  <html>
                                    <body style='margin:0; padding:8px; font-family:Arial;'>
                                      <input 
                                        type='text' 
                                        data-testid='nested-input'
                                        data-depth='2'
                                        placeholder='Enter in nested child frame'
                                        style='width:100%; padding:6px; border:1px solid #ccc; border-radius:3px; font-size:12px;'
                                        onchange='parent.parent.postMessage({frame:\"nested\", value:this.value}, \"*\")'
                                      />
                                    </body>
                                  </html>
                                "
                              ></iframe>
                            </body>
                          </html>
                        `}
                      />
                    </div>
                  </div>
                </div>

                {/* Locator Information */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-red-50 rounded-lg">
                      <div className="text-xs text-red-800 space-y-1">
                        <div><code>By.xpath("//div[@class='frame-container']//iframe[@data-frame-id='first-frame'][@name='frame1']")</code></div>
                        <div><code>By.cssSelector("input[data-testid='frame-input'][placeholder*='first frame']")</code></div>
                        <div><code>By.xpath("//input[@class='frame-input-field' and @data-frame='second']")</code></div>
                        <div><code>By.cssSelector(".nested-frame-section iframe[data-nested='parent'][name='parentFrame']")</code></div>
                        <div><code>By.xpath("//iframe[@data-nested='child' and @data-level='2']")</code></div>
                        <div><code>By.cssSelector("input[data-testid='nested-input'][data-depth='2']")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-red-200">
                        <p className="text-xs text-red-700 font-medium">💡 Complex frame locators with nested iframe handling!</p>
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
          <Link href="/practice/alert-dialog" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice/radio-toggle" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}