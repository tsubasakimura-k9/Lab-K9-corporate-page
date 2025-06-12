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
  // GitHubページ用の設定
  basePath: process.env.NODE_ENV === 'production' ? '/lab-k9-corporate-page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lab-k9-corporate-page/' : '',
}

export default nextConfig
