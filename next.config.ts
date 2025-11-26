import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: '/habit',
        destination: 'https://habit-tracker-clone-c2tg.vercel.app/',
      },
      {
        source: '/habit/:path*',
        destination: 'https://habit-tracker-clone-c2tg.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
