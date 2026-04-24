import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'otakudesu.blog',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: '*.otakudesu.blog',
        pathname: '/**',
      },
    ],
  },
  serverExternalPackages: ['bcryptjs'],
};

export default nextConfig;
