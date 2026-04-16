import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  rewrites: async () => {
    return [
      {
        source: '/habit',
        destination: 'https://habit-tracker-clone-upzi.vercel.app',
      },
      {
        source: '/habit/:path*',
        destination: 'https://habit-tracker-clone-upzi.vercel.app/:path*',
      },
      {
        source: '/_expo/:path*',
        destination: 'https://habit-tracker-clone-upzi.vercel.app/_expo/:path*',
      },
      {
        source: '/surfhub',
        destination: 'https://intensive-breath-work.vercel.app',
      },
      {
        source: '/surfhub/:path*',
        destination: 'https://intensive-breath-work.vercel.app/:path*',
      }
    ];
  },
};

export default nextConfig;
