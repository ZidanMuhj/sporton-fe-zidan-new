import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Peringatan: Ini akan mengizinkan build selesai meskipun ada error ESLint.
    ignoreDuringBuilds: true,
  },
  // Jika kamu juga sering mengalami masalah TypeScript saat build:
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
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
