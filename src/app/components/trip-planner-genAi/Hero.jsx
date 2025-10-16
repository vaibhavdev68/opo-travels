"use client";
import { useState } from "react";
import ImageSlider from "./ImageSlider";
import Link from "next/link";

export default function TravelItinerary() {
  const [activeCard, setActiveCard] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      date: "Tue 21 Nov",
      title: "Shimla Himanchal Pradesh",
      description:
        "Shimla is a peaceful hill station surrounded by tall pine trees and cool mountain air. Walk along Mall Road, enjoy hot coffee or local snacks while watching the sunset, and try tasty Himachali dishes like Siddu and Chana Madra.",
      duration: "6 hours",
      location: "India",
    },
    {
      day: "Day 2",
      date: "Tue 22 Nov",
      title: "Manali Himanchal Pradesh",
      description:
        "Manali is full of snowy mountains, apple gardens, and clear rivers. Travelers can enjoy local treats like hot momos, Maggi, and steaming chai at small cafes by the hills.",
      duration: "Full Day",
      location: "India",
    },
  ];

  const features = [
    {
      title: "AI Travel",
      description:
        "Generate richly personalized accommodation recommendations. Driven by your unique preferences and tastes, we curate an array of lodging options which not only meet, but exceed your needs, providing you with the comfort and convenience you deserve on your journey.",
      icon: "🤖",
    },
    {
      title: "About Us",
      description:
        "At OPO Travels, we believe that every journey should be an unforgettable experience. Specializing in personalized travel itineraries, seamless bookings, and memorable adventures, we cater to every traveler’s preferences. From serene mountain escapes and scenic hill stations to vibrant city tours and cultural explorations, OPO Travels takes care of all the details—accommodations, transportation, and local experiences—so you can relax and enjoy your trip. Our mission is to make travel effortless, enjoyable, and inspiring, ensuring that every journey with OPO Travels becomes a story worth telling.",
      icon: "🧳",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Travel Itinerary Section */}
      <div className="bg-gradient-to-br from-[#E6FAF8] to-[#CFF4EE] py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Everything you need for planning your trip
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly manage your itinerary all in one page with Wonderplan — from reconfiguring the order of your plans, introducing new destinations to your itinerary, or even discarding plans as needed.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Itinerary */}
            <div className="lg:col-span-2 space-y-8">
              {itinerary.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg transition-all duration-500 transform ${
                    activeCard === index
                      ? "scale-105 shadow-2xl backdrop-blur-lg"
                      : "hover:scale-105 hover:shadow-xl"
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#079790] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.day}
                      </span>
                      <span className="text-gray-600 font-medium">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{item.duration}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}

              {/* Add Place Card with ImageSlider */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border-2 border-dashed border-gray-300 hover:border-[#079790] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <ImageSlider />
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-[#E8FAF7] to-[#D3F5EF] backdrop-blur-md rounded-2xl p-6 shadow-lg transition-all duration-500 transform ${
                    activeCard === `feature-${index}`
                      ? "scale-105 shadow-2xl backdrop-blur-lg"
                      : "hover:scale-105 hover:shadow-xl"
                  }`}
                  onMouseEnter={() => setActiveCard(`feature-${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Container / Call-to-Action */}
        <div className="w-full flex justify-center py-10">
          <div
            className="w-full max-w-6xl bg-black text-white text-center rounded-2xl px-8 py-10 shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
          >
            <h1 className="text-2xl sm:text-3xl font-semibold leading-relaxed">
              Skip the manual trip planning and<br />
              start your effortless journey with<br />
              <span className="font-bold text-[#079790]">
                Trip Planner AI today, at no cost.
              </span>
            </h1>
            <Link href="/trip-generator">
              <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-md shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
                Try Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}