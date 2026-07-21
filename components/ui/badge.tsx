import * as React from 'react';

import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'secondary' | 'outline' | 'glass';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeStyles: Record<BadgeVariant, string> = {
  default: 'border-transparent bg-primary text-primary-foreground shadow-sm',
  secondary: 'border-transparent bg-secondary text-secondary-foreground',
  outline: 'border-border bg-background text-foreground',
  glass: 'border-white/15 bg-white/10 text-white backdrop-blur',
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium leading-none',
        badgeStyles[variant],
        className
      )}
      {...props}
    />
  );
}
