/** @type {import('next').NextConfig} */
const nextConfig = {
  // Normalize aliases, hostname and trailing slashes together in middleware.
  skipTrailingSlashRedirect: true,
  experimental: {
    // This dynamic route reads its editorial HTML at runtime. Keep the asset
    // in the serverless bundle as well as the local source checkout.
    outputFileTracingIncludes: {
      '/es/[[...slug]]': require('node:fs').readdirSync('./content/spanish-guides').filter(file => file.endsWith('.html')).map(file => `./content/spanish-guides/${file}`),
      '/coffee/complete-small-kitchen-home-coffee-bar-setup': ['./app/coffee/complete-small-kitchen-home-coffee-bar-setup/article-source.html'],
      '/coffee/what-to-buy-with-your-breville-bambino-plus': ['./app/coffee/what-to-buy-with-your-breville-bambino-plus/article-source.html'],
      '/coffee/best-gaggia-classic-pro-upgrades': ['./app/coffee/best-gaggia-classic-pro-upgrades/article-source.html'],
      '/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt': ['./app/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt/article-source.html'],
      '/beauty/dyson-airwrap-vs-shark-flexstyle-for-fine-flat-hair': ['./app/beauty/dyson-airwrap-vs-shark-flexstyle-for-fine-flat-hair/article-source.html'],
      '/beauty/best-led-mask-for-melasma-and-hyperpigmentation': ['./app/beauty/best-led-mask-for-melasma-and-hyperpigmentation/article-source.html'],
      '/beauty/is-omnilux-contour-worth-it': ['./app/beauty/is-omnilux-contour-worth-it/article-source.html'],

      '/wfh/purple-royal-seat-cushion-vs-cushion-lab': ['./app/wfh/purple-royal-seat-cushion-vs-cushion-lab/article-source.html'],
      '/wfh/secretlab-titan-evo-vs-ergotune-supreme': ['./app/wfh/secretlab-titan-evo-vs-ergotune-supreme/article-source.html'],
      '/wfh/fully-jarvis-vs-uplift-v2-standing-desk': ['./app/wfh/fully-jarvis-vs-uplift-v2-standing-desk/article-source.html'],
      '/wfh/ergotron-lx-vs-amazon-basics-monitor-arm': ['./app/wfh/ergotron-lx-vs-amazon-basics-monitor-arm/article-source.html'],
      '/wfh/autonomous-ergochair-pro-vs-hinomi-h1-pro': ['./app/wfh/autonomous-ergochair-pro-vs-hinomi-h1-pro/article-source.html'],
      '/home-kitchen/oxo-vs-fullstar-avocado-slicer': ['./app/home-kitchen/oxo-vs-fullstar-avocado-slicer/article-source.html'],
      '/home-kitchen/best-coffee-makers-under-100': ['./app/home-kitchen/best-coffee-makers-under-100/article-source.html'],
      '/home-kitchen/best-robot-vacuums': ['./app/home-kitchen/best-robot-vacuums/article-source.html'],
      '/home-kitchen/instant-pot-vs-ninja-foodi': ['./app/home-kitchen/instant-pot-vs-ninja-foodi/article-source.html'],

      '/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide': ['./app/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide/article-source.html'],
      '/books/agatha-christie-vs-arthur-conan-doyle': ['./app/books/agatha-christie-vs-arthur-conan-doyle/article-source.html'],
      '/books/best-mark-manson-books': ['./app/books/best-mark-manson-books/article-source.html'],
      '/books/genre-fiction/best-historical-epics-2026': ['./app/books/genre-fiction/best-historical-epics-2026/article-source.html'],
      '/books/genre-fiction/best-historical-fiction-books': ['./app/books/genre-fiction/best-historical-fiction-books/article-source.html'],
      '/books/genre-fiction/best-historical-fiction-series-2026': ['./app/books/genre-fiction/best-historical-fiction-series-2026/article-source.html'],
      '/books/genre-fiction/best-new-spy-thriller-books-2026': ['./app/books/genre-fiction/best-new-spy-thriller-books-2026/article-source.html'],
      '/books/hemingway-vs-fitzgerald': ['./app/books/hemingway-vs-fitzgerald/article-source.html'],
      '/books/lord-of-the-rings-vs-harry-potter': ['./app/books/lord-of-the-rings-vs-harry-potter/article-source.html'],
      '/books/reader-picks/best-true-crime-books': ['./app/books/reader-picks/best-true-crime-books/article-source.html'],
      '/books/self-help/best-james-clear-books': ['./app/books/self-help/best-james-clear-books/article-source.html'],
      '/books/stephen-king-vs-dean-koontz': ['./app/books/stephen-king-vs-dean-koontz/article-source.html'],
      '/home-kitchen/best-air-fryers': ['./app/home-kitchen/best-air-fryers/article-source.html'],
      '/beauty/dr-dennis-gross-vs-omnilux-contour': [
        './app/beauty/dr-dennis-gross-vs-omnilux-contour/article-source.html',
      ],
    },
  },
};

module.exports = nextConfig;
