'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function RadioToggleChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [lastAction, setLastAction] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedBugType, setSelectedBugType] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [rememberMe, setRememberMe] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
    setLastAction(`Programming languages: ${selectedLanguages.includes(language) ? 'Unchecked' : 'Checked'} ${language}`);
  };

  const solutionCode = `// Radio Toggle Challenge - LetCode Style Solution
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.List;

public class RadioToggleChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            driver.get("http://localhost:3000/practice/radio-button-toggle");
            
            // Test Case 1: Select gender using complex radio button locator
            WebElement maleRadio = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath("//div[@class='gender-selection']//input[@type='radio' and @data-gender='male'][@name='gender']")));
            maleRadio.click();
            System.out.println("✓ Selected Male gender using complex XPath");
            
            // Verify selection
            boolean isMaleSelected = maleRadio.isSelected();
            System.out.println("✓ Male radio is selected: " + isMaleSelected);
            
            // Test Case 2: Select experience level using CSS selector with attributes
            WebElement seniorRadio = driver.findElement(
                By.cssSelector(".experience-section input[data-experience='senior'][value='senior']:not([disabled])"));
            seniorRadio.click();
            System.out.println("✓ Selected Senior experience level");
            
            // Test Case 3: Select bug type using nested locator
            WebElement functionalBugRadio = driver.findElement(
                By.xpath("//div[@class='bug-type-container']//label[contains(text(),'Functional Bug')]/input[@type='radio']"));
            functionalBugRadio.click();
            System.out.println("✓ Selected Functional Bug type using label-based locator");
            
            // Test Case 4: Handle checkbox - Accept terms using complex locator
            WebElement termsCheckbox = driver.findElement(
                By.cssSelector(".terms-section input[data-testid='terms-checkbox'][data-required='true']"));
            if(!termsCheckbox.isSelected()) {
                termsCheckbox.click();
                System.out.println("✓ Accepted terms and conditions");
            }
            
            // Test Case 5: Select multiple programming languages (checkboxes)
            String[] languagesToSelect = {"java", "python", "javascript"};
            
            for(String language : languagesToSelect) {
                WebElement langCheckbox = driver.findElement(
                    By.xpath("//div[@class='languages-grid']//input[@data-language='" + language + "' and @data-skill-type='programming']"));
                
                if(!langCheckbox.isSelected()) {
                    langCheckbox.click();
                    System.out.println("✓ Selected " + language + " programming language");
                }
            }
            
            // Test Case 6: Verify all selected programming languages
            List<WebElement> selectedLanguages = driver.findElements(
                By.xpath("//div[@class='languages-grid']//input[@type='checkbox' and @checked]"));
            
            System.out.println("\\n=== Selected Programming Languages ===");
            for(WebElement lang : selectedLanguages) {
                String languageName = lang.getAttribute("data-language");
                String skillType = lang.getAttribute("data-skill-type");
                System.out.println("- " + languageName + " (" + skillType + ")");
            }
            
            // Test Case 7: Toggle remember me checkbox using complex locator
            WebElement rememberCheckbox = driver.findElement(
                By.cssSelector(".remember-section input[data-persistence='session'][data-testid='remember-me']"));
            
            boolean wasChecked = rememberCheckbox.isSelected();
            rememberCheckbox.click();
            boolean isNowChecked = rememberCheckbox.isSelected();
            
            System.out.println("\\n=== Toggle Verification ===");
            System.out.println("Remember me was checked: " + wasChecked);
            System.out.println("Remember me is now checked: " + isNowChecked);
            System.out.println("Toggle successful: " + (wasChecked != isNowChecked));
            
            // Test Case 8: Validate radio button groups (only one selected per group)
            List<WebElement> genderRadios = driver.findElements(
                By.xpath("//div[@class='gender-selection']//input[@type='radio' and @name='gender']"));
            
            int selectedGenderCount = 0;
            for(WebElement radio : genderRadios) {
                if(radio.isSelected()) {
                    selectedGenderCount++;
                    String genderValue = radio.getAttribute("data-gender");
                    System.out.println("\\n=== Radio Group Validation ===");
                    System.out.println("Selected gender: " + genderValue);
                }
            }
            
            if(selectedGenderCount == 1) {
                System.out.println("✓ Radio group validation passed - only one gender selected");
            } else {
                System.out.println("❌ Radio group validation failed - " + selectedGenderCount + " genders selected");
            }
            
            // Test Case 9: Get all form values for validation
            String selectedGender = driver.findElement(
                By.xpath("//input[@name='gender' and @checked]")).getAttribute("data-gender");
            String selectedExperience = driver.findElement(
                By.xpath("//input[@name='experience' and @checked]")).getAttribute("data-experience");
            String selectedBugType = driver.findElement(
                By.xpath("//input[@name='bugType' and @checked]")).getAttribute("value");
            
            boolean termsAccepted = driver.findElement(
                By.cssSelector("input[data-testid='terms-checkbox']")).isSelected();
            boolean rememberMeChecked = driver.findElement(
                By.cssSelector("input[data-testid='remember-me']")).isSelected();
            
            System.out.println("\\n=== Form Summary ===");
            System.out.println("Gender: " + selectedGender);
            System.out.println("Experience: " + selectedExperience);
            System.out.println("Bug Type: " + selectedBugType);
            System.out.println("Terms Accepted: " + termsAccepted);
            System.out.println("Remember Me: " + rememberMeChecked);
            System.out.println("Programming Languages: " + selectedLanguages.size() + " selected");
            
            System.out.println("\\n🎉 Radio Toggle Challenge Completed Successfully!");
            System.out.println("📋 All radio/checkbox operations tested: selection, validation, grouping");
            
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
      title="Radio - Toggle Elements Challenge"
      description="Master radio buttons, checkboxes, and toggle elements with complex locators and validation."
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
                    <h1 className="text-xl font-bold text-gray-900">Radio & Toggle Mastery</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master radio buttons, checkboxes, and toggle elements with complex selection patterns and validation.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Select gender using radio buttons',
                  'Select experience level',
                  'Choose bug type from radio group',
                  'Accept terms and conditions checkbox',
                  'Select multiple programming languages',
                  'Toggle remember me checkbox',
                  'Validate radio button groups',
                  'Get all form values for validation'
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
                  className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
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
                <h2 className="text-lg font-medium text-gray-900 mb-6">🔘 Practice Radio & Toggles</h2>
                
                <div className="space-y-6">
                  {/* Action Status */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Last Action:</div>
                    <div className="text-sm font-medium text-blue-600">{lastAction || 'No action performed'}</div>
                  </div>

                  {/* Gender Selection */}
                  <div className="gender-selection">
                    <label className="block text-sm font-medium text-gray-700 mb-3">1. Select your gender</label>
                    <div className="space-y-2">
                      {[
                        { value: 'male', label: 'Male', dataGender: 'male' },
                        { value: 'female', label: 'Female', dataGender: 'female' },
                        { value: 'other', label: 'Other', dataGender: 'other' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value={option.value}
                            data-gender={option.dataGender}
                            data-testid={`gender-${option.value}`}
                            className="radio-gender mr-3"
                            checked={selectedGender === option.value}
                            onChange={(e) => {
                              setSelectedGender(e.target.value);
                              setLastAction(`Selected gender: ${option.label}`);
                            }}
                          />
                          <span className="text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div className="experience-section">
                    <label className="block text-sm font-medium text-gray-700 mb-3">2. Select your experience</label>
                    <div className="space-y-2">
                      {[
                        { value: 'junior', label: 'Junior (0-2 years)', dataExp: 'junior' },
                        { value: 'mid', label: 'Mid-level (2-5 years)', dataExp: 'mid' },
                        { value: 'senior', label: 'Senior (5+ years)', dataExp: 'senior' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="experience"
                            value={option.value}
                            data-experience={option.dataExp}
                            data-testid={`exp-${option.value}`}
                            className="experience-radio mr-3"
                            checked={selectedExperience === option.value}
                            onChange={(e) => {
                              setSelectedExperience(e.target.value);
                              setLastAction(`Selected experience: ${option.label}`);
                            }}
                          />
                          <span className="text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Bug Type Selection */}
                  <div className="bug-type-container">
                    <label className="block text-sm font-medium text-gray-700 mb-3">3. Select bug type</label>
                    <div className="space-y-2">
                      {[
                        { value: 'functional', label: 'Functional Bug' },
                        { value: 'ui', label: 'UI/UX Bug' },
                        { value: 'performance', label: 'Performance Bug' },
                        { value: 'security', label: 'Security Bug' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="bugType"
                            value={option.value}
                            data-bug-type={option.value}
                            data-testid={`bug-${option.value}`}
                            className="bug-type-radio mr-3"
                            checked={selectedBugType === option.value}
                            onChange={(e) => {
                              setSelectedBugType(e.target.value);
                              setLastAction(`Selected bug type: ${option.label}`);
                            }}
                          />
                          <span className="text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="terms-section">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        data-testid="terms-checkbox"
                        data-required="true"
                        className="terms-checkbox mr-3"
                        checked={acceptedTerms}
                        onChange={(e) => {
                          setAcceptedTerms(e.target.checked);
                          setLastAction(`Terms and conditions: ${e.target.checked ? 'Accepted' : 'Declined'}`);
                        }}
                      />
                      <span className="text-sm text-gray-700">I accept the terms and conditions</span>
                    </label>
                  </div>

                  {/* Programming Languages */}
                  <div className="languages-section">
                    <label className="block text-sm font-medium text-gray-700 mb-3">4. Select programming languages</label>
                    <div className="languages-grid grid grid-cols-2 gap-2">
                      {[
                        { value: 'java', label: 'Java' },
                        { value: 'python', label: 'Python' },
                        { value: 'javascript', label: 'JavaScript' },
                        { value: 'csharp', label: 'C#' }
                      ].map((lang) => (
                        <label key={lang.value} className="flex items-center">
                          <input
                            type="checkbox"
                            data-language={lang.value}
                            data-skill-type="programming"
                            data-testid={`lang-${lang.value}`}
                            className={`lang-checkbox-${lang.value} mr-2`}
                            checked={selectedLanguages.includes(lang.value)}
                            onChange={() => handleLanguageChange(lang.value)}
                          />
                          <span className="text-xs text-gray-700">{lang.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="remember-section">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        data-testid="remember-me"
                        data-persistence="session"
                        className="remember-checkbox mr-3"
                        checked={rememberMe}
                        onChange={(e) => {
                          setRememberMe(e.target.checked);
                          setLastAction(`Remember me: ${e.target.checked ? 'Enabled' : 'Disabled'}`);
                        }}
                      />
                      <span className="text-sm text-gray-700">Remember me</span>
                    </label>
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
                        <div><code>By.xpath("//div[@class='gender-selection']//input[@data-gender='male'][@name='gender']")</code></div>
                        <div><code>By.cssSelector(".experience-section input[data-experience='senior']:not([disabled])")</code></div>
                        <div><code>By.xpath("//div[@class='bug-type-container']//label[contains(text(),'Functional Bug')]/input")</code></div>
                        <div><code>By.cssSelector(".terms-section input[data-testid='terms-checkbox'][data-required='true']")</code></div>
                        <div><code>By.xpath("//div[@class='languages-grid']//input[@data-language='java'][@data-skill-type='programming']")</code></div>
                        <div><code>By.cssSelector(".remember-section input[data-persistence='session'][data-testid='remember-me']")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-blue-200">
                        <p className="text-xs text-blue-700 font-medium">💡 Complex radio/checkbox locators with data attributes!</p>
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
          <Link href="/practice/frame-navigation" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            Back to Practice →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}