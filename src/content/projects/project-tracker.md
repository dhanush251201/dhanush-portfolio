---
title: Project Tracker
summary: A TA workspace for supervising capstone teams, with meetings, decisions, blockers, two-sided task lists and a progress picture that keeps itself up to date. It has zero npm dependencies.
date: 2026-02-10
role: Solo project, used in my own TA work
tier: featured
order: 4
tags: [Full-Stack]
tech: [Node.js (built-in HTTP + SQLite), Vanilla JS, HTML/CSS, pm2]
metrics:
  - { value: "0", label: "npm dependencies" }
  - { value: "1 file", label: "local SQLite database" }
  - { value: "Auto", label: "backup before any destructive reset" }
---

## The problem

As a TA supervising several capstone teams, I was juggling meeting notes, what each team promised to do, what *I* promised to do for them, and a sense of which teams were drifting. That lived across docs, chats and memory.

## What it does

- **Teams and projects.** Title, stack, repo/demo/spec links, meeting slot, each student's role and GitHub handle, and my own read on the team (*on track / needs watching / at risk*).
- **Meetings.** Agenda, notes (paste transcripts straight in), decisions, blockers, attendance per student, "room temperature", and private thoughts that are deliberately left out of exported reports.
- **Tasks in two columns.** What the team owes and what I owe them, kept separate because they're different jobs. Team tasks link back to the meeting where they were agreed.
- **Progress.** A per-team picture that updates as meetings and tasks change.

## Design choices

The app uses only Node's built-in HTTP server and built-in SQLite, so there's nothing to install and nothing to break on upgrade. `npm run seed` loads a realistic half-semester of sample data, and `npm run reset` always takes a backup first.
