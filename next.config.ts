import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [390, 430, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [256, 384, 512, 640, 750, 828, 1080, 1200, 1920],
    qualities: [90, 95],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
