"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const TeamWithArrow = () => {
  const fullText = "Find Your Tribe & Grow with Them";
  const splitIndex = fullText.indexOf("&") + 1;

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    setLine1("");
    setLine2("");

    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        const currentChar = fullText[i];
        if (i < splitIndex) {
          setLine1((prev) => prev + currentChar);
        } else {
          setLine2((prev) => prev + currentChar);
        }
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="px-10 py-16 bg-white">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left: Team Content */}
        <div className="flex-[0_0_100%]">
          {/* Teal Tag */}
          <div className="bg-[#079790] text-white text-xl font-semibold px-6 py-2 rounded-xl inline-block mb-6 w-[550px] h-[90px] items-center justify-center">
            <h1 className="italic text-center text-6xl py-1">Meet Our Teams</h1>
          </div>

          {/* Heading with dashed border and typewriter effect */}
          <div className="border-2 border-dashed border-[#079790] rounded-xl px-8 py-8 max-w-4xl mb-6 overflow-hidden h-[200px] flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#079790] leading-tight tracking-wide">
              {line1}
            </h2>
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#079790] leading-tight tracking-wide">
              {line2}
            </h2>
          </div>

          {/* Paragraph Section */}
          <div className="max-w-4xl text-black text-lg leading-relaxed font-normal">
            <p className="mb-4 text-[20px]">
              At our core, we are a team of innovators, problem-solvers, and creative
              minds passionate about reshaping the future of our industry. Embracing
              diversity and fostering creativity, we are driven by collaboration and
              innovation that sparks transformation.
            </p>
            <p className="text-[20px]">
              Together, let’s strive for excellence with a spirit that fuels our
              collective drive for success — because when great minds unite,
              extraordinary things happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamWithArrow;