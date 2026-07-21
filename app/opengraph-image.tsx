import { ImageResponse } from 'next/og';

import { site } from '@/data/site';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          background:
            'radial-gradient(circle at 20% 20%, rgba(6,182,212,0.25), transparent 30%), radial-gradient(circle at 85% 15%, rgba(124,58,237,0.22), transparent 25%), linear-gradient(135deg, #020617 0%, #0f172a 45%, #111827 100%)',
          color: '#fff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              height: 96,
              width: 96,
              borderRadius: 28,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 42,
              fontWeight: 800,
            }}
          >
            D
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.04em' }}>{site.name}</div>
            <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)' }}>{site.tagline}</div>
          </div>
        </div>

        <div style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 70, fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 0.98 }}>
            Modern websites that feel premium, trustworthy, and ready to grow.
          </div>
          <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.8)', lineHeight: 1.35 }}>
            Fast, SEO-ready, mobile-first web experiences for businesses in Embu, Nairobi, and across Kenya.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 22 }}>
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>{site.description}</span>
          <span style={{ padding: '14px 22px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
            d-labs.vercel.app
          </span>
        </div>
      </div>
    ),
    size
  );
}
