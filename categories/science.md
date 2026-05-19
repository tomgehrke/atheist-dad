---
layout: default
title: Science
category: science
description: "Posts about scientific thinking, evidence, and the natural world."
permalink: /categories/science/
---

{% assign archived_posts = site.posts | where_exp: "item", "item.categories contains 'science'" %}

<ul>
  {% for post in archived_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
