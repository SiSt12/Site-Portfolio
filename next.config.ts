import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/habit',
        destination: 'https://habit-tracker-clone-upzi.vercel.app/habit',
      },
      {
        source: '/habit/:path*',
        destination: 'https://habit-tracker-clone-upzi.vercel.app/habit/:path*',
      },
    ];
  },
};

export default nextConfig;
