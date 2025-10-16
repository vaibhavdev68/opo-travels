// components/DummyItinerary.jsx
import React, { useState } from 'react';
import { 
  MapPin,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Download,
  Share2,
  ChevronDown,
  ChevronUp,
  Utensils,
  Home,
  Car,
  Star,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plane,
  Sun,
  Navigation,
  PhoneCall,
  ClipboardList,
  Route,
  CheckCircle2,
  Ban
} from 'lucide-react';

const DummyItinerary = () => {
  const [expandedDay, setExpandedDay] = useState(1);

  // Helper function to check if itinerary is completed (past end date at 11:59 PM)
  const isItineraryCompleted = () => {
    const endDate = new Date('2024-12-05');
    // Set to end of the day (23:59:59.999)
    const endOfEndDate = new Date(endDate);
    endOfEndDate.setHours(23, 59, 59, 999);
    const today = new Date();
    return endOfEndDate < today;
  };

  // Helper function to check if a specific day is completed (after 11:59 PM of that day)
  const isDayCompleted = (dayDate) => {
    const day = new Date(dayDate);
    // Set to end of the day (23:59:59.999)
    const endOfDay = new Date(day);
    endOfDay.setHours(23, 59, 59, 999);
    const today = new Date();
    return endOfDay < today;
  };

  const itinerary = {
    id: 'ITIN001',
    packageName: 'Bali Adventure Package - 5 Days',
    bookingReference: 'BK2024001',
    status: isItineraryCompleted() ? 'completed' : 'confirmed',
    startDate: '2024-12-01',
    endDate: '2024-12-05',
    traveler: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890'
    },
    days: [
      {
        day: 1,
        date: '2025-10-12', // Past date for testing
        title: 'Arrival in Bali - Welcome to Paradise',
        description: 'Welcome to the Island of Gods! Our representative will meet you at the airport and transfer you to your beachfront resort.',
        activities: [
          'Airport pickup (Ngurah Rai International Airport)',
          'Transfer to Seminyak beach resort',
          'Welcome drink and briefing',
          'Free time to relax and acclimate'
        ],
        meals: ['Dinner'],
        accommodation: 'The Seminyak Beach Resort - Deluxe Room',
        transport: 'Private AC vehicle',
        timeSlots: [
          { time: '14:00', activity: 'Airport pickup and transfer to hotel' },
          { time: '15:30', activity: 'Hotel check-in and welcome drink' },
          { time: '19:00', activity: 'Welcome dinner at beachfront restaurant' }
        ]
      },
      {
        day: 2,
        date: '2025-10-13', // Today's date or future for testing
        title: 'Ubud Cultural Exploration',
        description: 'Discover the cultural heart of Bali with visits to ancient temples, lush rice terraces, and traditional markets.',
        activities: [
          'Visit Ubud Palace',
          'Explore Tegalalang Rice Terraces',
          'Traditional Balinese lunch',
          'Ubud Art Market shopping',
          'Traditional Kecak dance performance'
        ],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'The Seminyak Beach Resort - Deluxe Room',
        transport: 'Private AC vehicle with English-speaking guide',
        timeSlots: [
          { time: '08:00', activity: 'Breakfast at hotel' },
          { time: '09:00', activity: 'Depart for Ubud' },
          { time: '10:30', activity: 'Visit Ubud Palace and Royal Temple' },
          { time: '12:00', activity: 'Lunch at traditional warung' },
          { time: '14:00', activity: 'Tegalalang Rice Terrace photo session' },
          { time: '16:00', activity: 'Ubud Art Market exploration' },
          { time: '19:00', activity: 'Kecak dance performance' }
        ]
      },
      {
        day: 3,
        date: '2025-10-14', // Future date for testing
        title: 'Beach Day & Water Sports',
        description: 'Enjoy the beautiful beaches of Bali with various water activities and relaxation time.',
        activities: [
          'Beach relaxation at Nusa Dua',
          'Snorkeling adventure',
          'Banana boat ride',
          'Beachside massage (optional)',
          'Sunset cocktails'
        ],
        meals: ['Breakfast', 'Lunch'],
        accommodation: 'The Seminyak Beach Resort - Deluxe Room',
        transport: 'Hotel shuttle and speedboat',
        timeSlots: [
          { time: '07:00', activity: 'Breakfast at hotel' },
          { time: '09:00', activity: 'Transfer to Nusa Dua beach' },
          { time: '10:00', activity: 'Snorkeling session' },
          { time: '12:00', activity: 'Beachside lunch' },
          { time: '14:00', activity: 'Water sports activities' },
          { time: '17:00', activity: 'Sunset cocktail session' }
        ]
      }
    ],
    emergencyContacts: [
      { name: 'Local Guide - Wayan', phone: '+62 812-3456-7890', type: 'Guide' },
      { name: '24/7 Emergency Hotline', phone: '+62 361-123-456', type: 'Emergency' }
    ],
    inclusions: [
      '4 nights accommodation in 4-star hotel',
      'Daily breakfast',
      'All transfers in private AC vehicle',
      'English speaking guide',
      'Entrance fees to all attractions'
    ],
    exclusions: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Optional activities'
    ]
  };

  const toggleDay = (dayNumber) => {
    setExpandedDay(expandedDay === dayNumber ? 0 : dayNumber);
  };

  const downloadItinerary = () => {
    alert('Itinerary download feature will be implemented later!');
  };

  const shareItinerary = () => {
    alert('Share itinerary feature will be implemented later!');
  };

  const getActivityIcon = (activity) => {
    if (activity.toLowerCase().includes('airport') || activity.toLowerCase().includes('flight')) 
      return <Plane className="w-4 h-4 text-teal-500" />;
    if (activity.toLowerCase().includes('hotel') || activity.toLowerCase().includes('resort')) 
      return <Home className="w-4 h-4 text-green-500" />;
    if (activity.toLowerCase().includes('food') || activity.toLowerCase().includes('dinner') || activity.toLowerCase().includes('lunch')) 
      return <Utensils className="w-4 h-4 text-orange-500" />;
    if (activity.toLowerCase().includes('tour') || activity.toLowerCase().includes('visit') || activity.toLowerCase().includes('explore')) 
      return <MapPin className="w-4 h-4 text-teal-500" />;
    if (activity.toLowerCase().includes('beach') || activity.toLowerCase().includes('sunset')) 
      return <Sun className="w-4 h-4 text-yellow-500" />;
    return <Star className="w-4 h-4 text-gray-500" />;
  };

  const isCompleted = isItineraryCompleted();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className={`bg-white rounded-2xl shadow-lg border border-teal-100 p-6 mb-6 relative ${isCompleted ? 'opacity-75' : ''}`}>
          {isCompleted && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="bg-teal-600 text-white px-6 py-3 rounded-lg transform -rotate-12 shadow-xl flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                <span className="text-lg font-bold">COMPLETED</span>
              </div>
            </div>
          )}
          <div className={`${isCompleted ? 'filter blur-sm' : ''}`}>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Your Travel Itinerary</h1>
                    <p className="text-lg text-teal-600 font-semibold mt-1">{itinerary.packageName}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
                    <ClipboardList className="w-4 h-4" />
                    Booking: {itinerary.bookingReference}
                  </span>
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                    itinerary.status === 'completed' 
                      ? 'bg-gray-100 text-gray-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {itinerary.status === 'completed' ? (
                      <Ban className="w-4 h-4" />
                    ) : (
                      <CheckCircle className="w-4 h-4" />
                    )}
                    {itinerary.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(itinerary.startDate).toLocaleDateString()} - {new Date(itinerary.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              {/* Buttons remain fully functional even when itinerary is completed */}
              <div className="flex gap-2 mt-4 lg:mt-0 relative z-20">
                <button 
                  onClick={downloadItinerary}
                  className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button 
                  onClick={shareItinerary}
                  className="flex items-center gap-2 border border-teal-200 text-teal-700 hover:bg-teal-50 px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Traveler Information */}
        <div className={`bg-white rounded-2xl shadow-lg border border-teal-100 p-6 mb-6 ${isCompleted ? 'opacity-60' : ''}`}>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-teal-600" />
            Traveler Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
              <User className="w-5 h-5 text-teal-600" />
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-medium text-gray-900">{itinerary.traveler.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
              <Mail className="w-5 h-5 text-teal-600" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{itinerary.traveler.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
              <Phone className="w-5 h-5 text-teal-600" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium text-gray-900">{itinerary.traveler.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Itinerary */}
        <div className="bg-white rounded-2xl shadow-lg border border-teal-100 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Route className="w-5 h-5 text-teal-600" />
            Daily Schedule
          </h2>
          
          <div className="space-y-4">
            {itinerary.days.map((day) => {
              const dayCompleted = isDayCompleted(day.date);
              return (
                <div 
                  key={day.day}
                  className={`border border-teal-200 rounded-lg transition-all duration-200 relative ${
                    expandedDay === day.day 
                      ? 'border-teal-400 shadow-lg bg-teal-50' 
                      : 'hover:border-teal-300'
                  } ${dayCompleted ? 'opacity-60' : ''}`}
                >
                  {/* Completion overlay for individual days */}
                  {dayCompleted && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        DONE
                      </div>
                    </div>
                  )}
                  
                  <div 
                    className="p-4 cursor-pointer flex justify-between items-center relative"
                    onClick={() => toggleDay(day.day)}
                  >
                    {/* Cut line for completed days */}
                    {dayCompleted && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-full h-0.5 bg-green-500 transform rotate-6 mx-4"></div>
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${
                          dayCompleted 
                            ? 'bg-green-100 text-green-800 border border-green-300' 
                            : 'bg-teal-600 text-white'
                        }`}>
                          {dayCompleted ? (
                            <CheckCircle2 className="w-3 h-3" />
                          ) : (
                            <Calendar className="w-3 h-3" />
                          )}
                          Day {day.day}
                        </span>
                        <h3 className={`text-lg font-medium ${dayCompleted ? 'text-gray-500' : 'text-gray-900'}`}>
                          {day.title}
                        </h3>
                      </div>
                      <p className={`text-sm flex items-center gap-2 ${dayCompleted ? 'text-gray-400' : 'text-gray-600'}`}>
                        <Clock className="w-3 h-3" />
                        {new Date(day.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="text-teal-600">
                      {expandedDay === day.day ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {expandedDay === day.day && (
                    <div className={`p-4 border-t border-teal-200 space-y-6 ${dayCompleted ? 'opacity-75' : ''}`}>
                      <p className="text-gray-700 bg-white p-4 rounded-lg border border-teal-100">
                        {day.description}
                      </p>

                      {/* Timeline */}
                      <div className="bg-white p-4 rounded-lg border border-teal-100">
                        <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-teal-600" />
                          Daily Schedule
                        </h4>
                        <div className="space-y-3">
                          {day.timeSlots.map((slot, index) => (
                            <div key={index} className="flex items-start gap-4">
                              <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-sm font-medium min-w-14 text-center">
                                {slot.time}
                              </span>
                              <span className="text-gray-700 py-1 flex-1">{slot.activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Activities */}
                      <div className="bg-white p-4 rounded-lg border border-teal-100">
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                          <Navigation className="w-4 h-4 text-teal-600" />
                          Activities & Highlights
                        </h4>
                        <ul className="space-y-2">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="flex items-start gap-3">
                              {getActivityIcon(activity)}
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Additional Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-teal-50 p-3 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <Utensils className="w-4 h-4 text-teal-600" />
                            Meals Included
                          </h5>
                          <p className="text-gray-700 text-sm">{day.meals.join(', ')}</p>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <Home className="w-4 h-4 text-teal-600" />
                            Accommodation
                          </h5>
                          <p className="text-gray-700 text-sm">{day.accommodation}</p>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                            <Car className="w-4 h-4 text-teal-600" />
                            Transport
                          </h5>
                          <p className="text-gray-700 text-sm">{day.transport}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className={`bg-white rounded-2xl shadow-lg border border-teal-100 p-6 mb-6 ${isCompleted ? 'opacity-60' : ''}`}>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-teal-600" />
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {itinerary.emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <PhoneCall className="w-5 h-5 text-teal-600" />
                  <h3 className="font-medium text-gray-900">{contact.name}</h3>
                </div>
                <p className="text-gray-700 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {contact.phone}
                </p>
                <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs font-medium">
                  {contact.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions & Exclusions */}
        <div className={`bg-white rounded-2xl shadow-lg border border-teal-100 p-6 ${isCompleted ? 'opacity-60' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                What's Included
              </h3>
              <ul className="space-y-2">
                {itinerary.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-teal-600" />
                What's Not Included
              </h3>
              <ul className="space-y-2">
                {itinerary.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyItinerary;