'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    let formattedValue = value;
    if (value && !value.startsWith('+91')) {
      formattedValue = '+91 ' + value.replace(/^\+?\d{1,3}\s?/, '');
    }
    
    setFormData(prev => ({
      ...prev,
      phone: formattedValue
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+91\s\d{10}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email.");
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid Indian phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', phone: '', destination: '', travelers: '', message: '' });
      alert('Travel inquiry sent successfully! We will contact you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      title: "Custom Tour Packages",
      description: "Tailored travel experiences designed specifically for your preferences and budget",
      icon: "✈",
      color: "from-teal-600 to-teal-500"
    },
    {
      title: "Adventure Tours",
      description: "Thrilling adventures from hiking to water sports in exotic locations",
      icon: "🏔",
      color: "from-teal-600 to-teal-500"
    },
    {
      title: "Luxury Getaways",
      description: "Premium accommodations and exclusive experiences for discerning travelers",
      icon: "⭐",
      color: "from-teal-600 to-teal-500"
    },
    {
      title: "Cultural Experiences",
      description: "Immerse yourself in local cultures, traditions, and authentic experiences",
      icon: "🏛",
      color: "from-teal-600 to-teal-500"
    },
    {
      title: "Family Vacations",
      description: "Fun-filled family trips with activities for all age groups",
      icon: "👨‍👩‍👧‍👦",
      color: "from-teal-600 to-teal-500"
    },
    {
      title: "Honeymoon Packages",
      description: "Romantic escapes to the world's most beautiful destinations",
      icon: "💑",
      color: "from-teal-600 to-teal-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "24/7", label: "Customer Support" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  const destinations = [
    { name: "Bali", country: "Indonesia", image: "/destinations/bali.jpg" },
    { name: "Paris", country: "France", image: "/destinations/paris.jpg" },
    { name: "Tokyo", country: "Japan", image: "/destinations/tokyo.jpg" },
    { name: "Swiss Alps", country: "Switzerland", image: "/destinations/swiss-alps.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                OPO Travels
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-teal-500 mx-auto mb-6"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Your Journey <span className="text-teal-600">Begins Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover unforgettable experiences with our expertly crafted tours and personalized travel solutions around the globe
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => document.getElementById('travel-form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Plan Your Adventure
            </button>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Popular <span className="text-teal-600">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our most sought-after travel destinations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 text-center border border-teal-200 hover:border-teal-400 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="relative w-full h-32 mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{destination.name}</h3>
                <p className="text-teal-600">{destination.country}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our <span className="text-teal-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive travel solutions tailored to your dreams
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:transform hover:scale-105 group shadow-sm hover:shadow-md"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="travel-form" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Plan Your Trip</h2>
              <p className="text-gray-600 mb-8">Let us craft your perfect travel experience!</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        🇮🇳 +91
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full pl-20 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                        placeholder="98765 43210"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Indian number with country code</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                    <div className="relative">
                      <select
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent text-gray-900 transition-all appearance-none cursor-pointer pr-10"
                        disabled={isSubmitting}
                        style={{
                          backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")",
                          backgroundPosition: 'right 0.5rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em'
                        }}
                      >
                        <option value="" className="bg-white text-gray-900">Select number of travelers...</option>
                        <option value="1" className="bg-white text-gray-900 hover:bg-teal-100">1 Traveler</option>
                        <option value="2" className="bg-white text-gray-900 hover:bg-teal-100">2 Travelers</option>
                        <option value="3-4" className="bg-white text-gray-900 hover:bg-teal-100">3-4 Travelers</option>
                        <option value="5+" className="bg-white text-gray-900 hover:bg-teal-100">5+ Travelers</option>
                        <option value="group" className="bg-white text-gray-900 hover:bg-teal-100">Group Tour</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dream Destination</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
                    placeholder="Where would you like to go?"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Preferences *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent text-gray-900 placeholder-gray-500 resize-none transition-all"
                    placeholder="Tell us about your travel preferences, interests, budget, and any special requirements..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Planning Your Trip...
                    </span>
                  ) : (
                    'Get Travel Quote'
                  )}
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 text-center border border-teal-200">
                  <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                  <div className="text-gray-600">Destinations</div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 text-center border border-teal-200">
                  <div className="text-3xl font-bold text-teal-600 mb-2">10K+</div>
                  <div className="text-gray-600">Happy Travelers</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-teal-600">Why Choose OPO Travels?</h3>
                <div className="space-y-4">
                  {['Best Price Guarantee','24/7 Travel Support','Local Expert Guides','Flexible Cancellation'].map((item, idx) => (
                    <div className="flex items-center" key={idx}>
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-teal-600">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200">
                <h3 className="text-xl font-bold mb-4 text-teal-600">Emergency Travel Support</h3>
                <p className="text-gray-600 mb-4">Need help while traveling? Our emergency line is available 24/7.</p>
                <div className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-xl text-center transition-colors cursor-pointer">
                  📞 +91 1800-TRAVEL1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
            OPO Travels
          </div>
          <p className="text-gray-600 mb-6">
            Creating unforgettable journeys, one destination at a time
          </p>
          <div className="text-gray-500 text-sm">
            © 2024 OPO Travels. All rights reserved. | ✈ Travel with Confidence
          </div>
        </div>
      </div>

      <style jsx>{`
        select option {
          background-color: white !important;
          color: #1f2937 !important;
          padding: 8px;
        }
        select option:hover {
          background-color: #f0fdfa !important;
        }
      `}</style>
    </div>
  );
}