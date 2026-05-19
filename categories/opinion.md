---
layout: default
title: Opinion
category: opinion
description: "Opinion pieces, commentary, and personal reflection on modern life."
permalink: /categories/opinion/
---

{% assign archived_posts = site.posts | where_exp: "item", "item.categories contains 'opinion'" %}

<ul>
  {% for post in archived_posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
