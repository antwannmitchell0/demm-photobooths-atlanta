/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old URL → New canonical URL (301 permanent redirects)
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

module.exports = nextConfig
