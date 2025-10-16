'use client';

import Link from 'next/link';

export default function HeroHeader() {
  return (
    <header className="relative min-h-[600px] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
          <source src="/videos/video2.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay (updated to teal theme) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#046C66] via-[#079790] to-[#0FBCA6] mix-blend-multiply opacity-60"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
          Craft Unforgettable Itineraries with
        </h1>

        {/* Gradient text updated to teal tone */}
        <div className="mb-8">
          <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#079790] via-[#0FBCA6] to-[#4EF2D0] bg-clip-text text-transparent bg-size-200 animate-gradient">
            AI Trip Planner
          </span>
        </div>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>

        {/* CTA Button updated for theme consistency */}
        <Link href="/trip-generator">
          <button className="bg-[#079790] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0FBCA6] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get started—it's free
          </button>
        </Link>
      </div>
    </header>
  );
}