'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function ElementsChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [lastAction, setLastAction] = useState('');
  const [elements, setElements] = useState([
    { id: 1, text: 'Element 1', type: 'primary', active: true },
    { id: 2, text: 'Element 2', type: 'secondary', active: false },
    { id: 3, text: 'Element 3', type: 'success', active: true },
    { id: 4, text: 'Element 4', type: 'warning', active: false },
    { id: 5, text: 'Element 5', type: 'danger', active: true }
  ]);
  const [hiddenElements, setHiddenElements] = useState<number[]>([]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSmashElement = (id: number) => {
    setElements(prev => prev.filter(el => el.id !== id));
    setLastAction(`Smashed element ${id}`);
  };

  const handleToggleVisibility = (id: number) => {
    setHiddenElements(prev => 
      prev.includes(id) 
        ? prev.filter(elId => elId !== id)
        : [...prev, id]
    );
    setLastAction(`Toggled visibility for element ${id}`);
  };

  const handleToggleActive = (id: number) => {
    setElements(prev => prev.map(el => 
      el.id === id ? { ...el, active: !el.active } : el
    ));
    setLastAction(`Toggled active state for element ${id}`);
  };

  const solutionCode = `// Elements Challenge - LetCode Style Solution
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.interactions.Actions;
import java.time.Duration;
import java.util.List;

public class ElementsChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        Actions actions = new Actions(driver);
        
        try {
            driver.get("http://localhost:3000/practice/elements-challenge");
            
            // Test Case 1: Find all elements using complex locator
            List<WebElement> allElements = wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(
                By.xpath("//div[@class='elements-grid']//div[contains(@class,'element-card') and @data-element-id]")));
            
            System.out.println("✓ Found " + allElements.size() + " elements using complex locator");
            
            // Test Case 2: Find elements by type using CSS selector with attributes
            List<WebElement> primaryElements = driver.findElements(
                By.cssSelector(".elements-grid .element-card[data-type='primary'][data-active='true']"));
            System.out.println("✓ Found " + primaryElements.size() + " active primary elements");
            
            // Test Case 3: Find and interact with specific element using nested locator
            WebElement firstElement = driver.findElement(
                By.xpath("//div[@class='elements-container']//div[@data-element-id='1' and contains(@class,'element-card')]"));
            
            // Get element properties
            String elementText = firstElement.findElement(By.cssSelector(".element-text")).getText();
            String elementType = firstElement.getAttribute("data-type");
            String isActive = firstElement.getAttribute("data-active");
            
            System.out.println("✓ First element - Text: " + elementText + ", Type: " + elementType + ", Active: " + isActive);
            
            // Test Case 4: Smash elements using complex button locator
            List<WebElement> smashButtons = driver.findElements(
                By.xpath("//div[@class='elements-grid']//button[@data-action='smash' and contains(@class,'smash-btn')]"));
            
            int initialCount = smashButtons.size();
            if(!smashButtons.isEmpty()) {
                // Smash first element
                WebElement firstSmashBtn = smashButtons.get(0);
                String elementId = firstSmashBtn.getAttribute("data-element-id");
                firstSmashBtn.click();
                
                System.out.println("✓ Smashed element with ID: " + elementId);
                
                // Wait for element to be removed
                wait.until(ExpectedConditions.invisibilityOfElementLocated(
                    By.xpath("//div[@data-element-id='" + elementId + "']")));
                
                // Verify element count decreased
                List<WebElement> remainingElements = driver.findElements(
                    By.cssSelector(".elements-grid .element-card"));
                System.out.println("✓ Elements remaining: " + remainingElements.size() + " (was " + initialCount + ")");
            }
            
            // Test Case 5: Toggle element visibility using complex locator
            List<WebElement> visibilityButtons = driver.findElements(
                By.xpath("//div[@class='visibility-controls']//button[@data-action='toggle-visibility' and @data-testid]"));
            
            if(!visibilityButtons.isEmpty()) {
                WebElement toggleBtn = visibilityButtons.get(0);
                String targetElementId = toggleBtn.getAttribute("data-target");
                toggleBtn.click();
                
                System.out.println("✓ Toggled visibility for element: " + targetElementId);
                
                // Check if element is hidden
                WebElement targetElement = driver.findElement(
                    By.xpath("//div[@data-element-id='" + targetElementId + "']"));
                String displayStyle = targetElement.getCssValue("display");
                boolean isHidden = "none".equals(displayStyle) || !targetElement.isDisplayed();
                
                System.out.println("✓ Element " + targetElementId + " is hidden: " + isHidden);
            }
            
            // Test Case 6: Find elements by multiple attributes
            List<WebElement> activeSuccessElements = driver.findElements(
                By.xpath("//div[@data-type='success' and @data-active='true' and contains(@class,'element-card')]"));
            System.out.println("✓ Found " + activeSuccessElements.size() + " active success elements");
            
            // Test Case 7: Toggle active state using CSS selector
            WebElement activeToggleBtn = driver.findElement(
                By.cssSelector(".active-controls button[data-action='toggle-active']:not([disabled])"));
            
            String targetId = activeToggleBtn.getAttribute("data-target");
            WebElement targetElement = driver.findElement(
                By.cssSelector(".element-card[data-element-id='" + targetId + "']"));
            
            String beforeState = targetElement.getAttribute("data-active");
            activeToggleBtn.click();
            
            // Wait for state change
            wait.until(ExpectedConditions.not(
                ExpectedConditions.attributeToBe(targetElement, "data-active", beforeState)));
            
            String afterState = targetElement.getAttribute("data-active");
            System.out.println("✓ Toggled active state from " + beforeState + " to " + afterState);
            
            // Test Case 8: Find elements using advanced XPath functions
            List<WebElement> evenElements = driver.findElements(
                By.xpath("//div[@class='elements-grid']//div[contains(@class,'element-card')][position() mod 2 = 0]"));
            System.out.println("✓ Found " + evenElements.size() + " elements at even positions");
            
            List<WebElement> lastTwoElements = driver.findElements(
                By.xpath("//div[@class='elements-grid']//div[contains(@class,'element-card')][position() > last()-2]"));
            System.out.println("✓ Found " + lastTwoElements.size() + " elements in last 2 positions");
            
            // Test Case 9: Element interaction with hover effects
            List<WebElement> hoverElements = driver.findElements(
                By.cssSelector(".elements-grid .element-card[data-hover='true']"));
            
            for(WebElement element : hoverElements) {
                actions.moveToElement(element).perform();
                Thread.sleep(500); // Brief pause to see hover effect
                
                String elementId = element.getAttribute("data-element-id");
                System.out.println("✓ Hovered over element: " + elementId);
            }
            
            // Test Case 10: Comprehensive element validation
            List<WebElement> finalElements = driver.findElements(
                By.xpath("//div[@class='elements-grid']//div[@data-element-id]"));
            
            System.out.println("\\n=== Final Element Analysis ===");
            System.out.println("Total elements found: " + finalElements.size());
            
            for(WebElement element : finalElements) {
                String id = element.getAttribute("data-element-id");
                String type = element.getAttribute("data-type");
                String active = element.getAttribute("data-active");
                boolean isDisplayed = element.isDisplayed();
                String text = element.findElement(By.cssSelector(".element-text")).getText();
                
                System.out.println("Element " + id + " - Type: " + type + ", Active: " + active + 
                                 ", Displayed: " + isDisplayed + ", Text: " + text);
            }
            
            System.out.println("\\n🎉 Elements Challenge Completed Successfully!");
            System.out.println("📋 All element operations tested: find, smash, toggle, validate");
            
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
      title="Elements - Find & Smash Challenge"
      description="Master element location, interaction, and manipulation with complex locators and dynamic elements."
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
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
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
                        20-25 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Elements Find & Smash</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master element location, interaction, and manipulation with findElements, complex locators, and dynamic content.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Find all elements using complex locators',
                  'Find elements by type and state',
                  'Smash elements using action buttons',
                  'Toggle element visibility',
                  'Toggle active/inactive states',
                  'Find elements using XPath functions',
                  'Interact with hover effects',
                  'Validate element properties'
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
                  className="flex items-center gap-2 px-3 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors text-sm"
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

          {/* Right Side - Interactive Practice Elements */}
          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Elements</h2>
                
                <div className="space-y-6">
                  {/* Action Status */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Last Action:</div>
                    <div className="text-sm font-medium text-blue-600">{lastAction || 'No action performed'}</div>
                  </div>

                  {/* Elements Grid */}
                  <div className="elements-container">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Interactive Elements</label>
                    <div className="elements-grid space-y-3">
                      {elements.map((element) => (
                        <div
                          key={element.id}
                          className={`element-card p-4 border rounded-lg transition-all duration-300 ${
                            hiddenElements.includes(element.id) ? 'opacity-30' : 'opacity-100'
                          } ${
                            element.active ? 'border-green-300 bg-green-50' : 'border-gray-300 bg-gray-50'
                          }`}
                          data-element-id={element.id}
                          data-type={element.type}
                          data-active={element.active.toString()}
                          data-hover="true"
                          style={{ display: hiddenElements.includes(element.id) ? 'none' : 'block' }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="element-text font-medium text-gray-900">{element.text}</div>
                              <div className="text-xs text-gray-500">
                                Type: {element.type} | Active: {element.active ? 'Yes' : 'No'}
                              </div>
                            </div>
                            <button
                              className="smash-btn px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700 transition-colors flex items-center gap-1"
                              data-action="smash"
                              data-element-id={element.id}
                              onClick={() => handleSmashElement(element.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                              Smash
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visibility Controls */}
                  <div className="visibility-controls">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Visibility Controls</label>
                    <div className="grid grid-cols-3 gap-2">
                      {elements.slice(0, 3).map((element) => (
                        <button
                          key={`vis-${element.id}`}
                          className="px-2 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
                          data-action="toggle-visibility"
                          data-testid={`visibility-${element.id}`}
                          data-target={element.id}
                          onClick={() => handleToggleVisibility(element.id)}
                        >
                          {hiddenElements.includes(element.id) ? 'Show' : 'Hide'} {element.id}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active State Controls */}
                  <div className="active-controls">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Active State Controls</label>
                    <div className="grid grid-cols-3 gap-2">
                      {elements.slice(0, 3).map((element) => (
                        <button
                          key={`active-${element.id}`}
                          className="px-2 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700 transition-colors"
                          data-action="toggle-active"
                          data-testid={`active-${element.id}`}
                          data-target={element.id}
                          onClick={() => handleToggleActive(element.id)}
                        >
                          Toggle {element.id}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Element Stats */}
                  <div className="element-stats bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Element Statistics</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>Total Elements: {elements.length}</div>
                      <div>Active Elements: {elements.filter(e => e.active).length}</div>
                      <div>Hidden Elements: {hiddenElements.length}</div>
                      <div>Primary Type: {elements.filter(e => e.type === 'primary').length}</div>
                    </div>
                  </div>
                </div>

                {/* Locator Information */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <div className="text-xs text-emerald-800 space-y-1">
                        <div><code>By.xpath("//div[@class='elements-grid']//div[contains(@class,'element-card')][@data-element-id]")</code></div>
                        <div><code>By.cssSelector(".elements-grid .element-card[data-type='primary'][data-active='true']")</code></div>
                        <div><code>By.xpath("//div[@class='elements-container']//div[@data-element-id='1']")</code></div>
                        <div><code>By.xpath("//button[@data-action='smash' and contains(@class,'smash-btn')]")</code></div>
                        <div><code>By.xpath("//button[@data-action='toggle-visibility' and @data-testid]")</code></div>
                        <div><code>By.xpath("//div[contains(@class,'element-card')][position() mod 2 = 0]")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-emerald-200">
                        <p className="text-xs text-emerald-700 font-medium">💡 Advanced element locators with findElements and XPath functions!</p>
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
          <Link href="/practice/window-management" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors">
            Back to Practice →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}