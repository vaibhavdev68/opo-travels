'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function KeralaCards() {
  const [packages, setPackages] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        title: "Kerala in Four Days: A Family Dream Vacation",
        duration: "3N/4D",
        location: "Kerala",
        rating: 4.5,
        image: "/images/image1.jpg",
        discountedPrice: 12999,
        perPersonText: "Per Adult",
      },
      {
        id: 2,
        title: "Honeymoon Special in Kerala's Backwaters",
        duration: "3N/4D",
        location: "Kerala",
        rating: 4,
        image: "/images/image2.jpg",
        discountedPrice: 14999,
        perPersonText: "Per Adult",
      },
      {
        id: 3,
        title: "Kerala Wildlife & Nature Adventure",
        duration: "4N/5D",
        location: "Kerala",
        rating: 4.7,
        image: "/images/image3.jpg",
        discountedPrice: 19999,
        perPersonText: "Per Adult",
      },
      {
        id: 4,
        title: "Kerala Beaches & Backwaters Package",
        duration: "3N/4D",
        location: "Kerala",
        rating: 4.3,
        image: "/images/image4.jpg",
        discountedPrice: 13999,
        perPersonText: "Per Adult",
      },
    ];

    const mockRecommendations = [
      {
        id: 1,
        title: "Kerala Delight Escape",
        duration: "3N/4D",
        location: "Kerala",
        rating: 4.2,
        image: "/images/image4.jpg",
        discountedPrice: 13999,
        perPersonText: "Per Adult",
      },
      {
        id: 2,
        title: "Misty Munnar Hills & Tea Gardens",
        duration: "4N/5D",
        location: "Kerala",
        rating: 4.6,
        image: "/images/image3.jpg",
        discountedPrice: 15999,
        perPersonText: "Per Adult",
      },
      {
        id: 3,
        title: "Houseboat Serenity in Alleppey",
        duration: "2N/3D",
        location: "Kerala",
        rating: 4.4,
        image: "/images/image2.jpg",
        discountedPrice: 11999,
        perPersonText: "Per Adult",
      },
      {
        id: 4,
        title: "Backwaters & Beaches Luxury Escape",
        duration: "5N/6D",
        location: "Kerala",
        rating: 4.8,
        image: "/images/image1.jpg",
        discountedPrice: 19999,
        perPersonText: "Per Adult",
      },
    ];

    setPackages(mockData);
    setRecommendations(mockRecommendations);
  }, []);

  const renderCard = (pkg) => (
    <div
      key={pkg.id}
      className="
        bg-white/20
        backdrop-blur-md
        border border-white/30
        rounded-2xl
        shadow-[0_4px_30px_rgba(0,0,0,0.2)]
        hover:shadow-[0_0_40px_rgba(7,151,144,0.3)]
        transition-all
        duration-300
        hover:scale-105
        overflow-hidden
        flex flex-col
        justify-between
      "
    >
      {/* Image */}
      <div className="relative w-full h-28 sm:h-40">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between text-left text-gray-800 flex-grow">
        <h2 className="text-lg font-bold mb-1 text-[#079790] drop-shadow-sm">
          {pkg.title}
        </h2>
        <p className="text-sm text-gray-600">
          {pkg.duration} | {pkg.location}
        </p>
        <p className="text-[#079790] mt-2 font-semibold">
          ⭐ {pkg.rating} Rating
        </p>
        <p className="text-gray-800 mt-2 font-bold text-lg">
          ₹{pkg.discountedPrice.toLocaleString()}{" "}
          <span className="text-sm text-gray-600 font-normal">
            / {pkg.perPersonText}
          </span>
        </p>
      </div>

      {/* Button */}
      <div className="px-4 pb-4">
        <Link href="/view-page">
          <button
            className="
              w-full
              py-2
              rounded-xl
              font-semibold
              text-white
              bg-gradient-to-r from-[#079790] to-[#079790]
              shadow-lg
              hover:from-[#079790] hover:to-[#079790]
              transition-all
              duration-300
              backdrop-blur-sm
            "
          >
            View
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* Solo Packages Section */}
      <section>
        <h2 className="text-5xl font-bold text-black-700 mb-6 text-left">
          Solo Travel
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map(renderCard)}
        </div>
      </section>

      {/* Couple Packages Section */}
      <section>
        <h2 className="text-5xl font-bold text-black-700 mb-6 text-left">
          Couple Gateway
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map(renderCard)}
        </div>
      </section>

      {/* Friends Packages Section */}
      <section>
        <h2 className="text-5xl font-bold text-black-700 mb-6 text-left">
          Friends Trip
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map(renderCard)}
        </div>
      </section>

      {/* Family Packages Section */}
      <section>
        <h2 className="text-5xl font-bold text-black-700 mb-6 text-left">
          Family Vacation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map(renderCard)}
        </div>
      </section>
    </div>
  );
}