'use client';

import DayLayout from '@/components/DayLayout';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const interviewQuestions = [
  {
    id: 1,
    category: "Manual Testing",
    question: "What is SDLC and explain its phases?",
    answer: "SDLC stands for Software Development Life Cycle. It has 7 phases: 1) Requirement Gathering - BA team gathers requirements and creates BRS documents, 2) Analysis Requirement - BA creates SRS/FRS documents, 3) Design - High/Low level design creation, 4) Coding - Development team builds the application, 5) Testing - QA team tests the application, 6) Deployment - Application deployed to production, 7) Maintenance - Adding/modifying features.",
    difficulty: "Basic",
    tags: ["sdlc", "manual-testing", "phases", "brs", "srs"]
  },
  {
    id: 2,
    category: "Manual Testing",
    question: "What is the difference between BRS and SRS documents?",
    answer: "BRS (Business Requirement Specification) is created by BA team based on client requirements and acts as a bridge between client and technical team. SRS (System Requirement Specification) is created after analyzing BRS and contains detailed functional requirements for development and testing teams.",
    difficulty: "Basic",
    tags: ["brs", "srs", "documents", "requirements"]
  },
  {
    id: 3,
    category: "Manual Testing",
    question: "Explain different SDLC models and their timelines.",
    answer: "1) Waterfall Model - Sequential approach, 90 days/3 months timeline, 2) V Model - Verification and validation model, 90 days/3 months, 3) Agile Model - Iterative approach, 30 days/1 month sprints, flexible timeline.",
    difficulty: "Intermediate",
    tags: ["waterfall", "v-model", "agile", "sdlc-models"]
  },
  {
    id: 4,
    category: "Manual Testing",
    question: "What is Black Box Testing and its techniques?",
    answer: "Black Box Testing is testing without knowing internal code structure. Techniques include: 1) Equivalence Partitioning - dividing input data into valid/invalid partitions, 2) Boundary Value Analysis - testing at boundaries, 3) Decision Table Testing - for complex business logic, 4) State Transition Testing - for state-based systems.",
    difficulty: "Intermediate",
    tags: ["black-box", "equivalence-partitioning", "boundary-value", "decision-table"]
  },
  {
    id: 5,
    category: "Java Programming",
    question: "What are the primitive data types in Java?",
    answer: "Java has 8 primitive data types: 1) byte (1 byte), 2) short (2 bytes), 3) int (4 bytes), 4) long (8 bytes), 5) float (4 bytes), 6) double (8 bytes), 7) char (2 bytes), 8) boolean (1 bit). These are stored in stack memory and have default values.",
    difficulty: "Basic",
    tags: ["java", "data-types", "primitive", "memory"]
  },
  {
    id: 6,
    category: "Java Programming",
    question: "Explain different types of operators in Java.",
    answer: "Java operators: 1) Arithmetic (+, -, *, /, %), 2) Relational (==, !=, <, >, <=, >=), 3) Logical (&&, ||, !), 4) Assignment (=, +=, -=, *=, /=), 5) Unary (++, --, +, -), 6) Bitwise (&, |, ^, ~, <<, >>), 7) Ternary (condition ? true : false).",
    difficulty: "Basic",
    tags: ["java", "operators", "arithmetic", "logical", "assignment"]
  },
  {
    id: 7,
    category: "Java Programming",
    question: "What is the difference between String, StringBuffer, and StringBuilder?",
    answer: "String is immutable, creates new object for each modification. StringBuffer is mutable, thread-safe, synchronized methods. StringBuilder is mutable, not thread-safe, faster than StringBuffer. Use String for few modifications, StringBuffer for multi-threaded environment, StringBuilder for single-threaded performance.",
    difficulty: "Intermediate",
    tags: ["java", "string", "stringbuffer", "stringbuilder", "immutable"]
  },
  {
    id: 8,
    category: "Selenium WebDriver",
    question: "What is Selenium WebDriver and its advantages?",
    answer: "Selenium WebDriver is a web automation tool that directly communicates with browsers through browser drivers. Advantages: 1) Cross-browser support, 2) Multiple programming language support, 3) No need for Selenium Server, 4) Direct browser communication, 5) Better performance than Selenium RC, 6) Mobile testing support.",
    difficulty: "Basic",
    tags: ["selenium", "webdriver", "automation", "cross-browser"]
  },
  {
    id: 9,
    category: "Selenium WebDriver",
    question: "Explain different types of locators in Selenium.",
    answer: "Selenium locators: 1) ID - By.id(), most reliable, 2) Name - By.name(), 3) ClassName - By.className(), 4) TagName - By.tagName(), 5) LinkText - By.linkText(), for exact link text, 6) PartialLinkText - By.partialLinkText(), 7) XPath - By.xpath(), most flexible, 8) CSS Selector - By.cssSelector(), faster than XPath.",
    difficulty: "Basic",
    tags: ["selenium", "locators", "xpath", "css-selector", "id"]
  },
  {
    id: 10,
    category: "Selenium WebDriver",
    question: "What is the difference between Absolute XPath and Relative XPath?",
    answer: "Absolute XPath starts from root node with single slash (/html/body/div...), brittle and breaks with DOM changes. Relative XPath starts from anywhere with double slash (//div[@id='example']), more flexible and reliable. Relative XPath is preferred for automation as it's less likely to break.",
    difficulty: "Intermediate",
    tags: ["xpath", "absolute", "relative", "dom", "locators"]
  },
  {
    id: 11,
    category: "Selenium WebDriver",
    question: "Explain different XPath axes with examples.",
    answer: "XPath axes: 1) child:: - immediate children, 2) parent:: - immediate parent, 3) ancestor:: - all ancestors, 4) descendant:: - all descendants, 5) following:: - all nodes after current, 6) preceding:: - all nodes before current, 7) following-sibling:: - next siblings, 8) preceding-sibling:: - previous siblings. Example: //input[@id='username']/parent::div",
    difficulty: "Advanced",
    tags: ["xpath", "axes", "parent", "child", "sibling"]
  },
  {
    id: 12,
    category: "Selenium WebDriver",
    question: "What are different types of waits in Selenium?",
    answer: "Selenium waits: 1) Implicit Wait - global wait for all elements, driver.manage().timeouts().implicitlyWait(), 2) Explicit Wait - wait for specific condition, WebDriverWait with ExpectedConditions, 3) Fluent Wait - custom polling interval and timeout, ignores specific exceptions. Explicit wait is most recommended.",
    difficulty: "Intermediate",
    tags: ["selenium", "waits", "implicit", "explicit", "fluent"]
  },
  {
    id: 13,
    category: "Selenium WebDriver",
    question: "How do you handle dropdowns in Selenium?",
    answer: "Handle dropdowns using Select class: 1) selectByVisibleText() - select by visible text, 2) selectByValue() - select by value attribute, 3) selectByIndex() - select by index position, 4) getOptions() - get all options, 5) getFirstSelectedOption() - get selected option, 6) isMultiple() - check if multi-select dropdown.",
    difficulty: "Intermediate",
    tags: ["selenium", "dropdown", "select", "options"]
  },
  {
    id: 14,
    category: "Selenium WebDriver",
    question: "Explain different types of alerts in Selenium and how to handle them.",
    answer: "Alert types: 1) Simple Alert - only OK button, alert.accept(), 2) Confirmation Alert - OK and Cancel buttons, alert.accept()/dismiss(), 3) Prompt Alert - input field with OK/Cancel, alert.sendKeys() then accept()/dismiss(). Use driver.switchTo().alert() to switch to alert context.",
    difficulty: "Intermediate",
    tags: ["selenium", "alerts", "accept", "dismiss", "prompt"]
  },
  {
    id: 15,
    category: "Selenium WebDriver",
    question: "How do you handle multiple windows/tabs in Selenium?",
    answer: "Handle multiple windows: 1) getWindowHandle() - current window handle, 2) getWindowHandles() - all window handles, 3) switchTo().window(handle) - switch to specific window, 4) Use Set<String> to store handles, 5) Iterate through handles to find target window, 6) Always switch back to parent window after operations.",
    difficulty: "Advanced",
    tags: ["selenium", "windows", "tabs", "handles", "switch"]
  },
  {
    id: 16,
    category: "Selenium WebDriver",
    question: "What is frame handling in Selenium and how do you implement it?",
    answer: "Frames are separate HTML documents within a page. Handle frames: 1) switchTo().frame(index) - by index, 2) switchTo().frame(id/name) - by id/name, 3) switchTo().frame(WebElement) - by element, 4) switchTo().defaultContent() - back to main page, 5) switchTo().parentFrame() - to parent frame. Cannot switch directly between frames.",
    difficulty: "Advanced",
    tags: ["selenium", "frames", "iframe", "switch", "defaultcontent"]
  },
  {
    id: 17,
    category: "Selenium WebDriver",
    question: "How do you perform mouse actions in Selenium?",
    answer: "Use Actions class for mouse operations: 1) click() - left click, 2) contextClick() - right click, 3) doubleClick() - double click, 4) moveToElement() - hover, 5) dragAndDrop() - drag and drop, 6) clickAndHold() - press and hold, 7) release() - release mouse. Always call perform() to execute actions.",
    difficulty: "Intermediate",
    tags: ["selenium", "actions", "mouse", "hover", "drag-drop"]
  },
  {
    id: 18,
    category: "Selenium WebDriver",
    question: "How do you handle keyboard actions in Selenium?",
    answer: "Handle keyboard actions: 1) sendKeys() - type text, 2) Keys.ENTER - press Enter, 3) Keys.TAB - press Tab, 4) Keys.ESCAPE - press Escape, 5) Keys.chord() - key combinations, 6) Actions.keyDown()/keyUp() - press/release keys, 7) Keys.CONTROL + 'a' - select all. Use Actions class for complex key combinations.",
    difficulty: "Intermediate",
    tags: ["selenium", "keyboard", "keys", "sendkeys", "actions"]
  },
  {
    id: 19,
    category: "Selenium WebDriver",
    question: "What is JavaScript Executor and when do you use it?",
    answer: "JavaScriptExecutor executes JavaScript code in browser. Use cases: 1) Click hidden/overlapped elements, 2) Scroll to elements, 3) Get element properties, 4) Handle disabled elements, 5) Execute custom JavaScript. Methods: executeScript() for return values, executeAsyncScript() for async operations.",
    difficulty: "Advanced",
    tags: ["selenium", "javascript", "executor", "scroll", "click"]
  },
  {
    id: 20,
    category: "Selenium WebDriver",
    question: "How do you take screenshots in Selenium?",
    answer: "Take screenshots: 1) Cast driver to TakesScreenshot, 2) Use getScreenshotAs(OutputType.FILE), 3) Use FileUtils.copyFile() to save, 4) Can capture full page or specific elements, 5) Useful for test reporting and debugging. Example: File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);",
    difficulty: "Intermediate",
    tags: ["selenium", "screenshots", "takesscreenshot", "debugging"]
  },
  {
    id: 21,
    category: "Selenium WebDriver",
    question: "What is Shadow DOM and how do you handle it in Selenium?",
    answer: "Shadow DOM provides encapsulation for web components. Handle with: 1) getShadowRoot() method (Selenium 4+), 2) Returns SearchContext interface, 3) Use CSS Selector only (XPath doesn't work), 4) Chain shadow root navigation for nested shadow DOM, 5) Test in browser console first using document.querySelector().shadowRoot.",
    difficulty: "Advanced",
    tags: ["selenium", "shadow-dom", "getshadowroot", "css-selector", "encapsulation"]
  },
  {
    id: 22,
    category: "Selenium WebDriver",
    question: "How do you handle broken links in Selenium?",
    answer: "Handle broken links: 1) Find all links using By.tagName('a'), 2) Get href attribute, 3) Use HttpURLConnection to send HTTP request, 4) Check response code (200=OK, 404=Not Found, 500=Server Error), 5) Validate response codes and report broken links. Can also check images and other resources.",
    difficulty: "Advanced",
    tags: ["selenium", "broken-links", "http", "response-code", "validation"]
  },
  {
    id: 23,
    category: "Selenium WebDriver",
    question: "What are different types of exceptions in Selenium?",
    answer: "Common Selenium exceptions: 1) NoSuchElementException - element not found, 2) TimeoutException - wait timeout exceeded, 3) StaleElementReferenceException - element no longer attached to DOM, 4) ElementNotInteractableException - element not clickable, 5) NoSuchWindowException - window not found, 6) WebDriverException - general WebDriver error.",
    difficulty: "Intermediate",
    tags: ["selenium", "exceptions", "nosuchelement", "timeout", "stale"]
  },
  {
    id: 24,
    category: "Selenium WebDriver",
    question: "Explain Selenium Grid and its components.",
    answer: "Selenium Grid enables parallel test execution across multiple machines/browsers. Components: 1) Hub - central point managing test execution, 2) Node - machines where tests run, 3) Supports different OS/browser combinations, 4) Reduces test execution time, 5) Remote WebDriver for grid execution. Grid 4 has improved architecture with better scalability.",
    difficulty: "Advanced",
    tags: ["selenium", "grid", "hub", "node", "parallel", "remote"]
  },
  {
    id: 25,
    category: "TestNG",
    question: "What is TestNG and its advantages over JUnit?",
    answer: "TestNG is testing framework for Java. Advantages: 1) Annotations (@Test, @BeforeMethod, @AfterMethod), 2) Parallel execution support, 3) Data-driven testing with @DataProvider, 4) Test grouping and prioritization, 5) Dependency testing, 6) Better reporting, 7) XML configuration, 8) Parameter passing support.",
    difficulty: "Intermediate",
    tags: ["testng", "annotations", "parallel", "dataprovider", "junit"]
  },
  {
    id: 26,
    category: "Selenium WebDriver",
    question: "How do you handle SSL certificates in Selenium?",
    answer: "Handle SSL certificates using ChromeOptions: 1) Create ChromeOptions object, 2) Use setAcceptInsecureCerts(true) method, 3) Pass ChromeOptions to ChromeDriver constructor, 4) This accepts self-signed certificates in QA/UAT environments, 5) Only use for testing environments, never in production. Example: ChromeOptions opt = new ChromeOptions(); opt.setAcceptInsecureCerts(true); ChromeDriver driver = new ChromeDriver(opt);",
    difficulty: "Intermediate",
    tags: ["ssl", "certificates", "chrome-options", "security", "qa-environment"]
  },
  {
    id: 27,
    category: "Selenium WebDriver",
    question: "How do you handle file upload in Selenium using AutoIT?",
    answer: "File upload with AutoIT: 1) Click file input element to open dialog, 2) Use AutoIT script with ControlFocus('Open', '', 'Edit1'), 3) ControlSetText('Open', '', 'Edit1', 'file_path'), 4) ControlClick('Open', '', 'Button1'), 5) Compile AutoIT script to .exe, 6) Execute using Runtime.getRuntime().exec('script.exe'), 7) Add Thread.sleep() before AutoIT execution. AutoIT works only on Windows OS.",
    difficulty: "Advanced",
    tags: ["file-upload", "autoit", "windows", "dialog", "runtime-exec"]
  },
  {
    id: 28,
    category: "Selenium WebDriver",
    question: "What is the difference between CSS Selector and XPath?",
    answer: "CSS Selector vs XPath: 1) Performance - CSS is faster than XPath, 2) Browser support - CSS supported by all browsers natively, 3) Syntax - CSS simpler syntax, XPath more complex, 4) Functionality - XPath more powerful with axes and functions, 5) Text handling - XPath can handle text(), CSS cannot, 6) Parent traversal - XPath can go to parent, CSS cannot (CSS4 has :has()), 7) Shadow DOM - Only CSS works with Shadow DOM.",
    difficulty: "Intermediate",
    tags: ["css-selector", "xpath", "performance", "syntax", "comparison"]
  },
  {
    id: 29,
    category: "Selenium WebDriver",
    question: "Explain XPath axes with practical examples.",
    answer: "XPath axes for navigation: 1) following-sibling:: - next siblings at same level, //input[@id='username']/following-sibling::input, 2) preceding-sibling:: - previous siblings, //button/preceding-sibling::input, 3) parent:: - immediate parent, //input/parent::div, 4) child:: - immediate children, //div/child::input, 5) descendant:: - all descendants, //form/descendant::input, 6) ancestor:: - all ancestors, //input/ancestor::form.",
    difficulty: "Advanced",
    tags: ["xpath", "axes", "sibling", "parent", "child", "navigation"]
  },
  {
    id: 30,
    category: "Selenium WebDriver",
    question: "How do you handle dynamic calendars in Selenium?",
    answer: "Handle dynamic calendars: 1) Use while loop for month/year navigation, 2) Click next/previous buttons until target month/year, 3) Use enhanced for loop to iterate through dates, 4) Compare date text with target date, 5) Click when match found, 6) Handle month names using contains() or text() methods, 7) Example: while(!monthYear.contains('March 2024')) { nextButton.click(); }. Common in booking websites like RedBus, Goibibo.",
    difficulty: "Advanced",
    tags: ["calendar", "dynamic", "while-loop", "date-picker", "booking"]
  },
  {
    id: 31,
    category: "Selenium WebDriver",
    question: "What is Synchronization and why is it important?",
    answer: "Synchronization handles timing issues between Selenium and web applications. Types: 1) Unconditional - Thread.sleep(), not recommended, 2) Conditional - Implicit/Explicit/Fluent waits, 3) Implicit Wait - global timeout for all elements, 4) Explicit Wait - wait for specific conditions with WebDriverWait, 5) Fluent Wait - custom polling frequency, ignore exceptions. Explicit wait is most recommended for dynamic elements.",
    difficulty: "Intermediate",
    tags: ["synchronization", "waits", "timing", "dynamic-elements", "webdriverwait"]
  },
  {
    id: 32,
    category: "Selenium WebDriver",
    question: "How do you capture screenshots in Selenium for test reporting?",
    answer: "Capture screenshots: 1) Cast driver to TakesScreenshot interface, 2) Use getScreenshotAs(OutputType.FILE), 3) Save using FileUtils.copyFile(), 4) For full page screenshots use AShot library, 5) Capture on test failure for debugging, 6) Integrate with reporting tools like Extent Reports, 7) Example: File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE); FileUtils.copyFile(screenshot, new File('path'));",
    difficulty: "Intermediate",
    tags: ["screenshots", "takesscreenshot", "ashot", "reporting", "debugging"]
  },
  {
    id: 33,
    category: "Selenium WebDriver",
    question: "What are common Selenium exceptions and how do you handle them?",
    answer: "Common exceptions: 1) NoSuchElementException - element not found, use explicit waits, 2) StaleElementReferenceException - element no longer in DOM, re-find element, 3) TimeoutException - wait timeout exceeded, increase timeout or check conditions, 4) ElementNotInteractableException - element not clickable, wait for element to be clickable, 5) SessionNotCreatedException - driver session issues, check driver compatibility, 6) Use try-catch blocks and proper wait strategies.",
    difficulty: "Advanced",
    tags: ["exceptions", "error-handling", "stale-element", "timeout", "debugging"]
  },
  {
    id: 34,
    category: "Selenium WebDriver",
    question: "Explain the difference between get() and navigate() methods.",
    answer: "get() vs navigate(): 1) get() - driver.get(url), loads new page, waits for page load, no browser history, 2) navigate().to() - same as get() but part of Navigation interface, 3) navigate().back() - browser back button, 4) navigate().forward() - browser forward button, 5) navigate().refresh() - refresh current page, 6) Navigation interface provides browser-like navigation controls, get() is simpler for basic page loading.",
    difficulty: "Basic",
    tags: ["get", "navigate", "browser-history", "page-load", "navigation"]
  },
  {
    id: 35,
    category: "Selenium WebDriver",
    question: "What is the difference between findElement() and findElements()?",
    answer: "findElement() vs findElements(): 1) findElement() - returns single WebElement, throws NoSuchElementException if not found, 2) findElements() - returns List<WebElement>, returns empty list if none found, 3) Use findElement() when expecting single element, 4) Use findElements() for multiple elements or to check element existence, 5) findElements().size() > 0 to verify element presence without exception.",
    difficulty: "Basic",
    tags: ["findelement", "findelements", "list", "exception", "element-presence"]
  },
  {
    id: 36,
    category: "Selenium WebDriver",
    question: "How do you handle browser options like headless mode and incognito?",
    answer: "Browser options with ChromeOptions: 1) Headless mode - opt.addArguments('--headless'), runs without GUI, 2) Incognito mode - opt.addArguments('--incognito'), private browsing, 3) Disable notifications - opt.addArguments('--disable-notifications'), 4) Window size - opt.addArguments('--window-size=1920,1080'), 5) Disable extensions - opt.addArguments('--disable-extensions'), 6) Pass options to driver constructor for configuration.",
    difficulty: "Intermediate",
    tags: ["browser-options", "headless", "incognito", "chrome-options", "configuration"]
  },
  {
    id: 37,
    category: "Advanced Selenium",
    question: "How do you handle flaky tests and improve test stability?",
    answer: "Handle flaky tests: 1) Use proper wait strategies instead of Thread.sleep(), 2) Implement retry mechanisms with TestNG @Retry, 3) Use stable locators (ID > Name > CSS > XPath), 4) Handle dynamic elements with explicit waits, 5) Implement custom Expected Conditions, 6) Use Page Object Model for maintainability, 7) Add proper exception handling, 8) Use screenshots for debugging failures, 9) Implement test data cleanup.",
    difficulty: "Advanced",
    tags: ["flaky-tests", "stability", "retry", "wait-strategies", "debugging"]
  },
  {
    id: 38,
    category: "Advanced Selenium",
    question: "What is Page Object Model and its advantages?",
    answer: "Page Object Model (POM): 1) Design pattern separating page elements from test logic, 2) Each page has corresponding class with elements and methods, 3) Advantages: Code reusability, maintainability, readability, 4) Easy to update when UI changes, 5) Reduces code duplication, 6) Better test organization, 7) Use @FindBy annotations with PageFactory, 8) Initialize elements using PageFactory.initElements(driver, this).",
    difficulty: "Advanced",
    tags: ["page-object-model", "design-pattern", "maintainability", "pagefactory", "findby"]
  },
  {
    id: 39,
    category: "Advanced Selenium",
    question: "How do you implement Data Driven Testing in Selenium?",
    answer: "Data Driven Testing: 1) Use TestNG @DataProvider for test data, 2) Read data from Excel using Apache POI, 3) Read from CSV files using OpenCSV, 4) Use JSON files with Jackson/Gson libraries, 5) Database connectivity with JDBC, 6) Pass data as parameters to test methods, 7) Example: @DataProvider returns Object[][], test method receives parameters, 8) Enables same test with multiple data sets.",
    difficulty: "Advanced",
    tags: ["data-driven", "dataprovider", "excel", "csv", "json", "apache-poi"]
  },
  {
    id: 40,
    category: "Framework Design",
    question: "What are different types of automation frameworks?",
    answer: "Automation frameworks: 1) Linear/Record-Playback - simple recording, not maintainable, 2) Modular - functions for reusability, 3) Data Driven - external data sources, 4) Keyword Driven - keywords represent actions, 5) Hybrid - combination of multiple approaches, 6) BDD - Behavior Driven Development with Cucumber, 7) Page Object Model - page-based organization, 8) Each has specific use cases and complexity levels.",
    difficulty: "Advanced",
    tags: ["frameworks", "modular", "data-driven", "keyword-driven", "hybrid", "bdd"]
  }
];

