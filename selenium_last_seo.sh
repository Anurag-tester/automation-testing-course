#!/bin/bash

# Days 26-35
for day in {26..35}; do
  case $day in
    26) title="Dynamic Table & Calendar Handling"; desc="Master dynamic calendar navigation and date selection techniques using while loops and enhanced for loops in Selenium WebDriver."; keywords="dynamic calendar, calendar handling, date selection, table operations, calendar automation, date picker automation" ;;
    27) title="Multiple Window & Tab Handling"; desc="Master window and tab handling techniques using getWindowHandle(), getWindowHandles(), and switchTo().window() methods."; keywords="multiple windows, tab handling, window handling, getWindowHandle, getWindowHandles, switchTo window, window switching" ;;
    28) title="Selenium Roadmap & Review"; desc="Complete roadmap covering all Selenium concepts including browser operations, locators, web elements, Actions class, alerts, and frames."; keywords="selenium roadmap, selenium review, selenium concepts, automation roadmap, selenium mastery, selenium guide" ;;
    29) title="Synchronization - Waits in Selenium"; desc="Master synchronization concepts including implicit wait, explicit wait, and fluent wait to handle dynamic web elements effectively."; keywords="selenium synchronization, implicit wait, explicit wait, fluent wait, webdriverwait, expected conditions, wait strategies" ;;
    30) title="Screenshots & Browser Options"; desc="Learn to capture screenshots, full page screenshots, and configure browser options like incognito mode, headless mode, and notifications."; keywords="selenium screenshots, takescreenshot, browser options, chrome options, headless mode, incognito mode, screenshot automation" ;;
    31) title="Broken Link Detection"; desc="Learn to identify and validate broken links in web applications using HTTP response codes and URL connection testing."; keywords="broken links, link validation, http response codes, url testing, link checker, selenium links, link automation" ;;
    32) title="Selenium Theory & Interview Questions"; desc="Comprehensive review of Selenium concepts, theory, and commonly asked interview questions with detailed explanations."; keywords="selenium theory, selenium interview questions, webdriver interview, selenium concepts, automation interview, selenium knowledge" ;;
    33) title="Advanced Selenium & Exception Handling"; desc="Deep dive into synchronization, flaky scenarios, exception handling, and advanced Selenium concepts for robust test automation."; keywords="advanced selenium, exception handling, flaky tests, selenium exceptions, test stability, robust automation, selenium debugging" ;;
    34) title="Shadow DOM Handling in Selenium"; desc="Master the techniques for handling Shadow DOM elements in modern web applications using Selenium WebDriver 4+ features."; keywords="shadow dom, shadow dom handling, web components, getshadowroot, selenium 4, shadow elements, modern web automation" ;;
    35) title="SSL Certificate & File Upload Handling"; desc="Learn to handle SSL certificates and automate file uploads using AutoIT library in Selenium WebDriver for complete automation."; keywords="ssl certificate, ssl handling, file upload, autoit library, setacceptinsecurecerts, file upload automation, browser security" ;;
  esac
  
  sed -i '' "1i\\
export const metadata = {\\
  title: 'Day $day: $title | SDET Course',\\
  description: '$desc',\\
  keywords: '$keywords',\\
}\\
" src/app/day$day/page.tsx
done

echo "Added metadata to Days 26-35"
