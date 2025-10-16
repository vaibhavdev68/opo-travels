import BookingCard from "./BookingCard";
import TransactionTable from "./TransactionTable";

export default function DashboardTab() {
  const travelStats = {
    successful: 12,
    cancelled: 2,
    refunded: 1,
  };

  const packageStats = {
    successful: 8,
    cancelled: 1,
    refunded: 0,
  };

  const travelTransactions = [
    {
      id: "TRV001",
      destination: "Goa, India",
      description: "Flight + Hotel Booking",
      date: "15 Oct 2024",
      amount: "24,500",
      status: "Successful",
    },
    {
      id: "TRV002",
      destination: "Delhi to Mumbai",
      description: "Flight Booking",
      date: "10 Oct 2024",
      amount: "8,200",
      status: "Cancelled",
    },
    {
      id: "TRV003",
      destination: "Kerala, India",
      description: "Hotel Booking",
      date: "05 Oct 2024",
      amount: "12,300",
      status: "Refunded",
    },
  ];

  const packageTransactions = [
    {
      id: "PKG001",
      destination: "Thailand Tour",
      description: "7 Days Thailand Package",
      date: "20 Oct 2024",
      amount: "45,000",
      status: "Successful",
    },
    {
      id: "PKG002",
      destination: "Europe Tour",
      description: "10 Days Europe Package",
      date: "12 Oct 2024",
      amount: "1,25,000",
      status: "Successful",
    },
    {
      id: "PKG003",
      destination: "Dubai Package",
      description: "5 Days Dubai Package",
      date: "08 Oct 2024",
      amount: "38,500",
      status: "Cancelled",
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-white">
      <div className="bg-gradient-to-br from-teal-50 via-teal-100 to-white rounded-2xl shadow-lg p-6 border border-teal-200 space-y-6">

        {/* Title */}
        <h2 className="text-xl font-bold text-teal-900">My Booking</h2>

        {/* Booking Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BookingCard title="Travel Bookings" stats={travelStats} />
          <BookingCard title="Package Bookings" stats={packageStats} />
        </div>

        {/* Quick Stats */}
        <div className="bg-teal-50 rounded-xl p-6 border border-teal-200 shadow-sm">
          <h3 className="text-lg font-semibold text-teal-900 mb-4">
            Quick Stats
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-teal-100 to-white rounded-lg border border-teal-200 shadow-sm">
              <div className="text-2xl font-bold text-teal-900">20</div>
              <div className="text-sm text-teal-700">Total Bookings</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-teal-100 to-white rounded-lg border border-teal-200 shadow-sm">
              <div className="text-2xl font-bold text-teal-900">₹2,53,500</div>
              <div className="text-sm text-teal-700">Total Spent</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-teal-100 to-white rounded-lg border border-teal-200 shadow-sm">
              <div className="text-2xl font-bold text-teal-900">85%</div>
              <div className="text-sm text-teal-700">Success Rate</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-teal-100 to-white rounded-lg border border-teal-200 shadow-sm">
              <div className="text-2xl font-bold text-teal-900">₹12,300</div>
              <div className="text-sm text-teal-700">Total Refunded</div>
            </div>
          </div>
        </div>

        {/* Transaction Tables */}
        <div className="space-y-6">
          <TransactionTable transactions={travelTransactions} type="Travel" />
          <TransactionTable transactions={packageTransactions} type="Package" />
        </div>
      </div>
    </div>
  );
}