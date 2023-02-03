/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  reactStrictMode: false,
  webpack: (config) => {
    return config;
  },
  swcMinify: true,
  images: {
    domains: [
      "mpf-public-data.s3.ap-south-1.amazonaws.com",
      "mpf-public-data.s3-ap-south-1.amazonaws.com",
      "images.unsplash.com"
    ],
    deviceSizes: [450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  serverRuntimeConfig: {
    mySecret: "secret",
    secondSecret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
});
