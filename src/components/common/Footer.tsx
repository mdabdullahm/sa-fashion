"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20">
        
        {/* উপরের অংশ: লোগো এবং মেনু */}
        <div className="flex flex-col items-center mb-16">
          <Link href="/">
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.3em] uppercase text-black font-sans mb-12">
              Sa Fashion
            </h2>
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["Home", "About Us", "Brands", "Licensing", "Careers", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="text-sm uppercase tracking-widest font-medium text-gray-500 hover:text-black transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* মাঝখানের অংশ: ইনফো এবং সোশ্যাল */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-y border-gray-100">
          
          {/* এড্রেস */}
          <div className="text-center md:text-left space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-black">Office</h4>
            <p className="text-gray-500 font-serif leading-relaxed italic">
              123 Fashion Avenue, Suite 500 <br />
              New York, NY 10001, USA
            </p>
          </div>

          {/* সোশ্যাল মিডিয়া */}
          <div className="flex flex-col items-center space-y-6">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-black">Follow Us</h4>
            <div className="flex gap-6">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="text-gray-400 hover:text-black transition-transform hover:scale-110">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* কন্টাক্ট ডিটেইলস */}
          <div className="text-center md:text-right space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-black">Inquiries</h4>
            <p className="text-gray-500 font-serif leading-relaxed italic">
              info@safashion.com <br />
              +1 (212) 555-0123
            </p>
          </div>
        </div>

        {/* নিচের অংশ: কপিরাইট এবং ব্যাক টু টপ */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-400">
            © {currentYear} Sa Fashion International. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-black"
          >
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <p className="text-[10px] uppercase tracking-widest text-gray-400">
            Designed with Integrity
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;