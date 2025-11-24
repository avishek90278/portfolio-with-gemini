import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/portfolio-with-gemini',
  reactStrictMode: false,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
