'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Copy, Facebook, Linkedin, Link2, MessageCircle, Share2 } from 'lucide-react';

import { cn } from '@/lib/utils';

type ArticleShareProps = {
  title: string;
  url: string;
  compact?: boolean;
  className?: string;
};

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand('copy');
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

export function ArticleShare({ title, url, compact = false, className }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);
  const [nativeShareSupported, setNativeShareSupported] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shareText = `${title} - ${url}`;

  useEffect(() => {
    setNativeShareSupported(typeof navigator.share === 'function');
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const showCopied = useCallback(() => {
    setCopied(true);
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleCopy = useCallback(async () => {
    if (await copyText(url)) {
      showCopied();
    }
  }, [showCopied, url]);

  const handleNativeShare = useCallback(async () => {
    if (!navigator.share) {
      return;
    }

    try {
      await navigator.share({ title, text: title, url });
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }
      if (await copyText(url)) {
        showCopied();
      }
    }
  }, [showCopied, title, url]);

  const linkClass =
    'inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors hover:border-primary/40 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

  return (
    <section
      aria-label="Share article"
      className={cn(
        'min-w-0 rounded-xl border border-border/60 bg-card shadow-sm',
        compact ? 'p-3' : 'p-5 sm:p-6',
        className
      )}
    >
      <div className={cn('flex gap-3', compact ? 'flex-col items-stretch sm:flex-row sm:items-center sm:justify-between' : 'flex-col sm:flex-row sm:items-center sm:justify-between')}>
        <div className="flex items-center gap-2">
          <Share2 className="h-4 w-4 text-primary" aria-hidden="true" />
          <div>
            <h2 className={cn('font-heading font-bold text-foreground', compact ? 'text-sm' : 'text-base')}>Share this article</h2>
            {!compact ? <p className="mt-1 text-xs text-muted-foreground">Send it to someone who might find it useful.</p> : null}
          </div>
        </div>

        <div className={cn('flex flex-wrap gap-2', compact ? 'grid grid-cols-2 sm:flex sm:justify-end' : 'sm:justify-end')}>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(linkClass, compact && 'w-full sm:w-auto', 'border-green-500/30 text-green-600 dark:text-green-400')}
            aria-label="Share on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className={compact ? 'sr-only sm:not-sr-only' : undefined}>WhatsApp</span>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(linkClass, compact && 'w-full sm:w-auto', 'border-blue-500/30 text-blue-600 dark:text-blue-400')}
            aria-label="Share on Facebook"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
            <span className={compact ? 'sr-only sm:not-sr-only' : undefined}>Facebook</span>
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(linkClass, compact && 'w-full sm:w-auto', 'border-sky-500/30 text-sky-600 dark:text-sky-400')}
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            <span className={compact ? 'sr-only sm:not-sr-only' : undefined}>LinkedIn</span>
          </a>
          {nativeShareSupported ? (
            <button type="button" onClick={handleNativeShare} className={cn(linkClass, compact && 'w-full sm:w-auto', 'border-primary/30 text-primary')} aria-label="Share using your device">
              <Share2 className="h-4 w-4" aria-hidden="true" />
              <span className={compact ? 'sr-only sm:not-sr-only' : undefined}>Share</span>
            </button>
          ) : null}
          <button
            type="button"
            onClick={handleCopy}
            className={cn(linkClass, compact && 'w-full sm:w-auto', copied ? 'border-primary bg-primary text-primary-foreground' : 'border-border/70 text-foreground')}
            aria-label={copied ? 'Link copied' : 'Copy article link'}
          >
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            <span>{copied ? 'Link copied!' : compact ? 'Copy' : 'Copy link'}</span>
          </button>
        </div>
      </div>

      {!compact ? (
        <div className="mt-4 flex items-center gap-2 border-t border-border/50 pt-3 text-[11px] text-muted-foreground">
          <Link2 className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          <span className="truncate">{url}</span>
          <span role="status" aria-live="polite" className="sr-only">
            {copied ? 'Link copied!' : ''}
          </span>
        </div>
      ) : null}
    </section>
  );
}
