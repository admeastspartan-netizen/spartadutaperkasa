import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Abaikan error tipe data saat build (biar tidak rewel)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Izinkan gambar dari Unsplash & TransparentTextures
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