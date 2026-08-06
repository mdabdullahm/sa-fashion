"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ProductHero = () => {
  // ২০টি ব্র্যান্ড ব্যানারের লিস্ট
  const banners = [
    { id: 1, title: "Spring Collection", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1600" },
    { id: 2, title: "Urban Streetwear", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600" },
    { id: 3, title: "Luxury Essentials", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600" },
    { id: 4, title: "Global Sourcing", img: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=1600" },
    { id: 5, title: "Sustainable Denim", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1600" },
    { id: 6, title: "Modern Tailoring", img: "https://images.unsplash.com/photo-1594932224828-b4b057bfe4f0?q=80&w=1600" },
    { id: 7, title: "Active Performance", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1600" },
    { id: 8, title: "Premium Knitwear", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1600" },
    { id: 9, title: "Corporate Attire", img: "https://images.unsplash.com/photo-1485333287047-84d167307623?q=80&w=1600" },
    { id: 10, title: "Kids Heritage", img: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=1600" },
    { id: 11, title: "Winter Elegance", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1600" },
    { id: 12, title: "Summer Breeze", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600" },
    { id: 13, title: "Executive Style", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600" },
    { id: 14, title: "Avant Garde", img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1600" },
    { id: 15, title: "Eco Conscious", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600" },
    { id: 16, title: "Athleisure Pro", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600" },
    { id: 17, title: "Haute Couture", img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1600" },
    { id: 18, title: "Vintage Soul", img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?q=80&w=1600" },
    { id: 19, title: "Global Reach", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600" },
    { id: 20, title: "Final Touch", img: "https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=1600" },
  ];

  const [index, setIndex] = useState(0);

  // ৪ সেকেন্ড পরপর অটোমেটিক স্লাইড পরিবর্তন
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* ব্যানার ইমেজ */}
          <Image
            src={banners[index].img}
            alt={banners[index].title}
            fill
            priority
            className="object-cover opacity-60"
          />

          {/* ওভারলে টেক্সট */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs md:text-sm uppercase tracking-[0.5em] text-gray-300 font-bold mb-4"
            >
              Partner Brand Showroom
            </motion.span>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-4xl md:text-8xl font-light text-white uppercase tracking-tighter leading-none"
            >
              Our <br />
              <span className="font-serif italic text-neutral-400">Products</span>
            </motion.h1>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* স্লাইডার ইন্ডিকেটর (নিচে ছোট ডট বা লাইন) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20 overflow-x-auto max-w-[80%] scrollbar-hide px-4">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[2px] transition-all duration-500 flex-shrink-0 ${
              i === index ? "w-8 bg-white" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductHero;