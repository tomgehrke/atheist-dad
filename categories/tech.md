---
layout: default
title: Tech
category: tech
description: "Posts about technology, digital culture, tools, and how tech intersects with secular life."
permalink: /categories/tech/
---

{% assign archived_posts = site.posts | where_exp: "item", "item.categories contains 'tech'" %}

<ul>
  {% for post in archived_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
