'use client';

import { useMemo, useState } from 'react';
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

  const items = useMemo(
    () =>
      navigation.map((item) => {
        const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return { ...item, active };
      }),
    [pathname]
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f14]/88 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-sm backdrop-blur">
            <Image
              src={brandAssets.logoMark}
              alt="D-LABS logo"
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="hidden min-[420px]:block">
            <Image
              src={brandAssets.wordmark}
              alt={site.name}
              className="h-8 w-auto transition duration-300 group-hover:scale-[1.01]"
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
                'rounded-full px-4 py-2 text-sm font-medium text-white/72 transition hover:bg-white/10 hover:text-white',
                item.active && 'bg-white/14 text-white'
              )}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Badge variant="outline" className="border-white/20 bg-white/10 text-white/80 backdrop-blur">
            Premium Studio
          </Badge>
          <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/12">
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
            <Button variant="outline" size="icon" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/12 lg:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm rounded-l-[2rem] border-l border-white/15 bg-[#0b0f14]/95 text-white backdrop-blur-xl sm:max-w-md">
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
