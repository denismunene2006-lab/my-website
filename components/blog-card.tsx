import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type BlogCardItem = {
  title: string;
  slug: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image?: import('next/image').StaticImageData;
  featured?: boolean;
};

type BlogCardProps = {
  post: BlogCardItem;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className={cn('group overflow-hidden border-border/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow')}>
      {post.image ? (
        <div className="relative overflow-hidden border-b border-border/60">
          <Image
            src={post.image}
            alt={post.title}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
        </div>
      ) : null}
      <CardContent className="space-y-5 pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{post.category}</Badge>
          {post.featured ? <Badge variant="default">Featured</Badge> : null}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">{post.title}</h3>
        <p className="text-sm leading-7 text-muted-foreground">{post.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>
        <Button asChild className="rounded-full">
          <Link href={`/blog/${post.slug}`}>
            Read article
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
