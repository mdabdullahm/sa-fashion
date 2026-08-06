"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <section className="w-full bg-white">
      {/* ইমেজ সেকশন */}
      <div className="flex justify-center items-center px-4">
        <img 
          src="https://i.ibb.co.com/jv0NGtwP/lovely-couple.jpg" 
          alt="Careers Hero img" 
          className="mx-auto mt-20 w-full max-w-6xl object-cover h-[400px] md:h-[600px]"
        />
      </div>

      {/* টেক্সট কন্টেন্ট সেকশন - ছবির মতো হুবহু লেআউট */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 py-20 md:py-32 flex flex-col items-start">
        
        {/* ১. মেইন টাইটেল (Serif Font) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-serif text-black mb-12 md:mb-16"
        >
          Join Our Team
        </motion.h1>

        {/* ২. ডেসক্রিপশন প্যারাগ্রাফ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8 max-w-5xl"
        >
          <p className="text-lg md:text-xl font-serif text-gray-800 leading-relaxed">
            We are always on the look out for talented, creative individuals to join our team. 
            If you are interested in a career with sa fashion International but don&apos;t see the 
            right fit below, forward your resume to Human Resources.
          </p>
          <p className="text-lg md:text-xl font-serif text-gray-800 leading-relaxed">
            Our dynamic environment offers the right person a fulfilling career with 
            opportunities for advancement, a supportive team environment, competitive 
            benefits and free on-site parking
          </p>
        </motion.div>

        {/* ৩. Send Your CV বাটন (ছবির মতো টেক্সট এবং আন্ডারলাইন স্টাইল) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 group cursor-pointer"
        >
          <Link href="mailto:hr@manhattan.com">
            <div className="flex flex-col items-start">
              <span className="text-xl md:text-2xl font-serif text-black mb-3 px-4">
                Send Your CV
              </span>
              {/* ছবির মতো নির্দিষ্ট উইডথের কালো দাগ */}
              <div className="w-full h-[2px] bg-black"></div>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}