import DayLayout from '@/components/DayLayout';
import Quiz from '@/components/Quiz';

export const metadata = {
  title: 'Day 31: Broken Link Detection | SDET Course',
  description: 'Learn to identify and validate broken links in web applications using HTTP response codes and URL connection testing.',
  keywords: 'broken links, link validation, http response codes, url testing, link checker, selenium links, link automation',
};

export default function Day31() {
  const quizQuestions = [
    {
      id: 1,
      question: "What HTTP response code series indicates valid links?",
      options: [
        "4** and 5** series",
        "1**, 2**, and 3** series",
        "Only 2** series",
        "Only 1** series"
      ],
      correctAnswer: 1,
      explanation: "HTTP response codes in 1**, 2**, and 3** series indicate valid links, while 4** and 5** series indicate invalid/broken links."
    },
    {
      id: 2,
      question: "Which method is used to get the response code from HttpURLConnection?",
      options: [
        "getCode()",
        "getStatus()",
        "getResponseCode()",
        "getHttpCode()"
      ],
      correctAnswer: 2,
      explanation: "getResponseCode() method is used to retrieve the HTTP response code from HttpURLConnection."
    },
    {
      id: 3,
      question: "What does a response code of 404 indicate?",
      options: [
        "Server error",
        "Success",
        "Client-side error (Page not found)",
        "Redirection"
      ],
      correctAnswer: 2,
      explanation: "404 is a client-side error code indicating that the requested page/resource was not found on the server."
    },
    {
      id: 4,
      question: "Which tag name is used to find all links on a webpage?",
      options: [
        "link",
        "href",
        "a",
        "url"
      ],
      correctAnswer: 2,
      explanation: "The 'a' tag (anchor tag) is used to find all links on a webpage using findElements(By.tagName('a'))."
    },
    {
      id: 5,
      question: "What attribute contains the URL of a link element?",
      options: [
        "src",
        "href",
        "url",
        "link"
      ],
      correctAnswer: 1,
      explanation: "The 'href' attribute of anchor tags contains the URL/link address that can be retrieved using getAttribute('href')."
    }
  ];

  return (
    <DayLayout
      dayNumber={31}
      title="Broken Link Detection"
      description="Learn to identify and validate broken links in web applications using HTTP response codes and URL connection testing."
      previousDay="/day30"
      nextDay="/day32"
    >
      <div className="max-w-4xl mx-auto">
        {/* Broken Links Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Understanding Broken Links</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-red-900 mb-4">What are Broken Links?</h3>
              <p className="text-red-800 text-sm mb-4">
                Broken links (also called invalid links) are hyperlinks that don't work properly - they either lead to non-existent pages, 
                return server errors, or fail to load due to various issues.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-100 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-2">Impact on Users</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Poor user experience</li>
                    <li>• Loss of credibility</li>
                    <li>• Reduced engagement</li>
                    <li>• Navigation frustration</li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-2">SEO Impact</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Lower search rankings</li>
                    <li>• Reduced crawl efficiency</li>
                    <li>• Negative site quality signals</li>
                    <li>• Lost link equity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HTTP Response Codes */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">HTTP Response Code Classification</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">Response Code Categories</h4>
                <p className="text-blue-800 text-sm mb-4">
                  HTTP response codes are grouped into series that indicate different types of responses from the server.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-3">✅ Valid Links (Response &lt; 400)</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 border border-green-200">
                        <div className="font-medium text-green-900 text-sm">1** Series - Informational</div>
                        <div className="text-green-700 text-xs">Provides information about the URL</div>
                        <div className="text-green-600 text-xs mt-1">Example: 100 Continue, 101 Switching Protocols</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-green-200">
                        <div className="font-medium text-green-900 text-sm">2** Series - Success</div>
                        <div className="text-green-700 text-xs">Request was successful</div>
                        <div className="text-green-600 text-xs mt-1">Example: 200 OK, 201 Created, 204 No Content</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-green-200">
                        <div className="font-medium text-green-900 text-sm">3** Series - Redirection</div>
                        <div className="text-green-700 text-xs">Navigates from one URL to another</div>
                        <div className="text-green-600 text-xs mt-1">Example: 301 Moved Permanently, 302 Found</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-3">❌ Invalid Links (Response ≥ 400)</h4>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 border border-red-200">
                        <div className="font-medium text-red-900 text-sm">4** Series - Client Errors</div>
                        <div className="text-red-700 text-xs">Client-side error codes</div>
                        <div className="text-red-600 text-xs mt-1">Example: 404 Not Found, 403 Forbidden, 400 Bad Request</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-red-200">
                        <div className="font-medium text-red-900 text-sm">5** Series - Server Errors</div>
                        <div className="text-red-700 text-xs">Server-side error codes</div>
                        <div className="text-red-600 text-xs mt-1">Example: 500 Internal Server Error, 502 Bad Gateway</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-2">📝 Quick Rule</h4>
                    <div className="text-yellow-800 text-sm">
                      <div>• Response code &lt; 400 = Valid link</div>
                      <div>• Response code ≥ 400 = Invalid/Broken link</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Single Link Validation */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Single Link Validation</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">6-Step Process for Link Validation</h4>
                <p className="text-blue-800 text-sm">
                  Learn the systematic approach to validate individual links using Java's URL and HttpURLConnection classes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="font-medium text-blue-900 text-sm mb-1">Step 1: Create URL Object</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      URL url = new URL("https://www.facebook.com");
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="font-medium text-blue-900 text-sm mb-1">Step 2: Open Connection</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      URLConnection urlCon = url.openConnection();
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="font-medium text-blue-900 text-sm mb-1">Step 3: Type Cast to HttpURLConnection</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      HttpURLConnection httpCon = (HttpURLConnection)urlCon;
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="font-medium text-blue-900 text-sm mb-1">Step 4: Connect to URL</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      httpCon.connect();
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="font-medium text-blue-900 text-sm mb-1">Step 5: Get Response Code</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      int responseCode = httpCon.getResponseCode();
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="font-medium text-blue-900 text-sm mb-1">Step 6: Validate Link</div>
                    <div className="bg-gray-900 rounded p-2 text-white text-xs font-mono">
                      if(responseCode &lt; 400) // Valid{'\n'}else // Invalid
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Complete Single Link Example</h4>
                <div className="bg-gray-900 rounded-lg p-4 text-white text-sm font-mono overflow-x-auto">
                  <pre>{`package Tutorial18;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;

public class Demo1 {
    public static void main(String[] args) throws IOException {

        // Step 1: Create URL object
        URL url = new URL("http://www.deadlinkcity.com/error-page.asp?e=404");

        // Step 2: Open connection
        URLConnection urlCon = url.openConnection();

        // Step 3: Type cast to HttpURLConnection
        HttpURLConnection httpCon = (HttpURLConnection) urlCon;

        // Step 4: Connect
        httpCon.connect();

        // Step 5: Get response code
        int responseCode = httpCon.getResponseCode();

        // Step 6: Validate link
        if (responseCode < 400) {
            System.out.println("Link is valid");
        } else {
            System.out.println("Link is invalid");
        }
    }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

                  {/* Quiz Section */}
        <Quiz questions={quizQuestions} />
        </section>

        {/* Key Points Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Key Points Summary</h2>
          
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">🎯 Link Validation Essentials</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Response codes &lt; 400 = Valid links</li>
                    <li>• Response codes ≥ 400 = Broken links</li>
                    <li>• Always validate HTTP/HTTPS links only</li>
                    <li>• Handle null and empty href attributes</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">⚡ Implementation Tips</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Use try-catch for robust error handling</li>
                    <li>• Set appropriate connection timeouts</li>
                    <li>• Filter links before validation</li>
                    <li>• Implement proper logging mechanisms</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">📈 Scalability Considerations</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Use thread pools for parallel processing</li>
                    <li>• Implement rate limiting for large sites</li>
                    <li>• Cache results to avoid duplicate checks</li>
                    <li>• Consider using headless browsers</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-2">🚨 Common Pitfalls</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Not handling relative URLs properly</li>
                    <li>• Ignoring JavaScript-generated links</li>
                    <li>• Missing timeout configurations</li>
                    <li>• Not considering authentication requirements</li>
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