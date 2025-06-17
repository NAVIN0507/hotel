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
    
  images:{
    remotePatterns:[
      {hostname:'portal.brundhavangarden.com'}
    ],
    unoptimized: true, 
  }
};

export default nextConfig;
