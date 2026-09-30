import { url } from '../lib/url';
// Everything personal lives here. Components read from this file, so a link
// changes in one place. Search the project for "TODO" to find what to fill in.

export type SocialKey = 'github' | 'linkedin' | 'email' | 'resume' | 'scholar' | 'x' | 'leetcode';

export interface Social {
  key: SocialKey;
  label: string;
  href: string;
}

export const site = {
  name: 'Dhanush Gowdhaman',
  shortName: 'Dhanush',
  initials: 'DG',
  title: 'Software Engineer',
  headline: 'Software engineer building fast, dependable systems and the tools people actually use.',
  pitch:
    'I work across the stack, from gateways, process managers and performance studies down in the runtime to React front-ends people use every day. I care about measuring before optimizing and shipping software that stays out of the way.',
  location: 'Philadelphia, PA',
  email: 'dhanush.gowdhaman@gmail.com',
  resume: url('/resume.pdf'),
  // Shown as a badge in the hero and About section. Set to '' to hide it.
  availability: 'Open to new-grad software engineering roles', // TODO: adjust or clear
  description:
    'Dhanush Gowdhaman: software engineer working on systems, full-stack web apps, and performance research. Projects, experience, papers and contact.',
  repo: 'https://github.com/dhanush251201/dhanush-portfolio',
  // Set to a GoatCounter code (e.g. 'dhanush') to enable privacy-friendly analytics.
  goatcounter: '',
};

// Order here is the order the icons appear. Remove an entry to hide it.
export const socials: Social[] = [
  { key: 'github', label: 'GitHub', href: 'https://github.com/dhanush251201' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhanush-gowdhaman/' },
  { key: 'email', label: 'Email', href: `mailto:${site.email}` },
  { key: 'resume', label: 'Resume', href: site.resume },
  // { key: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=TODO' },
  // { key: 'leetcode', label: 'LeetCode', href: 'https://leetcode.com/u/TODO' },
  // { key: 'x', label: 'X', href: 'https://x.com/TODO' },
];

export const nav = [
  { href: url('/#about'), label: 'About', id: 'about' },
  { href: url('/#experience'), label: 'Experience', id: 'experience' },
  { href: url('/#projects'), label: 'Projects', id: 'projects' },
  { href: url('/#research'), label: 'Research', id: 'research' },
  { href: url('/#skills'), label: 'Skills', id: 'skills' },
  { href: url('/#contact'), label: 'Contact', id: 'contact' },
];
