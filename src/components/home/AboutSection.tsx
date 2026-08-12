"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutSection = () => {
  const sliderImages = [
    "https://i.ibb.co.com/Dfq8wMZs/Models-posing-back-to-back-chair-202608010024.jpg",
    "https://i.ibb.co.com/HD39cBcn/Young-woman-posing-studio-portrait-202608010033.jpg",
    "https://i.ibb.co.com/fPPtC1Q/Male-model-wearing-t-shirt-bandana-202608010024.jpg",
    "https://i.ibb.co.com/SXxTbFNP/Models-sitting-outdoors-white-wall-202608010024.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // অটোমেটিক স্লাইড হওয়ার টাইমার
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000); // ৫ সেকেন্ড পর পর পাল্টাবে

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1,
    );
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
            About Sa Fashion BD
          </motion.h2>
          <div className="max-w-4xl space-y-8">
            {/* হাইলাইটেড প্রথম অংশ */}
            <p className="text-2xl md:text-4xl font-serif text-gray-900 leading-tight font-medium">
              <span className="font-bold border-b-2 border-black">
                SA FASHION BD
              </span>{" "}
              is a trusted textile sourcing and apparel business, serving the
              global fashion industry since <span className="italic">2015</span>
              .
            </p>

            {/* বিস্তারিত বিবরণ - ফন্ট সাইজ একটু কমিয়ে রিডাবিলিটি বাড়ানো হয়েছে */}
            <div className="space-y-6 text-lg md:text-xl text-gray-600 font-serif leading-relaxed">
              <p>
                With years of experience in textile sourcing, product
                development, and international apparel business, we specialize
                in connecting global buyers with quality products and reliable
                manufacturing solutions.
              </p>

              <p>
                Our commitment to excellence, innovation, and long-term
                partnerships allows us to deliver customized solutions that meet
                the evolving needs of today’s fashion market. As we continue to
                expand our global presence, we remain dedicated to creating
                opportunities and delivering quality-driven solutions.
              </p>

              {/* ট্যাগলাইন এবং ক্লোজিং */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-900 font-semibold italic italic">
                  Every thread tells a story — of quality, collaboration,
                  creativity, and trust.
                </p>
                <p className="mt-2 text-black font-medium">
                  We remain open to exploring new business opportunities and
                  partnerships worldwide.
                </p>
              </div>
            </div>
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
