"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Heritage = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-full mx-auto px-4 md:px-8">
        
        {/* টেক্সট সেকশন - ভিডিওর মতো সেন্ট্রাল লেআউট */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-serif text-black leading-tight max-w-5xl"
          >
            Distributing Premium Apparel <br className="hidden md:block" /> since 2000
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg md:text-2xl text-gray-700 font-serif leading-relaxed max-w-4xl italic"
          >
            SA FASHION BD is a trusted textile sourcing and apparel business, serving the global fashion industry since 2015
          </motion.p>
        </div>

        {/* ইমেজ সেকশন - ভিডিওর মতো ওয়াইড সিনেমাটিক ইমেজ */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[350px] md:h-[700px] overflow-hidden shadow-sm"
        >
          <Image
            // ভিডিওর মতো ম্যানহাটন ব্রিজের সিনেমাটিক ছবি
            src="https://i.ibb.co.com/3ykqkTVs/perplexed-lady-model-short-blue-dress-hat-barfoot-white.jpg" 
            alt="Manhattan Distributing Heritage"
            fill
            className="object-cover  hover:grayscale-0 transition-all duration-1000 cursor-pointer"
          />
          {/* হালকা ওভারলে */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Heritage;