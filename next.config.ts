import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from any domain for next/image
  images: {
    remotePatterns: [],
    // Local images from /public are served directly
  },
  // Transpile Three.js and react-three-fiber for Next.js compatibility
  transpilePackages: ['three', '@react-three/fiber', '@react-three/postprocessing', 'postprocessing'],
};

export default nextConfig;
