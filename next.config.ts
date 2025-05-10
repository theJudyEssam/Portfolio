import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};


module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;
