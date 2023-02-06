/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    disable: false,
    //runtimeCaching,
    //fallbacks: {
    //  image: '/static/images/fallback.png'
      // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    //}
});

const nextConfig = withPWA({
    reactStrictMode: true,
    //pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
});


module.exports = nextConfig