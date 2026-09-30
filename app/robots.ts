import type { MetadataRoute } from 'next';

import { siteUrl } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Build artefacts and source maps are never worth crawling.
        disallow: ['/_next/', '/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
