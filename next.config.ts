import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  images: {
    remotePatterns: [
      { hostname: "portal.brundhavangarden.com" },
    ],
    unoptimized: true,
  },

  devIndicators: false,
  experimental:{
    webpackBuildWorker:false
  },
  onDemandEntries:{
    maxInactiveAge:25*1000,
    pagesBufferLength:2
  }
};

export default nextConfig;
