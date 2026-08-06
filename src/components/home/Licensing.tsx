"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  label: string;
  images: string[];
}

const ProductItem = ({ product, index }: { product: Product; index: number }) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const initialDelay = index * 600; 
    const cycleTime = 4000; 

    const startAnimation = setTimeout(() => {
      const timer = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % product.images.length);
      }, cycleTime);
      return () => clearInterval(timer);
    }, initialDelay);

    return () => clearTimeout(startAnimation);
  }, [index, product.images.length]);

  // এলোমেলো পজিশন তৈরির জন্য লজিক (৫টি কলামের জন্য আলাদা আলাদা অফসেট)
  const getRandomOffset = (i: number) => {
    const column = i % 5;
    const row = Math.floor(i / 5);
    
    // একেক কলামে একেক রকম মার্জিন টপ (ওপর-নিচ করার জন্য)
    const topMargins = [
      "mt-0",         // Col 1
      "mt-20 md:mt-40", // Col 2 (অনেক নিচে)
      "mt-8 md:mt-16",  // Col 3 (সামান্য নিচে)
      "mt-32 md:mt-56", // Col 4 (সবচেয়ে নিচে)
      "mt-4 md:mt-12"   // Col 5 (সামান্য নিচে)
    ];

    // একেক কলামে একেক রকম সাইড মার্জিন (ডানে-বামে একটু এলোমেলো করার জন্য)
    const sideMargins = [
      "md:ml-0",      // Col 1
      "md:ml-4",      // Col 2
      "md:mr-6",      // Col 3
      "md:ml-8",      // Col 4
      "md:mr-4"       // Col 5
    ];

    return `${topMargins[column]} ${sideMargins[column]}`;
  };

  return (
    <motion.div 
      className={`flex flex-col relative w-full mb-18 ${getRandomOffset(index)}`}
      // দোলার এনিমেশন
      animate={{ 
        y: [0, -25, 15, 0],   
        x: [0, 12, -12, 0],   
        rotate: [0, 1.5, -1.5, 0] 
      }}
      transition={{
        duration: 8 + (index % 3), // একেকটা একেক স্পিডে দুলবে
        repeat: Infinity, 
        ease: "easeInOut",
        delay: index * 0.4 
      }}
      whileHover={{ 
        y: -40, 
        scale: 1.05,
        rotate: 0,
        transition: { duration: 0.4, ease: "easeOut" } 
      }}
    >
      {/* ইমেজ কন্টেইনার */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-transparent">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={imgIndex}
            initial={{ x: "100%", opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            exit={{ x: "-100%", opacity: 0 }} 
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={product.images[imgIndex]}
              alt={product.label}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* টেক্সট সেকশন */}
      <div className="-mt-2 text-left">
        <div className="w-12 h-[1px] bg-black mb-2"></div>
        <h4 className="text-[12px] md:text-[14px] font-light uppercase tracking-[0.35em] text-black leading-relaxed">
          {product.label.split('/').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h4>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const productData = [
    { id: 1, label: "Children/Wear", images: ["https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png", "https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png"] },
    { id: 2, label: "T-Shirt", images: ["https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png", "https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png"] },
    { id: 3, label: "Sweat Shirts/Hoodies", images: ["https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png", "https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png"] },
    { id: 4, label: "Tank Top", images: ["https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png", "https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png"] },
    { id: 5, label: "Ladies Top", images: ["https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png", "https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png"] },
    { id: 6, label: "Trousers/Skirt", images: ["https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png", "https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png"] },
    { id: 7, label: "Active/Wear", images: ["https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png", "https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png"] },
    { id: 8, label: "Boxer/Innerwear", images: ["https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png", "https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png"] },
    { id: 9, label: "Casual/Pants", images: ["https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png", "https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png"] },
    { id: 10, label: "Denim/Jackets", images: ["https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png", "https://i.ibb.co.com/fd99Gx2G/hoodie2-removebg-preview.png"] },
  ];

  return (
    <section className="w-full bg-white py-22 px-6 md:px-20 overflow-hidden">
      <h1 className="text-center text-7xl -mt-20 relative z-10 uppercase">
        our products
      </h1>
      <div className="max-w-[1600px] mx-auto">
        {/* গ্রিড গ্যাপ বাড়ানো হয়েছে যাতে এলোমেলো করার জন্য জায়গা থাকে */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-16 gap-y-0">
          {productData.map((item, index) => (
            <ProductItem key={item.id} product={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;