"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          
          {/* ১. নাম সেকশন (First & Last Name) */}
          <div className="space-y-4">
            <label className="text-sm font-serif text-black block">Name</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-[12px] font-serif text-gray-500 block italic">First Name (required)</span>
                <input 
                  type="text" 
                  className="w-full bg-neutral-100 rounded-xl px-6 py-4 outline-none focus:bg-neutral-200 transition-colors border-none"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[12px] font-serif text-gray-500 block italic">Last Name (required)</span>
                <input 
                  type="text" 
                  className="w-full bg-neutral-100 rounded-xl px-6 py-4 outline-none focus:bg-neutral-200 transition-colors border-none"
                />
              </div>
            </div>
          </div>

          {/* ২. ইমেইল সেকশন */}
          <div className="space-y-2">
            <label className="text-sm font-serif text-black block">Email (required)</label>
            <input 
              type="email" 
              className="w-full bg-neutral-100 rounded-xl px-6 py-4 outline-none focus:bg-neutral-200 transition-colors border-none"
            />
          </div>

          {/* ৩. মেসেজ সেকশন */}
          <div className="space-y-2">
            <label className="text-sm font-serif text-black block">Message (required)</label>
            <textarea 
              rows={6}
              className="w-full bg-neutral-100 rounded-xl px-6 py-4 outline-none focus:bg-neutral-200 transition-colors border-none resize-y"
            ></textarea>
          </div>

          {/* ৪. সাবমিট বাটন (ছবির মতো টেক্সট এবং আন্ডারলাইন স্টাইল) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-4"
          >
            <button 
              type="submit"
              className="group flex flex-col items-start"
            >
              <span className="text-xl font-serif text-black mb-2 px-4 transition-opacity group-hover:opacity-70">
                Submit
              </span>
              {/* ছবির মতো নির্দিষ্ট লেংথের কালো দাগ */}
              <div className="w-32 h-[2px] bg-black"></div>
            </button>
          </motion.div>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;