import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';

import { BlogCard } from '@/components/blog-card';
import { BlogScrollTo } from '@/components/blog-scroll-to';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { articles } from '@/data/articles';

export const metadata = createPageMetadata({
  title: 'Web Development Blog for Businesses in Kenya | D-LABS',
  description: 'Read practical web development and SEO tips for businesses in Embu and across Kenya.',
  path: '/blog',
});

const categories = [...new Set(articles.map((article) => article.category))];
const featuredArticle = articles.find((article) => article.slug === '20-unshakable-rules-modern-web-development') ?? articles[0];

export default function BlogPage() {
  const otherArticles = articles.filter((article) => article.slug !== featuredArticle.slug);

  return (
    <div>
      <BlogScrollTo />
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-muted/30 to-background py-16 lg:py-24 tech-grid-pattern">
        <div className="container-shell relative z-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              <Badge variant="accent" className="px-3 py-1 text-xs uppercase font-semibold">
                Insights &amp; Engineering
              </Badge>
              <div className="space-y-3">
                <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
                  Practical thinking for <span className="text-primary font-black">modern web teams</span>.
                </h1>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Explore articles on web development rules, site performance, conversion optimization, and digital strategy.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    Read featured
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/contact">Talk to D-LABS</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <Card id={featuredArticle.slug} className="scroll-mt-24 border-border/60 bg-card/80 backdrop-blur-xl shadow-md p-6">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground">Reading list</p>
                    <p className="text-base font-bold font-heading text-foreground">Curated tech articles</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {categories.map((category) => (
                    <Badge key={category} variant="outline" className="text-[11px]">
                      {category}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Practical engineering, performance tips, and actionable digital guidance for growing businesses.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-b border-border/40">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Featured article"
              title={featuredArticle.title}
              description={featuredArticle.description}
            />
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <Card className="overflow-hidden border-border/60 bg-card shadow-sm hover:border-primary/30 transition-colors">
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <ImageHero image={featuredArticle.image} title={featuredArticle.title} />
                  <CardContent className="space-y-4 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <Badge variant="accent" className="text-[10px] uppercase font-semibold">
                        {featuredArticle.category}
                      </Badge>
                      <Badge variant="default" className="text-[10px] uppercase font-semibold">
                        Featured
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground">{featuredArticle.title}</h2>
                    <p className="text-xs leading-relaxed text-muted-foreground">{featuredArticle.subtitle}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <div className="pt-2">
                      <Button asChild size="sm">
                        <Link href={`/blog/${featuredArticle.slug}`}>
                          Read full article
                          <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="More articles"
              title="All published insights."
              description="Browse practical guides on performance, SEO, web strategy, and design systems."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {otherArticles.map((post, index) => (
              <Reveal key={post.slug} delay={index * 60}>
                <div id={post.slug} className="scroll-mt-24 h-full">
                  <BlogCard post={post} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-t border-border/40">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/60 bg-card shadow-md p-8 sm:p-10">
            <CardContent className="grid gap-6 p-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-3">
                <Badge variant="accent" className="text-xs uppercase font-semibold">
                  Keep learning
                </Badge>
                <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground sm:text-3xl">
                  Ready to turn these insights into a high-performing website?
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Let D-LABS design and build a modern web application for your brand.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contact">Contact D-LABS</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/projects">See portfolio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function ImageHero({ image, title }: { image: (typeof articles)[number]['image']; title: string }) {
  return (
    <div className="relative min-h-[260px] overflow-hidden border-b border-border/50 bg-muted/30 lg:min-h-full lg:border-b-0 lg:border-r">
      <Image
        src={image}
        alt={title}
        className="h-full w-full object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      <div className="absolute left-4 top-4">
        <Badge variant="accent" className="text-[10px] uppercase font-semibold">
          D-LABS Article
        </Badge>
      </div>
    </div>
  );
}
