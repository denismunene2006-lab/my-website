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
    // `absolute` bypasses the root layout's `%s | D-LABS` title template.
    // Every page supplies a complete, already-branded title, so letting the
    // template run too produced a duplicated "| D-LABS | D-LABS" suffix on
    // every page except the home page. This also keeps <title> consistent
    // with the Open Graph title, which already used the raw string.
    title: { absolute: title },
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
