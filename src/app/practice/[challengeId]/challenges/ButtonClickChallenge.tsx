'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ButtonClickChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [buttonStates, setButtonStates] = useState({
    clickCount: 0,
    isHolding: false,
    lastAction: ''
  });

  const handleClick = () => {
    setButtonStates(prev => ({
      ...prev,
      clickCount: prev.clickCount + 1,
      lastAction: 'Clicked'
    }));
  };

  const handleDoubleClick = () => {
    setButtonStates(prev => ({
      ...prev,
      lastAction: 'Double Clicked'
    }));
  };

  const handleMouseDown = () => {
    setButtonStates(prev => ({
      ...prev,
      isHolding: true,
      lastAction: 'Mouse Down'
    }));
  };

  const handleMouseUp = () => {
    setButtonStates(prev => ({
      ...prev,
      isHolding: false,
      lastAction: 'Mouse Up'
    }));
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setButtonStates(prev => ({
      ...prev,
      lastAction: 'Right Clicked'
    }));
  };

  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const solutionCode = `// Button Challenge - LetCode Style Solution
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class ButtonChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        Actions actions = new Actions(driver);
        
        try {
            driver.get("http://localhost:3000/practice/button-click");
            
            // Test Case 1: Go to home and come back using XPath with data-testid
            WebElement homeButton = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath("//button[@data-testid='navigation-home']"))); 
            homeButton.click();
            System.out.println("✓ Navigated to home page using XPath locator");
            
            // Navigate back
            driver.navigate().back();
            System.out.println("✓ Navigated back using driver.navigate().back()");
            
            // Test Case 2: Find position using CSS selector with multiple attributes
            WebElement positionButton = driver.findElement(
                By.cssSelector(".btn-location[data-function='getCoordinates']"));
            Point location = positionButton.getLocation();
            System.out.println("✓ Button position - X: " + location.getX() + ", Y: " + location.getY());
            
            // Test Case 3: Get color using XPath with contains() function
            WebElement colorButton = driver.findElement(
                By.xpath("//button[contains(@class,'color-detector')]"));
            String color = colorButton.getCssValue("background-color");
            System.out.println("✓ Button color: " + color);
            
            // Test Case 4: Get height and width using CSS selector with data attribute
            WebElement sizeButton = driver.findElement(
                By.cssSelector("button[data-measurement='dimensions']"));
            Dimension size = sizeButton.getSize();
            System.out.println("✓ Button size - Width: " + size.getWidth() + ", Height: " + size.getHeight());
            
            // Test Case 5: Confirm button is disabled using XPath with aria attribute
            WebElement disabledButton = driver.findElement(
                By.xpath("//button[@aria-disabled='true']"));
            boolean isEnabled = disabledButton.isEnabled();
            System.out.println("✓ Button is enabled: " + isEnabled);
            System.out.println("✓ Button is disabled: " + !isEnabled);
            
            // Test Case 6: Click and hold using CSS selector with data-interaction
            WebElement holdButton = driver.findElement(
                By.cssSelector(".btn-interactive[data-interaction='clickAndHold']"));
            
            // Click and hold for 3 seconds
            actions.clickAndHold(holdButton).perform();
            System.out.println("✓ Button clicked and held");
            
            Thread.sleep(3000);
            
            // Release the button
            actions.release(holdButton).perform();
            System.out.println("✓ Button released");
            
            System.out.println("\n🎉 Button Challenge Completed Successfully!");
            System.out.println("📊 All button interactions tested");
            
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
      title="Button - Click Actions Challenge"
      description="Master different types of button interactions including click, double-click, right-click, and button state handling."
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
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Beginner
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="w-3 h-3" />
                        10-15 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Button Click Interactions</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Learn to handle various button interactions including enabled/disabled states, different click types, and button properties.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Go to home and come back here using driver.navigate()',
                  'Find the position of the button',
                  'What is the color of the button?',
                  'Find the height & width of the button',
                  'Confirm button is disabled',
                  'Click and hold button (using Actions)'
                ].map((testCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                  className="flex items-center gap-2 px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm"
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

          {/* Right Side - Interactive Practice Buttons */}
          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Buttons</h2>
                
                <div className="space-y-6">
                  {/* Click Counter */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{buttonStates.clickCount}</div>
                    <div className="text-sm text-gray-600">Total Clicks</div>
                    <div className="text-xs text-gray-500 mt-1">Last Action: {buttonStates.lastAction || 'None'}</div>
                  </div>

                  {/* Go to Home Button */}
                  <div className="nav-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">1. Go to home and come back here</label>
                    <button
                      id="home"
                      className="btn-navigate home-button w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      data-testid="navigation-home"
                      data-action="navigate"
                      name="homeNavButton"
                      role="button"
                      aria-label="Navigate to home page"
                      onClick={() => {
                        window.location.href = '/';
                        setButtonStates(prev => ({ ...prev, lastAction: 'Navigated to home' }));
                      }}
                    >
                      Goto Home
                    </button>
                  </div>

                  {/* Find Position Button */}
                  <div className="position-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">2. Find the position of the button</label>
                    <button
                      id="position"
                      className="btn-location coordinate-finder w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      data-testid="position-finder"
                      data-function="getCoordinates"
                      name="positionButton"
                      type="button"
                      onClick={() => {
                        const rect = document.getElementById('position')?.getBoundingClientRect();
                        setButtonStates(prev => ({ 
                          ...prev, 
                          lastAction: `Position: x=${Math.round(rect?.x || 0)}, y=${Math.round(rect?.y || 0)}` 
                        }));
                      }}
                    >
                      Find My Position
                    </button>
                  </div>

                  {/* Color Button */}
                  <div className="color-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">3. What is the color of the button?</label>
                    <button
                      id="color"
                      className="btn-style color-detector w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      data-testid="color-button"
                      data-attribute="backgroundColor"
                      name="colorButton"
                      style={{backgroundColor: '#dc2626'}}
                      onClick={() => {
                        const btn = document.getElementById('color');
                        const color = window.getComputedStyle(btn!).backgroundColor;
                        setButtonStates(prev => ({ ...prev, lastAction: `Color: ${color}` }));
                      }}
                    >
                      What is my color?
                    </button>
                  </div>

                  {/* Size Button */}
                  <div className="dimension-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">4. Find the height & width of the button</label>
                    <button
                      id="property"
                      className="btn-dimensions size-calculator w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      data-testid="size-button"
                      data-measurement="dimensions"
                      name="sizeButton"
                      title="Click to get button dimensions"
                      onClick={() => {
                        const btn = document.getElementById('property');
                        const rect = btn?.getBoundingClientRect();
                        setButtonStates(prev => ({ 
                          ...prev, 
                          lastAction: `Size: ${Math.round(rect?.width || 0)}x${Math.round(rect?.height || 0)}px` 
                        }));
                      }}
                    >
                      Find my size
                    </button>
                  </div>

                  {/* Disabled Button */}
                  <div className="disabled-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">5. Confirm button is disabled</label>
                    <button
                      id="isDisabled"
                      className="btn-inactive disabled-state w-full px-4 py-3 bg-gray-400 text-gray-600 rounded-lg cursor-not-allowed"
                      data-testid="disabled-button"
                      data-state="inactive"
                      name="disabledButton"
                      aria-disabled="true"
                      disabled
                    >
                      Disabled Button
                    </button>
                  </div>

                  {/* Hold Button */}
                  <div className="interaction-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">6. Click and hold button</label>
                    <button
                      id="isDisplayed"
                      className={`btn-interactive hold-action w-full px-4 py-3 rounded-lg transition-colors ${
                        buttonStates.isHolding 
                          ? 'bg-orange-700 text-white' 
                          : 'bg-orange-600 text-white hover:bg-orange-700'
                      }`}
                      data-testid="hold-button"
                      data-interaction="clickAndHold"
                      name="holdButton"
                      type="button"
                      onMouseDown={handleMouseDown}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      {buttonStates.isHolding ? 'Button Holded' : 'Click & Hold'}
                    </button>
                  </div>
                </div>

                {/* Locator Information */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-xs text-blue-800 space-y-1">
                        <div><code>By.xpath("//button[@data-testid='navigation-home']")</code> - Navigate button</div>
                        <div><code>By.cssSelector(".btn-location[data-function='getCoordinates']")</code> - Position button</div>
                        <div><code>By.xpath("//button[contains(@class,'color-detector')]")</code> - Color button</div>
                        <div><code>By.cssSelector("button[data-measurement='dimensions']")</code> - Size button</div>
                        <div><code>By.xpath("//button[@aria-disabled='true']")</code> - Disabled button</div>
                        <div><code>By.cssSelector(".btn-interactive[data-interaction='clickAndHold']")</code> - Hold button</div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-blue-200">
                        <p className="text-xs text-blue-700 font-medium">💡 Practice all 8 Selenium locator strategies!</p>
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
          <Link href="/practice/input-handling" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice/select-dropdown" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}