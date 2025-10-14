"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CardGrid() {
  const cards = [
    { text: "Explore Tours", svg: "/svg/svg1.svg" },
    { text: "Adventure Trips", svg: "/svg/svg2.svg" },
    { text: "Beach Holidays", svg: "/svg/svg20.svg" },
    { text: "Mountain Treks", svg: "/svg/svg4.svg" },
    { text: "City Tours", svg: "/svg/svg5.svg" },
    { text: "Cruise Trips", svg: "/svg/svg6.svg" },
    { text: "Cultural Visits", svg: "/svg/svg7.svg" },
  ];

  const firstRow = cards.slice(0, 4);
  const secondRow = cards.slice(4);

  const Card = ({ card }) => (
    <motion.div
      className="bg-white rounded-xl p-6 flex flex-col items-center justify-center
                 transition-all duration-300 ease-in-out
                 hover:shadow-xl hover:shadow-gray-400/50 hover:backdrop-blur-sm"
      whileHover={{ y: -5 }}
    >
      <motion.div className="mb-4" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
        <Image src={card.svg} alt={card.text} width={64} height={64} />
      </motion.div>
      <motion.h1 className="text-xl font-bold text-center" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
        {card.text}
      </motion.h1>
    </motion.div>
  );

  return (
    <div className="p-8 space-y-6">
      {/* First Row: 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {firstRow.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>

      {/* Second Row: 3 cards centered */}
      <div className="flex justify-center gap-6">
        {secondRow.map((card, index) => (
          <div className="w-full sm:w-auto md:w-64" key={index}>
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
