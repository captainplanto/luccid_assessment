/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    ...(process.env.NODE_ENV === "production" ? { PUBLIC_URL: "/" } : {}),
  },
};

module.exports = nextConfig;
