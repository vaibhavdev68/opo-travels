'use client'
import React, { useState, useEffect } from 'react';

// Single Card Component
const HandpickedCard = ({ name, price, image }) => (
  <div className="w-full group perspective flex-shrink-0 top-0">
    <div className="bg-white rounded-3xl shadow-md shadow-[#079790]/30 border border-[#079790]/40 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] transform group-hover:rotate-x-0 rotate-x-1">
      <div className="w-full h-44 sm:h-52 md:h-56 lg:h-60 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-5 text-left text-gray-800">
        <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-[#079790] transition-colors">
          {name}
        </h3>
        <p className="text-[#079790] font-medium text-sm sm:text-base mb-3">
          ₹ {price}
        </p>
        <button className="mt-2 w-full bg-gradient-to-r from-[#079790] to-[#06a595] text-white py-1.5 px-3 text-sm sm:text-base rounded-lg font-semibold shadow-md shadow-[#079790]/50 hover:from-[#067a77] hover:to-[#048b82] transition-all duration-300 transform hover:scale-105">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

// Packages Component
const HandpickedPackages = () => {
  const [activeTab, setActiveTab] = useState('Domestic');
  const [domesticPackages, setDomesticPackages] = useState([]);
  const [internationalPackages, setInternationalPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const domesticResponse = await fetch('/data/homepage/domestic-packages.json');
        const domesticData = await domesticResponse.json();
        setDomesticPackages(domesticData.DOMESTIC_PACKAGES || []);

        const internationalResponse = await fetch('/data/homepage/international-packages.json');
        const internationalData = await internationalResponse.json();
        setInternationalPackages(internationalData.INTERNATIONAL_PACKAGES || []);
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const packagesToShow = activeTab === 'Domestic' ? domesticPackages : internationalPackages;

  const getButtonClasses = (tabName) =>
    tabName === activeTab
      ? "px-6 sm:px-8 py-2 text-white bg-gradient-to-r from-[#079790] to-[#06a595] border-2 border-[#079790] rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#079790]/50 transform scale-105"
      : "px-6 sm:px-8 py-2 text-gray-600 bg-white border-2 border-gray-300 rounded-full font-semibold hover:border-[#079790] hover:text-[#079790] transition-all duration-300 shadow-md";

  if (loading) {
    return (
      <section className="my-0 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <div className="text-xl text-[#079790]">Loading packages...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="my-0 max-w-7xl mx-auto sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-left mb-6 sm:mb-8 md:mb-10 pl-4 sm:pl-6 md:pl-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-2 leading-snug sm:leading-tight">
          Handpicked Holiday Packages
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-black/80">
          Indulge in unforgettable adventures with our specially curated tour plans.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap mb-8 sm:mb-10 gap-3 sm:gap-4 justify-start pl-4 sm:pl-6 md:pl-8">
        <button className={getButtonClasses('Domestic')} onClick={() => setActiveTab('Domestic')}>Domestic</button>
        <button className={getButtonClasses('International')} onClick={() => setActiveTab('International')}>International</button>
      </div>

      {/* Card Container */}
      <div className="relative">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-6 
            sm:gap-8 
            justify-items-center
            overflow-x-auto sm:overflow-visible 
            pb-6 
            scroll-smooth
          "
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {packagesToShow.map((pkg) => (
            <div
              key={pkg.id}
              className="w-[90%] sm:w-[85%] md:w-full max-w-xs sm:max-w-sm md:max-w-none"
            >
              <HandpickedCard
                name={pkg.name}
                price={pkg.price}
                image={pkg.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Page
export default function HolidayPage() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-start pt-8">
      <style dangerouslySetInnerHTML={{ __html: `
        .overflow-x-auto::-webkit-scrollbar { display: none; }
        .perspective { perspective: 1000px; }
        .rotate-x-1 { transform: rotateX(1deg); }
        .group:hover .rotate-x-1 { transform: rotateX(0deg) scale(1.05); }
      `}} />
      <main className="w-full">
        <HandpickedPackages />
      </main>
    </div>
  );
}