"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ContactMap = () => {
  // আপনার অফিসের লোকেশন (Google Maps থেকে Embed Link নিতে পারবেন)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.4993001205!2d90.25487162624671!3d23.781067240173673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1786517498735!5m2!1sen!2sbd";

  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-full mx-auto px-4 md:px-12 lg:px-24">
        
        {/* ম্যাপের টাইটেল */}
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl uppercase tracking-widest font-light flex items-center gap-3">
            <MapPin size={24} /> Locate Our Office
          </h3>
          <div className="flex-grow h-[1px] bg-gray-200"></div>
        </div>

        <div className="relative w-full h-[400px] md:h-[600px] bg-neutral-100 overflow-hidden group">
          {/* গুগল ম্যাপ - Grayscale ফিল্টার সহ */}
          <iframe
            src={mapUrl}
            className="w-full h-full grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* এড্রেস ইনফো বক্স (ভাসমান) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-10 right-10 bg-white p-8 shadow-2xl max-w-xs hidden md:block"
          >
            <h4 className="text-lg font-bold uppercase tracking-widest mb-4">Headquarters</h4>
            <p className="text-gray-600 font-serif leading-relaxed mb-6">
              Sa Fashion International <br />
              123 Avenue of the Americas <br />
              New York, NY 10020 <br />
              United States
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;