"use client";
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/grouptrip.jpg"
        alt="Group trip background"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0"></div>

      {/* Floating Elements (Subtle for theme match) */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-white/40 rounded-full animate-ping"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center max-w-4xl w-full">
          {/* Line 1 */}
          <div
            className={`mb-3 transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-white text-2xl md:text-5xl lg:text-4xl font-bold drop-shadow-lg">
              Get In Touch with{" "}
              <div className="bg-gradient-to-r from-purple-700 to-purple-500  bg-clip-text text-transparent font-extrabold">
                OPO TRAVELS
              </div>
            </h1>
          </div>

          {/* Line 2 */}
          <div
            className={`transition-all duration-700 delay-300 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            
          </div>
        </div>
      </div>
    </div>
  );
}
