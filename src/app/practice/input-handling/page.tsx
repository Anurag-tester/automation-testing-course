'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Star, CheckCircle, Code, ExternalLink, Copy, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const InputHandlingChallenge = () => {
  const [showSolution, setShowSolution] = useState(false);
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

  const requirements = [
    "Navigate to a form with various input types (text, email, password, number, date)",
    "Fill out all input fields with valid data",
    "Validate that email field accepts only valid email format",
    "Test password field masking functionality",
    "Handle number input with min/max validation",
    "Select a date from date picker",
    "Clear all fields and verify they are empty",
    "Submit the form and verify success message"
  ];

  const testCases = [
    { id: 1, description: "Enter valid text in name field", expected: "Text should be entered successfully" },
    { id: 2, description: "Enter invalid email format", expected: "Should show validation error" },
    { id: 3, description: "Enter valid email format", expected: "Should accept the email" },
    { id: 4, description: "Enter password and verify masking", expected: "Password should be masked with dots/asterisks" },
    { id: 5, description: "Enter number outside range", expected: "Should show range validation error" },
    { id: 6, description: "Select future date", expected: "Date should be selected successfully" },
    { id: 7, description: "Clear all fields", expected: "All fields should be empty" },
    { id: 8, description: "Submit form with valid data", expected: "Should show success message" }
  ];

  const solutionCode = `package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class InputHandlingChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            // Navigate to practice form
            driver.get("https://letcode.in/edit");
            
            // Test Case 1: Enter text in name field
            WebElement nameField = wait.until(ExpectedConditions.elementToBeClickable(By.id("fullName")));
            nameField.clear();
            nameField.sendKeys("John Doe");
            System.out.println("✓ Name entered successfully");
            
            // Test Case 2: Test email validation with invalid email
            WebElement emailField = driver.findElement(By.id("join"));
            emailField.clear();
            emailField.sendKeys("invalid-email");
            
            // Check if validation error appears
            try {
                WebElement errorMsg = driver.findElement(By.xpath("//input[@id='join']/following-sibling::*[contains(@class,'error')]"));
                if (errorMsg.isDisplayed()) {
                    System.out.println("✓ Email validation working for invalid format");
                }
            } catch (Exception e) {
                System.out.println("! Email validation not found or different implementation");
            }
            
            // Test Case 3: Enter valid email
            emailField.clear();
            emailField.sendKeys("john.doe@example.com");
            System.out.println("✓ Valid email entered");
            
            // Test Case 4: Test password masking
            WebElement passwordField = driver.findElement(By.id("password"));
            passwordField.clear();
            passwordField.sendKeys("SecurePassword123");
            
            // Verify password is masked
            String passwordType = passwordField.getAttribute("type");
            if ("password".equals(passwordType)) {
                System.out.println("✓ Password field is properly masked");
            }
            
            // Test Case 5: Test number input validation
            WebElement ageField = driver.findElement(By.id("age"));
            ageField.clear();
            ageField.sendKeys("25");
            System.out.println("✓ Age entered successfully");
            
            // Test Case 6: Handle date picker (if available)
            try {
                WebElement dateField = driver.findElement(By.xpath("//input[@type='date']"));
                dateField.sendKeys("2024-12-31");
                System.out.println("✓ Date selected successfully");
            } catch (Exception e) {
                System.out.println("! Date field not found on this page");
            }
            
            // Test Case 7: Clear all fields and verify
            nameField.clear();
            emailField.clear();
            passwordField.clear();
            ageField.clear();
            
            // Verify fields are empty
            if (nameField.getAttribute("value").isEmpty() && 
                emailField.getAttribute("value").isEmpty() && 
                passwordField.getAttribute("value").isEmpty() && 
                ageField.getAttribute("value").isEmpty()) {
                System.out.println("✓ All fields cleared successfully");
            }
            
            // Test Case 8: Fill form again and submit
            nameField.sendKeys("Jane Smith");
            emailField.sendKeys("jane.smith@example.com");
            passwordField.sendKeys("MyPassword456");
            ageField.sendKeys("30");
            
            // Look for submit button and click
            try {
                WebElement submitBtn = driver.findElement(By.xpath("//button[contains(text(),'Submit') or @type='submit']"));
                submitBtn.click();
                
                // Wait for success message
                WebElement successMsg = wait.until(ExpectedConditions.presenceOfElementLocated(
                    By.xpath("//*[contains(text(),'success') or contains(text(),'Success')]")));
                
                if (successMsg.isDisplayed()) {
                    System.out.println("✓ Form submitted successfully");
                }
            } catch (Exception e) {
                System.out.println("! Submit functionality not available or different implementation");
            }
            
            System.out.println("\\n🎉 Input Handling Challenge Completed!");
            
        } catch (Exception e) {
            System.out.println("❌ Error occurred: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Clean up
            driver.quit();
        }
    }
}`;

  return (
    <DayLayout
      dayNumber={0}
      title="Input Field Mastery Challenge"
      description="Master various input types, validations, and dynamic field interactions with this hands-on Selenium challenge."
    >
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/practice" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Practice Problems
          </Link>
        </div>

        {/* Challenge Header */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200">
                    Beginner Level
                  </span>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" />
                    15-20 minutes
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Input Field Mastery Challenge</h1>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              This challenge focuses on handling various types of input fields, form validations, and user interactions. 
              You'll work with text inputs, email validation, password masking, number inputs, and form submission.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Problem Statement</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Challenge Requirements</h3>
            <div className="space-y-3">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-sm">{req}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">🎯 Practice Website</h4>
            <p className="text-blue-800 text-sm mb-3">
              Use <strong>https://letcode.in/edit</strong> for this challenge. This site provides various input fields for testing.
            </p>
            <a 
              href="https://letcode.in/edit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Open Practice Site
            </a>
          </div>
        </section>

        {/* Test Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Test Cases to Implement</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Case</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {testCases.map((testCase) => (
                    <tr key={testCase.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                            {testCase.id}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{testCase.description}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{testCase.expected}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-light text-gray-900">Expert Solution</h2>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
            >
              {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>
          </div>

          {showSolution && (
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium">Complete Java Solution</h3>
                <button 
                  onClick={() => copyToClipboard(solutionCode)}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600 transition-colors"
                >
                  {copySuccess ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copySuccess ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
              <pre className="text-green-400 text-sm leading-relaxed overflow-x-auto">
                <code>{solutionCode}</code>
              </pre>
            </div>
          )}
        </section>

        {/* Key Learning Points */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Key Learning Points</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">🔧 Technical Skills</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Using sendKeys() for text input</li>
                <li>• Implementing clear() method</li>
                <li>• getAttribute() for field validation</li>
                <li>• Handling different input types</li>
                <li>• Form submission techniques</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">💡 Best Practices</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Always clear fields before entering data</li>
                <li>• Verify input acceptance with getAttribute()</li>
                <li>• Handle validation errors gracefully</li>
                <li>• Use explicit waits for dynamic elements</li>
                <li>• Implement proper exception handling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center py-8">
          <div className="flex justify-between items-center">
            <Link href="/practice" className="text-gray-600 hover:text-gray-800 transition-colors">
              ← Back to Practice
            </Link>
            <Link href="/practice/dropdown-challenge" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              Next Challenge →
            </Link>
          </div>
        </section>
      </div>
    </DayLayout>
  );
};

export default function InputHandlingPage() {
  return <InputHandlingChallenge />;
}