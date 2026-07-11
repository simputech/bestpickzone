/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/wfh/bestpickzone-fully-jarvis-vs-uplift-v2.html',
        destination: '/wfh/fully-jarvis-vs-uplift-v2-standing-desk',
        permanent: true,
      },
      {
        source: '/books/bestpickzone-lotr-vs-harry-potter.html',
        destination: '/books/lord-of-the-rings-vs-harry-potter',
        permanent: true,
      },
      {
        source: '/home-kitchen/bestpickzone-avocado-slicer-comparison.html',
        destination: '/home-kitchen/oxo-vs-fullstar-avocado-slicer',
        permanent: true,
      },
      {
        source: '/home-kitchen/bestpickzone-coffee-maker-comparison.html',
        destination: '/home-kitchen/best-coffee-makers-under-100',
        permanent: true,
      },
      {
        source: '/books/bestpickzone-agatha-christie-vs-arthur-conan-doyle.html',
        destination: '/books/agatha-christie-vs-arthur-conan-doyle',
        permanent: true,
      },
      {
        source: '/books/genre-fiction/best-beach-reads',
        destination: '/books/best-beach-reads',
        permanent: true,
      },
      {
        source: '/wfh/bestpickzone-autonomous-ergchair-vs-hinomi-h1-pro.html',
        destination: '/wfh/autonomous-ergochair-pro-vs-hinomi-h1-pro',
        permanent: true,
      },
      {
        source: '/beauty/retinol-vs-bakuchiol',
        destination: '/beauty/retinol-vs-bakuchiol-for-sensitive-skin',
        permanent: true,
      },
      {
        source: '/books/bestpickzone-stephen-king-vs-dean-koontz.html',
        destination: '/books/stephen-king-vs-dean-koontz',
        permanent: true,
      },
      {
        source: '/wfh/bestpickzone-secretlab-titan-vs-ergotune-supreme.html',
        destination: '/wfh/secretlab-titan-evo-vs-ergotune-supreme',
        permanent: true,
      },
      {
        source: '/wfh/bestpickzone-purple-seat-cushion-vs-cushion-lab.html',
        destination: '/wfh/purple-royal-seat-cushion-vs-cushion-lab',
        permanent: true,
      },
      {
        source: '/home-kitchen/bestpickzone-air-fryer-comparison.html',
        destination: '/home-kitchen/best-air-fryers',
        permanent: true,
      },
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
