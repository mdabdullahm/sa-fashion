"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ভিডিও */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ভিডিওর উপরে হালকা কালো ওভারলে (যাতে লেখা পরিষ্কার দেখা যায়) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* কন্টেন্ট সেকশন */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-light text-white uppercase tracking-[0.2em] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Curating Global Excellence
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 font-serif mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          We source the world’s finest brands and bring them closer to you. 
          Discover a collection where quality meets sophistication.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <Link 
            href="/products" 
            className="px-10 py-4 bg-white text-black text-sm md:text-base font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 border border-white"
          >
            Explore Collections
          </Link>
          
          <Link 
            href="/about" 
            className="px-10 py-4 bg-transparent text-white text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 border border-white"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* স্ক্রল ইন্ডিকেটর (অপশনাল) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;