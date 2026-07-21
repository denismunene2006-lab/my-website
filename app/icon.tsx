import { ImageResponse } from 'next/og';

import { site } from '@/data/site';

export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(circle at 30% 20%, rgba(56,189,248,0.6), transparent 35%), linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)',
          color: '#fff',
          fontSize: 156,
          fontWeight: 800,
          letterSpacing: '-0.08em',
        }}
      >
        {site.name.slice(0, 1)}
      </div>
    ),
    size
  );
}
