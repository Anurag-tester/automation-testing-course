'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function SelectDropdownChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState('');
  const [selectedSuperhero, setSelectedSuperhero] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
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

  const fruits = [
    { value: 'apple', label: 'Apple', color: 'red' },
    { value: 'orange', label: 'Orange', color: 'orange' },
    { value: 'banana', label: 'Banana', color: 'yellow' },
    { value: 'mango', label: 'Mango', color: 'yellow' },
    { value: 'grape', label: 'Grape', color: 'purple' }
  ];

  const superheroes = [
    { value: 'batman', label: 'Batman', universe: 'DC' },
    { value: 'superman', label: 'Superman', universe: 'DC' },
    { value: 'spiderman', label: 'Spider-Man', universe: 'Marvel' },
    { value: 'ironman', label: 'Iron Man', universe: 'Marvel' },
    { value: 'wonderwoman', label: 'Wonder Woman', universe: 'DC' }
  ];

  const languages = [
    { value: 'java', label: 'Java', type: 'programming' },
    { value: 'python', label: 'Python', type: 'programming' },
    { value: 'javascript', label: 'JavaScript', type: 'programming' },
    { value: 'english', label: 'English', type: 'spoken' },
    { value: 'spanish', label: 'Spanish', type: 'spoken' }
  ];

  const countries = [
    { value: 'india', label: 'India', continent: 'Asia' },
    { value: 'usa', label: 'United States', continent: 'North America' },
    { value: 'uk', label: 'United Kingdom', continent: 'Europe' },
    { value: 'australia', label: 'Australia', continent: 'Oceania' },
    { value: 'brazil', label: 'Brazil', continent: 'South America' }
  ];

  const solutionCode = `// Dropdown Challenge - LetCode Style Solution
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.List;

public class DropdownChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            driver.get("http://localhost:3000/practice/select-dropdown");
            
            // Test Case 1: Select Apple using complex CSS selector
            WebElement fruitDropdown = wait.until(ExpectedConditions.elementToBeClickable(
                By.cssSelector(".fruit-selector[data-testid='fruit-dropdown'][name='fruits']"))); 
            Select fruitSelect = new Select(fruitDropdown);
            fruitSelect.selectByValue("apple");
            System.out.println("✓ Selected Apple using CSS selector with multiple attributes");
            
            // Test Case 2: Select your superhero using XPath with contains
            WebElement superheroDropdown = driver.findElement(
                By.xpath("//div[@class='superhero-section']//select[contains(@class,'hero-selector')]"));
            Select heroSelect = new Select(superheroDropdown);
            heroSelect.selectByVisibleText("Batman");
            System.out.println("✓ Selected Batman using XPath with contains() function");
            
            // Test Case 3: Select last programming language using complex locator
            WebElement languageDropdown = driver.findElement(
                By.cssSelector("select[data-category='languages'][data-type='programming']:not([disabled])"));
            Select langSelect = new Select(languageDropdown);
            List<WebElement> options = langSelect.getOptions();
            // Select last programming language option
            WebElement lastLang = driver.findElement(
                By.xpath("//select[@data-category='languages']//option[@data-lang-type='programming'][last()]"));
            lastLang.click();
            System.out.println("✓ Selected last programming language using XPath with position");
            
            // Test Case 4: Select India and print all options using nested locator
            WebElement countryDropdown = driver.findElement(
                By.xpath("//div[@class='country-selection-panel']//select[@data-region='world']"));
            Select countrySelect = new Select(countryDropdown);
            countrySelect.selectByValue("india");
            System.out.println("✓ Selected India using nested XPath locator");
            
            // Print all country options with their data attributes
            List<WebElement> countryOptions = driver.findElements(
                By.xpath("//select[@data-region='world']//option[@data-continent]"));
            System.out.println("\nAll available countries:");
            for(WebElement option : countryOptions) {
                if(!option.getAttribute("value").isEmpty()) {
                    String country = option.getText();
                    String continent = option.getAttribute("data-continent");
                    System.out.println("- " + country + " (" + continent + ")");
                }
            }
            
            // Test Case 5: Navigate multi-level dropdown hierarchy
            WebElement hierarchyDropdown = driver.findElement(
                By.cssSelector(".hierarchy-container select[data-hierarchy='nested'][data-testid='multi-level-dropdown']"));
            Select hierarchySelect = new Select(hierarchyDropdown);
            
            // Select from Testing Framework > Automation Testing
            WebElement seleniumOption = driver.findElement(
                By.xpath("//optgroup[@label='🧪 Testing Framework']//option[@value='selenium' and @data-category='automation']"));
            seleniumOption.click();
            System.out.println("✓ Selected Selenium from multi-level hierarchy");
            
            // Get all AWS services from Cloud Platforms
            List<WebElement> awsServices = driver.findElements(
                By.xpath("//select[@data-hierarchy='nested']//option[@data-level='2' and @data-cloud='aws']"));
            System.out.println("\nAWS Services available:");
            for(WebElement service : awsServices) {
                String serviceName = service.getText().trim();
                String category = service.getAttribute("data-category");
                System.out.println("- " + serviceName + " (Category: " + category + ")");
            }
            
            // Select from nested optgroup using complex locator
            WebElement reactOption = driver.findElement(
                By.xpath("//optgroup[@label='🌍 Technology Stack']//optgroup[@label='  Frontend Technologies']//option[@value='react']"));
            reactOption.click();
            System.out.println("✓ Selected React.js from nested optgroup structure");
            
            // Test Case 6: Get selected values and validate
            String selectedFruit = fruitSelect.getFirstSelectedOption().getText();
            String selectedHero = heroSelect.getFirstSelectedOption().getText();
            String selectedLang = langSelect.getFirstSelectedOption().getText();
            String selectedCountry = countrySelect.getFirstSelectedOption().getText();
            
            System.out.println("\n=== Selection Summary ===");
            System.out.println("Fruit: " + selectedFruit);
            System.out.println("Superhero: " + selectedHero);
            System.out.println("Language: " + selectedLang);
            System.out.println("Country: " + selectedCountry);
            
            // Test Case 7: Validate dropdown properties
            boolean isFruitMultiple = Boolean.parseBoolean(fruitDropdown.getAttribute("multiple"));
            boolean isCountryDisabled = !countryDropdown.isEnabled();
            
            System.out.println("\n=== Dropdown Properties ===");
            System.out.println("Fruit dropdown allows multiple: " + isFruitMultiple);
            System.out.println("Country dropdown is disabled: " + isCountryDisabled);
            
            System.out.println("\n🎉 Dropdown Challenge Completed Successfully!");
            
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
      title="Dropdown - Select Challenge"
      description="Master dropdown selections with complex locators, optgroups, and dynamic content handling."
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
                        20-25 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Dropdown Selection Mastery</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master advanced dropdown interactions with complex locators, optgroups, and dynamic content handling.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Select Apple from fruits dropdown',
                  'Select your superhero from dropdown',
                  'Select last programming language',
                  'Select India and print all options',
                  'Navigate multi-level dropdown hierarchy',
                  'Get selected values from all dropdowns',
                  'Validate dropdown properties and states'
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
                  className="flex items-center gap-2 px-3 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors text-sm"
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

          {/* Right Side - Interactive Practice Dropdowns */}
          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Dropdowns</h2>
                
                <div className="space-y-6">
                  {/* Action Status */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Last Action:</div>
                    <div className="text-sm font-medium text-blue-600">{lastAction || 'No action performed'}</div>
                  </div>

                  {/* Fruits Dropdown */}
                  <div className="fruit-selection-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">1. Select Apple</label>
                    <select 
                      className="fruit-selector w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      data-testid="fruit-dropdown"
                      name="fruits"
                      data-category="food"
                      value={selectedFruit}
                      onChange={(e) => {
                        setSelectedFruit(e.target.value);
                        setLastAction(`Selected fruit: ${e.target.options[e.target.selectedIndex].text}`);
                      }}
                    >
                      <option value="">Choose a fruit</option>
                      {fruits.map(fruit => (
                        <option key={fruit.value} value={fruit.value} data-color={fruit.color}>
                          {fruit.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Superhero Dropdown */}
                  <div className="superhero-section">
                    <label className="block text-sm font-medium text-gray-700 mb-2">2. Select your superhero</label>
                    <select 
                      className="hero-selector superhero-dropdown w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      data-testid="superhero-select"
                      name="superheroes"
                      value={selectedSuperhero}
                      onChange={(e) => {
                        setSelectedSuperhero(e.target.value);
                        setLastAction(`Selected superhero: ${e.target.options[e.target.selectedIndex].text}`);
                      }}
                    >
                      <option value="">Choose your hero</option>
                      <optgroup label="DC Universe">
                        {superheroes.filter(h => h.universe === 'DC').map(hero => (
                          <option key={hero.value} value={hero.value} data-universe={hero.universe}>
                            {hero.label}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Marvel Universe">
                        {superheroes.filter(h => h.universe === 'Marvel').map(hero => (
                          <option key={hero.value} value={hero.value} data-universe={hero.universe}>
                            {hero.label}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Language Dropdown */}
                  <div className="language-selection-area">
                    <label className="block text-sm font-medium text-gray-700 mb-2">3. Select last programming language</label>
                    <select 
                      className="language-picker w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      data-category="languages"
                      data-type="programming"
                      name="programmingLanguages"
                      value={selectedLanguage}
                      onChange={(e) => {
                        setSelectedLanguage(e.target.value);
                        setLastAction(`Selected language: ${e.target.options[e.target.selectedIndex].text}`);
                      }}
                    >
                      <option value="">Select a language</option>
                      <optgroup label="Programming Languages">
                        {languages.filter(l => l.type === 'programming').map(lang => (
                          <option key={lang.value} value={lang.value} data-lang-type={lang.type}>
                            {lang.label}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Spoken Languages">
                        {languages.filter(l => l.type === 'spoken').map(lang => (
                          <option key={lang.value} value={lang.value} data-lang-type={lang.type}>
                            {lang.label}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Country Dropdown */}
                  <div className="country-selection-panel">
                    <label className="block text-sm font-medium text-gray-700 mb-2">4. Select India and print all options</label>
                    <select 
                      className="country-selector w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      data-region="world"
                      data-testid="country-dropdown"
                      name="countries"
                      value={selectedCountry}
                      onChange={(e) => {
                        setSelectedCountry(e.target.value);
                        setLastAction(`Selected country: ${e.target.options[e.target.selectedIndex].text}`);
                      }}
                    >
                      <option value="">Choose a country</option>
                      {countries.map(country => (
                        <option key={country.value} value={country.value} data-continent={country.continent}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Multi-Level Dropdown */}
                  <div className="multi-level-section hierarchy-container">
                    <label className="block text-sm font-medium text-gray-700 mb-2">5. Select from multi-level hierarchy</label>
                    <select 
                      className="hierarchy-selector stacked-dropdown w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      data-hierarchy="nested"
                      data-testid="multi-level-dropdown"
                      name="hierarchySelection"
                      onChange={(e) => {
                        const selectedOption = e.target.options[e.target.selectedIndex];
                        const level = selectedOption.getAttribute('data-level');
                        const category = selectedOption.getAttribute('data-category');
                        setLastAction(`Selected: ${selectedOption.text} (Level: ${level}, Category: ${category})`);
                      }}
                    >
                      <option value="">Select from hierarchy</option>
                      
                      <optgroup label="🌍 Technology Stack" data-group="tech">
                        <optgroup label="  Frontend Technologies">
                          <option value="react" data-level="2" data-category="frontend" data-tech-type="framework">    React.js</option>
                          <option value="angular" data-level="2" data-category="frontend" data-tech-type="framework">    Angular</option>
                          <option value="vue" data-level="2" data-category="frontend" data-tech-type="framework">    Vue.js</option>
                        </optgroup>
                        <optgroup label="  Backend Technologies">
                          <option value="nodejs" data-level="2" data-category="backend" data-tech-type="runtime">    Node.js</option>
                          <option value="spring" data-level="2" data-category="backend" data-tech-type="framework">    Spring Boot</option>
                          <option value="django" data-level="2" data-category="backend" data-tech-type="framework">    Django</option>
                        </optgroup>
                        <optgroup label="  Database Technologies">
                          <option value="mysql" data-level="2" data-category="database" data-tech-type="relational">    MySQL</option>
                          <option value="mongodb" data-level="2" data-category="database" data-tech-type="nosql">    MongoDB</option>
                          <option value="redis" data-level="2" data-category="database" data-tech-type="cache">    Redis</option>
                        </optgroup>
                      </optgroup>
                      
                      <optgroup label="🧪 Testing Framework" data-group="testing">
                        <optgroup label="  Automation Testing">
                          <option value="selenium" data-level="2" data-category="automation" data-test-type="web">    Selenium WebDriver</option>
                          <option value="cypress" data-level="2" data-category="automation" data-test-type="web">    Cypress</option>
                          <option value="playwright" data-level="2" data-category="automation" data-test-type="web">    Playwright</option>
                        </optgroup>
                        <optgroup label="  Unit Testing">
                          <option value="junit" data-level="2" data-category="unit" data-test-type="java">    JUnit 5</option>
                          <option value="testng" data-level="2" data-category="unit" data-test-type="java">    TestNG</option>
                          <option value="jest" data-level="2" data-category="unit" data-test-type="javascript">    Jest</option>
                        </optgroup>
                        <optgroup label="  API Testing">
                          <option value="restassured" data-level="2" data-category="api" data-test-type="java">    REST Assured</option>
                          <option value="postman" data-level="2" data-category="api" data-test-type="tool">    Postman</option>
                          <option value="karate" data-level="2" data-category="api" data-test-type="bdd">    Karate DSL</option>
                        </optgroup>
                      </optgroup>
                      
                      <optgroup label="☁️ Cloud Platforms" data-group="cloud">
                        <optgroup label="  AWS Services">
                          <option value="ec2" data-level="2" data-category="compute" data-cloud="aws">    EC2 Instances</option>
                          <option value="lambda" data-level="2" data-category="serverless" data-cloud="aws">    Lambda Functions</option>
                          <option value="rds" data-level="2" data-category="database" data-cloud="aws">    RDS Database</option>
                        </optgroup>
                        <optgroup label="  Azure Services">
                          <option value="vm" data-level="2" data-category="compute" data-cloud="azure">    Virtual Machines</option>
                          <option value="functions" data-level="2" data-category="serverless" data-cloud="azure">    Azure Functions</option>
                          <option value="cosmosdb" data-level="2" data-category="database" data-cloud="azure">    Cosmos DB</option>
                        </optgroup>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Locator Information */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="text-xs text-orange-800 space-y-1">
                        <div><code>By.cssSelector(".fruit-selector[data-testid='fruit-dropdown'][name='fruits']")</code></div>
                        <div><code>By.xpath("//div[@class='superhero-section']//select[contains(@class,'hero-selector')]")</code></div>
                        <div><code>By.cssSelector("select[data-category='languages'][data-type='programming']:not([disabled])")</code></div>
                        <div><code>By.xpath("//div[@class='country-selection-panel']//select[@data-region='world']")</code></div>
                        <div><code>By.cssSelector(".hierarchy-container select[data-hierarchy='nested'][data-testid='multi-level-dropdown']")</code></div>
                        <div><code>By.xpath("//optgroup[@label='🧪 Testing Framework']//option[@data-category='automation']")</code></div>
                        <div><code>By.xpath("//select[@data-hierarchy='nested']//option[@data-level='2' and @data-cloud='aws']")</code></div>
                        <div><code>By.xpath("//select[@data-category='languages']//option[@data-lang-type='programming'][last()]")</code></div>
                        <div><code>By.xpath("//select[@data-region='world']//option[@data-continent]")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-orange-200">
                        <p className="text-xs text-orange-700 font-medium">💡 Advanced locators with optgroups and data attributes!</p>
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
          <Link href="/practice/button-click" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice/alert-dialog" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}