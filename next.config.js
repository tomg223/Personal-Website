/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out the experimental.appDir setting
  // experimental: {
  //   appDir: true,
  // },
  experimental:{
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
