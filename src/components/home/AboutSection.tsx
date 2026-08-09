"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutSection = () => {
  const sliderImages = [
    "https://i.ibb.co.com/Cs6xzFK5/Chat-GPT-Image-Aug-9-2026-11-56-36-PM.png",
    "https://i.ibb.co.com/1BwGVn5/edoardo-cuoghi-25-QSc-KLWJKE-unsplash.jpg",
    "https://i.ibb.co.com/7tqSktd2/Chat-GPT-Image-Aug-9-2026-11-52-19-PM.png",
    "https://i.ibb.co.com/mr3DR65V/freestocks-3-Q3ts-J01nc-unsplash.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // অটোমেটিক স্লাইড হওয়ার টাইমার
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000); // ৫ সেকেন্ড পর পর পাল্টাবে

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* টেক্সট সেকশন */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-black mb-8"
          >
            About Sa Fashion International
          </motion.h2>
          <div className="max-w-4xl space-y-4">
            <p className="text-xl md:text-3xl font-serif text-gray-900 leading-tight">
              Sa Fashion International is an industry-leading distributor of premium apparel.
            </p>
          </div>
        </div>

        {/* স্লাইডার কন্টেইনার */}
        <div className="relative max-w-6xl mx-auto h-[400px] md:h-[650px] overflow-hidden bg-neutral-100 group shadow-sm border border-gray-100">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={sliderImages[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* নেভিগেশন বাটন - বাম পাশে */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/10 hover:bg-black/40 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={28} />
          </button>

          {/* নেভিগেশন বাটন - ডান পাশে */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/10 hover:bg-black/40 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={28} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;