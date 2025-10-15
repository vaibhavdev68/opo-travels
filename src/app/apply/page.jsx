"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    qualification: "",
    university: "",
    cgpa: "",
    passingYear: "",
    skills: "",
    experience: "",
    hasMasters: "No",
    mastersQualification: "",
    mastersUniversity: "",
    mastersCGPA: "",
    mastersPassingYear: "",
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const isFormValid =
    formData.fullName.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.address.trim() &&
    formData.dob.trim() &&
    formData.gender.trim() &&
    formData.qualification.trim() &&
    formData.university.trim() &&
    formData.cgpa.trim() &&
    formData.passingYear.trim() &&
    formData.resume !== null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setSubmitted(true);
      alert("✅ Form submitted successfully!");
      console.log("Submitted Data:", formData);
    } else {
      alert("⚠️ Please fill all required fields before submitting!");
    }
  };

  return (
    <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-3xl mx-auto my-30 rounded-3xl overflow-hidden shadow-2xl border border-blue-100 bg-white"
>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 px-8 text-center">
        <h2 className="text-3xl font-bold">Job Application Form</h2>
        <p className="text-blue-100 text-sm mt-1">
          Please fill all required details carefully
        </p>
      </div>

      {/* Personal Details */}
      <SectionContainer>
        <SectionTitle title="Personal Details" required />
        <div className="grid md:grid-cols-2 gap-4">
          <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <InputField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
          <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} required />
          <InputField label="Address" name="address" value={formData.address} onChange={handleChange} required />
          <SelectField
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={["Female", "Male", "Other"]}
            required
          />
        </div>
      </SectionContainer>

      {/* Experience */}
      <SectionContainer>
        <SectionTitle title="Experience" />
        <SelectField
          label="Experience (in years)"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          options={["0", "1", "2", "3", "4", "5+"]}
        />
      </SectionContainer>

      {/* Graduation Details */}
      <SectionContainer>
        <SectionTitle title="Graduation Details" required />
        <div className="grid md:grid-cols-2 gap-4">
          <InputField label="Qualification" name="qualification" value={formData.qualification} onChange={handleChange} required />
          <InputField label="University" name="university" value={formData.university} onChange={handleChange} required />
          <InputField label="CGPA" name="cgpa" value={formData.cgpa} onChange={handleChange} required />
          <InputField label="Passing Year" name="passingYear" value={formData.passingYear} onChange={handleChange} required />
        </div>
      </SectionContainer>

      {/* Master’s Education (Optional) */}
      <SectionContainer>
        <SectionTitle title="Master’s Education (Optional)" />
        <SelectField
          label="Do you have a Master's degree?"
          name="hasMasters"
          value={formData.hasMasters}
          onChange={handleChange}
          options={["No", "Yes"]}
        />
        {formData.hasMasters === "Yes" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 border border-blue-100 rounded-2xl p-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <InputField label="Qualification" name="mastersQualification" value={formData.mastersQualification} onChange={handleChange} />
              <InputField label="University" name="mastersUniversity" value={formData.mastersUniversity} onChange={handleChange} />
              <InputField label="CGPA" name="mastersCGPA" value={formData.mastersCGPA} onChange={handleChange} />
              <InputField label="Passing Year" name="mastersPassingYear" value={formData.mastersPassingYear} onChange={handleChange} />
            </div>
          </motion.div>
        )}
      </SectionContainer>

      {/* Resume Upload */}
      <SectionContainer>
        <SectionTitle title="Upload Resume" required />
        <label className="flex items-center justify-center gap-3 border-2 border-dashed border-blue-400 hover:bg-blue-50 transition-all rounded-xl p-5 cursor-pointer text-blue-700 font-medium">
          <Upload size={24} />
          <span>{formData.resume ? formData.resume.name : "Click to upload your resume"}</span>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="hidden"
            required
          />
        </label>
      </SectionContainer>

      {/* Submit Button */}
      <div className="py-8 text-center">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`px-10 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${
            isFormValid
              ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:scale-105"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Submit Application
        </button>

        {submitted && (
          <p className="text-green-600 text-center mt-4 font-medium">
            ✅ Your application has been submitted successfully!
          </p>
        )}
      </div>
    </motion.form>
  );
}

/* ---------- Reusable Components ---------- */

function SectionContainer({ children }) {
  return <div className="p-8 border-b border-blue-100 bg-white">{children}</div>;
}

function InputField({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, required = false }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function SectionTitle({ title, required = false }) {
  return (
    <h3 className="text-xl font-semibold text-blue-800 border-b border-blue-200 pb-1 mb-4">
      {title} {required && <span className="text-red-500">*</span>}
    </h3>
  );
}
