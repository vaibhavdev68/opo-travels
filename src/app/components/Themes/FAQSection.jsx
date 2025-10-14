"use client";
import React, { useState } from "react";

export default function FAQEnquiry({ faqs }) {
  // FAQ State
  const [openItem, setOpenItem] = useState(null);
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  // Enquiry Form State
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.mobile) {
      alert("Please fill all fields!");
      return;
    }
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", mobile: "" });
      } else {
        alert("Failed to send enquiry!");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending enquiry!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* FAQ Section */}
        <div className="lg:w-3/5">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center lg:text-left">
            FAQs
          </h1>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-purple-300 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-purple-50 rounded-2xl transition-colors duration-300"
                  onClick={() => toggleItem(faq.id)}
                >
                  <span className="text-lg font-semibold text-purple-700">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openItem === faq.id ? "rotate-180" : ""
                    } text-purple-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openItem === faq.id && (
                  <div className="px-6 pb-4 bg-purple-50 rounded-b-2xl transition-all duration-300">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry Form Section */}
        <div className="lg:w-2/5 bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-3xl p-6">
          <h1 className="text-2xl font-bold mb-6 text-purple-700 text-center lg:text-left">
            📩 Send Enquiry
          </h1>

          {submitted && (
            <p className="mb-4 text-green-700 font-semibold text-center lg:text-left animate-pulse">
              ✅ Your enquiry has been sent successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-purple-300 bg-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-inner"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-purple-300 bg-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-inner"
              required
            />

            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-purple-300 bg-purple-100 text-purple-700 font-semibold">
                +91
              </span>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                className="flex-1 p-3 rounded-r-xl border border-purple-300 bg-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-inner"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-500 text-white font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}