---
title: Agentic AI Research Assistant
summary: A small, readable research agent. It searches the web, scrapes the top results and synthesizes a cited answer with a local LLM through Ollama, all written to show how tool-using agents work.
date: 2025-12-01
role: Solo project
tier: more
order: 3
tags: [AI]
tech: [Python, Ollama, DuckDuckGo search, BeautifulSoup]
---

## What it does

Given a question, the agent:

1. decides to search, and queries DuckDuckGo for relevant pages;
2. scrapes and cleans the text of the top three results;
3. asks a local LLM (via Ollama) to synthesize an answer grounded in those sources.

## Why

It's deliberately small, so the core agent loop (goal → tool choice → observation → synthesis) is easy to read and extend with new tools. Everything runs locally, with no API keys.
