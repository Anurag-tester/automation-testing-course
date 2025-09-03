'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Target, Clock, Eye, EyeOff, Copy, CheckCircle, ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function TableAdvancedChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState('');

  const originalData = [
    { id: 1, name: 'John Doe', position: 'Developer', salary: 75000, department: 'Engineering' },
    { id: 2, name: 'Jane Smith', position: 'Designer', salary: 65000, department: 'Design' },
    { id: 3, name: 'Bob Johnson', position: 'Manager', salary: 85000, department: 'Engineering' },
    { id: 4, name: 'Alice Brown', position: 'Analyst', salary: 60000, department: 'Analytics' },
    { id: 5, name: 'Charlie Wilson', position: 'Developer', salary: 70000, department: 'Engineering' },
    { id: 6, name: 'Diana Davis', position: 'Designer', salary: 68000, department: 'Design' },
    { id: 7, name: 'Eve Miller', position: 'QA Engineer', salary: 62000, department: 'Quality' },
    { id: 8, name: 'Frank Garcia', position: 'DevOps', salary: 80000, department: 'Engineering' },
  ];

  const itemsPerPage = 3;

  const filteredData = originalData.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const aVal = a[sortColumn as keyof typeof a];
    const bVal = b[sortColumn as keyof typeof b];
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    const aStr = aVal.toString().toLowerCase();
    const bStr = bVal.toString().toLowerCase();
    
    if (sortDirection === 'asc') {
      return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
    } else {
      return aStr > bStr ? -1 : aStr < bStr ? 1 : 0;
    }
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const solutionCode = `// Table Advanced Challenge - Dynamic Table Operations
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.List;

public class TableAdvancedChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            driver.get("http://localhost:3000/practice/advanced-table");
            
            // Test Case 1: Filter table data
            WebElement filterInput = driver.findElement(By.id("table-filter"));
            filterInput.clear();
            filterInput.sendKeys("Developer");
            
            // Wait for filter to apply
            Thread.sleep(1000);
            
            List<WebElement> filteredRows = driver.findElements(By.cssSelector("tbody tr"));
            System.out.println("Filtered rows count: " + filteredRows.size());
            
            // Test Case 2: Sort by column (Name)
            WebElement nameHeader = driver.findElement(By.cssSelector("th[data-column='name']"));
            nameHeader.click();
            
            // Wait for sort to apply
            Thread.sleep(500);
            
            List<WebElement> nameColumn = driver.findElements(By.xpath("//tbody/tr/td[2]"));
            System.out.println("\\nSorted names:");
            for (WebElement name : nameColumn) {
                System.out.println("- " + name.getText());
            }
            
            // Test Case 3: Sort by salary (descending)
            WebElement salaryHeader = driver.findElement(By.cssSelector("th[data-column='salary']"));
            salaryHeader.click(); // First click - ascending
            salaryHeader.click(); // Second click - descending
            
            Thread.sleep(500);
            
            List<WebElement> salaryColumn = driver.findElements(By.xpath("//tbody/tr/td[4]"));
            System.out.println("\\nSalaries (descending):");
            for (WebElement salary : salaryColumn) {
                System.out.println("- " + salary.getText());
            }
            
            // Test Case 4: Pagination navigation
            WebElement nextPageBtn = driver.findElement(By.cssSelector("[data-testid='next-page']"));
            if (nextPageBtn.isEnabled()) {
                nextPageBtn.click();
                Thread.sleep(500);
                System.out.println("\\nNavigated to next page");
            }
            
            // Test Case 5: Go to specific page
            WebElement page1Btn = driver.findElement(By.cssSelector("[data-page='1']"));
            page1Btn.click();
            Thread.sleep(500);
            
            // Test Case 6: Clear filter and verify total count
            filterInput.clear();
            Thread.sleep(1000);
            
            List<WebElement> allRows = driver.findElements(By.cssSelector("tbody tr"));
            System.out.println("\\nTotal rows after clearing filter: " + allRows.size());
            
            // Test Case 7: Find highest salary employee
            salaryHeader.click(); // Sort by salary descending
            salaryHeader.click();
            Thread.sleep(500);
            
            WebElement highestSalaryRow = driver.findElement(By.cssSelector("tbody tr:first-child"));
            String employeeName = highestSalaryRow.findElement(By.xpath("./td[2]")).getText();
            String salary = highestSalaryRow.findElement(By.xpath("./td[4]")).getText();
            
            System.out.println("\\nHighest paid employee: " + employeeName + " - " + salary);
            
            System.out.println("\\n🎉 Table Advanced Challenge Completed!");
            
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
      title="Table - Advanced Challenge"
      description="Master dynamic tables with sorting, filtering, and pagination."
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
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                        Expert
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="w-3 h-3" />
                        35-40 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Dynamic Table Operations</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master dynamic tables with sorting, filtering, and pagination.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Filter table data by text',
                  'Sort columns ascending/descending',
                  'Navigate through pagination',
                  'Handle dynamic row counts',
                  'Verify sort order',
                  'Clear filters and reset table'
                ].map((testCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                  className="flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm"
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
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Advanced Table</h2>
                
                <div className="space-y-6">
                  {/* Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Filter Table</label>
                    <input
                      id="table-filter"
                      type="text"
                      placeholder="Search employees..."
                      value={filterText}
                      onChange={(e) => setFilterText(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300" id="advanced-table">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-3 py-2 text-left">ID</th>
                          <th 
                            className="border border-gray-300 px-3 py-2 text-left cursor-pointer hover:bg-gray-200"
                            data-column="name"
                            onClick={() => handleSort('name')}
                          >
                            <div className="flex items-center gap-1">
                              Name
                              {sortColumn === 'name' && (
                                sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </th>
                          <th className="border border-gray-300 px-3 py-2 text-left">Position</th>
                          <th 
                            className="border border-gray-300 px-3 py-2 text-left cursor-pointer hover:bg-gray-200"
                            data-column="salary"
                            onClick={() => handleSort('salary')}
                          >
                            <div className="flex items-center gap-1">
                              Salary
                              {sortColumn === 'salary' && (
                                sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </th>
                          <th className="border border-gray-300 px-3 py-2 text-left">Department</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedData.map((row) => (
                          <tr key={row.id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-3 py-2">{row.id}</td>
                            <td className="border border-gray-300 px-3 py-2">{row.name}</td>
                            <td className="border border-gray-300 px-3 py-2">{row.position}</td>
                            <td className="border border-gray-300 px-3 py-2">${row.salary.toLocaleString()}</td>
                            <td className="border border-gray-300 px-3 py-2">{row.department}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedData.length)} of {sortedData.length}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        data-testid="prev-page"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Previous
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          data-page={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-1 border rounded ${
                            currentPage === page
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        data-testid="next-page"
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <div className="text-xs text-indigo-800 space-y-1">
                        <div><code>By.id("table-filter")</code></div>
                        <div><code>By.cssSelector("th[data-column='name']")</code></div>
                        <div><code>By.cssSelector("[data-testid='next-page']")</code></div>
                        <div><code>By.cssSelector("[data-page='1']")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-indigo-200">
                        <p className="text-xs text-indigo-700 font-medium">💡 Handle dynamic content with waits!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link href="/practice/table-operations" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice/calendar-challenge" className="text-gray-600 hover:text-gray-800 transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}