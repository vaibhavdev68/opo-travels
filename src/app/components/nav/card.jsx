// components/Reviews.jsx
'use client';
import { useState, useEffect } from 'react';

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "John Smith",
      initials: "JS",
      comment: "Amazing service! The trip to Bali was perfectly organized. Will definitely book again!",
      location: "Bali, Indonesia"
    },
    {
      name: "Sarah Miller", 
      initials: "SM",
      comment: "Best travel agency I've ever used. Everything was seamless and stress-free!",
      location: "Santorini, Greece"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-pink-50 flex items-center justify-center py-20 px-6">
      
      <div className="max-w-8xl mx-auto w-full px-8 ">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent to-blue-400"></div>
            <div className="mx-8 text-5xl text-blue-600 font-bold">✈️</div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-800 mb-8">
            Why Travelers Love Us
          </h1>
          <p className="text-3xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Join thousands of satisfied travelers who have created unforgettable memories with us
          </p>
        </div>

        {/* Main Content - Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          
          {/* Google Reviews Card */}
          <div className="bg-white rounded-4xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-yellow-100 w-xl ml-35">
            <div className="flex items-center justify-between mb-10">
              <div className="text-7xl font-bold text-yellow-500">4.9/5</div>
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">⭐</span>
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Google Reviews</h3>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">From thousands of happy travelers</p>
            <div className="bg-yellow-50 rounded-2xl p-6 mt-8">
              <p className="text-xl text-yellow-700 font-medium">"Best travel experience ever!"</p>
            </div>
          </div>

          {/* Memories Card */}
          <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-4xl p-12 shadow-2xl text-white w-xl mx-20">
            <div className="flex items-center justify-between mb-10">
              <div className="text-7xl font-bold">5,000+</div>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">📸</span>
              </div>
            </div>
            <div className="mb-10">
              <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-6">Memories Created</h3>
            <p className="text-blue-100 text-2xl mb-8 leading-relaxed">Beautiful moments around the world</p>
            <div className="bg-white/10 rounded-2xl p-6 mt-8">
              <p className="text-xl font-medium">"Unforgettable journey!"</p>
            </div>
          </div>

          {/* TripAdvisor Card */}
          <div className="bg-white rounded-4xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-green-100 w-xl mr-20">
            <div className="flex items-center justify-between mb-10">
              <div className="text-7xl font-bold text-green-500">4.5/5</div>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🏆</span>
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="flex text-green-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">TripAdvisor</h3>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">Top rated travel experiences</p>
            <div className="bg-green-50 rounded-2xl p-6 mt-8">
              <p className="text-xl text-green-700 font-medium">"Excellence Award Winner"</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-24">
          <div className="text-center p-10 bg-white rounded-3xl shadow-2xl border border-gray-100 w-full">
            <div className="text-4xl mb-6">🌎</div>
            <div className="text-5xl font-bold text-blue-600 mb-6">50+</div>
            <div className="text-2xl text-gray-600 font-medium">Destinations</div>
          </div>
          
          <div className="text-center p-10 bg-white rounded-3xl shadow-2xl border border-gray-100 w-full">
            <div className="text-4xl mb-6">😊</div>
            <div className="text-5xl font-bold text-teal-600 mb-6">98%</div>
            <div className="text-2xl text-gray-600 font-medium">Happy Customers</div>
          </div>
          
          <div className="text-center p-10 bg-white rounded-3xl shadow-2xl border border-gray-100 w-full">
            <div className="text-4xl mb-6">📞</div>
            <div className="text-5xl font-bold text-green-600 mb-6">24/7</div>
            <div className="text-2xl text-gray-600 font-medium">Support</div>
          </div>
          
          <div className="text-center p-10 bg-white rounded-3xl shadow-2xl border border-gray-100 w-full">
            <div className="text-4xl mb-6">⭐</div>
            <div className="text-5xl font-bold text-yellow-600 mb-6">10+</div>
            <div className="text-2xl text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-4xl shadow-3xl p-12 mb-24 w-full">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-10 border border-gray-200 w-full">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center mr-8 text-white font-bold text-2xl">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-2xl">{testimonial.name}</div>
                    <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                    <div className="text-lg text-gray-500 mt-3">{testimonial.location}</div>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Call to Action */}
        <div className="text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-gray-800 mb-8">
            Ready to Create Your Story?
          </h2>
          <p className="text-3xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            Join our community of happy travelers today
          </p>
          <button className="bg-blue-500 text-white px-16 py-6 rounded-3xl font-semibold text-2xl transition-all duration-300 shadow-2xl hover:bg-pink-700 hover:scale-110 hover:shadow-3xl">
            View Destinations
          </button>
        </div>

      </div>
    </div>
  );
}