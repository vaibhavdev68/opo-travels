"use client";

import { MapPin, Clock, Calendar, Star, ArrowRight, Users, Zap, Briefcase } from "lucide-react";

const JobCard = ({ job }) => {
  // Add default values to prevent undefined errors
  if (!job) {
    return null; // or a loading state
  }

  // Map job types to icons
  const getJobIcon = (type) => {
    switch (type) {
      case 'Sales':
        return <Zap className="w-5 h-5" />;
      case 'Technology':
        return <Briefcase className="w-5 h-5" />;
      case 'Business':
        return <Users className="w-5 h-5" />;
      case 'Internship':
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  return (
    <div className="group bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl shadow-lg p-6 space-y-4 transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 cursor-pointer relative overflow-hidden">
      {/* Background Gradient Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-20"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500 bg-opacity-20 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                {getJobIcon(job.type)}
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300">
                {job.title || "Job Title"}
              </h2>
            </div>
            <p className="text-purple-200 flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">{job.rating || "0.0"}</span> 
              <span>•</span> 
              <span>{(job.reviews || 0).toLocaleString()} Reviews</span>
            </p>
          </div>
          
        </div>

        {/* Job Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-purple-100 mt-6">
          <div className="flex items-center gap-3 p-2 rounded-lg group-hover:bg-purple-500 group-hover:bg-opacity-20 transition-all duration-300">
            <Clock className="w-5 h-5 text-purple-200" />
            <span className="font-medium">{job.duration || "Full-time"}</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg group-hover:bg-purple-500 group-hover:bg-opacity-20 transition-all duration-300">
            <span className="font-bold text-white">₹</span>
            <span className="font-medium">{job.salary || "Not specified"}</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg group-hover:bg-purple-500 group-hover:bg-opacity-20 transition-all duration-300">
            <MapPin className="w-5 h-5 text-purple-200" />
            <span className="font-medium">{job.location || "Remote"}</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg group-hover:bg-purple-500 group-hover:bg-opacity-20 transition-all duration-300">
            <Calendar className="w-5 h-5 text-purple-200" />
            <span className="font-medium">{job.startDate || "Immediate"}</span>
          </div>
        </div>

        {/* Tag with hover effect */}
        <div className="inline-block mt-4 px-4 py-2 bg-purple-500 bg-opacity-30 text-white rounded-full text-sm font-semibold group-hover:bg-opacity-40 transition-all duration-300 shadow-sm">
          {job.type || "Job"}
        </div>

        {/* Footer info */}
        <div className="mt-6 border-t border-purple-500 border-opacity-30 pt-4 text-purple-200 text-sm">
          <div className="flex flex-wrap gap-4">
            <span><strong className="text-white">Posted:</strong> {job.posted || "Recently"}</span>
            <span><strong className="text-white">Openings:</strong> {job.openings || 1}</span>
            <span><strong className="text-white">Applicants:</strong> {job.applicants || 0}</span>
          </div>
        </div>

        {/* Apply Now Button with enhanced hover */}
        <div className="mt-6">
          <button className="w-full px-6 py-4 rounded-2xl bg-white text-purple-600 font-bold hover:bg-purple-50 transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
            Apply Now
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;