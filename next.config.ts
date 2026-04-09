import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  rewrites: async () => {
    return [
      {
        source: '/habit',
        destination: 'https://habit-tracker-clone-upzi.vercel.app/habit',
      },
      {
        source: '/habit/:path*',
        destination: 'https://habit-tracker-clone-upzi.vercel.app/habit/:path*',
      },
      {
        source: '/surfbreath',
        destination: 'https://intensive-breath-work.vercel.app',
      },
      {
        source: '/surfbreath/:path*',
        destination: 'https://intensive-breath-work.vercel.app/:path*',
      }
    ];
  },
};

export default nextConfig;
