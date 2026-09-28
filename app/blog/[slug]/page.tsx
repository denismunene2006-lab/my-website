import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, Tag } from 'lucide-react';

import { ArticleContent } from '@/components/article-content';
import { JsonLd } from '@/components/json-ld';
import { Reveal } from '@/components/reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { articles, getArticleBySlug } from '@/data/articles';
import { site, siteUrl } from '@/data/site';

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return createPageMetadata({
      title: 'Article not found | D-LABS',
      description: 'The requested article could not be found.',
      path: `/blog/${slug}`,
      type: 'article',
    });
  }

  return createPageMetadata({
    title: `${article.title} | D-LABS Blog`,
    description: article.description,
    path: `/blog/${article.slug}`,
    type: 'article',
    image: article.image.src,
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: new URL(article.image.src, siteUrl).toString(),
    datePublished: article.date,
    dateModified: article.updatedAt,
    author: { '@type': 'Person', name: site.founderName },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
  };

  return (
    <div className="page-section">
      <div className="container-shell">
        <Reveal>
          <Link
            href={`/blog#${article.slug}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground shadow-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to blog
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <Badge variant="accent" className="w-fit text-[10px] uppercase font-semibold">
                {article.category}
              </Badge>
              <div className="space-y-2">
                <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">{article.title}</h1>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{article.subtitle}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-primary" />
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5 text-primary" />
                  {article.readTime}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Tag className="h-3.5 w-3.5 text-primary" />
                  {article.category}
                </span>
              </div>
            </div>

            <Card className="overflow-hidden border-border/60 bg-card shadow-sm">
              <Image
                src={article.image}
                alt={article.title}
                className="h-64 sm:h-80 w-full object-cover object-center"
                priority
              />
            </Card>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <article className="space-y-8">
              <Card className="border-border/60 bg-card shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <ArticleContent blocks={article.blocks} />
                </CardContent>
              </Card>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <Card className="border-border/60 bg-card shadow-sm">
                <CardContent className="space-y-3 p-5">
                  <Badge variant="accent" className="text-[10px] uppercase">Article details</Badge>
                  <h2 className="text-base font-bold font-heading">Quick facts</h2>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p><span className="font-semibold text-foreground">Category:</span> {article.category}</p>
                    <p><span className="font-semibold text-foreground">Published:</span> {article.date}</p>
                    <p><span className="font-semibold text-foreground">Updated:</span> {article.updatedAt}</p>
                    <p><span className="font-semibold text-foreground">Read time:</span> {article.readTime}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/20 bg-card shadow-sm">
                <CardContent className="space-y-3 p-5">
                  <Badge variant="accent" className="w-fit text-[10px] uppercase">
                    Need help?
                  </Badge>
                  <h2 className="text-base font-bold font-heading">Want a site built with this standard?</h2>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    D-LABS turns these principles into fast, reliable software for your business.
                  </p>
                  <div className="flex flex-col gap-2 pt-1">
                    <Button asChild size="sm" className="rounded-lg">
                      <Link href="/contact">
                        Start a project
                        <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="rounded-lg">
                      <Link href={`/blog#${article.slug}`}>More articles</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </Reveal>
      </div>

      <JsonLd data={jsonLd} />
    </div>
  );
}
