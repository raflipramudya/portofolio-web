import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // No extra environment variables needed — zero-config Vercel deploy
  images: {
    remotePatterns: [],
  },
}

export default nextConfig
