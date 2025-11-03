"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Briefcase, Baby, AppWindowMac, Stethoscope, Luggage } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhySection() {
  const benefits = [
    { icon: <Briefcase className="text-[#079790] w-8 h-8" />, label: "Employee Stocks" },
    { icon: <Heart className="text-[#079790] w-8 h-8" />, label: "Volunteer" },
    { icon: <Baby className="text-[#079790] w-8 h-8" />, label: "Parental Benefits" },
    { icon: <Stethoscope className="text-[#079790] w-8 h-8" />, label: "Medical" },
    { icon: <Briefcase className="text-[#079790] w-8 h-8" />, label: "Career Growth" },
    { icon: <Heart className="text-[#079790] w-8 h-8" />, label: "Work Culture" },
    { icon: <AppWindowMac className="text-[#079790] w-8 h-8" />, label: "Open Leave Policy" },
    { icon: <Luggage className="text-[#079790] w-8 h-8" />, label: "Paid Trips" },
  ];

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => setAnimate(true), []);

  useEffect(() => {
    if (inView) {
      setAnimate(false);
      const timer = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      ref={ref}
      className="bg-white flex flex-col items-start justify-center py-16 px-6 md:px-20 relative overflow-hidden h-[600px]"
    >
      {/* Section Tag */}
      <div className="inline-block bg-[#079790] text-white text-lg lg:text-4xl font-bold px-6 py-4 rounded-full mb-6">
        Why OPO Travels?
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12">
        Unlimited Opportunities, <br />
        <span className="text-[#079790] drop-shadow-md">Unlimited Benefits</span>
      </h2>

      {/* Benefits Slider */}
      <motion.div
        className="flex gap-10 overflow-x-auto py-2 scrollbar-hide mx-auto px-16"
        variants={containerVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      >
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 6px 18px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="min-w-[120px] h-[120px] bg-[#e6f7f7] rounded-2xl border-2 border-[#079790] flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#ccf0ef] transition-all"
          >
            {item.icon}
            <p className="text-xs font-semibold text-[#079790] mt-2">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}