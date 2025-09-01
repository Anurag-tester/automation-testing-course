'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle, ArrowUpDown } from 'lucide-react';
import { useState } from 'react';

export default function SortChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [items, setItems] = useState(['Item 4', 'Item 1', 'Item 3', 'Item 2']);
  const [numbers, setNumbers] = useState([5, 2, 8, 1, 9, 3]);
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Low Priority Task', priority: 'low' },
    { id: 2, name: 'High Priority Task', priority: 'high' },
    { id: 3, name: 'Medium Priority Task', priority: 'medium' },
    { id: 4, name: 'Critical Task', priority: 'critical' }
  ]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDragStart = (e: React.DragEvent, index: number, type: string) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', `${type}-${index}`);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, index: number, type: string) => {
    e.preventDefault();
    const dragData = e.dataTransfer.getData('text/plain');
    if (!dragData.startsWith(type)) return;
    
    const draggedIdx = parseInt(dragData.split('-')[1]);
    if (draggedIdx === index) return;
    
    if (type === 'items') {
      const newItems = [...items];
      const draggedItem = newItems[draggedIdx];
      newItems.splice(draggedIdx, 1);
      newItems.splice(index, 0, draggedItem);
      setItems(newItems);
    } else if (type === 'numbers') {
      const newNumbers = [...numbers];
      const draggedNumber = newNumbers[draggedIdx];
      newNumbers.splice(draggedIdx, 1);
      newNumbers.splice(index, 0, draggedNumber);
      setNumbers(newNumbers);
    } else if (type === 'tasks') {
      const newTasks = [...tasks];
      const draggedTask = newTasks[draggedIdx];
      newTasks.splice(draggedIdx, 1);
      newTasks.splice(index, 0, draggedTask);
      setTasks(newTasks);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-gray-100 border-gray-300';
      case 'medium': return 'bg-yellow-100 border-yellow-300';
      case 'high': return 'bg-orange-100 border-orange-300';
      case 'critical': return 'bg-red-100 border-red-300';
      default: return 'bg-gray-100 border-gray-300';
    }
  };

  const solutionCode = `// Sort Challenge - Sortable Elements Solution
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.List;

public class SortChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        Actions actions = new Actions(driver);
        
        try {
            driver.get("http://localhost:3000/practice/sort-aui3");
            
            // Test Case 1: Sort basic list items
            List<WebElement> items = driver.findElements(By.cssSelector("ul#sortable-list li"));
            WebElement firstItem = items.get(0);
            WebElement thirdItem = items.get(2);
            actions.dragAndDrop(firstItem, thirdItem).perform();
            System.out.println("✓ Sorted basic list items");
            
            // Test Case 2: Sort numbers in ascending order
            List<WebElement> numberItems = driver.findElements(By.cssSelector("#number-sort-list li"));
            WebElement number5 = driver.findElement(By.cssSelector("[data-number='5']"));
            WebElement number1 = driver.findElement(By.cssSelector("[data-number='1']"));
            actions.dragAndDrop(number5, number1).perform();
            System.out.println("✓ Sorted numbers");
            
            // Test Case 3: Sort priority tasks
            List<WebElement> taskItems = driver.findElements(By.cssSelector("#priority-task-list li"));
            WebElement criticalTask = driver.findElement(By.cssSelector("[data-priority='critical']"));
            WebElement lowTask = driver.findElement(By.cssSelector("[data-priority='low']"));
            actions.dragAndDrop(criticalTask, lowTask).perform();
            System.out.println("✓ Sorted priority tasks");
            
            // Test Case 4: Verify sort order
            List<WebElement> sortedItems = driver.findElements(By.className("sortable-item"));
            for(int i = 0; i < sortedItems.size(); i++) {
                String itemText = sortedItems.get(i).getText();
                System.out.println("Position " + i + ": " + itemText);
            }
            
            System.out.println("\\n🎉 Sort Challenge Completed Successfully!");
            System.out.println("📋 All sorting operations tested with drag and drop");
            
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
      title="Sort - AUI 3 Challenge"
      description="Master sorting and reordering elements with drag and drop operations."
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
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                        Expert
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="w-3 h-3" />
                        20-25 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Sorting & Reordering</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Practice sorting and reordering elements with drag and drop operations.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Sort basic list items by dragging',
                  'Sort numbers in ascending order',
                  'Sort priority tasks by importance',
                  'Verify final sort order'
                ].map((testCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">
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

          {/* Right Side - Interactive Practice */}
          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Sorting</h2>
                
                <div className="space-y-6">
                  {/* Basic Sortable List */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">1. Basic Sortable List</label>
                    <ul id="sortable-list" className="space-y-2">
                      {items.map((item, index) => (
                        <li
                          key={`${item}-${index}`}
                          className="sortable-item flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg cursor-move hover:bg-blue-100"
                          draggable
                          onDragStart={(e) => handleDragStart(e, index, 'items')}
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, index, 'items')}
                          onDragEnd={handleDragEnd}
                          data-index={index}
                          data-testid={`sortable-item-${index}`}
                        >
                          <ArrowUpDown className="w-4 h-4 mr-3 text-gray-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Numbered List Sorting */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">2. Number Sorting</label>
                    <ul id="number-sort-list" className="flex gap-2 flex-wrap">
                      {numbers.map((number, index) => (
                        <li
                          key={`${number}-${index}`}
                          className="w-12 h-12 bg-green-100 border border-green-300 rounded-lg flex items-center justify-center cursor-move hover:bg-green-200 font-bold"
                          draggable
                          onDragStart={(e) => handleDragStart(e, index, 'numbers')}
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, index, 'numbers')}
                          onDragEnd={handleDragEnd}
                          data-number={number}
                          data-testid={`number-${number}`}
                        >
                          {number}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Priority Task Sorting */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">3. Priority Task Sorting</label>
                    <ul id="priority-task-list" className="space-y-2">
                      {tasks.map((task, index) => (
                        <li
                          key={`${task.id}-${index}`}
                          className={`priority-task flex items-center p-3 border rounded-lg cursor-move hover:opacity-80 ${getPriorityColor(task.priority)}`}
                          draggable
                          onDragStart={(e) => handleDragStart(e, index, 'tasks')}
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, index, 'tasks')}
                          onDragEnd={handleDragEnd}
                          data-priority={task.priority}
                          data-testid={`task-${task.priority}`}
                        >
                          <ArrowUpDown className="w-4 h-4 mr-3 text-gray-400" />
                          <div>
                            <span className="font-medium">{task.name}</span>
                            <span className="ml-2 px-2 py-1 bg-white rounded text-xs">
                              {task.priority}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Locator Information */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="text-xs text-purple-800 space-y-1">
                        <div><code>By.cssSelector("ul#sortable-list li")</code></div>
                        <div><code>By.cssSelector("[data-number='5']")</code></div>
                        <div><code>By.cssSelector("[data-priority='critical']")</code></div>
                        <div><code>By.className("sortable-item")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-purple-200">
                        <p className="text-xs text-purple-700 font-medium">💡 Use dragAndDrop() to reorder elements!</p>
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
          <Link href="/practice/drop-aui2" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
            Back to Practice →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}