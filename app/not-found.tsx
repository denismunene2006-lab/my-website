import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="page-section">
      <div className="container-shell">
        <Card className="mx-auto max-w-2xl border-border/70 bg-card text-center shadow-sm">
          <CardContent className="space-y-6 p-10">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">404</p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Page not found</h1>
            <p className="text-base leading-8 text-muted-foreground">
              The page you were looking for does not exist, but the rest of the site is still right here.
            </p>
            <Button asChild className="rounded-full">
              <Link href="/">Return home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
