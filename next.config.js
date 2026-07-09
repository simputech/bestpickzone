/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/books/best-true-crime-books',
        destination: '/books/reader-picks/best-true-crime-books',
        permanent: true,
      },
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:rest*',
        destination: '/books',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
