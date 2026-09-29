const sharp = require('sharp');
const path = require('path');
const fs = require('fs-extra');

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

  // 1. App icon & favicons for Next.js App Router (app/icon.png, app/apple-icon.png)
  const appIconPath = path.join(rootDir, 'app', 'icon.png');
  const appAppleIconPath = path.join(rootDir, 'app', 'apple-icon.png');
  const appFaviconPath = path.join(rootDir, 'app', 'favicon.ico');

  await sharp(circularIcon).resize(512, 512).toFile(appIconPath);
  await sharp(circularIcon).resize(180, 180).toFile(appAppleIconPath);
  await sharp(circularIcon).resize(32, 32).toFormat('png').toFile(appFaviconPath);

  // 2. Favicons and PWA icons in public/
  const fav32 = path.join(publicDir, 'favicon-32x32.png');
  const fav16 = path.join(publicDir, 'favicon-16x16.png');
  const favIco = path.join(publicDir, 'favicon.ico');
  const appleTouch = path.join(publicDir, 'apple-touch-icon.png');
  const android192 = path.join(publicDir, 'android-chrome-192x192.png');
  const android512 = path.join(publicDir, 'android-chrome-512x512.png');

  await sharp(circularIcon).resize(32, 32).toFile(fav32);
  await sharp(circularIcon).resize(16, 16).toFile(fav16);
  await sharp(circularIcon).resize(32, 32).toFile(favIco);
  await sharp(circularIcon).resize(180, 180).toFile(appleTouch);
  await sharp(circularIcon).resize(192, 192).toFile(android192);
  await sharp(circularIcon).resize(512, 512).toFile(android512);

  // 3. Web App Manifest in public/site.webmanifest
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
  console.log('Successfully generated all circular favicons, Apple touch icon, Android/PWA icons & webmanifest!');
}

generateIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
