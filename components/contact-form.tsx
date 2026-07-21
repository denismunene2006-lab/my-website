'use client';

import { useState, type FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/data/site';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const subject = encodeURIComponent(`Project inquiry from ${name || 'website visitor'}`);
    const body = encodeURIComponent(
      [`Name: ${name || 'Not provided'}`, `Email: ${email || 'Not provided'}`, '', message || ''].join('\n')
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus('idle');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Your name
          </label>
          <Input id="name" name="name" autoComplete="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email address
          </label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Project details
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your business, the pages you need, and what success looks like."
          required
        />
      </div>
      <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Opening email…' : 'Send enquiry'}
      </Button>
      <p className="text-xs leading-6 text-muted-foreground">
        This opens your email app so you can send the enquiry directly to {site.email}.
      </p>
    </form>
  );
}