export default function InterviewQuestions() {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
  
  const filteredQuestions = interviewQuestions;

  const toggleQuestion = (questionId: number) => {
    setExpandedQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Basic': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Manual Testing': return 'bg-blue-100 text-blue-800';
      case 'Java Programming': return 'bg-purple-100 text-purple-800';
      case 'Selenium WebDriver': return 'bg-orange-100 text-orange-800';
      case 'TestNG': return 'bg-pink-100 text-pink-800';
      case 'Advanced Selenium': return 'bg-green-100 text-green-800';
      case 'Framework Design': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DayLayout
      dayNumber={0}
      title="SDET Interview Questions"
      description="Comprehensive collection of SDET interview questions covering Manual Testing, Java Programming, Selenium WebDriver, and TestNG with detailed answers."
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h2 className="text-3xl font-light text-gray-900 mb-4">SDET Interview Preparation</h2>
            <p className="text-lg text-gray-600 mb-6">
              Master your SDET interviews with our comprehensive question bank covering all essential topics from Manual Testing to Advanced Selenium WebDriver concepts.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{interviewQuestions.filter(q => q.category === 'Manual Testing').length}</div>
                <div className="text-sm text-gray-600">Manual Testing</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{interviewQuestions.filter(q => q.category === 'Java Programming').length}</div>
                <div className="text-sm text-gray-600">Java Programming</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">{interviewQuestions.filter(q => q.category === 'Selenium WebDriver').length}</div>
                <div className="text-sm text-gray-600">Selenium WebDriver</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-pink-600">{interviewQuestions.filter(q => q.category === 'TestNG').length}</div>
                <div className="text-sm text-gray-600">TestNG</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{interviewQuestions.filter(q => q.category === 'Advanced Selenium').length}</div>
                <div className="text-sm text-gray-600">Advanced Topics</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{interviewQuestions.filter(q => q.category === 'Framework Design').length}</div>
                <div className="text-sm text-gray-600">Framework Design</div>
              </div>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="mb-16">
          <div className="space-y-4">
            {filteredQuestions.map((question) => (
              <div key={question.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleQuestion(question.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(question.category)}`}>
                          {question.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                          {question.difficulty}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Q{question.id}. {question.question}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {question.tags.slice(0, 4).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                        {question.tags.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            +{question.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedQuestions.includes(question.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                
                {expandedQuestions.includes(question.id) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <h4 className="font-medium text-gray-900 mb-3">Answer:</h4>
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-gray-700 leading-relaxed">{question.answer}</p>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-medium text-gray-700 mb-2">Related Tags:</h5>
                        <div className="flex flex-wrap gap-2">
                          {question.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>


        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Interview Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">📝 Preparation Strategy</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Start with basic concepts and build up to advanced topics</li>
                <li>• Practice coding examples for each concept</li>
                <li>• Understand the 'why' behind each approach</li>
                <li>• Prepare real-world scenarios and challenges you've faced</li>
                <li>• Review your automation framework architecture</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">💡 During the Interview</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Think out loud while solving problems</li>
                <li>• Ask clarifying questions when needed</li>
                <li>• Explain trade-offs between different approaches</li>
                <li>• Share specific examples from your experience</li>
                <li>• Be honest about what you don't know</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </DayLayout>
  );
}