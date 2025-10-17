"use client";

const HeaderBanner = () => {
  return (
    <div className="bg-gradient-to-r mt-12 from-teal-500 to-teal-600 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between text-white p-8 md:p-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Join Us & Be a Part of <br /> OPO Travels
          </h1>
          <p className="text-lg text-teal-100 mt-4 font-medium">
            Build your career with India's leading travel platform
          </p>
        </div>
        <div className="relative mt-8 md:mt-0">
          <img
            src="/About-Image/office-team-2.jpg"
            alt="Team working"
            className="w-72 h-48 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -inset-2 bg-white opacity-10 rounded-2xl blur-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;