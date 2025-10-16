"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    graduation: { qualification: "", university: "", cgpa: "", passingYear: "" },
    masters: { qualification: "", university: "", cgpa: "", passingYear: "" },
    skills: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e, section) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      if (files[0] && files[0].size > 5 * 1024 * 1024) {
        alert("Resume file size should be less than 5MB");
        return;
      }
      setFormData({ ...formData, resume: files[0] });
    } else if (section) {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleExperienceSelect = (years) => {
    setFormData({ ...formData, experience: years });
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.skills) {
      alert("Please fill all required fields!");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email");
      return false;
    }
    const phoneRegex = /^\+?\d{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number");
      return false;
    }
    if (!formData.resume) {
      alert("Please upload your resume");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Form Data:", formData);
    alert("🎉 Application Submitted Successfully!");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-16 px-4">
      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-10 max-w-5xl w-full border border-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-2">Job Application Form</h1>
          <p className="text-gray-600 text-lg">Apply for your dream role with us!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Personal Information */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 border-l-4 border-blue-500 pl-3 mb-6">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Full Name*" name="fullName" value={formData.fullName} onChange={handleChange} />
              <Input label="Email*" name="email" type="email" value={formData.email} onChange={handleChange} />
              <Input label="Phone*" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />
              <Select label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
              <Input label="Address" name="address" value={formData.address} onChange={handleChange} />
            </div>
          </div>

          {/* Graduation Section */}
          <EducationSection title="Graduation Details" data={formData.graduation} onChange={(e) => handleChange(e, "graduation")} />

          {/* Masters Section */}
          <EducationSection title="Masters Details" data={formData.masters} onChange={(e) => handleChange(e, "masters")} />

          {/* Experience Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 border-l-4 border-blue-500 pl-3 mb-6">Experience</h2>
            <div className="flex flex-wrap gap-3">
              {[0, 1, 2, 3, 4, 5].map((year) => (
                <motion.button
                  key={year}
                  type="button"
                  onClick={() => handleExperienceSelect(year)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    formData.experience === year ? "bg-blue-600 text-white shadow-lg" : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  }`}
                >
                  {year} {year === 1 ? "Year" : "Years"}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 border-l-4 border-blue-500 pl-3 mb-6">Key Skills*</h2>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="List your skills (e.g. React, Python, Communication)"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Resume Upload */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 border-l-4 border-blue-500 pl-3 mb-6">Upload Resume*</h2>
            <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center bg-blue-50 hover:bg-blue-100 transition">
              <label className="block text-gray-700 font-medium mb-3">
                Upload your updated resume (PDF or DOCX)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 
                           file:rounded-full file:border-0 
                           file:text-sm file:font-semibold 
                           file:bg-blue-600 file:text-white 
                           hover:file:bg-blue-700 cursor-pointer"
              />
              {formData.resume && (
                <p className="mt-3 text-green-600 font-medium">✅ Uploaded: {formData.resume.name}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Submit Application
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */
const Input = ({ label, name, type = "text", value, onChange }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
);

const Select = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const EducationSection = ({ title, data, onChange }) => (
  <div>
    <h2 className="text-2xl font-semibold text-blue-600 border-l-4 border-blue-500 pl-3 mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input label="Qualification" name="qualification" value={data.qualification} onChange={onChange} />
      <Input label="University / College" name="university" value={data.university} onChange={onChange} />
      <Input label="CGPA / Percentage" name="cgpa" value={data.cgpa} onChange={onChange} />
      <Input label="Passing Year" name="passingYear" type="number" value={data.passingYear} onChange={onChange} />
    </div>
  </div>
);