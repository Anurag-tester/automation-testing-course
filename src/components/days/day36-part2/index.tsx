import DayLayout from '@/components/DayLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Code, Scroll, AlertCircle, Palette, Monitor, Eye, Brain } from 'lucide-react'
import Link from 'next/link'
import LazyQuiz from '@/components/LazyQuiz'

export default function Day36Part2() {
  return (
    <DayLayout
      dayNumber={36}
      title="JavaScript Executor - Scroll, Alerts & Styling"
      description="Master advanced JavaScript Executor techniques including scrolling, custom alerts, element highlighting, border creation, and closed shadow root handling."
      previousDay="/javascript-executor-interface-advanced-operations"
      nextDay="/api-testing-introduction-postman"
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Day 36 Part 2: JavaScript Executor Advanced</h1>
            <p className="text-gray-600">Scrolling, Alerts, Styling & Browser Operations</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="bg-purple-100 text-purple-700 border-purple-200">JavaScript Executor</Badge>
          <Badge className="bg-blue-100 text-blue-700 border-blue-200">ScrollIntoView</Badge>
          <Badge className="bg-orange-100 text-orange-700 border-orange-200">Custom Alerts</Badge>
          <Badge className="bg-green-100 text-green-700 border-green-200">Element Styling</Badge>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          Master advanced JavaScript Executor techniques for scrolling, creating custom alerts, element highlighting, and advanced browser operations.
        </p>
      </div>

      {/* Scroll Operations */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scroll className="w-5 h-5 text-blue-600" />
            Scroll Operations with JavaScript Executor
          </CardTitle>
          <CardDescription>
            Learn to scroll elements into view using JavaScript Executor
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Scroll Implementation Steps</h4>
            <ol className="space-y-1 text-sm text-blue-800 list-decimal list-inside">
              <li>Locate the target WebElement</li>
              <li>Convert WebDriver to JavascriptExecutor</li>
              <li>Use executeScript() with scrollIntoView() method</li>
              <li>Pass WebElement as argument</li>
            </ol>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Scroll Implementation Example</h4>
            <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
              <span className="text-gray-400">{`// Locate the element`}</span><br/>
              <span className="text-blue-300">WebElement</span> wb = driver.findElement(<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">By</span>.xpath(<span className="text-green-300">"//h2[text()='Bus Booking redDeals']"</span>));<br/><br/>
              
              <span className="text-gray-400">{`// Convert to JavascriptExecutor`}</span><br/>
              <span className="text-blue-300">JavascriptExecutor</span> js = (<span className="text-blue-300">JavascriptExecutor</span>)driver;<br/><br/>
              
              <span className="text-gray-400">{`// Scroll element into view`}</span><br/>
              js.executeScript(<span className="text-green-300">"arguments[0].scrollIntoView();"</span>, wb);<br/><br/>
              
              <span className="text-gray-400">{`// Scroll with alignment (true = top)`}</span><br/>
              js.executeScript(<span className="text-green-300">"arguments[0].scrollIntoView(true);"</span>, wb);
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Complete Scroll Example</h4>
            <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
              <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
              driver.manage().window().maximize();<br/>
              driver.get(<span className="text-green-300">"https://www.redbus.in/"</span>);<br/><br/>
              
              <span className="text-blue-300">WebElement</span> wb = driver.findElement(<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">By</span>.xpath(<span className="text-green-300">"//h2[text()='Bus Booking redDeals']"</span>));<br/><br/>
              
              <span className="text-blue-300">JavascriptExecutor</span> js = (<span className="text-blue-300">JavascriptExecutor</span>) driver;<br/>
              js.executeScript(<span className="text-green-300">"arguments[0].scrollIntoView(true);"</span>, wb);
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Custom Alerts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            Custom Alert Generation
          </CardTitle>
          <CardDescription>
            Create and handle custom JavaScript alerts, confirms, and prompts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h5 className="font-medium text-red-900 mb-2">Alert Popup</h5>
              <p className="text-sm text-red-800 mb-2">2 objects:</p>
              <ul className="text-xs text-red-700 space-y-1">
                <li>• OK button</li>
                <li>• Physical text</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h5 className="font-medium text-yellow-900 mb-2">Confirm Popup</h5>
              <p className="text-sm text-yellow-800 mb-2">3 objects:</p>
              <ul className="text-xs text-yellow-700 space-y-1">
                <li>• OK button</li>
                <li>• Cancel button</li>
                <li>• Physical text</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h5 className="font-medium text-green-900 mb-2">Prompt Popup</h5>
              <p className="text-sm text-green-800 mb-2">4 objects:</p>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• OK button</li>
                <li>• Cancel button</li>
                <li>• Physical text</li>
                <li>• Text box</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Custom Alert Syntax</h4>
            <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
              <span className="text-gray-400">{`// Generate Alert`}</span><br/>
              js.executeScript(<span className="text-green-300">"alert('User is on Register Page');"</span>);<br/><br/>
              
              <span className="text-gray-400">{`// Generate Confirm`}</span><br/>
              js.executeScript(<span className="text-green-300">"confirm('User is on Register Page');"</span>);<br/><br/>
              
              <span className="text-gray-400">{`// Generate Prompt`}</span><br/>
              js.executeScript(<span className="text-green-300">"prompt('User is on Register Page');"</span>);
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Complete Alert Handling Example</h4>
            <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
              <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
              driver.get(<span className="text-green-300">"https://www.google.com"</span>);<br/><br/>
              
              <span className="text-blue-300">JavascriptExecutor</span> js = (<span className="text-blue-300">JavascriptExecutor</span>)driver;<br/>
              js.executeScript(<span className="text-green-300">"prompt('User is on Home Page');"</span>);<br/><br/>
              
              <span className="text-blue-300">Alert</span> alt = driver.switchTo().alert();<br/>
              alt.sendKeys(<span className="text-green-300">"Ankit"</span>);  <span className="text-gray-400">{`// For prompt popup`}</span><br/>
              alt.accept();           <span className="text-gray-400">{`// Click OK`}</span><br/>
              <span className="text-gray-400">{`// alt.dismiss();       // Click Cancel`}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Element Styling */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-green-600" />
            Element Styling & Highlighting
          </CardTitle>
          <CardDescription>
            Create borders and highlight elements for visual identification
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Create Element Border</h4>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="bg-gray-900 rounded-lg p-4 text-white text-xs font-mono">
                  <span className="text-gray-400">{`// Locate element`}</span><br/>
                  <span className="text-blue-300">WebElement</span> wb = driver.findElement(<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">By</span>.name(<span className="text-green-300">"firstname"</span>));<br/><br/>
                  
                  <span className="text-gray-400">{`// Convert to JS Executor`}</span><br/>
                  <span className="text-blue-300">JavascriptExecutor</span> js = <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;(<span className="text-blue-300">JavascriptExecutor</span>)driver;<br/><br/>
                  
                  <span className="text-gray-400">{`// Create red border`}</span><br/>
                  js.executeScript(<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">"arguments[0].style.border=" +</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">"'4px solid red';"</span>, wb);
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Highlight Element Background</h4>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="bg-gray-900 rounded-lg p-4 text-white text-xs font-mono">
                  <span className="text-gray-400">{`// Locate element`}</span><br/>
                  <span className="text-blue-300">WebElement</span> wb = driver.findElement(<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">By</span>.name(<span className="text-green-300">"websubmit"</span>));<br/><br/>
                  
                  <span className="text-gray-400">{`// Get current color`}</span><br/>
                  <span className="text-blue-300">String</span> actualColor = <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;wb.getCssValue(<span className="text-green-300">"background-color"</span>);<br/><br/>
                  
                  <span className="text-gray-400">{`// Convert to JS Executor`}</span><br/>
                  <span className="text-blue-300">JavascriptExecutor</span> js = <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;(<span className="text-blue-300">JavascriptExecutor</span>)driver;<br/><br/>
                  
                  <span className="text-gray-400">{`// Change background color`}</span><br/>
                  js.executeScript(<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">"arguments[0].style.backgroundColor=" +</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">"'rgb(204,0,204)';"</span>, wb);
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Blinking Effect Example</h4>
            <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
              <span className="text-blue-300">WebElement</span> wb = driver.findElement(<span className="text-blue-300">By</span>.name(<span className="text-green-300">"login"</span>));<br/>
              <span className="text-blue-300">String</span> actualColor = wb.getCssValue(<span className="text-green-300">"background-color"</span>);<br/>
              <span className="text-blue-300">JavascriptExecutor</span> js = (<span className="text-blue-300">JavascriptExecutor</span>) driver;<br/><br/>
              
              <span className="text-purple-300">for</span> (<span className="text-purple-300">int</span> i = <span className="text-yellow-300">0</span>; i &lt; <span className="text-yellow-300">200</span>; i++) {`{`}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;js.executeScript(<span className="text-green-300">"arguments[0].style.backgroundColor='rgb(255,0,0)';"</span>, wb);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Thread</span>.sleep(<span className="text-yellow-300">500</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;js.executeScript(<span className="text-green-300">"arguments[0].style.backgroundColor='rgb(204,0,204)';"</span>, wb);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Thread</span>.sleep(<span className="text-yellow-300">500</span>);<br/><br/>
              
              &nbsp;&nbsp;&nbsp;&nbsp;js.executeScript(<span className="text-green-300">"arguments[0].style.backgroundColor='"</span> + actualColor + <span className="text-green-300">"';"</span>, wb);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Thread</span>.sleep(<span className="text-yellow-300">500</span>);<br/>
              {`}`}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Browser Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-indigo-600" />
            Browser Information Capture
          </CardTitle>
          <CardDescription>
            Extract browser title and URL using JavaScript Executor
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Capture Browser Title</h4>
              <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                <span className="text-blue-300">String</span> title = js.executeScript(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">"return document.title"</span>).toString();<br/><br/>
                
                <span className="text-blue-300">System</span>.out.println(title);
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Capture Browser URL</h4>
              <div className="bg-gray-900 rounded-lg p-3 text-white text-sm font-mono">
                <span className="text-blue-300">String</span> url = js.executeScript(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">"return document.URL"</span>).toString();<br/><br/>
                
                <span className="text-blue-300">System</span>.out.println(url);
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Complete Browser Info Example</h4>
            <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
              <span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
              driver.get(<span className="text-green-300">"https://www.facebook.com"</span>);<br/><br/>
              
              <span className="text-blue-300">JavascriptExecutor</span> js = (<span className="text-blue-300">JavascriptExecutor</span>) driver;<br/><br/>
              
              <span className="text-blue-300">String</span> title = js.executeScript(<span className="text-green-300">"return document.title"</span>).toString();<br/>
              <span className="text-blue-300">System</span>.out.println(<span className="text-green-300">"Page Title: "</span> + title);<br/><br/>
              
              <span className="text-blue-300">String</span> url = js.executeScript(<span className="text-green-300">"return document.URL"</span>).toString();<br/>
              <span className="text-blue-300">System</span>.out.println(<span className="text-green-300">"Page URL: "</span> + url);
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Closed Shadow Root */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-gray-600" />
            Closed Shadow Root Handling
          </CardTitle>
          <CardDescription>
            Understanding closed shadow root limitations in Selenium
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">Important Note</h4>
            <p className="text-sm text-yellow-800">
              Selenium WebDriver does not support closed shadow root elements. JavaScript language must be used 
              to work with closed shadow root elements. In most current projects, closed shadow root elements 
              are rarely encountered.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Knowledge Check Quiz */}
      <LazyQuiz 
            questions={[
              {
                id: 1,
                question: "Which method is used to scroll an element into view using JavaScript Executor?",
                options: [
                  "arguments[0].scroll()",
                  "arguments[0].scrollIntoView()",
                  "arguments[0].scrollTo()",
                  "arguments[0].moveToView()"
                ],
                correctAnswer: 1,
                explanation: "arguments[0].scrollIntoView() is the correct method to scroll an element into the visible area of the browser window."
              },
              {
                id: 2,
                question: "How many objects are present in a JavaScript confirm popup?",
                options: [
                  "2 objects",
                  "3 objects", 
                  "4 objects",
                  "1 object"
                ],
                correctAnswer: 1,
                explanation: "A confirm popup has 3 objects: OK button, Cancel button, and physical text."
              },
              {
                id: 3,
                question: "Which JavaScript command creates a border around an element?",
                options: [
                  "arguments[0].border='3px solid red'",
                  "arguments[0].style.border='3px solid red'",
                  "arguments[0].css.border='3px solid red'",
                  "arguments[0].setBorder('3px solid red')"
                ],
                correctAnswer: 1,
                explanation: "arguments[0].style.border='3px solid red' is the correct syntax to create a border around an element using JavaScript Executor."
              },
              {
                id: 4,
                question: "How do you capture the browser title using JavaScript Executor?",
                options: [
                  "js.executeScript('return window.title')",
                  "js.executeScript('return document.title')",
                  "js.executeScript('return browser.title')",
                  "js.executeScript('return page.title')"
                ],
                correctAnswer: 1,
                explanation: "js.executeScript('return document.title') is the correct method to capture the browser title."
              },
              {
                id: 5,
                question: "What is the limitation with closed shadow root elements in Selenium?",
                options: [
                  "They load slowly",
                  "They are not visible",
                  "Selenium WebDriver does not support them",
                  "They require special drivers"
                ],
                correctAnswer: 2,
                explanation: "Selenium WebDriver does not support closed shadow root elements, requiring JavaScript language for interaction."
              }
            ]}
          />

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link href="/javascript-executor-interface-advanced-operations">
          <Button variant="outline" className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Previous: Day 36 - JavaScript Executor Part 1
          </Button>
        </Link>
        
        <div className="flex gap-3">
          <Link href="/interview-questions">
            <Button variant="outline" className="flex items-center gap-2">
              Interview Q&A
              <CheckCircle className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/practice">
            <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Practice Challenges
              <Code className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </DayLayout>
  )
}