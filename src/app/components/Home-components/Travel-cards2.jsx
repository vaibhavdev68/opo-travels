// components/TravelCards.jsx
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TravelCards() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/data/homepage/destinations.json');
        const data = await response.json();
        setDestinations(data.DESTINATIONS || []);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className="pt-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-left mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-3">
            Discover Amazing Destinations
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Explore handpicked travel experiences that will create memories to last a lifetime
          </p>
        </div>

        {/* Travel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 transform relative"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-44 md:h-48 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Tag Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`px-2.5 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    destination.tag === "Popular" ? "bg-orange-500 text-white" :
                    destination.tag === "Luxury" ? "bg-purple-500 text-white" :
                    destination.tag === "Adventure" ? "bg-green-500 text-white" :
                    destination.tag === "Cultural" ? "bg-red-500 text-white" :
                    "bg-blue-500 text-white"
                  }`}>
                    {destination.tag}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">{destination.name}</h3>
                  <span className="text-xl font-bold text-purple-600 mt-2 sm:mt-0">{destination.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 leading-snug line-clamp-4">{destination.description}</p>
                
                <div className="flex items-center justify-between mb-3 flex-col sm:flex-row">
                  <div className="flex items-center space-x-1 mb-2 sm:mb-0">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(destination.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 ml-1">({destination.rating})</span>
                  </div>
                  <span className="text-xs text-gray-500">{destination.reviews} reviews</span>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center pt-3 border-t border-gray-200 gap-2 sm:gap-0">
                  <span className="text-sm text-gray-600 font-medium">{destination.duration}</span>
                  <button className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:from-purple-800 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Destinations Button */}
        <div className="text-center mt-8 mb-10">
          <button className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-6 py-2 rounded-xl font-semibold text-sm hover:from-purple-800 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md">
            View All Destinations
          </button>
        </div>
      </div>
    </div>
  );
} 