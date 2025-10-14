"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const HoverExpand_001 = ({ images, className }) => {
  const middleIndex = Math.floor(images.length / 2);
  const [activeImage, setActiveImage] = useState(middleIndex);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      {/* Main Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full flex items-center justify-center"
      >
        <div className="flex w-full h-[500px] items-center justify-center gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl shadow-4xl"
              initial={{ width: "100px", height: "500px" }}
              animate={{
                width: activeImage === index ? "650px" : "100px",
                height: "500px",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              {/* Dark overlay */}
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                  />
                )}
              </AnimatePresence>

              {/* Text overlay */}
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                  >
                    <p className="text-left text-xs text-white/50">{image.code}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <img
                src={image.src}
                className="w-full h-[500px] object-cover"
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Rectangular Slider Indicator */}
      <div className="flex justify-center items-center mt-6 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-full ${
              activeImage === index
                ? "bg-blue-600 w-12 h-3"
                : "bg-gray-300 w-6 h-2"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skiper52 = () => {
  const images = [
    { src: "/slider/img2.jpg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/slider/img3.jpg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/slider/img4.jpg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/slider/img5.jpg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/slider/img6.jpg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/slider/img13.jpg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/slider/img10.jpg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/slider/img11.jpg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/slider/img3.jpg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/slider/img5.jpg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
  ];

  return (
    <div className="flex flex-col h-auto w-full items-center justify-center bg-white py-8">
      <HoverExpand_001 images={images} />
    </div>
  );
};

export default Skiper52;
