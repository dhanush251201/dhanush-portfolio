// Renders public/og-image.png (the link-preview image). Re-run after changing your name or title:
//   node scripts/og-image.mjs
import sharp from 'sharp';

const name = 'Dhanush Gowdhaman';
const title = 'Software Engineer · Systems &amp; Full-Stack';
const handle = 'github.com/dhanush251201';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="85%" cy="0%" r="75%"><stop offset="0" stop-color="#dc2626" stop-opacity=".35"/><stop offset="1" stop-color="#dc2626" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#27272a" stroke-width="1"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#09090b"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity=".6"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="80" y="80" width="72" height="72" rx="16" fill="#dc2626"/>
  <text x="116" y="127" text-anchor="middle" font-family="Menlo, monospace" font-size="28" font-weight="700" fill="#fff">DG</text>
  <text x="80" y="300" font-family="Helvetica, Arial, sans-serif" font-size="76" font-weight="700" fill="#ececef">${name}</text>
  <text x="80" y="370" font-family="Helvetica, Arial, sans-serif" font-size="36" fill="#a1a1aa">${title}</text>
  <text x="80" y="540" font-family="Menlo, monospace" font-size="26" fill="#f87171">${handle}</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og-image.png', import.meta.url).pathname);
console.log('wrote public/og-image.png');
