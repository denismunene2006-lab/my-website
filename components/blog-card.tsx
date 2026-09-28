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
    <Card className={cn('group overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-md hover-lift flex flex-col justify-between')}>
      <div>
        {post.image ? (
          <div className="relative overflow-hidden border-b border-border/50 bg-muted/30">
            <Image
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        ) : null}
        <CardContent className="space-y-3.5 p-5">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant="accent" className="text-[10px] uppercase font-semibold">
              {post.category}
            </Badge>
            {post.featured ? <Badge variant="default" className="text-[10px] uppercase font-semibold">Featured</Badge> : null}
          </div>
          <h3 className="text-lg font-bold font-heading tracking-tight text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">{post.description}</p>
        </CardContent>
      </div>

      <div className="p-5 pt-0 space-y-3 border-t border-border/30 mt-2">
        <div className="flex flex-wrap items-center justify-between text-[11px] text-muted-foreground pt-3">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5 text-primary" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-3.5 w-3.5 text-primary" />
            {post.readTime}
          </span>
        </div>
        <Button asChild size="sm" variant="outline" className="w-full">
          <Link href={`/blog/${post.slug}`}>
            Read article
            <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
