'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowUpRight } from 'lucide-react';

import { brandAssets, navigation, site } from '@/data/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = useMemo(
    () =>
      navigation.map((item) => {
        const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return { ...item, active };
      }),
    [pathname]
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b-2 border-[#6BEA32]/35 bg-[#0d1520] shadow-[0_4px_24px_rgba(0,0,0,0.45)] transition-shadow duration-300',
        isScrolled && 'shadow-[0_6px_32px_rgba(0,0,0,0.55)]'
      )}
    >
      <div className="container-shell flex h-16 lg:h-18 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#6BEA32]/30 bg-[#162231] shadow-sm">
            <Image
              src={brandAssets.logoMark}
              alt="D-LABS logo"
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="min-[420px]:hidden text-lg font-semibold tracking-tight text-white">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-[#6BEA32]/15 hover:text-white',
                item.active && 'bg-[#6BEA32]/20 text-white'
              )}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Badge variant="outline" className="border-[#6BEA32]/35 bg-[#162231] text-white/90">
            Premium Studio
          </Badge>
          <Button asChild variant="outline" className="rounded-full border-white/25 bg-[#162231] text-white hover:bg-[#1e2d3d]">
            <Link href="/blog">
              Insights
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>

        <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full border-[#6BEA32]/35 bg-[#162231] text-white hover:bg-[#1e2d3d] lg:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm rounded-l-[2rem] border-l-2 border-[#6BEA32]/35 bg-[#0d1520] text-white sm:max-w-md">
            <DialogHeader className="space-y-3 pr-10">
              <DialogTitle>{site.name}</DialogTitle>
              <DialogDescription className="text-white/70">{site.tagline}</DialogDescription>
            </DialogHeader>
            <div className="mt-6 space-y-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-white transition hover:border-white/20 hover:bg-white/8',
                    item.active && 'border-primary/40 bg-primary/20'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <Button asChild className="w-full rounded-full" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact">Start a project</Link>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-full" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/blog">Read insights</Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
