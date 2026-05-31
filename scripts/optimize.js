const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const sharp = require('sharp');
const postcss = require('postcss');
const cssnano = require('cssnano');
const terser = require('terser');
const cheerio = require('cheerio');

const root = process.cwd();

async function convertImage(srcPath) {
  try {
    const abs = path.resolve(root, srcPath);
    const dir = path.dirname(abs);
    const ext = path.extname(abs);
    const base = path.basename(abs, ext);
    const webp = path.join(dir, base + '.webp');
    const avif = path.join(dir, base + '.avif');

    const img = sharp(abs);
    const metadata = await img.metadata();

    // create webp and avif if not exist
    if (!fs.existsSync(webp)) {
      await img.clone().webp({ quality: 80 }).toFile(webp);
      console.log('Created', path.relative(root, webp));
    }
    if (!fs.existsSync(avif)) {
      await img.clone().avif({ quality: 50 }).toFile(avif);
      console.log('Created', path.relative(root, avif));
    }

    return { webp: path.relative(root, webp).replace(/\\/g, '/'), avif: path.relative(root, avif).replace(/\\/g, '/'), width: metadata.width, height: metadata.height };
  } catch (err) {
    console.error('convertImage error for', srcPath, err.message);
    return null;
  }
}

async function minifyCssFile(file) {
  const css = await fs.readFile(file, 'utf8');
  const result = await postcss([cssnano({ preset: 'default' })]).process(css, { from: file });
  const out = file.replace(/\.css$/i, '.min.css');
  await fs.writeFile(out, result.css, 'utf8');
  console.log('Minified CSS ->', path.relative(root, out));
}

async function minifyJsFile(file) {
  const code = await fs.readFile(file, 'utf8');
  const res = await terser.minify(code, { module: false });
  if (res.error) {
    console.error('Terser error', res.error);
    return;
  }
  const out = file.replace(/\.js$/i, '.min.js');
  await fs.writeFile(out, res.code, 'utf8');
  console.log('Minified JS ->', path.relative(root, out));
}

async function processHtml(file) {
  const full = path.resolve(root, file);
  const dir = path.dirname(full);
  const html = await fs.readFile(full, 'utf8');
  const $ = cheerio.load(html, { decodeEntities: false });

  function normalizeAssetPath(assetPath, extension) {
    const pathOnly = assetPath.split('?')[0].replace(/\.min\.min\./i, '.min.');

    if (pathOnly.endsWith(`.min.${extension}`)) {
      return pathOnly;
    }

    if (pathOnly.endsWith(`.${extension}`)) {
      return pathOnly.replace(new RegExp(`\.${extension}$`, 'i'), `.min.${extension}`);
    }

    return pathOnly;
  }

  // Ensure preload for splash logo exists
  const splashPreloadHref = 'splash-assets/logo-tight-256.jpg';
  const hasPreload = $(`head link[rel="preload"][as="image"][href="${splashPreloadHref}"]`).length > 0;
  if (!hasPreload) {
    $('head').append(`\n    <link rel="preload" as="image" href="${splashPreloadHref}">\n`);
    console.log('Added preload for splash in', file);
  }

  // Update CSS links to .min.css
  $('link[rel="stylesheet"]').each((i, el) => {
    const href = $(el).attr('href');
    if (href && href.startsWith('css/')) {
      const newHref = normalizeAssetPath(href, 'css');
      $(el).attr('href', newHref);
      console.log('Rewrote CSS link in', file, href, '->', newHref);
    }
  });

  // Update script src to min and add defer for non-critical
  $('script[src]').each((i, el) => {
    const src = $(el).attr('src');
    if (src && src.startsWith('js/')) {
      const newSrc = normalizeAssetPath(src, 'js');
      $(el).attr('src', newSrc);
      console.log('Rewrote script src in', file, src, '->', newSrc);
    }
    // add defer for scroll and shared layout scripts
    if (src && (/scroll-animations|shared-layout/).test(src)) {
      $(el).attr('defer', true);
    }
  });

  // Collapse previously generated nested <picture> chains back to a single wrapper.
  $('picture').each((i, pictureEl) => {
    const $picture = $(pictureEl);
    if ($picture.parent('picture').length) {
      return;
    }

    const nestedPictures = $picture.find('picture');
    if (!nestedPictures.length) {
      return;
    }

    let $deepestPicture = $picture;
    while ($deepestPicture.children('picture').length) {
      $deepestPicture = $deepestPicture.children('picture').first();
    }

    $picture.replaceWith($.html($deepestPicture));
    console.log('Normalized nested picture chain in', file);
  });

  // Process img tags
  const imgs = $('img').toArray();
  for (const imgEl of imgs) {
    const $img = $(imgEl);
    if ($img.parent('picture').length) {
      continue;
    }
    let src = $img.attr('src');
    if (!src) continue;
    if (/^https?:\/\//i.test(src)) continue; // skip remote

    const imgPath = path.resolve(dir, src);
    if (!fs.existsSync(imgPath)) continue;

    // convert image and get sizes
    const conv = await convertImage(path.relative(root, imgPath));
    if (!conv) continue;

    // set width/height if missing
    if (!$img.attr('width') || !$img.attr('height')) {
      if (conv.width && conv.height) {
        $img.attr('width', conv.width);
        $img.attr('height', conv.height);
        console.log('Set dimensions for', src, 'in', file);
      }
    }

    // ensure lazy loading for offscreen images
    if (!$img.attr('loading')) {
      $img.attr('loading', 'lazy');
    }

    // wrap in <picture> with avif/webp sources
    const relWebp = path.relative(dir, path.resolve(root, conv.webp)).replace(/\\/g, '/');
    const relAvif = path.relative(dir, path.resolve(root, conv.avif)).replace(/\\/g, '/');
    const imgHtml = $.html($img);
    const picture = `<picture>\n    <source type="image/avif" srcset="${relAvif}">\n    <source type="image/webp" srcset="${relWebp}">\n    ${imgHtml}\n  </picture>`;
    $img.replaceWith(picture);
    console.log('Replaced img with picture for', src, 'in', file);
  }

  await fs.writeFile(full, $.html(), 'utf8');
}

async function run() {
  console.log('Starting site optimization...');

  // Convert site images
  const imageGlobs = ['images/**/*.{jpg,jpeg,png}', 'splash-assets/**/*.{jpg,jpeg,png}'];
  const files = imageGlobs.flatMap(pattern => glob.sync(pattern, { nodir: true }));
  for (const f of files) {
    await convertImage(f);
  }

  // Minify CSS files
  const cssFiles = glob.sync('css/*.css', { nodir: true });
  for (const f of cssFiles) {
    if (f.endsWith('.min.css')) continue;
    await minifyCssFile(f);
  }

  // Minify JS files
  const jsFiles = glob.sync('js/*.js', { nodir: true });
  for (const f of jsFiles) {
    if (f.endsWith('.min.js')) continue;
    await minifyJsFile(f);
  }

  // Process HTML files
  const htmlFiles = glob.sync('*.html');
  for (const f of htmlFiles) {
    await processHtml(f);
  }

  console.log('Site optimization complete.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
