import type { Metadata } from 'next';

import { site, siteUrl } from '@/data/site';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
  image = '/opengraph-image',
}: PageMetadataOptions): Metadata {
  const canonical = `${siteUrl}${path === '/' ? '' : path}`;
  const imageUrl = image.startsWith('http') ? image : new URL(image, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
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
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
