"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CareersHero = () => {
  return (
    <section className="w-full bg-white">
      {/* ১. বড় ব্যানার সেকশন */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600" // একটি প্রফেশনাল অফিস বা ডিজাইন স্টুডিওর ছবি
            alt="Manhattan Careers"
            fill
            priority
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          {/* হালকা ওভারলে */}
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
      </div>

      {/* ২. হেডলাইন ও ক্যাপশন সেকশন */}
      <div className="max-w-full mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* হেডলাইন (বাম পাশে) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.5em] text-gray-400 font-bold mb-6 block">
                Work With Us
              </span>
              <h1 className="text-4xl md:text-7xl font-light uppercase tracking-tighter text-black leading-none">
                Shape the Future of <br />
                <span className="font-serif italic text-neutral-400">Global Fashion</span>
              </h1>
              {/* সিগনেচার কালো দাগ */}
              <div className="w-24 h-[2px] bg-black mt-10"></div>
            </motion.div>
          </div>

          {/* ক্যাপশন (ডান পাশে) */}
          <div className="lg:col-span-5 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-gray-600 font-serif italic leading-relaxed">
                We are looking for visionaries who want to redefine the garment sourcing and distribution industry through integrity and innovation.
              </p>
              <p className="text-gray-500 leading-relaxed text-lg">
                At Manhattan, we believe our greatest asset is our people. Our global network thrives on collaboration, diversity, and a shared passion for excellence in the apparel world. Join a team that values your growth as much as the brands we represent.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareersHero;