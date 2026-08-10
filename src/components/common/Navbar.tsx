"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Brands", href: "/brands" },
    { name: "products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white pb-2 md:pb-4 z-[100] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* লোগো এবং মোবাইল মেনু বাটন সেকশন */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full md:justify-center relative">
            
            {/* মোবাইল মেনু টগল বাটন */}
            <button 
              className="md:hidden p-2 text-black hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* লোগো সেকশন - তোমার দেওয়া পজিশন অনুযায়ী */}
            <Link href="/" className="flex items-center gap-3 md:gap-5 group">
              <div className="relative w-20 h-20 md:w-44 md:h-44 transition-transform group-hover:scale-105 translate-x-8 translate-y-0.3 md:translate-y-1 md:translate-x-14">
                <Image
                  src="/logo.png" 
                  alt="Manhattan Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-2xl md:text-6xl font-light tracking-[0.2em] md:tracking-[0.4em] uppercase text-black font-sans">
                fashion
              </h1>
            </Link>

            {/*  design balance jonno khalil space*/}
            <div className="w-10 md:hidden"></div>
          </div>

          {/* ২. animation border section (Framer Motion) */}
          <div className="w-full h-[1.5px] md:h-[2px] bg-gray-200 -mt-4 md:mt-[-40px] relative overflow-hidden mb-2 md:mb-8">
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{
                background: "linear-gradient(90deg, #000000 0%, #3b82f6 50%, #000000 100%)",
              }}
              animate={{
                x: ["-100%", "100%"], 
              }}
              transition={{
                duration: 3,        
                repeat: Infinity,   
                ease: "linear",     
              }}
            />
          </div>
        </div>

        {/* ৩. dextope menu (Links ) */}
        <ul className="hidden md:flex flex-wrap justify-center gap-x-12 -mt-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-lg font-serif transition-all duration-300 hover:text-gray-400 relative py-1 ${
                    isActive ? "text-black" : "text-gray-600"
                  }`}
                >
                  {link.name}
                  {/* active link ar necy dag */}
                  {isActive && (
                    <motion.span 
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                    ></motion.span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ৪.  mobile menu dropdown*/}
        <div className={`
          md:hidden absolute top-full left-0 pb-4 w-full bg-white shadow-xl transition-all duration-300 ease-in-out border-b
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}
        `}>
          <ul className="flex flex-col items-center py-0.5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-serif block w-full py-2 transition-colors ${
                    pathname === link.href ? "font-bold text-black border-l-4 border-black" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;