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
            'radial-gradient(circle at 20% 20%, rgba(107,234,50,0.26), transparent 30%), radial-gradient(circle at 85% 15%, rgba(24,169,75,0.24), transparent 25%), linear-gradient(135deg, #0b0f14 0%, #101923 45%, #111827 100%)',
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
              color: '#6BEA32',
            }}
          >
            DL
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.04em' }}>{site.name}</div>
            <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)' }}>{site.tagline}</div>
          </div>
        </div>

        <div style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 70, fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 0.98 }}>
            Build the Future with D-LABS
          </div>
          <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.8)', lineHeight: 1.35 }}>
            Modern software, websites, and digital solutions for businesses and communities.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 22 }}>
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>{site.description}</span>
          <span style={{ padding: '14px 22px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
            dlabskenya.com
          </span>
        </div>
      </div>
    ),
    size
  );
}
