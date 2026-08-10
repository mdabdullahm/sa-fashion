"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProductionFacilities = () => {
  // Aukotex ইন্সপিরেশনে ৮টি প্রোডাকশন ফ্যাসিলিটি
  const facilities = [
    { title: "Knitting", img: "https://images.pexels.com/photos/5943890/pexels-photo-5943890.jpeg" },
    { title: "Dyeing", img: "https://images.pexels.com/photos/4505452/pexels-photo-4505452.jpeg" },
    { title: "Cutting", img: "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg" },
    { title: "Printing", img: "https://images.pexels.com/photos/3854816/pexels-photo-3854816.jpeg" },
    { title: "Embroidery", img: "https://images.pexels.com/photos/5691866/pexels-photo-5691866.jpeg" },
    { title: "Sewing", img: "https://images.pexels.com/photos/4614233/pexels-photo-4614233.jpeg" },
    { title: "Washing", img: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg" },
    { title: "Finishing", img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg" },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="max-w-full mx-auto px-4 md:px-12 lg:px-20">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-gray-400 font-bold mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-black leading-tight"
          >
            Integrated <br /> 
            <span className="font-serif italic text-neutral-400">Production Facilities</span>
          </motion.h2>
          <div className="w-24 h-[1.5px] bg-black mx-auto mt-8"></div>
        </div>

        {/* ফ্যাসিলিটি গ্রিড - ল্যাপটপে ৪টি, মোবাইলে ২টি */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-default overflow-hidden"
            >
              {/* ইমেজ কন্টেইনার */}
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                
                {/* হোভার ওভারলে এবং টেক্সট বক্স */}
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0"></div>
                
                {/* Aukotex এর মত লেবেল ডিজাইন কিন্তু Manhattan থিমে */}
                <div className="absolute bottom-0 left-0 w-full bg-white/90 py-4 px-2 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-black mb-1">
                    {item.title}
                  </h3>
                  {/* ছোট সিগনেচার ড্যাশ */}
                  <div className="w-6 h-[1px] bg-black mx-auto"></div>
                  <p className="text-[10px] uppercase text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Read More</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductionFacilities;