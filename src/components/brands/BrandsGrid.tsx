"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BrandsGrid = () => {
  
  const brandsData = [
    { id: 1, name: "Urban Aura", 
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800", logo: "https://i.ibb.co.com/tT22YX39/zara-logo-png-seeklogo-155775-removebg-preview.png" },
    { id: 2, name: "Velvet Vogue", 
        img: "https://i.ibb.co.com/C3jMJg65/Women-s-Victorian-Velvet-Military-Jacket-Vintage-Gothic-Steampunk-Ruffle-Collar-Coat-Burgundy-Tail.jpg", logo: "https://i.ibb.co.com/PsHrYWsf/celio-furniture-logo-png-seeklogo-388093-removebg-preview.png" },
    { id: 3, name: "Denim District", 
        img: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800", logo: "https://i.ibb.co.com/GvsVV7cH/download-removebg-preview.png" },
    { id: 4, name: "Luxe Linen", 
        img: "https://i.ibb.co.com/9kPKbBPm/French-Inspired-Linen-Midi-Dress-Elegant-Workwear-with-High-Waist-Polo-Collar.jpg", logo: "https://i.ibb.co.com/FkNJSqfT/image-260nw-2054160158-removebg-preview.png" },
    { id: 5, name: "Satin Silk", 
        img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800", logo: "https://i.ibb.co.com/xbZ32Ct/karren-dornbirner-seilbahn-ges-m-b-h-logo-png-seeklogo-77401-removebg-preview.png" },
    { id: 6, name: "Classic Knit", 
        img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800", logo: "https://i.ibb.co.com/JRhsjSgn/montana-cans-germany-logo-png-seeklogo-94528-removebg-preview.png" },
    { id: 7, name: "Active Elite", 
        img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800", logo: "https://i.ibb.co.com/XZG5FH36/orrefors-sweden-logo-png-seeklogo-104269-removebg-preview-removebg-preview.png" },
    { id: 8, name: "Modern Tailor", 
        img: "https://i.ibb.co.com/sp4xW9Hm/Navy-Blue-Double-Breasted-Blazer-Slim-Fit-Tropical-Wool-Suit.jpg", logo: "https://i.ibb.co.com/1fCRLPMX/oshkosh-bgosh-logo-png-seeklogo-321825-removebg-preview.png" },
    { id: 9, name: "Kids Heritage", 
        img: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=800", logo: "https://i.ibb.co.com/nMTY4x9m/ostin-logo-png-seeklogo-322871-removebg-preview.png" },
    { id: 10, name: "Winter Wool", 
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", logo: "https://i.ibb.co.com/LzdD920z/pickwick-records-ukusa-logo-png-seeklogo-386797-removebg-preview.png" },
    { id: 11, brand: "Brand Eleven", 
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800", logo: "https://i.ibb.co.com/PvvRmZ3q/ross-logo-png-seeklogo-119849-removebg-preview.png" },
    { id: 12, brand: "Brand Twelve", 
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800", logo: "https://i.ibb.co.com/hxJjBYNV/tcp-logo-png-seeklogo-443636-removebg-preview.png" },
    { id: 13, brand: "Brand Thirteen", 
        img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=800", logo: "https://i.ibb.co.com/Zp3w4rJ2/uks-logo-png-seeklogo-259633-removebg-preview.png" },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-20">
      <div className="max-w-full mx-auto px-4 md:px-12 lg:px-20">
        
        {/* Page Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-8xl font-light uppercase tracking-tighter text-black leading-none">
            Discover Our <br /> 
            <span className="font-serif italic text-neutral-400">Brands</span>
          </h1>
          <span>Sa Fashion International offers a complete solution for brands who wish to enter the North American market, with everything under one roof.</span>
          <div className="w-24 h-[1.5px] bg-black mt-8"></div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {brandsData.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* মেইন ইমেজ কন্টেইনার */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 shadow-sm">
                <Image
                  src={brand.img}
                  alt={brand.name || "brand"}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* ইমেজের কোনায় লোগো (সাদা বক্সের ভেতরে) */}
                <div className="absolute top-78 right-4 w-12 h-12 md:w-16 md:h-16 p-2 shadow-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110 z-10">
                   <div className="relative w-full h-full">
                      <Image 
                        src={brand.logo} 
                        alt="brand-logo" 
                        fill 
                        className="object-contain"
                      />
                   </div>
                </div>

                {/* হোভার ওভারলে টেক্সট */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* ব্র্যান্ডের নাম নিচে */}
              <div className="mt-4">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-black">
                    {brand.name || brand.brand}
                 </h3>
                 <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Official Licensed Partner</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandsGrid;