/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pixelspring-api.onrender.com"],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
