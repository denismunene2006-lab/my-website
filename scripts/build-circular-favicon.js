const sharp = require('sharp');
const path = require('path');
const fs = require('fs-extra');

// Crisp, favicon-optimized D-LABS mark: emerald brand disc with a bold white
// "D" lettermark (matches the "D-" wordmark accent). Transparent background,
// so it stays razor-sharp at 16x16 and 32x32 on any tab/theme color.
const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="15" fill="#10B981"/>
  <path fill="#FFFFFF" d="M10.5 8h3v16h-3zM13.5 8c2.6 0 4.8 1.1 6.2 2.9 1.4 1.8 2.1 4.1 2.1 6.4s-0.8 4.6-2.1 6.4c-1.4 1.8-3.6 2.9-6.2 2.9z"/>
</svg>`;

function icoDirectoryEntry(size, dataLength, offset) {
  const entry = Buffer.alloc(16);
  const w = size === 256 ? 0 : size;
  const h = size === 256 ? 0 : size;
  entry.writeUInt8(w, 0);
  entry.writeUInt8(h, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);   // planes
  entry.writeUInt16LE(32, 6);  // bits per pixel
  entry.writeUInt32LE(dataLength, 8);
  entry.writeUInt32LE(offset, 12);
  return entry;
}

function writeIco(dest, images) {
  // Multi-size ICO with PNG-encoded images (readable by Chrome, Edge, Firefox, Safari).
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);  // type = 1 (icon)
  header.writeUInt16LE(images.length, 4);
  const entries = [];
  const blobs = [];
  let offset = 6 + 16 * images.length;
  for (const { size, data } of images) {
    entries.push(icoDirectoryEntry(size, data.length, offset));
    blobs.push(data);
    offset += data.length;
  }
  fs.writeFileSync(dest, Buffer.concat([header, ...entries, ...blobs]));
}

async function generateIcons() {
  const rootDir = process.cwd();
  const sourcePath = path.join(rootDir, 'images', 'new logo.jpeg');

  if (!fs.existsSync(sourcePath)) {
    throw new Error('Source logo not found at ' + sourcePath);
  }

  console.log('Reading source logo:', sourcePath);
  const metadata = await sharp(sourcePath).metadata();
  console.log(`Source dimensions: ${metadata.width}x${metadata.height}`);

  // Create high-res base image
  const size = 512;
  const logoBuffer = await sharp(sourcePath)
    .resize(size, size, { fit: 'cover' })
    .toBuffer();

  // Create circular SVG mask for a clean circular favicon
  const circleMask = Buffer.from(
    `<svg width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/>
    </svg>`
  );

  // Composite the circle mask onto the logo image
  const circularIcon = await sharp(logoBuffer)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Ensure public directory exists
  const publicDir = path.join(rootDir, 'public');
  await fs.ensureDir(publicDir);



  // 2. Favicons in public/ (exact-size PNG fallbacks rendered from the SVG)
  const favSvg = path.join(publicDir, 'favicon.svg');
  const fav32 = path.join(publicDir, 'favicon-32x32.png');
  const fav16 = path.join(publicDir, 'favicon-16x16.png');
  const fav48 = path.join(publicDir, 'favicon-48x48.png');
  const favIco = path.join(publicDir, 'favicon.ico');

  await fs.writeFile(favSvg, FAVICON_SVG);

  const p32 = await sharp(Buffer.from(FAVICON_SVG)).resize(32, 32).png().toBuffer();
  const p16 = await sharp(Buffer.from(FAVICON_SVG)).resize(16, 16).png().toBuffer();
  const p48 = await sharp(Buffer.from(FAVICON_SVG)).resize(48, 48).png().toBuffer();
  await fs.writeFile(fav32, p32);
  await fs.writeFile(fav16, p16);
  await fs.writeFile(fav48, p48);

  // Real multi-size ICO (16x16, 32x32, 48x48) — not a renamed PNG
  writeIco(favIco, [
    { size: 16, data: p16 },
    { size: 32, data: p32 },
    { size: 48, data: p48 },
  ]);

  // 3. PWA icons in public/
  const appleTouch = path.join(publicDir, 'apple-touch-icon.png');
  const android192 = path.join(publicDir, 'android-chrome-192x192.png');
  const android512 = path.join(publicDir, 'android-chrome-512x512.png');

  await sharp(circularIcon).resize(180, 180).toFile(appleTouch);
  await sharp(circularIcon).resize(192, 192).toFile(android192);
  await sharp(circularIcon).resize(512, 512).toFile(android512);

  // 4. Web App Manifest in public/site.webmanifest
  const manifest = {
    name: 'D-LABS',
    short_name: 'D-LABS',
    description: 'D-LABS Digital Solutions & Innovation',
    start_url: '/',
    display: 'standalone',
    background_color: '#090D16',
    theme_color: '#10B981',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  };

  await fs.writeJson(path.join(publicDir, 'site.webmanifest'), manifest, { spaces: 2 });
  console.log('Successfully generated SVG favicon, crisp PNG fallbacks, multi-size ICO, Apple touch icon, Android/PWA icons & webmanifest!');
}

generateIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
