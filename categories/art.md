---
layout: default
title: Art
category: art
description: "Posts about photography, drawing, painting, and creative expression."
permalink: /categories/art/
---

{% assign archived_posts = site.posts | where_exp: "item", "item.categories contains 'art'" %}

<ul>
  {% for post in archived_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
