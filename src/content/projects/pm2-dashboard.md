---
title: PM2 Dashboard
summary: A local web UI that covers every pm2 CLI command, from processes, live logs and metrics to a browser terminal attached to a process, ecosystem files, deploys and daemon admin.
date: 2026-07-20
role: Solo project
tier: featured
order: 3
tags: [Systems, Full-Stack]
tech: [React, TypeScript, Fastify, WebSockets, xterm.js, uPlot, CodeMirror, Tailwind CSS]
metrics:
  - { value: "100%", label: "of pm2 CLI commands mapped to the UI" }
  - { value: "Live", label: "logs and metrics over WebSockets" }
  - { value: "127.0.0.1", label: "only, with one-time token auth" }
---

## The problem

pm2 is a great process manager, but its CLI is wide: about 60 commands. The built-in `monit` view is terminal-only, and the hosted dashboard is a paid SaaS. I wanted a local, complete UI that talks to the daemon already running on my machine.

## What it does

It talks to the existing pm2 daemon (`~/.pm2`), so anything done in the dashboard shows up in `pm2 ls` and vice versa.

- **Processes.** A live table with CPU and memory sparklines, bulk actions, namespaces, scaling and signals.
- **Logs.** Live and historical logs with filtering, regex search and download.
- **Terminal.** An xterm.js session attached to a process's stdin. Enter sends a line and Ctrl+C sends SIGINT.
- **Ecosystem editor.** Edit and apply ecosystem files with `--only`/`--env`, or generate one from running processes.
- **Deploy, modules and system.** Setup, update, revert, startup scripts, logrotate, save/resurrect and more.

## Security

The server binds to `127.0.0.1` only. On startup it prints a URL with a one-time token, which the page swaps for an HTTP-only cookie. Deleting the token file revokes every session.

## Architecture

It's an npm workspace with a **Fastify** server (pm2's programmatic API, `@fastify/websocket` for streams) and a **React + Vite** client (uPlot for charts, CodeMirror for editing ecosystem files, xterm.js for the terminal).
