/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["https://luccid-assessment.vercel.app/"],
  },
};

module.exports = nextConfig;
