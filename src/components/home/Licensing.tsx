"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, FileCheck, Award, Globe } from "lucide-react";

const Licensing = () => {
  const certifications = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-black" />,
      title: "Authorized Distributor",
      description: "We hold exclusive licensing rights to distribute world-class brands in our operational regions, ensuring 100% authenticity.",
    },
    {
      icon: <FileCheck className="w-10 h-10 text-black" />,
      title: "Legal Compliance",
      description: "Our operations strictly adhere to international trade laws and local regulatory standards for every product category.",
    },
    {
      icon: <Globe className="w-10 h-10 text-black" />,
      title: "Intellectual Property",
      description: "We respect and protect the IP rights of our partners, ensuring all marketing and distribution follow official brand guidelines.",
    },
    {
      icon: <Award className="w-10 h-10 text-black" />,
      title: "Certified Standards",
      description: "Recognized for maintaining high-quality storage and supply chain protocols as per global industry certifications.",
    },
  ];

  // ২০টি প্রোডাক্টের লিস্ট (গ্যাজেট, ঘড়ি এবং এখন প্রিমিয়াম গার্মেন্টস সহ)
  const products = [
    { id: 1, brand: "Rolex", name: "Submariner Date", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800" },
    { id: 2, brand: "Apple", name: "iPhone 15 Pro", img: "https://i.ibb.co.com/RpNZ6p24/pexels-japy-34018284.jpg" },
    { id: 3, brand: "Garment Elite", name: "Tailored Business Suit", img: "https://images.unsplash.com/photo-1594932224828-b4b057bfe4f0?q=80&w=800" },
    { id: 4, brand: "Nike", name: "Tech Fleece Jacket", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800" },
    { id: 5, brand: "Leica", name: "M11 Camera", img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=800" },
    { id: 6, brand: "Classic Wear", name: "Oxford Cotton Shirt", img: "https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?q=80&w=800" },
    { id: 7, brand: "Bose", name: "SoundLink Revolve", img: "https://images.unsplash.com/photo-1608156639585-3400c58e0c9c?q=80&w=800" },
    { id: 8, brand: "Urban Denim", name: "Selvedge Denim Jacket", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800" },
    { id: 9, brand: "Samsung", name: "Galaxy Watch 6", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800" },
    { id: 10, brand: "Gucci", name: "Leather Belt", img: "https://images.unsplash.com/photo-1624222247344-550fb8ec5521?q=80&w=800" },
    { id: 11, brand: "Luxe Knit", name: "Cashmere Crewneck", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800" },
    { id: 12, brand: "Adidas", name: "Ultraboost Light", img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800" },
    { id: 13, brand: "Fossil", name: "Grant Chronograph", img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800" },
    { id: 14, brand: "Modern Tailor", name: "Wool Blend Overcoat", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800" },
    { id: 15, brand: "Montblanc", name: "Meisterstück Pen", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=800" },
    { id: 16, brand: "Prada", name: "Saffiano Wallet", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800" },
    { id: 17, brand: "Essential Tee", name: "Pima Cotton T-Shirt", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800" },
    { id: 18, brand: "Beats", name: "Studio Buds", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800" },
    { id: 19, brand: "Omega", name: "Speedmaster", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800" },
    { id: 20, brand: "Sport Fit", name: "Performance Hoodie", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800" },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-full mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-gray-500 font-semibold mb-4 block"
          >
            Trust & Reliability
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-black leading-tight"
          >
            Licensing & <br /> 
            <span className="font-serif italic text-gray-800">Authorization</span>
          </motion.h2>
          <div className="w-24 h-[2px] bg-black mx-auto mt-8"></div>
        </div>

        {/* Licensing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 border border-gray-100 bg-neutral-50 hover:bg-white hover:shadow-2xl transition-all duration-300 rounded-sm"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 font-serif leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Product Portfolio Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl uppercase tracking-widest font-light">Authorized Product Portfolio</h3>
            <div className="flex-grow h-[1px] bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 mb-4 shadow-sm">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold block">
                    {product.brand}
                  </span>
                  <h4 className="text-sm md:text-base font-light uppercase tracking-tight text-black">
                    {product.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-8 md:p-12 bg-black text-white text-center rounded-sm"
        >
          <h4 className="text-2xl md:text-3xl font-light font-serif italic mb-4">
            We are committed to ethical sourcing and official representation.
          </h4>
          <p className="text-gray-400 uppercase tracking-widest text-sm">
            Partner with an authorized global distributor.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Licensing;