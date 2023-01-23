/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeimg.com", "picsum.photos"],
    //   loader: "akamai",
    //   path: "",
  },
};

module.exports = nextConfig;
