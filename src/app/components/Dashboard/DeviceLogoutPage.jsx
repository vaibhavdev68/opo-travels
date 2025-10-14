"use client";

import React, { useState, useCallback } from 'react';
import { Monitor, Phone, Laptop, MapPin, Clock, X, LogOut, CheckCircle, AlertTriangle } from 'lucide-react';

// --- Mock Data ---
const initialDevices = [
  { 
    id: 1, 
    type: 'Current Session', 
    name: 'MacBook Pro (Current)', 
    location: 'Faridabad, India', 
    ip: '103.20.10.15', 
    lastActive: 'Just now', 
    isCurrent: true 
  },
  { 
    id: 2, 
    type: 'Phone', 
    name: 'Samsung Galaxy S23 Ultra 5G', 
    location: 'Dubai, UAE', 
    ip: '154.21.30.90', 
    lastActive: '2 hours ago', 
    isCurrent: false 
  },
  { 
    id: 3, 
    type: 'Laptop', 
    name: 'HP Spectre x360', 
    location: 'London, UK', 
    ip: '87.55.12.34', 
    lastActive: 'Yesterday at 4:30 PM', 
    isCurrent: false 
  }
];

// Helper function to map device type to an icon
const getDeviceIcon = (type) => {
  switch (type) {
    case 'Phone':
      return Phone;
    case 'Laptop':
      return Laptop;
    case 'Current Session':
    case 'Desktop':
    default:
      return Monitor;
  }
};

