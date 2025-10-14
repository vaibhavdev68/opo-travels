"use client";

import RelatedJobItem from "./RelatedJobItems";

const Sidebar = () => {
  const relatedJobs = [
    {
      id: 1,
      title: "Key Account Manager - IC",
      experience: "6-11 Yrs",
      location: "Bengaluru, Delhi / NCR, Mumbai",
      posted: "7 days ago"
    },
    {
      id: 2,
      title: "Sales Team Lead",
      experience: "4-8 Yrs",
      location: "Delhi, Mumbai, Chennai",
      posted: "22 days ago"
    },
    {
      id: 3,
      title: "Web Development Lead",
      experience: "5-10 Yrs",
      location: "Remote, Bengaluru",
      posted: "15 days ago"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl shadow-lg p-6 space-y-6 mt-8 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl font-bold text-white">
        OPO Travels Roles <br /> 
        <span className="text-purple-200 text-lg font-semibold">You might be interested in</span>
      </h3>

      <div className="space-y-4">
        {relatedJobs.map((job) => (
          <RelatedJobItem key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;