/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 独自ドメイン使用時はbasePath不要
  // basePath: process.env.NODE_ENV === 'production' ? '/Lab-K9-corporate-page' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Lab-K9-corporate-page/' : '',
}

export default nextConfig
