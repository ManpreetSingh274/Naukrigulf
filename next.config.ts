import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: process.env.NEXT_PUBLIC_PUBLIC_URL || "/ng/NGAwards/dist",
  // assetPrefix: "",
  trailingSlash: true,
  // output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts|tsx)$/] },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
