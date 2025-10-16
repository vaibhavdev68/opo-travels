"use client";

import { Heart, MapPin, Calendar, Users, Star, Trash2 } from "lucide-react";

export default function WishlistTab() {
  const wishlistItems = [
    {
      id: 1,
      title: "Luxury Goa Beach Resort",
      location: "Goa, India",
      image: "/goa-resort.jpg",
      type: "Hotel",
      price: "₹12,500",
      rating: 4.8,
      reviews: 1247,
      checkIn: "15 Dec 2024",
      checkOut: "20 Dec 2024",
      guests: 2,
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Beach View"]
    },
    {
      id: 2,
      title: "Bali Cultural Experience Package",
      location: "Bali, Indonesia",
      image: "/bali-package.jpg",
      type: "Tour Package",
      price: "₹45,000",
      rating: 4.9,
      reviews: 892,
      duration: "7 Days",
      includes: ["Flights", "Hotels", "Meals", "Sightseeing"],
      groupSize: "Small Group"
    },
    {
      id: 3,
      title: "Maldives Overwater Villa",
      location: "Maldives",
      image: "/maldives-villa.jpg",
      type: "Hotel",
      price: "₹28,000",
      rating: 4.7,
      reviews: 567,
      checkIn: "10 Jan 2025",
      checkOut: "15 Jan 2025",
      guests: 2,
      amenities: ["Private Pool", "All Inclusive", "Spa", "Water Sports"]
    },
    {
      id: 4,
      title: "European Grand Tour",
      location: "Paris, Rome, Barcelona",
      image: "/europe-tour.jpg",
      type: "Tour Package",
      price: "₹1,25,000",
      rating: 4.6,
      reviews: 1342,
      duration: "14 Days",
      includes: ["Flights", "Hotels", "All Meals", "Guided Tours"],
      groupSize: "Standard Group"
    }
  ];

  const handleRemoveItem = (id) => {
    if (confirm("Are you sure you want to remove this item from your wishlist?")) {
      console.log("Removing item:", id);
    }
  };

  const handleBookNow = (item) => {
    alert(`Booking ${item.title}`);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Teal Theme */}
        <div className="bg-gradient-to-r from-[#079790] to-[#04b3b3] shadow-lg rounded-2xl mb-8">
          <div className="flex items-center justify-between h-20 px-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">My Wishlist</h1>
                <p className="text-teal-100 text-sm">Your saved travel destinations and packages</p>
              </div>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-white">
                <Heart className="w-6 h-6 fill-white" />
                <span className="text-lg font-semibold">{wishlistItems.length} items</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#079790]/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#079790] text-sm font-medium">Total Items</div>
                <div className="text-3xl font-bold text-[#079790] mt-2">{wishlistItems.length}</div>
              </div>
              <div className="bg-[#079790]/20 p-3 rounded-xl">
                <Heart className="h-6 w-6 text-[#079790]" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#079790]/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#079790] text-sm font-medium">Hotels</div>
                <div className="text-3xl font-bold text-[#079790] mt-2">
                  {wishlistItems.filter(item => item.type === "Hotel").length}
                </div>
              </div>
              <div className="bg-teal-100 p-3 rounded-xl">
                <MapPin className="h-6 w-6 text-teal-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#079790]/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#079790] text-sm font-medium">Packages</div>
                <div className="text-3xl font-bold text-[#079790] mt-2">
                  {wishlistItems.filter(item => item.type === "Tour Package").length}
                </div>
              </div>
              <div className="bg-teal-100 p-3 rounded-xl">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#079790]/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#079790] text-sm font-medium">Avg. Rating</div>
                <div className="text-3xl font-bold text-[#079790] mt-2">4.8</div>
              </div>
              <div className="bg-yellow-100 p-3 rounded-xl">
                <Star className="h-6 w-6 text-yellow-600 fill-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Wishlist Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#079790]/30 overflow-hidden">
          {/* Section Header */}
          <div className="px-6 py-4 border-b border-[#079790]/30 bg-gradient-to-r from-[#e0f7f6] to-[#c5f0ef]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#079790]">Saved Items</h2>
                <p className="text-[#079790]/70 text-sm">Manage your wishlisted destinations</p>
              </div>
              <button className="bg-gradient-to-r from-[#079790] to-[#04b3b3] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 text-sm hover:shadow-md transition-all">
                <Heart size={16} />
                Explore More
              </button>
            </div>
          </div>

          {/* Wishlist Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-white to-[#e0f7f6] rounded-xl shadow-md border border-[#079790]/30 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Image Section */}
                  <div className="relative h-48 bg-gradient-to-r from-[#079790] to-[#04b3b3]">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white/90 rounded-full">
                        <Heart className="w-4 h-4 fill-[#079790] text-[#079790]" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          item.type === "Hotel"
                            ? "bg-teal-100 text-teal-800 border border-teal-200"
                            : "bg-green-100 text-green-800 border border-green-200"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <div className="text-right">
                        <div className="text-xl font-bold text-[#079790]">{item.price}</div>
                        {item.type === "Hotel" && (
                          <div className="text-xs text-gray-500">per night</div>
                        )}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 text-[#079790]" />
                      <span className="text-sm">{item.location}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-900">{item.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
                    </div>

                    {/* Info */}
                    <div className="space-y-2 mb-4">
                      {item.type === "Hotel" ? (
                        <>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-[#079790]" />
                              <span>
                                {item.checkIn} - {item.checkOut}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4 text-[#079790]" />
                              <span>{item.guests} Guests</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.amenities.slice(0, 3).map((amenity, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-[#e0f7f6] text-[#079790] text-xs rounded border border-[#04b3b3]"
                              >
                                {amenity}
                              </span>
                            ))}
                            {item.amenities.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">
                                +{item.amenities.length - 3} more
                              </span>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4 text-[#079790]" />
                              <span>{item.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4 text-[#079790]" />
                              <span>{item.groupSize}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.includes.map((include, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-[#e0f7f6] text-[#079790] text-xs rounded border border-[#04b3b3]"
                              >
                                {include}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleBookNow(item)}
                        className="flex-1 bg-gradient-to-r from-[#079790] to-[#04b3b3] text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all shadow-md"
                      >
                        Book Now
                      </button>
                      <button className="flex-1 border border-[#079790]/30 text-[#079790] py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#e0f7f6] transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {wishlistItems.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-[#e0f7f6] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#04b3b3]">
                  <Heart size={32} className="text-[#079790]" />
                </div>
                <h3 className="text-xl font-semibold text-[#079790] mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-[#079790]/70 mb-6">
                  Start adding your favorite travel destinations and packages!
                </p>
                <button className="bg-gradient-to-r from-[#079790] to-[#04b3b3] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto shadow-md hover:shadow-lg transition-all">
                  <Heart size={20} />
                  Explore Destinations
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}