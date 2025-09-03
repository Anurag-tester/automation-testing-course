'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Target, Clock, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function TableSimpleChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const tableData = [
    { name: 'Raj', email: 'raj@example.com', age: 25, salary: 50000 },
    { name: 'John', email: 'john@example.com', age: 30, salary: 60000 },
    { name: 'Alice', email: 'alice@example.com', age: 28, salary: 55000 },
    { name: 'Bob', email: 'bob@example.com', age: 35, salary: 70000 },
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const solutionCode = `// Table Simple Challenge - Basic Table Operations
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.List;

public class TableSimpleChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        
        try {
            driver.get("http://localhost:3000/practice/table-operations");
            
            // Test Case 1: Get table headers
            List<WebElement> headers = driver.findElements(By.cssSelector("table thead th"));
            System.out.println("Table Headers:");
            for (WebElement header : headers) {
                System.out.println("- " + header.getText());
            }
            
            // Test Case 2: Get all rows
            List<WebElement> rows = driver.findElements(By.cssSelector("table tbody tr"));
            System.out.println("\\nTotal rows: " + rows.size());
            
            // Test Case 3: Get specific cell data
            WebElement firstRowSecondCell = driver.findElement(
                By.xpath("//table/tbody/tr[1]/td[2]")
            );
            System.out.println("First row, second column: " + firstRowSecondCell.getText());
            
            // Test Case 4: Find row by name and get email
            WebElement rajEmail = driver.findElement(
                By.xpath("//table/tbody/tr[td[text()='Raj']]/td[2]")
            );
            System.out.println("Raj's email: " + rajEmail.getText());
            
            // Test Case 5: Get all data from specific column
            List<WebElement> nameColumn = driver.findElements(By.xpath("//table/tbody/tr/td[1]"));
            System.out.println("\\nAll names:");
            for (WebElement name : nameColumn) {
                System.out.println("- " + name.getText());
            }
            
            // Test Case 6: Find highest salary
            List<WebElement> salaryColumn = driver.findElements(By.xpath("//table/tbody/tr/td[4]"));
            int maxSalary = 0;
            String personWithMaxSalary = "";
            
            for (int i = 0; i < salaryColumn.size(); i++) {
                int salary = Integer.parseInt(salaryColumn.get(i).getText());
                if (salary > maxSalary) {
                    maxSalary = salary;
                    WebElement nameCell = driver.findElement(
                        By.xpath("//table/tbody/tr[" + (i+1) + "]/td[1]")
                    );
                    personWithMaxSalary = nameCell.getText();
                }
            }
            System.out.println("\\nHighest salary: " + personWithMaxSalary + " - " + maxSalary);
            
            System.out.println("\\n🎉 Table Simple Challenge Completed!");
            
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
      title="Table - Simple Challenge"
      description="Master basic table operations and data extraction."
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
                    <h1 className="text-xl font-bold text-gray-900">Basic Table Operations</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master table parsing, row/column navigation, and data extraction.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Extract table headers',
                  'Count total rows',
                  'Get specific cell data',
                  'Find row by text and extract data',
                  'Extract entire column data',
                  'Find maximum/minimum values'
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

            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Selenium Solution</h2>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="flex items-center gap-2 px-3 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors text-sm"
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
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Table</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Employee Data Table</label>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300" id="simple-table">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Salary</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-2">{row.name}</td>
                              <td className="border border-gray-300 px-4 py-2">{row.email}</td>
                              <td className="border border-gray-300 px-4 py-2">{row.age}</td>
                              <td className="border border-gray-300 px-4 py-2">{row.salary}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-medium text-blue-900 mb-2">💡 Table Navigation Tips</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• <strong>Headers:</strong> table thead th</li>
                      <li>• <strong>All Rows:</strong> table tbody tr</li>
                      <li>• <strong>Specific Cell:</strong> tr[1]/td[2]</li>
                      <li>• <strong>Find by Text:</strong> tr[td[text()='value']]</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-sky-50 rounded-lg">
                      <div className="text-xs text-sky-800 space-y-1">
                        <div><code>By.cssSelector("table thead th")</code></div>
                        <div><code>By.cssSelector("table tbody tr")</code></div>
                        <div><code>By.xpath("//table/tbody/tr[1]/td[2]")</code></div>
                        <div><code>By.xpath("//tr[td[text()='Raj']]/td[2]")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-sky-200">
                        <p className="text-xs text-sky-700 font-medium">💡 Use XPath for complex table navigation!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link href="/practice/waits-challenge" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice/advanced-table" className="text-gray-600 hover:text-gray-800 transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}