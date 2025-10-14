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

  // Auto-slide
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Previous & Next
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
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
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-blue-500" : "bg-white/60"
            }`}
          ></div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 rounded-full p-2"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 rounded-full p-2"
      >
        &#8594;
      </button>
    </div>
  );
}
