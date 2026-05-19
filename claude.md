# atheist.dad project record

## Purpose

Build a markdown-first Jekyll blog for `atheist.dad` that centers on life as an atheist in today’s world. The site should make it easy to write and maintain posts using Markdown, support tags for fine-grained discovery, and let visitors filter by broad categories.

## Decisions

- Static site generator: **Jekyll**
- Hosting: **GitHub Pages** via repository deployment and `CNAME`
- Categories: `tech`, `art`, `science`, `opinion`, `atheism`
- Tags: subtopic metadata for things like `photography`, `drawing`, `painting`, `culture`, `philosophy`, `personal-reflection`
- Design approach: Minimal custom scaffold, simple layouts, content-focused theme

## Goals

1. Keep writing and publishing simple with Markdown front matter
2. Make category filtering explicit and discoverable
3. Make tags available on each post for deeper navigation
4. Start with a clean, lightweight custom theme so the site remains easy to maintain

## Project scope

- Local development: `bundle exec jekyll serve`
- Post lifecycle: create markdown file in `_posts/`, commit, push, publish
- Domain configuration: `CNAME` file containing `atheist.dad`

## Future extensions

- Add search using a static search index or third-party search provider
- Add comments or discussion via external service if desired
- Add author profile and an explicit “about” or “start here” landing page
- Add tag archive generation and category landing pages if more navigation is needed
- Use dark Chirpy theme for the initial site design and layout

## Notes

- The first implementation focuses on structure and content organization.
- `README.md` and `claude.md` document the project so the site can be extended cleanly.
