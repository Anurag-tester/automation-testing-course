'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function AlertDialogChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [lastAction, setLastAction] = useState('');
  const [promptInput, setPromptInput] = useState('');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSimpleAlert = () => {
    alert('Hey! Welcome to LetCode');
    setLastAction('Simple alert displayed');
  };

  const handleConfirmAlert = () => {
    const result = confirm('Are you happy with LetCode?');
    setLastAction(`Confirm alert: ${result ? 'Accepted' : 'Dismissed'}`);
  };

  const handlePromptAlert = () => {
    const result = prompt('Enter your name', 'LetCode');
    setLastAction(`Prompt alert: ${result ? `Entered "${result}"` : 'Cancelled'}`);
  };

  const handleSweetAlert = () => {
    // Simulate sweet alert behavior
    const customAlert = document.createElement('div');
    customAlert.className = 'sweet-alert-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    customAlert.innerHTML = `
      <div class="bg-white rounded-lg p-6 max-w-sm mx-4 sweet-alert-content" data-testid="sweet-alert">
        <div class="text-center">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">Sweet!</h3>
          <p class="text-sm text-gray-500 mb-4">You have successfully triggered a sweet alert</p>
          <button class="sweet-alert-ok bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" data-action="accept">
            OK
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(customAlert);
    
    const okButton = customAlert.querySelector('.sweet-alert-ok');
    okButton?.addEventListener('click', () => {
      document.body.removeChild(customAlert);
      setLastAction('Sweet alert accepted');
    });
  };

  const solutionCode = `// Alert Dialog Challenge - LetCode Style Solution
package practice;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class AlertDialogChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            driver.get("http://localhost:3000/practice/alert-dialog");
            
            // Test Case 1: Handle simple alert using complex locator
            WebElement simpleAlertBtn = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath("//div[@class='alert-section']//button[@data-alert-type='simple'][contains(@class,'alert-trigger')]"))); 
            simpleAlertBtn.click();
            
            // Switch to alert and accept
            Alert simpleAlert = wait.until(ExpectedConditions.alertIsPresent());
            String alertText = simpleAlert.getText();
            System.out.println("✓ Simple alert text: " + alertText);
            simpleAlert.accept();
            System.out.println("✓ Simple alert accepted");
            
            // Test Case 2: Handle confirm alert using CSS selector with attributes
            WebElement confirmAlertBtn = driver.findElement(
                By.cssSelector(".confirm-alert-section button[data-testid='confirm-alert'][data-action='confirm']"));
            confirmAlertBtn.click();
            
            Alert confirmAlert = wait.until(ExpectedConditions.alertIsPresent());
            String confirmText = confirmAlert.getText();
            System.out.println("✓ Confirm alert text: " + confirmText);
            confirmAlert.accept(); // or confirmAlert.dismiss() to cancel
            System.out.println("✓ Confirm alert accepted");
            
            // Test Case 3: Handle prompt alert using XPath with multiple conditions
            WebElement promptAlertBtn = driver.findElement(
                By.xpath("//div[@class='prompt-section']//button[@data-alert-type='prompt' and contains(@class,'prompt-trigger')]"));
            promptAlertBtn.click();
            
            Alert promptAlert = wait.until(ExpectedConditions.alertIsPresent());
            String promptText = promptAlert.getText();
            System.out.println("✓ Prompt alert text: " + promptText);
            promptAlert.sendKeys("Selenium WebDriver");
            promptAlert.accept();
            System.out.println("✓ Prompt alert filled and accepted");
            
            // Test Case 4: Handle sweet alert (custom modal) using complex locator
            WebElement sweetAlertBtn = driver.findElement(
                By.cssSelector(".sweet-alert-container button[data-modal='sweet'][data-testid='sweet-alert-trigger']:not([disabled])"));
            sweetAlertBtn.click();
            
            // Wait for custom modal to appear
            WebElement sweetAlertModal = wait.until(ExpectedConditions.presenceOfElementLocated(
                By.xpath("//div[@class='sweet-alert-modal']//div[@data-testid='sweet-alert']")));
            
            // Get modal text
            WebElement modalTitle = sweetAlertModal.findElement(By.tagName("h3"));
            String modalText = modalTitle.getText();
            System.out.println("✓ Sweet alert title: " + modalText);
            
            // Click OK button using nested locator
            WebElement okButton = driver.findElement(
                By.xpath("//div[@class='sweet-alert-content']//button[@data-action='accept'][contains(@class,'sweet-alert-ok')]"));
            okButton.click();
            System.out.println("✓ Sweet alert accepted");
            
            // Test Case 5: Verify alert is dismissed
            wait.until(ExpectedConditions.invisibilityOfElementLocated(
                By.cssSelector(".sweet-alert-modal")));
            System.out.println("✓ Sweet alert modal dismissed");
            
            // Test Case 6: Test dismiss functionality
            WebElement confirmBtn2 = driver.findElement(
                By.cssSelector("button[data-testid='confirm-alert']"));
            confirmBtn2.click();
            
            Alert dismissAlert = wait.until(ExpectedConditions.alertIsPresent());
            dismissAlert.dismiss(); // Click Cancel/No
            System.out.println("✓ Confirm alert dismissed");
            
            System.out.println("\\n🎉 Alert Dialog Challenge Completed Successfully!");
            System.out.println("📋 All alert types handled: Simple, Confirm, Prompt, Custom Modal");
            
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
      title="Alert - Dialog Boxes Challenge"
      description="Master alert handling with simple alerts, confirm dialogs, prompt inputs, and custom modals."
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
                        15-20 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Alert Dialog Mastery</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master different types of alert dialogs including simple alerts, confirm dialogs, prompt inputs, and custom modals.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Accept the simple alert',
                  'Confirm the alert (accept)',
                  'Dismiss the alert (cancel)',
                  'Type your name in prompt and accept',
                  'Handle sweet alert modal',
                  'Verify alert text content'
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
                  className="flex items-center gap-2 px-3 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors text-sm"
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

          {/* Right Side - Interactive Practice Alerts */}
          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🚨 Practice Alerts</h2>
                
                <div className="space-y-6">
                  {/* Action Status */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Last Action:</div>
                    <div className="text-sm font-medium text-blue-600">{lastAction || 'No action performed'}</div>
                  </div>

                  {/* Simple Alert */}
                  <div className="alert-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">1. Accept the simple alert</label>
                    <button
                      className="alert-trigger simple-alert-btn w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      data-alert-type="simple"
                      data-testid="simple-alert"
                      name="simpleAlert"
                      onClick={handleSimpleAlert}
                    >
                      Simple Alert
                    </button>
                  </div>

                  {/* Confirm Alert */}
                  <div className="confirm-alert-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">2. Confirm the alert</label>
                    <button
                      className="confirm-alert-trigger w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      data-testid="confirm-alert"
                      data-action="confirm"
                      data-alert-type="confirm"
                      name="confirmAlert"
                      onClick={handleConfirmAlert}
                    >
                      Confirm Alert
                    </button>
                  </div>

                  {/* Prompt Alert */}
                  <div className="prompt-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">3. Type your name in prompt</label>
                    <button
                      className="prompt-trigger prompt-alert-btn w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      data-alert-type="prompt"
                      data-testid="prompt-alert"
                      name="promptAlert"
                      onClick={handlePromptAlert}
                    >
                      Prompt Alert
                    </button>
                  </div>

                  {/* Sweet Alert */}
                  <div className="sweet-alert-container">
                    <label className="block text-sm font-medium text-gray-700 mb-2">4. Handle sweet alert</label>
                    <button
                      className="sweet-alert-btn custom-modal-trigger w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                      data-modal="sweet"
                      data-testid="sweet-alert-trigger"
                      name="sweetAlert"
                      onClick={handleSweetAlert}
                    >
                      Sweet Alert
                    </button>
                  </div>
                </div>

                {/* Locator Information */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <div className="text-xs text-yellow-800 space-y-1">
                        <div><code>By.xpath("//div[@class='alert-section']//button[@data-alert-type='simple']")</code></div>
                        <div><code>By.cssSelector(".confirm-alert-section button[data-testid='confirm-alert']")</code></div>
                        <div><code>By.xpath("//div[@class='prompt-section']//button[@data-alert-type='prompt']")</code></div>
                        <div><code>By.cssSelector(".sweet-alert-container button[data-modal='sweet']:not([disabled])")</code></div>
                        <div><code>By.xpath("//div[@class='sweet-alert-content']//button[@data-action='accept']")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-yellow-200">
                        <p className="text-xs text-yellow-700 font-medium">💡 Complex locators for alert triggers and modal handling!</p>
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
          <Link href="/practice/select-dropdown" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors">
            Back to Practice →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}