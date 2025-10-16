"use client";
import React from "react";

export default function ImageSlider() {
  const images = [
    "/manaliSlider/image1.jpg",
    "/manaliSlider/image2.jpg",
    "/manaliSlider/image2.jpeg",
    "/manaliSlider/snow.jpg",
  ];

  const [current, setCurrent] = React.useState(0);

  // Auto-slide every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Previous & Next Handlers
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-[355px] overflow-hidden rounded-2xl shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="w-full flex-shrink-0 h-full object-cover"
          />
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === current
                ? "bg-[#079790] scale-110 shadow-md"
                : "bg-white/70 hover:bg-[#079790]/60"
            }`}
          ></div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/60 hover:bg-[#079790] hover:text-white text-gray-800 rounded-full p-2 transition-all duration-300 shadow-md"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/60 hover:bg-[#079790] hover:text-white text-gray-800 rounded-full p-2 transition-all duration-300 shadow-md"
        aria-label="Next Slide"
      >
        &#8594;
      </button>
    </div>
  );
}