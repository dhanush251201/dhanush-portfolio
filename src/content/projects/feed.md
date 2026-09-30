---
title: Feed
summary: A Twitter-style social feed built phase by phase to learn production full-stack patterns end to end, from REST and React to Postgres, auth and cursor pagination.
date: 2026-06-01
role: Solo learning project
status: In progress
tier: more
order: 2
tags: [Full-Stack]
tech: [React, TypeScript, Express, PostgreSQL, Prisma, Docker]
---

## Why

I built it to understand each layer of a typical web product from first principles rather than from a template.

## Roadmap

1. **Backend fundamentals.** Express + TypeScript, routes, status codes, error-handling middleware. *(done)*
2. **Frontend.** React with Vite, state and effects, fetching the feed, and handling CORS.
3. **Real database.** Postgres in Docker, relational schema (users, posts, likes, follows), and Prisma migrations.
4. **Auth.** bcrypt password hashing, sessions vs. JWTs, and protected routes.
5. **Real features.** Per-user feeds, cursor-based pagination, and optimistic updates.
6. **Ship it.** A hosted backend, database and frontend.
