import React from "react";

import Hero from "../components/career/Hero";

import Skiper52 from "../components/career/ImageSlider";
import TeamWithArrow from "../components/career/Boxtext";
import CardGrid from "../components/career/Cards";
import WhySection from "../components/career/lastSection";


const page = () => {
  return (
    <>
     
      <Hero />
      <TeamWithArrow />
      <Skiper52 />
      <TeamWithArrow />
      <CardGrid />
      <WhySection />
     
    </>
  );
};
export default page;
