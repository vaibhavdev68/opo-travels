import { useState } from "react";
import { Edit2 } from "lucide-react";

export default function ProfileTab({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showSaveMsg, setShowSaveMsg] = useState(false);
  const [formData, setFormData] = useState({
    gender: user.gender || "",
    nationality: user.nationality || "",
    maritalStatus: user.maritalStatus || "",
    anniversary: user.anniversary || "",
    city: user.city || "",
    email: user.email || "",
    passportNo: "",
    expiryDate: "",
    issuingCountry: "",
    panCardNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setIsEditing(false);
      setShowSaveMsg(true);
      setTimeout(() => setShowSaveMsg(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen p-6 bg-white">
      <div className="bg-gradient-to-br from-teal-50 via-teal-100 to-white rounded-2xl shadow-lg p-6 border border-teal-200">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-teal-900">My Profile</h2>

          <div className="flex items-center space-x-4">
            {isEditing && (
              <button
                onClick={handleSave}
                disabled={saving}
                className={`px-4 py-2 rounded-md text-sm font-medium text-white ${
                  saving
                    ? "bg-teal-400 cursor-not-allowed"
                    : "bg-teal-700 hover:bg-teal-800"
                }`}
              >
                {saving ? "Saving..." : "Save"}
              </button>
            )}

            <button
              onClick={() => {
                if (isEditing) setShowSaveMsg(false);
                setIsEditing(!isEditing);
              }}
              disabled={saving}
              className="flex items-center space-x-1 bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm"
            >
              <Edit2 className="w-4 h-4" />
              <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
            </button>
          </div>
        </div>

        {/* Success message */}
        {showSaveMsg && (
          <p className="text-green-600 mb-4 font-semibold">
            Details saved successfully!
          </p>
        )}

        {/* Profile Completion */}
        <div className="flex items-center justify-between bg-teal-50 border border-teal-200 rounded-md p-3 mb-6 shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-4 border-teal-400 flex items-center justify-center text-sm font-semibold text-teal-800">
              {user.profileCompletion}%
            </div>
            <div>
              <p className="text-sm font-medium text-teal-900">
                Complete your profile
              </p>
              <p className="text-xs text-teal-600">
                Share your Email ID to receive booking updates and other info.
              </p>
            </div>
          </div>
          <button className="text-teal-700 text-sm font-medium hover:underline">
            Add Email
          </button>
        </div>

        {/* General Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-teal-900 mb-4">
              General Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  label: "FIRST & MIDDLE NAME",
                  value: user.firstName || "Vaibhav",
                  readOnly: true,
                },
                {
                  label: "LAST NAME",
                  value: user.lastName || "Verma",
                  readOnly: true,
                },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-teal-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    value={field.value}
                    className="w-full border border-teal-200 rounded-md px-3 py-2 text-sm bg-teal-50"
                    readOnly
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-teal-700 mb-1">
                  GENDER
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing || saving}
                  className="w-full border border-teal-200 rounded-md px-3 py-2 text-sm disabled:bg-teal-50"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-700 mb-1">
                  DATE OF BIRTH
                </label>
                <input
                  type="text"
                  value={user.dob || ""}
                  className="w-full border border-teal-200 rounded-md px-3 py-2 text-sm bg-teal-50"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-700 mb-1">
                  NATIONALITY
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  disabled={!isEditing || saving}
                  placeholder="Select nationality"
                  className="w-full border border-teal-200 rounded-md px-3 py-2 text-sm disabled:bg-teal-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-700 mb-1">
                  MARITAL STATUS
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  disabled={!isEditing || saving}
                  className="w-full border border-teal-200 rounded-md px-3 py-2 text-sm disabled:bg-teal-50"
                >
                  <option value="">Select marital status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-700 mb-1">
                  ADDRESS
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  disabled={!isEditing || saving}
                  placeholder="Enter Address"
                  className="w-full border border-teal-200 rounded-md px-3 py-2 text-sm disabled:bg-teal-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-700 mb-1">
                  STATE
                </label>
                <input
                  type="text"
                  value={user.state || ""}
                  className="w-full border border-teal-200 rounded-md px-3 py-2 text-sm bg-teal-50"
                  readOnly
                />
              </div>
            </div>
            <p className="text-xs text-teal-600 mt-2">
              Required for GST purpose on your tax invoice
            </p>
          </div>

          {/* Email and Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-teal-700 mb-1">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing || saving}
                placeholder="Enter email"
                className="w-full border border-teal-200 rounded-md px-3 py-2 text-sm disabled:bg-teal-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-teal-700 mb-1">
                MOBILE NUMBER
              </label>
              <input
                type="text"
                value={`+91-${user.phone || ""}`}
                className="w-full border border-teal-200 rounded-md px-3 py-2 text-sm bg-teal-50"
                readOnly
              />
            </div>
          </div>

          {/* Document Section */}
          <div className="border-t border-teal-200 pt-6">
            <h3 className="text-lg font-semibold text-teal-900 mb-4">
              Documents Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { name: "passportNo", label: "PASSPORT NO.", placeholder: "Enter passport number" },
                { name: "expiryDate", label: "EXPIRY DATE", type: "date" },
                { name: "issuingCountry", label: "ISSUING COUNTRY", placeholder: "Enter issuing country" },
                { name: "panCardNumber", label: "PAN CARD NUMBER", placeholder: "Enter PAN card number" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-teal-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    disabled={!isEditing || saving}
                    placeholder={field.placeholder}
                    className="w-full border border-teal-200 rounded-md px-3 py-2 text-sm disabled:bg-teal-50"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-teal-600 mt-2">
              NOTE: Your PAN No. will only be used for international bookings as per RBI Guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}