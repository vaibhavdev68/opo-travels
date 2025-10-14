import React from "react";

import Hero from "../components/Hero";

import Skiper52 from "../components/ImageSlider";
import TeamWithArrow from "../components/Boxtext";
import CardGrid from "../components/Cards";
import WhySection from "../components/lastSection";


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
