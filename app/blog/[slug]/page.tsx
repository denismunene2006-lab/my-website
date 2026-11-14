import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, Tag } from 'lucide-react';

import { ArticleContent } from '@/components/article-content';
import { ArticleShare } from '@/components/article-share';
import { JsonLd } from '@/components/json-ld';
import { Reveal } from '@/components/reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { articles, getArticleBySlug, type Article } from '@/data/articles';
import { getArticleUrl, site, siteUrl } from '@/data/site';

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Builds FAQPage structured data from an article's "Frequently Asked Questions"
 * section (level-3 headings each followed by a paragraph). Returns null when
 * the article has no FAQ section.
 */
function buildFaqJsonLd(article: Article) {
  const blocks = article.blocks;
  const faqs: { question: string; answer: string }[] = [];

  for (let i = 0; i < blocks.length; i += 1) {
    const block = blocks[i];
    const isFaqSection =
      block.type === 'heading' &&
      (block.level ?? 2) === 2 &&
      /frequently asked questions/i.test(block.text);

    if (!isFaqSection) continue;

    for (let j = i + 1; j < blocks.length; j += 1) {
      const heading = blocks[j];
      // Stop when the FAQ section ends (next level-2 heading).
      if (heading.type === 'heading' && (heading.level ?? 2) === 2) break;
      if (heading.type !== 'heading') continue;

      const answer = blocks[j + 1];
      if (answer?.type === 'paragraph') {
        faqs.push({ question: heading.text, answer: answer.text });
      }
    }
    break;
  }

  if (faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

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
    publishedTime: article.date,
    modifiedTime: article.updatedAt,
    author: site.founderName,
    section: article.category,
    tags: article.tags ?? [article.category, 'D-LABS', 'Web Development'],
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = getArticleUrl(article.slug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: new URL(article.image.src, siteUrl).toString(),
    datePublished: article.date,
    dateModified: article.updatedAt,
    author: { '@type': 'Person', name: site.founderName, url: `${siteUrl}/about` },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/opengraph-image` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${article.slug}` },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
    ],
  };

  const faqJsonLd = buildFaqJsonLd(article);
  const jsonLdArray = faqJsonLd ? [jsonLd, breadcrumbJsonLd, faqJsonLd] : [jsonLd, breadcrumbJsonLd];

  const articleTags = article.tags ?? [article.category, 'D-LABS', 'Web Development'];
  const relatedArticles = articles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => {
      const candidateTags = candidate.tags ?? [candidate.category];
      const shared = candidateTags.filter((tag) => articleTags.includes(tag)).length;
      return { candidate, score: shared + (candidate.category === article.category ? 1 : 0) };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ candidate }) => candidate);

  return (
    <div className="page-section overflow-x-hidden">
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
          <div className="mt-6 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div className="min-w-0 space-y-4">
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
              <ArticleShare title={article.title} url={articleUrl} compact />
            </div>

            <Card className="min-w-0 overflow-hidden border-border/60 bg-card shadow-sm">
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
          <div className="mt-10 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <article className="min-w-0 space-y-8">
              <Card className="border-border/60 bg-card shadow-sm">
                <CardContent className="min-w-0 p-6 sm:p-8">
                  <ArticleContent blocks={article.blocks} />
                </CardContent>
              </Card>
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 border-t border-border/60 pt-5">
                  {article.tags.map((tag) => (
                    <Button
                      key={tag}
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5"
                    >
                      <Link href={`/blog?category=${encodeURIComponent(tag)}`}>
                        #{tag}
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
              {relatedArticles.length > 0 && (
                <div className="space-y-4 border-t border-border/60 pt-5">
                  <h2 className="font-heading text-lg font-bold tracking-tight">Related articles</h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
                      >
                        <Badge variant="accent" className="w-fit text-[10px] uppercase font-semibold">
                          {related.category}
                        </Badge>
                        <h3 className="mt-3 text-sm font-semibold leading-6 tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">
                          {related.subtitle}
                        </p>
                        <span className="mt-auto pt-3 text-xs font-medium text-primary inline-flex items-center gap-1">
                          Read article
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <ArticleShare title={article.title} url={articleUrl} />
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

      <JsonLd data={jsonLdArray} />
    </div>
  );
}
