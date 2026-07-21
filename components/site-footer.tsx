import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, MapPin, PhoneCall } from 'lucide-react';

import { brandAssets, navigation, site, siteUrl } from '@/data/site';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-slate-950 text-white">
      <div className="container-shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <Image src={brandAssets.logoMark} alt={site.name} className="h-full w-full object-cover" />
              </span>
              <div>
                <p className="text-xl font-semibold tracking-tight">{site.name}</p>
                <p className="text-sm text-white/65">{site.tagline}</p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/72">
              {site.description} Built for businesses in Embu, Nairobi, and across Kenya.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="glass">Next.js</Badge>
              <Badge variant="glass">React</Badge>
              <Badge variant="glass">Tailwind CSS</Badge>
              <Badge variant="glass">shadcn/ui</Badge>
            </div>
            <Button asChild className="rounded-full bg-white text-slate-950 hover:bg-white/90">
              <Link href="/contact">
                Let’s talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Quick links</h2>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/75 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Contact</h2>
            <div className="space-y-3 text-sm text-white/75">
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition hover:text-white">
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="flex items-center gap-3 transition hover:text-white">
                <PhoneCall className="h-4 w-4" />
                {site.phone}
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                {site.location}
              </span>
            </div>
            <Link
              href="https://github.com/denismunene2006-lab"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"
            >
              GitHub profile
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 D-LABS. All rights reserved.</p>
          <p>
            Built with <span className="text-white/80">Next.js</span>, deployed for{' '}
            <a href={siteUrl} className="text-white transition hover:text-cyan-300">
              modern performance
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
