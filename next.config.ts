import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
