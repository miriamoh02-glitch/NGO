/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    webpackMemoryOptimizations: true,
    cpus: 1,
  },
  webpack: (config) => {
    config.parallelism = 1;
    return config;
  },
};

module.exports = nextConfig;
