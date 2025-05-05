import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript:{
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  output:"export",
    images: {
    unoptimized: true, // Important for next export
  },
};

export default nextConfig;
