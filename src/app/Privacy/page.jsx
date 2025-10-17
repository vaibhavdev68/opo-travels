'use client';

import { useState } from 'react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'cancellations-refunds', title: 'Cancellations and Refunds' },
    { id: 'privacy-data', title: 'Privacy and Data Protection' },
    { id: 'safety-assurance', title: 'Safety Assurance' },
    { id: 'customer-policy', title: 'Customer First Policy' },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            At OPO ROOMS, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-8 bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Policy Sections</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to OPO ROOMS</h2>
                <p className="text-gray-700 mb-4">
                  Thank you for choosing OPO ROOMS for your travel needs. This Privacy Policy outlines our practices 
                  regarding the collection, use, and disclosure of your information when you use our services.
                </p>
                <p className="text-gray-700">
                  By accessing or using our website, mobile application, or services, you agree to the terms of this 
                  Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              {/* Cancellations and Refunds Section */}
              <section id="cancellations-refunds" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Cancellations and Refunds</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cancellations</h3>
                  <p className="text-gray-700 mb-4">
                    If you wish to cancel your booking, you must notify us in writing. Cancellation policies vary 
                    depending on the service provider (e.g., airline, hotel, train, bus). Please refer to the terms 
                    of the specific service for details.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-700">
                      <strong>Important:</strong> Different service providers have different cancellation policies. 
                      Please review the specific terms before making a booking.
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Refunds</h3>
                  <p className="text-gray-700 mb-4">
                    Refunds are subject to the terms and conditions of the service providers. We will assist you in 
                    obtaining any applicable refunds, but OPO ROOMS is not responsible for third-party fees or 
                    cancellation charges.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-blue-700">
                      <strong>Processing Time:</strong> The refund will be processed within 45 working days from the 
                      date of cancellation approval.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Refund Processing Timeline</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Refund request verification: 3-5 working days</li>
                    <li>Service provider approval: 7-10 working days</li>
                    <li>Bank processing: 5-7 working days</li>
                    <li>Total processing time: Up to 45 working days</li>
                  </ul>
                </div>
              </section>

              {/* Privacy and Data Protection Section */}
              <section id="privacy-data" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Privacy and Data Protection</h2>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    By using our services, you consent to our collection and use of personal information as described 
                    in our Privacy Policy. We are committed to protecting your personal data and respecting your privacy.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">Information We Collect</h4>
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      <li>Personal identification information</li>
                      <li>Contact details</li>
                      <li>Payment information</li>
                      <li>Travel preferences</li>
                      <li>Booking history</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-semibold text-purple-800 mb-3">How We Use Your Data</h4>
                    <ul className="list-disc list-inside text-purple-700 space-y-1">
                      <li>Process your bookings</li>
                      <li>Provide customer support</li>
                      <li>Send booking confirmations</li>
                      <li>Improve our services</li>
                      <li>Send promotional offers (with consent)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="text-red-700">
                    <strong>Data Security:</strong> We implement appropriate security measures to protect your personal 
                    information from unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
              </section>

              {/* Safety Assurance Section */}
              <section id="safety-assurance" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Safety Assurance</h2>
                
                <div className="bg-teal-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">MySafety Assurance Program</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full p-2 mr-3 mt-1">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-800">Regular Sanitization</h4>
                        <p className="text-teal-700">
                          All buses available on our platform are MySafety-assured with regular sanitization of the 
                          vehicle carried out after every trip.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full p-2 mr-3 mt-1">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-800">Temperature Checks</h4>
                        <p className="text-teal-700">
                          Regular temperature checks done on passengers before boarding the bus to ensure everyone's safety.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full p-2 mr-3 mt-1">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-800">Safety Protocols</h4>
                        <p className="text-teal-700">
                          Our staff follows all safety protocols as mandated by health authorities and government guidelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Customer First Policy Section */}
              <section id="customer-policy" className="mb-8 scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Customer First Policy</h2>
                
                <div className="bg-orange-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Our Commitment to You</h3>
                  
                  <p className="text-orange-700 mb-4">
                    When you complete your online bus booking on Oporooms.com, be sure of getting the highest standards 
                    of customer service, including regular trip-related updates on your device.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">24/7 Customer Support</h4>
                      <p className="text-orange-600 text-sm">
                        Round-the-clock customer support to assist you with any queries or concerns.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Real-time Updates</h4>
                      <p className="text-orange-600 text-sm">
                        Instant notifications about booking confirmations, trip changes, and important updates.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Easy Modifications</h4>
                      <p className="text-orange-600 text-sm">
                        Simple and hassle-free process for modifying your bookings when needed.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Competitive Pricing</h4>
                      <p className="text-orange-600 text-sm">
                        Best prices guaranteed with transparent pricing and no hidden charges.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Contact Information</h4>
                  <p className="text-gray-700 mb-2">
                    For any questions about this Privacy Policy or our practices, please contact us at:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>Email: privacy@oporooms.com</li>
                    <li>Phone: +1-XXX-XXX-XXXX</li>
                    <li>Address: [Your Company Address]</li>
                  </ul>
                </div>
              </section>

              {/* Footer */}
              <div className="border-t pt-6 mt-8">
                <p className="text-gray-600 text-sm">
                  This Privacy Policy is effective as of {new Date().toLocaleDateString()} and may be updated from 
                  time to time. We encourage you to review this page periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}