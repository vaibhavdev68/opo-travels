"use client";

import {
  User,
  Users,
  LayoutDashboard,
  Settings,
  LogOut,
  Heart,
  MapPin, 
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "co-travellers", label: "Co-Travellers", icon: Users },
    { id: "my-bookings", label: "My Booking", icon: LayoutDashboard },
    { id: "itinerary", label: "Itinerary", icon: MapPin },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "devices", label: "Logged In Devices", icon: Settings },
  
  ];

  return (
    <div className="w-full md:w-64 bg-gradient-to-b from-teal-700 to-teal-500 rounded-lg shadow-sm p-4 md:p-6 h-[500px]">
      <h3 className="text-sm font-semibold text-white mb-4">MY ACCOUNT</h3>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center space-x-3 w-full px-4 py-2 rounded-md text-sm transition 
                ${
                  isActive
                    ? "bg-white text-teal-700 font-semibold"
                    : "text-white hover:bg-white/10"
                }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}

        <button
          onClick={() => alert("Logging out...")}
          className="flex items-center space-x-3 w-full px-4 py-2 rounded-md text-sm text-red-300 hover:bg-red-100/10 hover:text-white transition"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
}