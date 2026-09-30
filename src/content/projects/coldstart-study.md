---
title: "Where Does the Time Go? Cold Starts of On-Demand Node.js Web Servers on a Personal Machine"
summary: I measured 15 real Node.js servers, from bare node:http to Next.js and NestJS, to find where a cold start's time goes and what a gateway can do about it without touching the app. Applying the findings cut cold-start latency by a median of 45%.
date: 2026-09-20
role: Author
venue: Paper in progress
tier: research
order: 1
tags: [Research, Systems]
tech: [Node.js 25, V8 CPU profiling, Python (analysis), LaTeX]
paper: /papers/coldstart-study.pdf
metrics:
  - { value: "45–576 ms", label: "cold starts across 15 servers (median 87 ms)" }
  - { value: "0.62×", label: "latency factor with a pre-started runtime pool" }
  - { value: "45%", label: "median cold-start cut in the gateway" }
---

## Question

Scale-to-zero is no longer only a cloud feature. Developers run gateways (like my own [localserver](../localserver/)) that start a web server when its domain is first requested and stop it when idle. Where does that cold start go for real Node.js servers, and what can the gateway do about it **without changing the applications**?

## Method

- A preloaded probe (`--require`) records startup milestones, module loading, `listen()` and a CPU profile. The applications themselves aren't modified.
- The corpus is 15 servers: framework baselines, self-hosted npm apps, and my own personal apps. All ran on an Apple M4 Pro under Node.js 25.
- Every number, table and figure in the paper is generated from raw data by one analysis script.

## Findings

- Cold starts take **45–576 ms (median 87 ms)**: a fixed runtime floor, then initialization that the module system dominates and that grows with the number of modules loaded.
- **For small servers the launcher costs more than the server.** 150 ms readiness polling and pm2's default monitoring agent add measurable overhead to every start.
- Of six application-transparent techniques, a **pool of pre-started runtimes** helps most (geometric-mean latency factor 0.62). Bundling helps where it is correct (11 of 15 servers). V8's compile cache barely helps, and user-land startup snapshots are infeasible because `node:http` cannot be serialized.
- **Freezing** an idle server resumes in 2.3 ms but keeps all of its memory.
- Applying the findings to the gateway's control path cut cold-start latency by a **median of 45%** (29–59%).
