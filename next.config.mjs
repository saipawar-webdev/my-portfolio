// next.config.mjs
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig

// This configuration allows Next.js to optimize images from the Sanity CDN
