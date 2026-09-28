import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { SiteProject } from '@/data/site';

type ProjectCardProps = {
  project: SiteProject;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-md hover-lift',
        featured && 'lg:col-span-2'
      )}
    >
      <div className="relative overflow-hidden border-b border-border/50 bg-muted/30">
        <Image
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="accent" className="text-[11px] shadow-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <CardContent className="space-y-4 pt-5 p-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags.slice(2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl font-bold font-heading tracking-tight text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        </div>

        <dl className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border/50 bg-muted/30 p-3.5">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Goal</dt>
            <dd className="mt-1 text-xs leading-relaxed text-foreground/90">{project.goal}</dd>
          </div>
          <div className="rounded-lg border border-border/50 bg-muted/30 p-3.5">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Outcome</dt>
            <dd className="mt-1 text-xs leading-relaxed text-foreground/90">{project.outcome}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-2.5 pt-1">
          <Button asChild size="sm">
            <Link href={project.href} target="_blank" rel="noreferrer">
              {project.cta}
              <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/contact">Start a similar project</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
