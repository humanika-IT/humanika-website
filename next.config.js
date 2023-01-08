/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
