'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowUpRight, Package, Sparkles } from 'lucide-react';

import { navigation, site } from '@/data/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BrandWordmark } from '@/components/brand-wordmark';
import { NavDropdown } from '@/components/nav-dropdown';

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = useMemo(
    () =>
      navigation.map((item) => {
        const active =
          item.href === '/'
            ? pathname === '/'
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return { ...item, active };
      }),
    [pathname]
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all duration-200',
        isScrolled && 'bg-background/90 shadow-sm border-border/80'
      )}
    >
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        {/* D-LABS Text Wordmark */}
        <Link href="/" className="group flex items-center gap-2 tracking-tight">
          <BrandWordmark />
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
          {items.map((item) =>
            item.children ? (
              <NavDropdown
                key={item.href}
                label={item.label}
                children={item.children}
                active={item.active}
                pathname={pathname}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-150 hover:text-foreground hover:bg-accent/10 xl:px-3.5',
                  item.active && 'bg-primary/10 font-semibold text-primary hover:bg-primary/15 hover:text-primary'
                )}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Action Buttons + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-2.5">
          <ThemeToggle />
          
          <Button asChild variant="ghost" size="sm" className="rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground">
            <Link href="/blog">
              Insights
              <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </Button>

          <Button asChild size="sm" className="rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 shadow-sm transition-all">
            <Link href="/contact">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Start a project
            </Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />

          <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-lg border border-border/60 bg-background/50 text-foreground hover:bg-accent/10"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xs rounded-xl border border-border/80 bg-background/95 backdrop-blur-2xl text-foreground p-6 shadow-2xl">
              <DialogHeader className="space-y-1 text-left pb-4 border-b border-border/50">
                <DialogTitle className="flex items-center justify-between text-lg font-bold font-heading">
                  <BrandWordmark variant="drawer" />
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  {site.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 flex flex-col gap-1">
                {items.map((item) =>
                  item.children ? (
                    <div key={item.href} className="space-y-1">
                      <p
                        className={cn(
                          'px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground',
                          item.active && 'text-primary'
                        )}
                      >
                        {item.label}
                      </p>
                      {item.children.map((child) => {
                        const childActive =
                          pathname === child.href || pathname.startsWith(`${child.href}/`);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-current={childActive ? 'page' : undefined}
                            className={cn(
                              'flex items-center gap-2.5 rounded-lg py-2.5 pl-6 pr-3 text-sm font-medium text-foreground/80 transition hover:bg-accent/10 hover:text-foreground',
                              childActive && 'bg-primary/10 text-primary font-semibold'
                            )}
                          >
                            <Package className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition hover:bg-accent/10 hover:text-foreground',
                        item.active && 'bg-primary/10 text-primary font-semibold'
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 space-y-2">
                <Button asChild className="w-full rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90" onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/contact">Start a project</Link>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-lg border-border/60 text-foreground hover:bg-accent/10" onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/blog">Read insights</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
