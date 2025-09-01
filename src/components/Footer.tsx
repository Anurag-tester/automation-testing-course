export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center">
          <h3 className="font-medium text-gray-900 mb-2">Automation Testing Course</h3>
          <p className="text-sm text-gray-600 mb-4">
            Comprehensive course covering Manual Testing, Java Programming, and Selenium WebDriver
          </p>
          
          {/* Buy me a Chai */}
          <div className="mb-4">
            <a 
              href="https://onlychai.neocities.org/support.html?name=Anurag%20Patel&upi=9111282226%40apl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all border border-gray-200 hover:border-orange-200"
            >
              <span className="text-base">🍵</span>
              <span>Buy me a Chai</span>
            </a>
          </div>
          
          <div className="text-xs text-gray-400">
            © 2024 Automation Testing Course. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}