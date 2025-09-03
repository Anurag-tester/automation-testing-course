'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function WindowChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [lastAction, setLastAction] = useState('');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleOpenWindow = (type: string, url: string) => {
    const newWindow = window.open(url, `_${type}`, 'width=600,height=400,scrollbars=yes,resizable=yes');
    setLastAction(`Opened ${type} window: ${url}`);
    
    // Close after 3 seconds for demo
    setTimeout(() => {
      if (newWindow && !newWindow.closed) {
        newWindow.close();
        setLastAction(`${type} window closed automatically`);
      }
    }, 3000);
  };

  const solutionCode = `// Window Challenge - LetCode Style Solution
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.Set;
import java.util.ArrayList;

public class WindowChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            driver.get("http://localhost:3000/practice/window-management");
            String parentWindow = driver.getWindowHandle();
            System.out.println("✓ Parent window handle: " + parentWindow);
            
            // Test Case 1: Open home page in new tab using complex locator
            WebElement homeTabBtn = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath("//div[@class='window-section']//button[@data-window-type='tab'][@data-target='home']")));
            homeTabBtn.click();
            
            // Wait for new tab and switch
            wait.until(ExpectedConditions.numberOfWindowsToBe(2));
            Set<String> allWindows = driver.getWindowHandles();
            
            for(String windowHandle : allWindows) {
                if(!windowHandle.equals(parentWindow)) {
                    driver.switchTo().window(windowHandle);
                    System.out.println("✓ Switched to home tab");
                    
                    // Verify we're on home page
                    String currentUrl = driver.getCurrentUrl();
                    String pageTitle = driver.getTitle();
                    System.out.println("✓ Home tab URL: " + currentUrl);
                    System.out.println("✓ Home tab title: " + pageTitle);
                    
                    // Close this tab and switch back
                    driver.close();
                    driver.switchTo().window(parentWindow);
                    System.out.println("✓ Closed home tab and returned to parent");
                    break;
                }
            }
            
            // Test Case 2: Open multiple windows using CSS selector
            WebElement multiWindowBtn = driver.findElement(
                By.cssSelector(".multi-window-section button[data-action='open-multiple'][data-testid='multi-window']"));
            multiWindowBtn.click();
            
            // Wait for multiple windows
            wait.until(ExpectedConditions.numberOfWindowsToBe(3));
            Set<String> multiWindows = driver.getWindowHandles();
            System.out.println("✓ Opened multiple windows. Total: " + multiWindows.size());
            
            // Switch to each window and get details
            ArrayList<String> windowList = new ArrayList<>(multiWindows);
            for(int i = 0; i < windowList.size(); i++) {
                String windowHandle = windowList.get(i);
                driver.switchTo().window(windowHandle);
                
                String title = driver.getTitle();
                String url = driver.getCurrentUrl();
                System.out.println("Window " + (i+1) + " - Title: " + title + ", URL: " + url);
                
                if(!windowHandle.equals(parentWindow)) {
                    driver.close();
                }
            }
            
            // Switch back to parent
            driver.switchTo().window(parentWindow);
            System.out.println("✓ Closed all child windows, back to parent");
            
            // Test Case 3: Handle popup window using nested locator
            WebElement popupBtn = driver.findElement(
                By.xpath("//div[@class='popup-container']//button[contains(@class,'popup-trigger') and @data-popup-type='alert']"));
            popupBtn.click();
            
            // Wait for popup window
            wait.until(ExpectedConditions.numberOfWindowsToBe(2));
            Set<String> popupWindows = driver.getWindowHandles();
            
            for(String windowHandle : popupWindows) {
                if(!windowHandle.equals(parentWindow)) {
                    driver.switchTo().window(windowHandle);
                    System.out.println("✓ Switched to popup window");
                    
                    // Interact with popup content
                    try {
                        WebElement popupContent = driver.findElement(
                            By.cssSelector(".popup-content[data-popup='true']"));
                        String popupText = popupContent.getText();
                        System.out.println("✓ Popup content: " + popupText);
                        
                        // Close popup using button inside popup
                        WebElement closeBtn = driver.findElement(
                            By.xpath("//button[@data-action='close-popup' and contains(@class,'close-btn')]"));
                        closeBtn.click();
                        System.out.println("✓ Closed popup using close button");
                    } catch (Exception e) {
                        // If no close button, close window directly
                        driver.close();
                        System.out.println("✓ Closed popup window directly");
                    }
                    
                    driver.switchTo().window(parentWindow);
                    break;
                }
            }
            
            // Test Case 4: Handle window with specific dimensions
            WebElement customWindowBtn = driver.findElement(
                By.cssSelector(".custom-window-section button[data-window-size='custom'][data-testid='sized-window']"));
            customWindowBtn.click();
            
            wait.until(ExpectedConditions.numberOfWindowsToBe(2));
            Set<String> customWindows = driver.getWindowHandles();
            
            for(String windowHandle : customWindows) {
                if(!windowHandle.equals(parentWindow)) {
                    driver.switchTo().window(windowHandle);
                    
                    // Get window size and position
                    org.openqa.selenium.Dimension windowSize = driver.manage().window().getSize();
                    org.openqa.selenium.Point windowPosition = driver.manage().window().getPosition();
                    
                    System.out.println("✓ Custom window size: " + windowSize.getWidth() + "x" + windowSize.getHeight());
                    System.out.println("✓ Custom window position: " + windowPosition.getX() + "," + windowPosition.getY());
                    
                    driver.close();
                    driver.switchTo().window(parentWindow);
                    break;
                }
            }
            
            // Test Case 5: Window handle management and validation
            String currentParentHandle = driver.getWindowHandle();
            Set<String> finalWindows = driver.getWindowHandles();
            
            System.out.println("\\n=== Window Handle Validation ===");
            System.out.println("Current window handle: " + currentParentHandle);
            System.out.println("Total windows open: " + finalWindows.size());
            System.out.println("Parent window maintained: " + currentParentHandle.equals(parentWindow));
            
            // Test Case 6: Get all window properties
            String windowTitle = driver.getTitle();
            String windowUrl = driver.getCurrentUrl();
            org.openqa.selenium.Dimension finalSize = driver.manage().window().getSize();
            
            System.out.println("\\n=== Final Window Properties ===");
            System.out.println("Title: " + windowTitle);
            System.out.println("URL: " + windowUrl);
            System.out.println("Size: " + finalSize.getWidth() + "x" + finalSize.getHeight());
            
            System.out.println("\\n🎉 Window Challenge Completed Successfully!");
            System.out.println("📋 All window operations tested: open, switch, close, handle management");
            
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
      title="Window - Tab Management Challenge"
      description="Master window handling with tabs, popups, and complex window switching scenarios."
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
                    <h1 className="text-xl font-bold text-gray-900">Window & Tab Mastery</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master window handling with tabs, popups, window switching, and handle management.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Open home page in new tab',
                  'Open multiple windows simultaneously',
                  'Handle popup window interactions',
                  'Manage custom-sized windows',
                  'Validate window handle management',
                  'Get window properties and dimensions'
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
                  className="flex items-center gap-2 px-3 py-2 bg-violet-100 text-violet-700 rounded-lg hover:bg-violet-200 transition-colors text-sm"
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

          {/* Right Side - Interactive Practice Windows */}
          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🪟 Practice Windows</h2>
                
                <div className="space-y-6">
                  {/* Action Status */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Last Action:</div>
                    <div className="text-sm font-medium text-blue-600">{lastAction || 'No action performed'}</div>
                  </div>

                  {/* Open Home Tab */}
                  <div className="window-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">1. Open home page in new tab</label>
                    <button
                      className="tab-opener home-tab-btn w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      data-window-type="tab"
                      data-target="home"
                      data-testid="home-tab"
                      onClick={() => handleOpenWindow('home-tab', '/')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open Home Tab
                    </button>
                  </div>

                  {/* Multiple Windows */}
                  <div className="multi-window-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">2. Open multiple windows</label>
                    <button
                      className="multi-window-trigger w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                      data-action="open-multiple"
                      data-testid="multi-window"
                      data-window-count="2"
                      onClick={() => {
                        handleOpenWindow('window1', '/practice');
                        setTimeout(() => handleOpenWindow('window2', '/'), 500);
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open Multiple Windows
                    </button>
                  </div>

                  {/* Popup Window */}
                  <div className="popup-container">
                    <label className="block text-sm font-medium text-gray-700 mb-2">3. Handle popup window</label>
                    <button
                      className="popup-trigger popup-btn w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                      data-popup-type="alert"
                      data-testid="popup-window"
                      onClick={() => {
                        const popup = window.open('', 'popup', 'width=400,height=300,scrollbars=no,resizable=no');
                        if (popup) {
                          popup.document.write(`
                            <html>
                              <head><title>Popup Window</title></head>
                              <body style="font-family:Arial; padding:20px; text-align:center;">
                                <div class="popup-content" data-popup="true">
                                  <h3>This is a popup window!</h3>
                                  <p>Practice window switching with Selenium</p>
                                  <button class="close-btn" data-action="close-popup" onclick="window.close()" 
                                          style="padding:8px 16px; background:#dc2626; color:white; border:none; border-radius:4px; cursor:pointer;">
                                    Close Popup
                                  </button>
                                </div>
                              </body>
                            </html>
                          `);
                          setLastAction('Opened popup window with close button');
                        }
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open Popup Window
                    </button>
                  </div>

                  {/* Custom Sized Window */}
                  <div className="custom-window-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">4. Open custom-sized window</label>
                    <button
                      className="custom-window-btn w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                      data-window-size="custom"
                      data-testid="sized-window"
                      data-width="800"
                      data-height="600"
                      onClick={() => {
                        const customWindow = window.open('/practice', 'custom', 'width=800,height=600,left=100,top=100,scrollbars=yes,resizable=yes');
                        setLastAction('Opened custom-sized window (800x600)');
                        setTimeout(() => {
                          if (customWindow && !customWindow.closed) {
                            customWindow.close();
                            setLastAction('Custom window closed');
                          }
                        }, 3000);
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open Custom Window
                    </button>
                  </div>

                  {/* Window Info */}
                  <div className="window-info-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">5. Get window information</label>
                    <button
                      className="window-info-btn w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      data-action="get-info"
                      data-testid="window-info"
                      onClick={() => {
                        const info = {
                          title: document.title,
                          url: window.location.href,
                          width: window.innerWidth,
                          height: window.innerHeight
                        };
                        setLastAction(`Window Info - Title: ${info.title}, Size: ${info.width}x${info.height}`);
                      }}
                    >
                      Get Window Info
                    </button>
                  </div>
                </div>

                {/* Locator Information */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-violet-100 text-violet-700 rounded-lg hover:bg-violet-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-violet-50 rounded-lg">
                      <div className="text-xs text-violet-800 space-y-1">
                        <div><code>By.xpath("//div[@class='window-section']//button[@data-window-type='tab'][@data-target='home']")</code></div>
                        <div><code>By.cssSelector(".multi-window-section button[data-action='open-multiple'][data-testid='multi-window']")</code></div>
                        <div><code>By.xpath("//div[@class='popup-container']//button[contains(@class,'popup-trigger')][@data-popup-type='alert']")</code></div>
                        <div><code>By.cssSelector(".custom-window-section button[data-window-size='custom'][data-testid='sized-window']")</code></div>
                        <div><code>By.xpath("//button[@data-action='close-popup' and contains(@class,'close-btn')]")</code></div>
                        <div><code>By.cssSelector(".popup-content[data-popup='true']")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-violet-200">
                        <p className="text-xs text-violet-700 font-medium">💡 Complex window locators with handle management!</p>
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
          <Link href="/practice/radio-button-toggle" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice/elements-challenge" className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}