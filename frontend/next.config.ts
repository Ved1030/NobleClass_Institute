import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Enable compression
  compress: true,
  // Power efficient page rendering
  experimental: {
    optimizeCss: false, // Don't use critters unless needed
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "recharts",
    ],
  },
};

export default nextConfig;
