import { Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { cn } from '@/lib/utils';

type ProductContactActionsProps = {
  whatsappMessage: string;
  emailSubject: string;
  emailBody: string;
  size?: 'default' | 'lg';
  className?: string;
  align?: 'start' | 'end';
};

/**
 * The only contact actions offered on a product page: WhatsApp and Email,
 * both with a pre-written message so the visitor never has to type one.
 */
export function ProductContactActions({
  whatsappMessage,
  emailSubject,
  emailBody,
  size = 'lg',
  className,
  align = 'start',
}: ProductContactActionsProps) {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className={cn('flex flex-wrap gap-3', align === 'end' && 'lg:justify-end', className)}>
      <Button asChild size={size} className="rounded-xl">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.72 6.4L3.2 28.8l6.58-1.72a12.74 12.74 0 0 0 6.22 1.6h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.81-12.8zm0 23.47c-1.91 0-3.78-.51-5.41-1.48l-.39-.23-4.06 1.06 1.08-3.96-.25-.4a10.63 10.63 0 0 1-1.64-5.66c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.54c0 5.88-4.78 10.64-10.66 10.64zm5.84-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.56-1.58a9.63 9.63 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.64-.52-.55-.72-.56h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.25 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
          </svg>
          Chat on WhatsApp
        </a>
      </Button>

      <Button asChild size={size} variant="outline" className="rounded-xl">
        <a href={emailHref}>
          <Mail className="h-4 w-4" aria-hidden="true" />
          Send an email
        </a>
      </Button>
    </div>
  );
}
