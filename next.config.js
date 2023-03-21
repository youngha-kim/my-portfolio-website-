/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = withImages();

module.exports = {
  images: {
    disableStaticImages: true,
  },
};

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/static",
  },
};
