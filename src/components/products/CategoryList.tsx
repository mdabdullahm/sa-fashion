"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CategoryList = () => {
  // ২০টি ব্র্যান্ডের অধীনে ৪০টি ক্যাটাগরির ডাটা
  const categories = [
    { id: 1, 
      name: "Children/Wear", 
      img: "https://i.ibb.co.com/q6dcjdB/pexels-artempodrez-6786666-removebg-preview.png" },
    { id: 2, 
      name: "T-shirt", 
      img: "https://i.ibb.co.com/W4F3bZ2w/download-1-removebg-preview.png" },
    { id: 3,  
      name: "Sweat Shirts/Hoodies", 
      img: "https://i.ibb.co.com/m5PpWQBm/sweat-shirt-capuche-d-contract-manches-longues-et-paules-tombantes-de-couleur-unie-pour-hommes.png" },
    { id: 4,  
      name: "Tank Top", 
      img: "https://i.ibb.co.com/WpF6BjPC/Black-Cami-Tank-Top-Cotton-Blend-Basic-removebg-preview.png" },
    { id: 5,  
      name: "Performance Leggings", 
      img: "https://i.ibb.co.com/rY171mB/The-Under-100-Items-on-Our-Shopping-Wish-List-removebg-preview.png" },
    { id: 6,  
      name: "Cotton Rompers", 
      img: "https://i.ibb.co.com/35sb5q2P/removebg-preview.png" },
    { id: 7, 
      name: "Trouser/Skirt", 
      img: "https://i.ibb.co.com/d4fxztR9/download-removebg-preview.png" },
    { id: 8,  
      name: "Active Wear", 
      img: "https://i.ibb.co.com/wZkwyvfp/image.png" },
    { id: 9,  
      name: "Boxer/Innerwear", 
      img: "https://i.ibb.co.com/60HSNFhC/David-Beckham-for-H-Underwear-removebg-preview.png" },
    { id: 10,  
      name: "Light Woven", 
      img: "https://i.ibb.co.com/Tx1LNwV4/The-Palazzo-Trouser-S-Stone-Marle-removebg-preview.png" },
  ];

  const fullCategories = categories;

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-full mx-auto px-4 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold mb-4 block">
            Product Categories
          </span>
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-black leading-tight">
            Explore Our <br /> 
            <span className="font-serif italic text-neutral-400">Garment Range</span>
          </h2>
          <div className="w-24 h-[1.5px] bg-black mt-8"></div>
        </div>

        {/* 40 Items Grid (5 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
          {fullCategories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-6">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Text & Signature Dash */}
              <div className="flex flex-col items-start space-y-2">
                <div className="w-6 h-[2px] bg-black"></div> {/* তোমার পছন্দের কালো দাগ */}
                <h3 className="text-sm font-bold uppercase tracking-widest text-black group-hover:text-neutral-500 transition-colors">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;