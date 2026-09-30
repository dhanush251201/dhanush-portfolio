---
title: "When to Let a Personal Server Sleep: Keep-Alive Policies for On-Demand Web Apps on a Single User's Machine"
summary: A trace-driven simulator, validated against a live 6-hour run, compares keep-alive policies from production serverless against a simple fixed timeout on a single user's laptop. The fixed timeout wins.
date: 2026-09-25
role: Author
venue: Paper in progress
tier: research
order: 2
tags: [Research, Systems]
tech: [Node.js, Trace-driven simulation, Python (analysis), LaTeX]
paper: /papers/keepalive-study.pdf
metrics:
  - { value: "31 / 31", label: "live cold starts reproduced exactly by the simulator" }
  - { value: "47%", label: "less memory with a 10-min timeout vs. always-on" }
  - { value: "30", label: "synthetic single-user workloads × 3 load levels" }
---

## Question

A gateway that starts a personal web app on demand and stops it when idle must choose how long to wait. Every warm minute holds memory, and every stop risks a cold start that the one user feels. Serverless research has studied this for multi-tenant clouds. I studied it for **one person's laptop**.

## Method

- I instrumented [localserver](../localserver/) to log every request, cold start and memory sample.
- I built a trace-driven simulator and validated it against a 6-hour live run, where it reproduced all 31 of the gateway's cold starts exactly.
- A seeded workload generator models working and away periods, page loads with log-normal think times, and forgotten tabs that keep polling.

## Findings

- A fixed **10-minute timeout** holds **47% less memory** than always-on, at the cost of about 40 cold starts in six hours.
- **No online policy beats it** at equal cold starts. That includes the hybrid-histogram policy from production serverless, per-app learned thresholds, a context-aware variant and a global user-idle rule. All of them hold 3–14% more memory.
- An offline oracle holds 42% less. The headroom lies in predicting *which* idle gap will be long, and a single user's history doesn't reveal that.
- Freezing idle servers saves no memory, open dev-tool tabs pin their servers indefinitely, and pm2 under-reports a dev server's memory footprint by 3.8×.
