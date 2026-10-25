import { ArrowUpRight, Handshake, Linkedin } from 'lucide-react';

import { LINKEDIN_URL, WHATSAPP_URL } from '@/data/site';
import { cn } from '@/lib/utils';

type PersonalConnectionCardProps = {
  className?: string;
};

/**
 * Brand WhatsApp icon reusing the existing SVG path from the codebase
 * (see components/whatsapp-button.tsx and components/product-contact-actions.tsx).
 */
function WhatsAppBrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.72 6.4L3.2 28.8l6.58-1.72a12.74 12.74 0 0 0 6.22 1.6h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.81-12.8zm0 23.47c-1.91 0-3.78-.51-5.41-1.48l-.39-.23-4.06 1.06 1.08-3.96-.25-.4a10.63 10.63 0 0 1-1.64-5.66c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.54c0 5.88-4.78 10.64-10.66 10.64zm5.84-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.56-1.58a9.63 9.63 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.64-.52-.55-.72-.56h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.25 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
    </svg>
  );
}

export function PersonalConnectionCard({ className }: PersonalConnectionCardProps) {
  return (
    <div
      className={cn(
        'w-full max-w-xl rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm transition-all duration-200 sm:p-6',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
          <Handshake className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Let&apos;s Connect
          </h3>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Have an idea or opportunity? Let&apos;s talk.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-border/60" role="separator" />

      {/* Contact Options */}
      <div className="flex flex-col gap-3">
        {/* Row 1: LinkedIn */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn - Let's grow our professional network."
          className="group flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-card px-3.5 py-3 text-left transition-all duration-200 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/[0.03] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 dark:hover:border-[#0A66C2]/50 dark:hover:bg-[#0A66C2]/10 dark:focus-visible:ring-offset-background sm:gap-4 sm:px-4 sm:py-3.5"
        >
          <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0A66C2]/20 bg-[#0A66C2]/10 text-[#0A66C2] transition-colors duration-200 dark:bg-[#0A66C2]/20 sm:h-11 sm:w-11">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground transition-colors group-hover:text-[#0A66C2] dark:group-hover:text-[#388be8] sm:text-base">
                Connect on LinkedIn
              </div>
              <div className="text-xs leading-snug text-muted-foreground sm:text-sm">
                Let&apos;s grow our professional network.
              </div>
            </div>
          </div>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-[#0A66C2] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-[#388be8]"
            aria-hidden="true"
          />
        </a>

        {/* Row 2: WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with me on WhatsApp - Let's discuss your idea directly."
          className="group flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-card px-3.5 py-3 text-left transition-all duration-200 hover:border-[#25D366]/40 hover:bg-[#25D366]/[0.03] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 dark:hover:border-[#25D366]/50 dark:hover:bg-[#25D366]/10 dark:focus-visible:ring-offset-background sm:gap-4 sm:px-4 sm:py-3.5"
        >
          <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#25D366]/20 bg-[#25D366]/10 text-[#25D366] transition-colors duration-200 dark:bg-[#25D366]/20 sm:h-11 sm:w-11">
              <WhatsAppBrandIcon className="h-5 w-5 fill-current" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground transition-colors group-hover:text-[#1ea952] dark:group-hover:text-[#25D366] sm:text-base">
                Chat with me on WhatsApp
              </div>
              <div className="text-xs leading-snug text-muted-foreground sm:text-sm">
                Let&apos;s discuss your idea directly.
              </div>
            </div>
          </div>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-[#25D366] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
