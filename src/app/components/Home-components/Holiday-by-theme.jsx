'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function KeralaCards() {
  const [packages, setPackages] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch packages data
        const packagesResponse = await fetch('/data/homepage/kerala-packages.json');
        const packagesData = await packagesResponse.json();
        setPackages(packagesData.KERALA_PACKAGES || []);

        // Fetch recommendations data
        const recommendationsResponse = await fetch('/data/homepage/kerala-recommendations.json');
        const recommendationsData = await recommendationsResponse.json();
        setRecommendations(recommendationsData.KERALA_RECOMMENDATIONS || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderCard = (pkg) => (
    <div
      key={pkg.id}
      className="
        bg-white
        text-gray-900
        border border-gray-200
        rounded-2xl
        shadow-md
        hover:shadow-xl
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
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-lg font-bold mb-1 text-gray-800 hover:text-purple-600 transition-colors">
          {pkg.title}
        </h2>
        <p className="text-sm text-gray-600">
          {pkg.duration} | {pkg.location}
        </p>
        <p className="mt-2 font-semibold text-gray-700">
          ⭐ {pkg.rating} Rating
        </p>
        <p className="mt-2 font-bold text-lg text-purple-600">
          ₹{pkg.discountedPrice.toLocaleString()}{" "}
          <span className="text-sm font-normal text-gray-600">
            / {pkg.perPersonText}
          </span>
        </p>
      </div>

      {/* View Button */}
      <div className="px-4 pb-4">
        <Link href="/view-page">
          <button
            className="
              w-full
              py-2
              rounded-xl
              font-semibold
              text-white
              bg-gradient-to-r from-purple-700 to-purple-500
              shadow-md
              hover:from-purple-800 hover:to-purple-600
              transition-all
              duration-300
              transform
              hover:scale-105
            "
          >
            View
          </button>
        </Link>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        <div className="text-center py-12">
          <div className="text-xl">Loading Kerala packages...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
      {/* Packages Section - NO STYLING CHANGES */}
      <section>
        <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Deals You Can't Miss
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map(renderCard)}
        </div>
      </section> 

      {/* Recommendations Section - NO STYLING CHANGES */}
      <section>
        <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Recommended for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map(renderCard)}
        </div>
      </section>
    </div>
  );
}