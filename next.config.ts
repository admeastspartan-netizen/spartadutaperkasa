import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Matikan error TypeScript saat build
  typescript: {
    ignoreBuildErrors: true,
  },
  // 2. Izinkan gambar dari luar
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com',
      },
    ],
  },
};

export default nextConfig;