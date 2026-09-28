import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { SiteService } from '@/data/site';

type ServiceCardProps = {
  service: SiteService;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const isExternal = service.href.startsWith('http');

  return (
    <Link
      href={service.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group block h-full focus:outline-none"
    >
      <Card className="h-full border border-border/60 bg-card/90 transition-all duration-200 hover:border-primary/40 hover:shadow-md hover-lift flex flex-col justify-between">
        <CardContent className="space-y-4 p-6 flex flex-col h-full justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <Badge variant="accent" className="text-[10px] uppercase tracking-wider">
                Service
              </Badge>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-heading tracking-tight text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <p className="text-xs leading-relaxed text-foreground/80 pt-1 border-t border-border/40">{service.details}</p>
            </div>
          </div>
          <div className="pt-2 flex items-center text-xs font-semibold text-primary gap-1">
            <span>{service.cta}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
