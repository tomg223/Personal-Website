/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true, // Disable image optimization to check if that’s causing the issue
  },
};

module.exports = nextConfig;
