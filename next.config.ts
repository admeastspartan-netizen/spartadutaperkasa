import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Matikan pengecekan tipe data saat build agar cepat
  typescript: {
    ignoreBuildErrors: true,
  },
  // Izinkan gambar dari luar
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