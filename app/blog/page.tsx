import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Layers3 } from 'lucide-react';

import { BlogCard } from '@/components/blog-card';
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
      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
                Insights
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Practical thinking for modern web teams and ambitious businesses.
                </h1>
                <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                  The blog shares the ideas behind fast, accessible, conversion-focused websites and the growth thinking
                  that supports them.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    Read featured article
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/contact">Talk to D-LABS</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <Card className="border-border/70 bg-card shadow-soft">
              <CardContent className="space-y-5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Reading list</p>
                    <p className="text-lg font-semibold tracking-tight">Articles that stay useful</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge key={category} variant="outline">
                      {category}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  The content stays practical on purpose, because helpful writing builds credibility faster than generic marketing.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-muted/30">
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
              <Card className="overflow-hidden border-border/70 bg-card shadow-soft">
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  <ImageHero image={featuredArticle.image} title={featuredArticle.title} />
                  <CardContent className="space-y-5 p-6 sm:p-8">
                    <Badge variant="outline">{featuredArticle.category}</Badge>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground">{featuredArticle.title}</h2>
                    <p className="text-sm leading-7 text-muted-foreground">{featuredArticle.subtitle}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>{featuredArticle.date}</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <Button asChild className="rounded-full">
                      <Link href={`/blog/${featuredArticle.slug}`}>
                        Read article
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
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
              eyebrow="More reading"
              title="Every article is written to be practical, not fluffy."
              description="These pieces support the broader site strategy by helping visitors understand how D-LABS thinks and builds."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {otherArticles.map((post, index) => (
              <Reveal key={post.slug} delay={index * 70}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/70 bg-slate-950 text-white shadow-2xl">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12">
              <div className="space-y-4">
                <Badge variant="glass" className="border-white/15 bg-white/10 text-white">
                  Keep learning
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  If you need a site that looks as good as the ideas behind it, let’s talk.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/72">
                  We can help turn the lessons from the blog into a better website that is easier to trust and easier to use.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                  <Link href="/contact">Contact D-LABS</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <Link href="/projects">See the portfolio</Link>
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
    <div className="relative min-h-[320px] overflow-hidden border-b border-border/60 bg-slate-950 lg:min-h-full lg:border-b-0 lg:border-r">
      <Image
        src={image}
        alt={title}
        className="h-full w-full object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur">
        D-LABS Writing
      </div>
    </div>
  );
}
