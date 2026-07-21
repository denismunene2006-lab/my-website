import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

import { JsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { site, siteUrl } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'D-LABS',
    'web development',
    'website redesign',
    'SEO',
    'Next.js',
    'React',
    'Embu',
    'Kenya',
  ],
  authors: [{ name: 'Denis Munene' }],
  creator: 'D-LABS',
  publisher: 'D-LABS',
  category: 'technology',
  verification: {
    google: 'J6eSnSaygDwFMWjK1pUJXkXhexTe5YyxoNn1iCUX5Js',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'D-LABS modern startup website preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ['/twitter-image'],
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: site.name,
      url: siteUrl,
      logo: `${siteUrl}/opengraph-image`,
      email: site.email,
      telephone: site.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Embu',
        addressCountry: 'KE',
      },
      areaServed: site.serviceArea.map((name) => ({ '@type': 'Place', name })),
      sameAs: ['https://github.com/denismunene2006-lab'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      description: site.description,
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={organizationJsonLd} />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
