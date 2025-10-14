// src/app/test/page.jsx
"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function KashmirTourPackage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const tourDetails = {
    duration: '5 Nights / 6 Days',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
    price: '₹15,999',
    originalPrice: '₹20,999',
    discount: '24% OFF'
  };

  const itinerary = [
    {
      day: 1,
      title: 'Arrival in Srinagar',
      description: 'Arrive at Srinagar Airport. Transfer to hotel/houseboat. Shikara ride on Dal Lake in the evening.'
    },
    {
      day: 2,
      title: 'Srinagar Local Sightseeing',
      description: 'Visit Mughal Gardens, Shankaracharya Temple, and local markets.'
    },
    {
      day: 3,
      title: 'Srinagar to Gulmarg',
      description: 'Drive to Gulmarg. Enjoy Gondola ride and scenic beauty. Return to Srinagar.'
    },
    {
      day: 4,
      title: 'Srinagar to Pahalgam',
      description: 'Drive to Pahalgam. Visit Betaab Valley, Aru Valley, and Lidder River.'
    },
    {
      day: 5,
      title: 'Pahalgam to Sonamarg',
      description: 'Drive to Sonamarg. Enjoy Thajiwas Glacier and scenic meadows.'
    },
    {
      day: 6,
      title: 'Departure',
      description: 'Transfer to Srinagar Airport for departure with beautiful memories.'
    }
  ];

  const inclusions = [
    'Accommodation in 3-star hotels',
    'Daily breakfast and dinner',
    'All transfers and sightseeing by private vehicle',
    'Shikara ride in Dal Lake',
    'Gondola ride in Gulmarg',
    'All applicable taxes'
  ];

  const exclusions = [
    'Airfare/train tickets',
    'Lunch during the tour',
    'Personal expenses',
    'Travel insurance',
    'Anything not mentioned in inclusions'
  ];

  const tabs = ['overview', 'itinerary', 'inclusions', 'photos'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Gorgeous Kashmir Tour Package | OpoTrip Holidays</title>
        <meta name="description" content="Experience the beauty of Kashmir with our 5N/6D tour package covering Srinagar, Gulmarg, Pahalgam, and Sonamarg" />
      </Head>

      {/* Hero Section - Optimized for Mobile */}
      <div className="relative h-64 md:h-96 overflow-hidden"> {/* Reduced height on mobile (h-64) */}
        <div className="relative w-full h-full bg-gray-400">
          <Image
            src="/images/image3.jpg"
            alt="Kashmir Mountains"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Hero Content - Optimized Font Sizes for Mobile */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="text-white max-w-2xl text-shadow-lg">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-4">Gorgeous Kashmir Tour Package</h1> {/* Reduced text size on mobile */}
              <p className="text-lg md:text-xl mb-4 md:mb-6 font-medium">5 Nights / 6 Days - Srinagar, Gulmarg, Pahalgam, Sonamarg</p> {/* Reduced text size on mobile */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center flex-wrap">
                  <span className="text-2xl md:text-3xl font-bold">{tourDetails.price}</span> {/* Reduced text size on mobile */}
                  <span className="ml-2 md:ml-3 line-through text-gray-300 text-sm md:text-lg">{tourDetails.originalPrice}</span>
                  <span className="mt-2 md:mt-0 ml-0 md:ml-3 bg-green-500 text-white px-2 py-0.5 rounded-full text-xs md:text-sm font-semibold">{tourDetails.discount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Grid Stacks on Mobile */}
      <div className="container mx-auto px-4 py-6 md:py-12"> {/* Reduced padding on mobile */}
        {/* Swapped order for mobile: Booking widget appears right after the hero */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10"> 
          
          {/* Right Column - Booking Widget (Now first on small screens) */}
          <div className="lg:col-span-1 order-1 lg:order-2"> 
            <div className="bg-white rounded-xl shadow-2xl sticky top-4 md:top-8 border-t-4 border-blue-600"> {/* Adjusted sticky top for better mobile view */}
              
              <div className="p-4 md:p-6 border-b"> {/* Reduced padding on mobile */}
                <div className="flex justify-between items-end mb-2 md:mb-3">
                  <div>
                    <span className="text-2xl md:text-3xl font-extrabold text-blue-600">{tourDetails.price}</span>
                    <span className="ml-1 md:ml-2 line-through text-gray-500 text-sm md:text-lg">{tourDetails.originalPrice}</span>
                    <div className="text-green-600 font-bold text-sm mt-1">{tourDetails.discount} SAVINGS</div> {/* Reduced text size on mobile */}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">per person</div>
                </div>
                
                <div className="text-sm md:text-base text-gray-700 font-semibold mb-2">{tourDetails.duration}</div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-yellow-400 text-xl mr-1">⭐⭐⭐⭐</span>
                  <span className="ml-1 font-medium">4.5 (1,234 reviews)</span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="space-y-4 md:space-y-5">
                  <div>
                    <label htmlFor="travel-date" className="block text-sm font-bold text-gray-700 mb-2">
                      Select Travel Date
                    </label>
                    <input
                      id="travel-date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm" // Reduced input size
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4"> {/* Reduced gap on mobile */}
                    <div>
                      <label htmlFor="adults" className="block text-sm font-bold text-gray-700 mb-2">
                        Adults
                      </label>
                      <select
                        id="adults"
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none text-sm" // Reduced select size
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Adult' : 'Adults'}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="children" className="block text-sm font-bold text-gray-700 mb-2">
                        Children
                      </label>
                      <select
                        id="children"
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none text-sm" // Reduced select size
                      >
                        {[0, 1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Child' : 'Children'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold text-base md:text-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"> {/* Reduced padding and font size */}
                    Book Now & Pay ₹{adults * 15999}
                  </button>

                  <button className="w-full border border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-semibold text-base hover:bg-gray-100 transition-colors"> {/* Reduced padding and font size */}
                    <span className="mr-2">❤️</span> Add to Wishlist
                  </button>
                </div>

                <div className="mt-6 pt-4 md:mt-8 md:pt-6 border-t border-gray-200"> {/* Reduced margin/padding */}
                  <h3 className="font-bold text-base md:text-lg mb-2 text-gray-800">Inclusions Summary</h3> {/* Reduced font size */}
                  <ul className="space-y-2 text-xs md:text-sm text-gray-600"> {/* Reduced font size */}
                    <li className="flex items-center font-medium">
                      <span className="text-green-500 mr-2">✅</span>
                      **Accommodation** in 3-star hotels
                    </li>
                    <li className="flex items-center font-medium">
                      <span className="text-green-500 mr-2">🍽️</span>
                      **Daily Breakfast & Dinner**
                    </li>
                    <li className="flex items-center font-medium">
                      <span className="text-green-500 mr-2">🚠</span>
                      **Gondola Ride** (Gulmarg) & **Shikara Ride** (Dal Lake)
                    </li>
                    <li className="flex items-center font-medium">
                      <span className="text-green-500 mr-2">🚗</span>
                      All **Private Transfers** and Sightseeing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Left Column - Details (Now second on small screens) */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg mb-6 md:mb-8 border border-gray-200"> {/* Reduced margin on mobile */}
              <div className="border-b px-4 md:px-6 overflow-x-auto"> {/* Added overflow-x-auto for scrollable tabs */}
                <nav className="flex space-x-6 md:space-x-8"> {/* Reduced space on mobile */}
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`py-3 md:py-4 px-1 text-sm md:text-base font-semibold border-b-4 flex-shrink-0 transition-colors duration-200 ${ // Made text smaller and button non-shrinking
                        activeTab === tab
                          ? 'border-blue-600 text-blue-700'
                          : 'border-transparent text-gray-600 hover:text-blue-500'
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-4 md:p-8"> {/* Reduced padding on mobile */}
                {activeTab === 'overview' && (
                  <div id="overview-content">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">Tour Overview 🏔️</h2> {/* Reduced font size on mobile */}
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                      Experience the breathtaking beauty of Kashmir with our carefully crafted **{tourDetails.duration}** tour package. 
                      This comprehensive journey takes you through the most stunning destinations in the valley, including the 
                      beautiful Dal Lake in **Srinagar**, the "Meadow of Flowers" in **Gulmarg**, the shepherd's village of **Pahalgam**, 
                      and the "Meadow of Gold" in **Sonamarg**. Perfect for couples, families, and solo explorers.
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Key Destinations</h3> {/* Reduced font size on mobile */}
                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4"> {/* Adjusted grid for smaller screens */}
                      {tourDetails.destinations.map((destination, index) => (
                        <div key={index} className="text-center p-3 md:p-4 bg-blue-50 hover:bg-blue-100 transition-colors rounded-lg flex flex-col items-center">
                          <span className="text-xl md:text-2xl text-blue-600 mb-0.5 md:mb-1">🏞️</span>
                          <span className="font-medium text-xs md:text-sm text-gray-800">{destination}</span> {/* Reduced font size on mobile */}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div id="itinerary-content">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800">Detailed Itinerary 🗓️</h2>
                    <div className="space-y-6 md:space-y-8">
                      {itinerary.map((day, index) => (
                        <div key={index} className="flex space-x-4 md:space-x-6">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0 shadow-md">
                              Day {day.day}
                            </div>
                            {index < itinerary.length - 1 && (
                              <div className="w-0.5 h-full bg-blue-300 mt-1 md:mt-2"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-3 md:pb-4">
                            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-gray-800">{day.title}</h3>
                            <p className="text-sm md:text-base text-gray-700">{day.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'inclusions' && (
                  <div id="inclusions-content">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800">What's Included & Excluded 🎁</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-green-700">Inclusions ✅</h3>
                        <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                          {inclusions.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2 md:mr-3 mt-0.5 md:mt-1 text-base md:text-lg">✔</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-red-700">Exclusions ❌</h3>
                        <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                          {exclusions.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-500 mr-2 md:mr-3 mt-0.5 md:mt-1 text-base md:text-lg">✖</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'photos' && (
                  <div id="photos-content">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">Photo Gallery 📸</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6"> {/* Adjusted grid for smaller screens */}
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div 
                           key={index} 
                           className="relative rounded-xl overflow-hidden shadow-md group bg-gray-200" 
                        >
                          <Image
                            src={`/slider/img${index + 1}.jpg`}
                            alt={`Kashmir Landscape ${index + 1}`}
                            width={400} 
                            height={250} 
                            className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer" // Adjusted height for mobile
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Info / Selling Points */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 border border-gray-200"> {/* Reduced padding */}
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Why Book with OpoTrip?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"> {/* Reduced gap */}
                {/* Responsive content boxes */}
                {[{icon:'⭐', title:'Best Price Guarantee', description:'We match genuine competitor prices for the same package.'}, {icon:'📞', title:'24/7 Customer Support', description:'Dedicated on-call assistance throughout your entire journey.'}, {icon:'🔄', title:'Flexible Booking', description:'Peace of mind with easy rescheduling and clear cancellation policies.'}, {icon:'🏨', title:'Verified Hotels', description:'Stay in hand-picked, quality-checked 3-star accommodations.'}].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-lg md:text-xl text-blue-600">{item.icon}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-base md:text-lg text-gray-900">{item.title}</h3>
                            <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}