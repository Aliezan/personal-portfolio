// @ts-check
import withPlaiceholder from '@plaiceholder/next';

/**
 * @type {import('next').NextConfig}
 */

const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**'
      },
      {
        protocol: 'https',
        hostname: "strapi.aliezan.me",
        pathname: "/uploads/**"
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    webpackMemoryOptimizations: true,
  },
  transpilePackages: ['next-mdx-remote'],
  output: 'standalone'
};

export default withPlaiceholder(config);