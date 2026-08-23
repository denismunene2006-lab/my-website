'use client';

import { useState, type FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/data/site';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send your message. Please try again.');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong sending your message. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Your name
          </label>
          <Input id="name" name="name" autoComplete="name" placeholder="John Doe" required disabled={status === 'submitting'} />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email address
          </label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required disabled={status === 'submitting'} />
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
          disabled={status === 'submitting'}
        />
      </div>

      {status === 'success' && (
        <div className="rounded-2xl border border-green-600/30 bg-green-600/10 px-4 py-3 text-sm leading-6 text-green-700 dark:text-green-400">
          Message sent successfully! 🎉 We'll get back to you within 24 hours.
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-2xl border border-red-600/30 bg-red-600/10 px-4 py-3 text-sm leading-6 text-red-700 dark:text-red-300">
          {errorMessage || 'Failed to send your message. Please try again.'}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
      </Button>

      <p className="text-xs leading-6 text-muted-foreground">
        We usually reply within 24 hours. Prefer instant chat?{' '}
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi D-LABS! I'm interested in your services.")}`}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-primary underline-offset-2 hover:underline"
        >
          WhatsApp us directly
        </a>
      </p>
    </form>
  );
}
