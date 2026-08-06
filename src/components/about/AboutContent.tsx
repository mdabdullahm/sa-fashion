"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutContent = () => {
  // ডাটা রেফারেন্স ইমেজ অনুযায়ী সাজানো হয়েছে
  const aboutCards = [
    {
      title: "Logistics",
      desc: "We have a full range of services to help fulfill your transport and logistic needs. Some of our services include: picking up primary cargo from source of supply, transporting cargo to end-user, e-commerce order fulfillment, EDI, ASN. With our on-site IT specialist, we are able to ensure compatibility with all trading partners and have the ability to adapt to customer needs.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800", // Logistics image
    },
    {
      title: "Credit",
      desc: "Our in-house credit department uses insurance to limit our risk with most customers. They possess the expertise to negotiate payment terms with those that cannot be insured.",
      img: "https://i.ibb.co.com/WNqZ5JTr/pexels-marcial-comeron-177639337-11952304.jpg", // Credit/Finance image
    },
    {
      title: "Customer Service",
      desc: "Exceptional customer follow-up, we support our customers with inventory for replenishment and stand behind our product if any quality issues arise.",
      img: "https://i.ibb.co.com/FLYMPGH8/pexels-mart-production-7709272.jpg", // Customer service image
    },
    {
      title: "Distribution",
      desc: "Ensures redistribution of goods to retailers in a timely and efficient manner, along with stocking replenishment inventory. Comprises both local and bonded facilities.",
      img: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800", // Distribution image
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* উপরের ছোট 'Contact' লেবেল */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-[13px] tracking-[0.2em] text-black font-medium mb-2 uppercase">
            Contact
          </span>
          <div className="w-40 h-[1.5px] bg-black"></div>
        </div>

        {/* মেইন হেডিং এবং ডেসক্রিপশন */}
        <div className="mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">
            Everything Under One Roof
          </h2>
          <p className="max-w-5xl text-[14px] md:text-[15px] leading-relaxed text-gray-600 font-serif">
            Manhattan International is fully set up to handle all the daily operations required for an effective fashion distribution business in Canada and the USA. With its headquarters located in Montreal, Canada&apos;s fashion capital, the following departments ensure a smooth execution of local operations:
          </p>
        </div>

        {/* ৪টি কার্ডের গ্রিড (রেফারেন্স অনুযায়ী ২ কলাম) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              {/* ইমেজ অংশ - Aspect ratio 16:10 এর মতো রাখা হয়েছে */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 mb-8">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* টেক্সট অংশ */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-gray-600 font-serif leading-relaxed text-justify">
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