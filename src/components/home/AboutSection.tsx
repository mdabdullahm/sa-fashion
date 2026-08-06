"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  // ভিডিওর মতো বড় সিনেমাটিক ইমেজের স্লাইডার
  const sliderImages = [
    "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=2000", // Denim Fashion
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000", // Professional Apparel
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000", // Fashion Showroom
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000", // Clothing Store
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="w-full bg-white py-10 md:py-10">
      <div className="max-w-full mx-auto px-4 md:px-8">
        
        {/* ভিডিওর মতো সেন্ট্রাল হেডার সেকশন */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-black mb-12"
          >
            About Us
          </motion.h2>

          <div className="max-w-4xl space-y-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-4xl font-serif text-gray-900 leading-tight"
            >
              Sa Fashion International is an industry-leading distributor of premium apparel, 
              with a strong presence in the North American and International market since 1992.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6 text-lg md:text-xl text-gray-500 font-serif leading-relaxed max-w-3xl mx-auto"
            >
              <p>
                With over 30 years of experience in International and North American distribution, 
                our portfolio has expanded to include in-house design and product development, 
                building custom-made solutions that resonates with today’s diverse customers.
              </p>
              <p className="italic">
                Every thread tells a story of collaboration, creativity, and community. <br />
                We remain open to exploring new business opportunities.
              </p>
            </motion.div>
          </div>
        </div>

        {/* সিনেমাটিক ফুল-উইডথ ইমেজ স্লাইডার */}
        <div className="relative w-full h-[400px] md:h-[800px] overflow-hidden bg-neutral-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={sliderImages[currentIndex]}
                alt="Manhattan Heritage"
                fill
                className="object-cover transition-transform duration-[4000ms] scale-110 hover:scale-100"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* স্লাইডার কন্ট্রোল ইন্ডিকেটর */}
          <div className="absolute bottom-10 left-10 flex gap-4 z-20">
             {sliderImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-[2px] transition-all duration-500 ${i === currentIndex ? "w-12 bg-white" : "w-6 bg-white/30"}`} 
                />
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;