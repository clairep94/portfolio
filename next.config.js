/** @type {import('next').NextConfig} */

// Adds ability to get remote images
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'media.licdn.com',
        },
        ],
        },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
