"use client";

import Image from "next/image";
import React from "react";

const Heritage = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Image Section (Left) */}
          <div className="relative h-[400px] md:h-[650px] group overflow-hidden shadow-sm">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" // Professional business/heritage image
              alt="Manhattan Global Sourcing"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            {/* Overlay border for a classic frame look */}
            <div className="absolute inset-6 border border-white/20 pointer-events-none"></div>
          </div>

          {/* Text Section (Right) */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 font-medium">
                Legacy of Trust
              </span>
              <h2 className="text-4xl md:text-6xl font-light uppercase tracking-widest text-black leading-tight">
                Our <br /> 
                <span className="font-serif italic text-gray-800">Heritage</span>
              </h2>
            </div>

            {/* Aesthetic Divider */}
            <div className="w-24 h-[1.5px] bg-black"></div>

            <div className="space-y-6 text-gray-600 font-serif text-lg md:text-xl leading-relaxed">
              <p>
                Founded on the principles of integrity and global connectivity, Manhattan has evolved into a premier bridge between world-class manufacturers and the sophisticated consumer. 
              </p>
              <p>
                We specialize in sourcing authentic, high-quality products from across the continents. Our journey is defined by a relentless pursuit of excellence, ensuring that every brand we represent meets the highest international standards.
              </p>
              <p className="hidden md:block">
                For over two decades, we have cultivated exclusive partnerships with global industry leaders, bringing a curated selection of excellence directly to your doorstep.
              </p>
            </div>

            {/* Signature Quote */}
            <div className="pt-6">
              <p className="text-2xl font-serif italic text-black border-l-4 border-black pl-6 py-2">
                Curating the world’s finest for those who value quality.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Heritage;