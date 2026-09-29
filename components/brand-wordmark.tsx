import { cn } from '@/lib/utils';

/**
 * D-LABS wordmark.
 *
 * Real HTML text (never an image) styled as a compact brand lockup:
 * green "D-", white "LABS", with an inline SVG curved underline that
 * scales with the type. Shared by the navbar (desktop + slide-in mobile
 * menu) and the footer so the branding stays identical everywhere.
 */
export function BrandWordmark({ variant = 'navbar' }: { variant?: 'navbar' | 'drawer' }) {
  return (
    <span className={cn('dlabs-wordmark', variant === 'drawer' && 'dlabs-wordmark--drawer')}>
      <span className="dlabs-wordmark__text">
        <span className="dlabs-wordmark__accent">D-</span>
        <span className="dlabs-wordmark__main">LABS</span>
      </span>
      <svg
        className="dlabs-wordmark__swoosh"
        viewBox="0 0 120 11"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M3 5.57C4.43 5.52 8.7 5.33 11.58 5.24C14.46 5.15 17.37 5.14 20.3 5.04C23.22 4.94 26.17 4.8 29.13 4.63C32.08 4.46 35.06 4.25 38.04 4.01C41.02 3.77 44.01 3.49 47 3.17C50 2.85 52.95 2.46 56 2.11C59.05 1.76 62.12 1.38 65.31 1.09C68.5 0.8 71.8 0.55 75.15 0.37C78.49 0.19 81.92 0.06 85.38 0C88.83 -0.06 92.34 -0.06 95.85 0.02C99.36 0.1 102.92 0.21 106.44 0.5C109.96 0.79 115.24 1.56 117 1.77L117 1.77C115.24 1.94 109.96 2.48 106.44 2.81C102.92 3.15 99.36 3.43 95.85 3.78C92.34 4.13 88.83 4.5 85.38 4.88C81.92 5.27 78.49 5.68 75.15 6.09C71.8 6.5 68.5 6.94 65.31 7.36C62.12 7.78 59.05 8.25 56 8.62C52.95 8.99 50 9.37 47 9.6C44.01 9.83 41.02 9.98 38.04 10.03C35.06 10.08 32.08 10.04 29.13 9.9C26.17 9.76 23.22 9.53 20.3 9.19C17.37 8.85 14.46 8.46 11.58 7.86C8.7 7.26 4.43 5.95 3 5.57Z" />
      </svg>
    </span>
  );
}
