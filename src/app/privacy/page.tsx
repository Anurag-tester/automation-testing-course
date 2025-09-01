export const metadata = {
  title: 'Privacy Policy | SDET Course',
  description: 'Privacy policy for the Complete SDET Automation Testing Course website.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              This website is an educational resource for SDET automation testing. We do not collect personal information from users.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• No user registration required</li>
              <li>• No personal data collection</li>
              <li>• No cookies for tracking</li>
              <li>• No analytics or user monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4">How We Use Information</h2>
            <p className="text-gray-600">
              Since we don't collect personal information, there is no data usage to report. 
              This website serves educational content only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              This website may be hosted on third-party platforms (like Vercel) which may have their own privacy policies:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Hosting provider logs (standard web server logs)</li>
              <li>• CDN services for content delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4">Educational Content</h2>
            <p className="text-gray-600">
              All content on this website is for educational purposes related to software testing and automation. 
              The course materials, code examples, and practice challenges are provided free of charge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600">
              If you have questions about this privacy policy or the educational content, 
              you can contact us through the course repository on GitHub.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-900 mb-4">Updates</h2>
            <p className="text-gray-600">
              This privacy policy may be updated occasionally. Any changes will be reflected on this page.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}