"use client";
import React, { useEffect, useState } from "react";
import { Clock, Calendar, Wallet, MapPin } from "lucide-react";

export default function CardGrid() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error fetching cards:", err));
  }, []);

  const iconMap = {
    "Ideal Duration": <Clock className="text-purple-700 w-10 h-10 mb-3" />,
    "Best Time": <Calendar className="text-purple-700 w-10 h-10 mb-3" />,
    "Average Price": <Wallet className="text-purple-700 w-10 h-10 mb-3" />,
    "Top Attractions": <MapPin className="text-purple-700 w-10 h-10 mb-3" />,
  };

  return (
    <section className="bg-purple-100 py-16 px-4">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-3 drop-shadow-sm">
          Group Travel Highlights
        </h2>
        <p className="text-purple-600 text-lg">
          Here’s a quick glimpse of what makes your trip special 🌿
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              group
              rounded-2xl
              shadow-[0_4px_30px_rgba(0,0,0,0.1)]
              hover:shadow-[0_0_40px_rgba(128,90,213,0.3)]
              hover:scale-105
              transition-all
              duration-300
              p-0
              text-center
            "
          >
            {/* Inner Card Container */}
            <div className="bg-white/30 group-hover:bg-white rounded-2xl p-8 flex flex-col justify-between h-full transition-colors duration-300">
              {/* Icon */}
              <div className="flex justify-center mb-4">{iconMap[card.title]}</div>

              {/* Dynamic Value */}
              <h3 className="text-xl md:text-2xl font-bold text-purple-800 mb-2 group-hover:text-purple-900">
                {card.dynamic}
              </h3>

              {/* Description */}
              <p className="text-purple-700 mb-4 text-base leading-relaxed group-hover:text-purple-800">
                {card.text}
              </p>

              {/* Title */}
              <h4 className="text-purple-600 font-semibold text-lg group-hover:text-purple-700">
                {card.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}