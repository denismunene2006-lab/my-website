import * as React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'secondary' | 'outline' | 'glass' | 'accent';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeStyles: Record<BadgeVariant, string> = {
  default: 'border-transparent bg-primary text-primary-foreground shadow-sm',
  secondary: 'border-transparent bg-secondary text-secondary-foreground font-medium',
  outline: 'border-border/80 bg-background/80 text-foreground backdrop-blur-sm',
  glass: 'border-border/60 bg-card/60 text-foreground backdrop-blur-md',
  accent: 'border-primary/25 bg-primary/10 text-primary font-medium',
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium leading-none transition-colors',
        badgeStyles[variant],
        className
      )}
      {...props}
    />
  );
}
