'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Target, Clock, Eye, EyeOff, Copy, CheckCircle, Upload, Download, FileText } from 'lucide-react';
import { useState, useRef } from 'react';

export default function FileManagementChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleDownload = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const solutionCode = `// File Management Challenge - Upload/Download Operations
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.io.File;
import java.util.List;

public class FileManagementChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            driver.get("http://localhost:3000/practice/file-management");
            
            // Test Case 1: Upload single file
            String filePath = System.getProperty("user.dir") + "/test-files/sample.txt";
            
            // Create test file if it doesn't exist
            File testFile = new File(filePath);
            testFile.getParentFile().mkdirs();
            if (!testFile.exists()) {
                testFile.createNewFile();
                java.nio.file.Files.write(testFile.toPath(), "Test file content".getBytes());
            }
            
            WebElement fileInput = driver.findElement(By.id("file-upload"));
            fileInput.sendKeys(filePath);
            
            System.out.println("✓ Single file uploaded");
            
            // Test Case 2: Upload multiple files
            WebElement multiFileInput = driver.findElement(By.id("multi-file-upload"));
            String file1 = System.getProperty("user.dir") + "/test-files/file1.txt";
            String file2 = System.getProperty("user.dir") + "/test-files/file2.txt";
            
            // Create multiple test files
            new File(file1).createNewFile();
            new File(file2).createNewFile();
            
            multiFileInput.sendKeys(file1 + "\\n" + file2);
            
            System.out.println("✓ Multiple files uploaded");
            
            // Test Case 3: Verify uploaded files list
            List<WebElement> uploadedFiles = driver.findElements(By.cssSelector(".uploaded-file"));
            System.out.println("Uploaded files count: " + uploadedFiles.size());
            
            // Test Case 4: Download file
            WebElement downloadBtn = driver.findElement(By.cssSelector("[data-testid='download-sample']"));
            downloadBtn.click();
            
            // Wait for download to complete (check downloads folder)
            Thread.sleep(2000);
            System.out.println("✓ File download initiated");
            
            // Test Case 5: Remove uploaded file
            WebElement removeBtn = driver.findElement(By.cssSelector(".remove-file-btn"));
            if (removeBtn.isDisplayed()) {
                removeBtn.click();
                System.out.println("✓ File removed from list");
            }
            
            // Test Case 6: Validate file types
            WebElement invalidFileInput = driver.findElement(By.id("restricted-upload"));
            String invalidFile = System.getProperty("user.dir") + "/test-files/test.exe";
            
            try {
                invalidFileInput.sendKeys(invalidFile);
                // Check for validation message
                WebElement errorMsg = wait.until(
                    ExpectedConditions.visibilityOfElementLocated(By.className("error-message"))
                );
                System.out.println("✓ File type validation: " + errorMsg.getText());
            } catch (Exception e) {
                System.out.println("No file type validation found");
            }
            
            // Test Case 7: Check file size limits
            WebElement fileSizeInfo = driver.findElement(By.className("file-size-info"));
            System.out.println("File size limit: " + fileSizeInfo.getText());
            
            System.out.println("\\n🎉 File Management Challenge Completed!");
            
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
      title="File - Management Challenge"
      description="Master file upload, download, and validation operations."
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
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-violet-100 text-violet-800 text-xs font-medium rounded-full">
                        Expert
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="w-3 h-3" />
                        30-35 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">File Upload & Download</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master file upload, download, validation, and file management operations.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Upload single file',
                  'Upload multiple files',
                  'Verify uploaded files list',
                  'Download files',
                  'Remove uploaded files',
                  'Validate file types',
                  'Check file size limits'
                ].map((testCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-xs font-bold">
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

          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice File Operations</h2>
                
                <div className="space-y-6">
                  {/* Single File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Single File Upload</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        ref={fileInputRef}
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="text-violet-600 hover:text-violet-700 font-medium"
                      >
                        Choose File
                      </button>
                      <p className="text-xs text-gray-500 mt-1">Max size: 10MB</p>
                    </div>
                  </div>

                  {/* Multiple File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Multiple File Upload</label>
                    <input
                      id="multi-file-upload"
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                  </div>

                  {/* Restricted Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Restricted Upload (Images Only)</label>
                    <input
                      id="restricted-upload"
                      type="file"
                      accept="image/*"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                    <p className="file-size-info text-xs text-gray-500 mt-1">Only image files allowed (JPG, PNG, GIF)</p>
                  </div>

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Uploaded Files</label>
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="uploaded-file flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-gray-500" />
                              <span className="text-sm">{file.name}</span>
                              <span className="text-xs text-gray-500">({(file.size / 1024).toFixed(1)} KB)</span>
                            </div>
                            <button
                              onClick={() => removeFile(index)}
                              className="remove-file-btn text-red-600 hover:text-red-700 text-xs"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Download Section */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Download Files</label>
                    <div className="space-y-2">
                      <button
                        data-testid="download-sample"
                        onClick={() => handleDownload('sample.txt', 'This is a sample file content for testing download functionality.')}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full"
                      >
                        <Download className="w-4 h-4" />
                        Download Sample.txt
                      </button>
                      <button
                        onClick={() => handleDownload('data.csv', 'Name,Age,City\nJohn,25,New York\nJane,30,Los Angeles')}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors w-full"
                      >
                        <Download className="w-4 h-4" />
                        Download Data.csv
                      </button>
                    </div>
                  </div>

                  {/* File Validation Info */}
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-medium text-yellow-900 mb-2">📋 File Upload Rules</h3>
                    <ul className="text-yellow-800 text-sm space-y-1">
                      <li>• Maximum file size: 10MB</li>
                      <li>• Allowed types: PDF, DOC, TXT, JPG, PNG</li>
                      <li>• Multiple files supported</li>
                      <li>• Files are validated on selection</li>
                    </ul>
                  </div>
                </div>

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
                        <div><code>By.id("file-upload")</code></div>
                        <div><code>By.id("multi-file-upload")</code></div>
                        <div><code>By.cssSelector(".uploaded-file")</code></div>
                        <div><code>By.cssSelector("[data-testid='download-sample']")</code></div>
                        <div><code>By.cssSelector(".remove-file-btn")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-violet-200">
                        <p className="text-xs text-violet-700 font-medium">💡 Use sendKeys() with file path for uploads!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link href="/practice/forms-allinone" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice/shadow-dom" className="text-gray-600 hover:text-gray-800 transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}