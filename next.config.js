/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/service-pricing.html', destination: '/pricing', permanent: true },
      { source: '/projects.html', destination: '/projects', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      {
        source: '/article-20-unshakable-rules-modern-web-development.html',
        destination: '/blog/20-unshakable-rules-modern-web-development',
        permanent: true,
      },
      {
        source: '/article-business-website-mistakes.html',
        destination: '/blog/business-website-mistakes',
        permanent: true,
      },
      {
        source: '/article-content-marketing-tech-companies.html',
        destination: '/blog/content-marketing-tech-companies',
        permanent: true,
      },
      {
        source: '/article-modern-web-development.html',
        destination: '/blog/modern-web-development',
        permanent: true,
      },
      {
        source: '/article-online-growth-strategy.html',
        destination: '/blog/online-growth-strategy',
        permanent: true,
      },
      {
        source: '/article-seo-basics-for-small-business.html',
        destination: '/blog/seo-basics-for-small-business',
        permanent: true,
      },
      {
        source: '/article-website-performance-page-speed.html',
        destination: '/blog/website-performance-page-speed',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
