import type { NextConfig } from "next";

/** Static export: serves pre-rendered HTML from `out/` (avoids empty serverless deploys on Vercel). */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
