'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Target, Clock, Eye, EyeOff, Copy, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function CalendarChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
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

  const solutionCode = `// Calendar Challenge - Date Picker Operations
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.List;

public class CalendarChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        try {
            driver.get("http://localhost:3000/practice/calendar-datetime");
            
            // Test Case 1: Navigate to specific month/year
            String targetMonth = "March";
            String targetYear = "2024";
            
            // Navigate to target month
            while (true) {
                WebElement monthYear = driver.findElement(By.id("current-month-year"));
                String currentMonthYear = monthYear.getText();
                
                if (currentMonthYear.contains(targetMonth) && currentMonthYear.contains(targetYear)) {
                    break;
                }
                
                // Click next month if we need to go forward
                WebElement nextBtn = driver.findElement(By.cssSelector("[data-testid='next-month']"));
                nextBtn.click();
                Thread.sleep(500);
            }
            
            System.out.println("✓ Navigated to " + targetMonth + " " + targetYear);
            
            // Test Case 2: Select specific date
            String targetDate = "15";
            WebElement dateElement = driver.findElement(
                By.xpath("//div[@class='calendar-day' and text()='" + targetDate + "']")
            );
            dateElement.click();
            
            System.out.println("✓ Selected date: " + targetDate);
            
            // Test Case 3: Verify selected date
            WebElement selectedDateDisplay = driver.findElement(By.id("selected-date"));
            String selectedDate = selectedDateDisplay.getText();
            System.out.println("Selected date display: " + selectedDate);
            
            // Test Case 4: Navigate to previous month
            WebElement prevBtn = driver.findElement(By.cssSelector("[data-testid='prev-month']"));
            prevBtn.click();
            Thread.sleep(500);
            
            System.out.println("✓ Navigated to previous month");
            
            // Test Case 5: Select today's date
            WebElement todayBtn = driver.findElement(By.cssSelector("[data-testid='today-btn']"));
            if (todayBtn.isDisplayed()) {
                todayBtn.click();
                System.out.println("✓ Selected today's date");
            }
            
            // Test Case 6: Handle weekend dates (different styling)
            List<WebElement> weekendDates = driver.findElements(
                By.cssSelector(".calendar-day.weekend")
            );
            System.out.println("Weekend dates found: " + weekendDates.size());
            
            // Test Case 7: Select date range (if supported)
            WebElement startDate = driver.findElement(
                By.xpath("//div[@class='calendar-day' and text()='10']")
            );
            WebElement endDate = driver.findElement(
                By.xpath("//div[@class='calendar-day' and text()='20']")
            );
            
            startDate.click();
            Thread.sleep(200);
            endDate.click();
            
            System.out.println("✓ Selected date range: 10-20");
            
            System.out.println("\\n🎉 Calendar Challenge Completed!");
            
        } catch (Exception e) {
            System.out.println("❌ Error: " + e.getMessage());
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}`;

  const days = getDaysInMonth(currentDate);

  return (
    <DayLayout
      dayNumber={0}
      title="Calendar - Date & Time Challenge"
      description="Master date picker and calendar interactions."
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
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-rose-100 text-rose-800 text-xs font-medium rounded-full">
                        Advanced
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Clock className="w-3 h-3" />
                        25-30 min
                      </div>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Date Picker & Calendar</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Master date picker navigation, date selection, and calendar interactions.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Navigate to specific month/year',
                  'Select specific date',
                  'Verify selected date display',
                  'Handle month navigation',
                  'Select today\'s date',
                  'Handle weekend/weekday styling',
                  'Select date ranges'
                ].map((testCase, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <div className="w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-xs font-bold">
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
                  className="flex items-center gap-2 px-3 py-2 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition-colors text-sm"
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
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Calendar</h2>
                
                <div className="space-y-6">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between">
                    <button
                      data-testid="prev-month"
                      onClick={() => navigateMonth('prev')}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h3 id="current-month-year" className="text-lg font-semibold">
                      {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h3>
                    <button
                      data-testid="next-month"
                      onClick={() => navigateMonth('next')}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="calendar-container">
                    {/* Days of week header */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {daysOfWeek.map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar days */}
                    <div className="grid grid-cols-7 gap-1">
                      {days.map((day, index) => {
                        if (!day) {
                          return <div key={index} className="h-10"></div>;
                        }

                        const isSelected = selectedDate && 
                          day.getDate() === selectedDate.getDate() &&
                          day.getMonth() === selectedDate.getMonth() &&
                          day.getFullYear() === selectedDate.getFullYear();

                        const isToday = new Date().toDateString() === day.toDateString();
                        const isWeekend = day.getDay() === 0 || day.getDay() === 6;

                        return (
                          <button
                            key={index}
                            className={`calendar-day h-10 w-10 rounded-lg text-sm font-medium transition-colors ${
                              isSelected
                                ? 'bg-rose-600 text-white'
                                : isToday
                                ? 'bg-blue-100 text-blue-800 border border-blue-300'
                                : isWeekend
                                ? 'weekend text-gray-400 hover:bg-gray-100'
                                : 'hover:bg-gray-100'
                            }`}
                            onClick={() => selectDate(day)}
                            data-date={day.getDate()}
                          >
                            {day.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Date Display */}
                  <div className="bg-rose-50 rounded-lg p-4">
                    <h4 className="font-medium text-rose-900 mb-2">Selected Date</h4>
                    <div id="selected-date" className="text-rose-800">
                      {selectedDate 
                        ? selectedDate.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })
                        : 'No date selected'
                      }
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-2">
                    <button
                      data-testid="today-btn"
                      onClick={() => {
                        const today = new Date();
                        setCurrentDate(today);
                        setSelectedDate(today);
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Today
                    </button>
                    <button
                      onClick={() => setSelectedDate(null)}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-900">🔍 Locator Information</h3>
                    <button
                      onClick={() => setShowLocators(!showLocators)}
                      className="flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition-colors text-xs"
                    >
                      {showLocators ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      {showLocators ? 'Hide' : 'Show'} Locators
                    </button>
                  </div>
                  
                  {showLocators && (
                    <div className="p-4 bg-rose-50 rounded-lg">
                      <div className="text-xs text-rose-800 space-y-1">
                        <div><code>By.id("current-month-year")</code></div>
                        <div><code>By.cssSelector("[data-testid='next-month']")</code></div>
                        <div><code>By.xpath("//div[@class='calendar-day' and text()='15']")</code></div>
                        <div><code>By.cssSelector(".calendar-day.weekend")</code></div>
                        <div><code>By.id("selected-date")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-rose-200">
                        <p className="text-xs text-rose-700 font-medium">💡 Use loops for month navigation!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link href="/practice/table-advanced" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice/forms-allinone" className="text-gray-600 hover:text-gray-800 transition-colors">
            Next Challenge →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}