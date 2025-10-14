"use client";

import { useState } from "react";

import Sidebar from "../components/MyAccount/Sidebar";
import ContentArea from "../components/MyAccount/ContentArea";

export default function MyAccount() {
  const user = {
    name: "Riya ",
    phone: "6965685096",
    email: "",
    myCash: 0,
    profileCompletion: 45,
    dob: "1/1/1900",
    gender: "",
    nationality: "",
    maritalStatus: "",
    anniversary: "",
    city: "",
    state: "Uttar Pradesh",
  };

  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col mt-20 mb-3">
     
      
      <div className="flex flex-1 max-w-7xl mx-auto w-full mt-6 space-y-6 md:space-y-0 md:space-x-6 px-4 flex-col md:flex-row">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <ContentArea activeTab={activeTab} user={user} />
      </div>
    </div>
  );
}