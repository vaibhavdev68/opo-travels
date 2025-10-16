'use client';
import { Link } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Hero section
const HeroSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/data/homepage/tour.json');
        const data = await response.json();
        setCategories(data.CATEGORIES || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="relative w-full flex flex-col justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="absolute inset-0">
        {/* Removed color overlay */}
        <img src="/images/image5.jpg" alt="Scenic Travel" className="w-full h-[450px] sm:h-[650px] md:h-[750px] object-cover" />
      </div>

      <div className="relative z-10 flex flex-col justify-center p-6 sm:p-8 lg:p-12 w-full max-w-5xl mx-auto">
        <p className="text-4xl sm:text-5xl md:text-6xl mb-3 font-script text-white drop-shadow-xl">
          Your Next Adventure Awaits
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 drop-shadow-2xl tracking-tight leading-tight text-white">
          Where Every Experience Counts!
        </h1>

        <div className="flex flex-col sm:flex-row w-full max-w-3xl bg-white rounded-xl p-3 sm:p-4 shadow-lg space-y-3 sm:space-y-0 sm:space-x-3">
          <div className="flex items-center flex-grow p-3 bg-gray-50 rounded-lg w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#079790] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Enter Your Dream Destination" className="w-full bg-transparent focus:outline-none text-[#079790] placeholder-[#079790] text-lg sm:text-xl" />
          </div>
          <button className="bg-gradient-to-r from-[#079790] to-[#066C6A] hover:from-[#066C6A] hover:to-[#079790] text-white text-lg sm:text-xl font-bold py-3 px-6 rounded-lg transition-all duration-300 flex-shrink-0 shadow-md hover:shadow-lg w-full sm:w-auto">
            Search
          </button>
        </div>

        <div className="overflow-x-auto sm:overflow-x-visible mt-6 w-full flex gap-2 sm:gap-3">
          {categories.map((category) => (
            <button key={category.name} className="flex items-center space-x-2 py-2 px-4 rounded-full text-sm sm:text-base font-semibold shadow-lg bg-gradient-to-r from-[#079790] to-[#066C6A] text-white hover:from-[#066C6A] hover:to-[#079790] flex-shrink-0">
              <span>{category.icon}</span>
              <span>{category.name}</span>
              {category.isNew && <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full ml-1 font-bold">NEW</span> } 
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Destination card
const DestinationCard = ({ name, description, price, rating, imagePath }) => (
  <div className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] cursor-pointer bg-white border border-[#079790]/30 hover:border-[#079790]">
    <div className="relative w-full aspect-[3/2] overflow-hidden">
      <img src={imagePath} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute top-3 right-3 bg-gradient-to-r from-[#079790] to-[#066C6A] text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md flex items-center">
        ⭐ {rating}
      </div>
    </div>
    <div className="p-5 sm:p-6">
      <h3 className="text-2xl font-bold text-black group-hover:text-[#066C6A] transition-colors mb-2">{name}</h3>
      <p className="text-black text-sm mb-3 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between pt-2 border-t border-[#079790]/20">
        <div className="flex flex-col">
          <span className="text-xs font-medium text-[#079790]/70">Starting From</span>
          <span className="text-xl font-extrabold text-[#079790]">{price}</span>
        </div>
        <a
          href="/view-page"
          className="bg-gradient-to-r from-[#079790] to-[#066C6A] text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-center"
        >
          Book Now
        </a>
      </div>
    </div>
  </div>
);

// Trending destinations section
const TrendingDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/data/homepage/tour.json');
        const data = await response.json();
        setDestinations(data.DESTINATIONS || []);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <section className="mt-0 py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-t-3xl">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-4">Top Trending Destinations</h2>
      <p className="text-lg sm:text-xl text-black mb-8">Explore hand-picked, highly-rated spots. Click a card to start dreaming!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            name={dest.name}
            description={dest.description}
            price={dest.price}
            rating={dest.rating}
            imagePath={dest.imagePath}
          />
        ))}
      </div>
    </section>
  );
};

// Main component
export default function TourPackages() {
  return (
    <div className="min-h-screen bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
            .font-script { font-family: 'Dancing Script', cursive; }
          `,
        }}
      />
     
      <main>
        <HeroSection />
        <TrendingDestinations />
      </main>
    </div>
  );
}