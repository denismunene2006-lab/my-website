import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, PhoneCall } from 'lucide-react';

import { navigation, site } from '@/data/site';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/60 text-foreground transition-colors duration-200">
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold font-heading tracking-tighter text-foreground">
                D<span className="text-primary font-black mx-[1px]">-</span>LABS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Operational
              </span>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {site.description} Delivering modern digital experiences for clients in Embu, Nairobi, and across Kenya.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <Badge variant="outline" className="text-[11px]">Fast Builds</Badge>
              <Badge variant="outline" className="text-[11px]">Mobile First</Badge>
              <Badge variant="outline" className="text-[11px]">SEO Optimized</Badge>
              <Badge variant="outline" className="text-[11px]">Ongoing Support</Badge>
            </div>

            <Button asChild size="sm" className="rounded-lg">
              <Link href="/contact">
                Start a project
                <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigation</h2>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-foreground/80 transition hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Services</h2>
            <div className="flex flex-col gap-2.5 text-sm text-foreground/80">
              <Link href="/services" className="transition hover:text-primary">Website Development</Link>
              <Link href="/services" className="transition hover:text-primary">Website Redesign</Link>
              <Link href="/services" className="transition hover:text-primary">GitHub Deployment</Link>
              <Link href="/services" className="transition hover:text-primary">Developer Training</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact</h2>
            <div className="space-y-2.5 text-sm text-foreground/80">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition hover:text-primary">
                <Mail className="h-4 w-4 text-primary" />
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="flex items-center gap-2.5 transition hover:text-primary">
                <PhoneCall className="h-4 w-4 text-primary" />
                {site.phone}
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary" />
                {site.location}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© 2026 D-LABS. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built by Denis Munene</span>
            <span>•</span>
            <span className="text-primary font-medium">Embu, Kenya</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
