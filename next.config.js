const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/resume',
        destination:
          'https://docs.google.com/document/d/1o_wd6o3iiGk8k_mHdkVq2Tkfis3PaT24OpcNK9M2Ssk/export?usp=sharing&format=pdf',
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
