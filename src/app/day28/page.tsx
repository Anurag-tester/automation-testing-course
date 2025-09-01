import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export default function Day28() {
  const quizQuestions = [
    {
      id: 1,
      question: "Which method is used to switch focus from frame window to top window?",
      options: [
        "driver.switchTo().parentFrame()",
        "driver.switchTo().defaultContent()",
        "driver.switchTo().mainWindow()",
        "driver.switchTo().topFrame()"
      ],
      correctAnswer: 1,
      explanation: "defaultContent() method switches focus from frame window to the top/main window."
    },
    {
      id: 2,
      question: "What symbol is used with CSS selector to select elements by ID?",
      options: [
        ".",
        "#",
        "*",
        "@"
      ],
      correctAnswer: 1,
      explanation: "The # symbol is used with CSS selector to select elements by their ID attribute."
    },
    {
      id: 3,
      question: "Which Actions class method is used for mouse hover operation?",
      options: [
        "hoverToElement()",
        "mouseHover()",
        "moveToElement()",
        "hoverOver()"
      ],
      correctAnswer: 2,
      explanation: "moveToElement() method in Actions class is used to perform mouse hover operations."
    },
    {
      id: 4,
      question: "What is the return type of isDisplayed() method?",
      options: [
        "String",
        "void",
        "WebElement",
        "boolean"
      ],
      correctAnswer: 3,
      explanation: "isDisplayed() method returns a boolean value (true/false) indicating if the element is displayed."
    },
    {
      id: 5,
      question: "Which XPath method is used to find elements containing specific text?",
      options: [
        "text()",
        "contains()",
        "starts-with()",
        "normalize-space()"
      ],
      correctAnswer: 1,
      explanation: "contains() method in XPath is used to find elements that contain specific text or attribute values."
    }
  ];

  return (
    <DayLayout
      dayNumber={28}
      title="Selenium Roadmap & Comprehensive Review"
      description="Complete roadmap covering all Selenium concepts including browser operations, locators, web elements, Actions class, alerts, frames, and dropdowns."
      previousDay="/day27"
      nextDay="/day29"
    >
      <div className="max-w-4xl mx-auto">
        {/* Selenium Roadmap Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Selenium Complete Roadmap</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">✨ Comprehensive Selenium Guide</h3>
              <p className="text-gray-600 text-sm">
                This roadmap covers all essential Selenium concepts from basic browser operations to advanced automation techniques. 
                Master these concepts to become proficient in web automation testing.
              </p>
            </div>
          </div>
        </section>

        {/* Browser Operations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">🚀 Browser Operations</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Basic Operations</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                      ChromeDriver driver = new ChromeDriver();
                    </div>
                    <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                      driver.get("url");
                    </div>
                    <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                      driver.manage().window().maximize();
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Information Capture</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                      String title = driver.getTitle();
                    </div>
                    <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                      String url = driver.getCurrentUrl();
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">Window Management</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                      driver.switchTo().newWindow(WindowType.TAB);
                    </div>
                    <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                      driver.switchTo().newWindow(WindowType.WINDOW);
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">Navigation & Cleanup</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                      driver.navigate().to("url");
                    </div>
                    <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                      driver.close(); // Current window
                    </div>
                    <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                      driver.quit(); // All browsers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selenium Locators */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">🔍 Selenium Locators</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Basic Locators</h4>
                <div className="space-y-3">
                  {[
                    { name: "ID", code: 'By.id("idValue")' },
                    { name: "Name", code: 'By.name("nameValue")' },
                    { name: "Class", code: 'By.className("classValue")' },
                    { name: "Tag", code: 'By.tagName("tagName")' }
                  ].map((locator, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm font-medium text-gray-700 mb-1">{locator.name}</div>
                      <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                        driver.findElement({locator.code});
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Advanced Locators</h4>
                <div className="space-y-3">
                  {[
                    { name: "Link Text", code: 'By.linkText("linkText")' },
                    { name: "Partial Link", code: 'By.partialLinkText("partial")' },
                    { name: "CSS Selector", code: 'By.cssSelector("css")' },
                    { name: "XPath", code: 'By.xpath("xpath")' }
                  ].map((locator, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm font-medium text-gray-700 mb-1">{locator.name}</div>
                      <div className="bg-gray-900 rounded p-2 text-white font-mono text-xs">
                        driver.findElement({locator.code});
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Selector Techniques */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">🎯 CSS Selector Techniques</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">Basic CSS Selectors</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>ID:</strong> <code>#idValue</code></div>
                    <div><strong>Class:</strong> <code>.classValue</code></div>
                    <div><strong>Tag:</strong> <code>tagName</code></div>
                    <div><strong>Combined:</strong> <code>tagName#idValue</code></div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">Attribute Selectors</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Exact:</strong> <code>input[attribute='value']</code></div>
                    <div><strong>Starts with:</strong> <code>input[attribute^='start']</code></div>
                    <div><strong>Ends with:</strong> <code>input[attribute$='end']</code></div>
                    <div><strong>Contains:</strong> <code>input[attribute*='contains']</code></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-3">XPath Methods</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Single Attribute:</strong> <code>//tag[@att='value']</code></div>
                    <div><strong>Multiple Attributes:</strong> <code>//tag[@att='value' and @att2='value2']</code></div>
                    <div><strong>Text:</strong> <code>//tag[text()='value']</code></div>
                    <div><strong>Contains:</strong> <code>//tag[contains(@att,'value')]</code></div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-3">XPath Axes</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Child:</strong> <code>/child::tagName</code></div>
                    <div><strong>Descendant:</strong> <code>/descendant::tagName</code></div>
                    <div><strong>Following:</strong> <code>/following-sibling::tagName</code></div>
                    <div><strong>Preceding:</strong> <code>/preceding-sibling::tagName</code></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Element Operations */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">⚙️ Web Element Operations</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-3">Text Box Operations</h4>
                <div className="space-y-2 text-sm">
                  <div>• <code>isDisplayed()</code> → boolean</div>
                  <div>• <code>isEnabled()</code> → boolean</div>
                  <div>• <code>sendKeys()</code> → void</div>
                  <div>• <code>clear()</code> → void</div>
                  <div>• <code>getAttribute()</code> → String</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">Button/Link Operations</h4>
                <div className="space-y-2 text-sm">
                  <div>• <code>isDisplayed()</code> → boolean</div>
                  <div>• <code>isEnabled()</code> → boolean</div>
                  <div>• <code>click()</code> → void</div>
                  <div>• <code>getText()</code> → String</div>
                  <div>• <code>getAttribute()</code> → String</div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-3">Radio/Checkbox Operations</h4>
                <div className="space-y-2 text-sm">
                  <div>• <code>isDisplayed()</code> → boolean</div>
                  <div>• <code>isEnabled()</code> → boolean</div>
                  <div>• <code>isSelected()</code> → boolean</div>
                  <div>• <code>click()</code> → void</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Actions Class */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">🖱️ Actions Class</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-3">Mouse Events</h4>
                  <div className="space-y-2 text-sm">
                    <div>• <code>click()</code> - Single click</div>
                    <div>• <code>doubleClick()</code> - Double click</div>
                    <div>• <code>contextClick()</code> - Right click</div>
                    <div>• <code>moveToElement()</code> - Mouse hover</div>
                    <div>• <code>dragAndDrop()</code> - Drag and drop</div>
                    <div>• <code>scrollToElement()</code> - Scroll</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">Keyboard Events</h4>
                  <div className="space-y-2 text-sm">
                    <div>• <code>keyDown(Keys.CONTROL)</code></div>
                    <div>• <code>keyUp(Keys.CONTROL)</code></div>
                    <div>• <code>sendKeys("text")</code></div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-3">Action Chain</h4>
                  <div className="space-y-2 text-sm">
                    <div>• <code>build()</code> - Combine actions</div>
                    <div>• <code>perform()</code> - Execute actions</div>
                  </div>
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
                  <h4 className="font-medium text-blue-900 mb-2">🎯 Locator Strategy</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Prefer ID and Name locators for stability</li>
                    <li>• Use CSS selectors for better performance</li>
                    <li>• XPath for complex element relationships</li>
                    <li>• Avoid absolute XPath paths</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">⚡ Actions Best Practices</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Always call perform() after build()</li>
                    <li>• Use explicit waits before actions</li>
                    <li>• Handle stale element exceptions</li>
                    <li>• Chain multiple actions efficiently</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">🔄 Frame Handling</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Always switch to frame before interaction</li>
                    <li>• Use defaultContent() to return to main</li>
                    <li>• Handle nested frames carefully</li>
                    <li>• Check frame existence before switching</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">🚨 Alert Management</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Handle different alert types appropriately</li>
                    <li>• Use explicit waits for alert presence</li>
                    <li>• Capture alert text before dismissing</li>
                    <li>• Handle authentication popups via URL</li>
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