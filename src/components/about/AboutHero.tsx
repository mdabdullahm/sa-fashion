import Image from "next/image";

export default function AboutHero() {
  return (
    <div>
      <div>
        <img
          src="https://i.ibb.co.com/zHGbPcqr/Chat-GPT-Image-Aug-10-2026-10-14-39-PM.png"
          alt=""
          className="justify-center items-center mx-auto mt-20 w-6xl"
        />
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-10 mt-16">
        
        {/* মেইন হেডিং - Serif ফন্ট ব্যবহার করা হয়েছে প্রিমিয়াম লুকের জন্য */}
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-12 uppercase">
          About Us
        </h1>

        {/* ডেসক্রিপশন প্যারাগ্রাফগুলো */}
        <div className="space-y-8 text-lg md:text-xl font-serif text-gray-800 leading-relaxed">
          <p>
            SA FASHION BD is a trusted textile sourcing and apparel business, serving the global fashion industry since 2015
          </p>
          
          <p>
            With years of experience in textile sourcing, product development, and international apparel business, we specialize in connecting global buyers with quality products and reliable manufacturing solutions. Our commitment to excellence, innovation, and long-term partnerships allows us to deliver customized solutions that meet the evolving needs of today’s fashion market.
          </p>

          <p>
            As we continue to expand our global presence, **SA FASHION BD** remains dedicated to creating opportunities, building lasting partnerships, and delivering quality-driven solutions across the international fashion industry.
          </p>

          <p>
            Every thread tells a story — of quality, collaboration, creativity, and trust.
          </p>

          <p className="font-medium">
            We remain open to exploring **new business opportunities and partnerships worldwide
          </p>
        </div>
      </div>
    </div>
  );
}
