"use client";

import JobCard from "./JobCard";
import { Users, Zap, Briefcase } from "lucide-react";

const JobGrid = () => {
  const jobCards = [
    {
      id: 1,
      title: "HR Operations Internship",
      rating: 3.2,
      reviews: 8569,
      duration: "3 months duration",
      salary: "Unpaid",
      location: "Noida",
      startDate: "Starts within 1 month",
      type: "Internship",
      posted: "2 days ago",
      openings: 2,
      applicants: 40,
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Sales Executive",
      rating: 4.1,
      reviews: 7234,
      duration: "Full-time",
      salary: "₹25,000 - ₹35,000",
      location: "Delhi",
      startDate: "Immediate",
      type: "Sales",
      posted: "1 day ago",
      openings: 5,
      applicants: 32,
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Web Developer",
      rating: 4.3,
      reviews: 6123,
      duration: "Full-time",
      salary: "₹40,000 - ₹60,000",
      location: "Remote",
      startDate: "Within 2 weeks",
      type: "Technology",
      posted: "3 days ago",
      openings: 3,
      applicants: 28,
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Business Development Manager",
      rating: 4.0,
      reviews: 5341,
      duration: "Full-time",
      salary: "₹50,000 - ₹70,000",
      location: "Mumbai",
      startDate: "Within 1 month",
      type: "Business",
      posted: "5 days ago",
      openings: 2,
      applicants: 45,
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-10 my-10">
      {jobCards.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobGrid;