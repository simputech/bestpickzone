/** @type {import('next').NextConfig} */
const nextConfig = {
  // Normalize aliases, hostname and trailing slashes together in middleware.
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
