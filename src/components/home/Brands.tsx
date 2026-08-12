"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Brands = () => {
  // ২০টি আলাদা লোগোর ডাটা
  const brandsData = [
    { id: 1, logo: "https://i.ibb.co.com/RT6XzF0x/Untitled-1-removebg-preview-1.png" },
    { id: 2, logo: "https://i.ibb.co.com/N298hnn3/oshkosh-bgosh-logo-png-seeklogo-321825.png" },
    { id: 3, logo: "https://i.ibb.co.com/JFG8f17P/Chat-GPT-Image-Aug-11-2026-09-27-34-AM.png" },
    { id: 4, logo: "https://i.ibb.co.com/PvvRmZ3q/ross-logo-png-seeklogo-119849-removebg-preview.png" },
    { id: 5, logo: "https://i.ibb.co.com/bMqCsf1x/Chat-GPT-Image-Aug-11-2026-09-54-34-AM.png" },
    { id: 6, logo: "https://i.ibb.co.com/whd0jtc0/Chat-GPT-Image-Aug-11-2026-09-57-36-AM.png" },
    { id: 7, logo: "https://i.ibb.co.com/7d6wmCh7/Chat-GPT-Image-Aug-11-2026-12-06-27-PM.png" },
    { id: 8, logo: "https://i.ibb.co.com/jkjB7NRQ/llldownload.png" },
    { id: 9, logo: "https://i.ibb.co.com/Q7smsvZ6/images-removebg-preview.png" },
    { id: 10, logo: "https://i.ibb.co.com/JRZcvGn1/images-removebg-preview.png" },
    { id: 11, logo: "https://i.ibb.co.com/hx0QwxKq/download-removebg-preview.png" },
    { id: 12, logo: "https://i.ibb.co.com/XGQD416/images-removebg-preview.png" },
    { id: 13, logo: "https://i.ibb.co.com/HfDqjQgp/download-removebg-preview.png" },
  ];

  // নিরবিচ্ছিন্ন লুপের জন্য লোগো ডাবল করা হয়েছে
  const duplicatedLogos = [...brandsData, ...brandsData];

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-full mx-auto">
        
        {/* Page Header */}
        <div className="px-4 md:px-12 lg:px-20 mb-10">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-black leading-none mb-4">
            Our <span className="font-serif italic text-neutral-400">Partners</span>
          </h1>
          <p className="max-w-xl text-sm text-gray-500 font-serif">
            Sa Fashion International works with world-renowned brands, providing a seamless bridge to the market.
          </p>
        </div>

        {/* প্রথম লাইন: বাম থেকে ডানে (গ্যাপ খুব কম) */}
        <div className="flex mb-4 relative">
          <motion.div
            className="flex space-x-6 md:space-x-8 items-center"
            animate={{ x: [0, -3000] }} 
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50, 
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((brand, index) => (
              <div key={`row1-${index}`} className="relative w-24 h-12 md:w-32 md:h-16  transition-all duration-500 flex-shrink-0">
                <Image
                  src={brand.logo}
                  alt={`brand-${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* দ্বিতীয় লাইন: ডান থেকে বামে (গ্যাপ খুব কম) */}
        <div className="flex relative">
          <motion.div
            className="flex space-x-6 md:space-x-8 items-center"
            animate={{ x: [-3000, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 55, 
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((brand, index) => (
              <div key={`row2-${index}`} className="relative w-24 h-12 md:w-32 md:h-16 transition-all duration-500 flex-shrink-0">
                <Image
                  src={brand.logo}
                  alt={`brand-alt-${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Brands;