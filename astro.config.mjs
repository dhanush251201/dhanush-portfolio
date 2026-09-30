// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Served from the dhanush-portfolio repo, i.e. https://dhanush251201.github.io/dhanush-portfolio/.
// If you move it to the dhanush251201.github.io repo (or a custom domain), remove `base`.
export default defineConfig({
  site: 'https://dhanush251201.github.io',
  base: '/dhanush-portfolio',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
