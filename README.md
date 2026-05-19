# atheist.dad

Minimal Jekyll blog source for https://atheist.dad.

## Local development

Install dependencies and preview locally:

```bash
gem install bundler
bundle install --path vendor/bundle
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.

## Publish workflow

1. Commit and push source to GitHub.
2. GitHub Pages will build from the `main` branch.
3. Custom domain is configured in `CNAME`.
4. Add posts to `_posts/YYYY-MM-DD-title.md`.

## Post example

```markdown
---
layout: post
title: "My first post"
date: 2026-05-18 10:00:00 -0400
categories: [atheism]
tags: [welcome, intro]
---

Write your content here.
```
