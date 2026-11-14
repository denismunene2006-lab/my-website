import type { MetadataRoute } from 'next';

import { articles } from '@/data/articles';
import { products, getProductHref } from '@/data/products';
import { projects } from '@/data/site';
import { siteUrl } from '@/data/site';

/**
 * Priorities are tuned so the money pages (services, pricing, contact) sit
 * above the blog. `lastModified` uses actual content dates rather than "now" —
 * a sitemap that reports every URL as freshly modified on every request is
 * ignored by crawlers.
 */

type RouteEntry = {
  path: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

const staticRoutes: RouteEntry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/projects', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/from-d-labs', changeFrequency: 'monthly', priority: 0.8 },
];

/**
 * Articles carry their own `updatedAt` strings (e.g. "3 November 2026").
 * Resolve them defensively so an invalid date never leaks "Invalid Date" into the XML.
 */
function articleModifiedDate(article: (typeof articles)[number]): Date {
  const parsed = new Date(article.updatedAt);
  return Number.isNaN(parsed.getTime()) ? new Date('2026-01-01') : parsed;
}

function productModifiedDate(product: (typeof products)[number]): Date {
  // Use a recent date for products since they don't have updatedAt
  return new Date('2026-11-14');
}

function projectModifiedDate(project: (typeof projects)[number]): Date {
  // Use a recent date for projects
  return new Date('2026-11-14');
}

const latestArticleDate = articles.reduce<Date>((latest, article) => {
  const modified = articleModifiedDate(article);
  return modified > latest ? modified : latest;
}, new Date('2026-01-01'));

const latestProductDate = products.reduce<Date>((latest, product) => {
  const modified = productModifiedDate(product);
  return modified > latest ? modified : latest;
}, new Date('2026-01-01'));

const latestProjectDate = projects.reduce<Date>((latest, project) => {
  const modified = projectModifiedDate(project);
  return modified > latest ? modified : latest;
}, new Date('2026-01-01'));

export default function sitemap(): MetadataRoute.Sitemap {
  const allUrls: MetadataRoute.Sitemap = [
    // Home and /blog change whenever a new article is published.
    { url: new URL('/', siteUrl).toString(), lastModified: latestArticleDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: new URL('/blog', siteUrl).toString(), lastModified: latestArticleDate, changeFrequency: 'weekly', priority: 0.8 },
    ...staticRoutes
      .filter((route) => route.path !== '/' && route.path !== '/blog')
      .map((route) => ({
        url: new URL(route.path, siteUrl).toString(),
        lastModified: new Date('2026-09-30'),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      })),
    ...products.map((product) => ({
      url: new URL(getProductHref(product), siteUrl).toString(),
      lastModified: productModifiedDate(product),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: new URL(`/projects#${project.slug}`, siteUrl).toString(),
      lastModified: projectModifiedDate(project),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: new URL(`/blog/${article.slug}`, siteUrl).toString(),
      lastModified: articleModifiedDate(article),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // Sort by priority descending, then by lastModified descending
  return allUrls.sort((a, b) => {
    const aPriority = a.priority ?? 0;
    const bPriority = b.priority ?? 0;
    if (bPriority !== aPriority) return bPriority - aPriority;
    const aDate = a.lastModified ? new Date(a.lastModified).getTime() : 0;
    const bDate = b.lastModified ? new Date(b.lastModified).getTime() : 0;
    return bDate - aDate;
  });
}