// --- Custom Message Box Component ---
const MessageBox = ({ type, message, onConfirm, onCancel }) => {
  const isConfirm = !!onConfirm;
  
  let Icon, iconColor;
  if (type === 'success') {
    Icon = CheckCircle;
    iconColor = 'text-green-500';
  } else if (isConfirm) {
    Icon = AlertTriangle;
    iconColor = 'text-red-500';
  } else {
    Icon = AlertTriangle;
    iconColor = 'text-purple-500';
  }
  
  const title = type === 'success' ? 'Success' : (isConfirm ? 'Confirmation Required' : 'Information');

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[2000] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 mx-4 transform transition-all scale-100 opacity-100">
        <div className="flex flex-col items-center text-center">
          <Icon className={`w-10 h-10 mb-4 ${iconColor}`} />
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{message}</p>
          
          <div className="flex space-x-3 w-full">
            {isConfirm && (
              <button
                onClick={onCancel}
                className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            )}
            <button
              onClick={onConfirm || onCancel}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                isConfirm
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {isConfirm ? 'Yes, Log Out' : 'OK'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Device Card Component ---
const DeviceCard = ({ device, onLogout }) => {
  const Icon = getDeviceIcon(device.type);
  
  const cardClasses = device.isCurrent
    ? "bg-gradient-to-br from-purple-100 to-white border-purple-300 shadow-lg ring-2 ring-purple-500/20"
    : "bg-white border-purple-200 hover:shadow-md hover:border-purple-300 transition-all duration-200";

  const buttonClasses = device.isCurrent
    ? "bg-purple-600 text-white cursor-default"
    : "bg-red-500 text-white hover:bg-red-600 transition";

  return (
    <div className={`p-4 border rounded-xl flex items-center justify-between ${cardClasses} sm:p-6`}>
      <div className="flex items-start space-x-4 flex-1 min-w-0">
        <div className={`p-3 rounded-full ${device.isCurrent ? 'bg-purple-200' : 'bg-purple-100'} flex-shrink-0`}>
          <Icon className={`w-6 h-6 ${device.isCurrent ? 'text-purple-700' : 'text-purple-600'}`} />
        </div>
        
        <div className='flex flex-col min-w-0'>
          <div className="font-semibold text-gray-800 text-lg truncate">
            {device.name}
            {device.isCurrent && (
              <span className="ml-2 text-xs font-bold bg-purple-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">
                Current
              </span>
            )}
          </div>
          <div className="text-sm text-gray-600 flex items-center mt-1 flex-wrap gap-x-3 gap-y-1">
            <span className="flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-purple-500" />
              {device.location}
            </span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1 text-purple-500" />
              {device.lastActive}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono bg-purple-100 px-2 py-0.5 rounded text-purple-700">
              IP: {device.ip}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => !device.isCurrent && onLogout(device.id)}
        disabled={device.isCurrent}
        className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${buttonClasses}`}
      >
        {!device.isCurrent && <LogOut className="w-4 h-4" />}
        <span>{device.isCurrent ? 'Active' : 'Logout'}</span>
      </button>
    </div>
  );
};

// --- Main Page Component ---
const DevicesLogoutPage = () => {
  const [devices, setDevices] = useState(initialDevices);
  const [messageBox, setMessageBox] = useState(null);

  // Filter out the current session
  const otherDevices = devices.filter(d => !d.isCurrent);
  const currentDevice = devices.find(d => d.isCurrent);

  // --- Handlers ---

  const handleLogout = useCallback((deviceId) => {
    const deviceToLogout = devices.find(d => d.id === deviceId);
    if (!deviceToLogout) return;

    setMessageBox({
      type: 'confirm',
      message: `Are you sure you want to log out from "${deviceToLogout.name}"? This action cannot be undone.`,
      onConfirm: () => {
        setDevices(prev => prev.filter(d => d.id !== deviceId));
        setMessageBox({ 
          type: 'success', 
          message: `${deviceToLogout.name} has been successfully logged out.`, 
          onCancel: () => setMessageBox(null) 
        });
      },
      onCancel: () => setMessageBox(null),
    });
  }, [devices]);

  const handleLogoutAllOthers = useCallback(() => {
    if (otherDevices.length === 0) {
      setMessageBox({
        type: 'info',
        message: 'There are no other active sessions to log out.',
        onCancel: () => setMessageBox(null),
      });
      return;
    }
    
    setMessageBox({
      type: 'confirm',
      message: `You are about to log out from all ${otherDevices.length} other active sessions. Your current session will remain active. Proceed?`,
      onConfirm: () => {
        setDevices([currentDevice]);
        setMessageBox({ 
          type: 'success', 
          message: `Successfully logged out from ${otherDevices.length} device(s). Your current session remains active.`, 
          onCancel: () => setMessageBox(null) 
        });
      },
      onCancel: () => setMessageBox(null),
    });
  }, [otherDevices, currentDevice]);

  // Determine button classes for "Logout All Others"
  const logoutAllButtonClasses = otherDevices.length > 0 
    ? 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50'
    : 'bg-gray-200 text-gray-500 cursor-not-allowed';

  return (
    <div className="min-h-screen p-6 bg-white">
      <div className="bg-gradient-to-br from-purple-50 via-purple-100 to-white rounded-2xl shadow-lg p-6 border border-purple-200 space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-900 flex items-center justify-center">
            <LogOut className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-purple-600" />
            Active Sessions & Device Management
          </h1>
          <p className="mt-2 text-purple-700 text-base">
            Review and secure your account by logging out of any unfamiliar devices.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 shadow-sm">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">
            Session Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-white rounded-lg border border-purple-200 shadow-sm">
              <div className="text-2xl font-bold text-purple-900">{devices.length}</div>
              <div className="text-sm text-purple-700">Total Devices</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-white rounded-lg border border-purple-200 shadow-sm">
              <div className="text-2xl font-bold text-purple-900">1</div>
              <div className="text-sm text-purple-700">Current Session</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-white rounded-lg border border-purple-200 shadow-sm">
              <div className="text-2xl font-bold text-purple-900">{otherDevices.length}</div>
              <div className="text-sm text-purple-700">Other Sessions</div>
            </div>
          </div>
        </div>

        {/* Current Session Indicator */}
        {currentDevice && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-purple-900 mb-4">
              Your Current Session
            </h2>
            <DeviceCard device={currentDevice} onLogout={() => {}} />
          </div>
        )}

        {/* Other Sessions List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-purple-900">
              Other Active Sessions ({otherDevices.length})
            </h2>
            
            <button
              onClick={handleLogoutAllOthers}
              className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-lg font-medium transition ${logoutAllButtonClasses}`}
              disabled={otherDevices.length === 0}
            >
              <X className="w-4 h-4" />
              <span>Logout All Others</span>
            </button>
          </div>

          <div className="space-y-4">
            {otherDevices.length > 0 ? (
              otherDevices.map(device => (
                <DeviceCard 
                  key={device.id} 
                  device={device} 
                  onLogout={handleLogout} 
                />
              ))
            ) : (
              <div className="p-6 bg-gradient-to-br from-green-50 to-white text-center rounded-xl border border-green-200 text-green-700">
                <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-500" />
                <p className="font-semibold text-lg">
                  You are only logged in on your current device.
                </p>
                <p className="text-green-600 mt-1">
                  Your account is secure!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Security Tip */}
        <footer className="mt-8 pt-6 border-t border-purple-200">
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="text-sm text-amber-800 flex items-start">
              <AlertTriangle className="w-4 h-4 mt-0.5 mr-2 text-amber-500 flex-shrink-0" />
              <span>
                <strong>Security Tip:</strong> If you see any unfamiliar locations or devices, 
                use the "Logout" button immediately and consider changing your password.
              </span>
            </p>
          </div>
        </footer>
      </div>

      {/* Render Message Box if needed */}
      {messageBox && (
        <MessageBox 
          type={messageBox.type} 
          message={messageBox.message} 
          onConfirm={messageBox.onConfirm}
          onCancel={messageBox.onCancel}
        />
      )}
    </div>
  );
};

export default DevicesLogoutPage;