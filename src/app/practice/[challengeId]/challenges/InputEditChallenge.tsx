'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function InputEditChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    age: '',
    website: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name.includes('[') 
      ? e.target.name.split('[')[1].replace(']', '')
      : e.target.name;
    setFormData({
      ...formData,
      [fieldName]: e.target.value
    });
  };

  const submitForm = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const clearForm = () => {
    setFormData({
      fullName: '',
      email: '',
      password: '',
      age: '',
      website: '',
      phone: ''
    });
  };

  const solutionCode = `// Complex Input Field Automation - Intermediate Level
WebDriver driver = new ChromeDriver();
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
driver.get("your-practice-url");

// Test Case 1: Complex name field locator with data attributes
WebElement nameField = wait.until(ExpectedConditions.presenceOfElementLocated(
    By.cssSelector("[data-automation-id='full-name-input'][data-validation*='required']"))); 
nameField.clear();
nameField.sendKeys("John Doe");

// Verify validation attributes
String validationRules = nameField.getAttribute("data-validation");
Assert.assertTrue(validationRules.contains("required"));

// Test Case 2: Email field with validation pattern
WebElement emailField = driver.findElement(
    By.xpath("//div[@class='contact-section']//input[@data-field-type='email']"));
emailField.clear();
emailField.sendKeys("john.doe@example.com");

// Verify email pattern validation
String emailPattern = emailField.getAttribute("data-validation-pattern");
Assert.assertNotNull(emailPattern);

// Test Case 3: Password field with security attributes
WebElement passwordField = driver.findElement(
    By.cssSelector(".security-section input[data-security-level='high']"));
passwordField.clear();
passwordField.sendKeys("SecurePass123!");

// Verify security attributes
String securityLevel = passwordField.getAttribute("data-security-level");
Assert.assertEquals("high", securityLevel);

// Test Case 4: Age field with range validation
WebElement ageField = driver.findElement(
    By.xpath("//input[@data-input-type='numeric' and @data-range='18-100']"));
ageField.clear();
ageField.sendKeys("28");

// Test Case 5: URL field with protocol validation
WebElement urlField = driver.findElement(
    By.cssSelector("input[data-url-validation='true'][data-protocol-required='https']"));
urlField.clear();
urlField.sendKeys("https://johndoe.dev");

// Test Case 6: Phone field with format validation
WebElement phoneField = driver.findElement(
    By.xpath("//div[@data-contact-type='phone']//input[@data-phone-format='international']"));
phoneField.clear();
phoneField.sendKeys("+1 (555) 123-4567");

// Test Case 7: Submit form with complex button locator
WebElement submitBtn = wait.until(ExpectedConditions.elementToBeClickable(
    By.xpath("//button[contains(@class, 'bg-green-600') and text()='Submit Form']"))); 
submitBtn.click();

// Verify form submission
wait.until(ExpectedConditions.alertIsPresent());
Alert alert = driver.switchTo().alert();
String alertText = alert.getText();
Assert.assertEquals("Form submitted successfully!", alertText);
alert.accept();

// Test Case 8: Clear all fields using complex selectors
WebElement clearBtn = driver.findElement(
    By.xpath("//button[contains(@class, 'bg-gray-100') and text()='Clear All Fields']"));
clearBtn.click();

// Verify all fields are cleared
List<WebElement> allInputs = driver.findElements(
    By.xpath("//div[contains(@class, '-section')]//input"));
for(WebElement input : allInputs) {
    String value = input.getAttribute("value");
    Assert.assertTrue("Field should be empty: " + input.getAttribute("name"), 
                     value == null || value.isEmpty());
}

// Test Case 9: Validate form state after clearing
WebElement formContainer = driver.findElement(By.cssSelector("[data-testid='personal-details']"));
String formState = formContainer.getAttribute("data-form-state");
System.out.println("Form state after clearing: " + formState);`;

  return (
    <DayLayout
      dayNumber={0}
      title="Input - Edit Fields Challenge"
      description="Practice interacting with different types of input fields including text, email, password, and number inputs."
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
                        25-30 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Complex Input Field Automation</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master complex input field automation with dynamic attributes, validation patterns, and advanced locator strategies.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Locate Full Name field using complex data attributes',
                  'Enter email with validation pattern verification',
                  'Handle password field with security attributes',
                  'Interact with age field using demographic data attributes',
                  'Validate URL field with protocol requirements',
                  'Handle phone field with international format validation',
                  'Submit form and verify success state',
                  'Clear all fields using complex locator strategies',
                  'Validate dynamic attributes and data properties',
                  'Handle form validation states and error messages'
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
                    <button className="flex items-center gap-2 px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs hover:bg-gray-600">
                      <Copy className="w-3 h-3" />
                      Copy
                    </button>
                  </div>
                  <pre className="text-green-400 text-xs leading-relaxed overflow-x-auto">
                    <code>{solutionCode}</code>
                  </pre>
                </div>
              )}
            </section>
          </div>

          {/* Right Side - Interactive Practice Form */}
          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Form</h2>
                
                <div className="space-y-4">
                  <div className="user-info-section" data-testid="personal-details">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="user[fullName]"
                      data-automation-id="full-name-input"
                      data-validation="required|min:2|max:50"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="form-control user-name-field w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="contact-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="contact[email]"
                      data-field-type="email"
                      data-validation-pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="email-input-field w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="user@domain.com"
                      required
                    />
                  </div>

                  <div className="security-section" data-section="credentials">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      name="security[password]"
                      data-security-level="high"
                      data-min-length="8"
                      className="password-field secure-input w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Min 8 characters"
                      minLength={8}
                      required
                    />
                  </div>

                  <div className="demographics-panel">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      name="demographics[age]"
                      data-input-type="numeric"
                      data-range="18-100"
                      className="age-numeric-input w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="18-100"
                      min="18"
                      max="100"
                    />
                  </div>

                  <div className="web-presence-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website/Portfolio
                    </label>
                    <input
                      type="url"
                      name="profile[website]"
                      data-url-validation="true"
                      data-protocol-required="https"
                      className="url-input-validator w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourportfolio.com"
                      pattern="https://.*"
                    />
                  </div>

                  <div className="communication-details" data-contact-type="phone">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="contact[phone]"
                      data-phone-format="international"
                      data-country-code="+1"
                      className="phone-number-field tel-input w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      pattern="\+1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={submitForm}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Submit Form
                    </button>
                    <button
                      onClick={clearForm}
                      className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Clear All Fields
                    </button>
                  </div>
                </div>

                {/* Locator Information */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-blue-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                    >
                      {showLocators ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>

                  {showLocators && (
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-xs text-blue-800 space-y-1">
                        <div><code>By.cssSelector("[data-automation-id='full-name-input']")</code></div>
                        <div><code>By.xpath("//input[@data-field-type='email']")</code></div>
                        <div><code>By.cssSelector(".password-field[data-security-level='high']")</code></div>
                        <div><code>By.xpath("//input[@data-input-type='numeric' and @data-range]")</code></div>
                        <div><code>By.cssSelector("input[data-url-validation='true']")</code></div>
                        <div><code>By.xpath("//div[@data-contact-type='phone']//input")</code></div>
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
          <Link href="/practice" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Back to Practice
          </Link>
          <Link href="/practice/button-click" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}