/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    PUBLIC_URL: "/",
  },
};

module.exports = nextConfig;
