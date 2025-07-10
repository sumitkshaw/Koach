import Footer from '../components/Footer';

function Privacy() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Header Section */}
      <section className="px-6 md:px-20 lg:px-40 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-blue-100">
            <h1 className="text-4xl md:text-5xl font-bold text-[#122350] mb-6 leading-tight">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2D488F] to-[#122350] mb-6"></div>
            <p className="text-lg text-[#2D488F] leading-7 mb-6 max-w-3xl">
              Welcome to Koach.live! We care about your privacy. This Privacy Policy explains how we collect, use, 
              share, and protect your personal information when you use our platform.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#2D488F] p-4 rounded-r-lg">
              <p className="text-lg text-[#2D488F] font-medium">
                Effective Date: June 17, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="px-6 md:px-20 lg:px-40 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
            <div className="p-8 md:p-12 space-y-0">
              
              {/* Section 1 */}
              <div className="py-8 border-b-2 border-[#2D488F] border-opacity-20 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2D488F] to-[#122350] rounded-full"></div>
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#122350] mb-6 flex items-center">
                    <span className="bg-[#2D488F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</span>
                    Who This Applies To
                  </h2>
                  <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                    <p className="font-medium text-[#2D488F]">This policy applies to:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                        <span>Users who receive coaching via Koach.live</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                        <span>Coaches and partners</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                        <span>Website visitors</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                        <span>Contributors (e.g. feedback providers)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                        <span>Job applicants</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="py-8 border-b-2 border-[#2D488F] border-opacity-20 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2D488F] to-[#122350] rounded-full"></div>
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#122350] mb-6 flex items-center">
                    <span className="bg-[#2D488F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</span>
                    What We Collect
                  </h2>
                  <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#2D488F]">
                      <p className="font-medium text-[#2D488F] mb-3">Info you give us:</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                          <span>Name, email, phone, job title</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                          <span>Responses to assessments, feedback forms, messages</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                          <span>Billing and payment details (if applicable)</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#122350]">
                      <p className="font-medium text-[#122350] mb-3">Info we collect automatically:</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#122350] rounded-full"></div>
                          <span>Device/browser type, IP address</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#122350] rounded-full"></div>
                          <span>How you use the platform</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="py-8 border-b-2 border-[#2D488F] border-opacity-20 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2D488F] to-[#122350] rounded-full"></div>
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#122350] mb-6 flex items-center">
                    <span className="bg-[#2D488F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</span>
                    How We Use Your Info
                  </h2>
                  <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                    <p className="font-medium text-[#2D488F]">We use your information to:</p>
                    <div className="grid gap-3">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                        <span>Provide and personalize your coaching experience</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                        <span>Communicate with you (service updates, support, optional marketing)</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                        <span>Improve the platform through data insights</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full"></div>
                        <span>Ensure security and prevent fraud</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="py-8 border-b-2 border-[#2D488F] border-opacity-20 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2D488F] to-[#122350] rounded-full"></div>
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#122350] mb-6 flex items-center">
                    <span className="bg-[#2D488F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">4</span>
                    How We Share Your Info
                  </h2>
                  <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="font-bold text-red-700">We do NOT sell your personal data.</p>
                    </div>
                    <p className="font-medium text-[#2D488F]">We may share data with:</p>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full mt-2"></div>
                        <span>Your coach or employer (if you&apos;re using Koach through work)</span>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full mt-2"></div>
                        <span>Service providers (e.g. payment, analytics, support tools)</span>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full mt-2"></div>
                        <span>Legal authorities, if required by law</span>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#2D488F] rounded-full mt-2"></div>
                        <span>With your consent, in other cases</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="py-8 border-b-2 border-[#2D488F] border-opacity-20 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2D488F] to-[#122350] rounded-full"></div>
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#122350] mb-6 flex items-center">
                    <span className="bg-[#2D488F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">5</span>
                    Your Rights
                  </h2>
                  <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                    <p className="font-medium text-[#2D488F]">Depending on your location (e.g., EU or California), you have rights to:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Access, correct, or delete your data</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Ask us to stop processing your data</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Withdraw consent anytime</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Opt out of marketing emails</span>
                      </div>
                    </div>
                    <div className="bg-blue-100 border-l-4 border-[#2D488F] p-4 rounded-r-lg">
                      <p className="font-medium text-[#2D488F]">To make a request: [insert contact email or form]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="py-8 border-b-2 border-[#2D488F] border-opacity-20 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2D488F] to-[#122350] rounded-full"></div>
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#122350] mb-6 flex items-center">
                    <span className="bg-[#2D488F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">6</span>
                    Cookies & Tracking
                  </h2>
                  <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                    <p className="font-medium text-[#2D488F]">We use cookies and similar tools to:</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>Analyze traffic</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>Remember your preferences</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>Improve your experience</span>
                      </div>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-gray-500 p-4 rounded-r-lg">
                      <p className="text-gray-700">You can manage cookie settings via your browser or [insert Cookie Settings Link]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="py-8 border-b-2 border-[#2D488F] border-opacity-20 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2D488F] to-[#122350] rounded-full"></div>
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#122350] mb-6 flex items-center">
                    <span className="bg-[#2D488F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">7</span>
                    Data Security
                  </h2>
                  <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                    <div className="bg-blue-50 border-l-4 border-[#2D488F] p-4 rounded-r-lg">
                      <p>We use encryption and best practices to protect your data. While no system is 100% secure, we work hard to keep your information safe.</p>
                    </div>
                    <p className="font-medium text-[#2D488F]">We comply with:</p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>GDPR (for EU users)</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>CCPA (for California users)</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Other applicable international laws</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="py-8 border-b-2 border-[#2D488F] border-opacity-20 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2D488F] to-[#122350] rounded-full"></div>
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#122350] mb-6 flex items-center">
                    <span className="bg-[#2D488F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">8</span>
                    Data Transfers
                  </h2>
                  <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                      <p>If you&apos;re outside the U.S., your data may be transferred to and processed in the U.S. We use lawful safeguards like Standard Contractual Clauses (SCCs) for EU/UK/Swiss transfers.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 9 */}
              <div className="py-8 border-b-2 border-[#2D488F] border-opacity-20 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2D488F] to-[#122350] rounded-full"></div>
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#122350] mb-6 flex items-center">
                    <span className="bg-[#2D488F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">9</span>
                    Updates to This Policy
                  </h2>
                  <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                      <p>We may update this policy. If changes are significant, we&apos;ll notify you via email or the site. Check this page regularly for updates.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 10 */}
              <div className="py-8 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2D488F] to-[#122350] rounded-full"></div>
                <div className="pl-6">
                  <h2 className="text-2xl font-bold text-[#122350] mb-6 flex items-center">
                    <span className="bg-[#2D488F] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">10</span>
                    Contact Us
                  </h2>
                  <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                    <div className="bg-gradient-to-r from-[#2D488F] to-[#122350] p-6 rounded-lg text-white">
                      <p className="font-medium mb-2">Have questions? Want to exercise your rights?</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">✉️</span>
                        <span className="font-bold">Email: info@koach.live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Privacy;
// &apos;