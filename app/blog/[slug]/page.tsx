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
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                {article.category}
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{article.title}</h1>
                <p className="text-lg leading-8 text-muted-foreground sm:text-xl">{article.subtitle}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {article.readTime}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  {article.category}
                </span>
              </div>
            </div>

            <Card className="overflow-hidden border-border/70 bg-card shadow-soft">
              <Image
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover object-center"
                priority
              />
            </Card>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <article className="space-y-10">
              <Card className="border-border/70 bg-card shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  <ArticleContent blocks={article.blocks} />
                </CardContent>
              </Card>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <Card className="border-border/70 bg-card shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <Badge variant="outline">Article details</Badge>
                  <h2 className="text-xl font-semibold tracking-tight">Quick facts</h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><span className="font-medium text-foreground">Category:</span> {article.category}</p>
                    <p><span className="font-medium text-foreground">Published:</span> {article.date}</p>
                    <p><span className="font-medium text-foreground">Updated:</span> {article.updatedAt}</p>
                    <p><span className="font-medium text-foreground">Read time:</span> {article.readTime}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-primary/15 bg-primary/[0.04] shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <Badge variant="outline" className="w-fit border-primary/20 bg-primary/5 text-primary">
                    Need help?
                  </Badge>
                  <h2 className="text-xl font-semibold tracking-tight">Want a site that applies this thinking?</h2>
                  <p className="text-sm leading-7 text-muted-foreground">
                    D-LABS can turn the ideas in this article into a faster, clearer, more trustworthy website.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button asChild className="rounded-full">
                      <Link href="/contact">
                        Start a project
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full">
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
