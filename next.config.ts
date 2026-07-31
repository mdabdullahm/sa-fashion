import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // আগেরটি
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // আপনার এরর মেসেজ অনুযায়ী এটি যোগ করুন
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
