/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/event-planners',
        destination: '/corporate-events',
        permanent: true,
      },
      {
        source: '/birthdays',
        destination: '/celebrations',
        permanent: true,
      },
      {
        source: '/quinceaneras',
        destination: '/quinceaneras-sweet-16',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
