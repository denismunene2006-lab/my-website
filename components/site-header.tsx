'use client';

import { useMemo } from 'react';
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

  const items = useMemo(
    () =>
      navigation.map((item) => {
        const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return { ...item, active };
      }),
    [pathname]
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
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
          <span className="min-[420px]:hidden text-lg font-semibold tracking-tight text-foreground">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground',
                item.active && 'bg-muted text-foreground'
              )}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Badge variant="outline" className="border-accent/30 bg-accent/10 text-accent">
            AI-powered
          </Badge>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/blog">
              Insights
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full lg:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm rounded-l-[2rem] border-l border-border bg-card/95 backdrop-blur-xl sm:max-w-md">
            <DialogHeader className="space-y-3 pr-10">
              <DialogTitle>{site.name}</DialogTitle>
              <DialogDescription>{site.tagline}</DialogDescription>
            </DialogHeader>
            <div className="mt-6 space-y-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-foreground transition hover:border-border hover:bg-muted',
                    item.active && 'border-primary/20 bg-primary/5'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <Button asChild className="w-full rounded-full">
                <Link href="/contact">Start a project</Link>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-full">
                <Link href="/blog">Read insights</Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
