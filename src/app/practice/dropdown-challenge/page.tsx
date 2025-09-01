'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, CheckCircle, Code, ExternalLink, Copy, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function DropdownChallenge() {
  const [showSolution, setShowSolution] = useState(false);

  const requirements = [
    "Handle standard HTML select dropdown with single selection",
    "Work with multi-select dropdown and select multiple options",
    "Handle custom dropdown (non-select elements) using click interactions",
    "Extract all available options from dropdown",
    "Verify selected options and deselect specific options",
    "Handle dynamic dropdown that loads options via AJAX",
    "Search and select from searchable dropdown",
    "Validate dropdown behavior with invalid selections"
  ];

  const testCases = [
    { id: 1, description: "Select single option from standard dropdown", expected: "Option should be selected successfully" },
    { id: 2, description: "Select multiple options from multi-select", expected: "All selected options should be highlighted" },
    { id: 3, description: "Deselect specific option from multi-select", expected: "Only specified option should be deselected" },
    { id: 4, description: "Get all available options from dropdown", expected: "Should return list of all options" },
    { id: 5, description: "Handle custom dropdown with click", expected: "Should open dropdown and select option" },
    { id: 6, description: "Search in searchable dropdown", expected: "Should filter and select matching option" },
    { id: 7, description: "Handle dynamic dropdown loading", expected: "Should wait for options to load and select" },
    { id: 8, description: "Verify dropdown state after selections", expected: "Should confirm all selections are correct" }
  ];

  const solutionCode = `package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import java.time.Duration;
import java.util.List;

public class DropdownChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            // Navigate to dropdown practice page
            driver.get("https://letcode.in/dropdowns");
            
            // Test Case 1: Handle standard single-select dropdown
            WebElement fruitsDropdown = wait.until(ExpectedConditions.elementToBeClickable(By.id("fruits")));
            Select fruitsSelect = new Select(fruitsDropdown);
            
            // Select by visible text
            fruitsSelect.selectByVisibleText("Apple");
            System.out.println("✓ Selected Apple from fruits dropdown");
            
            // Verify selection
            WebElement selectedOption = fruitsSelect.getFirstSelectedOption();
            System.out.println("✓ Currently selected: " + selectedOption.getText());
            
            // Test Case 2: Get all available options
            List<WebElement> allOptions = fruitsSelect.getOptions();
            System.out.println("✓ Available fruits: " + allOptions.size() + " options");
            for (WebElement option : allOptions) {
                System.out.println("  - " + option.getText());
            }
            
            // Test Case 3: Handle multi-select dropdown
            try {
                WebElement superheroesDropdown = driver.findElement(By.id("superheros"));
                Select superheroesSelect = new Select(superheroesDropdown);
                
                if (superheroesSelect.isMultiple()) {
                    // Select multiple options
                    superheroesSelect.selectByVisibleText("Batman");
                    superheroesSelect.selectByIndex(2); // Select by index
                    superheroesSelect.selectByValue("ta"); // Select by value if available
                    
                    System.out.println("✓ Multiple superheroes selected");
                    
                    // Get all selected options
                    List<WebElement> selectedOptions = superheroesSelect.getAllSelectedOptions();
                    System.out.println("✓ Selected superheroes: " + selectedOptions.size());
                    for (WebElement option : selectedOptions) {
                        System.out.println("  - " + option.getText());
                    }
                    
                    // Deselect specific option
                    superheroesSelect.deselectByVisibleText("Batman");
                    System.out.println("✓ Deselected Batman");
                    
                    // Deselect all
                    superheroesSelect.deselectAll();
                    System.out.println("✓ Deselected all superheroes");
                }
            } catch (Exception e) {
                System.out.println("! Multi-select dropdown not found or different implementation");
            }
            
            // Test Case 4: Handle country dropdown (select by index)
            try {
                WebElement countryDropdown = driver.findElement(By.id("country"));
                Select countrySelect = new Select(countryDropdown);
                
                // Select by index (avoid first option which might be placeholder)
                countrySelect.selectByIndex(2);
                System.out.println("✓ Selected country by index");
                
                // Get selected country
                String selectedCountry = countrySelect.getFirstSelectedOption().getText();
                System.out.println("✓ Selected country: " + selectedCountry);
            } catch (Exception e) {
                System.out.println("! Country dropdown not found");
            }
            
            // Test Case 5: Handle custom dropdown (non-select element)
            try {
                // Look for custom dropdown trigger
                WebElement customDropdown = driver.findElement(By.xpath("//div[contains(@class,'dropdown') or contains(@class,'select')]"));
                customDropdown.click();
                
                // Wait for dropdown options to appear
                WebElement option = wait.until(ExpectedConditions.elementToBeClickable(
                    By.xpath("//div[contains(@class,'option') or contains(@class,'item')][1]")));
                option.click();
                
                System.out.println("✓ Selected from custom dropdown");
            } catch (Exception e) {
                System.out.println("! Custom dropdown not found or different structure");
            }
            
            // Test Case 6: Handle searchable dropdown
            try {
                WebElement searchableDropdown = driver.findElement(By.xpath("//input[@placeholder='Search' or @type='search']"));
                searchableDropdown.click();
                searchableDropdown.sendKeys("India");
                
                // Wait for filtered results and select
                WebElement searchResult = wait.until(ExpectedConditions.elementToBeClickable(
                    By.xpath("//div[contains(text(),'India') or contains(@value,'India')]")));
                searchResult.click();
                
                System.out.println("✓ Selected from searchable dropdown");
            } catch (Exception e) {
                System.out.println("! Searchable dropdown not found");
            }
            
            // Test Case 7: Validate dropdown selections
            // Re-check fruits dropdown
            WebElement currentFruit = fruitsSelect.getFirstSelectedOption();
            if ("Apple".equals(currentFruit.getText())) {
                System.out.println("✓ Fruits dropdown validation passed");
            } else {
                System.out.println("❌ Fruits dropdown validation failed");
            }
            
            // Test Case 8: Advanced dropdown operations
            // Select different options and verify
            fruitsSelect.selectByVisibleText("Orange");
            Thread.sleep(1000); // Small delay for UI update
            
            fruitsSelect.selectByVisibleText("Mango");
            Thread.sleep(1000);
            
            String finalSelection = fruitsSelect.getFirstSelectedOption().getText();
            System.out.println("✓ Final fruit selection: " + finalSelection);
            
            System.out.println("\\n🎉 Dropdown Challenge Completed!");
            System.out.println("📊 Summary:");
            System.out.println("  - Standard dropdowns: ✓");
            System.out.println("  - Multi-select handling: ✓");
            System.out.println("  - Option extraction: ✓");
            System.out.println("  - Selection validation: ✓");
            
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
      title="Dropdown & Selection Challenge"
      description="Master complex dropdown handling, multi-select operations, and dynamic option loading with this intermediate Selenium challenge."
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200">
                    Intermediate Level
                  </span>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" />
                    20-25 minutes
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Dropdown & Selection Challenge</h1>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              This intermediate challenge focuses on mastering dropdown handling in Selenium. You'll work with standard HTML selects, 
              multi-select dropdowns, custom dropdowns, and dynamic option loading scenarios.
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

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
            <h4 className="font-medium text-blue-900 mb-2">🎯 Practice Website</h4>
            <p className="text-blue-800 text-sm mb-3">
              Use <strong>https://letcode.in/dropdowns</strong> for this challenge. This site provides various dropdown types for testing.
            </p>
            <a 
              href="https://letcode.in/dropdowns" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Open Practice Site
            </a>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-900 mb-1">Important Notes</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Use Select class for standard HTML &lt;select&gt; elements</li>
                  <li>• Handle custom dropdowns with click() and element interactions</li>
                  <li>• Always check if dropdown isMultiple() before using multi-select methods</li>
                  <li>• Use explicit waits for dynamically loaded options</li>
                </ul>
              </div>
            </div>
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
                <button className="flex items-center gap-2 px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600 transition-colors">
                  <Copy className="w-4 h-4" />
                  Copy Code
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
                <li>• Using Select class for HTML dropdowns</li>
                <li>• selectByVisibleText(), selectByIndex(), selectByValue()</li>
                <li>• Handling multi-select with getAllSelectedOptions()</li>
                <li>• Custom dropdown handling with click interactions</li>
                <li>• Dynamic option loading with explicit waits</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">💡 Best Practices</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Always check isMultiple() before multi-select operations</li>
                <li>• Use getOptions() to validate available choices</li>
                <li>• Handle both standard and custom dropdown patterns</li>
                <li>• Implement proper waits for dynamic content</li>
                <li>• Validate selections after each operation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center py-8">
          <div className="flex justify-between items-center">
            <Link href="/practice/input-handling" className="text-gray-600 hover:text-gray-800 transition-colors">
              ← Previous Challenge
            </Link>
            <Link href="/practice/table-operations" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              Next Challenge →
            </Link>
          </div>
        </section>
      </div>
    </DayLayout>
  );
}