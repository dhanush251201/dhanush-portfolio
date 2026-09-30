# Portfolio: Dhanush Gowdhaman

My personal site: projects, experience, research papers and contact. It's a static site built with
[Astro](https://astro.build) and Tailwind CSS, and deploys to GitHub Pages on every push to `main`.

## Run it

Node 22.12 or newer.

```bash
npm install
npm run dev       # http://localhost:4321/dhanush-portfolio/ with hot reload
npm run build     # type-check, then build to dist/ for GitHub Pages
npm run preview   # serve the built dist/ locally
```

To host it on localserver at http://portfolio.localhost/ (served from the root, not a subpath):

```bash
npm run build:local   # build to dist/ with SITE=http://portfolio.localhost and BASE=/
npm run dev:local     # same, with hot reload
```

In localserver, point the app's static service at `dist/` and set its build command to `npm run build:local`.

## Where the content lives

You shouldn't need to touch components to update the site:

| What | File |
|---|---|
| Name, headline, email, location, social links, availability badge | `src/data/site.ts` |
| Jobs (timeline) | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Skills | `src/data/skills.ts` |
| Projects and papers (one Markdown file each) | `src/content/projects/*.md` |
| About-me text | `src/components/About.astro` |
| Resume | `public/resume.pdf` |
| Paper PDFs | `public/papers/` |
| Headshot (optional; replaces the initials) | `src/assets/avatar.jpg` (or `.png` / `.webp`) |
| Link-preview image | `public/og-image.png`, regenerated with `node scripts/og-image.mjs` |

Search for `TODO` to find everything that still needs your details.

### Adding a project

Create `src/content/projects/my-project.md`. It shows up on the home page and gets its own page at
`/projects/my-project/`. The frontmatter is validated at build time (see `src/content.config.ts`):

```yaml
---
title: My Project
summary: One or two sentences for the card.
date: 2026-01-15
role: Solo project
tier: featured          # featured | research | more
order: 5                # lower comes first within a tier
tags: [Full-Stack, AI]  # Systems | Full-Stack | AI | Research | Exploration
tech: [React, Node.js]
github: https://github.com/dhanush251201/my-project   # optional
demo: https://example.com                            # optional
cover: ../../assets/projects/my-project.png           # optional screenshot
metrics:                                              # optional, up to 3 shown on the card
  - { value: "2×", label: "faster builds" }
---

## The problem
…
```

## Deploying

The site lives in the [dhanush-portfolio](https://github.com/dhanush251201/dhanush-portfolio) repository and is
served at **https://dhanush251201.github.io/dhanush-portfolio/**.

- Each push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
- One-time setup: in the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

Because the site is served from a subpath, `astro.config.mjs` defaults to `base: '/dhanush-portfolio'`, and
internal links go through the `url()` helper in `src/lib/url.ts`. In Markdown, link to other projects relatively,
e.g. `[localserver](../localserver/)`.

The `SITE` and `BASE` environment variables override those defaults for any other host (see `build:local` above).
To move the site to the root of GitHub Pages (the `dhanush251201.github.io` repository) or a custom domain, change
the defaults in `astro.config.mjs`. For a custom domain, also add `public/CNAME`.

## Optional analytics

Set `goatcounter` in `src/data/site.ts` to your [GoatCounter](https://www.goatcounter.com) code for
privacy-friendly, cookie-free page counts. It's off by default.
