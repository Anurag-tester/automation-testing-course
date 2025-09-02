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
            <h3 className="text-lg font-medium text-gray-900 mb-6">15 Different Operations You Can Perform</h3>
            
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
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-900 mb-3">Advanced Operations</h4>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>11. Capture browser title</li>
                  <li>12. Capture browser URL</li>
                  <li>13. Create border for element</li>
                  <li>14. Highlight element with color</li>
                  <li>15. Generate custom alerts</li>
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

            {/* Navigation Operations */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">3-5. Navigation Operations</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-2">Navigate Back</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono mb-2">
                    js.executeScript("history.go(-1)");
                  </div>
                  <p className="text-red-700 text-xs">Go back 1 page</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Navigate Forward</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono mb-2">
                    js.executeScript("history.go(+1)");
                  </div>
                  <p className="text-green-700 text-xs">Go forward 1 page</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Refresh Browser</h4>
                  <div className="bg-gray-900 rounded-lg p-2 text-white text-xs font-mono mb-2">
                    js.executeScript("history.go(0)");
                  </div>
                  <p className="text-blue-700 text-xs">Refresh current page</p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Navigation Example</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                  <pre>{`ChromeDriver driver = new ChromeDriver();
driver.get("https://www.google.com");
driver.navigate().to("https://www.facebook.com");
driver.navigate().to("https://www.redbus.com");
driver.navigate().to("https://www.wikipedia.org");
driver.navigate().to("https://www.saucedemo.com");

JavascriptExecutor js = (JavascriptExecutor) driver;

// Navigate back to redbus (go back 2 pages)
js.executeScript("history.go(-2)");

// Navigate forward to wikipedia (go forward 1 page)
js.executeScript("history.go(1)");

// Navigate back to google (go back 3 pages)
js.executeScript("history.go(-3)");

// Navigate forward to saucedemo (go forward 4 pages)
js.executeScript("history.go(+4)");

// Refresh page
js.executeScript("history.go(0)");`}</pre>
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
              <h3 className="text-lg font-medium text-gray-900 mb-4">Click on Element</h3>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">5 Ways to Click Element</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>1. WebElement click() method</li>
                    <li>2. WebElement submit() method</li>
                    <li>3. Actions class click() method</li>
                    <li>4. Actions class Keys.ENTER keyword</li>
                    <li>5. JavaScriptExecutor click() method</li>
                  </ul>
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
              <h3 className="text-lg font-medium text-gray-900 mb-4">Enter Text in Text Box</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Alternative to sendKeys() Method</h4>
                  <p className="text-green-800 text-sm">You can enter text in text box using JavaScript Executor value keyword</p>
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
              <h3 className="text-lg font-medium text-gray-900 mb-4">Handle Dropdown</h3>
              
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

        {/* Quiz Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Knowledge Check</h2>
          <Quiz questions={quizQuestions} />
        </section>

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