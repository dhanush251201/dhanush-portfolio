// The site is served from a subpath (see `base` in astro.config.mjs), so internal
// links must carry that prefix. Use url('/path') instead of a bare '/path'.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
