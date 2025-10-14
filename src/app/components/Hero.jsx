"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/slider/img20.jpg"
        alt="Beautiful Landscape"
        fill
        className="object-stretch filter blur-[1px]"
        priority
      />

      {/* Animated Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-white text-5xl md:text-8xl font-bold drop-shadow-lg mb-4">
            Navigate your career with
          </h1>
          <h1 className="text-white text-5xl md:text-8xl font-bold drop-shadow-lg mb-8">
            OPO Travels
          </h1>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300"
        >
          Explore Openings
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
