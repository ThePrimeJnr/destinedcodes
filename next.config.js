const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'host', value: 'destinedcodes.com' }],
        destination: 'https://www.destinedcodes.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
