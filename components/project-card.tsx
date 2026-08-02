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
        'group overflow-hidden border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow',
        featured && 'lg:col-span-2'
      )}
    >
      <div className="relative overflow-hidden border-b border-border/60 bg-slate-950">
        <Image
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="glass" className="border-white/15 bg-white/10 text-white">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <CardContent className="space-y-5 pt-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.slice(2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
          <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/70 bg-muted/40 p-4">
            <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Goal</dt>
            <dd className="mt-2 text-sm leading-6 text-foreground">{project.goal}</dd>
          </div>
          <div className="rounded-2xl border border-border/70 bg-muted/40 p-4">
            <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Outcome</dt>
            <dd className="mt-2 text-sm leading-6 text-foreground">{project.outcome}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-full">
            <Link href={project.href} target="_blank" rel="noreferrer">
              {project.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/contact">Start a similar project</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
