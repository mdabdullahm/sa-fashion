import Image from "next/image";

export default function AboutHero() {
  return (
    <div>
      <div>
        <img
          src="https://i.ibb.co.com/nszcd6L9/young-stylish-hipster-couple-love-walking-with-dog-countryside.jpg"
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
            Sa Fashion International is an industry-leading distributor of premium
            apparel, with a strong presence in the North American and
            International market since 1992.
          </p>
          
          <p>
            With over 30 years of experience in International and North American 
            distribution, our portfolio has expanded to include in-house design 
            and product development, building custom-made solutions that 
            resonates with today’s diverse customers.
          </p>

          <p>
            As we continue to expand our reach, Manhattan International remains 
            dedicated to crafting opportunities that inspire, innovate, drive 
            trends, and celebrate the richness of global fashion.
          </p>

          <p>
            Every thread tells a story of collaboration, creativity, and community.
          </p>

          <p className="font-medium">
            We remain open to exploring new business opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
