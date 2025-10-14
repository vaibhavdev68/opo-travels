"use client";
import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center"></div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Transform Your Business With{" "}
            <span className="text-blue-600">Innovation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Discover amazing features and services that will transform your
            business. Join thousands of satisfied customers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>Get Started Free</span>
              <span className="text-lg">→</span>
            </Link>
            <Link
              href="/demo"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
            >
              <span>Watch Demo</span>
              <span className="text-lg">▶</span>
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            No credit card required • Free 14-day trial
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                99%
              </div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the best solutions to grow your business and achieve your
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Lightning Fast
            </h3>
            <p className="text-gray-600 mb-6">
              Experience blazing fast performance with our optimized
              infrastructure and cutting-edge technology.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Secure & Safe
            </h3>
            <p className="text-gray-600 mb-6">
              Enterprise-grade security with end-to-end encryption and
              compliance with global security standards.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              24/7 Support
            </h3>
            <p className="text-gray-600 mb-6">
              Round-the-clock customer support with real humans. Get help
              whenever you need it, day or night.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                "This platform transformed our business operations. The support
                team is incredible!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JS
                </div>
                <div>
                  <div className="font-semibold text-gray-800">John Smith</div>
                  <div className="text-gray-500 text-sm">CEO at TechCorp</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                "The best decision we made for our company. The results speak
                for themselves."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Sarah Johnson
                  </div>
                  <div className="text-gray-500 text-sm">
                    Marketing Director
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                "Outstanding service and incredible features. The team goes
                above and beyond!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MD
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Mike Davis</div>
                  <div className="text-gray-500 text-sm">Startup Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers and experience the difference
            today. Start your free trial with no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 text-lg"
            >
              <span>Start Free Trial</span>
              <span className="text-xl">🎯</span>
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-3 text-lg"
            >
              <span>Contact Sales</span>
              <span className="text-xl">💼</span>
            </Link>
          </div>
          <div className="mt-6 text-blue-200 text-sm">
            ✨ No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
