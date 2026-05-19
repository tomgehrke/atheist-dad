# atheist.dad

A Markdown-based Jekyll blog for sharing thoughts on living as an atheist in today’s world.

## What is included

- Jekyll site scaffold
- Jekyll site scaffold using the Chirpy theme
- Dark blog styling inspired by Chirpy
- Category metadata for `tech`, `art`, `science`, `opinion`, `atheism`
- Starter post in `_posts/`
- Basic homepage and post layout
- `claude.md` documenting the project goals and decisions
- `CNAME` file for custom domain deployment

## Local development

1. Install Ruby and Bundler
2. Run:

```bash
bundle install
bundle exec jekyll serve
```

3. Open http://127.0.0.1:4000

## Deployment

- Deploy with GitHub Pages
- Add the custom domain `atheist.dad` in the repository settings and via the `CNAME` file

## Content workflow

Create a markdown file in `_posts/` with front matter:

```yaml
title: "My Post Title"
date: 2026-04-11
categories: [atheism]
tags: [philosophy, culture]
description: "A short summary of the post."
```

Then commit and push to the GitHub repository.
