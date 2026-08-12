"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BrandsGrid = () => {
  
  const brandsData = [
    { id: 1, name: "P.V.H-U.S.A", 
      logo: "https://i.ibb.co.com/RT6XzF0x/Untitled-1-removebg-preview-1.png" },
    { id: 2, name: "oshkosh-usa", 
      logo: "https://i.ibb.co.com/N298hnn3/oshkosh-bgosh-logo-png-seeklogo-321825.png" },
    { id: 3, name: "tcp-usa", 
      logo: "/brandlogo/tcp-usa.png" },
    { id: 4, name: "ross-usa", 
      logo: "https://i.ibb.co.com/PvvRmZ3q/ross-logo-png-seeklogo-119849-removebg-preview.png" },
    { id: 5, name: "c&a-gemmany", 
      logo: "https://i.ibb.co.com/bMqCsf1x/Chat-GPT-Image-Aug-11-2026-09-54-34-AM.png" },
    { id: 6, name: "h&m-sweden", 
      logo: "/brandlogo/h&m-sweden.png" },
    { id: 7, name: "george", 
      logo: "https://i.ibb.co.com/7d6wmCh7/Chat-GPT-Image-Aug-11-2026-12-06-27-PM.png" },
    { id: 8, name: "sainsbury-uk", 
      logo: "/brandlogo/sainsbury-uk.png" },
    { id: 9, name: "zara-spain", 
      logo: "/brandlogo/zara-spain.png" },
    { id: 10, name: "o'stin-russia", 
      logo: "/brandlogo/o'stin-russia.png" },
    { id: 11, name: "celio-france", 
      logo: "https://i.ibb.co.com/hx0QwxKq/download-removebg-preview.png" },
    { id: 12, name: "woman secret-spain", 
      logo: "https://i.ibb.co.com/XGQD416/images-removebg-preview.png" },
    { id: 13, name: "kaufland", 
      logo: "https://i.ibb.co.com/HfDqjQgp/download-removebg-preview.png" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-full mx-auto px-4 md:px-12 lg:px-20">
        
        {/* Page Header */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-light uppercase tracking-tighter text-black leading-none">
            Discover Our <br /> 
            <span className="font-serif italic text-neutral-400">Brands</span>
          </h1>
          <p className="mt-6 text-gray-600 max-w-6xl font-serif text-lg leading-relaxed">
            Sa Fashion International offers a complete solution for brands who wish to enter the North American market, with everything under one roof.
          </p>
          <div className="w-24 h-[1.5px] bg-black mt-8 mx-auto md:mx-0"></div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brandsData.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* লোগো কন্টেইনার - সেন্টারড ডিজাইন */}
              <div className="relative aspect-square md:aspect-[4/3] flex items-center justify-center bg-neutral-50 border border-gray-100 overflow-hidden transition-all duration-500 group-hover:bg-white group-hover:shadow-xl group-hover:border-transparent">
                
                {/* মাঝখানে লোগো */}
                <div className="relative w-1/2 h-1/2 transition-transform duration-500 group-hover:scale-110">
                  <Image 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    fill 
                    className="object-contain group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* ডেকোরেটিভ বর্ডার লাইন্স (হোভার করলে আসবে) */}
                <div className="absolute inset-0 border-2 border-black opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
              </div>
              
              {/* ব্র্যান্ডের নাম নিচে */}
              <div className="mt-4 text-center">
                 <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-black group-hover:text-neutral-600 transition-colors">
                    {brand.name}
                 </h3>
                 <div className="w-0 h-[1px] bg-black mx-auto mt-2 transition-all duration-500 group-hover:w-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandsGrid;