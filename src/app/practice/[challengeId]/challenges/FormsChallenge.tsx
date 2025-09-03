'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Target, Clock, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function FormsChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    gender: '',
    hobbies: [] as string[],
    newsletter: false,
    terms: false
  });

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleHobbyChange = (hobby: string) => {
    setFormData(prev => ({
      ...prev,
      hobbies: prev.hobbies.includes(hobby)
        ? prev.hobbies.filter(h => h !== hobby)
        : [...prev.hobbies, hobby]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  const solutionCode = `// Forms Challenge - Comprehensive Form Handling
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import java.util.List;

public class FormsChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        try {
            driver.get("http://localhost:3000/practice/forms-challenge");
            
            // Test Case 1: Fill text inputs
            driver.findElement(By.id("firstName")).sendKeys("John");
            driver.findElement(By.id("lastName")).sendKeys("Doe");
            driver.findElement(By.id("email")).sendKeys("john.doe@example.com");
            driver.findElement(By.id("phone")).sendKeys("1234567890");
            
            System.out.println("✓ Text inputs filled");
            
            // Test Case 2: Fill textarea
            WebElement addressField = driver.findElement(By.id("address"));
            addressField.sendKeys("123 Main Street\\nAnytown, USA");
            
            System.out.println("✓ Textarea filled");
            
            // Test Case 3: Select dropdown
            Select countryDropdown = new Select(driver.findElement(By.id("country")));
            countryDropdown.selectByVisibleText("United States");
            
            System.out.println("✓ Dropdown selected");
            
            // Test Case 4: Select radio button
            WebElement maleRadio = driver.findElement(By.cssSelector("input[name='gender'][value='male']"));
            maleRadio.click();
            
            System.out.println("✓ Radio button selected");
            
            // Test Case 5: Select multiple checkboxes
            List<WebElement> hobbies = driver.findElements(By.cssSelector("input[name='hobbies']"));
            for (WebElement hobby : hobbies) {
                if (hobby.getAttribute("value").equals("reading") || 
                    hobby.getAttribute("value").equals("sports")) {
                    hobby.click();
                }
            }
            
            System.out.println("✓ Checkboxes selected");
            
            // Test Case 6: Toggle switches/checkboxes
            WebElement newsletterCheckbox = driver.findElement(By.id("newsletter"));
            if (!newsletterCheckbox.isSelected()) {
                newsletterCheckbox.click();
            }
            
            WebElement termsCheckbox = driver.findElement(By.id("terms"));
            if (!termsCheckbox.isSelected()) {
                termsCheckbox.click();
            }
            
            System.out.println("✓ Agreement checkboxes selected");
            
            // Test Case 7: Form validation
            WebElement submitBtn = driver.findElement(By.cssSelector("button[type='submit']"));
            submitBtn.click();
            
            // Handle alert if form is submitted
            try {
                Thread.sleep(1000);
                driver.switchTo().alert().accept();
                System.out.println("✓ Form submitted successfully");
            } catch (Exception e) {
                System.out.println("No alert appeared");
            }
            
            // Test Case 8: Reset form
            WebElement resetBtn = driver.findElement(By.cssSelector("button[type='reset']"));
            if (resetBtn.isDisplayed()) {
                resetBtn.click();
                System.out.println("✓ Form reset");
            }
            
            System.out.println("\\n🎉 Forms Challenge Completed!");
            
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
      title="Forms - All in One Challenge"
      description="Master comprehensive form handling with all input types."
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
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">
                        Expert
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="w-3 h-3" />
                        40-45 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Comprehensive Form Handling</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master all form elements: inputs, dropdowns, checkboxes, radio buttons, and validation.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Fill text input fields',
                  'Handle textarea elements',
                  'Select dropdown options',
                  'Choose radio buttons',
                  'Select multiple checkboxes',
                  'Toggle agreement checkboxes',
                  'Submit form and handle validation',
                  'Reset form to default state'
                ].map((testCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold">
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

          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Enter full address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">Select Country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <div className="flex gap-4">
                      {['male', 'female', 'other'].map((gender) => (
                        <label key={gender} className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={formData.gender === gender}
                            onChange={(e) => handleInputChange('gender', e.target.value)}
                            className="mr-2"
                          />
                          <span className="capitalize">{gender}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hobbies</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['reading', 'sports', 'music', 'travel'].map((hobby) => (
                        <label key={hobby} className="flex items-center">
                          <input
                            type="checkbox"
                            name="hobbies"
                            value={hobby}
                            checked={formData.hobbies.includes(hobby)}
                            onChange={() => handleHobbyChange(hobby)}
                            className="mr-2"
                          />
                          <span className="capitalize">{hobby}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        id="newsletter"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                        className="mr-2"
                      />
                      Subscribe to newsletter
                    </label>
                    <label className="flex items-center">
                      <input
                        id="terms"
                        type="checkbox"
                        checked={formData.terms}
                        onChange={(e) => handleInputChange('terms', e.target.checked)}
                        className="mr-2"
                      />
                      I agree to terms and conditions
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      onClick={() => setFormData({
                        firstName: '', lastName: '', email: '', phone: '', address: '',
                        country: '', gender: '', hobbies: [], newsletter: false, terms: false
                      })}
                      className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </form>

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
                        <div><code>By.id("firstName")</code></div>
                        <div><code>By.cssSelector("input[name='gender'][value='male']")</code></div>
                        <div><code>By.cssSelector("input[name='hobbies']")</code></div>
                        <div><code>By.cssSelector("button[type='submit']")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-emerald-200">
                        <p className="text-xs text-emerald-700 font-medium">💡 Use Select class for dropdowns!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link href="/practice/calendar-challenge" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice/file-management" className="text-gray-600 hover:text-gray-800 transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}