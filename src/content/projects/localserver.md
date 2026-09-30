---
title: localserver
summary: One gateway for every site on my machine. It routes by domain and path, starts a backend on its first request, and stops it again when it goes idle, all managed from a web dashboard.
date: 2026-09-01
role: Solo project, design and implementation
tier: featured
order: 1
tags: [Systems, Full-Stack]
tech: [Node.js, TypeScript, React, Vite, SQLite, pm2, Bonjour / mDNS]
metrics:
  - { value: "45%", label: "median cold-start cut after applying my research" }
  - { value: "0", label: "/etc/hosts edits needed (*.localhost routing)" }
  - { value: "10 min", label: "default idle timeout, per-service override" }
---

## The problem

I run a dozen small web apps on my laptop: trackers, dashboards, experiments. Keeping every backend running all day wastes memory. Starting them by hand means remembering ports and commands. I wanted scale-to-zero, the thing cloud platforms do, for a single laptop.

## What it does

- **Routes by domain and path.** `time.localhost/` serves a static build, and `time.localhost/api` goes to that app's backend. An explicit host beats a wildcard, and then the longest path prefix wins.
- **Starts on demand, stops when idle.** A backend starts under pm2 on the first request and stops after a configurable idle period. A service with an open WebSocket or SSE connection is never considered idle.
- **Handles readiness.** The gateway waits for the port to accept connections, or for a health path to answer. A browser page load gets a self-refreshing "Starting…" page after 1.5 s, and API calls just wait.
- **Works on the LAN.** `*.local` names are published over Bonjour so a phone can reach `time.local` with no DNS setup. Non-loopback clients need an admin password.
- **Imports existing pm2 apps** from the dashboard, and re-adopts running processes when the gateway restarts.

## Architecture

```
browser ──:80──pf──▶ :8080  gateway (pm2 process "localserver")
                     ├─ localserver.localhost      → dashboard + /_api
                     ├─ time.localhost/            → static  time/dist
                     └─ time.localhost/api         → process ls-time-backend (started on demand)
```

The gateway is TypeScript that Node 25 runs directly, with no build step. State lives in a single SQLite database. The dashboard is a React + Vite app served by the gateway itself.

## Results

localserver became the test bed for two research papers: one on [where a cold start's time goes](../coldstart-study/) and one on [when to let a server sleep](../keepalive-study/). Applying the first paper's findings to the gateway's own control path cut its cold-start latency by a median of **45%** (29–59%) across 15 real servers.

## What I learned

Measure before optimizing. My guess was that the application's startup would dominate. For small servers, the launcher and the readiness polling cost more than the server did.
