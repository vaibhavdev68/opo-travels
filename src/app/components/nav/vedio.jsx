'use client'
import React from 'react'

const Vedio = () => {
  return (
    <>
      {/* ✅ Fixed Video Section */}
      <div className="relative w-full"> {/* Use mt-[100px] to match navbar height */}
        <video autoPlay loop muted className="w-full h-[600px] object-cover" src="/videos/video2.mp4">
          Your browser does not support the video tag.
        </video>
        
        {/* Enhanced overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center px-4">
            Explore The World With{" "}
            <span className="text-pink-500">OPO TRAVELS</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Vedio;