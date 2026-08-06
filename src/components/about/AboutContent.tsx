"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutContent = () => {
  // ৪টি কার্ডের ডাটা (ইমেজ উপরে থাকবে)
  const aboutCards = [
    {
      title: "Our Mission",
      desc: "To simplify the complex global apparel supply chain through transparency, innovation, and unwavering quality standards.",
      img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800",
    },
    {
      title: "Global Reach",
      desc: "Operating as a bridge between high-capacity manufacturers in Asia and premium retailers in Europe and North America.",
      img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800",
    },
    {
      title: "Sustainability",
      desc: "Committed to responsible sourcing and ensuring all our partner factories follow fair labor practices and eco-friendly production.",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800",
    },
    {
      title: "Customer Service",
      desc: "Providing dedicated 24/7 support and ensuring seamless communication to meet the unique needs of every global client.",
      img: "https://i.ibb.co.com/FLYMPGH8/pexels-mart-production-7709272.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-full mx-auto px-4 md:px-12 lg:px-24">
        
        {/* মেইন সেকশন (Text & Large Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-gray-400 font-bold mb-4 block">
                The Manhattan Story
              </span>
              <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-black leading-tight">
                Pioneering the <br />
                <span className="font-serif italic text-neutral-500">Apparel Future</span>
              </h2>
            </div>
            <div className="w-20 h-[1.5px] bg-black"></div>
            <div className="space-y-6 text-lg md:text-xl text-gray-600 font-serif leading-relaxed italic">
              <p>Manhattan began with a simple yet ambitious vision: to redefine how the world accesses premium apparel. We don’t just source garments; we curate excellence.</p>
              <p className="not-italic text-base md:text-lg font-sans text-gray-500">In our long experience of two mills, we have negotiated close relationships with the country&apos;s best textile and garment factories. We believe that the history of yarn has a story and it is our responsibility to transform that story into the best.</p>
            </div>
          </motion.div>

          <div className="relative flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
            >
              <Image src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000" alt="Manhattan Craftsmanship" fill className="object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -left-6 md:-left-12 w-1/2 aspect-square border-8 border-white overflow-hidden shadow-2xl hidden md:block"
            >
              <Image src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600" alt="Quality Detail" fill className="object-cover" />
            </motion.div>
          </div>
        </div>

        {/* ৪টি কার্ডের ২-কলাম গ্রিড (ইমেজ উপরে থাকবে) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-20 border-t border-gray-100 pt-20">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex flex-col group cursor-default"
            >
              {/* ইমেজটি উপরে থাকবে */}
              <div className="relative w-full aspect-video overflow-hidden bg-neutral-100 mb-8">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>

              {/* টেক্সট অংশ নিচে */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold uppercase tracking-widest text-black transition-colors group-hover:text-neutral-600">
                  {card.title}
                </h3>
                <div className="w-12 h-[1px] bg-black transition-all duration-500 group-hover:w-24"></div>
                <p className="text-gray-500 font-serif leading-relaxed text-lg max-w-xl">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutContent;