"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BrandsSection = () => {
  // এখানে তোমার পার্টনার ব্র্যান্ডগুলোর নাম বা লোগো পাথ দাও
  const brands = [
    { name: "Brand One", logo: "/logos/brand1.png" },
    { name: "Brand Two", logo: "/logos/brand2.png" },
    { name: "Brand Three", logo: "/logos/brand3.png" },
    { name: "Brand Four", logo: "/logos/brand4.png" },
    { name: "Brand Five", logo: "/logos/brand5.png" },
    { name: "Brand Six", logo: "/logos/brand6.png" },
    { name: "Brand Seven", logo: "/logos/brand7.png" },
    { name: "Brand Eight", logo: "/logos/brand8.png" },
  ];

  // লুপ তৈরির জন্য ব্র্যান্ড লিস্টকে ডাবল করা হয়েছে
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="w-full bg-white py-20 md:py-32 border-t border-gray-100">
      <div className="max-w-full mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-gray-500 font-semibold mb-4 block">
              Our Partnership
            </span>
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-black leading-tight">
              Discover Our <br /> 
              <span className="font-serif italic text-gray-800">Global Brands</span>
            </h2>
          </div>
          
          <Link 
            href="/brands" 
            className="group flex items-center gap-2 text-sm uppercase tracking-widest font-bold border-b-2 border-black pb-1 hover:text-gray-500 transition-colors"
          >
            View All Brands <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:after:from-white after:to-transparent">
          
          <motion.div 
            className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
            animate={{ x: [0, -1035] }} // এটি লোগোর সংখ্যা অনুযায়ী এডজাস্ট করা যাবে
            transition={{ 
              repeat: Infinity, 
              duration: 30, // কত দ্রুত ঘুরবে তা এখান থেকে কন্ট্রোল করা যায়
              ease: "linear" 
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                {/* তোমার কাছে লোগো না থাকলে আপাতত ব্র্যান্ডের নাম সুন্দর করে দেখাবে */}
                <div className="relative w-32 h-16 md:w-44 md:h-20 flex items-center justify-center border border-gray-100 rounded-sm bg-neutral-50 hover:bg-white hover:shadow-xl transition-all">
                  <span className="text-xl md:text-2xl font-serif text-gray-400 tracking-tighter uppercase italic group-hover:text-black">
                    {brand.name}
                  </span>
                  {/* যখন লোগো ইমেজ থাকবে তখন নিচের কোডটি আনকমেন্ট করবে: */}
                  {/* <Image src={brand.logo} alt={brand.name} fill className="object-contain p-4" /> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-serif italic max-w-xl mx-auto">
            We take pride in representing world-class manufacturers who share our vision of quality and excellence.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BrandsSection;