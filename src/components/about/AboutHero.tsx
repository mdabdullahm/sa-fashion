"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="w-full bg-white pt-20 md:pt-32 pb-10 overflow-hidden">
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">

        {/* ৩. বড় সিনেমাটিক ইমেজ (ভিডিওর মতো হুবহু স্টাইল) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="relative w-full aspect-[16/8] md:aspect-[21/9] overflow-hidden bg-neutral-100 shadow-sm"
        >
          <Image
            src="https://i.ibb.co.com/nszcd6L9/young-stylish-hipster-couple-love-walking-with-dog-countryside.jpg"
            alt="Manhattan Heritage Models"
            fill
            className="object-cover transition-transform duration-[3000ms] hover:scale-105"
            priority
          />
          {/* হালকা ওভারলে */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </motion.div>

        
        {/* ১. ভিডিওর মতো মেইন টাইটেল */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-6xl md:text-7xl pt-4 font-serif text-black leading-none tracking-tight">
            About Us
          </h1>
        </motion.div>

        {/* ২. কোম্পানি ডেসক্রিপশন (ভিডিওর হুবহু টেক্সট) */}
        <div className="max-w-5xl text-center space-y-10 mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-4xl font-serif text-gray-900 leading-[1.2] tracking-tight"
          >
            Manhattan International is an industry-leading distributor of premium apparel, with a strong presence in the North American and International market since 1992.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 text-lg md:text-xl text-gray-500 font-serif leading-relaxed max-w-4xl mx-auto"
          >
            <p>
              With over 30 years of experience in International and North American distribution, our portfolio has expanded to include in-house design and product development, building custom-made solutions that resonates with today’s diverse customers.
            </p>
            <p>
              We continue to expand our reach, Manhattan International remains dedicated to crafting opportunities that inspire, innovate, drive trends, and celebrate the richness of global fashion.
            </p>
            <p className="italic pt-4 border-t border-gray-100">
              Every thread tells a story of collaboration, creativity, and community. <br />
              We remain open to exploring new business opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;