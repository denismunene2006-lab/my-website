import type { MetadataRoute } from 'next';

import { articles } from '@/data/articles';
import { siteUrl } from '@/data/site';

const staticRoutes = ['/', '/about', '/services', '/pricing', '/projects', '/blog', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route, siteUrl).toString(),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '/' ? 1 : 0.8,
    })),
    ...articles.map((article) => ({
      url: new URL(`/blog/${article.slug}`, siteUrl).toString(),
      lastModified: new Date(article.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
