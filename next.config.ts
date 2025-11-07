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
  
  images: {
    remotePatterns: [
      { hostname: "portal.brundhavangarden.com" },
    ],
    unoptimized: true,
  },
  
  // Remove these - they're for dev server only:
  // devIndicators: false,
  // onDemandEntries: {...}
  // skipTrailingSlashRedirect: true,
};

export default nextConfig;