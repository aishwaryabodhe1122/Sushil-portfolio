/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'opengraph.githubassets.com', 'raw.githubusercontent.com'],
  },
}

module.exports = nextConfig