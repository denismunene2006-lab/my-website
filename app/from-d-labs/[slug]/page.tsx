import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductPage } from '@/components/product-page';
import { getProduct, products } from '@/data/products';
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
    title: `${product.name} — D-LABS Product`,
    description: product.description,
    path: `/from-d-labs/${product.slug}`,
  });
}

export default async function ProductRoute({ params }: ProductPageRouteProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
