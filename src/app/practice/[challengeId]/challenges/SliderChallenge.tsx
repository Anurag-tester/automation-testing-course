'use client';

import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, Eye, EyeOff, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function SliderChallenge() {
  const [showSolution, setShowSolution] = useState(false);
  const [showLocators, setShowLocators] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [rangeStart, setRangeStart] = useState(25);
  const [rangeEnd, setRangeEnd] = useState(75);
  const [volumeLevel, setVolumeLevel] = useState(30);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const solutionCode = `// Slider Challenge - Range Slider Operations
package practice;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class SliderChallenge {
    
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        Actions actions = new Actions(driver);
        
        try {
            driver.get("http://localhost:3000/practice/slider-challenge");
            
            // Test Case 1: Move single slider to specific value
            WebElement slider = driver.findElement(By.id("price-slider"));
            
            // Get slider dimensions and calculate offset
            int sliderWidth = slider.getSize().getWidth();
            int targetValue = 75; // Target 75%
            int offset = (sliderWidth * targetValue / 100) - (sliderWidth / 2);
            
            actions.clickAndHold(slider)
                   .moveByOffset(offset, 0)
                   .release()
                   .perform();
            System.out.println("✓ Moved slider to 75%");
            
            // Test Case 2: Handle range slider with two handles
            WebElement rangeSliderStart = driver.findElement(By.cssSelector("[data-testid='range-start']"));
            WebElement rangeSliderEnd = driver.findElement(By.cssSelector("[data-testid='range-end']"));
            
            // Move start handle to 30%
            actions.dragAndDropBy(rangeSliderStart, -50, 0).perform();
            // Move end handle to 80%
            actions.dragAndDropBy(rangeSliderEnd, 30, 0).perform();
            System.out.println("✓ Set range slider: 30% - 80%");
            
            // Test Case 3: Volume slider with precise control
            WebElement volumeSlider = driver.findElement(By.xpath("//input[@data-slider-type='volume']"));
            
            // Set volume to specific level using JavaScript
            ((JavascriptExecutor) driver).executeScript("arguments[0].value = 60", volumeSlider);
            ((JavascriptExecutor) driver).executeScript("arguments[0].dispatchEvent(new Event('input'))", volumeSlider);
            System.out.println("✓ Set volume to 60%");
            
            // Test Case 4: Verify slider values
            String currentValue = slider.getAttribute("value");
            String rangeStartValue = rangeSliderStart.getAttribute("value");
            String rangeEndValue = rangeSliderEnd.getAttribute("value");
            
            System.out.println("Slider value: " + currentValue);
            System.out.println("Range: " + rangeStartValue + " - " + rangeEndValue);
            
            System.out.println("\\n🎉 Slider Challenge Completed!");
            System.out.println("📋 All slider operations tested");
            
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
      title="Slider - AUI 5 Challenge"
      description="Master slider and range control operations with Actions class."
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
                    <h1 className="text-xl font-bold text-gray-900">Slider & Range Controls</h1>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Practice slider and range control operations with precise value setting.
                </p>
              </div>
            </section>

            {/* Test Cases */}
            <section className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Test Cases to Automate</h2>
              <div className="space-y-3">
                {[
                  'Move single slider to specific value',
                  'Handle range slider with two handles',
                  'Volume slider with precise control',
                  'Verify slider values'
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

          {/* Right Side - Interactive Practice */}
          <div>
            <section className="sticky top-8">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">🎯 Practice Sliders</h2>
                
                <div className="space-y-8">
                  {/* Single Slider */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">1. Price Slider</label>
                    <div className="space-y-3">
                      <input
                        type="range"
                        id="price-slider"
                        min="0"
                        max="100"
                        value={sliderValue}
                        onChange={(e) => setSliderValue(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        data-testid="price-slider"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>$0</span>
                        <span className="font-medium">${sliderValue}</span>
                        <span>$100</span>
                      </div>
                    </div>
                  </div>

                  {/* Range Slider */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">2. Range Slider</label>
                    <div className="space-y-3">
                      <div className="relative">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={rangeStart}
                          onChange={(e) => setRangeStart(Math.min(parseInt(e.target.value), rangeEnd - 5))}
                          className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          data-testid="range-start"
                        />
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={rangeEnd}
                          onChange={(e) => setRangeEnd(Math.max(parseInt(e.target.value), rangeStart + 5))}
                          className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          data-testid="range-end"
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-8">
                        <span>0</span>
                        <span className="font-medium">{rangeStart} - {rangeEnd}</span>
                        <span>100</span>
                      </div>
                    </div>
                  </div>

                  {/* Volume Slider */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">3. Volume Control</label>
                    <div className="space-y-3">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volumeLevel}
                        onChange={(e) => setVolumeLevel(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        data-slider-type="volume"
                        data-testid="volume-slider"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>🔇 Mute</span>
                        <span className="font-medium">🔊 {volumeLevel}%</span>
                        <span>🔊 Max</span>
                      </div>
                    </div>
                  </div>

                  {/* Disabled Slider */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">4. Disabled Slider</label>
                    <div className="space-y-3">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value="40"
                        disabled
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-not-allowed slider opacity-50"
                        data-testid="disabled-slider"
                      />
                      <div className="text-sm text-gray-500">
                        This slider is disabled for testing
                      </div>
                    </div>
                  </div>
                </div>

                {/* Locator Information */}
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
                        <div><code>By.id("price-slider")</code></div>
                        <div><code>By.cssSelector("[data-testid='range-start']")</code></div>
                        <div><code>By.cssSelector("[data-testid='range-end']")</code></div>
                        <div><code>By.xpath("//input[@data-slider-type='volume']")</code></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-indigo-200">
                        <p className="text-xs text-indigo-700 font-medium">💡 Use Actions.dragAndDropBy() for slider movement!</p>
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
          <Link href="/practice/multi-select" className="text-gray-600 hover:text-gray-800 transition-colors">
            ← Previous Challenge
          </Link>
          <Link href="/practice" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors">
            Back to Practice →
          </Link>
        </div>
      </div>
    </DayLayout>
  );
}