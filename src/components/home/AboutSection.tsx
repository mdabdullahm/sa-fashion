"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// কাউন্টার কম্পোনেন্ট (০ থেকে কাউন্ট করার জন্য)
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // একবার ভিউতে আসলে অ্যানিমেশন শুরু হবে
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="text-5xl font-light mb-2 block">
      {displayValue}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const sliderImages = [
    "/about-img/about-1.jpg",
    "/about-img/about-2.jpg",
    "/about-img/about-3.jpg",
    "/about-img/about-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const pillars = [
    {
      title: "Global Sourcing",
      description: "We partner with premium manufacturers across Europe, Asia, and America to source the finest products.",
    },
    {
      title: "Quality Assurance",
      description: "Every product in our catalog undergoes a rigorous multi-stage quality check to ensure international standards.",
    },
    {
      title: "Fast Distribution",
      description: "Our robust supply chain management ensures that products reach our clients safely and on schedule.",
    },
  ];

  return (
    <section className="w-full bg-neutral-50 py-20 md:py-32">
      <div className="max-w-full mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
          <div className="md:w-1/2">
            <span className="text-xs uppercase tracking-[0.4em] text-gray-500 font-semibold mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-black leading-tight">
              A Global Leader in <br /> 
              <span className="font-serif italic text-gray-800">Product Distribution</span>
            </h2>
          </div>
          
          <div className="md:w-1/2 md:pt-16">
            <p className="text-xl text-gray-600 font-serif leading-relaxed italic border-l-2 border-gray-300 pl-6">
              Manhattan was established to simplify global commerce. We bridge the gap between world-class brands and the local marketplace, ensuring authenticity and excellence in every transaction.
            </p>
          </div>
        </div>

        {/* Image Slider & Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          
          {/* Slider */}
          <div className="md:col-span-8 relative h-[350px] md:h-[550px] overflow-hidden group shadow-lg">
            {sliderImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </motion.div>
            ))}
            <div className="absolute bottom-4 left-4 flex gap-2 z-10">
              {sliderImages.map((_, i) => (
                <div key={i} className={`h-1 transition-all duration-300 ${i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
              ))}
            </div>
          </div>

          {/* পরিসংখ্যান বক্স (অ্যানিমেশন সহ) */}
          <div className="md:col-span-4 bg-black text-white p-12 flex flex-col justify-center space-y-12">
            <div>
              <Counter value={50} suffix="+" />
              <p className="uppercase tracking-widest text-sm text-gray-400">Global Brand Partners</p>
            </div>
            <div>
              <Counter value={12} suffix="+" />
              <p className="uppercase tracking-widest text-sm text-gray-400">Countries Sourced</p>
            </div>
            <div>
              <Counter value={250} suffix="k+" />
              <p className="uppercase tracking-widest text-sm text-gray-400">Products Delivered</p>
            </div>
          </div>
        </div>

        {/* Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="space-y-4 group"
            >
              <span className="text-black font-bold text-lg inline-block border-b-2 border-black mb-2">0{index + 1}.</span>
              <h4 className="text-2xl uppercase tracking-widest font-light group-hover:text-gray-600 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-gray-600 leading-relaxed font-serif text-lg">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;