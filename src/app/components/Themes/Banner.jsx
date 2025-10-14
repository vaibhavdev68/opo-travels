// components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0">
          
          {/* GO 4.9 rated */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-300 text-sm">⭐</span>
              <span className="text-lg font-bold">4.9</span>
            </div>
            <span className="text-xl font-semibold">rated</span>
          </div>

          {/* Separator */}
          <div className="hidden md:block text-white/50">|</div>

          {/* 100% Customised Trips */}
          <div className="flex items-center space-x-2">
            <span className="text-purple-200 text-sm">🗺️</span>
            <span className="text-lg font-bold">100%</span>
            <span className="text-xl font-semibold">Customised Trips</span>
          </div>

          {/* Separator */}
          <div className="hidden md:block text-white/50">|</div>

          {/* 10000+ Happy Customers */}
          <div className="flex items-center space-x-2">
            <span className="text-pink-300 text-sm">😊</span>
            <span className="text-lg font-bold">10000+</span>
            <span className="text-xl font-semibold">Happy Customers</span>
          </div>

          {/* Separator */}
          <div className="hidden md:block text-white/50">|</div>

          {/* 24x7 Support */}
          <div className="flex items-center space-x-2">
            <span className="text-indigo-200 text-sm">📞</span>
            <span className="text-lg font-bold">24x7</span>
            <span className="text-xl font-semibold">Support</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;