"use client";

import ProfileTab from "./ProfileTab";
import DashboardTab from "../Dashboard/DashboardTab";
import WishlistTab from "../Wishlist/WishlistTab";
import CoTravelerDashboard from "../Dashboard/CoTravelerDashboard";
import DevicesLogoutPage from "../Dashboard/DeviceLogoutPage";
import DummyItinerary from "../Dashboard/ItineraryView";

export default function ContentArea({ activeTab, user }) {
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab user={user} />;
      case "co-travellers":
        return <CoTravelerDashboard />;
      case "my-bookings":
        return <DashboardTab />;
      case "wishlist":
        return <WishlistTab />;
      case "devices":
        return <DevicesLogoutPage />;
        case "itinerary":
        return <DummyItinerary />
      default:
        return <ProfileTab user={user} />;
    }
  };

  return (
    <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 min-h-[600px] overflow-hidden">
      {renderContent()}
    </div>
  );
}