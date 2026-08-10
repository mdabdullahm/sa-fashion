"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CategoryList = () => {
  // ২০টি ব্র্যান্ডের অধীনে ৪০টি ক্যাটাগরির ডাটা
  const categories = [
    { id: 1, brand: "Manhattan Elite", name: "Premium Suits", img: "https://i.ibb.co.com/bgFphtST/download.jpg" },
    { id: 2, brand: "Urban Aura", name: "Slim Fit Denim", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600" },
    { id: 3, brand: "Velvet Vogue", name: "Evening Gowns", img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600" },
    { id: 4, brand: "Classic Wear", name: "Oxford Shirts", img: "https://i.ibb.co.com/mC587J3y/Fall-2025-Business-Casual-Fashion-Inspiration-for-Women.jpg" },
    { id: 5, brand: "Active Life", name: "Performance Leggings", img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=600" },
    { id: 6, brand: "Heritage Kids", name: "Cotton Rompers", img: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=600" },
    { id: 7, brand: "Winter Luxe", name: "Cashmere Sweaters", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600" },
    { id: 8, brand: "Street Style", name: "Graphic Hoodies", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600" },
    { id: 9, brand: "Luxe Linen", name: "Linen Blazers", img: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=600" },
    { id: 10, brand: "Denim District", name: "Straight Cut Jeans", img: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=600" },
    { id: 11, brand: "Silk & Satin", name: "Silk Blouses", img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=600" },
    { id: 12, brand: "Urban Aura", name: "Bomber Jackets", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600" },
    { id: 13, brand: "Modern Tailor", name: "Tuxedos", img: "https://i.ibb.co.com/m5ndnfDQ/image.jpg" },
    { id: 14, brand: "Active Life", name: "Sports Bras", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600" },
    { id: 15, brand: "Heritage Kids", name: "Pinafore Dresses", img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=600" },
    { id: 16, brand: "Luxe Apparel", name: "Wool Overcoats", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600" },
    { id: 17, brand: "Essential Tee", name: "V-Neck T-shirts", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600" },
    { id: 18, brand: "Beach Glow", name: "Swimsuits", img: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=600" },
    { id: 19, brand: "Atlanta Track", name: "Track Jackets", img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600" },
    { id: 20, brand: "Modern Basics", name: "Chino Pants", img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=600" },
    // ২০ থেকে ৪০ পর্যন্ত বাকি ডাটা এখানে একই ভাবে যোগ হবে...
  ];

  // ডাটা রিপিট করে ৪০টি পূর্ণ করা হয়েছে উদাহরণের জন্য
  const fullCategories = [...categories, ...categories];

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
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                  {item.brand}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;