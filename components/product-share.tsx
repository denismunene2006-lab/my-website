'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Copy, Link2 } from 'lucide-react';

import { cn } from '@/lib/utils';

type ProductShareProps = {
  /** Product name, used for the "Share {name}" label */
  name: string;
  /** Canonical path, e.g. /from-d-labs/lipa */
  path: string;
  className?: string;
};

export function ProductShare({ name, path, className }: ProductShareProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    },
    []
  );

  const handleCopy = useCallback(async () => {
    // Copy whatever URL the visitor is actually on, so previews and
    // deployed domains both share correctly.
    const url = `${window.location.origin}${path}`;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Fallback for browsers/contexts where the async clipboard is blocked.
      const textarea = document.createElement('textarea');
      textarea.value = url;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setCopied(true);

    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => setCopied(false), 2000);
  }, [path]);

  return (
    <div
      className={cn(
        'inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-2.5',
        className
      )}
    >
      <span className="flex items-center gap-2 text-xs font-semibold text-primary">
        <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
        Share {name}
      </span>

      <span className="hidden h-4 w-px bg-primary/20 sm:block" aria-hidden="true" />

      <span className="font-mono text-xs text-muted-foreground">dlabskenya.com{path}</span>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-200',
          copied
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-primary/25 bg-background/60 text-primary hover:bg-primary/10'
        )}
      >
        {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
      </button>

      <span
        role="status"
        aria-live="polite"
        className={cn(
          'text-xs font-medium text-primary transition-opacity duration-200',
          copied ? 'opacity-100' : 'opacity-0'
        )}
      >
        Copied
      </span>
    </div>
  );
}
