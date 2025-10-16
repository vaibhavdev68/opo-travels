"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit2, Trash2, Save, X, Users, Phone, Heart, Utensils, Stethoscope } from "lucide-react";

export default function CoTravelerDashboard() {
  const [travelers, setTravelers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      emergencyContact: "+1987654321",
      dietaryPreferences: "Vegetarian",
      medicalConditions: "None",
      avatar: "JD",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1234567891",
      emergencyContact: "+1987654322",
      dietaryPreferences: "No restrictions",
      medicalConditions: "Asthma",
      avatar: "JS",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1234567892",
      emergencyContact: "+1987654323",
      dietaryPreferences: "Vegan",
      medicalConditions: "Diabetes",
      avatar: "MJ",
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newTraveler, setNewTraveler] = useState({
    name: "",
    email: "",
    phone: "",
    emergencyContact: "",
    dietaryPreferences: "",
    medicalConditions: "",
  });

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id) => {
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setNewTraveler({
      name: "",
      email: "",
      phone: "",
      emergencyContact: "",
      dietaryPreferences: "",
      medicalConditions: "",
    });
  };

  const handleDelete = (id) => {
    setTravelers(travelers.filter(traveler => traveler.id !== id));
  };

  const handleAddTraveler = () => {
    if (newTraveler.name && newTraveler.email) {
      const traveler = {
        id: Date.now(),
        ...newTraveler,
        avatar: newTraveler.name.split(' ').map(n => n[0]).join('').toUpperCase()
      };
      setTravelers([...travelers, traveler]);
      handleCancel();
    }
  };

  const handleInputChange = (id, field, value) => {
    setTravelers(travelers.map(traveler =>
      traveler.id === id ? { ...traveler, [field]: value } : traveler
    ));
  };

  const handleNewTravelerChange = (field, value) => {
    setNewTraveler(prev => ({ ...prev, [field]: value }));
  };

  const getAvatarColor = (name) => {
    const colors = [
      "bg-gradient-to-r from-teal-400 to-teal-500",
      "bg-gradient-to-r from-teal-300 to-teal-400",
      "bg-gradient-to-r from-teal-500 to-teal-600",
      "bg-gradient-to-r from-teal-200 to-teal-300",
    ];
    return colors[name.length % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-teal-100 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Co-Traveler Dashboard</h1>
                <p className="text-teal-100 text-sm">Manage your travel companions</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAdding(true)}
              className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all shadow-md"
            >
              <Plus size={20} />
              Add Traveler
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-teal-600 text-sm font-medium">Total Travelers</div>
                <div className="text-3xl font-bold text-teal-800 mt-2">{travelers.length}</div>
              </div>
              <div className="bg-teal-100 p-3 rounded-xl">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-teal-600 text-sm font-medium">Active</div>
                <div className="text-3xl font-bold text-teal-800 mt-2">{travelers.length}</div>
              </div>
              <div className="bg-green-100 p-3 rounded-xl">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-teal-600 text-sm font-medium">Groups</div>
                <div className="text-3xl font-bold text-teal-800 mt-2">2</div>
              </div>
              <div className="bg-blue-100 p-3 rounded-xl">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-teal-600 text-sm font-medium">Next Trip</div>
                <div className="text-lg font-bold text-teal-800 mt-2">Dec 15, 2024</div>
              </div>
              <div className="bg-blue-100 p-3 rounded-xl">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Add Button for Mobile */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAdding(true)}
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Plus size={24} />
          </motion.button>
        </div>

        {/* Travelers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden"
        >
          {/* Section Header with Add Button */}
          <div className="px-6 py-4 border-b border-teal-100 bg-gradient-to-r from-teal-50 to-teal-100 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-teal-800">Travel Companions</h2>
              <p className="text-teal-600 text-sm">Manage your travel group members</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAdding(true)}
              className="hidden md:flex bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-lg font-semibold items-center gap-2 text-sm hover:shadow-md transition-all"
            >
              <Plus size={16} />
              Add New
            </motion.button>
          </div>

          {/* Add Traveler Form */}
          <AnimatePresence>
            {isAdding && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-teal-200 bg-teal-50/50"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-teal-800 flex items-center gap-2">
                      <Plus size={20} />
                      Add New Traveler
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleCancel}
                      className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-teal-700 mb-2 block">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        value={newTraveler.name}
                        onChange={(e) => handleNewTravelerChange("name", e.target.value)}
                        className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-teal-700 mb-2 block">Email *</label>
                      <input
                        type="email"
                        placeholder="Enter email"
                        value={newTraveler.email}
                        onChange={(e) => handleNewTravelerChange("email", e.target.value)}
                        className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-teal-700 mb-2 block">Phone</label>
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={newTraveler.phone}
                        onChange={(e) => handleNewTravelerChange("phone", e.target.value)}
                        className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-teal-700 mb-2 block">Emergency Contact</label>
                      <input
                        type="tel"
                        placeholder="Emergency contact"
                        value={newTraveler.emergencyContact}
                        onChange={(e) => handleNewTravelerChange("emergencyContact", e.target.value)}
                        className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-teal-700 mb-2 block">Dietary Preferences</label>
                      <input
                        type="text"
                        placeholder="Dietary needs"
                        value={newTraveler.dietaryPreferences}
                        onChange={(e) => handleNewTravelerChange("dietaryPreferences", e.target.value)}
                        className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-teal-700 mb-2 block">Medical Conditions</label>
                      <input
                        type="text"
                        placeholder="Medical conditions"
                        value={newTraveler.medicalConditions}
                        onChange={(e) => handleNewTravelerChange("medicalConditions", e.target.value)}
                        className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAddTraveler}
                      disabled={!newTraveler.name || !newTraveler.email}
                      className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-md transition-all ${
                        newTraveler.name && newTraveler.email
                          ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-lg"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <Save size={18} />
                      Save Traveler
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCancel}
                      className="bg-gray-100 text-gray-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-200 transition-all"
                    >
                      <X size={18} />
                      Cancel
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Travelers Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {travelers.map((traveler, index) => (
                  <motion.div
                    key={traveler.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white to-teal-50 rounded-2xl p-6 shadow-md border border-teal-100 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Header with Avatar and Actions */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`${getAvatarColor(traveler.name)} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm`}>
                          {traveler.avatar}
                        </div>
                        <div>
                          {editingId === traveler.id ? (
                            <input
                              type="text"
                              value={traveler.name}
                              onChange={(e) => handleInputChange(traveler.id, "name", e.target.value)}
                              className="text-lg font-bold text-teal-800 bg-transparent border-b border-teal-300 focus:outline-none focus:border-teal-500"
                            />
                          ) : (
                            <h3 className="text-lg font-bold text-teal-800">{traveler.name}</h3>
                          )}
                          <p className="text-teal-600 text-sm">{traveler.email}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {editingId === traveler.id ? (
                          <>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleSave(traveler.id)}
                              className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-colors"
                            >
                              <Save size={16} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={handleCancel}
                              className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              <X size={16} />
                            </motion.button>
                          </>
                        ) : (
                          <>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleEdit(traveler.id)}
                              className="p-2 text-teal-500 hover:bg-teal-50 rounded-lg transition-colors"
                            >
                              <Edit2 size={16} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDelete(traveler.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </motion.button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone size={16} className="text-teal-500" />
                        {editingId === traveler.id ? (
                          <input
                            type="tel"
                            value={traveler.phone}
                            onChange={(e) => handleInputChange(traveler.id, "phone", e.target.value)}
                            className="flex-1 bg-transparent border-b border-teal-300 focus:outline-none focus:border-teal-500 text-teal-700"
                          />
                        ) : (
                          <span className="text-teal-700">{traveler.phone}</span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <Heart size={16} className="text-pink-500" />
                        {editingId === traveler.id ? (
                          <input
                            type="tel"
                            value={traveler.emergencyContact}
                            onChange={(e) => handleInputChange(traveler.id, "emergencyContact", e.target.value)}
                            className="flex-1 bg-transparent border-b border-teal-300 focus:outline-none focus:border-teal-500 text-teal-700"
                          />
                        ) : (
                          <span className="text-teal-700">{traveler.emergencyContact}</span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <Utensils size={16} className="text-green-500" />
                        {editingId === traveler.id ? (
                          <input
                            type="text"
                            value={traveler.dietaryPreferences}
                            onChange={(e) => handleInputChange(traveler.id, "dietaryPreferences", e.target.value)}
                            className="flex-1 bg-transparent border-b border-teal-300 focus:outline-none focus:border-teal-500 text-teal-700"
                          />
                        ) : (
                          <span className="text-teal-700">{traveler.dietaryPreferences}</span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <Stethoscope size={16} className="text-red-500" />
                        {editingId === traveler.id ? (
                          <input
                            type="text"
                            value={traveler.medicalConditions}
                            onChange={(e) => handleInputChange(traveler.id, "medicalConditions", e.target.value)}
                            className="flex-1 bg-transparent border-b border-teal-300 focus:outline-none focus:border-teal-500 text-teal-700"
                          />
                        ) : (
                          <span className="text-teal-700">{traveler.medicalConditions}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {travelers.length === 0 && !isAdding && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="bg-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-2">No travelers yet</h3>
                <p className="text-teal-600 mb-6">Add your first travel companion to get started</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsAdding(true)}
                  className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto shadow-md hover:shadow-lg transition-all"
                >
                  <Plus size={20} />
                  Add Your First Traveler
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}