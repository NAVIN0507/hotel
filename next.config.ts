import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
<<<<<<< HEAD

=======
  trailingSlash: true,
  
>>>>>>> 436bc3f91e2eacb0ff6d7ca8f9af2c8a3f7f0f33
  images: {
    remotePatterns: [
      { hostname: "portal.brundhavangarden.com" },
    ],
    unoptimized: true,
  },
<<<<<<< HEAD

  devIndicators: false,
  experimental:{
    webpackBuildWorker:false
  },
  onDemandEntries:{
    maxInactiveAge:25*1000,
    pagesBufferLength:2
  }
=======
  
  // Remove these - they're for dev server only:
  // devIndicators: false,
  // onDemandEntries: {...}
  // skipTrailingSlashRedirect: true,
>>>>>>> 436bc3f91e2eacb0ff6d7ca8f9af2c8a3f7f0f33
};

export default nextConfig;