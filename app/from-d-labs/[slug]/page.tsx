import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { JsonLd } from '@/components/json-ld';
import { ProductPage } from '@/components/product-page';
import { getProduct, getProductHref, products } from '@/data/products';
import { site, siteUrl } from '@/data/site';
import { createPageMetadata } from '@/lib/metadata';

type ProductPageRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return createPageMetadata({
      title: 'Product not found | D-LABS',
      description: 'This D-LABS product could not be found.',
      path: '/from-d-labs',
    });
  }

  return createPageMetadata({
    title: `${product.name} — M-Pesa STK Push & Payment Tracking Tool | D-LABS`,
    description: product.description,
    path: getProductHref(product),
  });
}

export default async function ProductRoute({ params }: ProductPageRouteProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const canonical = `${siteUrl}${getProductHref(product)}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': `${canonical}#software`,
      name: product.name,
      description: product.description,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      url: canonical,
      inLanguage: 'en-KE',
      featureList: product.features.map((feature) => feature.title),
      publisher: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: site.name,
        url: siteUrl,
        logo: `${siteUrl}/opengraph-image`,
      },
      creator: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: site.name,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: product.name, item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: `${product.name} — M-Pesa STK Push & Payment Tracking Tool | D-LABS`,
      description: product.description,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${canonical}#software` },
      inLanguage: 'en-KE',
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ProductPage product={product} />
    </>
  );
}
