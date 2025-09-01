import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day35() {
  const quizQuestions = [
    {
      id: 1,
      question: "What does SSL stand for in web security?",
      options: [
        "Secure Socket Layers",
        "Secure System Layers",
        "System Socket Layers",
        "Secure Software Layers"
      ],
      correctAnswer: 0,
      explanation: "SSL stands for Secure Socket Layers, which provides encryption and security for web communications."
    },
    {
      id: 2,
      question: "Which method is used to accept insecure SSL certificates in Selenium?",
      options: [
        "acceptSSL(true)",
        "setAcceptInsecureCerts(true)",
        "allowInsecureCerts(true)",
        "enableSSL(true)"
      ],
      correctAnswer: 1,
      explanation: "setAcceptInsecureCerts(true) method is used with ChromeOptions to accept insecure SSL certificates."
    },
    {
      id: 3,
      question: "Which library is used for file upload automation in Selenium?",
      options: [
        "FileUpload Library",
        "AutoIT Library",
        "Upload Library",
        "File Library"
      ],
      correctAnswer: 1,
      explanation: "AutoIT Library is used for file upload automation in Selenium to handle Windows file dialogs."
    },
    {
      id: 4,
      question: "What is the correct sequence for AutoIT file upload?",
      options: [
        "ControlClick → ControlFocus → ControlSetText",
        "ControlSetText → ControlFocus → ControlClick",
        "ControlFocus → ControlSetText → ControlClick",
        "ControlFocus → ControlClick → ControlSetText"
      ],
      correctAnswer: 2,
      explanation: "The correct sequence is: ControlFocus (focus on text box) → ControlSetText (enter file path) → ControlClick (click Open button)."
    },
    {
      id: 5,
      question: "How do you execute AutoIT script in Selenium?",
      options: [
        "AutoIT.execute()",
        "Runtime.getRuntime().exec()",
        "Process.start()",
        "System.exec()"
      ],
      correctAnswer: 1,
      explanation: "Runtime.getRuntime().exec() method is used to execute AutoIT .exe script from Selenium Java code."
    }
  ];

  return (
    <DayLayout
      dayNumber={35}
      title="SSL Certificate & File Upload Handling"
      description="Learn to handle SSL certificates and automate file uploads using AutoIT library in Selenium WebDriver."
      previousDay="/day34"
      nextDay="/day36"
    >
      <div className="max-w-4xl mx-auto">
        {/* SSL Certificate Handling */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">SSL Certificate Handling in Selenium</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-4">Understanding SSL Certificates</h3>
              <p className="text-blue-800 text-sm mb-4">
                SSL (Secure Socket Layers) certificates provide encryption and security for web communications. 
                In testing environments, self-signed certificates often cause browser security warnings.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">SSL Certificate Types</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• <strong>Production:</strong> Valid SSL certificates</li>
                    <li>• <strong>QA/UAT:</strong> Self-signed certificates</li>
                    <li>• <strong>Development:</strong> Local certificates</li>
                    <li>• <strong>Testing:</strong> Temporary certificates</li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Common SSL Issues</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• "Your connection is not private"</li>
                    <li>• "This site is not secure"</li>
                    <li>• Certificate validation errors</li>
                    <li>• Selenium script failures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SSL Solution */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-6">SSL Certificate Solution</h3>
            
            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-3">4-Step SSL Handling Process</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="bg-white rounded p-3 border border-green-200">
                      <div className="font-medium text-green-900 text-sm">Step 1: Create ChromeOptions</div>
                      <div className="text-green-800 text-xs">ChromeOptions opt = new ChromeOptions();</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-200">
                      <div className="font-medium text-green-900 text-sm">Step 2: Accept Insecure Certs</div>
                      <div className="text-green-800 text-xs">opt.setAcceptInsecureCerts(true);</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white rounded p-3 border border-green-200">
                      <div className="font-medium text-green-900 text-sm">Step 3: Create Driver</div>
                      <div className="text-green-800 text-xs">ChromeDriver driver = new ChromeDriver(opt);</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-green-200">
                      <div className="font-medium text-green-900 text-sm">Step 4: Navigate to URL</div>
                      <div className="text-green-800 text-xs">driver.get("https://self-signed.badssl.com/");</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-purple-300">package</span> Tutorial20;<br/><br/>
                
                <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/>
                <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeOptions;<br/><br/>
                
                <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo1</span> {`{`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) {`{`}<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{`// Step 1: Create ChromeOptions object`}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeOptions</span> opt = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeOptions</span>();<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{`// Step 2: Accept insecure SSL certificates`}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opt.setAcceptInsecureCerts(<span className="text-yellow-300">true</span>);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{`// Step 3: Create ChromeDriver with options`}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>(opt);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{`// Step 4: Navigate to SSL protected site`}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://self-signed.badssl.com/"</span>);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.quit();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                {`}`}
              </div>
            </div>
          </div>
        </section>

        {/* File Upload with AutoIT */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">File Upload Using AutoIT</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-orange-900 mb-4">Why AutoIT for File Upload?</h3>
              <p className="text-orange-800 text-sm mb-4">
                Selenium cannot directly interact with Windows file dialogs. AutoIT library provides desktop automation 
                capabilities to handle file upload dialogs that appear when clicking file input elements.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-100 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">AutoIT Key Functions</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• <strong>ControlFocus:</strong> Focus on dialog elements</li>
                    <li>• <strong>ControlSetText:</strong> Enter file path</li>
                    <li>• <strong>ControlClick:</strong> Click dialog buttons</li>
                    <li>• <strong>Sleep:</strong> Add delays between actions</li>
                  </ul>
                </div>
                <div className="bg-orange-100 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">Control Parameters</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• <strong>Title:</strong> Dialog window title</li>
                    <li>• <strong>Text:</strong> Dialog text content</li>
                    <li>• <strong>ControlID:</strong> Element identifier</li>
                    <li>• <strong>Path:</strong> File location path</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* AutoIT Script Creation */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-6">AutoIT Script Creation Process</h3>
            
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-3">7-Step AutoIT Implementation</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-medium text-purple-900 text-sm">Step 1: Open AutoIT Script Editor</div>
                      <div className="text-purple-800 text-xs">Launch AutoIT SciTE Script Editor</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-medium text-purple-900 text-sm">Step 2: Focus on File Name Text Box</div>
                      <div className="text-purple-800 text-xs">ControlFocus("Open", "", "Edit1")</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-medium text-purple-900 text-sm">Step 3: Enter File Path</div>
                      <div className="text-purple-800 text-xs">ControlSetText("Open", "", "Edit1", "file_path")</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-medium text-purple-900 text-sm">Step 4: Click Open Button</div>
                      <div className="text-purple-800 text-xs">ControlClick("Open", "", "Button1")</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-medium text-purple-900 text-sm">Step 5: Compile Script</div>
                      <div className="text-purple-800 text-xs">Tools → Compile to generate .exe file</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-medium text-purple-900 text-sm">Step 6: Selenium Integration</div>
                      <div className="text-purple-800 text-xs">Click file input to open dialog</div>
                    </div>
                    <div className="bg-white rounded p-3 border border-purple-200">
                      <div className="font-medium text-purple-900 text-sm">Step 7: Execute AutoIT Script</div>
                      <div className="text-purple-800 text-xs">Runtime.getRuntime().exec("script.exe")</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AutoIT Script Example */}
              <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                <span className="text-gray-400">{`; AutoIT Script for File Upload`}</span><br/><br/>
                
                <span className="text-gray-400">{`; Step 1: Focus on File Name text box`}</span><br/>
                <span className="text-blue-300">ControlFocus</span>(<span className="text-green-300">"Open"</span>, <span className="text-green-300">""</span>, <span className="text-green-300">"Edit1"</span>)<br/>
                <span className="text-blue-300">Sleep</span>(<span className="text-yellow-300">2000</span>)<br/><br/>
                
                <span className="text-gray-400">{`; Step 2: Enter file path in text box`}</span><br/>
                <span className="text-blue-300">ControlSetText</span>(<span className="text-green-300">"Open"</span>, <span className="text-green-300">""</span>, <span className="text-green-300">"Edit1"</span>, <span className="text-green-300">"C:\\Users\\praf0\\OneDrive\\Desktop\\Soft-Tech Classes, Pune.xlsx"</span>)<br/>
                <span className="text-blue-300">Sleep</span>(<span className="text-yellow-300">2000</span>)<br/><br/>
                
                <span className="text-gray-400">{`; Step 3: Click Open button`}</span><br/>
                <span className="text-blue-300">ControlClick</span>(<span className="text-green-300">"Open"</span>, <span className="text-green-300">""</span>, <span className="text-green-300">"Button1"</span>)<br/>
                <span className="text-blue-300">Sleep</span>(<span className="text-yellow-300">2000</span>)
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">File Upload Implementation Examples</h2>
          
          <div className="space-y-8">
            {/* Example 1: DemoQA File Upload */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Example 1: DemoQA File Upload</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">URL: https://demoqa.com/upload-download</h4>
                  <p className="text-blue-800 text-sm">Task: Upload Excel file using AutoIT automation</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">package</span> Tutorial20;<br/><br/>
                  
                  <span className="text-purple-300">import</span> java.io.IOException;<br/>
                  <span className="text-purple-300">import</span> java.time.Duration;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.WebElement;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.interactions.Actions;<br/><br/>
                  
                  <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo2</span> {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) <span className="text-purple-300">throws</span> <span className="text-blue-300">IOException</span>, <span className="text-blue-300">InterruptedException</span> {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.manage().window().maximize();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://demoqa.com/upload-download"</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.manage().timeouts().implicitlyWait(<span className="text-blue-300">Duration</span>.ofSeconds(<span className="text-yellow-300">30</span>));<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{`// Locate file input element`}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> wb = driver.findElement(<span className="text-blue-300">By</span>.xpath(<span className="text-green-300">"//label[text()='Select a file']/following-sibling::input"</span>));<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;act.click(wb).build().perform();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Thread</span>.sleep(<span className="text-yellow-300">3000</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{`// Execute AutoIT script for file upload`}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Runtime</span>.getRuntime().exec(<span className="text-green-300">"C:\\\\Users\\\\praf0\\\\OneDrive\\\\Desktop\\\\Upload File folder\\\\UploadDocuments.exe"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.quit();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>
              </div>
            </div>

            {/* Example 2: Automation Testing File Upload */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Example 2: Automation Testing File Upload</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">URL: https://demo.automationtesting.in/FileUpload.html</h4>
                  <p className="text-green-800 text-sm">Task: Upload image file using AutoIT automation</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-purple-300">package</span> Tutorial20;<br/><br/>
                  
                  <span className="text-purple-300">import</span> java.io.IOException;<br/>
                  <span className="text-purple-300">import</span> java.time.Duration;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.By;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.WebElement;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.chrome.ChromeDriver;<br/>
                  <span className="text-purple-300">import</span> org.openqa.selenium.interactions.Actions;<br/><br/>
                  
                  <span className="text-purple-300">public class</span> <span className="text-blue-300">Demo3</span> {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">public static void</span> <span className="text-yellow-300">main</span>(<span className="text-blue-300">String</span>[] args) <span className="text-purple-300">throws</span> <span className="text-blue-300">InterruptedException</span>, <span className="text-blue-300">IOException</span> {`{`}<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">ChromeDriver</span> driver = <span className="text-purple-300">new</span> <span className="text-blue-300">ChromeDriver</span>();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.get(<span className="text-green-300">"https://demo.automationtesting.in/FileUpload.html"</span>);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.manage().window().maximize();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.manage().timeouts().implicitlyWait(<span className="text-blue-300">Duration</span>.ofSeconds(<span className="text-yellow-300">30</span>));<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{`// Locate file input element`}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">WebElement</span> wb = driver.findElement(<span className="text-blue-300">By</span>.id(<span className="text-green-300">"input-4"</span>));<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Actions</span> act = <span className="text-purple-300">new</span> <span className="text-blue-300">Actions</span>(driver);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;act.click(wb).build().perform();<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Thread</span>.sleep(<span className="text-yellow-300">4000</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">{`// Execute AutoIT script for image upload`}</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">Runtime</span>.getRuntime().exec(<span className="text-green-300">"C:\\\\Users\\\\praf0\\\\OneDrive\\\\Desktop\\\\Upload File folder\\\\UploadImage.exe"</span>);<br/><br/>
                  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.quit();<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                  {`}`}
                </div>

                {/* AutoIT Script for Image Upload */}
                <div className="bg-gray-800 rounded-lg p-4 text-white text-sm font-mono">
                  <span className="text-gray-400">{`; AutoIT Script for Image Upload (UploadImage.exe)`}</span><br/><br/>
                  
                  <span className="text-blue-300">ControlFocus</span>(<span className="text-green-300">"Open"</span>, <span className="text-green-300">""</span>, <span className="text-green-300">"Edit1"</span>)<br/><br/>
                  
                  <span className="text-blue-300">ControlSetText</span>(<span className="text-green-300">"Open"</span>, <span className="text-green-300">""</span>, <span className="text-green-300">"Edit1"</span>, <span className="text-green-300">"C:\\Users\\praf0\\OneDrive\\Pictures\\Screenshots\\Screenshot 2023-11-23 111341.png"</span>)<br/><br/>
                  
                  <span className="text-blue-300">ControlClick</span>(<span className="text-green-300">"Open"</span>, <span className="text-green-300">""</span>, <span className="text-green-300">"Button1"</span>)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Best Practices & Tips</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">✅ SSL Certificate Best Practices</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Use setAcceptInsecureCerts(true) for testing</li>
                    <li>• Only for QA/UAT environments</li>
                    <li>• Never use in production testing</li>
                    <li>• Document SSL handling in test cases</li>
                    <li>• Test with valid certificates when possible</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">🔧 AutoIT Implementation Tips</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Create separate AutoIT scripts for different file types</li>
                    <li>• Use absolute file paths in AutoIT scripts</li>
                    <li>• Add Sleep() delays between AutoIT actions</li>
                    <li>• Test AutoIT scripts independently first</li>
                    <li>• Keep AutoIT .exe files in project resources</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-3">❌ Common Mistakes</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Not handling SSL certificates in test environments</li>
                    <li>• Using incorrect AutoIT control IDs</li>
                    <li>• Missing Thread.sleep() before AutoIT execution</li>
                    <li>• Hardcoding file paths in AutoIT scripts</li>
                    <li>• Not compiling AutoIT scripts to .exe</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 mb-3">⚠️ Important Notes</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• AutoIT works only on Windows OS</li>
                    <li>• File dialog titles may vary by browser</li>
                    <li>• Control IDs might change with OS updates</li>
                    <li>• Always verify file upload success</li>
                  </ul>
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
          <h2 className="text-2xl font-light text-gray-900 mb-8">Key Takeaways</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">🔒 SSL Certificate Handling</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• SSL provides web security encryption</li>
                    <li>• Self-signed certificates cause browser warnings</li>
                    <li>• Use setAcceptInsecureCerts(true) for testing</li>
                    <li>• ChromeOptions required for SSL configuration</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">📁 File Upload Automation</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• AutoIT handles Windows file dialogs</li>
                    <li>• ControlFocus → ControlSetText → ControlClick</li>
                    <li>• Compile AutoIT scripts to .exe files</li>
                    <li>• Execute using Runtime.getRuntime().exec()</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">⚡ Implementation Strategy</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Test SSL handling in QA environments</li>
                    <li>• Create reusable AutoIT scripts</li>
                    <li>• Add appropriate delays for dialog handling</li>
                    <li>• Verify upload success after automation</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">🎯 Remember</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• SSL handling only for test environments</li>
                    <li>• AutoIT is Windows-specific solution</li>
                    <li>• Always test AutoIT scripts independently</li>
                    <li>• Use absolute paths in file operations</li>
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