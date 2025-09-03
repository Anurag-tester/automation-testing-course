'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WaitsChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDelayedElement, setShowDelayedElement] = useState(false);
  const [showVisibilityElement, setShowVisibilityElement] = useState(false);
  const [isElementClickable, setIsElementClickable] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const triggerDelayedElement = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowDelayedElement(true);
    }, 3000);
  };

  const triggerVisibilityElement = () => {
    setTimeout(() => {
      setShowVisibilityElement(true);
    }, 2000);
  };

  const triggerClickableElement = () => {
    setTimeout(() => {
      setIsElementClickable(true);
    }, 4000);
  };

  const solutionCode = `// Waits Challenge - WebDriverWait Operations
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class WaitsChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            driver.get("http://localhost:3000/practice/waits-aui6");
            
            // Test Case 1: Wait for element to be present
            WebElement triggerBtn = driver.findElement(By.id("trigger-delayed"));
            triggerBtn.click();
            
            WebElement delayedElement = wait.until(
                ExpectedConditions.presenceOfElementLocated(By.id("delayed-element"))
            );
            System.out.println("✓ Delayed element appeared: " + delayedElement.getText());
            
            // Test Case 2: Wait for element to be visible
            WebElement visibilityBtn = driver.findElement(By.cssSelector("[data-testid='trigger-visibility']"));
            visibilityBtn.click();
            
            WebElement visibleElement = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@data-testid='visibility-element']"))
            );
            System.out.println("✓ Element became visible: " + visibleElement.isDisplayed());
            
            // Test Case 3: Wait for element to be clickable
            WebElement clickableBtn = driver.findElement(By.cssSelector("[data-action='trigger-clickable']"));
            clickableBtn.click();
            
            WebElement clickableElement = wait.until(
                ExpectedConditions.elementToBeClickable(By.id("clickable-element"))
            );
            clickableElement.click();
            System.out.println("✓ Element became clickable and was clicked");
            
            // Test Case 4: Wait for text to be present
            WebElement textElement = wait.until(
                ExpectedConditions.textToBePresentInElementLocated(
                    By.cssSelector("[data-text-container='true']"), 
                    "Loading complete!"
                )
            );
            System.out.println("✓ Expected text appeared");
            
            // Test Case 5: Wait for element to disappear
            WebElement loadingSpinner = driver.findElement(By.className("loading-spinner"));
            wait.until(ExpectedConditions.invisibilityOf(loadingSpinner));
            System.out.println("✓ Loading spinner disappeared");
            
            // Test Case 6: Wait with custom condition
            wait.until(driver -> {
                WebElement element = driver.findElement(By.id("custom-wait-element"));
                return element.getAttribute("data-ready").equals("true");
            });
            System.out.println("✓ Custom wait condition met");
            
            System.out.println("\\n🎉 Waits Challenge Completed!");
            System.out.println("📋 All wait conditions tested successfully");
            
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
      title="Waits - AUI 6 Challenge"
      description="Master WebDriverWait and ExpectedConditions for dynamic content."
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
                    <h1 className="text-xl font-bold text-gray-900">WebDriverWait & Conditions</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master WebDriverWait and ExpectedConditions for handling dynamic content.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Wait for element to be present',
                  'Wait for element to be visible',
                  'Wait for element to be clickable',
                  'Wait for text to be present',
                  'Wait for element to disappear',
                  'Custom wait conditions'
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
                  className="flex items-center gap-2 px-3 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors text-sm"
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
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Waits</h2>
                
                <div className="space-y-6">
                  {/* Delayed Element */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">1. Wait for Element Presence</label>
                    <div className="space-y-3">
                      <button
                        id="trigger-delayed"
                        onClick={triggerDelayedElement}
                        disabled={isLoading || showDelayedElement}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
                            Loading...
                          </>
                        ) : (
                          'Trigger Delayed Element'
                        )}
                      </button>
                      {showDelayedElement && (
                        <div id="delayed-element" className="p-3 bg-green-100 border border-green-300 rounded-lg">
                          ✓ Delayed element appeared after 3 seconds!
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Visibility Element */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">2. Wait for Element Visibility</label>
                    <div className="space-y-3">
                      <button
                        data-testid="trigger-visibility"
                        onClick={triggerVisibilityElement}
                        disabled={showVisibilityElement}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
                      >
                        Show Hidden Element
                      </button>
                      <div
                        data-testid="visibility-element"
                        className={`p-3 bg-purple-100 border border-purple-300 rounded-lg transition-opacity duration-500 ${
                          showVisibilityElement ? 'opacity-100' : 'opacity-0 invisible'
                        }`}
                      >
                        ✓ This element became visible!
                      </div>
                    </div>
                  </div>

                  {/* Clickable Element */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">3. Wait for Element to be Clickable</label>
                    <div className="space-y-3">
                      <button
                        data-action="trigger-clickable"
                        onClick={triggerClickableElement}
                        disabled={isElementClickable}
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50"
                      >
                        Enable Clickable Element
                      </button>
                      <button
                        id="clickable-element"
                        disabled={!isElementClickable}
                        onClick={() => alert('Element clicked successfully!')}
                        className={`px-4 py-2 rounded-lg transition-all ${
                          isElementClickable
                            ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {isElementClickable ? 'Click Me!' : 'Wait... (4 seconds)'}
                      </button>
                    </div>
                  </div>

                  {/* Text Present */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">4. Wait for Text to Appear</label>
                    <div
                      data-text-container="true"
                      className="p-3 bg-gray-100 border border-gray-300 rounded-lg min-h-[50px] flex items-center"
                    >
                      {showDelayedElement ? 'Loading complete!' : 'Waiting for text...'}
                    </div>
                  </div>

                  {/* Loading Spinner */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">5. Wait for Element to Disappear</label>
                    <div className="flex items-center space-x-3">
                      {isLoading && (
                        <div className="loading-spinner">
                          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                        </div>
                      )}
                      <span className="text-sm text-gray-600">
                        {isLoading ? 'Loading spinner visible...' : 'No loading spinner'}
                      </span>
                    </div>
                  </div>

                  {/* Custom Wait */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">6. Custom Wait Condition</label>
                    <div
                      id="custom-wait-element"
                      data-ready={showDelayedElement ? 'true' : 'false'}
                      className="p-3 bg-yellow-100 border border-yellow-300 rounded-lg"
                    >
                      Custom element ready: {showDelayedElement ? 'true' : 'false'}
                    </div>
                  </div>
                </div>

                {/* Locator Information */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-amber-50 rounded-lg">
                      <div className="text-xs text-amber-800 space-y-1">
                        <div><code>By.id("delayed-element")</code></div>
                        <div><code>By.cssSelector("[data-testid='visibility-element']")</code></div>
                        <div><code>By.id("clickable-element")</code></div>
                        <div><code>By.cssSelector("[data-text-container='true']")</code></div>
                        <div><code>By.className("loading-spinner")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-amber-200">
                        <p className="text-xs text-amber-700 font-medium">💡 Use WebDriverWait with ExpectedConditions!</p>
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
          <Link href="/practice/slider-challenge" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors">
            Back to Practice →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}