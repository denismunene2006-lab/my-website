import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, MapPin, PhoneCall } from 'lucide-react';

import { brandAssets, navigation, site } from '@/data/site';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070a0f] text-white">
      <div className="container-shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="relative block shrink-0">
                <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10">
                  <Image src={brandAssets.logoMark} alt={site.name} className="h-full w-full object-cover" />
                </span>
                {/* Always-on green ring around the logo */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-0.5 rounded-2xl border-2 border-[#6BEA32]/70 shadow-[0_0_10px_rgba(107,234,50,0.35)]"
                />
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
              <Badge variant="glass">Fast delivery</Badge>
              <Badge variant="glass">Responsive design</Badge>
              <Badge variant="glass">SEO foundations</Badge>
              <Badge variant="glass">Ongoing support</Badge>
            </div>
            <Button asChild className="rounded-full">
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
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Services</h2>
            <div className="flex flex-col gap-3 text-sm text-white/75">
              <Link href="/services" className="transition hover:text-white">Website Development</Link>
              <Link href="/services" className="transition hover:text-white">Website Redesign</Link>
              <Link href="/services" className="transition hover:text-white">Deployment Support</Link>
              <Link href="/services" className="transition hover:text-white">Developer Training</Link>
            </div>
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
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/55">
          <p>© 2026 D-LABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
