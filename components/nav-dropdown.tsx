'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Package } from 'lucide-react';

import type { NavigationChild } from '@/data/site';
import { cn } from '@/lib/utils';

type NavDropdownProps = {
  label: string;
  children: NavigationChild[];
  active: boolean;
  pathname: string;
};

export function NavDropdown({ label, children, active, pathname }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  // Close on outside click and on Escape, matching standard menu behaviour.
  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  useEffect(() => clearCloseTimer, [clearCloseTimer]);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
    clearCloseTimer();
  }, [pathname, clearCloseTimer]);

  const handleMouseEnter = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          'flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-150 hover:text-foreground hover:bg-accent/10 xl:px-3.5',
          active && 'bg-primary/10 font-semibold text-primary hover:bg-primary/15 hover:text-primary'
        )}
      >
        {label}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div className="absolute left-0 top-full z-50 w-80 pt-3">
          <div className="overflow-hidden rounded-xl border border-border/60 bg-popover/95 p-1.5 shadow-soft backdrop-blur-xl">
            <p className="px-3 pb-1.5 pt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Products built in-house
            </p>
            {children.map((child) => {
              const isCurrent = pathname === child.href || pathname.startsWith(`${child.href}/`);
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={cn(
                    'group/item flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-accent/10',
                    isCurrent && 'bg-primary/10'
                  )}
                >
                  <span
                    className={cn(
                      'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary',
                      isCurrent && 'bg-primary/20'
                    )}
                  >
                    <Package className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        'block text-sm font-semibold text-foreground transition-colors group-hover/item:text-primary',
                        isCurrent && 'text-primary'
                      )}
                    >
                      {child.label}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                      {child.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
