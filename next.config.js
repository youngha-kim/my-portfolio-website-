/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig;
module.exports = {
  images: {
    disableStaticImages: true,
  }
}

  
const withImages = require('next-images');
module.exports = withImages();

module.exports = {

  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}