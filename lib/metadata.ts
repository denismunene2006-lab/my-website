import type { Metadata } from 'next';

import { site, siteUrl } from '@/data/site';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
};

type ArticleOpenGraph = {
  type?: 'website' | 'article';
  locale?: string;
  url?: string;
  siteName?: string;
  title?: string;
  description?: string;
  images?: Array<{ url: string; width: number; height: number; alt: string }>;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
  image = '/opengraph-image',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: PageMetadataOptions): Metadata {
  const canonical = `${siteUrl}${path === '/' ? '' : path}`;
  const imageUrl = image.startsWith('http') ? image : new URL(image, siteUrl).toString();

  const openGraph: ArticleOpenGraph = {
    type,
    locale: 'en_KE',
    url: canonical,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };

  if (type === 'article') {
    openGraph.publishedTime = publishedTime;
    openGraph.modifiedTime = modifiedTime;
    openGraph.authors = author ? [author] : [site.founderName];
    openGraph.section = section;
    openGraph.tags = tags;
  }

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
    },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}
