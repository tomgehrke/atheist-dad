# atheist.dad — Jekyll source

This repository contains the source for https://atheist.dad built with Jekyll.

Local development

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

DNS / Cloudflare (Apex + www)

- Create A records for `@` pointing to GitHub Pages IPs:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

- Create a CNAME record for `www` pointing to `tomgehrke.github.io`.
- Important: set Cloudflare proxied state to DNS-only (grey cloud). Do NOT enable Cloudflare proxy for GitHub Pages when using an apex CNAME.

Publishing to GitHub Pages

1. Create a new GitHub repo (or reuse this one).
2. Push this repo to GitHub and in Settings → Pages set Source to `main` branch (root) and set the Custom domain to `atheist.dad` (or let the `CNAME` file handle that).
3. Wait for GitHub Pages to provision an HTTPS certificate and then enable "Enforce HTTPS" in Pages settings.

Analytics

Add your analytics ID to `_config.yml` under `google_analytics` or edit the `default.html` layout to include your provider's snippet.

Search

This scaffold includes a small `search.json` and a client-side `assets/js/search.js` that loads it. Update `search.json` during authoring or add a build step to generate it automatically.
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
