"use client";

import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="w-full bg-white py-10 md:py-20 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 w-full flex flex-col items-center">
        
        {/* ১. টপ হেডার টেক্সট */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-[13px] md:text-sm uppercase tracking-[0.2em] text-black font-medium leading-relaxed hover:bg-black hover:text-white p-8">
            Contact us for <br /> licensing <br /> opportunities
          </p>
        </motion.div>

        {/* ২. মাঝখানের কালো দাগ */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 180 }}
          viewport={{ once: true }}
          className="h-[1.5px] bg-black mb-16 -mt-10"
        ></motion.div>

        {/* ৩. সাবস্ক্রাইব টাইটেল (Serif Font) */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif text-black mb-6"
        >
          Subscribe
        </motion.h2>

        {/* ৪. ক্যাপশন টেক্সট */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 font-serif text-lg md:text-xl mb-12 text-center"
        >
          Sign up with your email address to receive news and updates.
        </motion.p>

        {/* ৫. সাবস্ক্রিপশন ফর্ম */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 w-full max-w-2xl justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* ইনপুট ফিল্ড */}
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full md:w-[350px] px-6 py-5 border border-gray-200 outline-none focus:border-black transition-colors font-serif text-gray-500 bg-transparent"
          />

          {/* সাইন আপ বাটন (ছবির মতো টেক্সট এবং আন্ডারলাইন স্টাইল) */}
          <button 
            type="submit"
            className="group relative flex flex-col items-center justify-center py-2"
          >
            <span className="text-xl md:text-2xl font-serif text-black tracking-tight mb-2 px-4 transition-opacity group-hover:opacity-70">
              Sign Up
            </span>
            <div className="w-full h-[2.5px] bg-black"></div>
          </button>
        </motion.form>

        {/* ৬. ফুটনোট */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-gray-500 font-serif text-sm italic"
        >
          We respect your privacy.
        </motion.p>

      </div>
    </section>
  );
};

export default CTA;