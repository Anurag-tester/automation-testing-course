#!/bin/bash

# Day 10
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 10: Selenium Introduction & Setup | SDET Course'\'',\
  description: '\''Learn Selenium WebDriver introduction, setup, and browser operations. Start your automation testing journey with first Selenium script.'\'',\
  keywords: '\''selenium webdriver, selenium introduction, selenium setup, browser automation, chromedriver, automation testing, selenium tutorial'\'',\
}\
' src/app/day10/page.tsx

# Day 11
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 11: Web Element Identification & Locators | SDET Course'\'',\
  description: '\''Master web element identification using Selenium locators. Learn ID, Name, ClassName, XPath, CSS Selector strategies and best practices.'\'',\
  keywords: '\''selenium locators, web element identification, xpath, css selector, selenium findElement, locator strategies, element location'\'',\
}\
' src/app/day11/page.tsx

# Day 12
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 12: Element Interactions - Click, Type, Clear | SDET Course'\'',\
  description: '\''Learn Selenium element interactions including click, sendKeys, clear operations. Master element states and web element methods.'\'',\
  keywords: '\''selenium element interactions, click, sendkeys, clear, web element methods, element states, selenium operations'\'',\
}\
' src/app/day12/page.tsx

# Day 13
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 13: Advanced Locators - XPath & CSS Selectors | SDET Course'\'',\
  description: '\''Master advanced Selenium locators including XPath expressions, CSS selectors, and complex element location strategies.'\'',\
  keywords: '\''advanced locators, xpath expressions, css selectors, selenium locators, complex locators, xpath functions, css combinators'\'',\
}\
' src/app/day13/page.tsx

# Day 14
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 14: Dropdown Handling with Select Class | SDET Course'\'',\
  description: '\''Learn Selenium dropdown handling using Select class. Master selectByValue, selectByText, selectByIndex, and multi-select dropdowns.'\'',\
  keywords: '\''selenium dropdown, select class, selectByValue, selectByText, selectByIndex, dropdown automation, multi-select dropdown'\'',\
}\
' src/app/day14/page.tsx

echo "Added metadata to Selenium Days 10-14"
