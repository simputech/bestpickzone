/** @type {import('next').NextConfig} */
const nextConfig = {
  // Normalize aliases, hostname and trailing slashes together in middleware.
  skipTrailingSlashRedirect: true,
  experimental: {
    // This dynamic route reads its editorial HTML at runtime. Keep the asset
    // in the serverless bundle as well as the local source checkout.
    outputFileTracingIncludes: {
      '/beauty/dr-dennis-gross-vs-omnilux-contour': [
        './app/beauty/dr-dennis-gross-vs-omnilux-contour/article-source.html',
      ],
    },
  },
};

module.exports = nextConfig;
