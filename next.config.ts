import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "be-sporton.agunacourse.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
