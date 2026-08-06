"use client";

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

      {/* স্ক্রল ইন্ডিকেটর (অপশনাল) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;