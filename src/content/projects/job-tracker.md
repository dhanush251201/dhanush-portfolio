---
title: Job Tracker
summary: A local-first workspace for a new-grad job search, covering the pipeline, interview prep sheets, follow-ups and analytics, with optional Claude-powered resume matching and cover-letter drafts.
date: 2026-08-15
role: Solo project
tier: featured
order: 2
tags: [Full-Stack, AI]
tech: [React, TanStack Query, Node.js, SQLite, Zod, Anthropic Claude API, Vite]
metrics:
  - { value: "1 file", label: "all data in one local SQLite database" }
  - { value: "0", label: "accounts or telemetry" }
  - { value: "3", label: "AI assists: resume match, cover letter, interview Qs" }
---

## The problem

A job search is dozens of applications at different stages, each with its own deadlines, contacts and interview rounds. Spreadsheets lose the job description the day before your interview, and they never remind you to follow up.

## What it does

- **Pipeline.** Saved → Applied → OA/Screen → Interviewing → Offer, with drag-and-drop cards (tap to move on a phone). Every change is logged with a date.
- **Quick add from a URL.** It reads the schema.org `JobPosting` data that Greenhouse, Lever, Ashby and Workday publish, so the title, salary, location and full description are saved automatically.
- **Visa sponsorship tracking.** Companies and postings carry sponsorship flags. URL import detects "unable to sponsor" and clearance language, and the dashboard lists applications that might be a dead end.
- **Interview prep sheets.** Your notes, earlier rounds, the people involved and the job description on one printable page.
- **Follow-ups.** After 7 quiet days it offers a follow-up task, and after 21 it asks whether to mark the application ghosted.
- **Analytics.** A stage funnel, which sources lead to screens, median days to hear back, and pass rate by round type.
- **AI assist (optional, your own API key).** Resume/posting keyword match with a fit score and red flags, a cover letter grounded in your resume, and likely interview questions. Results are cached so reopening them costs nothing.
- An `.ics` calendar feed, global search (`/`), CSV export and JSON backup/restore.

## Design choices

Everything stays on your machine in a single SQLite file. The only data that ever leaves it is what you explicitly send to Claude. The app runs under pm2, and Tailscale gives private phone access from anywhere without exposing it to the internet.
