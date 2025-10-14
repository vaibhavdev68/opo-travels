'use client'
import React from 'react';

// Data for the 'Seasonal Journeys' section
const SEASONAL_JOURNEYS = [
  { name: 'ANDAMAN', price: '14,999', link: '#', image: '/images/image1.jpg', size: 'small' },
  { name: 'MAURITIUS', price: '26,999', link: '#', image:'/images/image1.jpg', size: 'small' },
  { name: 'EUROPE', price: '69,099', link: '#', image: '/images/image1.jpg', size: 'large' },
  { name: 'HIMACHAL PRADESH', price: '9,999', link: '#', image: '/images/image1.jpg', size: 'small' },
  { name: 'KERALA', price: '9,999', link: '#', image:'/images/image1.jpg', size: 'small' },
  
];

// Single Destination Card
const SeasonalCard = ({ name, price, image, link, size }) => {
  const gridSpanClass = size === 'large' ? 'lg:row-span-2 lg:col-span-2' : 'lg:col-span-1';

  const headingSize = size === 'large' ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl';
  const priceSize = size === 'large' ? 'text-lg sm:text-xl md:text-2xl' : 'text-sm sm:text-base md:text-lg';

  return (
    <a
      href={link}
      className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform group hover:scale-[1.03] hover:shadow-3xl hover:rotate-z-05 ${gridSpanClass}`}
      style={{
        minHeight: size === 'large' ? '25rem' : '15rem',
        boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/600x600/CCCCCC/000000?text=${name.split(' ')[0]}`;
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end text-white bg-gradient-to-t from-purple-900/80 via-purple-800/60 to-transparent pt-8">
        <h3
          className={`${headingSize} font-extrabold tracking-wide mb-1 sm:mb-2 uppercase text-left`}
          style={{ textShadow: '0 0 8px rgba(0,0,0,0.8)' }}
        >
          {name}
        </h3>
        <p
          className={`${priceSize} font-semibold text-left`}
          style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}
        >
          Start From
          <span className="ml-1 sm:ml-2 text-yellow-400 font-extrabold">
            ₹{price}
          </span>
        </p>
      </div>
    </a>
  );
};

// Main Section: Seasonal Journeys
const SeasonalJourneys = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-100 to-purple-50">
      {/* Header */}
      <div className="mb-8 sm:mb-12 text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-700 mb-2 leading-tight">
          Seasonal Journeys
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-600">
          Best places to visit in October for heavenly escapes!
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        {SEASONAL_JOURNEYS.map((journey, index) => (
          <SeasonalCard
            key={index}
            name={journey.name}
            price={journey.price}
            image={journey.image}
            link={journey.link}
            size={journey.size}
          />
        ))}
      </div>
    </section>
  );
};

// Main Page Component
export default function SeasonableJourney() {
  return (
    <div className="bg-purple-50 min-h-screen">
      {/* Custom Hover Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hover\\:shadow-3xl:hover {
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
            }
            .hover\\:rotate-z-05:hover {
              transform: rotateZ(0.5deg) scale(1.03);
            }
          `,
        }}
      />
      <main className="w-full">
        <SeasonalJourneys />
      </main>
    </div>
  );
}