import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { SiteService } from '@/data/site';

type ServiceCardProps = {
  service: SiteService;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const isExternal = service.href.startsWith('http');

  return (
    <Card className="group border-border/70 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <CardContent className="space-y-5 pt-6">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            D-LABS
          </Badge>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">{service.title}</h3>
          <p className="text-sm leading-7 text-muted-foreground">{service.description}</p>
          <p className="text-sm leading-7 text-foreground/90">{service.details}</p>
        </div>
        <Button asChild variant={service.title === 'Website Development' ? 'default' : 'outline'} className="rounded-full">
          <Link href={service.href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
            {service.cta}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
