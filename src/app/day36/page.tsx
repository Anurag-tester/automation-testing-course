import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export const metadata = {
  title: 'Day 36: JavaScript Executor Interface - Advanced Operations | SDET Course',
  description: 'Master JavaScript Executor interface in Selenium for advanced browser operations. Learn executeScript() and executeAsyncScript() methods with practical examples.',
  keywords: 'javascript executor, selenium javascript, executeScript, browser operations, DOM manipulation, selenium advanced',
};

export default function Day36() {
  const quizQuestions = [
    {
      id: 1,
      question: "What is JavaScriptExecutor in Selenium?",
      options: [
        "A class for handling JavaScript alerts",
        "An interface to execute JavaScript through Selenium WebDriver",
        "A method to write JavaScript code",
        "A browser extension"
      ],
      correctAnswer: 1,
      explanation: "JavaScriptExecutor is an interface which is used to execute JavaScript through Selenium WebDriver when normal WebDriver methods cannot perform certain operations."
    },
    {
      id: 2,
      question: "How many methods does JavaScriptExecutor interface provide?",
      options: [
        "1 method",
        "2 methods", 
        "3 methods",
        "4 methods"
      ],
      correctAnswer: 1,
      explanation: "JavaScriptExecutor interface provides 2 methods: executeScript() method and executeAsyncScript() method."
    },
    {
      id: 3,
      question: "Which JavaScript command is used to open URL in browser window?",
      options: [
        "window.open('URL')",
        "window.location='URL'",
        "document.location='URL'",
        "browser.navigate('URL')"
      ],
      correctAnswer: 1,
      explanation: "window.location='URL' is used to open URL in the current browser window using JavaScript Executor."
    },
    {
      id: 4,
      question: "How many ways can you click on an element in Selenium?",
      options: [
        "3 ways",
        "4 ways",
        "5 ways",
        "6 ways"
      ],
      correctAnswer: 2,
      explanation: "There are 5 ways to click on element: 1) WebElement click(), 2) WebElement submit(), 3) Actions class click(), 4) Actions class Keys.ENTER, 5) JavaScriptExecutor click()."
    },
    {
      id: 5,
      question: "Which JavaScript command is used to navigate back in browser history?",
      options: [
        "history.back()",
        "history.go(-1)",
        "window.back()",
        "browser.back()"
      ],
      correctAnswer: 1,
      explanation: "history.go(-1) is used to navigate back one page in browser history. You can use history.go(-4) to go back 4 pages."
    }
  ];

  return (
    <DayLayout
      dayNumber={36}
      title="JavaScript Executor Interface"
      description="Master JavaScript Executor interface for advanced browser operations and DOM manipulation when standard WebDriver methods are insufficient."
      previousDay="/day35"
      nextDay="/day37"
    >
      <div className="max-w-4xl mx-auto">
        {/* JavaScript Executor Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">What is JavaScript Executor?</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-4">JavaScript Executor Interface</h3>
              <p className="text-blue-800 text-sm mb-4">
                JavaScriptExecutor is an interface which is used to execute JavaScript through Selenium WebDriver. 
                If we can't perform operations using selenium WebDriver methods then we use JavaScriptExecutor interface to execute actions/operations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">Interface Methods</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>1. executeScript() method</li>
                    <li>2. executeAsyncScript() method</li>
                  </ul>
                </div>
                
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">When to Use</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• When WebDriver methods fail</li>
                    <li>• For complex DOM operations</li>
                    <li>• Browser-specific actions</li>
                    <li>• Advanced interactions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operations Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">JavaScript Executor Operations</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-6">16 Different Operations You Can Perform</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-3">Browser Operations</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>1. Open URL in browser window</li>
                  <li>2. Open a new tab with URL</li>
                  <li>3. Navigate back</li>
                  <li>4. Navigate forward</li>
                  <li>5. Refresh browser</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-3">Element Operations</h4>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>6. Click on element</li>
                  <li>7. Enter text in text box</li>
                  <li>8. Handle dropdown</li>
                  <li>9. Mouse over event</li>
                  <li>10. Scroll down or scroll up</li>
                  <li>11. Capture browser title</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-900 mb-3">Advanced Operations</h4>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>12. Capture browser URL</li>
                  <li>13. Create border for element</li>
                  <li>14. Highlight element with color</li>
                  <li>15. Generate custom alerts</li>
                  <li>16. Closed shadow root</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Basic Syntax */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Basic Syntax & Setup</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Converting WebDriver to JavaScript Executor</h3>
            
            <div className="bg-yellow-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-yellow-900 mb-2">Type Casting Syntax</h4>
              <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                JavascriptExecutor js = (JavascriptExecutor) driver;
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Using executeScript() Method</h4>
              <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                js.executeScript("JavaScript command here");
              </div>
            </div>
          </div>
        </section>

        {/* Browser Navigation Operations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Browser Navigation Operations</h2>
          
          <div className="space-y-8">
            {/* Open URL */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">1. Open URL in Browser Window</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    js.executeScript("window.location='https://www.google.com';");
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Complete Example</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                    <pre>{`package Tutorial1;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;

public class Demo1 {
    public static void main(String[] args) {
        ChromeDriver driver = new ChromeDriver();
        
        JavascriptExecutor js = (JavascriptExecutor) driver;
        
        js.executeScript("window.location='https://www.redbus.com';");
    }
}`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Open New Tab */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">2. Open URL in New Tab</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">JavaScript Approach</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    js.executeScript("window.open('https://www.facebook.com');");
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Alternative WebDriver Approach</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    driver.switchTo().newWindow(WindowType.TAB);<br/>
                    driver.get("https://www.facebook.com");
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Complete Example</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                    <pre>{`ChromeDriver driver = new ChromeDriver();
JavascriptExecutor js = (JavascriptExecutor) driver;

// Open URL in current window
driver.get("https://www.google.com");
Thread.sleep(4000);

// Open new URL in new TAB
js.executeScript("window.open('https://www.facebook.com');");`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigate Back */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">3. Navigate Back</h3>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-2">JavaScript Executor Approach</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    js.executeScript("history.go(-4)");
                  </div>
                  <p className="text-red-700 text-sm mt-2">Go back 4 pages using JavaScript</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Alternative WebDriver Approach</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <pre>{`driver.navigate().back();
driver.navigate().back();
driver.navigate().back();
driver.navigate().back();`}</pre>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Multiple back() calls for same result</p>
                </div>
              </div>
            </div>

            {/* Navigate Forward */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">4. Navigate Forward</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">JavaScript Executor Approach</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    js.executeScript("history.go(+3)");
                  </div>
                  <p className="text-green-700 text-sm mt-2">Go forward 3 pages using JavaScript</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Alternative WebDriver Approach</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    <pre>{`driver.navigate().forward();
driver.navigate().forward();
driver.navigate().forward();`}</pre>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Multiple forward() calls for same result</p>
                </div>
              </div>
            </div>

            {/* Refresh Browser */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">5. Refresh Browser</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">JavaScript Executor Approach</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    js.executeScript("history.go(0)");
                  </div>
                  <p className="text-blue-700 text-sm mt-2">Refresh current page using JavaScript</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Alternative WebDriver Approach</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    driver.navigate().refresh();
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Standard WebDriver refresh method</p>
                </div>
              </div>
            </div>

            {/* Complete Navigation Example */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Complete Navigation Example</h3>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Step-by-Step Navigation Process</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                  <pre>{`ChromeDriver driver = new ChromeDriver();
driver.get("https://www.google.com");

Thread.sleep(3000);
driver.navigate().to("https://www.facebook.com");

Thread.sleep(3000);
driver.navigate().to("https://www.redbus.com");

Thread.sleep(3000);
driver.navigate().to("https://www.wikipedia.org");

Thread.sleep(3000);
driver.navigate().to("https://www.saucedemo.com");

JavascriptExecutor js = (JavascriptExecutor) driver;

Thread.sleep(3000);
// Navigate to redbus URL (go back 2 pages)
js.executeScript("history.go(-2)");

Thread.sleep(3000);
// Navigate forward to wikipedia (go forward 1 page)
js.executeScript("history.go(1);");

Thread.sleep(3000);
// Navigate back to google URL (go back 3 pages)
js.executeScript("history.go(-3);");

Thread.sleep(3000);
// Navigate forward to saucedemo URL (go forward 4 pages)
js.executeScript("history.go(+4);");

Thread.sleep(3000);
// Refresh page
js.executeScript("history.go(0);");`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Element Operations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Element Operations</h2>
          
          <div className="space-y-8">
            {/* Click Element */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">6. Click on Element</h3>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-3">🎯 5 Ways to Click Element (IMPORTANT)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="bg-orange-100 rounded p-2">
                        <span className="font-medium text-orange-900">1.</span> <code className="text-sm">WebElement click()</code> method
                      </div>
                      <div className="bg-orange-100 rounded p-2">
                        <span className="font-medium text-orange-900">2.</span> <code className="text-sm">WebElement submit()</code> method
                      </div>
                      <div className="bg-orange-100 rounded p-2">
                        <span className="font-medium text-orange-900">3.</span> <code className="text-sm">Actions class click()</code> method
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-orange-100 rounded p-2">
                        <span className="font-medium text-orange-900">4.</span> <code className="text-sm">Actions class Keys.ENTER</code> keyword
                      </div>
                      <div className="bg-orange-100 rounded p-2">
                        <span className="font-medium text-orange-900">5.</span> <code className="text-sm">JavaScriptExecutor click()</code> method
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">JavaScript Executor Click Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    WebElement wb = driver.findElement(By.id("id value"));<br/>
                    JavascriptExecutor js = (JavascriptExecutor) driver;<br/>
                    js.executeScript("arguments[0].click()", wb);
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Facebook Example - Click "Already have an account?" Link</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                    <pre>{`ChromeDriver driver = new ChromeDriver();
driver.get("https://www.facebook.com/reg");
Thread.sleep(4000);

WebElement wb = driver.findElement(By.linkText("Already have an account?"));
JavascriptExecutor js = (JavascriptExecutor) driver;

js.executeScript("arguments[0].click();", wb);`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Enter Text */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">7. Enter Text in Text Box</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">📝 How to Enter Text Without sendKeys() Method (IMPORTANT)</h4>
                  <div className="bg-green-100 rounded-lg p-3 mb-2">
                    <p className="text-green-800 text-sm font-medium">We can enter text in text box using JavaScript Executor <code>value</code> keyword</p>
                  </div>
                  <p className="text-green-700 text-xs">This is an alternative approach when sendKeys() method fails or doesn't work properly</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    WebElement wb = driver.findElement(By.id("id value"));<br/>
                    JavascriptExecutor js = (JavascriptExecutor) driver;<br/>
                    js.executeScript("arguments[0].value='Expected Value';", wb);
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Facebook Registration Example</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                    <pre>{`ChromeDriver driver = new ChromeDriver();
driver.get("https://www.facebook.com/reg");
Thread.sleep(4000);

WebElement wb1 = driver.findElement(By.name("firstname"));
WebElement wb2 = driver.findElement(By.name("lastname"));

JavascriptExecutor js = (JavascriptExecutor) driver;

js.executeScript("arguments[0].value='Sonali';", wb1);
js.executeScript("arguments[0].value='bhosale';", wb2);`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Handle Dropdown */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">8. Handle Dropdown</h3>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Dropdown Selection Syntax</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                    WebElement wb = driver.findElement(By.id("id value"));<br/>
                    JavascriptExecutor js = (JavascriptExecutor) driver;<br/>
                    js.executeScript("arguments[0].value='Expected Value';", wb);
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Date Selection Example - Select 10 Nov 2010</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                    <pre>{`ChromeDriver driver = new ChromeDriver();
driver.get("https://www.facebook.com/reg");
Thread.sleep(4000);

WebElement wb1 = driver.findElement(By.name("birthday_day"));
WebElement wb2 = driver.findElement(By.name("birthday_month"));

JavascriptExecutor js = (JavascriptExecutor) driver;

// Select 10 Day
js.executeScript("arguments[0].value='10';", wb1);

// Select Nov month (11th month)
js.executeScript("arguments[0].value='11';", wb2);

// Select 2010 year using getElementsByName
js.executeScript("document.getElementsByName('birthday_year')[0].value='2010';");`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missing Operations 9-15 */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Additional JavaScript Executor Operations (9-16)</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-yellow-900 mb-4">🚧 Advanced Operations Coming Soon</h3>
              <p className="text-yellow-800 text-sm mb-4">
                The following operations will be covered in upcoming lessons with detailed examples:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="bg-yellow-100 rounded p-2 text-sm">
                    <span className="font-medium">9.</span> Mouse over event
                  </div>
                  <div className="bg-yellow-100 rounded p-2 text-sm">
                    <span className="font-medium">10.</span> Scroll down or scroll up
                  </div>
                  <div className="bg-yellow-100 rounded p-2 text-sm">
                    <span className="font-medium">11.</span> Capture browser title
                  </div>
                  <div className="bg-yellow-100 rounded p-2 text-sm">
                    <span className="font-medium">12.</span> Capture browser URL
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-yellow-100 rounded p-2 text-sm">
                    <span className="font-medium">13.</span> Create border for element
                  </div>
                  <div className="bg-yellow-100 rounded p-2 text-sm">
                    <span className="font-medium">14.</span> Highlight element with color
                  </div>
                  <div className="bg-yellow-100 rounded p-2 text-sm">
                    <span className="font-medium">15.</span> Generate custom alerts/confirm/prompt popups
                  </div>
                  <div className="bg-yellow-100 rounded p-2 text-sm">
                    <span className="font-medium">16.</span> Closed shadow root handling
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DemoQA Dropdown Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">DemoQA Dropdown Example</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Dynamic Dropdown Selection on DemoQA</h3>
            
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-3">URL: https://demoqa.com/automation-practice-form</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                  <pre>{`// Step 1: Open a chrome browser
ChromeDriver driver = new ChromeDriver();

// Step 2: Open a URL
driver.get("https://demoqa.com/automation-practice-form");

// Step 3: Locate the dropdown element
WebElement wb1 = driver.findElement(By.xpath("dropdown_xpath"));

// Step 4: Convert WebDriver object into JavascriptExecutor
JavascriptExecutor js = (JavascriptExecutor) driver;

// Step 5: Click on dropdown
js.executeScript("arguments[0].click();", wb1);

// Step 6: Locate all dropdown values
List<WebElement> listValues = driver.findElements(By.xpath("options_xpath"));

// Step 7: Iterate all values using enhanced for loop
for(WebElement value : listValues) {
    // Step 8: Capture actual dropdown value using getText() method
    String actualValue = value.getText();
    
    // Step 9: Check expected value is present or not
    if(actualValue.equals("Expected Value")) {
        // Step 10: Click on dropdown value and break the loop
        js.executeScript("arguments[0].click();", value);
        break;
    }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Dropdown Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Advanced Dropdown Handling</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Dynamic Dropdown Selection Process</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">Step-by-Step Process</h4>
                <ol className="text-blue-800 text-sm space-y-2 list-decimal list-inside">
                  <li>Locate the dropdown element</li>
                  <li>Convert WebDriver object to JavaScriptExecutor</li>
                  <li>Click on dropdown using JavaScript</li>
                  <li>Locate all dropdown values</li>
                  <li>Iterate through values using enhanced for loop</li>
                  <li>Capture actual dropdown value using getText() method</li>
                  <li>Check if expected value is present</li>
                  <li>Click on dropdown value and break the loop</li>
                </ol>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Generic Dropdown Selection Code</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                  <pre>{`// Step 1: Locate dropdown element
WebElement wb1 = driver.findElement(By.xpath("dropdown_xpath"));

// Step 2: Convert to JavaScriptExecutor
JavascriptExecutor js = (JavascriptExecutor) driver;

// Step 3: Click on dropdown
js.executeScript("arguments[0].click();", wb1);

// Step 4: Locate all dropdown values
List<WebElement> listValues = driver.findElements(By.xpath("options_xpath"));

// Step 5-8: Iterate and select
for(WebElement value : listValues) {
    // Step 6: Capture actual dropdown value
    String actualValue = value.getText();
    
    // Step 7: Check expected value
    if(actualValue.equals("Expected Value")) {
        // Step 8: Click and break
        js.executeScript("arguments[0].click();", value);
        break;
    }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assignment Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">📝 Assignment</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-orange-900 mb-4">🎯 Practice Assignment</h3>
              
              <div className="space-y-4">
                <div className="bg-orange-100 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">Assignment URL:</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono break-all">
                    https://portal2.passportindia.gov.in/AppOnlineProject/user/RegistrationBaseAction?request_locale=en
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-3">Task Instructions:</h4>
                  <ul className="text-red-800 text-sm space-y-2">
                    <li>• Practice all JavaScript Executor operations learned in this lesson</li>
                    <li>• Use the Passport India registration form for hands-on practice</li>
                    <li>• Implement dropdown handling, text input, and element clicking</li>
                    <li>• Apply both JavaScript Executor and WebDriver approaches</li>
                    <li>• Compare the effectiveness of different methods</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-2">📝 Practice Focus Areas:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-1 text-sm">
                      <div>✓ Browser navigation operations</div>
                      <div>✓ Element clicking with JS Executor</div>
                      <div>✓ Text input without sendKeys()</div>
                      <div>✓ Dropdown value selection</div>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>✓ Dynamic element handling</div>
                      <div>✓ Alternative method comparison</div>
                      <div>✓ Error handling scenarios</div>
                      <div>✓ Code optimization techniques</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <Quiz questions={quizQuestions} />

        {/* Key Points Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Key Points Summary</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">🎯 JavaScript Executor Essentials</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Interface for executing JavaScript in Selenium</li>
                    <li>• Use when WebDriver methods fail</li>
                    <li>• Provides executeScript() and executeAsyncScript()</li>
                    <li>• Requires type casting from WebDriver</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">⚡ Browser Operations</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• window.location for opening URLs</li>
                    <li>• window.open() for new tabs</li>
                    <li>• history.go() for navigation</li>
                    <li>• history.go(0) for refresh</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">📈 Element Operations</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• arguments[0].click() for clicking</li>
                    <li>• arguments[0].value for text input</li>
                    <li>• getElementsByName for direct access</li>
                    <li>• Works with WebElement references</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">🚨 Best Practices</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Use as fallback when WebDriver fails</li>
                    <li>• Always handle exceptions properly</li>
                    <li>• Test across different browsers</li>
                    <li>• Combine with WebDriver methods effectively</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DayLayout>
  );
}