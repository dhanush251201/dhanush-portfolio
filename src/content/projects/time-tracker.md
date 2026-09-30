---
title: Time Tracker
summary: Logs work sessions across multiple campus jobs, each with its own hourly rate and weekly hour target, and shows per-job weekly stats and earnings over any date range.
date: 2025-10-01
role: Solo project
tier: more
order: 1
tags: [Full-Stack]
tech: [React, TypeScript, Vite, Tailwind CSS, Express, pm2]
github: https://github.com/dhanush251201/time-tracker
---

## What it does

I work several part-time jobs at Penn, each with a different rate and weekly hour cap. Time Tracker logs sessions against a job and shows how many hours I have left this week for each one, plus total earnings for any date range.

## How it's built

- **Frontend:** React 18 + TypeScript + Vite + Tailwind, with Markdown notes on entries.
- **Backend:** an Express REST API that persists to JSON files.
- Both run under pm2, and later moved behind [localserver](../localserver/) so the backend only runs while I'm using it.
