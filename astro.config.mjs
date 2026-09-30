// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Where the site is served from. The defaults target GitHub Pages
// (https://dhanush251201.github.io/dhanush-portfolio/). For a host that serves the
// site at its root, such as localserver at http://portfolio.localhost/, override them:
//   SITE=http://portfolio.localhost BASE=/ astro build     (or: npm run build:local)
// Every internal link goes through url() in src/lib/url.ts, which picks up `base`.
const site = process.env.SITE ?? 'https://dhanush251201.github.io';
const base = process.env.BASE ?? '/dhanush-portfolio';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
