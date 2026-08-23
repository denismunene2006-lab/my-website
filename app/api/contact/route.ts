import { NextResponse } from 'next/server';

import { site } from '@/data/site';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Please fill in all fields.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    // If the key is missing, return a friendly error (site still works visually)
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY is not configured.');
      return NextResponse.json(
        { success: false, error: 'Contact form is not fully configured yet. Please reach us via WhatsApp or email instead.' },
        { status: 503 }
      );
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `New website enquiry from ${name}`,
        from_name: site.name,
      }),
    });

    const data = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !data.success) {
      return NextResponse.json(
        { success: false, error: data.message || 'Failed to send your message. Please try again.' },
        { status: response.ok ? 500 : response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Something went wrong sending your message. Please try again.' },
      { status: 500 }
    );
  }
}
